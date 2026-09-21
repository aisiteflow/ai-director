"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  Camera,
  Music,
  Film,
  Search,
  ArrowRight,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import { CommercialBlueprint } from "@/sanity/seedData";
import BlueprintDrawer from "./BlueprintDrawer";

const CATEGORIES = [
  "All",
  "CleanTech",
  "Specialty Coffee",
  "Real Estate",
  "Autonomous Systems",
];

export default function VaultClient({
  blueprints,
}: {
  blueprints: CommercialBlueprint[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectingBlueprint, setInspectingBlueprint] = useState<CommercialBlueprint | null>(null);

  const filtered = blueprints.filter((bp) => {
    const matchesCat =
      selectedCategory === "All" ||
      bp.industry.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      searchQuery.trim() === "" ||
      bp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt/10 border border-cobalt/30 text-cyan text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>PRE-COMPILED 40S CINEMATIC REPOSITORY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-porcelain tracking-tight font-sans">
          Blueprints Vault
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          Master-class commercial blueprints meticulously orchestrated with optics specifications,
          foley sound design, and timing-calibrated prompt sequences for AI video synthesis.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-cobalt text-porcelain border border-cyan/40 shadow-sm shadow-cobalt/30"
                  : "bg-surface text-zinc-400 hover:text-porcelain hover:bg-white/5 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search optics, industry, tags..."
            className="w-full bg-obsidian/90 text-porcelain text-xs font-mono rounded-xl pl-9 pr-4 py-2 border border-white/10 focus:border-cobalt focus:ring-1 focus:ring-cobalt focus:outline-none transition-all placeholder:text-zinc-600"
          />
        </div>
      </div>

      {/* Luxury Masonry / Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filtered.map((bp, index) => (
          <motion.div
            key={bp._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-panel hover:glass-panel-glow rounded-3xl overflow-hidden border border-white/10 hover:border-cobalt/50 transition-all duration-300 flex flex-col group shadow-xl"
          >
            {/* 16:9 Cover Frame Preview */}
            <div className="relative aspect-video overflow-hidden bg-surface">
              <img
                src={bp.coverImage || "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"}
                alt={bp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-obsidian/80 backdrop-blur-md border border-white/10 text-cyan text-xs font-mono font-semibold">
                  {bp.industry}
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-2.5 py-1 rounded-md bg-cobalt/90 text-porcelain text-xs font-mono font-bold shadow-md shadow-cobalt/30">
                  {bp.duration} NARRATIVE
                </span>
              </div>

              {/* Bottom Info Overlay on Frame */}
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                  <Film className="w-3.5 h-3.5 text-cyan" />
                  <span>{bp.timelineClips.length} High-Fidelity Climax Sequences</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-sans text-porcelain group-hover:text-cyan transition-colors">
                  {bp.title}
                </h3>

                {/* Camera Optics & Foley Profile */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Camera className="w-3.5 h-3.5 text-cobalt shrink-0" />
                    <span className="text-zinc-500 uppercase text-[10px]">Optics:</span>
                    <span className="truncate">{bp.cameraOptics || "Arri Alexa LF 35mm Master Anamorphic"}</span>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-300">
                    <Music className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span className="text-zinc-500 uppercase text-[10px]">Audio:</span>
                    <span className="truncate">{bp.audioProfile || "Acoustic spatial Foley & low-frequency resonance"}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {bp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-white/5 text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setInspectingBlueprint(bp)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface hover:bg-cobalt/20 text-porcelain text-xs font-mono font-semibold border border-white/10 hover:border-cobalt/40 transition-all shadow-sm"
                >
                  <Eye className="w-4 h-4 text-cyan" />
                  <span>Inspect & Clone</span>
                </button>

                <Link
                  href={`/?clone=${bp.slug.current}`}
                  className="px-4 py-2.5 rounded-xl bg-cobalt hover:bg-blue-600 text-porcelain text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-md shadow-cobalt/25"
                >
                  <span>Use Template</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-2xl border border-white/5 space-y-3">
          <SlidersHorizontal className="w-8 h-8 text-zinc-600 mx-auto" />
          <p className="text-sm font-mono text-zinc-400">No blueprints found matching your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-mono text-cyan hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Slide-over Inspect & Clone Drawer */}
      <BlueprintDrawer
        blueprint={inspectingBlueprint}
        onClose={() => setInspectingBlueprint(null)}
      />
    </div>
  );
}
