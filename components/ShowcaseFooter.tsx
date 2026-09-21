import React from "react";
import { Film, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";

export default function ShowcaseFooter() {
  return (
    <footer className="w-full mt-24 border-t border-white/5 bg-obsidian/95 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cobalt to-cyan flex items-center justify-center shadow-md">
            <Film className="w-4 h-4 text-porcelain" />
          </div>
          <div>
            <span className="font-bold tracking-wider text-porcelain font-mono text-sm block">
              AI SITEFLOW // PRODUCTION HUB
            </span>
            <p className="text-xs text-zinc-500 font-mono">
              High-Velocity Cinema Commercials & Next.js 16 Web Platforms
            </p>
          </div>
        </div>

        {/* Agency Direct Link */}
        <div className="flex items-center gap-4">
          <a
            href="https://aisiteflow.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:glass-panel-glow border border-white/10 hover:border-cyan/40 text-xs font-mono text-zinc-300 hover:text-porcelain transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
            <span>aisiteflow.agency</span>
            <ExternalLink className="w-3.5 h-3.5 text-cobalt" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
        <p>© 2026 AI SiteFlow Agency. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan" />
          <span>Zero Heavy Video Overhead • Lightning-Fast Edge Delivery</span>
        </p>
      </div>
    </footer>
  );
}
