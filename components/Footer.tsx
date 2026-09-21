import React from "react";
import Link from "next/link";
import { Film, Sparkles, ExternalLink, ShieldCheck, Database } from "lucide-react";

export default function Footer() {
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
              AI DIRECTOR // POWERED BY SANITY (ix5izt37)
            </span>
            <p className="text-xs text-zinc-500 font-mono">
              Project ID: ix5izt37 (production) • High-Velocity Cinema & Next.js 16 Web Apps
            </p>
          </div>
        </div>

        {/* Quick Route Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
          <Link href="/" className="hover:text-porcelain transition-colors">
            Overview
          </Link>
          <span className="text-zinc-700">•</span>
          <Link href="/commercials" className="hover:text-porcelain transition-colors">
            Commercials
          </Link>
          <span className="text-zinc-700">•</span>
          <Link href="/templates" className="hover:text-porcelain transition-colors">
            Templates
          </Link>
          <span className="text-zinc-700">•</span>
          <Link href="/studio" className="hover:text-cyan transition-colors flex items-center gap-1">
            <Database className="w-3 h-3 text-cyan" />
            <span>Studio</span>
          </Link>
          <span className="text-zinc-700">•</span>
          <a
            href="https://aisiteflow.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:underline flex items-center gap-1"
          >
            <span>Agency</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
        <p>© 2026 AI SiteFlow Agency. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan" />
          <span>Sanity CMS ix5izt37 Connected • Zero Heavy Video Overhead</span>
        </p>
      </div>
    </footer>
  );
}
