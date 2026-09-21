"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Sliders,
  Layers,
  Clock,
  Palette,
  Camera,
  Download,
  ExternalLink,
  ChevronDown,
  RotateCcw,
  Film,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CommercialBlueprint,
  SEED_BLUEPRINTS,
} from "@/sanity/seedData";
import { generateCompiledTimeline } from "@/sanity/client";
import TimelineClipCard from "./TimelineClipCard";

const SAMPLE_TAGS = [
  { label: "Hyperion Megawatt", industry: "CleanTech & Utility Energy Storage", mood: "High-Contrast Sci-Fi Cyan", duration: "40s" as const },
  { label: "Obsidian Reserve", industry: "Artisan Specialty Coffee Roasteries", mood: "Warm Golden-Hour (2800K)", duration: "40s" as const },
  { label: "Sanctuary 09", industry: "Luxury Real Estate & Private Assets", mood: "Nordic Minimalist", duration: "40s" as const },
  { label: "Aegis Cyber-Core", industry: "Autonomous Systems & Cybernetics", mood: "High-Contrast Sci-Fi Cyan", duration: "40s" as const },
];

const INDUSTRIES = [
  "CleanTech & Utility Energy Storage",
  "Artisan Specialty Coffee Roasteries",
  "Luxury Real Estate & Private Assets",
  "Autonomous Systems & Cybernetics",
];

const DURATIONS: Array<{ id: "15s" | "30s" | "40s" | "60s"; label: string; desc: string }> = [
  { id: "15s", label: "15s", desc: "Hook" },
  { id: "30s", label: "30s", desc: "Spot" },
  { id: "40s", label: "40s", desc: "Narrative Master" },
  { id: "60s", label: "60s", desc: "Deep Showcase" },
];

const MOODS = [
  "Warm Golden-Hour (2800K)",
  "High-Contrast Sci-Fi Cyan",
  "Nordic Minimalist",
];

export default function StudioEngine({
  initialBlueprint = SEED_BLUEPRINTS[0],
}: {
  initialBlueprint?: CommercialBlueprint;
}) {
  // Form brief compiler state
  const [brandName, setBrandName] = useState("Hyperion Megawatt Solid-State");
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [duration, setDuration] = useState<"15s" | "30s" | "40s" | "60s">("40s");
  const [mood, setMood] = useState(MOODS[1]);

  // Compiler progress state
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileStep, setCompileStep] = useState(0);
  const [activeBlueprint, setActiveBlueprint] = useState<CommercialBlueprint>(initialBlueprint);
  const [exportCopied, setExportCopied] = useState(false);

  // Query params clone sync on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cloneSlug = params.get("clone");
      if (cloneSlug) {
        const found = SEED_BLUEPRINTS.find((b) => b.slug.current === cloneSlug);
        if (found) {
          setActiveBlueprint(found);
          setBrandName(found.title.split(":")[0]);
          setIndustry(found.industry);
          setDuration(found.duration);
        }
      }
    }
  }, []);

  // Quick preset sample tag loader
  const handleSelectSample = (sample: typeof SAMPLE_TAGS[0]) => {
    setBrandName(sample.label);
    setIndustry(sample.industry);
    setMood(sample.mood);
    setDuration(sample.duration);
  };

  // Compile Pipeline Action
  const handleCompile = () => {
    setIsCompiling(true);
    setCompileStep(1);

    const timer1 = setTimeout(() => setCompileStep(2), 500);
    const timer2 = setTimeout(() => setCompileStep(3), 1000);
    const timer3 = setTimeout(() => {
      const compiled = generateCompiledTimeline({
        brandName,
        industry,
        duration,
        mood,
      });
      setActiveBlueprint(compiled);
      setIsCompiling(false);
      setCompileStep(0);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  // Export JSON functionality
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeBlueprint, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${activeBlueprint.slug.current}-director-brief.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setExportCopied(true);
    setTimeout(() => setExportCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Studio Header Banner */}
      <div className="mb-8 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt/10 border border-cobalt/30 text-cyan text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>SANITY CMS + NEURAL CINEMA PIPELINE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-porcelain tracking-tight font-sans">
              Master Director Studio
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/vault"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:glass-panel-glow text-xs font-mono text-zinc-300 hover:text-porcelain transition-all"
            >
              <Layers className="w-4 h-4 text-cyan" />
              <span>Browse Vault ({SEED_BLUEPRINTS.length})</span>
            </Link>
          </div>
        </div>
        <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Compile cinematic, timing-locked video generation prompts with target camera optics, foley acoustics,
          and actor lip-sync dialogues tailored for Next-Gen Video AI models.
        </p>
      </div>

      {/* Split-View Grid (Desktop 2-Col, Mobile 1-Col) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ============================================================ */}
        {/* LEFT CONTROL PANEL (THE BRIEF COMPILER) - Col 1 to 5         */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="glass-panel rounded-2xl p-6 border border-white/10 shadow-xl space-y-6">
            {/* Panel Title */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cobalt" />
                <h2 className="text-sm font-bold font-mono tracking-wider uppercase text-porcelain">
                  The Brief Compiler
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface text-cyan border border-white/5">
                v2.6 Pipeline
              </span>
            </div>

            {/* Field 1: Brand / Product Input */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-300 flex items-center justify-between">
                <span>Brand / Hero Product</span>
                <span className="text-[10px] text-zinc-500">Required</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Hyperion Megawatt Battery"
                  className="w-full bg-obsidian/90 text-porcelain text-sm rounded-xl px-4 py-3 border border-white/10 focus:border-cobalt focus:ring-1 focus:ring-cobalt focus:outline-none transition-all placeholder:text-zinc-600 font-sans"
                />
              </div>

              {/* Quick Sample Tags */}
              <div className="pt-1">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block mb-1.5">
                  Quick Sample Briefs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SAMPLE_TAGS.map((sample) => (
                    <button
                      key={sample.label}
                      type="button"
                      onClick={() => handleSelectSample(sample)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all ${
                        brandName === sample.label
                          ? "bg-cobalt text-porcelain border border-cyan/40 shadow-sm"
                          : "bg-surface hover:bg-white/5 text-zinc-400 hover:text-porcelain border border-white/5"
                      }`}
                    >
                      {sample.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Field 2: Industry Dropdown Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-300 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-cyan" />
                <span>Industry Discipline</span>
              </label>
              <div className="relative">
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full appearance-none bg-obsidian/90 text-porcelain text-sm rounded-xl px-4 py-3 border border-white/10 focus:border-cobalt focus:ring-1 focus:ring-cobalt focus:outline-none transition-all font-sans pr-10 cursor-pointer"
                >
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind} className="bg-surface text-porcelain">
                      • {ind}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Duration Pill Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cobalt" />
                <span>Commercial Duration</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DURATIONS.map((dur) => (
                  <button
                    key={dur.id}
                    type="button"
                    onClick={() => setDuration(dur.id)}
                    className={`px-3 py-2.5 rounded-xl border text-center transition-all ${
                      duration === dur.id
                        ? "bg-cobalt/25 border-cyan text-porcelain shadow-sm shadow-cobalt/30"
                        : "bg-obsidian/80 border-white/5 text-zinc-400 hover:border-white/20 hover:text-porcelain"
                    }`}
                  >
                    <span className="block font-mono font-bold text-xs">{dur.label}</span>
                    <span className="block text-[10px] text-zinc-500 font-sans truncate">{dur.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Field 4: Cinematic Mood Select */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-300 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-yellow-400" />
                <span>Cinematic Lighting & Color Mood</span>
              </label>
              <div className="space-y-2">
                {MOODS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMood(m)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between border transition-all ${
                      mood === m
                        ? "bg-surface border-cobalt/60 text-porcelain shadow-sm"
                        : "bg-obsidian/60 border-white/5 text-zinc-400 hover:border-white/10 hover:text-zinc-200"
                    }`}
                  >
                    <span>{m}</span>
                    {mood === m && <div className="w-2 h-2 rounded-full bg-cyan" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                disabled={isCompiling}
                onClick={handleCompile}
                className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cobalt via-blue-600 to-cyan p-px font-mono font-bold text-xs uppercase tracking-wider text-porcelain shadow-lg shadow-cobalt/30 hover:shadow-cyan/30 transition-all duration-300 disabled:opacity-60"
              >
                <div className="relative w-full h-full bg-obsidian group-hover:bg-transparent rounded-[11px] px-6 py-4 flex items-center justify-center gap-2 transition-all">
                  {isCompiling ? (
                    <>
                      <div className="w-4 h-4 border-2 border-cyan border-t-transparent rounded-full animate-spin" />
                      <span>
                        {compileStep === 1 && "Synthesizing Taxonomy..."}
                        {compileStep === 2 && "Configuring Optics & Audio..."}
                        {compileStep === 3 && "Composing Neural Prompts..."}
                      </span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-cyan group-hover:rotate-12 transition-transform" />
                      <span>COMPILE CINEMA PROMPT PIPELINE →</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT STAGE (THE NEURAL TIMELINE CANVAS) - Col 6 to 12       */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Compiled Metadata Header */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 shadow-lg space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                  Active Directing Campaign
                </span>
                <h3 className="text-base font-bold text-porcelain font-mono flex items-center gap-2">
                  <span>{activeBlueprint.title}</span>
                  <span className="text-xs text-cyan font-normal">({activeBlueprint.duration})</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-cobalt/20 border border-cobalt/40 text-cyan text-xs font-mono font-semibold">
                  {activeBlueprint.timelineClips.length} TIMELINE CLIPS
                </span>
              </div>
            </div>

            {/* Metadata Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="bg-obsidian/80 p-2.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Industry Target</span>
                <p className="text-porcelain truncate font-medium">{activeBlueprint.industry}</p>
              </div>

              <div className="bg-obsidian/80 p-2.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Master Optics</span>
                <p className="text-cyan truncate font-medium">{activeBlueprint.cameraOptics || "Arri Alexa LF 35mm"}</p>
              </div>

              <div className="bg-obsidian/80 p-2.5 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Ratio & Format</span>
                <p className="text-porcelain font-medium">16:9 DCI (8K ProRes RAW)</p>
              </div>
            </div>
          </div>

          {/* Interactive Clip Sequence */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-cyan" />
                <span>Interactive Timeline Clips</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500">
                Total Sequence: {activeBlueprint.duration}
              </span>
            </div>

            {/* Vertical Timeline Cards */}
            <div className="space-y-4">
              {activeBlueprint.timelineClips.map((clip, index) => (
                <TimelineClipCard
                  key={`${activeBlueprint._id}-${clip.clipNumber}`}
                  clip={clip}
                  isLast={index === activeBlueprint.timelineClips.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Bottom Export Bar */}
          <div className="glass-panel-glow rounded-2xl p-4 sm:p-5 border border-cobalt/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="space-y-0.5 text-center sm:text-left">
              <h4 className="text-sm font-bold font-mono text-porcelain">
                Pipeline Ready For Production
              </h4>
              <p className="text-xs text-zinc-400">
                Export the structured blueprint or manage schemas in Sanity Studio.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleExportJSON}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cobalt hover:bg-blue-600 text-porcelain text-xs font-mono font-semibold transition-all shadow-md shadow-cobalt/25"
              >
                {exportCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>DOWNLOADED .JSON</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Export Director Brief (.JSON)</span>
                  </>
                )}
              </button>

              <Link
                href="/studio"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface hover:bg-white/10 text-porcelain text-xs font-mono border border-white/10 hover:border-white/20 transition-all"
              >
                <span>Open in Studio</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
