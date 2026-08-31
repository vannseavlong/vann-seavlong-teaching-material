import { ReactNode } from "react";
import Link from "next/link";
import { AnswerReveal, AnswerToggleButton, MaskedAnswer, ShowAllAnswersButton } from "./AnswerReveal";

// ─── Shared building blocks for Review paper pages (exercise + answer sheet) ──
// Used by src/app/review/[paper]/page.tsx. Keep this file dependency-free so
// each paper page only needs to import what it uses.

export function PartHeader({
  variant,
  label,
  note,
}: {
  variant: "exercise" | "answers";
  label: string;
  note: string;
}) {
  const styles = variant === "exercise" ? "bg-purple-700" : "bg-[#1e3a5f]";
  return (
    <div
      className={`${styles} text-white rounded-lg px-5 py-3 mb-6 mt-14 font-bold text-sm uppercase tracking-wider flex flex-wrap items-center justify-between gap-2`}
    >
      <span>{label}</span>
      <span className="text-xs font-normal normal-case opacity-80">{note}</span>
    </div>
  );
}

export function QuestionBanner({ n, marks }: { n: number | string; marks: number }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-navy-900 pb-2 mb-5 mt-10">
      <h3 className="text-xl font-bold text-navy-900">Question {n}</h3>
      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
        Maximum mark: {marks}
      </span>
    </div>
  );
}

export function ContextText({ children }: { children: ReactNode }) {
  return <p className="text-slate-700 leading-relaxed mb-4">{children}</p>;
}

/** Exercise-side sub-part: letter badge, statement, mark pill. Use letter="•" for flat (unlettered) questions. */
export function PartBlock({
  letter,
  marks,
  children,
}: {
  letter: string;
  marks: number;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex gap-3">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-sm flex items-center justify-center mt-0.5">
        {letter}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="text-slate-700 leading-relaxed">{children}</div>
          <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 whitespace-nowrap">
            [{marks}]
          </span>
        </div>
      </div>
    </div>
  );
}

/** Blank ruled working space + answer line. The worked solution (`answerId`) follows directly below via `AnswerPart`. */
export function WorkSpace({ lines = 3, answerId }: { lines?: number; answerId?: string }) {
  return (
    <div className="ml-10 mb-2">
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50/60 px-4 py-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="border-b border-slate-200 h-7 last:border-b-0" />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs font-bold text-navy-900">Answer:</span>
        <div className="flex-1 border-b-2 border-slate-300 h-6" />
      </div>
      {answerId && (
        <div className="mt-3">
          <AnswerToggleButton id={answerId} />
        </div>
      )}
    </div>
  );
}

export function AnswerStep({ children }: { children: ReactNode }) {
  return <div className="mb-3 overflow-x-auto">{children}</div>;
}

export function FinalAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 mb-1 inline-block rounded-lg bg-purple-50 border border-purple-200 px-4 py-2">
      <span className="text-sm font-bold text-purple-700">{children}</span>
    </div>
  );
}

/** Worked solution for a part — hidden by default, revealed by the matching `WorkSpace`'s Show Answer button (same `id`). */
export function AnswerPart({
  id,
  letter,
  marks,
  restate,
  children,
}: {
  id: string;
  letter: string;
  marks: number;
  restate?: string;
  children: ReactNode;
}) {
  return (
    <AnswerReveal id={id}>
      <div id={id} className="mb-8 ml-10 mt-3 scroll-mt-28 rounded-xl border border-purple-100 bg-purple-50/50 p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e3a5f] text-white font-bold text-sm flex items-center justify-center">
            {letter}
          </span>
          {restate && <span className="text-sm font-semibold text-slate-500">{restate}</span>}
          <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full bg-white text-slate-500 whitespace-nowrap">
            [{marks}]
          </span>
        </div>
        <div>{children}</div>
      </div>
    </AnswerReveal>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs text-slate-500 italic bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 mt-2">
      {children}
    </p>
  );
}

export function SummaryTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <section id="summary" className="scroll-mt-28 mt-16 pt-8 border-t border-slate-200">
      <div className="bg-[#1e3a5f] text-white rounded-lg px-5 py-3 mb-2 font-bold text-sm uppercase tracking-wider flex flex-wrap items-center justify-between gap-2">
        <span>Summary of Final Answers</span>
        <ShowAllAnswersButton />
      </div>
      <p className="text-xs text-slate-400 italic mb-3">Answers are masked until you tap Show All Answers.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr>
              {["Question", "Part", "Answer"].map((h) => (
                <th key={h} className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2.5 border border-slate-200 font-semibold text-navy-900">{row[0]}</td>
                <td className="px-4 py-2.5 border border-slate-200 text-slate-600">{row[1]}</td>
                <td className="px-4 py-2.5 border border-slate-200 font-mono text-purple-700 text-sm">
                  <MaskedAnswer>{row[2]}</MaskedAnswer>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function StickyPaperNav() {
  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-2 flex flex-wrap items-center gap-2">
        <div className="flex gap-2 overflow-x-auto">
          {[
            { id: "exercise", label: "Questions" },
            { id: "summary", label: "Summary of Answers" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-purple-100 text-slate-500 hover:text-purple-700 font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="ml-auto">
          <ShowAllAnswersButton />
        </div>
      </div>
    </div>
  );
}

export function PaperFooterNav({ paperLabel }: { paperLabel: string }) {
  return (
    <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
      <Link href="/review" className="text-sm text-slate-500 hover:text-purple-700 font-medium transition-colors">
        ← All Review Papers
      </Link>
      <p className="text-xs text-slate-400">{paperLabel}</p>
    </div>
  );
}
