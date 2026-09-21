import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CommercialCard from "@/components/CommercialCard";
import TemplateCard from "@/components/TemplateCard";
import { getCommercials, getTemplates } from "@/sanity/lib/client";
import {
  Film,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Database,
} from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  const allCommercials = await getCommercials();
  const allTemplates = await getTemplates();

  // Featured Top Commercials: CleanTech & AI Governance
  const featuredCommercials = allCommercials.filter(
    (c) => c.id === "cleantech" || c.id === "ai-governance"
  );
  // Fallback if IDs differ
  const topCommercials =
    featuredCommercials.length >= 2 ? featuredCommercials : allCommercials.slice(0, 2);

  // Featured Top Templates: KORTEX & ESTATES
  const featuredTemplates = allTemplates.filter(
    (t) => t.id === "kortex" || t.id === "estates"
  );
  const topTemplates =
    featuredTemplates.length >= 2 ? featuredTemplates : allTemplates.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-porcelain selection:bg-cobalt selection:text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20 cinema-film-grid">
        {/* High-Impact Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/15 border border-cobalt/35 text-cyan text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>AI DIRECTOR // SANITY PRODUCTION HUB (ix5izt37)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-porcelain leading-[1.12]">
            Cinema AI Commercials &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-cobalt">
              Next.js 16 Web Apps
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Architected for global brands and venture-backed startups. Powered by real Sanity Headless CMS,
            cinema-grade generative AI video models, and ultra-fast Next.js 16 architecture.
          </p>

          {/* Live Stats Counter: 5 Production Commercials, 5 Next.js 16 Web Apps, Zero-Wait Cloud Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
            <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan block">
                5
              </span>
              <p className="text-xs font-mono text-zinc-400">5 Production Commercials</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-porcelain block">
                5
              </span>
              <p className="text-xs font-mono text-zinc-400">5 Next.js 16 Web Apps</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white/10 text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 block">
                0ms
              </span>
              <p className="text-xs font-mono text-zinc-400">Zero-Wait Cloud Delivery</p>
            </div>
          </div>

          {/* Hero Quick Navigation Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/commercials"
              className="px-5 py-3 rounded-xl bg-cobalt hover:bg-blue-600 text-porcelain font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cobalt/30 flex items-center gap-2 active:scale-[0.98]"
            >
              <Film className="w-4 h-4 text-cyan" />
              <span>EXPLORE 4K COMMERCIALS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/templates"
              className="px-5 py-3 rounded-xl bg-surface hover:bg-white/10 border border-white/10 hover:border-white/20 text-porcelain font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-[0.98]"
            >
              <LayoutGrid className="w-4 h-4 text-cyan" />
              <span>EXPLORE SAAS TEMPLATES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FEATURED COMMERCIALS ROW (CleanTech & AI Governance) */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
                <Film className="w-4 h-4" />
                <span>Featured Spotlights // 4K Commercials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-porcelain">
                Flagship Commercial Productions
              </h2>
            </div>

            <Link
              href="/commercials"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:underline group"
            >
              <span>View Full Catalog (5 Commercials)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topCommercials.map((showcase) => (
              <CommercialCard key={showcase.id} showcase={showcase} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/commercials"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl glass-panel hover:glass-panel-glow border border-white/10 hover:border-cobalt/50 text-xs font-mono text-porcelain transition-all"
            >
              <span>VIEW COMPLETE 4K COMMERCIAL CATALOG (5 PRODUCTIONS)</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>
        </section>

        {/* FEATURED TEMPLATES ROW (KORTEX & ESTATES) */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
                <LayoutGrid className="w-4 h-4" />
                <span>Featured Spotlights // Next.js 16 Web Apps</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-porcelain">
                Flagship SaaS Platforms
              </h2>
            </div>

            <Link
              href="/templates"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:underline group"
            >
              <span>View Full Catalog (5 Templates)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl glass-panel hover:glass-panel-glow border border-white/10 hover:border-cobalt/50 text-xs font-mono text-porcelain transition-all"
            >
              <span>VIEW COMPLETE TEMPLATES CATALOG (5 PLATFORMS)</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>
        </section>

        {/* Sanity Studio Direct Management Banner */}
        <section className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-cobalt/40 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-cyan text-xs font-mono">
              <Database className="w-3.5 h-3.5" />
              <span>Project ID: ix5izt37 (production dataset)</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-porcelain font-sans">
              Integrated Sanity Studio CMS
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              Manage commercials, customize templates, and update metadata directly inside the embedded Sanity Studio.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cobalt hover:bg-blue-600 text-porcelain font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cobalt/35 transition-all"
              >
                <Database className="w-4 h-4" />
                <span>LAUNCH EMBEDDED SANITY STUDIO</span>
              </Link>
              <a
                href="https://aisiteflow.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-white/10 border border-white/10 text-porcelain font-mono font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>OFFICIAL AGENCY SITE</span>
                <ExternalLink className="w-4 h-4 text-cyan" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
