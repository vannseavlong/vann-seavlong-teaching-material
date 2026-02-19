import { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "Unit 1: Algebra — AA Lesson | IB Mathematics AA",
  description:
    "Full lesson notes for IB Mathematics AA Unit 1: Algebra. Covers laws of indices, surds, quadratics, sequences, logarithms, and the binomial theorem, with HL extensions.",
};

// ─── Reusable page-level helpers ─────────────────────────────────────────────

function FormulaBox({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-navy-900 rounded-xl px-6 py-5 my-5 overflow-x-auto">
      {title && (
        <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-4">
          {title}
        </p>
      )}
      <div className="text-white space-y-1">{children}</div>
    </div>
  );
}

function FormulaRow({
  label,
  math,
}: {
  label: string;
  math: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-white/10 last:border-0">
      <span className="text-aa-light text-xs uppercase tracking-wide sm:w-52 flex-shrink-0">
        {label}
      </span>
      <span className="text-white">
        <InlineMath math={math} />
      </span>
    </div>
  );
}

function StepBox({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start my-3">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-aa-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
        {n}
      </span>
      <div className="flex-1 text-slate-500 leading-relaxed">{children}</div>
    </div>
  );
}

function WorkedExample({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-aa-light rounded-xl p-6 my-5 bg-aa-bg">
      <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-3">
        Worked Example
      </p>
      <p className="font-semibold text-navy-900 mb-4">{title}</p>
      {children}
    </div>
  );
}

function Practice({
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
          <span className="text-sm font-semibold text-aa-primary hover:underline">
            ▶ Reveal Solution
          </span>
        </summary>
        <div className="px-6 pb-6 pt-4 border-t border-warn-primary">
          <p className="text-xs font-bold uppercase tracking-wider text-aa-text mb-3">
            Solution
          </p>
          <div className="text-slate-500 space-y-2">{answer}</div>
        </div>
      </details>
    </div>
  );
}

function SLTag() {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-aa-light text-aa-text">
      SL + HL
    </span>
  );
}

function HLTag() {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-danger-light text-danger-text">
      HL Extension
    </span>
  );
}

// ─── Lesson Header ────────────────────────────────────────────────────────────

function LessonHero() {
  return (
    <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-28 pb-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <nav className="text-sm text-aa-light mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/aa" className="hover:underline">
            AA Curriculum
          </Link>
          <span className="opacity-50">›</span>
          <span>Unit 1: Algebra</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-aa-primary px-3 py-1 rounded">
            Unit 1
          </span>
          <SLTag />
          <HLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Algebra
        </h1>
        <p className="text-aa-light text-lg max-w-2xl mb-8">
          Core algebraic techniques: indices, surds, quadratics, sequences,
          logarithms, and the binomial theorem — with HL extensions in proof by
          induction, complex numbers, and advanced expansions.
        </p>

        <div className="flex gap-6 text-sm text-aa-light flex-wrap">
          <span>⏱ SL: 19 hours</span>
          <span>⏱ HL: 39 hours</span>
          <span>📋 11 topics</span>
        </div>
      </div>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────

const SL_TOPICS = [
  { id: "indices", label: "Laws of Indices" },
  { id: "surds", label: "Surds" },
  { id: "quadratics", label: "Quadratic Equations" },
  { id: "completing-square", label: "Completing the Square" },
  { id: "sequences", label: "Sequences & Series" },
  { id: "logarithms", label: "Logarithms" },
  { id: "binomial", label: "Binomial Expansion" },
];

const HL_TOPICS = [
  { id: "induction", label: "Proof by Induction" },
  { id: "complex", label: "Complex Numbers" },
  { id: "advanced-sequences", label: "Advanced Sequences & Series" },
  { id: "harder-binomial", label: "Harder Binomial Expansion" },
];

function TableOfContents() {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-8 sticky top-[60px] z-10 shadow-sm">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Jump to topic
        </p>
        <div className="flex flex-wrap gap-2">
          {SL_TOPICS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-aa-bg text-aa-text hover:bg-aa-light transition-colors"
            >
              {t.label}
            </a>
          ))}
          {HL_TOPICS.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-danger-bg text-danger-text hover:bg-danger-light transition-colors"
            >
              HL: {t.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section wrapper (used in this file so we can control alt colours) ────────

function LessonSection({
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
          <span className="text-xs font-bold uppercase tracking-wider text-aa-primary bg-aa-bg px-3 py-1 rounded">
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

// ─── HL Divider ───────────────────────────────────────────────────────────────

function HLDivider() {
  return (
    <div className="bg-danger-bg border-y-2 border-danger-light px-6 py-8">
      <div className="max-w-[1000px] mx-auto flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-danger-light flex items-center justify-center">
          <span className="text-danger-primary text-lg font-extrabold">HL</span>
        </div>
        <div>
          <p className="font-bold text-navy-900 text-lg">HL Extension Topics</p>
          <p className="text-sm text-slate-500">
            The following sections are for Higher Level students only. SL
            students can skip ahead to the Unit Summary.
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TOPIC SECTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. Laws of Indices ───────────────────────────────────────────────────────

function IndicesSection() {
  return (
    <LessonSection
      id="indices"
      label="Topic 1"
      title="Laws of Indices"
      tag={<SLTag />}
      intro="An index (or exponent) tells you how many times to multiply a base by itself. The laws of indices let you simplify expressions involving powers without expanding them out fully."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          The base must be the same before you can apply the multiplication or
          division laws. For example,{" "}
          <InlineMath math="2^3 \times 2^5 = 2^8" /> works, but{" "}
          <InlineMath math="2^3 \times 3^5" /> cannot be combined further.
        </p>
      </HighlightBox>

      <FormulaBox title="Laws of Indices — Reference Card">
        <FormulaRow label="Multiply (same base)" math="a^m \times a^n = a^{m+n}" />
        <FormulaRow label="Divide (same base)" math="a^m \div a^n = a^{m-n}" />
        <FormulaRow label="Power of a power" math="(a^m)^n = a^{mn}" />
        <FormulaRow label="Power of a product" math="(ab)^n = a^n b^n" />
        <FormulaRow label="Power of a quotient" math="\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}" />
        <FormulaRow label="Zero index" math="a^0 = 1 \quad (a \neq 0)" />
        <FormulaRow label="Negative index" math="a^{-n} = \dfrac{1}{a^n}" />
        <FormulaRow label="Unit fraction index (roots)" math="a^{1/n} = \sqrt[n]{a}" />
        <FormulaRow label="General fractional index" math="a^{m/n} = \left(\sqrt[n]{a}\right)^m" />
      </FormulaBox>

      {/* Visual: index intuition */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {[
          { law: "Add", example: "2³ × 2⁴ = 2⁷", hint: "Multiply → add powers" },
          { law: "Subtract", example: "5⁶ ÷ 5² = 5⁴", hint: "Divide → subtract powers" },
          { law: "Multiply", example: "(3²)⁴ = 3⁸", hint: "Power of power → multiply" },
        ].map(({ law, example, hint }) => (
          <div
            key={law}
            className="bg-white border border-slate-200 rounded-xl p-5 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-2">
              {law} exponents
            </p>
            <p className="font-mono text-navy-900 font-semibold text-lg mb-1">
              {example}
            </p>
            <p className="text-xs text-slate-500">{hint}</p>
          </div>
        ))}
      </div>

      <WorkedExample title="Simplify: (3x²y⁻¹)³ ÷ (9x⁴y)">
        <StepBox n={1}>
          Apply the power 3 to each factor in the numerator:
          <BlockMath math="(3x^2y^{-1})^3 = 3^3 \cdot x^{2 \times 3} \cdot y^{-1 \times 3} = 27x^6y^{-3}" />
        </StepBox>
        <StepBox n={2}>
          Divide by subtracting exponents (constant: 27 ÷ 9 = 3):
          <BlockMath math="\frac{27x^6y^{-3}}{9x^4y} = 3 \cdot x^{6-4} \cdot y^{-3-1} = 3x^2y^{-4}" />
        </StepBox>
        <StepBox n={3}>
          Write with positive exponents only:
          <BlockMath math="\boxed{\dfrac{3x^2}{y^4}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Simplify{" "}
            <InlineMath math="\dfrac{2^5 \times 4^3}{8^2}" />. Give your
            answer as a power of 2.
          </>
        }
        answer={
          <>
            <p>Convert everything to powers of 2:</p>
            <BlockMath math="4^3 = (2^2)^3 = 2^6, \quad 8^2 = (2^3)^2 = 2^6" />
            <p>Substitute and simplify:</p>
            <BlockMath math="\frac{2^5 \times 2^6}{2^6} = 2^{5+6-6} = \boxed{2^5 = 32}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 2. Surds ─────────────────────────────────────────────────────────────────

function SurdsSection() {
  return (
    <LessonSection
      id="surds"
      label="Topic 2"
      title="Surds"
      tag={<SLTag />}
      intro="A surd is an irrational number written as a root that cannot be simplified to a rational number. Surds appear frequently in exact answers for IB problems."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">What is a surd?</p>
        <p className="text-slate-500 text-sm">
          <InlineMath math="\sqrt{9} = 3" /> is NOT a surd (it simplifies to a
          whole number). But <InlineMath math="\sqrt{5}" />,{" "}
          <InlineMath math="\sqrt{7}" />, <InlineMath math="\sqrt{12}" /> are
          surds — they are irrational and must be left in root form for exact
          answers.
        </p>
      </HighlightBox>

      <FormulaBox title="Surd Rules">
        <FormulaRow label="Simplify" math="\sqrt{ab} = \sqrt{a}\,\sqrt{b}" />
        <FormulaRow label="Self-multiply" math="\sqrt{a} \times \sqrt{a} = a" />
        <FormulaRow label="Combine (same root)" math="p\sqrt{n} \pm q\sqrt{n} = (p \pm q)\sqrt{n}" />
        <FormulaRow label="Rationalise denominator" math="\dfrac{k}{\sqrt{a}} = \dfrac{k\sqrt{a}}{a}" />
        <FormulaRow label="Rationalise (conjugate)" math="\dfrac{k}{p - \sqrt{q}} = \dfrac{k(p + \sqrt{q})}{p^2 - q}" />
      </FormulaBox>

      {/* Visual: simplify steps diagram */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          How to simplify a surd — visual method
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center text-sm">
          <div className="bg-aa-bg rounded-lg px-4 py-3 flex-1">
            <p className="font-mono font-bold text-navy-900">√72</p>
            <p className="text-xs text-slate-500 mt-1">Start</p>
          </div>
          <span className="text-aa-primary font-bold text-lg">→</span>
          <div className="bg-aa-bg rounded-lg px-4 py-3 flex-1">
            <p className="font-mono font-bold text-navy-900">√(36 × 2)</p>
            <p className="text-xs text-slate-500 mt-1">Find largest perfect-square factor</p>
          </div>
          <span className="text-aa-primary font-bold text-lg">→</span>
          <div className="bg-aa-bg rounded-lg px-4 py-3 flex-1">
            <p className="font-mono font-bold text-navy-900">√36 × √2</p>
            <p className="text-xs text-slate-500 mt-1">Split using √(ab) = √a · √b</p>
          </div>
          <span className="text-aa-primary font-bold text-lg">→</span>
          <div className="bg-navy-900 text-white rounded-lg px-4 py-3 flex-1">
            <p className="font-mono font-bold">6√2</p>
            <p className="text-xs text-aa-light mt-1">Simplified</p>
          </div>
        </div>
      </div>

      <WorkedExample title="Simplify: 6 / (√3 − 1)">
        <StepBox n={1}>
          Identify the conjugate of the denominator: the conjugate of{" "}
          <InlineMath math="\sqrt{3} - 1" /> is <InlineMath math="\sqrt{3} + 1" />.
        </StepBox>
        <StepBox n={2}>
          Multiply numerator and denominator by the conjugate:
          <BlockMath math="\frac{6}{\sqrt{3}-1} \times \frac{\sqrt{3}+1}{\sqrt{3}+1} = \frac{6(\sqrt{3}+1)}{(\sqrt{3})^2 - 1^2}" />
        </StepBox>
        <StepBox n={3}>
          Denominator becomes <InlineMath math="3 - 1 = 2" />:
          <BlockMath math="\frac{6(\sqrt{3}+1)}{2} = 3(\sqrt{3}+1) = \boxed{3\sqrt{3}+3}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Simplify <InlineMath math="\sqrt{75} - 2\sqrt{12} + \sqrt{3}" />.
            Write your answer in the form <InlineMath math="k\sqrt{3}" />.
          </>
        }
        answer={
          <>
            <p>Simplify each surd individually:</p>
            <BlockMath math="\sqrt{75} = \sqrt{25 \times 3} = 5\sqrt{3}" />
            <BlockMath math="\sqrt{12} = \sqrt{4 \times 3} = 2\sqrt{3} \implies 2\sqrt{12} = 4\sqrt{3}" />
            <p>Combine like terms:</p>
            <BlockMath math="5\sqrt{3} - 4\sqrt{3} + \sqrt{3} = \boxed{2\sqrt{3}}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 3. Quadratic Equations ───────────────────────────────────────────────────

function QuadraticsSection() {
  return (
    <LessonSection
      id="quadratics"
      label="Topic 3"
      title="Quadratic Equations"
      tag={<SLTag />}
      intro="A quadratic equation has the form ax² + bx + c = 0. Every quadratic has exactly two solutions (real or complex). You must know three methods: factoring, completing the square, and the quadratic formula."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">The Discriminant</p>
        <p className="text-slate-500 text-sm">
          Before solving, compute <InlineMath math="\Delta = b^2 - 4ac" /> to
          know what type of roots to expect.
        </p>
      </HighlightBox>

      <FormulaBox title="Quadratic Formula & Discriminant">
        <FormulaRow label="Standard form" math="ax^2 + bx + c = 0" />
        <FormulaRow label="Quadratic formula" math="x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
        <FormulaRow label="Discriminant" math="\Delta = b^2 - 4ac" />
      </FormulaBox>

      {/* Visual: discriminant table */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        {[
          { cond: "Δ > 0", desc: "Two distinct real roots", color: "bg-ai-bg border-ai-primary text-ai-text", example: "e.g. x = 2 or x = −3" },
          { cond: "Δ = 0", desc: "One repeated real root", color: "bg-aa-bg border-aa-primary text-aa-text", example: "e.g. x = 1 (twice)" },
          { cond: "Δ < 0", desc: "No real roots (HL: complex)", color: "bg-danger-bg border-danger-primary text-danger-text", example: "e.g. x = 1 ± 2i" },
        ].map(({ cond, desc, color, example }) => (
          <div key={cond} className={`border-l-4 rounded-r-xl px-5 py-4 ${color}`}>
            <p className="font-mono font-bold text-lg mb-1">{cond}</p>
            <p className="font-semibold text-sm mb-1">{desc}</p>
            <p className="text-xs opacity-75">{example}</p>
          </div>
        ))}
      </div>

      <WorkedExample title="Solve: 3x² + 7x − 6 = 0">
        <StepBox n={1}>
          Identify coefficients: <InlineMath math="a=3,\; b=7,\; c=-6" />
        </StepBox>
        <StepBox n={2}>
          Calculate the discriminant:
          <BlockMath math="\Delta = 7^2 - 4(3)(-6) = 49 + 72 = 121" />
          Since <InlineMath math="\Delta > 0" />, there are two distinct real roots.
        </StepBox>
        <StepBox n={3}>
          Apply the quadratic formula:
          <BlockMath math="x = \frac{-7 \pm \sqrt{121}}{6} = \frac{-7 \pm 11}{6}" />
        </StepBox>
        <StepBox n={4}>
          <BlockMath math="x = \frac{4}{6} = \frac{2}{3} \qquad \text{or} \qquad x = \frac{-18}{6} = \boxed{-3}" />
          Solutions: <InlineMath math="x = \tfrac{2}{3}" /> or <InlineMath math="x = -3" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="2x^2 - 3x - 2 = 0" /> using the quadratic
            formula. State the value of the discriminant first.
          </>
        }
        answer={
          <>
            <p>Coefficients: <InlineMath math="a=2,\; b=-3,\; c=-2" /></p>
            <BlockMath math="\Delta = 9 + 16 = 25" />
            <BlockMath math="x = \frac{3 \pm 5}{4}" />
            <BlockMath math="x = 2 \quad \text{or} \quad x = -\frac{1}{2}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 4. Completing the Square ─────────────────────────────────────────────────

function CompletingSquareSection() {
  return (
    <LessonSection
      id="completing-square"
      label="Topic 4"
      title="Completing the Square"
      tag={<SLTag />}
      intro="Completing the square rewrites ax² + bx + c in the form a(x + p)² + q, revealing the vertex of the parabola and making it easy to solve equations or sketch graphs."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Why it matters</p>
        <p className="text-slate-500 text-sm">
          The vertex form <InlineMath math="a(x-h)^2 + k" /> immediately tells
          you the vertex <InlineMath math="(h,\,k)" />, the axis of symmetry{" "}
          <InlineMath math="x = h" />, and the minimum/maximum value{" "}
          <InlineMath math="k" />.
        </p>
      </HighlightBox>

      <FormulaBox title="Completing the Square — Method">
        <FormulaRow label="For x² + bx + c" math="= \left(x + \dfrac{b}{2}\right)^2 - \left(\dfrac{b}{2}\right)^2 + c" />
        <FormulaRow label="For ax² + bx + c" math="= a\!\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{b^2}{4a} + c" />
      </FormulaBox>

      {/* Visual: step by step flow */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-5">
          Step-by-step method for ax² + bx + c
        </p>
        <div className="space-y-3">
          {[
            { step: "1", action: "Factor out a from the first two terms", eg: "2x² − 8x + 3 → 2(x² − 4x) + 3" },
            { step: "2", action: "Complete the square inside the bracket", eg: "x² − 4x = (x−2)² − 4" },
            { step: "3", action: "Substitute back and expand a × constant", eg: "2[(x−2)² − 4] + 3" },
            { step: "4", action: "Collect the constant terms outside", eg: "2(x−2)² − 8 + 3 = 2(x−2)² − 5" },
          ].map(({ step, action, eg }) => (
            <div key={step} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-aa-primary text-white text-xs font-bold flex items-center justify-center">
                {step}
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-900">{action}</p>
                <p className="text-xs text-slate-500 font-mono">{eg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkedExample title="Express 2x² − 8x + 3 in completed square form">
        <StepBox n={1}>
          Factor 2 from the quadratic and linear terms:
          <BlockMath math="2x^2 - 8x + 3 = 2(x^2 - 4x) + 3" />
        </StepBox>
        <StepBox n={2}>
          Complete the square inside (half of −4 is −2):
          <BlockMath math="x^2 - 4x = (x-2)^2 - 4" />
        </StepBox>
        <StepBox n={3}>
          Substitute back and simplify:
          <BlockMath math="2\left[(x-2)^2 - 4\right] + 3 = 2(x-2)^2 - 8 + 3" />
          <BlockMath math="= \boxed{2(x-2)^2 - 5}" />
        </StepBox>
        <p className="text-sm text-slate-500 mt-3">
          ∴ Vertex at <InlineMath math="(2,\,-5)" />, axis of symmetry{" "}
          <InlineMath math="x = 2" />, minimum value <InlineMath math="-5" />.
        </p>
      </WorkedExample>

      <Practice
        problem={
          <>
            Express <InlineMath math="x^2 + 10x - 3" /> in the form{" "}
            <InlineMath math="(x+p)^2 + q" /> and state the minimum value of
            the expression.
          </>
        }
        answer={
          <>
            <BlockMath math="x^2 + 10x - 3 = (x+5)^2 - 25 - 3 = \boxed{(x+5)^2 - 28}" />
            <p>
              Minimum value is <strong>−28</strong>, achieved at{" "}
              <InlineMath math="x = -5" />.
            </p>
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 5. Sequences & Series ────────────────────────────────────────────────────

function SequencesSection() {
  return (
    <LessonSection
      id="sequences"
      label="Topic 5"
      title="Sequences & Series"
      tag={<SLTag />}
      intro="A sequence is an ordered list of numbers. A series is the sum of the terms in a sequence. The two key types in IB AA are arithmetic (constant difference) and geometric (constant ratio)."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        {/* AP card */}
        <div className="bg-navy-900 rounded-xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-4">
            Arithmetic Progression (AP)
          </p>
          <p className="text-sm text-aa-light mb-3">
            Common difference: <InlineMath math="d = u_{n+1} - u_n" />
          </p>
          <div className="space-y-3 text-sm">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">General term</span>
              <InlineMath math="u_n = u_1 + (n-1)d" />
            </div>
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Sum of n terms</span>
              <InlineMath math="S_n = \dfrac{n}{2}\bigl[2u_1 + (n-1)d\bigr]" />
            </div>
            <div>
              <span className="text-xs text-aa-light block mb-1">
                Equivalently (if last term known)
              </span>
              <InlineMath math="S_n = \dfrac{n}{2}(u_1 + u_n)" />
            </div>
          </div>
        </div>

        {/* GP card */}
        <div className="bg-navy-900 rounded-xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-4">
            Geometric Progression (GP)
          </p>
          <p className="text-sm text-aa-light mb-3">
            Common ratio: <InlineMath math="r = u_{n+1} / u_n" />
          </p>
          <div className="space-y-3 text-sm">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">General term</span>
              <InlineMath math="u_n = u_1 \cdot r^{\,n-1}" />
            </div>
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Sum of n terms (r ≠ 1)</span>
              <InlineMath math="S_n = \dfrac{u_1(1 - r^n)}{1 - r}" />
            </div>
            <div>
              <span className="text-xs text-aa-light block mb-1">
                Sum to infinity (|r| &lt; 1)
              </span>
              <InlineMath math="S_\infty = \dfrac{u_1}{1 - r}" />
            </div>
          </div>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-1">
          When does a GP converge?
        </p>
        <p className="text-slate-500 text-sm">
          A geometric series has a finite sum to infinity only when{" "}
          <InlineMath math="|r| < 1" />. If <InlineMath math="|r| \geq 1" />,
          the series diverges (the terms don't shrink to zero).
        </p>
      </HighlightBox>

      <WorkedExample title="AP: first term 5, common difference 3. Find u₂₀ and S₂₀.">
        <StepBox n={1}>
          General term formula:
          <BlockMath math="u_{20} = 5 + (20-1)(3) = 5 + 57 = 62" />
        </StepBox>
        <StepBox n={2}>
          Sum of first 20 terms (using first + last term form):
          <BlockMath math="S_{20} = \frac{20}{2}(5 + 62) = 10 \times 67 = \boxed{670}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="GP: first term 4, common ratio ½. Find S∞.">
        <StepBox n={1}>
          Check convergence: <InlineMath math="|r| = \tfrac{1}{2} < 1" /> ✓
        </StepBox>
        <StepBox n={2}>
          Apply the formula:
          <BlockMath math="S_\infty = \frac{4}{1 - \frac{1}{2}} = \frac{4}{\frac{1}{2}} = \boxed{8}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            An arithmetic sequence has <InlineMath math="u_3 = 14" /> and{" "}
            <InlineMath math="u_8 = 34" />. Find the first term, the common
            difference, and the sum of the first 20 terms.
          </>
        }
        answer={
          <>
            <p>Set up two equations using <InlineMath math="u_n = u_1 + (n-1)d" />:</p>
            <BlockMath math="u_1 + 2d = 14 \quad \text{and} \quad u_1 + 7d = 34" />
            <p>Subtract: <InlineMath math="5d = 20 \Rightarrow d = 4" /></p>
            <p>Substitute back: <InlineMath math="u_1 = 14 - 8 = 6" /></p>
            <BlockMath math="S_{20} = \frac{20}{2}\bigl[2(6) + 19(4)\bigr] = 10(12 + 76) = \boxed{880}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 6. Logarithms ────────────────────────────────────────────────────────────

function LogarithmsSection() {
  return (
    <LessonSection
      id="logarithms"
      label="Topic 6"
      title="Logarithms"
      tag={<SLTag />}
      intro="Logarithms are the inverse of exponentials. They answer the question: 'what power do I need?' — for example, log₂(8) = 3 because 2³ = 8."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">The Core Definition</p>
        <BlockMath math="\log_a x = y \iff a^y = x \quad (a > 0,\; a \neq 1,\; x > 0)" />
        <p className="text-slate-500 text-sm mt-2">
          Special cases: <InlineMath math="\log_{10}" /> is written as{" "}
          <InlineMath math="\log" />, and <InlineMath math="\log_e" /> is
          written as <InlineMath math="\ln" /> (natural log).
        </p>
      </HighlightBox>

      <FormulaBox title="Laws of Logarithms">
        <FormulaRow label="Product rule" math="\log_a(xy) = \log_a x + \log_a y" />
        <FormulaRow label="Quotient rule" math="\log_a\!\left(\dfrac{x}{y}\right) = \log_a x - \log_a y" />
        <FormulaRow label="Power rule" math="\log_a(x^n) = n \log_a x" />
        <FormulaRow label="Identity" math="\log_a a = 1" />
        <FormulaRow label="Zero rule" math="\log_a 1 = 0" />
        <FormulaRow label="Change of base" math="\log_a b = \dfrac{\ln b}{\ln a} = \dfrac{\log b}{\log a}" />
        <FormulaRow label="Inverse relationship" math="a^{\log_a x} = x \quad \text{and} \quad \log_a(a^x) = x" />
      </FormulaBox>

      {/* Visual: log ↔ exponential switch */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          Switching between log and exponential form
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-aa-bg rounded-lg px-5 py-4">
            <p className="text-xs text-aa-primary font-bold mb-2">LOG FORM</p>
            <p className="font-mono text-navy-900">log₃(81) = 4</p>
            <p className="text-xs text-slate-500 mt-1">"3 raised to power 4 gives 81"</p>
          </div>
          <div className="bg-aa-bg rounded-lg px-5 py-4">
            <p className="text-xs text-aa-primary font-bold mb-2">EXPONENTIAL FORM</p>
            <p className="font-mono text-navy-900">3⁴ = 81</p>
            <p className="text-xs text-slate-500 mt-1">Same equation, different writing</p>
          </div>
        </div>
      </div>

      <WorkedExample title="Solve: 5^(x+1) = 200">
        <StepBox n={1}>
          Take the natural log of both sides:
          <BlockMath math="\ln(5^{x+1}) = \ln 200" />
        </StepBox>
        <StepBox n={2}>
          Apply the power rule for logs:
          <BlockMath math="(x+1)\ln 5 = \ln 200" />
        </StepBox>
        <StepBox n={3}>
          Solve for x:
          <BlockMath math="x + 1 = \frac{\ln 200}{\ln 5} = \log_5 200" />
          <BlockMath math="x = \log_5 200 - 1 \approx 3.292 - 1 = \boxed{2.292}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve: <InlineMath math="\log_2(x+3) + \log_2(x-1) = 4" />
          </>
        }
        answer={
          <>
            <p>Apply the product rule:</p>
            <BlockMath math="\log_2[(x+3)(x-1)] = 4" />
            <p>Convert to exponential form:</p>
            <BlockMath math="(x+3)(x-1) = 2^4 = 16" />
            <BlockMath math="x^2 + 2x - 3 = 16 \implies x^2 + 2x - 19 = 0" />
            <BlockMath math="x = \frac{-2 \pm \sqrt{4 + 76}}{2} = -1 \pm 2\sqrt{5}" />
            <p>
              Domain check: we need <InlineMath math="x > 1" />, so{" "}
              <InlineMath math="x = -1 + 2\sqrt{5} \approx \boxed{3.47}" />.
            </p>
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 7. Binomial Expansion ────────────────────────────────────────────────────

function BinomialSection() {
  return (
    <LessonSection
      id="binomial"
      label="Topic 7"
      title="Binomial Expansion"
      tag={<SLTag />}
      intro="The binomial theorem gives a formula for expanding (a + b)ⁿ for any positive integer n, without multiplying out term by term. Pascal's Triangle provides the coefficients."
    >
      <FormulaBox title="Binomial Theorem">
        <FormulaRow label="Expansion" math="(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r" />
        <FormulaRow label="Binomial coefficient" math="\binom{n}{r} = {}^nC_r = \dfrac{n!}{r!\,(n-r)!}" />
        <FormulaRow label="General (r+1)th term" math="T_{r+1} = \binom{n}{r}\, a^{n-r}\, b^r" />
      </FormulaBox>

      {/* Pascal's Triangle visual */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          Pascal&apos;s Triangle — coefficients for (a + b)ⁿ
        </p>
        <div className="font-mono text-center text-navy-900 space-y-1 text-sm">
          {[
            ["1"],
            ["1", "1"],
            ["1", "2", "1"],
            ["1", "3", "3", "1"],
            ["1", "4", "6", "4", "1"],
            ["1", "5", "10", "10", "5", "1"],
          ].map((row, i) => (
            <div key={i} className="flex justify-center gap-3">
              <span className="text-slate-300 text-xs w-8 text-right self-center">
                n={i}
              </span>
              {row.map((val, j) => (
                <span
                  key={j}
                  className={`w-8 text-center ${val !== "1" ? "font-bold text-aa-primary" : ""}`}
                >
                  {val}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 text-center mt-3">
          Each number is the sum of the two numbers above it.
        </p>
      </div>

      <WorkedExample title="Expand (2x − 3)⁴">
        <p className="text-sm text-slate-500 mb-4">
          Use <InlineMath math="a = 2x" />, <InlineMath math="b = -3" />,{" "}
          <InlineMath math="n = 4" />. Row 4 of Pascal&apos;s Triangle: 1, 4, 6, 4, 1.
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm w-full text-center border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-3 py-2 font-semibold">r</th>
                <th className="px-3 py-2 font-semibold">C(4,r)</th>
                <th className="px-3 py-2 font-semibold">(2x)^(4−r)</th>
                <th className="px-3 py-2 font-semibold">(−3)^r</th>
                <th className="px-3 py-2 font-semibold">Term</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0", "1", "16x⁴", "1", "16x⁴"],
                ["1", "4", "8x³", "−3", "−96x³"],
                ["2", "6", "4x²", "9", "216x²"],
                ["3", "4", "2x", "−27", "−216x"],
                ["4", "1", "1", "81", "81"],
              ].map(([r, c, a, b, t], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-aa-bg" : "bg-white"}>
                  <td className="px-3 py-2">{r}</td>
                  <td className="px-3 py-2">{c}</td>
                  <td className="px-3 py-2 font-mono">{a}</td>
                  <td className="px-3 py-2 font-mono">{b}</td>
                  <td className="px-3 py-2 font-bold text-aa-primary">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <BlockMath math="(2x-3)^4 = 16x^4 - 96x^3 + 216x^2 - 216x + 81" />
        </div>
      </WorkedExample>

      <Practice
        problem={
          <>
            Find the term containing <InlineMath math="x^3" /> in the expansion
            of <InlineMath math="(x + 2)^6" />.
          </>
        }
        answer={
          <>
            <p>
              The general term is{" "}
              <InlineMath math="T_{r+1} = \binom{6}{r} x^{6-r} \cdot 2^r" />
            </p>
            <p>
              For <InlineMath math="x^3" />: set <InlineMath math="6-r=3 \Rightarrow r=3" />.
            </p>
            <BlockMath math="T_4 = \binom{6}{3} x^3 \cdot 2^3 = 20 \cdot 8 x^3 = \boxed{160x^3}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HL TOPICS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 8. Proof by Induction ────────────────────────────────────────────────────

function InductionSection() {
  return (
    <LessonSection
      id="induction"
      label="HL Topic 1"
      title="Proof by Induction"
      tag={<HLTag />}
      intro="Mathematical induction proves a statement is true for every positive integer n. Think of it as a cascade of dominoes: knock the first one over, and prove that if one falls, the next must fall too."
      alt
    >
      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-2">The Four Steps</p>
        <ol className="text-sm text-slate-500 space-y-1 list-decimal list-inside">
          <li>
            <strong>Base case:</strong> Prove the statement is true for n = 1.
          </li>
          <li>
            <strong>Assumption:</strong> Assume the statement is true for n = k.
          </li>
          <li>
            <strong>Inductive step:</strong> Using the assumption, prove it is
            true for n = k + 1.
          </li>
          <li>
            <strong>Conclusion:</strong> State that by the principle of
            mathematical induction, the result holds for all{" "}
            <InlineMath math="n \in \mathbb{Z}^+" />.
          </li>
        </ol>
      </HighlightBox>

      {/* Visual: domino analogy */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          The Domino Analogy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center text-center text-sm">
          <div className="bg-danger-bg border border-danger-light rounded-lg px-5 py-4 flex-1">
            <p className="text-2xl mb-2">🁢</p>
            <p className="font-semibold text-navy-900">Base Case</p>
            <p className="text-xs text-slate-500">The first domino falls (n=1 is true)</p>
          </div>
          <span className="text-aa-primary font-bold text-2xl">+</span>
          <div className="bg-danger-bg border border-danger-light rounded-lg px-5 py-4 flex-1">
            <p className="text-2xl mb-2">🁢🁢</p>
            <p className="font-semibold text-navy-900">Inductive Step</p>
            <p className="text-xs text-slate-500">If one falls, the next one also falls</p>
          </div>
          <span className="text-aa-primary font-bold text-2xl">=</span>
          <div className="bg-ai-bg border border-ai-light rounded-lg px-5 py-4 flex-1">
            <p className="text-2xl mb-2">✓</p>
            <p className="font-semibold text-navy-900">All Fall</p>
            <p className="text-xs text-slate-500">True for every positive integer n</p>
          </div>
        </div>
      </div>

      <WorkedExample title="Prove: 1 + 2 + 3 + ⋯ + n = n(n+1)/2">
        <StepBox n={1}>
          <strong>Base case</strong> (n = 1): LHS = 1. RHS ={" "}
          <InlineMath math="\frac{1 \times 2}{2} = 1" />. ✓
        </StepBox>
        <StepBox n={2}>
          <strong>Assumption:</strong> Assume true for n = k:
          <BlockMath math="1 + 2 + \cdots + k = \frac{k(k+1)}{2}" />
        </StepBox>
        <StepBox n={3}>
          <strong>Inductive step</strong> — prove for n = k + 1. Add (k + 1) to
          both sides of the assumption:
          <BlockMath math="1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1)" />
          <BlockMath math="= (k+1)\!\left(\frac{k}{2} + 1\right) = (k+1) \cdot \frac{k+2}{2} = \frac{(k+1)(k+2)}{2}" />
          This is exactly the formula with n replaced by k + 1. ✓
        </StepBox>
        <StepBox n={4}>
          <strong>Conclusion:</strong> By the principle of mathematical
          induction, the result holds for all{" "}
          <InlineMath math="n \in \mathbb{Z}^+" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Prove by induction that{" "}
            <InlineMath math="\displaystyle\sum_{r=1}^{n} r^2 = \dfrac{n(n+1)(2n+1)}{6}" />
          </>
        }
        answer={
          <>
            <p>
              <strong>Base case</strong> (n=1): LHS = 1, RHS = 1·2·3/6 = 1. ✓
            </p>
            <p>
              <strong>Assume</strong> true for n=k. For n = k+1, add{" "}
              <InlineMath math="(k+1)^2" /> to both sides:
            </p>
            <BlockMath math="\frac{k(k+1)(2k+1)}{6} + (k+1)^2 = (k+1)\!\left[\frac{k(2k+1)}{6} + (k+1)\right]" />
            <BlockMath math="= (k+1) \cdot \frac{2k^2 + 7k + 6}{6} = \frac{(k+1)(k+2)(2k+3)}{6}" />
            <p>
              This matches the formula with n = k+1. By induction, true for all{" "}
              <InlineMath math="n \in \mathbb{Z}^+" />. ✓
            </p>
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 9. Complex Numbers ───────────────────────────────────────────────────────

function ComplexNumbersSection() {
  return (
    <LessonSection
      id="complex"
      label="HL Topic 2"
      title="Complex Numbers"
      tag={<HLTag />}
      intro="Complex numbers extend the real number system by including i = √(−1). They allow us to solve equations with negative discriminants and arise naturally in engineering, physics, and advanced mathematics."
    >
      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-1">
          The Imaginary Unit
        </p>
        <BlockMath math="i = \sqrt{-1} \qquad i^2 = -1 \qquad i^3 = -i \qquad i^4 = 1" />
        <p className="text-slate-500 text-sm mt-2">
          The powers of i cycle with period 4. This pattern is useful for
          simplifying powers of i.
        </p>
      </HighlightBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        {/* Cartesian form */}
        <div className="bg-navy-900 rounded-xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-4">
            Cartesian (Rectangular) Form
          </p>
          <div className="space-y-3 text-sm">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Standard form</span>
              <InlineMath math="z = a + bi" />
            </div>
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Modulus (distance from origin)</span>
              <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
            </div>
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Argument (angle from +x axis)</span>
              <InlineMath math="\arg(z) = \theta, \quad \tan\theta = \dfrac{b}{a}" />
            </div>
            <div>
              <span className="text-xs text-aa-light block mb-1">Conjugate</span>
              <InlineMath math="\bar{z} = a - bi" />
            </div>
          </div>
        </div>

        {/* Polar form */}
        <div className="bg-navy-900 rounded-xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-4">
            Polar / Euler Form
          </p>
          <div className="space-y-3 text-sm">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Polar form</span>
              <InlineMath math="z = r(\cos\theta + i\sin\theta)" />
            </div>
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">Euler form</span>
              <InlineMath math="z = re^{i\theta}" />
            </div>
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs text-aa-light block mb-1">De Moivre's theorem</span>
              <InlineMath math="(re^{i\theta})^n = r^n e^{in\theta}" />
            </div>
            <div>
              <span className="text-xs text-aa-light block mb-1">Multiplication</span>
              <InlineMath math="|z_1 z_2| = |z_1||z_2|, \quad \arg(z_1 z_2) = \theta_1 + \theta_2" />
            </div>
          </div>
        </div>
      </div>

      {/* Argand diagram visual */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          The Argand Diagram — Plotting z = 3 + 4i
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          {/* ASCII-style diagram */}
          <pre className="font-mono text-xs bg-aa-bg rounded-lg p-4 text-navy-900 leading-relaxed">
{`  Im
  5 |          ● z = 3+4i
  4 |         /|
  3 |        / |
  2 |       /  |
  1 |      /   |
  0 +---+--+---+-- Re
    0   1  2   3 4
        θ = 53.1°
        |z| = 5`}
          </pre>
          <div className="flex-1 space-y-2 text-sm text-slate-500">
            <p>For <InlineMath math="z = 3 + 4i" />:</p>
            <p>
              Modulus:{" "}
              <InlineMath math="|z| = \sqrt{9+16} = \sqrt{25} = 5" />
            </p>
            <p>
              Argument:{" "}
              <InlineMath math="\arg(z) = \arctan\!\left(\tfrac{4}{3}\right) \approx 53.1°" />
            </p>
            <p>
              Polar form:{" "}
              <InlineMath math="z = 5(\cos 53.1° + i\sin 53.1°)" />
            </p>
          </div>
        </div>
      </div>

      <WorkedExample title="Find |z|, arg(z) and write z = 1 − √3 i in polar form">
        <StepBox n={1}>
          Identify <InlineMath math="a = 1" />,{" "}
          <InlineMath math="b = -\sqrt{3}" /> (4th quadrant: Re positive, Im
          negative).
        </StepBox>
        <StepBox n={2}>
          Modulus:
          <BlockMath math="|z| = \sqrt{1 + 3} = 2" />
        </StepBox>
        <StepBox n={3}>
          Argument (angle is negative because Im is negative):
          <BlockMath math="\arg(z) = \arctan\!\left(\frac{-\sqrt{3}}{1}\right) = -\frac{\pi}{3}" />
        </StepBox>
        <StepBox n={4}>
          Polar form:
          <BlockMath math="z = 2\!\left(\cos\!\left(-\tfrac{\pi}{3}\right) + i\sin\!\left(-\tfrac{\pi}{3}\right)\right) = 2e^{-i\pi/3}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="z^2 + 4z + 13 = 0" />. Give your answers
            in the form <InlineMath math="a + bi" />.
          </>
        }
        answer={
          <>
            <BlockMath math="\Delta = 16 - 52 = -36" />
            <BlockMath math="z = \frac{-4 \pm \sqrt{-36}}{2} = \frac{-4 \pm 6i}{2}" />
            <BlockMath math="z = \boxed{-2 + 3i} \quad \text{or} \quad z = \boxed{-2 - 3i}" />
            <p>
              The two roots are complex conjugates, as expected when{" "}
              <InlineMath math="\Delta < 0" />.
            </p>
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 10. Advanced Sequences & Series (HL) ────────────────────────────────────

function AdvancedSequencesSection() {
  return (
    <LessonSection
      id="advanced-sequences"
      label="HL Topic 3"
      title="Advanced Sequences & Series"
      tag={<HLTag />}
      intro="HL extends SL sequences with sigma (Σ) notation, standard sum results, and more complex series problems involving algebraic manipulation."
      alt
    >
      <FormulaBox title="Sigma Notation & Standard Results">
        <FormulaRow label="Sigma notation" math="\sum_{r=1}^{n} f(r) = f(1) + f(2) + \cdots + f(n)" />
        <FormulaRow label="Sum of constants" math="\sum_{r=1}^{n} c = cn" />
        <FormulaRow label="Sum of r" math="\sum_{r=1}^{n} r = \dfrac{n(n+1)}{2}" />
        <FormulaRow label="Sum of r²" math="\sum_{r=1}^{n} r^2 = \dfrac{n(n+1)(2n+1)}{6}" />
        <FormulaRow label="Sum of r³" math="\sum_{r=1}^{n} r^3 = \left[\dfrac{n(n+1)}{2}\right]^2" />
      </FormulaBox>

      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-1">Splitting a sum</p>
        <p className="text-slate-500 text-sm">
          You can split sums and adjust limits:{" "}
          <InlineMath math="\displaystyle\sum_{r=3}^{n} f(r) = \sum_{r=1}^{n} f(r) - f(1) - f(2)" />
          . This allows you to evaluate sums that don't start from r = 1.
        </p>
      </HighlightBox>

      <WorkedExample title="Evaluate Σ(2r − 1) for r = 3 to 10">
        <StepBox n={1}>
          Split the sum:
          <BlockMath math="\sum_{r=3}^{10}(2r-1) = \sum_{r=1}^{10}(2r-1) - \sum_{r=1}^{2}(2r-1)" />
        </StepBox>
        <StepBox n={2}>
          Use standard results:
          <BlockMath math="\sum_{r=1}^{10}(2r-1) = 2 \cdot \frac{10 \cdot 11}{2} - 10 = 110 - 10 = 100" />
          <BlockMath math="\sum_{r=1}^{2}(2r-1) = (2-1) + (4-1) = 1 + 3 = 4" />
        </StepBox>
        <StepBox n={3}>
          Subtract:
          <BlockMath math="100 - 4 = \boxed{96}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Find the value of n such that{" "}
            <InlineMath math="\displaystyle\sum_{r=1}^{n}(2r+1) = 420" />.
          </>
        }
        answer={
          <>
            <p>Expand using standard results:</p>
            <BlockMath math="\sum_{r=1}^{n}(2r+1) = 2 \cdot \frac{n(n+1)}{2} + n = n^2 + n + n = n^2 + 2n" />
            <p>Set equal to 420:</p>
            <BlockMath math="n^2 + 2n = 420 \implies n^2 + 2n - 420 = 0" />
            <BlockMath math="(n-20)(n+21) = 0 \implies \boxed{n = 20}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 11. Harder Binomial Expansion (HL) ──────────────────────────────────────

function HarderBinomialSection() {
  return (
    <LessonSection
      id="harder-binomial"
      label="HL Topic 4"
      title="Harder Binomial Expansion"
      tag={<HLTag />}
      intro="HL extends the binomial theorem to any real index n (negative, fractional, irrational). The result is an infinite series, valid only for |x| < 1."
    >
      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-2">
          General Binomial Series
        </p>
        <BlockMath math="(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots" />
        <p className="text-slate-500 text-sm mt-2">
          Valid for <InlineMath math="|x| < 1" /> when n is not a positive
          integer. For positive integers, the series terminates after n+1 terms
          (same as the SL binomial theorem).
        </p>
      </HighlightBox>

      <FormulaBox title="Key Patterns">
        <FormulaRow label="Negative index example" math="(1+x)^{-1} = 1 - x + x^2 - x^3 + \cdots" />
        <FormulaRow label="Fractional index example" math="(1+x)^{1/2} = 1 + \tfrac{1}{2}x - \tfrac{1}{8}x^2 + \tfrac{1}{16}x^3 - \cdots" />
        <FormulaRow label="General rth coefficient" math="\frac{n(n-1)(n-2)\cdots(n-r+1)}{r!}" />
      </FormulaBox>

      {/* Visual: check validity */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          Before expanding — always check validity
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-ai-bg rounded-lg px-5 py-4 border border-ai-light">
            <p className="font-bold text-ai-text mb-2">✓ Valid</p>
            <p className="font-mono text-navy-900">(1 + 0.2x)^{-2}</p>
            <p className="text-xs text-slate-500 mt-1">Need |0.2x| &lt; 1, i.e. |x| &lt; 5</p>
          </div>
          <div className="bg-danger-bg rounded-lg px-5 py-4 border border-danger-light">
            <p className="font-bold text-danger-text mb-2">✗ Must rearrange first</p>
            <p className="font-mono text-navy-900">(3 + x)^{-1}</p>
            <p className="text-xs text-slate-500 mt-1">
              Factor out 3: (1/3)(1 + x/3)^{-1}, then |x/3| &lt; 1
            </p>
          </div>
        </div>
      </div>

      <WorkedExample title="Expand (1 − 2x)⁻² up to the x³ term">
        <p className="text-sm text-slate-500 mb-4">
          Use <InlineMath math="n = -2" /> and replace x with{" "}
          <InlineMath math="-2x" /> in the general series.
        </p>
        <StepBox n={1}>
          Term r = 0: <InlineMath math="1" />
        </StepBox>
        <StepBox n={2}>
          Term r = 1: <InlineMath math="(-2)(-2x) = 4x" />
        </StepBox>
        <StepBox n={3}>
          Term r = 2:{" "}
          <InlineMath math="\dfrac{(-2)(-3)}{2}(-2x)^2 = 3 \times 4x^2 = 12x^2" />
        </StepBox>
        <StepBox n={4}>
          Term r = 3:{" "}
          <InlineMath math="\dfrac{(-2)(-3)(-4)}{6}(-2x)^3 = -4 \times (-8x^3) = 32x^3" />
        </StepBox>
        <BlockMath math="(1-2x)^{-2} \approx \boxed{1 + 4x + 12x^2 + 32x^3}" />
        <p className="text-xs text-slate-500 mt-2">
          Valid for <InlineMath math="|x| < \tfrac{1}{2}" />.
        </p>
      </WorkedExample>

      <Practice
        problem={
          <>
            Expand <InlineMath math="(1+x)^{1/2}" /> up to and including the
            term in x². Hence find an approximation for{" "}
            <InlineMath math="\sqrt{1.02}" />, and compare with your
            calculator.
          </>
        }
        answer={
          <>
            <p>
              Use <InlineMath math="n = \tfrac{1}{2}" />:
            </p>
            <BlockMath math="(1+x)^{1/2} \approx 1 + \frac{1}{2}x + \frac{\frac{1}{2}(-\frac{1}{2})}{2}x^2 = 1 + \frac{x}{2} - \frac{x^2}{8}" />
            <p>
              For <InlineMath math="\sqrt{1.02}" />, set x = 0.02:
            </p>
            <BlockMath math="\sqrt{1.02} \approx 1 + 0.01 - \frac{0.0004}{8} = 1 + 0.01 - 0.00005 = \boxed{1.00995}" />
            <p className="text-xs">
              Calculator gives 1.009950493… — our approximation is accurate to
              5 significant figures!
            </p>
          </>
        }
      />
    </LessonSection>
  );
}

// ─── Unit Summary ─────────────────────────────────────────────────────────────

function UnitSummary() {
  return (
    <section id="summary" className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-aa-primary bg-aa-bg px-3 py-1 rounded mb-3">
          Unit 1 Summary
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
          Key Formulas at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            {
              title: "Indices",
              formulas: [
                "a^m \\times a^n = a^{m+n}",
                "a^{-n} = \\tfrac{1}{a^n}",
                "a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m",
              ],
            },
            {
              title: "Quadratics",
              formulas: [
                "x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
                "\\Delta = b^2 - 4ac",
                "a(x+p)^2 + q \\text{ (vertex form)}",
              ],
            },
            {
              title: "Sequences",
              formulas: [
                "u_n = u_1 + (n-1)d \\text{ (AP)}",
                "u_n = u_1 r^{n-1} \\text{ (GP)}",
                "S_\\infty = \\dfrac{u_1}{1-r}, \\; |r|<1",
              ],
            },
            {
              title: "Logarithms",
              formulas: [
                "\\log_a(xy) = \\log_a x + \\log_a y",
                "\\log_a(x^n) = n\\log_a x",
                "\\log_a b = \\dfrac{\\ln b}{\\ln a}",
              ],
            },
            {
              title: "Binomial (SL)",
              formulas: [
                "(a+b)^n = \\sum_{r=0}^n \\binom{n}{r} a^{n-r} b^r",
                "T_{r+1} = \\binom{n}{r} a^{n-r} b^r",
              ],
            },
            {
              title: "Complex Numbers (HL)",
              formulas: [
                "|z| = \\sqrt{a^2+b^2}",
                "z = re^{i\\theta}",
                "(re^{i\\theta})^n = r^n e^{in\\theta}",
              ],
            },
          ].map(({ title, formulas }) => (
            <div
              key={title}
              className="bg-navy-900 text-white rounded-xl px-6 py-5"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-3">
                {title}
              </p>
              <ul className="space-y-2">
                {formulas.map((f, i) => (
                  <li key={i} className="text-sm">
                    <InlineMath math={f} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-slate-200">
          <Link
            href="/aa"
            className="text-sm font-semibold text-aa-primary hover:underline"
          >
            ← Back to AA Curriculum
          </Link>
          <Link
            href="/aa/unit-1/lesson#indices"
            className="text-sm font-semibold text-slate-500 hover:text-aa-primary"
          >
            Back to top ↑
          </Link>
          <span className="text-sm text-slate-400 italic">
            Practice Problems — coming soon
          </span>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════

export default function Page() {
  return (
    <main>
      <LessonHero />
      <TableOfContents />

      {/* SL Topics */}
      <IndicesSection />
      <SurdsSection />
      <QuadraticsSection />
      <CompletingSquareSection />
      <SequencesSection />
      <LogarithmsSection />
      <BinomialSection />

      {/* HL Extension */}
      <HLDivider />
      <InductionSection />
      <ComplexNumbersSection />
      <AdvancedSequencesSection />
      <HarderBinomialSection />

      <UnitSummary />
    </main>
  );
}
