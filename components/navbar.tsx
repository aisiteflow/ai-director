"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Film,
  LayoutGrid,
  Database,
  ExternalLink,
  Sparkles,
  Menu,
  X,
  Home,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview Hub", href: "/", icon: Home },
    { name: "4K Commercials", href: "/commercials", icon: Film },
    { name: "SaaS Templates", href: "/templates", icon: LayoutGrid },
    { name: "Sanity Studio", href: "/studio", icon: Database },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-3 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="glass-panel-glow rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl bg-obsidian/85 transition-all duration-300">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt to-cyan flex items-center justify-center shadow-lg shadow-cobalt/25 transition-transform group-hover:scale-105">
            <Film className="w-5 h-5 text-porcelain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-extrabold tracking-wide font-sans text-porcelain group-hover:text-cyan transition-colors">
                AI DIRECTOR
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cobalt/20 text-cyan border border-cobalt/40 font-semibold">
                ix5izt37
              </span>
            </div>
            <p className="text-[10px] tracking-wider uppercase font-mono text-zinc-400">
              POWERED BY SANITY (ix5izt37)
            </p>
          </div>
        </Link>

        {/* Desktop Route Links */}
        <div className="hidden lg:flex items-center gap-1.5 bg-obsidian/80 p-1.5 rounded-xl border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                  active
                    ? "bg-cobalt text-porcelain shadow-sm shadow-cobalt/40 border border-cyan/30"
                    : "text-zinc-400 hover:text-porcelain hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    active ? "text-cyan" : "text-zinc-400"
                  }`}
                />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://aisiteflow.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cobalt to-blue-600 hover:from-blue-600 hover:to-cobalt text-porcelain transition-all shadow-md shadow-cobalt/30 hover:scale-[1.02] active:scale-[0.98] border border-cyan/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>OFFICIAL AGENCY ↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface border border-white/10 text-zinc-300 hover:text-porcelain focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-cyan" />
            ) : (
              <Menu className="w-5 h-5 text-porcelain" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl glass-panel-glow border border-white/10 bg-obsidian/95 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium flex items-center justify-between transition-all ${
                    active
                      ? "bg-cobalt text-porcelain shadow-sm shadow-cobalt/40 border border-cyan/30"
                      : "text-zinc-400 hover:text-porcelain hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${active ? "text-cyan" : "text-zinc-400"}`} />
                    <span>{link.name}</span>
                  </div>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <a
              href="https://aisiteflow.agency"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cobalt to-blue-600 text-porcelain shadow-md shadow-cobalt/30"
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span>OFFICIAL AGENCY ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
