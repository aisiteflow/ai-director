"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clapperboard, Film, Layers, Database, Sparkles, Menu, X, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Studio", href: "/", icon: Clapperboard },
    { name: "Blueprints Vault", href: "/vault", icon: Layers },
    { name: "CMS Studio", href: "/studio", icon: Database },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="glass-panel-glow rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between transition-all duration-300">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt to-cyan flex items-center justify-center shadow-lg shadow-cobalt/25 transition-transform group-hover:scale-105">
            <Film className="w-5 h-5 text-porcelain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold tracking-wider text-porcelain group-hover:text-cyan transition-colors">
                AI DIRECTOR
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cobalt/20 text-cyan border border-cobalt/40">
                PRO 2026
              </span>
            </div>
            <p className="text-[10px] tracking-widest uppercase font-mono text-zinc-400 flex items-center gap-1">
              POWERED BY <span className="text-red-400 font-semibold">SANITY</span>
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-obsidian/60 p-1.5 rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-mono font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "text-porcelain bg-cobalt/20 border border-cobalt/40 shadow-inner"
                    : "text-zinc-400 hover:text-porcelain hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan" : "text-zinc-500"}`} />
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-cobalt to-cyan rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Challenge Badges & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/80 border border-white/10 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
            </span>
            <span className="text-zinc-300">DEV.TO + SANITY</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cobalt font-semibold">CHALLENGE</span>
          </div>

          <Link
            href="/studio"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cobalt text-porcelain hover:bg-blue-600 transition-all shadow-md shadow-cobalt/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Studio CMS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-porcelain hover:bg-white/5"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 glass-panel rounded-2xl border border-white/10 space-y-3"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-mono tracking-wide ${
                      isActive
                        ? "bg-cobalt/20 text-porcelain border border-cobalt/40"
                        : "text-zinc-400 hover:text-porcelain hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-cyan" : "text-zinc-400"}`} />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan" /> Dev.to + Sanity Entry
              </span>
              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-cyan hover:underline flex items-center gap-1"
              >
                CMS <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
