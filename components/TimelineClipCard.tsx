"use client";

import React, { useState } from "react";
import { Copy, Check, Video, Camera, Mic, Volume2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TimelineClip } from "@/sanity/seedData";

interface TimelineClipCardProps {
  clip: TimelineClip;
  isLast?: boolean;
}

export default function TimelineClipCard({ clip, isLast = false }: TimelineClipCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clip.promptRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement("textarea");
      textarea.value = clip.promptRaw;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: clip.clipNumber * 0.08 }}
      className="relative pl-8 sm:pl-10 group"
    >
      {/* Vertical Timeline Guide Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[19px] top-9 bottom-0 w-[2px] bg-gradient-to-b from-cobalt via-cyan/40 to-transparent group-hover:from-cyan transition-colors" />
      )}

      {/* Timeline Node Icon / Number */}
      <div className="absolute left-0 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-surface border border-cobalt/50 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-cyan shadow-md shadow-cobalt/20 group-hover:scale-105 group-hover:border-cyan transition-all">
        <span className="relative z-10">{clip.clipNumber}</span>
        <span className="absolute inset-0 rounded-xl bg-cobalt/10 animate-pulse" />
      </div>

      {/* Main Card Container */}
      <div className="glass-panel hover:glass-panel-glow rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-white/5 hover:border-cobalt/40 space-y-4">
        {/* Header: Timestamp Badge & Quick Specs */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt/15 border border-cobalt/30 text-cyan text-xs font-mono font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
            {clip.timestamp}
          </div>

          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px]">
              16:9 MASTER
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] text-zinc-300">
              CLIP {clip.clipNumber}
            </span>
          </div>
        </div>

        {/* Scene Visual Action */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Video className="w-3.5 h-3.5 text-cobalt" />
            <span>Scene Visual Action</span>
          </div>
          <p className="text-sm text-zinc-200 leading-relaxed font-sans">
            {clip.sceneHook}
          </p>
        </div>

        {/* Camera Movement & Optics */}
        <div className="bg-obsidian/70 rounded-xl p-3 border border-white/5 flex items-start sm:items-center gap-2.5">
          <Camera className="w-4 h-4 text-cyan shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs font-mono text-zinc-300 flex-1">
            <span className="text-zinc-500 uppercase text-[10px] block sm:inline sm:mr-2">Camera Optics:</span>
            {clip.cameraMotion}
          </div>
        </div>

        {/* Actor Lip-Sync Dialogue Box */}
        {clip.dialogueText && (
          <div className="bg-gradient-to-r from-surface to-obsidian rounded-xl p-3.5 border border-cobalt/20 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-cobalt font-semibold">
                <Mic className="w-3.5 h-3.5 text-cyan" />
                <span>Lip-Sync Dialogue: {clip.dialogueSpeaker || "Speaker"}</span>
              </div>
              <div className="flex items-center gap-1 text-cyan/70">
                <Volume2 className="w-3.5 h-3.5" />
                <span className="flex gap-0.5 items-end h-3">
                  <span className="w-0.5 h-2 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-0.5 h-3 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-0.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-porcelain italic font-sans pl-2 border-l-2 border-cyan/60">
              "{clip.dialogueText}"
            </p>
          </div>
        )}

        {/* Raw Video AI Generation Prompt */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Raw Video AI Generation Prompt</span>
              <span className="text-[10px] text-zinc-500 hidden sm:inline">(Sora / Kling / Gen-3)</span>
            </div>

            {/* 1-Click Copy Button */}
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-200 ${
                copied
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-md shadow-emerald-500/20"
                  : "bg-cobalt/20 text-porcelain hover:bg-cobalt border border-cobalt/40 shadow-sm"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan" />
                  <span>COPY PROMPT</span>
                </>
              )}
            </button>
          </div>

          <div className="relative rounded-xl bg-obsidian/90 p-3.5 border border-white/10 group-hover:border-cobalt/30 transition-colors">
            <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap break-words leading-relaxed selection:bg-cobalt selection:text-white">
              {clip.promptRaw}
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
