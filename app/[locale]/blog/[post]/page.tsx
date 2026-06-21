import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { getBlogPostAlternates } from "@/lib/blog-alternates";
import { isLocale, locales } from "@/lib/locales";
import { getRequestOrigin } from "@/lib/request-origin";
import { sanityClient } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { blogPostBySlugQuery, blogPostSlugsQuery } from "@/lib/sanity/queries";
import { buildPageMetadata, siteConfig } from "@/lib/site";
import { buildBreadcrumbStructuredData } from "@/lib/structured-data";

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

const relatedLinks = {
  it: {
    heading: "Ti può interessare anche",
    links: [
      { href: "/it/coaching", label: "Astrologia psicologica a Barcellona" },
      { href: "/it/coaching#services", label: "Carta natale e coaching astrologico" },
      { href: "/it/training", label: "Yoga terapeutico e meditazione" },
    ],
  },
  es: {
    heading: "También te puede interesar",
    links: [
      { href: "/es/coaching", label: "Astrología psicológica Barcelona" },
      { href: "/es/coaching#services", label: "Carta natal Barcelona" },
      { href: "/es/training", label: "Yoga terapéutico Barcelona" },
    ],
  },
  en: {
    heading: "You may also be interested in",
    links: [
      { href: "/en/coaching", label: "Psychological astrology in Barcelona" },
      { href: "/en/coaching#services", label: "Natal chart readings" },
      { href: "/en/training", label: "Therapeutic yoga and meditation" },
    ],
  },
};

const coverImageAltPrefix = {
  it: "Immagine principale per",
  es: "Imagen principal de",
  en: "Main image for",
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
  const origin = await getRequestOrigin();
  const ogImage = article.mainImage
    ? urlForImage(article.mainImage).width(1200).height(630).url()
    : article.wixCoverImageUrl;

  return buildPageMetadata(
    locale,
    {
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt ?? article.title,
      path: `blog/${article.slug}`,
    },
    {
      origin,
      languages: Object.fromEntries(
        Object.entries(blogAlternates).map(([alternateLocale, alternateSlug]) => [
          alternateLocale,
          `/${alternateLocale}/blog/${alternateSlug}`,
        ]),
      ),
      image: ogImage ?? undefined,
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

  const origin = await getRequestOrigin();
  const pageUrl = new URL(`/${locale}/blog/${article.slug}`, origin).toString();
  const imageUrl = article.mainImage
    ? urlForImage(article.mainImage).width(1200).height(630).url()
    : article.wixCoverImageUrl;
  const imageAlt =
    article.mainImage?.alt?.trim() || `${coverImageAltPrefix[locale]} ${article.title}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription ?? article.excerpt ?? article.title,
    inLanguage: locale,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: origin,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: origin,
      logo: {
        "@type": "ImageObject",
        url: new URL("/brand/sarita-logo-transparent.png", origin).toString(),
      },
    },
    ...(article.publishedAt
      ? {
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
        }
      : {}),
    ...(imageUrl ? { image: [imageUrl] } : {}),
  };

  return (
    <article className="blog-post-section">
      <JsonLd data={articleSchema} />
      <JsonLd
        data={buildBreadcrumbStructuredData(locale, [
          { name: "Sarita Shakti", path: `/${locale}` },
          { name: "Blog", path: `/${locale}/blog` },
          { name: article.title, path: `/${locale}/blog/${article.slug}` },
        ])}
      />
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
          alt={imageAlt}
          width={1400}
          height={820}
          sizes="100vw"
          priority
        />
      ) : null}

      <div className="blog-post-body">
        {article.body ? <PortableText value={article.body} /> : null}
      </div>

      <aside className="panel related-links-panel">
        <h2>{relatedLinks[locale].heading}</h2>
        <div className="related-links-list">
          {relatedLinks[locale].links.map((link) => (
            <Link className="ghost-gold-button" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </article>
  );
}
