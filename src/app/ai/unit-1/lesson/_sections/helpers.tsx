import type { ReactNode } from "react";
import Link from "next/link";
import { InlineMath } from "@/components/ui/Math";

// ─── Reusable page-level helpers ─────────────────────────────────────────────

export function FormulaBox({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-navy-900 rounded-xl px-6 py-5 my-5 overflow-x-auto">
      {title && (
        <p className="text-xs font-bold uppercase tracking-wider text-ai-light mb-4">
          {title}
        </p>
      )}
      <div className="text-white space-y-1">{children}</div>
    </div>
  );
}

export function FormulaRow({ label, math }: { label: string; math: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-white/10 last:border-0">
      <span className="text-ai-light text-xs uppercase tracking-wide sm:w-56 flex-shrink-0">
        {label}
      </span>
      <span className="text-white">
        <InlineMath math={math} />
      </span>
    </div>
  );
}

export function StepBox({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start my-3">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ai-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
        {n}
      </span>
      <div className="flex-1 text-slate-500 leading-relaxed">{children}</div>
    </div>
  );
}

export function WorkedExample({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-ai-light rounded-xl p-6 my-5 bg-ai-bg">
      <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-3">
        Worked Example
      </p>
      <p className="font-semibold text-navy-900 mb-4">{title}</p>
      {children}
    </div>
  );
}

export function Practice({
  problem,
  answer,
}: {
  problem: ReactNode;
  answer: ReactNode;
}) {
  return (
    <div className="border-2 border-warn-primary rounded-xl my-6 overflow-hidden">
      <div className="bg-warn-bg px-6 py-4">
        <p className="text-xs font-bold uppercase tracking-wider text-warn-text mb-2">
          Practice Problem
        </p>
        <div className="text-navy-900">{problem}</div>
      </div>
      <details className="bg-warn-bg">
        <summary className="list-none cursor-pointer px-6 py-3 border-t border-warn-primary">
          <span className="text-sm font-semibold text-ai-primary hover:underline">
            ▶ Reveal Solution
          </span>
        </summary>
        <div className="px-6 pb-6 pt-4 border-t border-warn-primary">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-text mb-3">
            Solution
          </p>
          <div className="text-slate-500 space-y-2">{answer}</div>
        </div>
      </details>
    </div>
  );
}

export function SLTag() {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-ai-light text-ai-text">
      SL + HL
    </span>
  );
}


// ─── Section wrapper (used in this file so we can control alt colours) ────────

export function LessonSection({
  id,
  label,
  title,
  tag,
  intro,
  alt,
  children,
}: {
  id: string;
  label: string;
  title: string;
  tag: ReactNode;
  intro: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-14 px-6 ${alt ? "bg-white" : "bg-slate-50"}`}
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-ai-primary bg-ai-bg px-3 py-1 rounded">
            {label}
          </span>
          {tag}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
          {title}
        </h2>
        <p className="text-base text-slate-500 max-w-2xl mb-8">{intro}</p>
        {children}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TOPIC SECTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function ReviewPaperLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="my-6 rounded-xl border-2 border-ai-primary bg-ai-bg px-6 py-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-1">
          Class practice — Q&amp;A sheet
        </p>
        <p className="text-navy-900 font-semibold">{label}</p>
        <p className="text-xs text-slate-500">
          Exportable as a Question sheet or Q&amp;A answer sheet (PDF).
        </p>
      </div>
      <Link
        href={href}
        className="text-sm font-semibold bg-ai-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
      >
        Open review paper →
      </Link>
    </div>
  );
}

