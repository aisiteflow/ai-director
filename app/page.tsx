"use client";

import React, { useState } from "react";
import {
  Film,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import ShowcaseNavbar from "@/components/ShowcaseNavbar";
import ShowcaseFooter from "@/components/ShowcaseFooter";
import CommercialCard from "@/components/CommercialCard";
import TemplateCard from "@/components/TemplateCard";
import { COMMERCIAL_SHOWCASES, TEMPLATE_SHOWCASES } from "@/data/showcase-data";

export default function ShowcaseHubPage() {
  const [activeTab, setActiveTab] = useState<"commercials" | "templates">("commercials");

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-porcelain selection:bg-cobalt selection:text-white">
      {/* Navigation Header */}
      <ShowcaseNavbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20 cinema-film-grid">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/15 border border-cobalt/35 text-cyan text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>OFFICIAL CLIENT PRODUCTION HUB</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-porcelain leading-[1.15]">
            Cinematic AI Commercials &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-400 to-cobalt">
              Next.js 16 Platforms
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            High-speed production portfolio engineered by{" "}
            <a
              href="https://aisiteflow.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline decoration-cobalt underline-offset-4 hover:text-porcelain transition-colors font-medium"
            >
              AI SiteFlow Agency
            </a>
            . Zero heavy video bottlenecks, zero mock APIs — pure client-grade commercial execution.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-zinc-300">
              <Film className="w-3.5 h-3.5 text-cobalt" />
              <span>5x 4K Master Commercials</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-zinc-300">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>5x Next.js 16 Templates</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Agency Dispatch</span>
            </div>
          </div>
        </section>

        {/* SECTION 1: 4K COMMERCIAL SHOWCASES GRID */}
        <section id="commercials" className="mb-24 scroll-mt-28">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
                <Film className="w-4 h-4" />
                <span>Section 01 // 4K Commercial Sequences</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-porcelain">
                Commercial Showcases ({COMMERCIAL_SHOWCASES.length})
              </h2>
            </div>

            <p className="text-xs font-mono text-zinc-400 max-w-sm text-left sm:text-right">
              Broadcast-ready 4K AI video campaigns with calibrated foley audio & optics.
            </p>
          </div>

          {/* 2-Column Masonry Grid Matching Agency Design 1:1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMERCIAL_SHOWCASES.map((showcase) => (
              <CommercialCard key={showcase.id} showcase={showcase} />
            ))}
          </div>
        </section>

        {/* SECTION 2: NEXT.JS 16 TEMPLATES GRID */}
        <section id="templates" className="scroll-mt-28">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
                <LayoutGrid className="w-4 h-4" />
                <span>Section 02 // Enterprise Web Blueprints</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-porcelain">
                Next.js 16 Templates ({TEMPLATE_SHOWCASES.length})
              </h2>
            </div>

            <p className="text-xs font-mono text-zinc-400 max-w-sm text-left sm:text-right">
              Sub-second production web templates with responsive UI & custom styling.
            </p>
          </div>

          {/* Responsive 3-Column / 2-Column Grid Matching Agency Templates Showcase 1:1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATE_SHOWCASES.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </section>

        {/* Agency Direct Banner CTA */}
        <section className="mt-20 glass-panel-glow rounded-3xl p-8 sm:p-12 border border-cobalt/40 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cobalt/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-mono px-3 py-1 rounded-full bg-surface border border-white/10 text-cyan">
              Full Bespoke Agency Services
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-porcelain font-sans">
              Need a Custom Commercial or Web Experience?
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              We deploy custom AI commercial pipelines, bespoke 3D interactive web experiences, and high-performance Next.js 16 architectures for global brands.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://aisiteflow.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cobalt via-blue-600 to-cyan text-porcelain font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cobalt/35 hover:scale-105 active:scale-95 transition-all"
              >
                <span>COMMISSION YOUR PROJECT AT AISITEFLOW.AGENCY</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Agency Footer */}
      <ShowcaseFooter />
    </div>
  );
}
