import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Italian", value: "it" },
          { title: "Spanish", value: "es" },
          { title: "English", value: "en" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Short summary",
      description: "Shown on blog lists and used as the SEO description.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(180),
    }),
    defineField({
      name: "publishedAt",
      title: "Publish date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for accessibility and SEO.",
        }),
      ],
    }),
    defineField({
      name: "wixCoverImageUrl",
      title: "Migrated Wix cover image URL",
      description:
        "Temporary source image from Wix. Replace with Main image later if desired.",
      type: "url",
      readOnly: true,
    }),
    defineField({
      name: "body",
      title: "Article body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "legacyWixUrl",
      title: "Old Wix URL",
      description:
        "Paste the original Wix URL here so we can preserve SEO with redirects.",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      media: "mainImage",
    },
    prepare({ title, language, media }) {
      return {
        title,
        subtitle: language ? language.toUpperCase() : "No language set",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Publish date, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
