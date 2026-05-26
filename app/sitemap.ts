import type { MetadataRoute } from "next";
import { getBlogPostAlternates } from "@/lib/blog-alternates";
import { isLocale, Locale, locales } from "@/lib/locales";
import { pageSlugs } from "@/lib/page-content";
import { sanityClient } from "@/lib/sanity/client";
import { blogPostSlugsQuery } from "@/lib/sanity/queries";
import { buildLocalizedPath, siteConfig } from "@/lib/site";

type BlogPostSlug = {
  language: string;
  slug: string;
};

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

function localizedAlternates(path = "") {
  return {
    languages: Object.fromEntries(
      [
        ...locales.map((locale) => [
          locale,
          absoluteUrl(buildLocalizedPath(locale, path)),
        ]),
        ["x-default", absoluteUrl(buildLocalizedPath("es", path))],
      ],
    ),
  };
}

function blogAlternates(locale: Locale, slug: string) {
  const alternates = getBlogPostAlternates(locale, slug);
  const defaultSlug = alternates.es ?? slug;

  return {
    languages: Object.fromEntries(
      [
        ...Object.entries(alternates).map(([alternateLocale, alternateSlug]) => [
          alternateLocale,
          absoluteUrl(`/${alternateLocale}/blog/${alternateSlug}`),
        ]),
        ["x-default", absoluteUrl(`/es/blog/${defaultSlug}`)],
      ],
    ),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const homeEntries = locales.map((locale) => ({
    url: absoluteUrl(buildLocalizedPath(locale)),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "es" ? 1 : 0.9,
    alternates: localizedAlternates(),
  }));

  const pageEntries = pageSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: absoluteUrl(buildLocalizedPath(locale, slug)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug === "blog" ? 0.7 : 0.85,
      alternates: localizedAlternates(slug),
    })),
  );

  const blogSlugs = await sanityClient.fetch<BlogPostSlug[]>(blogPostSlugsQuery);
  const blogEntries = blogSlugs
    .filter((post): post is BlogPostSlug & { language: Locale } =>
      isLocale(post.language),
    )
    .map((post) => ({
      url: absoluteUrl(`/${post.language}/blog/${post.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: blogAlternates(post.language, post.slug),
    }));

  return [...homeEntries, ...pageEntries, ...blogEntries];
}
