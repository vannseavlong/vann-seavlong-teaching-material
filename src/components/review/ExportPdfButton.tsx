"use client";

// ─── Export-to-PDF control for Review paper pages ─────────────────────────────
// Offers two forced export modes on top of the browser's Print dialog (Save as
// PDF): "Export Question" (blank exercise paper, no worked solutions) and
// "Export Q&A" (exercise + full worked answer sheet). Each option forces the
// AnswerReveal state to the right shape, flags the page via a
// `data-print-mode` attribute (see globals.css) so the answer-key summary
// table is dropped in question-only exports, then triggers window.print().
// The prior on-screen reveal state is restored once the print dialog closes.

import { useEffect, useRef, useState } from "react";
import { useAnswerReveal } from "./AnswerReveal";

type ExportMode = "question" | "qa";

export default function ExportPdfButton() {
  const { globalOpen, setAllRevealed } = useAnswerReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const restoreRef = useRef<boolean | null>(null);

  useEffect(() => {
    const restore = () => {
      if (restoreRef.current !== null) {
        setAllRevealed(restoreRef.current);
        restoreRef.current = null;
      }
      document.documentElement.removeAttribute("data-print-mode");
    };
    window.addEventListener("afterprint", restore);
    return () => window.removeEventListener("afterprint", restore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleExport(mode: ExportMode) {
    setMenuOpen(false);
    restoreRef.current = globalOpen;
    document.documentElement.setAttribute("data-print-mode", mode);
    setAllRevealed(mode === "qa");

    // Let React commit the reveal-state change before the print snapshot is taken.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.print());
    });
  }

  return (
    <div className="print:hidden relative inline-block">
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/20"
      >
        Export PDF
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`w-3.5 h-3.5 transition-transform ${menuOpen ? "rotate-180" : ""}`}
        >
          <path d="M5.25 7.5 10 12.25l4.75-4.75H5.25Z" />
        </svg>
      </button>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close export menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 cursor-default"
          />
          <div
            role="menu"
            className="absolute z-40 top-full left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden text-left"
          >
            <button
              type="button"
              role="menuitem"
              onClick={() => handleExport("question")}
              className="w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors"
            >
              <span className="block text-sm font-bold text-navy-900">Export Question</span>
              <span className="block text-xs text-slate-400 mt-0.5">
                Clean exercise paper — no answers
              </span>
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => handleExport("qa")}
              className="w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors border-t border-slate-100"
            >
              <span className="block text-sm font-bold text-navy-900">Export Q&amp;A</span>
              <span className="block text-xs text-slate-400 mt-0.5">
                Exercise paper + full worked answers
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
