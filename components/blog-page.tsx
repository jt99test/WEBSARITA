import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/locales";
import { sanityClient } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { blogPostListQuery } from "@/lib/sanity/queries";

type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: {
    alt?: string;
  };
  wixCoverImageUrl?: string;
};

const POSTS_PER_PAGE = 12;

const labels: Record<
  Locale,
  {
    empty: string;
    read: string;
    previous: string;
    next: string;
    pageLabel: string;
  }
> = {
  it: {
    empty: "Gli articoli verranno pubblicati qui appena saranno migrati in Sanity.",
    read: "Leggi articolo",
    previous: "Articoli precedenti",
    next: "Articoli successivi",
    pageLabel: "Pagina",
  },
  es: {
    empty: "Los artículos aparecerán aquí cuando estén migrados en Sanity.",
    read: "Leer artículo",
    previous: "Artículos anteriores",
    next: "Artículos siguientes",
    pageLabel: "Página",
  },
  en: {
    empty: "Articles will appear here once they are migrated into Sanity.",
    read: "Read article",
    previous: "Previous articles",
    next: "Next articles",
    pageLabel: "Page",
  },
};

export async function BlogPage({
  locale,
  page = 1,
}: {
  locale: Locale;
  page?: number;
}) {
  const posts = await sanityClient.fetch<BlogPostListItem[]>(
    blogPostListQuery,
    { locale },
    { next: { revalidate: 60 } },
  );

  if (!posts.length) {
    return (
      <section className="page-section">
        <div className="page-copy">
          <p className="eyebrow">Blog</p>
          <h1 className="section-title">Blog</h1>
          <p className="page-intro">{labels[locale].empty}</p>
        </div>
      </section>
    );
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const visiblePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );
  const blogPath = `/${locale}/blog`;
  const previousHref =
    currentPage <= 2 ? blogPath : `${blogPath}?page=${currentPage - 1}`;
  const nextHref = `${blogPath}?page=${currentPage + 1}`;

  return (
    <section className="blog-section">
      <div className="blog-heading">
        <p className="eyebrow">Blog</p>
        <h1 className="section-title">Blog</h1>
        {totalPages > 1 ? (
          <p className="blog-page-count">
            {labels[locale].pageLabel} {currentPage} / {totalPages}
          </p>
        ) : null}
      </div>
      <div className="blog-grid">
        {visiblePosts.map((post, index) => (
          <article className="panel blog-card" key={post._id}>
            {post.mainImage || post.wixCoverImageUrl ? (
              <Image
                className="blog-card-image"
                src={
                  post.mainImage
                    ? urlForImage(post.mainImage).width(900).height(620).url()
                    : post.wixCoverImageUrl!
                }
                alt={post.mainImage?.alt ?? ""}
                width={900}
                height={620}
                sizes="(max-width: 820px) 100vw, (max-width: 1040px) 50vw, 33vw"
              />
            ) : (
              <div className="blog-card-placeholder" aria-hidden="true">
                <span>
                  {String(index + 1 + (currentPage - 1) * POSTS_PER_PAGE).padStart(
                    2,
                    "0",
                  )}
                </span>
              </div>
            )}
            <div className="blog-card-copy">
              <time dateTime={post.publishedAt}>
                {post.publishedAt
                  ? new Intl.DateTimeFormat(locale, {
                      dateStyle: "medium",
                    }).format(new Date(post.publishedAt))
                  : null}
              </time>
              <h2>{post.title}</h2>
              {post.excerpt ? <p>{post.excerpt}</p> : null}
              <Link className="ghost-gold-button" href={`/${locale}/blog/${post.slug}`}>
                {labels[locale].read}
              </Link>
            </div>
          </article>
        ))}
      </div>
      {totalPages > 1 ? (
        <nav className="blog-pagination" aria-label="Blog pagination">
          {currentPage > 1 ? (
            <Link className="ghost-gold-button" href={previousHref}>
              {labels[locale].previous}
            </Link>
          ) : (
            <span />
          )}
          {currentPage < totalPages ? (
            <Link className="primary-button" href={nextHref}>
              {labels[locale].next}
            </Link>
          ) : null}
        </nav>
      ) : null}
    </section>
  );
}
