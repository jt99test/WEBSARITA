import { defineField, defineType } from "sanity";

export const trainingOffer = defineType({
  name: "trainingOffer",
  title: "Training / course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course title",
      type: "string",
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
      name: "status",
      title: "Status",
      description: "Controls the small label shown on the website.",
      type: "string",
      initialValue: "upcoming",
      options: {
        layout: "radio",
        list: [
          { title: "Upcoming", value: "upcoming" },
          { title: "Open for booking", value: "open" },
          { title: "Sold out", value: "soldOut" },
          { title: "Past course", value: "past" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateLabel",
      title: "Dates",
      description: "Human-friendly date text, for example: October 2026 or 12-14 September.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      description: "Use plain text so she can write things like €350, €1500 / €1700, or Price TBC.",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Short description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(420),
    }),
    defineField({
      name: "details",
      title: "Course details",
      description: "Short bullet points shown in the card.",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1).max(8),
    }),
    defineField({
      name: "ctaLabel",
      title: "Button label",
      description: "Optional. Example: Ask for details, Reserve spot, Write to Sarita.",
      type: "string",
    }),
    defineField({
      name: "ctaUrl",
      title: "Button link",
      description: "Optional. Use a full URL or leave empty to use the contact page.",
      type: "url",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      description: "Lower numbers appear first.",
      type: "number",
      initialValue: 10,
    }),
    defineField({
      name: "isVisible",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      location: "location",
      dateLabel: "dateLabel",
    },
    prepare({ title, language, location, dateLabel }) {
      return {
        title,
        subtitle: [language?.toUpperCase(), location, dateLabel].filter(Boolean).join(" | "),
      };
    },
  },
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
});
