"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Copy, Check, Sparkles, Film, Camera, Music, Video, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CommercialBlueprint } from "@/sanity/seedData";

interface BlueprintDrawerProps {
  blueprint: CommercialBlueprint | null;
  onClose: () => void;
}

export default function BlueprintDrawer({ blueprint, onClose }: BlueprintDrawerProps) {
  const router = useRouter();
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [jsonCopied, setJsonCopied] = useState(false);

  if (!blueprint) return null;

  const handleCopyPrompt = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPromptIndex(index);
      setTimeout(() => setCopiedPromptIndex(null), 2000);
    } catch {
      setCopiedPromptIndex(index);
      setTimeout(() => setCopiedPromptIndex(null), 2000);
    }
  };

  const handleCopyJSON = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(blueprint, null, 2));
      setJsonCopied(true);
      setTimeout(() => setJsonCopied(false), 2000);
    } catch {
      setJsonCopied(true);
      setTimeout(() => setJsonCopied(false), 2000);
    }
  };

  const handleCloneToStudio = () => {
    // Navigate to studio with selected blueprint slug
    router.push(`/?clone=${blueprint.slug.current}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian/80 backdrop-blur-md transition-opacity"
        />

        {/* Drawer Content Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 280 }}
          className="relative w-full max-w-2xl bg-surface border-l border-white/10 shadow-2xl h-full flex flex-col z-10 overflow-y-auto"
        >
          {/* Drawer Header */}
          <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
              <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-porcelain">
                Inspect Blueprint // {blueprint.industry}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-porcelain hover:bg-white/5 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="p-6 space-y-6 flex-1">
            {/* 16:9 Cover Frame Preview */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={blueprint.coverImage || "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"}
                alt={blueprint.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cobalt/30 border border-cobalt/40 text-cyan mb-1 inline-block">
                  {blueprint.duration} NARRATIVE MASTER
                </span>
                <h3 className="text-lg font-bold text-porcelain font-mono">{blueprint.title}</h3>
              </div>
            </div>

            {/* Audio Profile & Optics Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-obsidian/80 p-3 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase">
                  <Camera className="w-3.5 h-3.5 text-cyan" />
                  <span>Camera Optics</span>
                </div>
                <p className="text-xs text-porcelain font-mono leading-relaxed">
                  {blueprint.cameraOptics || "Arri Alexa LF 35mm Master Prime"}
                </p>
              </div>

              <div className="bg-obsidian/80 p-3 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase">
                  <Music className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Acoustic Profile</span>
                </div>
                <p className="text-xs text-porcelain font-mono leading-relaxed truncate">
                  {blueprint.audioProfile || "Sub-bass harmonic resonance & spatial Foley"}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {blueprint.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Timeline Clips Breakdown */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-cyan" />
                <span>Sequenced Clips ({blueprint.timelineClips.length})</span>
              </h4>

              <div className="space-y-4">
                {blueprint.timelineClips.map((clip, idx) => (
                  <div
                    key={clip.clipNumber}
                    className="p-4 rounded-xl bg-obsidian/80 border border-white/5 hover:border-cobalt/30 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan font-semibold">
                        {clip.timestamp}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        CLIP #{clip.clipNumber}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-200 leading-relaxed">
                      {clip.sceneHook}
                    </p>

                    {clip.dialogueText && (
                      <p className="text-xs text-porcelain italic bg-surface/50 p-2 rounded-lg border-l-2 border-cobalt">
                        "{clip.dialogueText}"
                      </p>
                    )}

                    {/* Copy Clip Prompt */}
                    <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-500">Video AI Prompt</span>
                      <button
                        onClick={() => handleCopyPrompt(clip.promptRaw, idx)}
                        className="flex items-center gap-1 text-cyan hover:underline"
                      >
                        {copiedPromptIndex === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copy Prompt
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="sticky bottom-0 bg-surface/95 backdrop-blur-md p-4 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={handleCopyJSON}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-porcelain transition-all flex items-center gap-2"
            >
              {jsonCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{jsonCopied ? "JSON Copied!" : "Copy Full JSON"}</span>
            </button>

            <button
              onClick={handleCloneToStudio}
              className="flex-1 px-4 py-2.5 rounded-xl bg-cobalt hover:bg-blue-600 text-porcelain text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cobalt/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Clone & Load in Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
