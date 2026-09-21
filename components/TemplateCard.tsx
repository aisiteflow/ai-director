import React from "react";
import Image from "next/image";
import { ExternalLink, Zap, ArrowRight, LayoutTemplate } from "lucide-react";
import { TemplateShowcase } from "@/data/showcase-data";

interface TemplateCardProps {
  template: TemplateShowcase;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="glass-panel hover:glass-panel-glow rounded-2xl overflow-hidden border border-white/10 hover:border-cobalt/40 transition-all duration-300 flex flex-col group shadow-xl">
      {/* Aspect Ratio Preview with Rounded Borders and Clickable Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
        <Image
          src={template.coverSrc}
          alt={template.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent pointer-events-none" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-obsidian/85 backdrop-blur-md border border-white/10 text-cyan text-[11px] font-mono font-semibold tracking-wider uppercase">
            {template.category}
          </span>
        </div>

        {/* Live Template Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 rounded bg-cobalt/90 text-porcelain text-[10px] font-mono font-semibold uppercase flex items-center gap-1">
            <LayoutTemplate className="w-3 h-3 text-cyan" />
            Next.js 16
          </span>
        </div>

        {/* Clickable Overlay to detailUrl */}
        <a
          href={template.detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer"
          aria-label={`View details for ${template.title}`}
        />
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold font-sans text-porcelain group-hover:text-cyan transition-colors">
            {template.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans line-clamp-2">
            {template.description}
          </p>
        </div>

        {/* Action Buttons Section */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          {/* Action Row 1 (Split Row: Launch Template ↗ and Customize ⚡) */}
          <div className="grid grid-cols-2 gap-2">
            {/* Launch Template */}
            <a
              href={template.launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cobalt/20 hover:bg-cobalt border border-cobalt/40 hover:border-cobalt text-porcelain text-xs font-mono font-semibold transition-all shadow-sm active:scale-[0.98] truncate"
            >
              <span className="truncate">Launch Template ↗</span>
            </a>

            {/* Customize */}
            <a
              href={template.customizeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface hover:bg-white/10 border border-white/10 hover:border-white/20 text-porcelain text-xs font-mono font-semibold transition-all shadow-sm active:scale-[0.98] truncate"
            >
              <span className="truncate">Customize ⚡</span>
            </a>
          </div>

          {/* Action Row 2 (Full Width Button: VIEW DETAILS →) */}
          <a
            href={template.detailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-obsidian/70 hover:bg-surface border border-white/10 hover:border-cobalt/40 text-zinc-300 hover:text-porcelain text-xs font-mono font-bold tracking-wider uppercase transition-all active:scale-[0.98]"
          >
            <span>VIEW DETAILS →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
