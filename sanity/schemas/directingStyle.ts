import { defineType, defineField } from "sanity";

export const directingStyle = defineType({
  name: "directingStyle",
  title: "Directing Style",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Style Title",
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
      title: "Target Industry",
      type: "string",
      options: {
        list: [
          { title: "CleanTech & Utility Energy Storage", value: "CleanTech" },
          { title: "Artisan Specialty Coffee Roasteries", value: "Specialty Coffee" },
          { title: "Horology & Precision Instruments", value: "Horology" },
          { title: "Luxury Real Estate & Private Assets", value: "Real Estate" },
          { title: "Autonomous Systems & Cybernetics", value: "Autonomous Systems" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colorPalette",
      title: "Color Palette & Grade",
      type: "string",
      description: "e.g., Teal-Orange Kodachrome 64, Low-Key Obsidian Monochrome, Nordic Cool 5600K",
    }),
    defineField({
      name: "cameraOptics",
      title: "Camera Optics & Rig",
      type: "string",
      description: "e.g., Arri Alexa LF 35mm T1.5, 100mm Macro Anamorphic, Laowa 24mm Probe",
    }),
    defineField({
      name: "lightingPreset",
      title: "Lighting Preset",
      type: "string",
      description: "e.g., Warm Golden-Hour (2800K), High-Contrast Cyberpunk Rim, Diffused Daylight Overcast",
    }),
    defineField({
      name: "foleyPreset",
      title: "Foley & Acoustic Profile",
      type: "string",
      description: "e.g., Sub-bass drone with espresso steam hiss, Industrial turbine harmonic resonance",
    }),
  ],
});
