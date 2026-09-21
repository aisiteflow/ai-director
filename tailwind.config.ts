import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#FAFAFA",
        obsidian: "#0C1017",
        surface: "#111622",
        cobalt: "#2563EB",
        cyan: "#06B6D4",
      },
    },
  },
  plugins: [],
};

export default config;
