"use client";

import { AnswerRevealProvider } from "@/components/review/AnswerReveal";
import ExportPdfButton from "@/components/review/ExportPdfButton";
import PrintButton from "../physics-motion/PrintButton";

/** Print + Export buttons shown above the paper (web and A4 modes). */
export default function WorksheetActions() {
  return (
    <AnswerRevealProvider>
      <div className="print:hidden flex flex-wrap items-center gap-3">
        <PrintButton />
        <ExportPdfButton />
      </div>
    </AnswerRevealProvider>
  );
}
