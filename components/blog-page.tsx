import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { blogPostListQuery } from "@/lib/sanity/queries";
import { Locale } from "@/lib/locales";

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

const labels: Record<
  Locale,
  {
    empty: string;
    read: string;
  }
> = {
  it: {
    empty: "Gli articoli verranno pubblicati qui appena saranno migrati in Sanity.",
    read: "Leggi articolo",
  },
  es: {
    empty: "Los artículos aparecerán aquí cuando estén migrados en Sanity.",
    read: "Leer artículo",
  },
  en: {
    empty: "Articles will appear here once they are migrated into Sanity.",
    read: "Read article",
  },
};

export async function BlogPage({ locale }: { locale: Locale }) {
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

  return (
    <section className="blog-section">
      <div className="blog-heading">
        <p className="eyebrow">Blog</p>
        <h1 className="section-title">Blog</h1>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
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
              />
            ) : null}
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
    </section>
  );
}
