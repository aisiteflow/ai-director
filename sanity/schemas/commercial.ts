import { defineType, defineField } from "sanity";

export const commercial = defineType({
  name: "commercial",
  title: "4K Commercial Showcase",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Commercial Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Industry Category",
      type: "string",
      description: "e.g. AI GOVERNANCE & SECURITY, CLEANTECH & ENERGY STORAGE",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration String",
      type: "string",
      description: "e.g. 0:37 or 0:40",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverSrc",
      title: "Cover Image Path or URL",
      type: "string",
      description: "e.g. /ai-governance-cover.jpeg or full URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Commercial Synopsis / Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "detailUrl",
      title: "Agency Detail URL",
      type: "url",
      description: "e.g. https://aisiteflow.agency/commercials/ai-governance/detail",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hiringUrl",
      title: "Agency Hiring / Booking URL",
      type: "url",
      description: "e.g. https://aisiteflow.agency/commercials/ai-governance/hiring",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "accentColor",
      title: "Tailwind Accent Gradient",
      type: "string",
      description: "e.g. from-emerald-500 to-teal-600",
    }),
  ],
});
