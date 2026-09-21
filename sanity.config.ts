import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ix5izt37";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  name: "ai-commercial-director",
  title: "AI Director Studio // Sanity (ix5izt37)",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
