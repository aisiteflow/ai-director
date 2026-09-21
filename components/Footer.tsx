import React from "react";
import Link from "next/link";
import { Film, Sparkles, Terminal, Code2, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-white/5 bg-obsidian/90 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Synopsis */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cobalt to-cyan flex items-center justify-center shadow-md">
                <Film className="w-4 h-4 text-porcelain" />
              </div>
              <span className="font-bold tracking-wider text-porcelain font-mono text-sm">
                AI COMMERCIAL DIRECTOR
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Architectural prompt compilation pipeline engine. Bridges the gap between high-concept cinema directing,
              structured headless CMS taxonomy via Sanity, and raw multi-clip video generation for Sora, Kling, and Runway Gen-3.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-cobalt" /> Next.js 16 (App Router)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan" /> React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                <Code2 className="w-3 h-3 text-red-400" /> Sanity Studio v6
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
              Command Deck
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/" className="hover:text-cyan transition-colors">
                  Studio Brief Compiler
                </Link>
              </li>
              <li>
                <Link href="/vault" className="hover:text-cyan transition-colors">
                  Blueprints Vault
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-cyan transition-colors">
                  Sanity Studio Embed
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Challenge Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
              Submission Specs
            </h4>
            <div className="text-xs font-mono text-zinc-400 space-y-1.5">
              <p>
                <span className="text-zinc-500">Event:</span> Dev.to + Sanity Hackathon
              </p>
              <p>
                <span className="text-zinc-500">Optics:</span> Arri Alexa LF / Cooke S7
              </p>
              <p>
                <span className="text-zinc-500">Color System:</span> Obsidian / Cobalt
              </p>
              <p className="flex items-center gap-1 text-cyan pt-1">
                <Terminal className="w-3 h-3" /> Zero Console Errors
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 AI Commercial Director. Built for the Sanity + Dev.to Global Challenge.</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-zinc-400 bg-surface px-2.5 py-1 rounded border border-white/5">
              Offline-Seed Verified
            </span>
            <span className="text-cobalt">#SanityHackathon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
