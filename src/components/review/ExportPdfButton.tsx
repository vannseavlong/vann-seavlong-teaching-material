"use client";

// ─── Export-to-PDF control for Review paper pages ─────────────────────────────
// Offers two forced export modes on top of the browser's Print dialog (Save as
// PDF): "Export Question" (blank exercise paper, no worked solutions) and
// "Export Q&A" (exercise + full worked answer sheet). Each option forces the
// AnswerReveal state to the right shape, flags the page via a
// `data-print-mode` attribute (see globals.css) so the answer-key summary
// table is dropped in question-only exports, then triggers window.print().
// The prior on-screen reveal state is restored once the print dialog closes.

import { useEffect, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { useAnswerReveal } from "./AnswerReveal";

type ExportMode = "question" | "qa";

export default function ExportPdfButton() {
  const { globalOpen, setAllRevealed } = useAnswerReveal();
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
    restoreRef.current = globalOpen;
    document.documentElement.setAttribute("data-print-mode", mode);
    setAllRevealed(mode === "qa");

    // Let React commit the reveal-state change before the print snapshot is taken.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => window.print());
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="print:hidden group inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-slate-50 data-[state=open]:bg-slate-50">
        Export PDF
        <ChevronDownIcon className="size-3.5 transition-transform group-data-[state=open]:rotate-180" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64 p-1">
        <DropdownMenuItem onSelect={() => handleExport("question")} className="flex-col items-start gap-0.5 px-3 py-2.5">
          <span className="text-sm font-bold text-navy-900">Export Question</span>
          <span className="text-xs text-slate-500">Clean exercise paper, no answers</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => handleExport("qa")} className="flex-col items-start gap-0.5 px-3 py-2.5">
          <span className="text-sm font-bold text-navy-900">Export Q&amp;A</span>
          <span className="text-xs text-slate-500">Exercise paper with full worked answers</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
