import { createClient } from "next-sanity";
import {
  CommercialBlueprint,
  DirectingStyle,
  SEED_BLUEPRINTS,
  SEED_DIRECTING_STYLES,
  TimelineClip,
} from "./seedData";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-director-2026";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

/**
 * Fetch all commercial blueprints with transparent offline fallback to seed data.
 */
export async function getCommercialBlueprints(): Promise<CommercialBlueprint[]> {
  try {
    // If using the default demo ID, immediately use high-fidelity seed data
    if (projectId === "demo-director-2026" || !projectId) {
      return SEED_BLUEPRINTS;
    }
    const data = await client.fetch<CommercialBlueprint[]>(
      `*[_type == "commercialBlueprint"] | order(_createdAt desc)`
    );
    if (data && data.length > 0) {
      return data;
    }
    return SEED_BLUEPRINTS;
  } catch (err) {
    console.warn("Sanity client fetch failed or offline; using seed blueprints fallback:", err);
    return SEED_BLUEPRINTS;
  }
}

/**
 * Fetch single commercial blueprint by slug with fallback.
 */
export async function getCommercialBlueprintBySlug(
  slug: string
): Promise<CommercialBlueprint | null> {
  try {
    if (projectId === "demo-director-2026" || !projectId) {
      const found = SEED_BLUEPRINTS.find((b) => b.slug.current === slug);
      return found || SEED_BLUEPRINTS[0];
    }
    const data = await client.fetch<CommercialBlueprint>(
      `*[_type == "commercialBlueprint" && slug.current == $slug][0]`,
      { slug }
    );
    if (data) return data;
    return SEED_BLUEPRINTS.find((b) => b.slug.current === slug) || SEED_BLUEPRINTS[0];
  } catch (err) {
    console.warn("Sanity client single fetch failed; using seed fallback:", err);
    return SEED_BLUEPRINTS.find((b) => b.slug.current === slug) || SEED_BLUEPRINTS[0];
  }
}

/**
 * Fetch directing styles with fallback.
 */
export async function getDirectingStyles(): Promise<DirectingStyle[]> {
  try {
    if (projectId === "demo-director-2026" || !projectId) {
      return SEED_DIRECTING_STYLES;
    }
    const data = await client.fetch<DirectingStyle[]>(
      `*[_type == "directingStyle"] | order(_createdAt desc)`
    );
    if (data && data.length > 0) return data;
    return SEED_DIRECTING_STYLES;
  } catch (err) {
    console.warn("Sanity client fetch failed; using seed directing styles fallback:", err);
    return SEED_DIRECTING_STYLES;
  }
}

export interface CompilerInput {
  brandName: string;
  industry: string;
  duration: "15s" | "30s" | "40s" | "60s";
  mood: string;
  cameraOptics?: string;
}

/**
 * Dynamic Neural Commercial Timeline Compiler:
 * Synthesizes a structured multi-clip commercial pipeline from brief input.
 */
export function generateCompiledTimeline(input: CompilerInput): CommercialBlueprint {
  const { brandName, industry, duration, mood } = input;
  const safeBrand = brandName.trim() || "Obsidian Prime";

  // Clip counts based on duration
  const clipCountMap: Record<string, number> = {
    "15s": 2,
    "30s": 3,
    "40s": 4,
    "60s": 5,
  };
  const count = clipCountMap[duration] || 4;

  let optics = "Arri Alexa LF 35mm Master Anamorphic T1.5";
  let lighting = "High-Contrast Sci-Fi Cyan & Electric Cobalt Rim";
  let foley = "32Hz Sub-bass drone fading into industrial turbine resonance";
  let palette = "Obsidian (#0C1017), Porcelain (#FAFAFA), Electric Cobalt (#2563EB)";

  if (mood.includes("Golden-Hour") || industry.includes("Coffee")) {
    optics = "Laowa 24mm Probe + 100mm Macro Prime f/2.8";
    lighting = "Warm Golden-Hour (2800K) Directional Sunbeams";
    foley = "Warm acoustic cello, vacuum pressure release, bean fracture crackle";
    palette = "Warm Roasted Amber, Velvet Porcelain, Deep Espresso Obsidian";
  } else if (mood.includes("Nordic") || industry.includes("Real Estate")) {
    optics = "Cooke S7/i Full Frame Plus 21mm Ultra-Wide Cine Prime";
    lighting = "Nordic Minimalist Overcast Daylight & 3000K Interior Recessed Glow";
    foley = "Ocean wave wash, wind whisper through architectural cantilever, minimalist piano";
    palette = "Raw Travertine, Clean Obsidian Slate, Monolithic Grey";
  } else if (industry.includes("Autonomous") || mood.includes("Cyan")) {
    optics = "Kowa Prominar Anamorphic 40mm T2.3 + High-Speed Phantom Flex 4K";
    lighting = "High-Contrast Sci-Fi Cyan (#06B6D4) with Strobe Calibration Grids";
    foley = "Sub-millisecond micro-hydraulic actuation, high-speed capacitor discharge";
    palette = "Phosphor Cyan (#06B6D4), Carbon Obsidian, Electric Cobalt";
  }

  // Pre-configured archetype clips adapted to the user's input
  const clips: TimelineClip[] = [];

  const timeStampsByDuration: Record<string, string[]> = {
    "15s": ["0:00 - 0:07 | The Core Hook", "0:07 - 0:15 | Brand Climax & Callout"],
    "30s": [
      "0:00 - 0:10 | The Core Ingress",
      "0:10 - 0:20 | Mechanical Precision",
      "0:20 - 0:30 | Grand Scale Reveal",
    ],
    "40s": [
      "0:00 - 0:10 | The Core Ingress",
      "0:10 - 0:20 | Micro-Thermal Telemetry",
      "0:20 - 0:30 | The Megacity Conduit",
      "0:30 - 0:40 | Monolith Reveal & Callout",
    ],
    "60s": [
      "0:00 - 0:12 | The Genesis Origin",
      "0:12 - 0:24 | Kinetic Architecture",
      "0:24 - 0:36 | Micro-Sensor Diagnostics",
      "0:36 - 0:48 | Global Network Integration",
      "0:48 - 1:00 | Heroic Identity Lockup",
    ],
  };

  const timestamps = timeStampsByDuration[duration] || timeStampsByDuration["40s"];

  for (let i = 0; i < count; i++) {
    const clipNum = i + 1;
    const ts = timestamps[i] || `0:${i * 10} - 0:${(i + 1) * 10} | Sequence ${clipNum}`;

    if (clipNum === 1) {
      clips.push({
        clipNumber: 1,
        timestamp: ts,
        sceneHook: `High-velocity atmospheric opening shot establishing ${safeBrand} within its prime environment.`,
        cameraMotion: `Cineflex 360 gyro-stabilized high-speed push-in transitioning into low-angle static hero frame with ${optics}`,
        dialogueSpeaker: "Lead Director / Architect (Voiceover)",
        dialogueText: `When industry demands the absolute standard... ${safeBrand} commands the horizon.`,
        promptRaw: `Cinematic 8k commercial masterpiece, ${optics}, ${lighting}. Establishing opening shot of ${safeBrand} in a vast, moody architectural environment. Volumetric light shafts, sharp micro-reflections, ultra-realistic motion blur, 2.39:1 anamorphic ratio, color grade in ${palette}.`,
      });
    } else if (clipNum === 2) {
      clips.push({
        clipNumber: 2,
        timestamp: ts,
        sceneHook: `Extreme macro probe glide exploring internal precision engineering of ${safeBrand}.`,
        cameraMotion: "Motorized micro-rail slider move with 120fps high-speed capture",
        dialogueSpeaker: "Specialist Narrator",
        dialogueText: "Micron-level tolerances. Engineered to transcend traditional physical limits.",
        promptRaw: `Ultra-detailed 120fps macro shot tracking along the surface and internal elements of ${safeBrand}. Fluid cooling dynamics, illuminated indicators, razor-sharp edge focus with shallow depth of field, photorealistic lighting in ${lighting}, award-winning commercial quality.`,
      });
    } else if (clipNum === 3) {
      clips.push({
        clipNumber: 3,
        timestamp: ts,
        sceneHook: `Wide-angle perspective showcasing real-world performance impact and environmental mastery.`,
        cameraMotion: "Sweeping circular drone crane shot with smooth horizon lock",
        dialogueSpeaker: "Visionary Voiceover",
        dialogueText: "Designed not just for performance, but for uninterrupted longevity.",
        promptRaw: `Epic cinematic wide shot showing ${safeBrand} integrated into a modern high-tech world. Sweeping camera motion, crisp atmospheric haze, beautiful dynamic range between deep obsidian shadows and glowing cobalt accents, 8k resolution.`,
      });
    } else {
      clips.push({
        clipNumber: clipNum,
        timestamp: ts,
        sceneHook: `Heroic centered brand lockup. The ${safeBrand} emblem is ignited in razor-sharp laser typography.`,
        cameraMotion: "Slow crane vertical pull-back settling into static iconic framing",
        dialogueSpeaker: "Narrator (Resonant Authority)",
        dialogueText: `${safeBrand}. Architecture for the permanent future.`,
        promptRaw: `Hero commercial final lockup. Dramatic low-angle centered view of ${safeBrand} under atmospheric ${lighting}. Minimalist typographic branding '${safeBrand.toUpperCase()}' etched in crisp light. Premium commercial finish, 8k photorealism.`,
      });
    }
  }

  return {
    _id: `compiled-${Date.now()}`,
    title: `${safeBrand}: Commercial Campaign`,
    slug: { current: safeBrand.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
    industry,
    duration,
    coverImage:
      industry.includes("Coffee")
        ? "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
        : industry.includes("Real Estate")
        ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        : industry.includes("Autonomous")
        ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
        : "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    tags: [industry, duration, mood.split(" ")[0], "Director Cut"],
    audioProfile: foley,
    cameraOptics: optics,
    lightingPreset: lighting,
    colorPalette: palette,
    timelineClips: clips,
  };
}
