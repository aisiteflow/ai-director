import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import CommercialCard from "@/components/CommercialCard";
import { getCommercials } from "@/sanity/lib/client";
import { Film, Sparkles, ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export default async function CommercialsPage() {
  const commercials = await getCommercials();

  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-porcelain selection:bg-cobalt selection:text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20 cinema-film-grid">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/15 border border-cobalt/35 text-cyan text-xs font-mono">
            <Film className="w-3.5 h-3.5" />
            <span>CINEMA GRADE VIDEO PRODUCTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-porcelain">
            4K Cinema Commercial Production Catalog
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Ultra-high-definition 4K commercial productions engineered with timing-locked prompt sequences,
            macro optics, lip-sync voiceovers, and calibrated foley audio profiles.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded-md bg-surface border border-white/10 text-cyan">
              Sanity Dataset: production (ix5izt37)
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-300">5 High-Impact 4K Cinema Commercials</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-emerald-400">Zero Video Lag</span>
          </div>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercials.map((showcase) => (
            <CommercialCard key={showcase.id} showcase={showcase} />
          ))}
        </div>

        {/* Bottom Agency Banner */}
        <div className="mt-20 glass-panel-glow rounded-3xl p-8 sm:p-10 border border-cobalt/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-porcelain">
              Looking for Bespoke Commercial Production?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans">
              Commission bespoke generative video pipelines for Sora, Kling, and Runway Gen-3 with custom branding and enterprise audio mixing.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/templates"
              className="px-4 py-2.5 rounded-xl bg-surface hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 transition-all"
            >
              Browse Templates
            </Link>
            <a
              href="https://aisiteflow.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cobalt to-blue-600 hover:from-blue-600 hover:to-cobalt text-porcelain text-xs font-mono font-bold transition-all shadow-md shadow-cobalt/30 flex items-center gap-1.5"
            >
              <span>HIRE AGENCY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
