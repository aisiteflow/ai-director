import { createClient } from "next-sanity";
import {
  COMMERCIAL_SHOWCASES,
  TEMPLATE_SHOWCASES,
  CommercialShowcase,
  TemplateShowcase,
} from "@/data/showcase-data";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ix5izt37";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-21";

export const client = createClient({
  projectId: "ix5izt37",
  dataset: "production",
  apiVersion: "2026-09-21",
  useCdn: false,
});

/**
 * Fetch commercials from live Sanity with fallback to local showcase catalog.
 */
export async function getCommercials(): Promise<CommercialShowcase[]> {
  try {
    const data = await client.fetch<CommercialShowcase[]>(
      `*[_type == "commercial"] | order(_createdAt desc)`
    );
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("Sanity live query failed; using local showcase catalog:", err);
  }
  return COMMERCIAL_SHOWCASES;
}

/**
 * Fetch templates from live Sanity with fallback to local showcase catalog.
 */
export async function getTemplates(): Promise<TemplateShowcase[]> {
  try {
    const data = await client.fetch<TemplateShowcase[]>(
      `*[_type == "template"] | order(_createdAt desc)`
    );
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    console.warn("Sanity live query failed; using local template catalog:", err);
  }
  return TEMPLATE_SHOWCASES;
}
