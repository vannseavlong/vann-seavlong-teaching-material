import { ReactNode } from "react";
import Link from "next/link";
import PrintButton from "./PrintButton";
import ExportPdfButton from "./ExportPdfButton";
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
  const styles = variant === "exercise" ? "bg-[#1e3a5f] text-white" : "bg-[#1e3a5f] text-white";
  return (
    <div
      className={`${styles} rounded-lg px-5 py-2.5 mb-5 mt-10 font-bold text-xs uppercase tracking-wider flex flex-wrap items-center justify-between gap-2`}
    >
      <span>{label}</span>
      <span className="a4-hide text-xs font-normal normal-case opacity-80">{note}</span>
    </div>
  );
}

export function QuestionBanner({ n, marks }: { n: number | string; marks: number }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-navy-900 pb-2 mb-4 mt-8">
      <h3 className="text-lg font-bold text-navy-900">Question {n}</h3>
      <span className="a4:hidden print:hidden text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
        Maximum mark: {marks}
      </span>
      <span className="hidden a4:inline print:inline text-sm font-bold">[Maximum mark: {marks}]</span>
    </div>
  );
}

export function ContextText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-slate-700 leading-relaxed mb-3">{children}</p>;
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
    <div className="mb-5 flex gap-3">
      <span className="a4:hidden print:hidden flex-shrink-0 w-6 h-6 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] font-bold text-xs flex items-center justify-center mt-0.5">
        {letter}
      </span>
      {letter !== "•" && (
        <span className="hidden a4:inline print:inline flex-shrink-0 text-sm font-semibold">({letter})</span>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
          <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 a4:p-0 a4:text-sm print:p-0 print:text-sm whitespace-nowrap">
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
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50/60 px-4 py-3 a4:rounded-none a4:border-0 a4:p-0 print:rounded-none print:border-0 print:p-0">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="border-b border-slate-200 h-7 last:border-b-0" />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs font-bold text-navy-900">Answer:</span>
        <div className="flex-1 border-b-2 border-slate-300 h-6" />
      </div>
      {answerId && (
        <div className="a4-hide mt-3">
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
    <div className="mt-3 mb-1 inline-block rounded-lg bg-sky-50 border border-sky-200 px-4 py-2">
      <span className="text-sm font-bold text-[#1e3a5f]">{children}</span>
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
      <div id={id} className="mb-8 ml-10 mt-3 scroll-mt-28 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
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
    <section
      id="summary"
      className="scroll-mt-28 mt-16 pt-8 border-t border-slate-200 export-question-hide"
    >
      <div className="bg-[#1e3a5f] text-white rounded-lg px-5 py-2.5 mb-2 font-bold text-xs uppercase tracking-wider flex flex-wrap items-center justify-between gap-2">
        <span>Summary of Final Answers</span>
        <span className="a4-hide"><ShowAllAnswersButton /></span>
      </div>
      <p className="a4-hide text-xs text-slate-400 italic mb-3 print:hidden">
        Answers are masked until you tap Show All Answers.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr>
              {["Question", "Part", "Answer"].map((h) => (
                <th key={h} className="bg-slate-100 text-navy-900 border border-slate-200 px-4 py-2.5 text-left font-semibold text-xs uppercase">
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
                <td className="px-4 py-2.5 border border-slate-200 font-mono text-navy-900 text-xs">
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
    <div className="print:hidden a4-hide sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-2 flex flex-wrap items-center gap-2">
        <div className="flex gap-2 overflow-x-auto">
          {[
            { id: "exercise", label: "Questions" },
            { id: "summary", label: "Summary of Answers" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-navy-900 font-medium transition-colors"
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
      <Link
        href="/review"
        className="print:hidden a4-hide text-sm text-slate-500 hover:text-aa-primary font-medium transition-colors"
      >
        ← All Review Papers
      </Link>
      <p className="text-xs text-slate-400">{paperLabel}</p>
    </div>
  );
}

// ─── Page-level pieces: web hero (original look) + A4 sheet with IB header ─────

/** Web hero: navy banner, one accent. In A4 mode it stays above the sheet as page chrome. */
export function PaperHero({
  topic,
  course,
  title,
  subtitle,
  stats,
  note,
  meta,
  extra,
}: {
  topic: string;
  course: string;
  title: string;
  subtitle: string;
  stats: string;
  note: string;
  meta: string;
  extra?: ReactNode;
}) {
  return (
    <div className="bg-[#1e3a5f] text-white py-10 px-6 print:hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Link href="/review" className="a4-hide text-sky-300 text-xs font-bold uppercase tracking-widest hover:underline">
            ← Review
          </Link>
          <span className="a4-hide text-white/30">|</span>
          <span className="text-xs bg-white/15 text-white px-2.5 py-1 rounded-full font-semibold">{topic}</span>
          <span className="text-xs text-white/50">{course}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold mb-1">{title}</h1>
        <p className="text-sky-300 text-base font-medium mb-4 italic">{subtitle}</p>
        <div className="bg-white/10 rounded-xl px-4 py-2.5 inline-block mb-5">
          <p className="text-xs font-bold text-white">{stats}</p>
          <p className="a4-hide text-xs text-white/70 italic mt-0.5">{note}</p>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <PrintButton />
          <ExportPdfButton />
          <span className="text-xs text-white/40">{meta}</span>
          {extra}
        </div>
      </div>
    </div>
  );
}

/**
 * The paper. Web mode: plain wrapper (original look). A4/print: the IB sheet,
 * opened by the IB header block (course, level, duration, marks, instructions).
 * The title line is print-only because the hero already shows it on screen.
 */
export function PaperSheet({
  title,
  course,
  level,
  duration,
  marks,
  instructions,
  children,
}: {
  title: string;
  course: string;
  level: string;
  duration: string;
  marks: number;
  instructions: string[];
  children: ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="a4-paper text-sm">
        <header className="hidden a4:block print:block border-2 border-black p-4 mb-6">
          <p className="text-xs font-bold uppercase tracking-widest">{course}</p>
          <h2 className="hidden print:block text-xl font-bold mt-1">{title}</h2>
          <p className="text-sm mt-1">{level}</p>
          <div className="flex justify-between text-sm font-semibold mt-3 pt-2 border-t border-black">
            <span>Duration: {duration}</span>
            <span>Total marks: {marks}</span>
          </div>
          <ul className="list-disc pl-5 mt-3 text-xs space-y-0.5">
            {instructions.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </header>
        {children}
      </div>
    </div>
  );
}
