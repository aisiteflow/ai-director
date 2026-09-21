"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Film, LayoutGrid, ExternalLink, Sparkles } from "lucide-react";

interface ShowcaseNavbarProps {
  activeTab?: string;
  onTabChange?: (tab: "commercials" | "templates") => void;
}

export default function ShowcaseNavbar({
  activeTab = "commercials",
  onTabChange,
}: ShowcaseNavbarProps) {
  const handleScroll = (id: string, tab: "commercials" | "templates") => {
    if (onTabChange) {
      onTabChange(tab);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="glass-panel-glow rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between transition-all duration-300">
        {/* Brand Logo */}
        <Link
          href="https://aisiteflow.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt to-cyan flex items-center justify-center shadow-lg shadow-cobalt/25 transition-transform group-hover:scale-105">
            <Film className="w-5 h-5 text-porcelain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold tracking-wider text-porcelain group-hover:text-cyan transition-colors">
                AI SITEFLOW
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cobalt/20 text-cyan border border-cobalt/40">
                HUB
              </span>
            </div>
            <p className="text-[10px] tracking-widest uppercase font-mono text-zinc-400">
              PRODUCTION SHOWCASE
            </p>
          </div>
        </Link>

        {/* Quick Tab Switcher */}
        <div className="hidden sm:flex items-center gap-1.5 bg-obsidian/80 p-1.5 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => handleScroll("commercials", "commercials")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
              activeTab === "commercials"
                ? "bg-cobalt text-porcelain shadow-sm shadow-cobalt/30"
                : "text-zinc-400 hover:text-porcelain hover:bg-white/5"
            }`}
          >
            <Film className="w-3.5 h-3.5 text-cyan" />
            <span>4K Commercials (5)</span>
          </button>

          <button
            type="button"
            onClick={() => handleScroll("templates", "templates")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
              activeTab === "templates"
                ? "bg-cobalt text-porcelain shadow-sm shadow-cobalt/30"
                : "text-zinc-400 hover:text-porcelain hover:bg-white/5"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-cyan" />
            <span>Next.js Templates (5)</span>
          </button>
        </div>

        {/* Top CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://aisiteflow.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cobalt to-blue-600 hover:from-blue-600 hover:to-cobalt text-porcelain transition-all shadow-md shadow-cobalt/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>VISIT OFFICIAL AGENCY →</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
