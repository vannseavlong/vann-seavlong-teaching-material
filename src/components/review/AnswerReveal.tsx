"use client";

// ─── Client-side reveal state for Review paper pages ──────────────────────────
// Lets each answer be shown/hidden independently, plus one "Show All Answers"
// control that toggles every answer on the page at once. Wrap a paper's page
// content in <AnswerRevealProvider> and use these pieces from PaperKit.tsx.

import { createContext, useContext, useState, type ReactNode } from "react";

type AnswerRevealContextValue = {
  globalOpen: boolean;
  toggleGlobal: () => void;
  isOpen: (id: string) => boolean;
  toggleOne: (id: string) => void;
  /** Force every answer open/closed (clears per-part overrides) — used by ExportPdfButton. */
  setAllRevealed: (open: boolean) => void;
};

const AnswerRevealContext = createContext<AnswerRevealContextValue | null>(null);

export function AnswerRevealProvider({ children }: { children: ReactNode }) {
  const [globalOpen, setGlobalOpen] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});

  const toggleGlobal = () => {
    setGlobalOpen((prev) => !prev);
    setOverrides({});
  };

  const toggleOne = (id: string) => {
    setOverrides((prev) => ({ ...prev, [id]: !(prev[id] ?? globalOpen) }));
  };

  const setAllRevealed = (open: boolean) => {
    setGlobalOpen(open);
    setOverrides({});
  };

  const isOpen = (id: string) => overrides[id] ?? globalOpen;

  return (
    <AnswerRevealContext.Provider value={{ globalOpen, toggleGlobal, isOpen, toggleOne, setAllRevealed }}>
      {children}
    </AnswerRevealContext.Provider>
  );
}

/** Read/drive the reveal state from outside PaperKit — used by ExportPdfButton. */
export function useAnswerReveal() {
  const ctx = useContext(AnswerRevealContext);
  if (!ctx) {
    throw new Error("Answer reveal components must be used within an AnswerRevealProvider");
  }
  return ctx;
}

function useAnswerRevealContext() {
  return useAnswerReveal();
}

/** Global "Show All Answers / Hide All Answers" control — clears any individual overrides. */
export function ShowAllAnswersButton() {
  const { globalOpen, toggleGlobal } = useAnswerRevealContext();
  return (
    <button
      type="button"
      onClick={toggleGlobal}
      className={`print:hidden whitespace-nowrap text-xs px-3 py-1.5 rounded-full font-bold transition-colors ${
        globalOpen
          ? "bg-[#1e3a5f] text-white hover:bg-[#16304d]"
          : "bg-purple-700 text-white hover:bg-purple-800"
      }`}
    >
      {globalOpen ? "Hide All Answers" : "Show All Answers"}
    </button>
  );
}

/** Per-part "Show Answer / Hide Answer" toggle. */
export function AnswerToggleButton({ id }: { id: string }) {
  const { isOpen, toggleOne } = useAnswerRevealContext();
  const open = isOpen(id);
  return (
    <button
      type="button"
      onClick={() => toggleOne(id)}
      aria-expanded={open}
      className={`print:hidden inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
        open
          ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
          : "bg-purple-700 text-white hover:bg-purple-800"
      }`}
    >
      {open ? "Hide Answer ▲" : "Show Answer ▼"}
    </button>
  );
}

/** Renders children only while `id` is revealed (by its own toggle or the global one). */
export function AnswerReveal({ id, children }: { id: string; children: ReactNode }) {
  const { isOpen } = useAnswerRevealContext();
  if (!isOpen(id)) return null;
  return <>{children}</>;
}

/** Masks a value (e.g. a Summary Table cell) until "Show All Answers" is on. */
export function MaskedAnswer({ children }: { children: ReactNode }) {
  const { globalOpen } = useAnswerRevealContext();
  if (!globalOpen) {
    return <span className="text-slate-300 select-none">••••••</span>;
  }
  return <>{children}</>;
}
