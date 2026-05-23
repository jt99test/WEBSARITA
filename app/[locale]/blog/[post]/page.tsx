import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { getBlogPostAlternates } from "@/lib/blog-alternates";
import { isLocale, locales } from "@/lib/locales";
import { getRequestOrigin } from "@/lib/request-origin";
import { sanityClient } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { blogPostBySlugQuery, blogPostSlugsQuery } from "@/lib/sanity/queries";
import { buildPageMetadata } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    locale: string;
    post: string;
  }>;
};

type BlogPost = {
  title: string;
  slug: string;
  language: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: {
    alt?: string;
  };
  wixCoverImageUrl?: string;
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
};

type BlogPostSlug = {
  language: string;
  slug: string;
};

async function getPost(locale: string, slug: string) {
  return sanityClient.fetch<BlogPost | null>(
    blogPostBySlugQuery,
    { locale, slug },
    { next: { revalidate: 60 } },
  );
}

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<BlogPostSlug[]>(blogPostSlugsQuery);

  return slugs
    .filter((post) => isLocale(post.language))
    .map((post) => ({
      locale: post.language,
      post: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, post } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const article = await getPost(locale, post);

  if (!article) {
    return {};
  }

  const blogAlternates = getBlogPostAlternates(locale, article.slug);

  return buildPageMetadata(
    locale,
    {
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt ?? article.title,
      path: `blog/${article.slug}`,
    },
    {
      origin: await getRequestOrigin(),
      languages: Object.fromEntries(
        Object.entries(blogAlternates).map(([alternateLocale, alternateSlug]) => [
          alternateLocale,
          `/${alternateLocale}/blog/${alternateSlug}`,
        ]),
      ),
    },
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, post } = await params;

  if (!isLocale(locale) || !locales.includes(locale)) {
    notFound();
  }

  const article = await getPost(locale, post);

  if (!article) {
    notFound();
  }

  return (
    <article className="blog-post-section">
      <header className="blog-post-header">
        <p className="eyebrow">Blog</p>
        <h1 className="section-title">{article.title}</h1>
        {article.publishedAt ? (
          <time dateTime={article.publishedAt}>
            {new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
              new Date(article.publishedAt),
            )}
          </time>
        ) : null}
      </header>

      {article.mainImage || article.wixCoverImageUrl ? (
        <Image
          className="blog-post-image"
          src={
            article.mainImage
              ? urlForImage(article.mainImage).width(1400).height(820).url()
              : article.wixCoverImageUrl!
          }
          alt={article.mainImage?.alt ?? ""}
          width={1400}
          height={820}
          priority
        />
      ) : null}

      <div className="blog-post-body">
        {article.body ? <PortableText value={article.body} /> : null}
      </div>
    </article>
  );
}
