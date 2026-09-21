import { defineType, defineField } from "sanity";

export const commercialBlueprint = defineType({
  name: "commercialBlueprint",
  title: "Commercial Blueprint",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Blueprint Title",
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
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "CleanTech & Utility Energy Storage", value: "CleanTech" },
          { title: "Artisan Specialty Coffee Roasteries", value: "Specialty Coffee" },
          { title: "Luxury Real Estate & Private Assets", value: "Real Estate" },
          { title: "Autonomous Systems & Cybernetics", value: "Autonomous Systems" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      options: {
        list: [
          { title: "15s (Hook)", value: "15s" },
          { title: "30s (Spot)", value: "30s" },
          { title: "40s (Narrative Master)", value: "40s" },
          { title: "60s (Deep Showcase)", value: "60s" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image / Frame Preview",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "timelineClips",
      title: "Timeline Clips Sequence",
      type: "array",
      of: [
        {
          type: "object",
          name: "clip",
          title: "Timeline Clip",
          fields: [
            defineField({
              name: "clipNumber",
              title: "Clip Number",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "timestamp",
              title: "Timestamp Range",
              type: "string",
              description: "e.g., 0:00 - 0:10 | The Core Ingress",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "sceneHook",
              title: "Scene Hook & Action",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "cameraMotion",
              title: "Camera Motion & Optics",
              type: "string",
              description: "e.g., Slow Dolly-in 35mm Anamorphic, 120fps Macro pan",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "dialogueSpeaker",
              title: "Dialogue Speaker",
              type: "string",
              description: "e.g., Voiceover (Lead Engineer) or Narrator",
            }),
            defineField({
              name: "dialogueText",
              title: "Lip-Sync Dialogue / Voiceover Text",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "promptRaw",
              title: "Raw Video AI Generation Prompt",
              type: "text",
              rows: 4,
              description: "Optimized prompt for Sora, Kling 1.5, or Runway Gen-3 Alpha",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
