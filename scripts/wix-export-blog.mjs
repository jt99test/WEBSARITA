import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "docs", "generated");
const rawOut = path.join(outDir, "wix-blog-posts.raw.json");
const sanityOut = path.join(outDir, "wix-blog-posts.sanity.ndjson");
const reportOut = path.join(outDir, "wix-blog-posts.report.md");

function readDotEnv(text) {
  const env = {};

  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    env[key] = rawValue.replace(/^["']|["']$/g, "");
  }

  return env;
}

async function loadEnv() {
  try {
    const text = await readFile(path.join(root, ".env.local"), "utf8");
    Object.assign(process.env, readDotEnv(text));
  } catch {
    // .env.local is optional. Real environment variables also work.
  }
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}. Add it to .env.local and rerun this script.`);
  }
  return value;
}

function authHeader(apiKey) {
  return apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`;
}

function wixHeaders() {
  const headers = {
    Authorization: authHeader(requiredEnv("WIX_API_KEY")),
    "Content-Type": "application/json",
  };

  if (process.env.WIX_ACCOUNT_ID) {
    headers["wix-account-id"] = process.env.WIX_ACCOUNT_ID;
  }

  if (process.env.WIX_SITE_ID) {
    headers["wix-site-id"] = process.env.WIX_SITE_ID;
  }

  return headers;
}

function redactHeaders(headers) {
  return Object.fromEntries(
    Object.entries(headers).map(([key, value]) => [
      key,
      key.toLowerCase() === "authorization" ? "Bearer ***" : value,
    ]),
  );
}

async function wixRequest(url, options) {
  const response = await fetch(url, options);
  const text = await response.text();

  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    // Keep the raw text for useful errors.
  }

  if (!response.ok) {
    throw new Error(
      [
        `Wix request failed: ${response.status} ${response.statusText}`,
        `URL: ${url}`,
        text.slice(0, 1200),
      ].join("\n"),
    );
  }

  return json;
}

async function queryPostsPage(offset, limit) {
  const url = new URL("https://www.wixapis.com/v3/posts/query");
  for (const field of ["CONTENT_TEXT", "RICH_CONTENT", "URL", "SEO", "METRICS"]) {
    url.searchParams.append("fieldsToInclude", field);
    url.searchParams.append("fieldsets", field);
  }

  return wixRequest(url.toString(), {
    method: "POST",
    headers: wixHeaders(),
    body: JSON.stringify({
      query: {
        paging: { limit, offset },
        sort: [{ fieldName: "firstPublishedDate", order: "DESC" }],
      },
    }),
  });
}

async function listPostsPage(offset, limit) {
  const url = new URL("https://www.wixapis.com/v3/posts");
  url.searchParams.set("paging.limit", String(limit));
  url.searchParams.set("paging.offset", String(offset));
  for (const field of ["CONTENT_TEXT", "RICH_CONTENT", "URL", "SEO", "METRICS"]) {
    url.searchParams.append("fieldsToInclude", field);
    url.searchParams.append("fieldsets", field);
  }

  return wixRequest(url, {
    method: "GET",
    headers: wixHeaders(),
  });
}

async function getPost(postId) {
  const endpoints = [
    new URL(`https://www.wixapis.com/v3/posts/${postId}`),
    new URL(`https://www.wixapis.com/blog/v3/posts/${postId}`),
  ];

  for (const url of endpoints) {
    for (const field of ["CONTENT_TEXT", "RICH_CONTENT", "URL", "SEO", "METRICS"]) {
      url.searchParams.append("fieldsToInclude", field);
      url.searchParams.append("fieldsets", field);
    }
  }

  for (const url of endpoints) {
    try {
      const response = await wixRequest(url, {
        method: "GET",
        headers: wixHeaders(),
      });
      return response?.post ?? response;
    } catch {
      // Try the next documented/legacy endpoint.
    }
  }

  return null;
}

function getPostsFromResponse(response) {
  return response?.posts ?? response?.items ?? response?.results ?? [];
}

function getTotalFromResponse(response, fallback) {
  return (
    response?.pagingMetadata?.total ??
    response?.metadata?.total ??
    response?.totalCount ??
    fallback
  );
}

async function fetchAllPosts() {
  const limit = Number(process.env.WIX_PAGE_LIMIT ?? 100);
  const posts = [];
  let offset = 0;
  let total = Infinity;
  let mode = "query";

  while (offset < total) {
    let response;

    try {
      response =
        mode === "query"
          ? await queryPostsPage(offset, limit)
          : await listPostsPage(offset, limit);
    } catch (error) {
      if (offset === 0 && mode === "query") {
        console.warn("Query endpoint failed; trying list endpoint instead.");
        console.warn(error.message);
        mode = "list";
        response = await listPostsPage(offset, limit);
      } else {
        throw error;
      }
    }

    const pagePosts = getPostsFromResponse(response);
    posts.push(...pagePosts);
    total = getTotalFromResponse(response, posts.length + pagePosts.length);

    console.log(`Fetched ${posts.length}${Number.isFinite(total) ? `/${total}` : ""} posts`);

    if (pagePosts.length < limit) break;
    offset += limit;
  }

  return posts;
}

async function hydratePosts(posts) {
  const hydrated = [];

  for (let index = 0; index < posts.length; index += 1) {
    const post = posts[index];
    const detailed = await getPost(post.id);
    hydrated.push(detailed ? { ...post, ...detailed } : post);
    console.log(`Hydrated ${index + 1}/${posts.length} posts`);
  }

  return hydrated;
}

function slugify(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function pickLanguage(post) {
  const language = String(post.language ?? post.locale ?? "").toLowerCase();
  if (language.startsWith("it")) return "it";
  if (language.startsWith("es")) return "es";
  if (language.startsWith("en")) return "en";

  const url = post.url?.url ?? post.url ?? post.postPageUrl ?? "";
  if (url.includes("/it/")) return "it";
  if (url.includes("/es/")) return "es";
  return "en";
}

function postUrl(post, language, slug) {
  const url = post.url?.url ?? post.url ?? post.postPageUrl ?? post.link;
  if (typeof url === "string" && url.startsWith("http")) return url;

  const prefix = language === "en" ? "" : `/${language}`;
  return `https://www.youryogapills.org${prefix}/post/${slug}`;
}

function plainPortableText(text) {
  const blocks = String(text ?? "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => ({
    _type: "block",
    _key: `block-${index}`,
    style: index === 0 ? "h2" : "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `span-${index}`,
        text: block,
        marks: [],
      },
    ],
  }));
}

function richContentToText(richContent) {
  const parts = [];

  function walk(value) {
    if (!value || typeof value !== "object") return;

    if (typeof value.text === "string") {
      parts.push(value.text);
    }

    if (Array.isArray(value.nodes)) {
      parts.push("\n\n");
      value.nodes.forEach(walk);
      parts.push("\n\n");
    }

    for (const child of Object.values(value)) {
      if (Array.isArray(child)) child.forEach(walk);
      else if (child && typeof child === "object") walk(child);
    }
  }

  walk(richContent);

  return parts
    .join("")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function toSanityDraft(post) {
  const title = post.title ?? post.seoData?.tags?.title ?? "Untitled post";
  const language = pickLanguage(post);
  const slug = slugify(post.slug ?? post.url?.path?.split("/").pop() ?? title);
  const richText = richContentToText(post.richContent);
  const contentText =
    post.contentText ?? richText ?? post.excerpt ?? post.description ?? "";
  const seoTitle = post.seoData?.tags?.title ?? post.seoTitle ?? title;
  const seoDescription =
    post.seoData?.tags?.description ??
    post.seoDescription ??
    post.excerpt ??
    post.description ??
    "";
  const legacyWixUrl = postUrl(post, language, slug);

  return {
    _type: "blogPost",
    _id: `wix-${post.id ?? post._id ?? slug}`,
    title,
    slug: {
      _type: "slug",
      current: slug,
    },
    language,
    excerpt: post.excerpt ?? post.description ?? "",
    publishedAt:
      post.firstPublishedDate ??
      post.lastPublishedDate ??
      post.publishedDate ??
      post.createdDate ??
      new Date().toISOString(),
    body: plainPortableText(contentText),
    seoTitle,
    seoDescription,
    legacyWixUrl,
    wixMigration: {
      id: post.id ?? post._id,
      translationId: post.translationId,
      sourceUrl: legacyWixUrl,
      coverMedia: post.coverMedia ?? post.media ?? null,
      hasRichContent: Boolean(post.richContent),
      hasContentText: Boolean(post.contentText),
      isRetreatRelated: /retreat|retiro|ritiri|costa-brava|spain/i.test(
        `${title} ${legacyWixUrl}`,
      ),
    },
  };
}

function report(posts, sanityDrafts) {
  const byLanguage = sanityDrafts.reduce((acc, post) => {
    acc[post.language] = (acc[post.language] ?? 0) + 1;
    return acc;
  }, {});
  const retreatPosts = sanityDrafts.filter((post) => post.wixMigration.isRetreatRelated);

  return [
    "# Wix Blog Export Report",
    "",
    `Fetched posts: ${posts.length}`,
    `Sanity drafts: ${sanityDrafts.length}`,
    "",
    "## By Language",
    "",
    ...Object.entries(byLanguage).map(([language, count]) => `- ${language}: ${count}`),
    "",
    "## Retreat-Related Posts",
    "",
    retreatPosts.length
      ? retreatPosts
          .map((post) => `- ${post.title} -> ${post.wixMigration.sourceUrl}`)
          .join("\n")
      : "None detected.",
    "",
    "## Next",
    "",
    "Review `wix-blog-posts.sanity.ndjson` before importing into Sanity.",
    "Posts marked retreat-related should usually stay redirected to Coaching instead of being imported.",
    "",
  ].join("\n");
}

async function main() {
  await loadEnv();
  console.log("Using Wix headers:", redactHeaders(wixHeaders()));
  const posts = await hydratePosts(await fetchAllPosts());
  const sanityDrafts = posts.map(toSanityDraft);

  await mkdir(outDir, { recursive: true });
  await writeFile(rawOut, `${JSON.stringify(posts, null, 2)}\n`);
  await writeFile(sanityOut, `${sanityDrafts.map((post) => JSON.stringify(post)).join("\n")}\n`);
  await writeFile(reportOut, report(posts, sanityDrafts));

  console.log(`Wrote ${rawOut}`);
  console.log(`Wrote ${sanityOut}`);
  console.log(`Wrote ${reportOut}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
