import { groq } from "next-sanity";

export const blogPostListQuery = groq`
  *[_type == "blogPost" && language == $locale] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage {
      ...,
      "alt": alt
    }
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] {
    language,
    "slug": slug.current
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && language == $locale && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    language,
    excerpt,
    publishedAt,
    mainImage {
      ...,
      "alt": alt
    },
    body,
    seoTitle,
    seoDescription,
    legacyWixUrl
  }
`;
