export interface CommercialShowcase {
  id: string;
  title: string;
  category: string;
  duration: string;
  coverSrc: string;
  description: string;
  detailUrl: string;
  hiringUrl: string;
  accentColor: string;
}

export interface TemplateShowcase {
  id: string;
  title: string;
  category: string;
  coverSrc: string;
  description: string;
  launchUrl: string;
  customizeUrl: string;
  detailUrl: string;
}

export const COMMERCIAL_SHOWCASES: CommercialShowcase[] = [
  {
    id: "ai-governance",
    title: "AI Sentinel // Zero-Trust AI Governance",
    category: "AI GOVERNANCE & SECURITY",
    duration: "0:37",
    coverSrc: "/ai-governance-cover.jpeg",
    description: "Cinema commercial demonstrating AI prompt isolation, data security architectures, and neural audit guardrails.",
    detailUrl: "https://aisiteflow.agency/commercials/ai-governance/detail",
    hiringUrl: "https://aisiteflow.agency/commercials/ai-governance/hiring",
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "cleantech",
    title: "Next-Gen CleanTech & Utility Energy Storage",
    category: "CLEANTECH & ENERGY STORAGE",
    duration: "0:40",
    coverSrc: "/cleantech-cover.jpg",
    description: "Forty megawatts of instant clean power: modular solid-state container units, SCADA telemetry, and total metropolitan blackout recovery.",
    detailUrl: "https://aisiteflow.agency/commercials/cleantech/detail",
    hiringUrl: "https://aisiteflow.agency/commercials/cleantech/hiring",
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "grocery",
    title: "SiteFlow Fresh // Autonomous Grocery",
    category: "SUPERMARKETS & GROCERY",
    duration: "0:40",
    coverSrc: "/grocery-cover.png",
    description: "High-octane kinetic retail commercial featuring zero-gravity produce slicing and autonomous smart-cart checkout.",
    detailUrl: "https://aisiteflow.agency/commercials/grocery/detail",
    hiringUrl: "https://aisiteflow.agency/commercials/grocery/hiring",
    accentColor: "from-green-500 to-emerald-600"
  },
  {
    id: "perfume",
    title: "SiteFlow // Haute Parfumerie",
    category: "LUXURY PERFUME & FRAGRANCE",
    duration: "0:40",
    coverSrc: "/perfume-cover.png",
    description: "High-fashion Parisian salon commercial featuring velvet couture aesthetics and obsidian crystal bottle caustics.",
    detailUrl: "https://aisiteflow.agency/commercials/perfume/detail",
    hiringUrl: "https://aisiteflow.agency/commercials/perfume/hiring",
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: "real-estate",
    title: "Skyline Estates // Luxury Penthouse",
    category: "LUXURY REAL ESTATE",
    duration: "0:40",
    coverSrc: "/real-estate-cover.png",
    description: "Dual-character architectural tour with holographic CAD layout and sunset panoramic infinity pool overlooking the metropolis.",
    detailUrl: "https://aisiteflow.agency/commercials/real-estate/detail",
    hiringUrl: "https://aisiteflow.agency/commercials/real-estate/hiring",
    accentColor: "from-amber-500 to-orange-600"
  }
];

export const TEMPLATE_SHOWCASES: TemplateShowcase[] = [
  {
    id: "kortex",
    title: "KORTEX — AI Agency",
    category: "AI AUTOMATION & CONSULTING",
    coverSrc: "/kortex-cover.jpeg",
    description: "B2B AI agency website engineered with client demo bot, terminal showcase, and 2-step enterprise booking.",
    launchUrl: "https://aisiteflow.agency/templates/kortex/details",
    customizeUrl: "https://aisiteflow.agency/customize?template=kortex",
    detailUrl: "https://aisiteflow.agency/templates/kortex/details"
  },
  {
    id: "savor",
    title: "SAVOR — Fine Dining",
    category: "HOSPITALITY / LUXURY",
    coverSrc: "/savorcover.jpeg",
    description: "Ultra-sleek 5-page restaurant website template with table reservation engine and sensory culinary menus.",
    launchUrl: "https://aisiteflow.agency/templates/savor",
    customizeUrl: "https://aisiteflow.agency/customize?template=savor",
    detailUrl: "https://aisiteflow.agency/templates/savor/details"
  },
  {
    id: "blush",
    title: "BLUSH — Dewy Beauty",
    category: "E-COMMERCE / BEAUTY",
    coverSrc: "/BLUSHcover.jpeg",
    description: "Luxury beauty store featuring interactive bundle builder, tactile swatch selector, and video hero engine.",
    launchUrl: "https://aisiteflow.agency/templates/blush",
    customizeUrl: "https://aisiteflow.agency/customize?template=blush",
    detailUrl: "https://aisiteflow.agency/templates/blush/details"
  },
  {
    id: "estates",
    title: "ESTATES — Luxury Realty",
    category: "REAL ESTATE",
    coverSrc: "/estatecover.jpeg",
    description: "Architectural real estate platform with 0ms CAD floorplans, interactive map filter, and mortgage studio.",
    launchUrl: "https://aisiteflow.agency/templates/estates",
    customizeUrl: "https://aisiteflow.agency/customize?template=estates",
    detailUrl: "https://aisiteflow.agency/templates/estates/details"
  },
  {
    id: "fresh",
    title: "FRESH — Grocery Mart",
    category: "E-COMMERCE / GROCERY",
    coverSrc: "/FRESHcover.jpeg",
    description: "Sub-second grocery storefront with live cart drawer, weight calculator, and express checkout dispatch.",
    launchUrl: "https://aisiteflow.agency/templates/fresh",
    customizeUrl: "https://aisiteflow.agency/customize?template=fresh",
    detailUrl: "https://aisiteflow.agency/templates/fresh/details"
  }
];
