import { defineType, defineField } from "sanity";

export const template = defineType({
  name: "template",
  title: "Next.js 16 SaaS Template",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Template Title",
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
      description: "e.g. AI AUTOMATION & CONSULTING, HOSPITALITY / LUXURY",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverSrc",
      title: "Cover Image Path or URL",
      type: "string",
      description: "e.g. /kortex-cover.jpeg or full URL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Template Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "launchUrl",
      title: "Live Launch / Demo URL",
      type: "url",
      description: "e.g. https://aisiteflow.agency/templates/kortex/details",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customizeUrl",
      title: "Customization Studio URL",
      type: "url",
      description: "e.g. https://aisiteflow.agency/customize?template=kortex",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "detailUrl",
      title: "Agency Detail URL",
      type: "url",
      description: "e.g. https://aisiteflow.agency/templates/kortex/details",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
