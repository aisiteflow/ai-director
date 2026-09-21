import React from "react";
import Image from "next/image";
import { Play, Volume2, Maximize2, ArrowRight, ExternalLink } from "lucide-react";
import { CommercialShowcase } from "@/data/showcase-data";

interface CommercialCardProps {
  showcase: CommercialShowcase;
}

export default function CommercialCard({ showcase }: CommercialCardProps) {
  return (
    <div className="glass-panel hover:glass-panel-glow rounded-2xl overflow-hidden border border-white/10 hover:border-cobalt/40 transition-all duration-300 flex flex-col group shadow-xl">
      {/* 16:9 Widescreen Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-obsidian">
        <Image
          src={showcase.coverSrc}
          alt={showcase.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent pointer-events-none" />

        {/* Top-Left Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-obsidian/85 backdrop-blur-md border border-white/10 text-cyan text-[11px] font-mono font-semibold tracking-wider uppercase">
            {showcase.category}
          </span>
        </div>

        {/* Center Play Button Overlay */}
        <a
          href={showcase.detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 flex items-center justify-center group/play cursor-pointer"
          aria-label={`Play commercial: ${showcase.title}`}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-obsidian/80 backdrop-blur-md border border-white/20 group-hover/play:border-cyan flex items-center justify-center text-porcelain group-hover/play:text-cyan transition-all duration-300 group-hover/play:scale-110 shadow-2xl group-hover/play:shadow-cyan/40">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
          </div>
        </a>

        {/* Bottom Right Duration & Audio/Fullscreen Visual Indicators */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-obsidian/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-zinc-300 text-xs font-mono">
          <Volume2 className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-cyan">{showcase.duration}</span>
          <span className="text-zinc-600">|</span>
          <Maximize2 className="w-3.5 h-3.5 text-zinc-400" />
        </div>
      </div>

      {/* Card Content & Actions */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold font-sans text-porcelain group-hover:text-cyan transition-colors">
              {showcase.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans line-clamp-2">
            {showcase.description}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 border-t border-white/5">
          {/* Button 1: Solid colored hire button */}
          <a
            href={showcase.hiringUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cobalt to-blue-600 hover:from-blue-600 hover:to-cobalt text-porcelain text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md shadow-cobalt/25 hover:shadow-cyan/20 active:scale-[0.98]"
          >
            <span>HIRE FOR MY BUSINESS →</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Button 2: Subtle pill button */}
          <a
            href={showcase.detailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface hover:bg-white/10 text-zinc-300 hover:text-porcelain text-xs font-mono font-medium border border-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
          >
            <span>VIEW PRODUCTION DETAILS</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan" />
          </a>
        </div>
      </div>
    </div>
  );
}
