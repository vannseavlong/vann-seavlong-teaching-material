import { ReactNode } from "react";
import Link from "next/link";
import PrintButton from "./PrintButton";
import ExportPdfButton from "./ExportPdfButton";
import { AnswerReveal, AnswerToggleButton, MaskedAnswer, ShowAllAnswersButton } from "./AnswerReveal";

// ─── Shared building blocks for Review paper pages (exercise + answer sheet) ──
// Used by src/app/review/[paper]/page.tsx. Keep this file dependency-free so
// each paper page only needs to import what it uses.

/** Web-only page chrome above the paper: back link, one-line title, one-line description, Print + Export. */
export function PaperTop({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-slate-50 border-b border-slate-200 text-navy-900 py-8 px-6 print:hidden">
      <div className="max-w-4xl mx-auto">
        <Link href="/review" className="text-aa-primary text-xs font-bold uppercase tracking-widest a4-hide hover:underline">
          ← Review
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2">{title}</h1>
        <p className="text-slate-600 mt-1">{description}</p>
        <div className="flex flex-wrap gap-3 items-center mt-4">
          <PrintButton />
          <ExportPdfButton />
        </div>
      </div>
    </div>
  );
}

/** IB paper header block (top of `.a4-paper`): course, level, title, duration, total marks, instructions. */
export function PaperHeader({
  course,
  level,
  title,
  duration,
  marks,
  instructions,
}: {
  course: string;
  level?: string;
  title: string;
  duration: string;
  marks: number;
  instructions: ReactNode[];
}) {
  return (
    <header className="mb-8">
      <div className="border-b-2 border-navy-900 pb-3">
        <p className="text-sm font-bold uppercase tracking-wide">
          {course}
          {level ? ` · ${level}` : ""}
        </p>
        <h2 className="text-2xl font-bold mt-1">{title}</h2>
        <p className="text-sm mt-1">
          Duration: {duration} · Total marks: {marks}
        </p>
      </div>
      <p className="text-sm font-bold mt-4 mb-1">Instructions to candidates</p>
      <ul className="list-disc pl-5 text-sm space-y-0.5">
        {instructions.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </header>
  );
}

/** IB question opener: "1.  [Maximum mark: N]". */
export function QuestionBanner({ n, marks }: { n: number | string; marks: number }) {
  return (
    <div className="flex items-baseline gap-3 font-bold mt-8 mb-3 break-after-avoid">
      <span>{n}.</span>
      <span>[Maximum mark: {marks}]</span>
    </div>
  );
}

export function ContextText({ children }: { children: ReactNode }) {
  return <p className="text-slate-700 leading-relaxed mb-3">{children}</p>;
}

/** Exercise-side sub-part: "(a)" label, statement, right-aligned mark. Use letter="•" for flat (unlettered) questions. */
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
    <div className="mb-2 flex gap-3 break-inside-avoid">
      {letter !== "•" && <span className="flex-shrink-0 w-6 font-semibold">({letter})</span>}
      <div className="flex-1 min-w-0 text-slate-700 leading-relaxed">{children}</div>
      <span className="flex-shrink-0 font-semibold whitespace-nowrap">[{marks}]</span>
    </div>
  );
}

/** Blank ruled working space. The worked solution (`answerId`) follows via `AnswerPart`; its Show Answer button is a4-hide. */
export function WorkSpace({ lines = 3, answerId }: { lines?: number; answerId?: string }) {
  return (
    <div className="ml-9 mb-4">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="border-b border-slate-300 h-7" />
      ))}
      {answerId && (
        <div className="mt-2 a4-hide">
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
  return <p className="mt-3 mb-1 text-sm font-bold text-navy-900">{children}</p>;
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
      <div id={id} className="mb-6 ml-9 mt-2 scroll-mt-28 border-l-2 border-slate-300 pl-4">
        <p className="text-sm font-semibold text-slate-600 mb-2">
          {letter !== "•" && `(${letter}) `}
          {restate}
          <span className="float-right">[{marks}]</span>
        </p>
        <div>{children}</div>
      </div>
    </AnswerReveal>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs text-slate-500 italic mt-2">
      {children}
    </p>
  );
}

export function SummaryTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <section
      id="summary"
      className="scroll-mt-28 mt-12 pt-6 border-t border-slate-300 export-question-hide a4-hide"
    >
      <div className="text-navy-900 mb-2 font-bold text-sm uppercase tracking-wider flex flex-wrap items-center justify-between gap-2">
        <span>Summary of Final Answers</span>
        <ShowAllAnswersButton />
      </div>
      <p className="text-xs text-slate-400 italic mb-3 print:hidden">
        Answers are masked until you tap Show All Answers.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr>
              {["Question", "Part", "Answer"].map((h) => (
                <th key={h} className="bg-slate-100 text-navy-900 border border-slate-200 a4:bg-white a4:border-black px-4 py-2.5 text-left font-semibold text-xs uppercase">
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
                <td className="px-4 py-2.5 border border-slate-200 font-mono text-navy-900 text-sm">
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
        className="print:hidden text-sm text-slate-500 hover:text-aa-primary font-medium transition-colors"
      >
        ← All Review Papers
      </Link>
      <p className="text-xs text-slate-400">{paperLabel}</p>
    </div>
  );
}
