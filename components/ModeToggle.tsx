"use client";

import React from "react";
import { useMode } from "./ModeContext";

export default function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="fixed top-6 right-6 z-50 animate-in">
      <div className="flex items-center gap-1 p-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <button
          onClick={() => setMode("human")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
            mode === "human"
              ? "bg-accent/20 text-white border border-accent/40 shadow-[0_0_12px_rgba(140,109,255,0.3)] font-medium"
              : "text-muted hover:text-white/80 hover:bg-white/5 border border-transparent"
          }`}
          aria-label="Switch to Human visual interface mode"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>Human</span>
        </button>

        <button
          onClick={() => setMode("machine")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
            mode === "machine"
              ? "bg-accent/20 text-white border border-accent/40 shadow-[0_0_12px_rgba(140,109,255,0.3)] font-medium"
              : "text-muted hover:text-white/80 hover:bg-white/5 border border-transparent"
          }`}
          aria-label="Switch to Agent-friendly machine format"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Machine</span>
        </button>
      </div>
    </div>
  );
}
