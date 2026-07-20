"use client";

import React, { createContext, useContext, useState } from "react";

export type Mode = "human" | "machine";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "human",
  setMode: () => {},
});

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeState] = useState<Mode>(() => {
    if (typeof window === "undefined") return "human";
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get("mode");
    if (urlMode === "machine" || urlMode === "human") {
      return urlMode as Mode;
    }
    const savedMode = localStorage.getItem("view_mode");
    if (savedMode === "machine" || savedMode === "human") {
      return savedMode as Mode;
    }
    return "human";
  });

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("view_mode", newMode);
      const url = new URL(window.location.href);
      url.searchParams.set("mode", newMode);
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
