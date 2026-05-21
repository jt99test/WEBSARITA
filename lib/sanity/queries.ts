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
    },
    wixCoverImageUrl
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
    wixCoverImageUrl,
    body,
    seoTitle,
    seoDescription,
    legacyWixUrl
  }
`;

export const trainingOffersQuery = groq`
  *[
    _type == "trainingOffer" &&
    language == $locale &&
    isVisible == true &&
    status != "past"
  ] | order(sortOrder asc, _createdAt asc) {
    _id,
    title,
    status,
    location,
    dateLabel,
    price,
    summary,
    details,
    ctaLabel,
    ctaUrl
  }
`;
