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
      intro="A surd is an irrational root that cannot be simplified to a rational number. Surds include square roots, cube roots, and nth roots — all linked to fractional indices. Exact surd form is always required for IB answers."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">What is a surd?</p>
        <p className="text-slate-500 text-sm">
          <InlineMath math="\sqrt{9} = 3" /> is NOT a surd (it simplifies to a rational number).
          But <InlineMath math="\sqrt{5}" />, <InlineMath math="\sqrt[3]{7}" />, and{" "}
          <InlineMath math="\sqrt[4]{3}" /> are surds — irrational values left in root form.
          Every surd links directly to a fractional index:{" "}
          <InlineMath math="\sqrt[n]{a} = a^{1/n}" />.
        </p>
      </HighlightBox>

      {/* ── Formula Group 1: Square root rules ── */}
      <FormulaBox title="Square Root (√) Rules">
        <FormulaRow label="Product" math="\sqrt{ab} = \sqrt{a}\,\sqrt{b}" />
        <FormulaRow label="Self-multiply" math="\sqrt{a} \times \sqrt{a} = a" />
        <FormulaRow label="Combine (same radicand)" math="p\sqrt{n} \pm q\sqrt{n} = (p \pm q)\sqrt{n}" />
        <FormulaRow label="Rationalise — simple" math="\dfrac{k}{\sqrt{a}} = \dfrac{k\sqrt{a}}{a}" />
        <FormulaRow label="Rationalise — conjugate" math="\dfrac{k}{p - \sqrt{q}} = \dfrac{k\bigl(p + \sqrt{q}\bigr)}{p^2 - q}" />
      </FormulaBox>

      {/* ── Formula Group 2: Cube root rules ── */}
      <FormulaBox title="Cube Root (∛) Rules">
        <FormulaRow label="Product" math="\sqrt[3]{ab} = \sqrt[3]{a}\,\sqrt[3]{b}" />
        <FormulaRow label="Self-triple" math="\left(\sqrt[3]{a}\right)^3 = a" />
        <FormulaRow label="Simplify perfect cube factor" math="\sqrt[3]{a^3 b} = a\,\sqrt[3]{b}" />
        <FormulaRow label="Rationalise cube root" math="\dfrac{k}{\sqrt[3]{a}} = \dfrac{k\,\sqrt[3]{a^2}}{a}" />
      </FormulaBox>

      {/* ── Formula Group 3: Nth root rules ── */}
      <FormulaBox title="Nth Root Rules">
        <FormulaRow label="Index connection" math="\sqrt[n]{a} = a^{1/n}" />
        <FormulaRow label="Product rule" math="\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}" />
        <FormulaRow label="Power rule" math="\sqrt[n]{a^m} = a^{m/n} = \left(\sqrt[n]{a}\right)^m" />
        <FormulaRow label="Nested root" math="\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a} = a^{1/(mn)}" />
      </FormulaBox>

      {/* Visual: simplification strategy */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          Simplification strategy — find the largest perfect-power factor
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-navy-900 mb-2">Square root</p>
            <div className="space-y-1">
              <p className="text-slate-500"><InlineMath math="\sqrt{72} = \sqrt{36 \times 2}" /></p>
              <p className="text-slate-500"><InlineMath math="= \sqrt{36} \times \sqrt{2}" /></p>
              <p className="font-bold text-navy-900"><InlineMath math="= 6\sqrt{2}" /></p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-navy-900 mb-2">Cube root</p>
            <div className="space-y-1">
              <p className="text-slate-500"><InlineMath math="\sqrt[3]{54} = \sqrt[3]{27 \times 2}" /></p>
              <p className="text-slate-500"><InlineMath math="= \sqrt[3]{27} \times \sqrt[3]{2}" /></p>
              <p className="font-bold text-navy-900"><InlineMath math="= 3\sqrt[3]{2}" /></p>
            </div>
          </div>
        </div>
      </div>

      {/* ── All worked examples come AFTER all formula groups ── */}

      <WorkedExample title="Square roots — rationalise 6 / (√3 − 1)">
        <StepBox n={1}>
          Identify the conjugate of <InlineMath math="\sqrt{3} - 1" />:{" "}
          it is <InlineMath math="\sqrt{3} + 1" />.
        </StepBox>
        <StepBox n={2}>
          Multiply top and bottom by the conjugate:
          <BlockMath math="\frac{6}{\sqrt{3}-1} \times \frac{\sqrt{3}+1}{\sqrt{3}+1} = \frac{6(\sqrt{3}+1)}{(\sqrt{3})^2 - 1^2}" />
        </StepBox>
        <StepBox n={3}>
          Denominator becomes <InlineMath math="3 - 1 = 2" />:
          <BlockMath math="\frac{6(\sqrt{3}+1)}{2} = 3(\sqrt{3}+1) = \boxed{3\sqrt{3}+3}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Cube roots — simplify ∛54 and rationalise 4 / ∛3">
        <StepBox n={1}>
          Simplify <InlineMath math="\sqrt[3]{54}" /> by factoring out the largest perfect-cube factor:
          <BlockMath math="\sqrt[3]{54} = \sqrt[3]{27 \times 2} = \sqrt[3]{27} \cdot \sqrt[3]{2} = 3\sqrt[3]{2}" />
        </StepBox>
        <StepBox n={2}>
          Rationalise <InlineMath math="\dfrac{4}{\sqrt[3]{3}}" /> — multiply top and bottom by{" "}
          <InlineMath math="\sqrt[3]{3^2} = \sqrt[3]{9}" />:
          <BlockMath math="\frac{4}{\sqrt[3]{3}} \times \frac{\sqrt[3]{9}}{\sqrt[3]{9}} = \frac{4\sqrt[3]{9}}{\sqrt[3]{27}} = \frac{4\sqrt[3]{9}}{3} = \boxed{\dfrac{4\sqrt[3]{9}}{3}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Nth roots — simplify ⁵√(32x¹⁰) and evaluate 27^(2/3)">
        <StepBox n={1}>
          Apply the product and power rules for <InlineMath math="\sqrt[5]{32x^{10}}" />:
          <BlockMath math="\sqrt[5]{32x^{10}} = \sqrt[5]{32} \cdot \sqrt[5]{x^{10}} = \sqrt[5]{2^5} \cdot x^{10/5} = 2 \cdot x^2 = \boxed{2x^2}" />
        </StepBox>
        <StepBox n={2}>
          Evaluate <InlineMath math="27^{2/3}" /> using the index–root connection:
          <BlockMath math="27^{2/3} = \left(\sqrt[3]{27}\right)^2 = 3^2 = \boxed{9}" />
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

      <Practice
        problem={
          <>
            (a) Simplify <InlineMath math="\sqrt[3]{16} \cdot \sqrt[3]{4}" />.{" "}
            (b) Hence rationalise <InlineMath math="\dfrac{6}{\sqrt[3]{4}}" />.
          </>
        }
        answer={
          <>
            <p><strong>(a)</strong> Use the product rule for cube roots:</p>
            <BlockMath math="\sqrt[3]{16} \cdot \sqrt[3]{4} = \sqrt[3]{64} = 4" />
            <p><strong>(b)</strong> Multiply by <InlineMath math="\dfrac{\sqrt[3]{16}}{\sqrt[3]{16}}" /> (since <InlineMath math="\sqrt[3]{4} \cdot \sqrt[3]{16} = \sqrt[3]{64} = 4" />):</p>
            <BlockMath math="\frac{6}{\sqrt[3]{4}} \times \frac{\sqrt[3]{16}}{\sqrt[3]{16}} = \frac{6\sqrt[3]{16}}{4} = \boxed{\frac{3\sqrt[3]{16}}{2}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Simplify <InlineMath math="\sqrt[4]{81a^{12}}" /> where{" "}
            <InlineMath math="a > 0" />. Write your answer without a radical sign.
          </>
        }
        answer={
          <>
            <BlockMath math="\sqrt[4]{81a^{12}} = \sqrt[4]{81} \cdot \sqrt[4]{a^{12}} = \sqrt[4]{3^4} \cdot a^{12/4} = 3 \cdot a^3 = \boxed{3a^3}" />
          </>
        }
      />

      {/* ══════════════════════════════════════════════════════════════════════
          ── Formula Group 4: Rationalising — Advanced Conjugates & Higher Roots ──
          ══════════════════════════════════════════════════════════════════════ */}

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">
          Why conjugates work — the &ldquo;completing the factor&rdquo; idea
        </p>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            Multiplying <InlineMath math="(a - b)" /> by <InlineMath math="(a + b)" /> gives{" "}
            <InlineMath math="a^2 - b^2" /> — rational when a and b are surds. This{" "}
            <em>difference of squares</em> identity removes the surd from the denominator.
          </p>
          <p>
            For cube roots: <InlineMath math="(a - b)(a^2 + ab + b^2) = a^3 - b^3" />.
            Multiplying <InlineMath math="(\sqrt[3]{A} - \sqrt[3]{B})" /> by its triple-term
            factor gives <InlineMath math="A - B" /> — rational if A and B are rational.
          </p>
          <p>
            For any nth root: if the denominator contains <InlineMath math="\sqrt[n]{a^k}" />,
            multiply by <InlineMath math="\sqrt[n]{a^{n-k}}" /> to produce{" "}
            <InlineMath math="\sqrt[n]{a^n} = a" />. The key principle is always:{" "}
            <em>complete the missing factor so the exponent totals n</em>.
          </p>
        </div>
      </HighlightBox>

      {/* ── Formula Group 4 ── */}
      <FormulaBox title="Conjugate Identities Used in Rationalising">
        <FormulaRow label="A — Difference of squares" math="(a - b)(a + b) = a^2 - b^2" />
        <FormulaRow label="A — Classic rationalise" math="\dfrac{k}{a - b} = \dfrac{k(a + b)}{a^2 - b^2}" />
        <FormulaRow label="B — Cube difference identity" math="(a - b)(a^2 + ab + b^2) = a^3 - b^3" />
        <FormulaRow label="B — Cube sum identity" math="(a + b)(a^2 - ab + b^2) = a^3 + b^3" />
        <FormulaRow label="C — nth power difference (concept)" math="a^n - b^n = (a - b)\!\left(a^{n-1} + a^{n-2}b + \cdots + b^{n-1}\right)" />
        <FormulaRow label="D — nth root missing power" math="\dfrac{k}{\sqrt[n]{a^k}} = \dfrac{k\,\sqrt[n]{a^{n-k}}}{a} \quad\bigl(\text{since }\sqrt[n]{a^k} \cdot \sqrt[n]{a^{n-k}} = a\bigr)" />
      </FormulaBox>

      {/* Visual: rationalisation quick-reference table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary px-6 pt-5 pb-3">
          Rationalisation quick-reference — which factor to multiply by
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Denominator type</th>
                <th className="px-5 py-3 font-semibold">Multiply by</th>
                <th className="px-5 py-3 font-semibold">Denominator becomes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { denom: "a - b", factor: "a + b", result: "a^2 - b^2" },
                { denom: "a^2 + ab + b^2", factor: "a - b", result: "a^3 - b^3" },
                { denom: "\\sqrt[3]{a}", factor: "\\sqrt[3]{a^2}", result: "a" },
                { denom: "\\sqrt[n]{a^k}", factor: "\\sqrt[n]{a^{n-k}}", result: "\\sqrt[n]{a^n} = a" },
              ].map(({ denom, factor, result }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-aa-bg" : "bg-white"}>
                  <td className="px-5 py-3 text-navy-900"><InlineMath math={denom} /></td>
                  <td className="px-5 py-3 font-semibold text-aa-primary"><InlineMath math={factor} /></td>
                  <td className="px-5 py-3 text-navy-900"><InlineMath math={result} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Worked examples for Group 4 — all after all formula groups ── */}

      <WorkedExample title="Classic conjugate — rationalise 1 / (3 − √5)">
        <StepBox n={1}>
          Identify the conjugate of <InlineMath math="3 - \sqrt{5}" />:{" "}
          it is <InlineMath math="3 + \sqrt{5}" />.
        </StepBox>
        <StepBox n={2}>
          Multiply top and bottom by the conjugate:
          <BlockMath math="\frac{1}{3 - \sqrt{5}} \times \frac{3 + \sqrt{5}}{3 + \sqrt{5}} = \frac{3 + \sqrt{5}}{3^2 - (\sqrt{5})^2}" />
        </StepBox>
        <StepBox n={3}>
          Denominator: <InlineMath math="9 - 5 = 4" />:
          <BlockMath math="= \boxed{\dfrac{3 + \sqrt{5}}{4}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Cube conjugate — rationalise 1 / (∛2 − 1)">
        <div className="flex items-center gap-2 mb-4">
          <HLTag />
          <span className="text-xs text-slate-500">Uses the cube difference identity — HL depth</span>
        </div>
        <StepBox n={1}>
          Let <InlineMath math="a = \sqrt[3]{2},\; b = 1" />. The denominator is <InlineMath math="a - b" />.
          The matching triple-term factor is <InlineMath math="a^2 + ab + b^2 = \sqrt[3]{4} + \sqrt[3]{2} + 1" />.
        </StepBox>
        <StepBox n={2}>
          Multiply top and bottom by <InlineMath math="\sqrt[3]{4} + \sqrt[3]{2} + 1" />:
          <BlockMath math="\frac{1}{\sqrt[3]{2}-1} \times \frac{\sqrt[3]{4}+\sqrt[3]{2}+1}{\sqrt[3]{4}+\sqrt[3]{2}+1}" />
        </StepBox>
        <StepBox n={3}>
          Apply <InlineMath math="(a-b)(a^2+ab+b^2) = a^3 - b^3" />:
          <BlockMath math="\text{Denominator} = (\sqrt[3]{2})^3 - 1^3 = 2 - 1 = 1" />
        </StepBox>
        <StepBox n={4}>
          <BlockMath math="= \boxed{\sqrt[3]{4} + \sqrt[3]{2} + 1}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Missing factor form — rationalise 1 / (a² + ab + b²)">
        <div className="flex items-center gap-2 mb-4">
          <HLTag />
          <span className="text-xs text-slate-500">
            General symbolic form — applies when a, b are cube roots of rationals
          </span>
        </div>
        <StepBox n={1}>
          Recognise that <InlineMath math="a^2 + ab + b^2" /> is the triple-term factor in the cube
          identity. The <em>missing factor</em> that completes it to a cube is <InlineMath math="(a - b)" />.
        </StepBox>
        <StepBox n={2}>
          Multiply top and bottom by <InlineMath math="(a - b)" />:
          <BlockMath math="\frac{1}{a^2+ab+b^2} \times \frac{a-b}{a-b} = \frac{a-b}{(a-b)(a^2+ab+b^2)}" />
        </StepBox>
        <StepBox n={3}>
          Apply <InlineMath math="(a-b)(a^2+ab+b^2) = a^3 - b^3" />:
          <BlockMath math="= \dfrac{a-b}{a^3-b^3}" />
          If <InlineMath math="a = \sqrt[3]{p},\; b = \sqrt[3]{q}" />, then{" "}
          <InlineMath math="a^3 - b^3 = p - q" /> is rational, giving{" "}
          <InlineMath math="\boxed{\dfrac{\sqrt[3]{p}-\sqrt[3]{q}}{p - q}}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="nth root rationalisation — rationalise 1 / ⁴√(x³)">
        <StepBox n={1}>
          Identify: <InlineMath math="n = 4,\; k = 3" />. The missing power is{" "}
          <InlineMath math="n - k = 1" />, so multiply by{" "}
          <InlineMath math="\sqrt[4]{x^1} = \sqrt[4]{x}" />.
        </StepBox>
        <StepBox n={2}>
          Multiply top and bottom by <InlineMath math="\sqrt[4]{x}" />:
          <BlockMath math="\frac{1}{\sqrt[4]{x^3}} \times \frac{\sqrt[4]{x}}{\sqrt[4]{x}} = \frac{\sqrt[4]{x}}{\sqrt[4]{x^3} \cdot \sqrt[4]{x}} = \frac{\sqrt[4]{x}}{\sqrt[4]{x^4}}" />
        </StepBox>
        <StepBox n={3}>
          Denominator: <InlineMath math="\sqrt[4]{x^4} = x" />:
          <BlockMath math="= \boxed{\dfrac{\sqrt[4]{x}}{x}}" />
        </StepBox>
      </WorkedExample>

      {/* ── Practice problems for Group 4 ── */}

      <Practice
        problem={
          <>
            Rationalise <InlineMath math="\dfrac{5}{2 - \sqrt{3}}" />. Give your answer
            in the form <InlineMath math="a + b\sqrt{3}" />.
          </>
        }
        answer={
          <>
            <p>Multiply by the conjugate <InlineMath math="(2 + \sqrt{3})" />:</p>
            <BlockMath math="\frac{5}{2-\sqrt{3}} \times \frac{2+\sqrt{3}}{2+\sqrt{3}} = \frac{5(2+\sqrt{3})}{4 - 3} = \frac{5(2+\sqrt{3})}{1}" />
            <BlockMath math="= \boxed{10 + 5\sqrt{3}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Rationalise <InlineMath math="\dfrac{1}{\sqrt[3]{5} - 2}" />.
            Give your answer in simplified surd form.
          </>
        }
        answer={
          <>
            <p>
              Write <InlineMath math="2 = \sqrt[3]{8}" />, so let{" "}
              <InlineMath math="a = \sqrt[3]{5},\; b = \sqrt[3]{8}" />.
            </p>
            <p>
              Triple-term factor:{" "}
              <InlineMath math="a^2 + ab + b^2 = \sqrt[3]{25} + \sqrt[3]{40} + \sqrt[3]{64} = \sqrt[3]{25} + 2\sqrt[3]{5} + 4" />{" "}
              (since <InlineMath math="\sqrt[3]{40} = \sqrt[3]{8}\cdot\sqrt[3]{5} = 2\sqrt[3]{5}" /> and{" "}
              <InlineMath math="\sqrt[3]{64} = 4" />).
            </p>
            <BlockMath math="\frac{1}{\sqrt[3]{5}-2} \times \frac{\sqrt[3]{25}+2\sqrt[3]{5}+4}{\sqrt[3]{25}+2\sqrt[3]{5}+4} = \frac{\sqrt[3]{25}+2\sqrt[3]{5}+4}{5-8}" />
            <BlockMath math="= \boxed{-\dfrac{\sqrt[3]{25}+2\sqrt[3]{5}+4}{3}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Rationalise <InlineMath math="\dfrac{1}{\sqrt[3]{p} - \sqrt[3]{q}}" /> symbolically
            (where <InlineMath math="p \neq q" />). Express with a rational denominator.{" "}
            <em>(Hint: use the cube difference identity.)</em>
          </>
        }
        answer={
          <>
            <p>
              The matching triple-term factor is{" "}
              <InlineMath math="\sqrt[3]{p^2} + \sqrt[3]{pq} + \sqrt[3]{q^2}" />.
            </p>
            <BlockMath math="\frac{1}{\sqrt[3]{p}-\sqrt[3]{q}} \times \frac{\sqrt[3]{p^2}+\sqrt[3]{pq}+\sqrt[3]{q^2}}{\sqrt[3]{p^2}+\sqrt[3]{pq}+\sqrt[3]{q^2}}" />
            <p>Denominator: <InlineMath math="(\sqrt[3]{p})^3 - (\sqrt[3]{q})^3 = p - q" /> (rational).</p>
            <BlockMath math="= \boxed{\dfrac{\sqrt[3]{p^2}+\sqrt[3]{pq}+\sqrt[3]{q^2}}{p-q}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Rationalise <InlineMath math="\dfrac{3}{\sqrt[5]{x^2}}" /> where <InlineMath math="x > 0" />.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="n = 5,\; k = 2,\; n - k = 3" />. Multiply by{" "}
              <InlineMath math="\sqrt[5]{x^3}/\sqrt[5]{x^3}" />:
            </p>
            <BlockMath math="\frac{3}{\sqrt[5]{x^2}} \times \frac{\sqrt[5]{x^3}}{\sqrt[5]{x^3}} = \frac{3\sqrt[5]{x^3}}{\sqrt[5]{x^5}} = \frac{3\sqrt[5]{x^3}}{x} = \boxed{\dfrac{3\sqrt[5]{x^3}}{x}}" />
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
      intro="A quadratic equation has the form ax² + bx + c = 0. Beyond the standard formula, two powerful shortcuts — the reduced discriminant Δ' and the coefficient-sum rules — can identify roots almost instantly. Knowing all methods is essential for IB exam efficiency."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">Strategy: read the discriminant first</p>
        <p className="text-slate-500 text-sm">
          Always compute <InlineMath math="\Delta = b^2 - 4ac" /> before solving to know how many
          real roots exist. When <InlineMath math="b" /> is even, use the reduced discriminant{" "}
          <InlineMath math="\Delta' = (b/2)^2 - ac" /> for neater arithmetic. Also check if{" "}
          <InlineMath math="a+b+c=0" /> or <InlineMath math="a-b+c=0" /> for instant roots.
        </p>
      </HighlightBox>

      {/* ── Formula Group ── */}
      <FormulaBox title="Quadratic Formula, Discriminant & Shortcuts">
        <FormulaRow label="Standard form" math="ax^2 + bx + c = 0" />
        <FormulaRow label="Quadratic formula" math="x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
        <FormulaRow label="Discriminant" math="\Delta = b^2 - 4ac" />
        <FormulaRow label="Reduced discriminant (b even)" math="\Delta' = \left(\dfrac{b}{2}\right)^2 - ac \;\Longrightarrow\; x = \dfrac{-\dfrac{b}{2} \pm \sqrt{\Delta'}}{a}" />
        <FormulaRow label="Shortcut: a + b + c = 0" math="x_1 = 1,\quad x_2 = \dfrac{c}{a}" />
        <FormulaRow label="Shortcut: a - b + c = 0" math="x_1 = -1,\quad x_2 = -\dfrac{c}{a}" />
        <FormulaRow label="Vieta's formulae" math="x_1 + x_2 = -\dfrac{b}{a}, \qquad x_1 x_2 = \dfrac{c}{a}" />
      </FormulaBox>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">Why do the coefficient-sum shortcuts work?</p>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            <strong>Case a + b + c = 0:</strong> Substitute <InlineMath math="x = 1" />:{" "}
            <InlineMath math="a(1)^2 + b(1) + c = a+b+c = 0" /> ✓ so <InlineMath math="x=1" /> is always a root.
            By Vieta&apos;s product rule <InlineMath math="x_1 x_2 = c/a" />, the other root is <InlineMath math="x_2 = c/a" />.
          </p>
          <p>
            <strong>Case a - b + c = 0:</strong> Substitute <InlineMath math="x = -1" />:{" "}
            <InlineMath math="a(-1)^2 + b(-1) + c = a-b+c = 0" /> ✓ so <InlineMath math="x=-1" /> is always a root.
            By Vieta&apos;s product rule, the other root is <InlineMath math="x_2 = -c/a" />.
          </p>
        </div>
      </HighlightBox>

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

      {/* ── All worked examples come AFTER all formula groups ── */}

      <WorkedExample title="Standard formula: Solve 3x² + 7x − 6 = 0">
        <StepBox n={1}>
          Identify: <InlineMath math="a=3,\; b=7,\; c=-6" />
        </StepBox>
        <StepBox n={2}>
          Discriminant:
          <BlockMath math="\Delta = 7^2 - 4(3)(-6) = 49 + 72 = 121 > 0" />
          Two distinct real roots.
        </StepBox>
        <StepBox n={3}>
          Apply the quadratic formula:
          <BlockMath math="x = \frac{-7 \pm \sqrt{121}}{6} = \frac{-7 \pm 11}{6}" />
        </StepBox>
        <StepBox n={4}>
          <BlockMath math="x = \frac{4}{6} = \frac{2}{3} \qquad \text{or} \qquad x = \frac{-18}{6} = -3" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Reduced discriminant (Δ'): Solve 3x² + 4x − 7 = 0">
        <p className="text-sm text-slate-500 mb-4">
          Since <InlineMath math="b = 4" /> is even, using <InlineMath math="\Delta'" /> avoids square-rooting a large number.
        </p>
        <StepBox n={1}>
          Let <InlineMath math="b' = b/2 = 2" />. Compute the reduced discriminant:
          <BlockMath math="\Delta' = (b')^2 - ac = 4 - (3)(-7) = 4 + 21 = 25" />
        </StepBox>
        <StepBox n={2}>
          Apply the reduced formula <InlineMath math="x = \dfrac{-b' \pm \sqrt{\Delta'}}{a}" />:
          <BlockMath math="x = \frac{-2 \pm \sqrt{25}}{3} = \frac{-2 \pm 5}{3}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="x = \frac{3}{3} = 1 \qquad \text{or} \qquad x = \frac{-7}{3}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Shortcut a + b + c = 0: Solve 2x² − 5x + 3 = 0">
        <StepBox n={1}>
          Check the coefficient sum: <InlineMath math="a + b + c = 2 + (-5) + 3 = 0" /> ✓
        </StepBox>
        <StepBox n={2}>
          So <InlineMath math="x = 1" /> is immediately one root. Apply Vieta&apos;s product rule:
          <BlockMath math="x_1 \cdot x_2 = \frac{c}{a} = \frac{3}{2} \;\Longrightarrow\; x_2 = \frac{3}{2}" />
        </StepBox>
        <StepBox n={3}>
          Solutions: <InlineMath math="x = 1" /> or <InlineMath math="x = \dfrac{3}{2}" /> — found with no formula needed.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Shortcut a − b + c = 0: Solve 3x² + 5x + 2 = 0">
        <StepBox n={1}>
          Check: <InlineMath math="a - b + c = 3 - 5 + 2 = 0" /> ✓
        </StepBox>
        <StepBox n={2}>
          So <InlineMath math="x = -1" /> is one root. Apply Vieta&apos;s product rule:
          <BlockMath math="x_1 \cdot x_2 = \frac{c}{a} = \frac{2}{3} \;\Longrightarrow\; (-1) \cdot x_2 = \frac{2}{3} \;\Longrightarrow\; x_2 = -\frac{2}{3}" />
        </StepBox>
        <StepBox n={3}>
          Solutions: <InlineMath math="x = -1" /> or <InlineMath math="x = -\dfrac{2}{3}" />.
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

      <Practice
        problem={
          <>
            Solve <InlineMath math="5x^2 - 6x + 1 = 0" /> using the coefficient-sum
            shortcut. Verify both roots using Vieta&apos;s formulae.
          </>
        }
        answer={
          <>
            <p>Check: <InlineMath math="a + b + c = 5 - 6 + 1 = 0" /> ✓</p>
            <p>So <InlineMath math="x_1 = 1" /> and <InlineMath math="x_2 = c/a = 1/5" />.</p>
            <p>Verify with Vieta&apos;s:</p>
            <BlockMath math="x_1 + x_2 = 1 + \frac{1}{5} = \frac{6}{5} = -\frac{b}{a} = \frac{6}{5}\;\checkmark" />
            <BlockMath math="x_1 x_2 = 1 \times \frac{1}{5} = \frac{1}{5} = \frac{c}{a}\;\checkmark" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Use the reduced discriminant to solve{" "}
            <InlineMath math="2x^2 - 8x + 6 = 0" />.
          </>
        }
        answer={
          <>
            <p><InlineMath math="b = -8" /> is even, so <InlineMath math="b' = -4" />.</p>
            <BlockMath math="\Delta' = (-4)^2 - (2)(6) = 16 - 12 = 4" />
            <BlockMath math="x = \frac{-(-4) \pm \sqrt{4}}{2} = \frac{4 \pm 2}{2}" />
            <BlockMath math="x = 3 \quad \text{or} \quad x = 1" />
          </>
        }
      />

      {/* ── Factor Form ── */}
      <FormulaBox title="Factor Form (Factored Form)">
        <FormulaRow label="Standard factor form" math="a(x - x_1)(x - x_2) = 0" />
        <FormulaRow label="Zero product property" math="\text{If } AB = 0,\text{ then } A = 0 \text{ or } B = 0" />
        <FormulaRow label="Solutions from factors" math="x = x_1 \quad \text{or} \quad x = x_2" />
      </FormulaBox>

      <WorkedExample title="Solve using factor form: 2x² − 5x − 3 = 0">
        <StepBox n={1}>
          First factor the quadratic: find two numbers that <InlineMath math="ac = 2 \times (-3) = -6" /> and sum to <InlineMath math="b = -5" />.
        </StepBox>
        <StepBox n={2}>
          Numbers: <InlineMath math="1" /> and <InlineMath math="-6" /> (since <InlineMath math="1 + (-6) = -5" />).
          <BlockMath math="2x^2 - 6x + x - 3 = 0 \;\Longrightarrow\; 2x(x - 3) + 1(x - 3) = 0" />
        </StepBox>
        <StepBox n={3}>
          Factor completely:
          <BlockMath math="(2x + 1)(x - 3) = 0" />
        </StepBox>
        <StepBox n={4}>
          Apply zero product property:
          <BlockMath math="2x + 1 = 0 \;\Longrightarrow\; x = -\frac{1}{2} \quad \text{or} \quad x - 3 = 0 \;\Longrightarrow\; x = 3" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="x^2 - 7x + 12 = 0" /> by factoring.
          </>
        }
        answer={
          <>
            <p>Find two numbers that multiply to <InlineMath math="12" /> and sum to <InlineMath math="-7" />: <InlineMath math="-3" /> and <InlineMath math="-4" />.</p>
            <BlockMath math="(x - 3)(x - 4) = 0" />
            <BlockMath math="x = 3 \quad \text{or} \quad x = 4" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="3x^2 + 11x - 4 = 0" /> using the zero product property.
          </>
        }
        answer={
          <>
            <p>Find numbers for <InlineMath math="3 \times (-4) = -12" /> summing to <InlineMath math="11" />: <InlineMath math="12" /> and <InlineMath math="-1" />.</p>
            <BlockMath math="3x^2 + 12x - x - 4 = 0 \;\Longrightarrow\; (3x - 1)(x + 4) = 0" />
            <BlockMath math="x = \frac{1}{3} \quad \text{or} \quad x = -4" />
          </>
        }
      />

      {/* ── Vertex Form (Completed Square) ── */}
      <FormulaBox title="Vertex Form (Completed Square Form)">
        <FormulaRow label="Vertex form" math="a(x - h)^2 + k = 0" />
        <FormulaRow label="Vertex coordinates" math="h = -\frac{b}{2a}, \quad k = f(h)" />
        <FormulaRow label="Axis of symmetry" math="x = h = -\frac{b}{2a}" />
        <FormulaRow label="Solve by taking square root" math="a(x - h)^2 = -k \;\Longrightarrow\; (x - h)^2 = -\frac{k}{a}" />
      </FormulaBox>

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">Why does vertex form help?</p>
        <p className="text-slate-500 text-sm">
          When written as <InlineMath math="a(x - h)^2 + k = 0" />, you isolate the squared term and take square roots — avoiding the quadratic formula entirely. The vertex <InlineMath math="(h, k)" /> also gives you the maximum/minimum point of the parabola.
        </p>
      </HighlightBox>

      <WorkedExample title="Solve using vertex form: x² + 6x + 5 = 0">
        <StepBox n={1}>
          Start with <InlineMath math="x^2 + 6x + 5" />. Complete the square for the <InlineMath math="x" /> terms:
          <BlockMath math="x^2 + 6x = (x + 3)^2 - 9" />
        </StepBox>
        <StepBox n={2}>
          Substitute back:
          <BlockMath math="(x + 3)^2 - 9 + 5 = 0 \;\Longrightarrow\; (x + 3)^2 - 4 = 0" />
        </StepBox>
        <StepBox n={3}>
          Isolate the squared term:
          <BlockMath math="(x + 3)^2 = 4" />
        </StepBox>
        <StepBox n={4}>
          Take square roots (remember ±):
          <BlockMath math="x + 3 = \pm 2 \;\Longrightarrow\; x = -3 + 2 \text{ or } x = -3 - 2" />
        </StepBox>
        <StepBox n={5}>
          <BlockMath math="x = -1 \quad \text{or} \quad x = -5" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Vertex form with a ≠ 1: 2x² + 8x + 3 = 0">
        <StepBox n={1}>
          Factor out the coefficient of <InlineMath math="x^2" /> from the first two terms:
          <BlockMath math="2(x^2 + 4x) + 3 = 0" />
        </StepBox>
        <StepBox n={2}>
          Complete the square inside the parentheses:
          <BlockMath math="2\big[(x + 2)^2 - 4\big] + 3 = 0" />
        </StepBox>
        <StepBox n={3}>
          Distribute and simplify:
          <BlockMath math="2(x + 2)^2 - 8 + 3 = 0 \;\Longrightarrow\; 2(x + 2)^2 - 5 = 0" />
        </StepBox>
        <StepBox n={4}>
          Isolate and solve:
          <BlockMath math="2(x + 2)^2 = 5 \;\Longrightarrow\; (x + 2)^2 = \frac{5}{2}" />
          <BlockMath math="x + 2 = \pm \sqrt{\frac{5}{2}} = \pm \frac{\sqrt{10}}{2}" />
        </StepBox>
        <StepBox n={5}>
          <BlockMath math="x = -2 \pm \frac{\sqrt{10}}{2}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="x^2 + 4x - 2 = 0" /> by completing the square.
          </>
        }
        answer={
          <>
            <BlockMath math="x^2 + 4x = (x + 2)^2 - 4" />
            <BlockMath math="(x + 2)^2 - 4 - 2 = 0 \;\Longrightarrow\; (x + 2)^2 = 6" />
            <BlockMath math="x + 2 = \pm\sqrt{6} \;\Longrightarrow\; x = -2 \pm \sqrt{6}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="3x^2 - 12x + 8 = 0" /> using vertex form. Find the vertex of the parabola as well.
          </>
        }
        answer={
          <>
            <BlockMath math="3(x^2 - 4x) + 8 = 0" />
            <BlockMath math="3[(x - 2)^2 - 4] + 8 = 0" />
            <BlockMath math="3(x - 2)^2 - 12 + 8 = 0 \;\Longrightarrow\; 3(x - 2)^2 = 4" />
            <BlockMath math="(x - 2)^2 = \frac{4}{3}" />
            <BlockMath math="x - 2 = \pm \frac{2}{\sqrt{3}} = \pm \frac{2\sqrt{3}}{3}" />
            <BlockMath math="x = 2 \pm \frac{2\sqrt{3}}{3}" />
            <p className="mt-3">Vertex: <InlineMath math="(h, k) = (2, -4)" /> (since <InlineMath math="k = f(2) = 3(4) - 24 + 8 = -4" />)</p>
          </>
        }
      />

      {/* ── Additional SL Methods: Factor Form & Vertex Form ── */}

      <FormulaBox title="Factor Form (Factored Quadratic)">
        <FormulaRow label="Factored form" math="a(x - x_1)(x - x_2) = 0" />
        <FormulaRow label="Zero product property" math="\text{If } ab = 0,\text{ then } a = 0 \text{ or } b = 0" />
        <FormulaRow label="Solutions" math="x = x_1 \quad \text{or} \quad x = x_2" />
      </FormulaBox>

      <WorkedExample title="Solve using factor form: 2x² − 8x + 6 = 0">
        <StepBox n={1}>
          Factor out the GCF first: <InlineMath math="2(x^2 - 3x + 3) = 0" />. Divide by 2:{" "}
          <InlineMath math="x^2 - 3x + 3 = 0" />.
        </StepBox>
        <StepBox n={2}>
          Try to factor: look for two numbers that <strong>multiply to +3</strong> and{" "}
          <strong>add to −3</strong>. No integer pair works, so this quadratic cannot be factored over ℤ.
        </StepBox>
        <StepBox n={3}>
          Instead, split the middle term: <InlineMath math="x^2 - x - 2x + 3" />.
          <BlockMath math="x(x-1) - 2(x - \frac{3}{2})" /> — not cleanly factorable. Use the quadratic formula instead.
        </StepBox>
        <StepBox n={4}>
          Applying the formula: <InlineMath math="x = \frac{3 \pm \sqrt{9-12}}{2} = \frac{3 \pm i\sqrt{3}}{2}" />
          <span className="ml-2 text-sm text-slate-500">(complex roots — cannot factor over ℝ)</span>
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Factor and solve: x² − 5x + 6 = 0">
        <StepBox n={1}>
          Find two numbers that multiply to +6 and add to −5: <InlineMath math="-2" /> and{" "}
          <InlineMath math="-3" />.
        </StepBox>
        <StepBox n={2}>
          Write in factor form: <InlineMath math="(x - 2)(x - 3) = 0" />
        </StepBox>
        <StepBox n={3}>
          Apply zero product property:
          <BlockMath math="x - 2 = 0 \;\Longrightarrow\; x = 2 \quad \text{or} \quad x - 3 = 0 \;\Longrightarrow\; x = 3" />
        </StepBox>
        <StepBox n={4}>
          Verify: <InlineMath math="2 + 3 = 5" /> and <InlineMath math="2 \times 3 = 6" /> ✓
        </StepBox>
      </WorkedExample>

      <FormulaBox title="Vertex Form (Completed Square)">
        <FormulaRow label="Vertex form" math="a(x - h)^2 + k = 0" />
        <FormulaRow label="Vertex (h, k)" math="h = -\frac{b}{2a}, \quad k = f(h)" />
        <FormulaRow label="Axis of symmetry" math="x = h = -\frac{b}{2a}" />
        <FormulaRow label="Solve by isolating x²" math="a(x-h)^2 = -k \;\Longrightarrow\; (x-h)^2 = -\frac{k}{a}" />
      </FormulaBox>

      <WorkedExample title="Solve using vertex form: x² + 6x + 5 = 0">
        <StepBox n={1}>
          Complete the square: take half of <InlineMath math="b = 6" />, square it:{" "}
          <InlineMath math="(6/2)^2 = 9" />. Add and subtract 9:
          <BlockMath math="x^2 + 6x + 9 - 9 + 5 = 0" />
          <BlockMath math="(x+3)^2 - 4 = 0" />
        </StepBox>
        <StepBox n={2}>
          Now in vertex form: <InlineMath math="(x + 3)^2 - 4 = 0" /> where{" "}
          <InlineMath math="h = -3,\; k = -4" />.
        </StepBox>
        <StepBox n={3}>
          Isolate the square and take square roots:
          <BlockMath math="(x+3)^2 = 4" />
          <BlockMath math="x + 3 = \pm 2" />
        </StepBox>
        <StepBox n={4}>
          <BlockMath math="x = -3 + 2 = -1 \quad \text{or} \quad x = -3 - 2 = -5" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Vertex form with negative a: 2x² − 12x + 11 = 0">
        <StepBox n={1}>
          Factor out 2 from the x-terms: <InlineMath math="2(x^2 - 6x) + 11 = 0" />
        </StepBox>
        <StepBox n={2}>
          Complete the square inside parentheses:{" "}
          <InlineMath math="(6/2)^2 = 9" />
          <BlockMath math="2(x^2 - 6x + 9 - 9) + 11 = 0" />
          <BlockMath math="2[(x-3)^2 - 9] + 11 = 0" />
        </StepBox>
        <StepBox n={3}>
          Expand and simplify:
          <BlockMath math="2(x-3)^2 - 18 + 11 = 0" />
          <BlockMath math="2(x-3)^2 - 7 = 0" />
        </StepBox>
        <StepBox n={4}>
          Solve: <InlineMath math="2(x-3)^2 = 7" />
          <BlockMath math="(x-3)^2 = \frac{7}{2}" />
          <BlockMath math="x - 3 = \pm \sqrt{\frac{7}{2}} = \pm \frac{\sqrt{14}}{2}" />
          <BlockMath math="x = 3 \pm \frac{\sqrt{14}}{2}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Factor and solve using zero product property:{" "}
            <InlineMath math="x^2 + 7x + 12 = 0" />
          </>
        }
        answer={
          <>
            <p>Find two numbers that multiply to +12 and add to +7: 3 and 4.</p>
            <BlockMath math="(x + 3)(x + 4) = 0" />
            <BlockMath math="x = -3 \quad \text{or} \quad x = -4" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Use the vertex (completed square) method to solve:{" "}
            <InlineMath math="x^2 - 4x - 5 = 0" />
          </>
        }
        answer={
          <>
            <BlockMath math="x^2 - 4x + 4 - 4 - 5 = 0" />
            <BlockMath math="(x-2)^2 - 9 = 0" />
            <BlockMath math="(x-2)^2 = 9" />
            <BlockMath math="x - 2 = \pm 3" />
            <BlockMath math="x = 5 \quad \text{or} \quad x = -1" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="3x^2 + 12x + 9 = 0" /> by completing the square.
          </>
        }
        answer={
          <>
            <p>Divide by 3 first: <InlineMath math="x^2 + 4x + 3 = 0" /></p>
            <BlockMath math="x^2 + 4x + 4 - 4 + 3 = 0" />
            <BlockMath math="(x+2)^2 - 1 = 0" />
            <BlockMath math="(x+2)^2 = 1" />
            <BlockMath math="x + 2 = \pm 1" />
            <BlockMath math="x = -1 \quad \text{or} \quad x = -3" />
          </>
        }
      />

      {/* ══════════════════════════════════════════════════════════════════════
          ── HL Extension — Quadratic Equations (HL Depth)
          ══════════════════════════════════════════════════════════════════════ */}

      <div className="flex items-center gap-3 my-8 p-5 bg-danger-bg border-2 border-danger-light rounded-xl">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-danger-primary flex items-center justify-center">
          <span className="text-white text-sm font-extrabold">HL</span>
        </div>
        <div>
          <p className="font-bold text-navy-900 text-lg">HL Extension — Quadratic Equations</p>
          <p className="text-sm text-slate-500">
            The following five sub-sections extend Topic 3 to full IB AA HL depth. SL students may continue to Topic 4.
          </p>
        </div>
      </div>

      {/* ══ HL Section 1: Discriminant — Deep Analysis ══════════════════════ */}

      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">HL 1 — Discriminant: Deep Analysis</p>
        </div>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            The discriminant <InlineMath math="\Delta = b^2 - 4ac" /> links algebra to geometry: it
            tells you exactly how the parabola <InlineMath math="y = ax^2 + bx + c" /> intersects the
            x-axis. <InlineMath math="\Delta > 0" /> means the curve crosses twice;{" "}
            <InlineMath math="\Delta = 0" /> means the vertex touches the x-axis; and{" "}
            <InlineMath math="\Delta < 0" /> means the parabola lives entirely above or below it.
          </p>
          <p>
            The <em>axis of symmetry</em> <InlineMath math="x = -\tfrac{b}{2a}" /> is always
            mid-way between any two real roots. When <InlineMath math="\Delta = 0" />, the double
            root sits precisely at this axis.
          </p>
        </div>
      </HighlightBox>

      <FormulaBox title="Discriminant Classification">
        <FormulaRow label="Δ > 0 — two distinct real roots" math="x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a},\quad x_1 \neq x_2" />
        <FormulaRow label="Δ = 0 — one repeated root" math="x = -\dfrac{b}{2a} \quad \text{(vertex on x-axis)}" />
        <FormulaRow label="Δ < 0 — complex conjugate pair" math="x = \dfrac{-b \pm i\sqrt{-\Delta}}{2a},\quad x \notin \mathbb{R}" />
        <FormulaRow label="Axis of symmetry (always)" math="x = -\dfrac{b}{2a}" />
        <FormulaRow label="Number of x-intercepts" math="\Delta > 0\!\!: 2 \quad \Delta = 0\!\!: 1 \quad \Delta < 0\!\!: 0" />
      </FormulaBox>

      {/* Visual: Discriminant table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-danger-text px-6 pt-5 pb-3">
          Discriminant — graph behaviour summary
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Δ value</th>
                <th className="px-5 py-3 font-semibold">Graph behaviour</th>
                <th className="px-5 py-3 font-semibold">Root type</th>
              </tr>
            </thead>
            <tbody>
              {[
                { delta: "\\Delta > 0", graph: "Crosses x-axis twice", roots: "2 distinct real roots" },
                { delta: "\\Delta = 0", graph: "Touches x-axis (tangent at vertex)", roots: "1 repeated real root" },
                { delta: "\\Delta < 0", graph: "No x-intercept", roots: "2 complex conjugate roots" },
              ].map(({ delta, graph, roots }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-danger-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-semibold text-danger-text"><InlineMath math={delta} /></td>
                  <td className="px-5 py-3 text-slate-600">{graph}</td>
                  <td className="px-5 py-3 text-navy-900 font-medium">{roots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <WorkedExample title="Nature of roots — analyse 2x² − 4x + 5 = 0">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Identify: <InlineMath math="a = 2,\; b = -4,\; c = 5" />
        </StepBox>
        <StepBox n={2}>
          Compute the discriminant:
          <BlockMath math="\Delta = (-4)^2 - 4(2)(5) = 16 - 40 = -24" />
        </StepBox>
        <StepBox n={3}>
          Since <InlineMath math="\Delta = -24 < 0" />, the equation has{" "}
          <strong>two complex conjugate roots</strong>. The parabola has no x-intercepts and lies
          entirely above the x-axis (since <InlineMath math="a = 2 > 0" />).
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Parameter problem — find k for equal roots in x² + kx + 9 = 0">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Equal (repeated) roots require <InlineMath math="\Delta = 0" />:
          <BlockMath math="\Delta = k^2 - 4(1)(9) = k^2 - 36 = 0" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="k^2 = 36 \;\Longrightarrow\; k = \pm 6" />
        </StepBox>
        <StepBox n={3}>
          For <InlineMath math="k = 6" />: double root at <InlineMath math="x = -3" />.
          For <InlineMath math="k = -6" />: double root at <InlineMath math="x = 3" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Find the values of <InlineMath math="k" /> for which{" "}
            <InlineMath math="x^2 + kx + 4 = 0" /> has two distinct real roots.
          </>
        }
        answer={
          <>
            <p>Require <InlineMath math="\Delta > 0" />:</p>
            <BlockMath math="k^2 - 16 > 0 \;\Longrightarrow\; (k-4)(k+4) > 0" />
            <BlockMath math="\boxed{k < -4 \;\text{ or }\; k > 4}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Without solving, classify the roots of{" "}
            <InlineMath math="4x^2 - 4x + 1 = 0" />.
          </>
        }
        answer={
          <>
            <BlockMath math="\Delta = (-4)^2 - 4(4)(1) = 16 - 16 = 0" />
            <p>
              <InlineMath math="\Delta = 0" /> → one repeated real root at{" "}
              <InlineMath math="x = -\dfrac{-4}{2 \cdot 4} = \dfrac{1}{2}" />.
            </p>
          </>
        }
      />

      {/* ══ HL Section 2: Completing the Square — Deriving the Formula ══════ */}

      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">HL 2 — Completing the Square: Deriving the Quadratic Formula</p>
        </div>
        <p className="text-slate-500 text-sm">
          The quadratic formula is not magic — it is derived by completing the square on the
          general equation <InlineMath math="ax^2 + bx + c = 0" />. Understanding this derivation
          deepens your mastery of the vertex form <InlineMath math="a(x - h)^2 + k" /> and proves
          why <InlineMath math="\Delta = b^2 - 4ac" /> appears under the square root.
        </p>
      </HighlightBox>

      <FormulaBox title="Steps to Complete the Square on ax² + bx + c = 0">
        <FormulaRow label="Step 1 — divide by a" math="x^2 + \dfrac{b}{a}\,x + \dfrac{c}{a} = 0" />
        <FormulaRow label="Step 2 — isolate x terms" math="x^2 + \dfrac{b}{a}\,x = -\dfrac{c}{a}" />
        <FormulaRow label="Step 3 — add (b/2a)² to both sides" math="\left(x + \dfrac{b}{2a}\right)^2 = \dfrac{b^2}{4a^2} - \dfrac{c}{a} = \dfrac{b^2 - 4ac}{4a^2}" />
        <FormulaRow label="Step 4 — take square root" math="x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{b^2 - 4ac}}{2a}" />
        <FormulaRow label="Step 5 — final formula" math="x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
      </FormulaBox>

      <WorkedExample title="Derivation — derive the quadratic formula from ax² + bx + c = 0">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Divide every term by <InlineMath math="a" /> (valid since <InlineMath math="a \neq 0" />):
          <BlockMath math="x^2 + \frac{b}{a}x + \frac{c}{a} = 0" />
        </StepBox>
        <StepBox n={2}>
          Move the constant to the right:
          <BlockMath math="x^2 + \frac{b}{a}x = -\frac{c}{a}" />
        </StepBox>
        <StepBox n={3}>
          Add <InlineMath math="\left(\dfrac{b}{2a}\right)^2" /> to both sides to complete the square:
          <BlockMath math="x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = \frac{b^2}{4a^2} - \frac{c}{a}" />
          <BlockMath math="\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}" />
        </StepBox>
        <StepBox n={4}>
          Take the square root of both sides:
          <BlockMath math="x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}" />
        </StepBox>
        <StepBox n={5}>
          Subtract <InlineMath math="\dfrac{b}{2a}" />:
          <BlockMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \qquad \blacksquare" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Vertex form — rewrite 3x² + 12x + 7 and find the vertex">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Factor 3 from the quadratic and linear terms:
          <BlockMath math="3x^2 + 12x + 7 = 3(x^2 + 4x) + 7" />
        </StepBox>
        <StepBox n={2}>
          Complete the square inside: half of 4 is 2, so add and subtract 4:
          <BlockMath math="= 3\bigl[(x+2)^2 - 4\bigr] + 7" />
        </StepBox>
        <StepBox n={3}>
          Expand and collect:
          <BlockMath math="= 3(x+2)^2 - 12 + 7 = \boxed{3(x+2)^2 - 5}" />
        </StepBox>
        <p className="text-sm text-slate-500 mt-3">
          Vertex: <InlineMath math="(-2,\,-5)" />, axis of symmetry <InlineMath math="x = -2" />,
          minimum value <InlineMath math="-5" /> (since <InlineMath math="a = 3 > 0" />).
        </p>
      </WorkedExample>

      <Practice
        problem={
          <>
            Express <InlineMath math="x^2 - 6x + 11" /> in vertex form <InlineMath math="(x - h)^2 + k" />.
            State the vertex and minimum value.
          </>
        }
        answer={
          <>
            <BlockMath math="x^2 - 6x + 11 = (x - 3)^2 - 9 + 11 = \boxed{(x-3)^2 + 2}" />
            <p>Vertex: <InlineMath math="(3,\,2)" />. Minimum value: <strong>2</strong> at <InlineMath math="x = 3" />.</p>
          </>
        }
      />

      {/* ══ HL Section 3: Vieta's Formulae — Full System ════════════════════ */}

      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">HL 3 — Vieta&apos;s Formulae: Full System</p>
        </div>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            If <InlineMath math="\alpha" /> and <InlineMath math="\beta" /> are the roots of{" "}
            <InlineMath math="ax^2 + bx + c = 0" />, then by factoring{" "}
            <InlineMath math="a(x - \alpha)(x - \beta) = 0" /> and comparing coefficients:
          </p>
          <p>
            <InlineMath math="\alpha + \beta = -\dfrac{b}{a}" /> and{" "}
            <InlineMath math="\alpha\beta = \dfrac{c}{a}" />.
          </p>
          <p>
            These let you find quadratics from roots, evaluate symmetric expressions like{" "}
            <InlineMath math="\alpha^2 + \beta^2" /> without solving, and solve parameter problems efficiently.
          </p>
        </div>
      </HighlightBox>

      <FormulaBox title="Vieta's Formulae — Full System">
        <FormulaRow label="Sum of roots" math="\alpha + \beta = -\dfrac{b}{a}" />
        <FormulaRow label="Product of roots" math="\alpha\beta = \dfrac{c}{a}" />
        <FormulaRow label="Quadratic from known roots" math="x^2 - (\alpha + \beta)\,x + \alpha\beta = 0" />
        <FormulaRow label="Symmetric identity" math="\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta" />
        <FormulaRow label="Difference identity" math="(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta = \dfrac{\Delta}{a^2}" />
      </FormulaBox>

      <WorkedExample title="Form the quadratic with roots 2 and −3">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Compute sum and product:
          <BlockMath math="\alpha + \beta = 2 + (-3) = -1, \qquad \alpha\beta = 2 \times (-3) = -6" />
        </StepBox>
        <StepBox n={2}>
          Apply the reconstruction formula:
          <BlockMath math="x^2 - (-1)x + (-6) = 0" />
          <BlockMath math="\boxed{x^2 + x - 6 = 0}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Parameter problem — α, β roots of x² − 5x + k = 0, and α² + β² = 13. Find k.">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          From Vieta&apos;s formulae with <InlineMath math="a=1,\; b=-5,\; c=k" />:
          <BlockMath math="\alpha + \beta = 5, \qquad \alpha\beta = k" />
        </StepBox>
        <StepBox n={2}>
          Apply the symmetric identity:
          <BlockMath math="\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = 25 - 2k" />
        </StepBox>
        <StepBox n={3}>
          Set equal to 13 and solve:
          <BlockMath math="25 - 2k = 13 \;\Longrightarrow\; 2k = 12 \;\Longrightarrow\; \boxed{k = 6}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            The sum of roots is 3 and the product is <InlineMath math="-10" />.
            Write down the quadratic equation with these roots.
          </>
        }
        answer={
          <>
            <BlockMath math="x^2 - (\alpha+\beta)x + \alpha\beta = 0 \;\Longrightarrow\; \boxed{x^2 - 3x - 10 = 0}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            <InlineMath math="\alpha" /> and <InlineMath math="\beta" /> are roots of{" "}
            <InlineMath math="2x^2 - 7x + 3 = 0" />. Find <InlineMath math="\alpha^2 + \beta^2" />.
          </>
        }
        answer={
          <>
            <p>From Vieta&apos;s: <InlineMath math="\alpha+\beta = \tfrac{7}{2},\; \alpha\beta = \tfrac{3}{2}" /></p>
            <BlockMath math="\alpha^2 + \beta^2 = \left(\frac{7}{2}\right)^2 - 2\left(\frac{3}{2}\right) = \frac{49}{4} - 3 = \boxed{\frac{37}{4}}" />
          </>
        }
      />

      {/* ══ HL Section 4: Quadratics with Complex Roots ═════════════════════ */}

      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">HL 4 — Quadratics with Complex Roots</p>
        </div>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            When <InlineMath math="\Delta < 0" />, the square root in the quadratic formula
            produces <InlineMath math="\sqrt{\text{negative}}" />. We write{" "}
            <InlineMath math="\sqrt{-1} = i" />, so <InlineMath math="\sqrt{-n} = i\sqrt{n}" />.
          </p>
          <p>
            Complex roots always come in <em>conjugate pairs</em>:{" "}
            <InlineMath math="x = p + qi" /> and <InlineMath math="x = p - qi" />.
            This means if all coefficients are real, you cannot have just one complex root.
          </p>
        </div>
      </HighlightBox>

      <FormulaBox title="Complex Root Formula (Δ < 0)">
        <FormulaRow label="General complex roots" math="x = \dfrac{-b \pm i\sqrt{-\Delta}}{2a} \quad (\Delta = b^2 - 4ac < 0)" />
        <FormulaRow label="Real part" math="\text{Re}(x) = -\dfrac{b}{2a}" />
        <FormulaRow label="Imaginary part" math="\text{Im}(x) = \pm\dfrac{\sqrt{-\Delta}}{2a}" />
        <FormulaRow label="Conjugate pair property" math="x_1 = \overline{x_2} \quad \text{(always, when coefficients are real)}" />
      </FormulaBox>

      <WorkedExample title="Complex roots — solve x² + 4x + 13 = 0">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Compute discriminant:
          <BlockMath math="\Delta = 4^2 - 4(1)(13) = 16 - 52 = -36 < 0" />
        </StepBox>
        <StepBox n={2}>
          Apply the formula with <InlineMath math="\sqrt{-36} = 6i" />:
          <BlockMath math="x = \frac{-4 \pm \sqrt{-36}}{2} = \frac{-4 \pm 6i}{2}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="x = \boxed{-2 + 3i} \quad \text{or} \quad x = \boxed{-2 - 3i}" />
          Note the roots are complex conjugates: <InlineMath math="\text{Re} = -2,\; |\text{Im}| = 3" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="x^2 + 2x + 10 = 0" />. Express roots in the form{" "}
            <InlineMath math="a + bi" />.
          </>
        }
        answer={
          <>
            <BlockMath math="\Delta = 4 - 40 = -36" />
            <BlockMath math="x = \frac{-2 \pm \sqrt{-36}}{2} = \frac{-2 \pm 6i}{2} = \boxed{-1 \pm 3i}" />
          </>
        }
      />

      {/* ══ HL Section 5: Transformations of Quadratic Graphs ════════════════ */}

      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">HL 5 — Transformations of Quadratic Graphs</p>
        </div>
        <p className="text-slate-500 text-sm">
          Vertex form <InlineMath math="y = a(x - h)^2 + k" /> encodes all four transformations of
          the parent parabola <InlineMath math="y = x^2" /> directly. Reading off{" "}
          <InlineMath math="a" />, <InlineMath math="h" />, <InlineMath math="k" /> lets you
          describe or sketch the graph without expanding.
        </p>
      </HighlightBox>

      <FormulaBox title="Vertex Form — Transformations">
        <FormulaRow label="Vertex form" math="y = a(x - h)^2 + k" />
        <FormulaRow label="Vertex" math="(h,\; k)" />
        <FormulaRow label="Axis of symmetry" math="x = h" />
        <FormulaRow label="Minimum (a > 0)" math="y_{\min} = k \text{ at } x = h" />
        <FormulaRow label="Maximum (a < 0)" math="y_{\max} = k \text{ at } x = h" />
        <FormulaRow label="a: stretch / reflect" math="|a| > 1\text{: narrower};\quad 0 < |a| < 1\text{: wider};\quad a < 0\text{: reflected}" />
      </FormulaBox>

      {/* Visual: transformation table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-danger-text px-6 pt-5 pb-3">
          How each parameter transforms y = x²
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Parameter</th>
                <th className="px-5 py-3 font-semibold">Example</th>
                <th className="px-5 py-3 font-semibold">Effect on graph</th>
              </tr>
            </thead>
            <tbody>
              {[
                { param: "a > 1", eg: "a = 3", effect: "Vertical stretch — narrower parabola" },
                { param: "0 < a < 1", eg: "a = ½", effect: "Vertical compression — wider parabola" },
                { param: "a < 0", eg: "a = −2", effect: "Reflection in x-axis — opens downward" },
                { param: "h > 0", eg: "h = 4", effect: "Translate right by 4 units" },
                { param: "h < 0", eg: "h = −3", effect: "Translate left by 3 units" },
                { param: "k > 0", eg: "k = 5", effect: "Translate up by 5 units" },
                { param: "k < 0", eg: "k = −2", effect: "Translate down by 2 units" },
              ].map(({ param, eg, effect }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-danger-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-mono font-semibold text-navy-900">{param}</td>
                  <td className="px-5 py-3 text-danger-text font-semibold">{eg}</td>
                  <td className="px-5 py-3 text-slate-600">{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <WorkedExample title="Describe the transformation from y = x² to y = −2(x − 3)² + 5">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <p className="text-sm text-slate-500 mb-4">
          Read off <InlineMath math="a = -2,\; h = 3,\; k = 5" /> directly from vertex form.
        </p>
        <StepBox n={1}>
          <strong>a = −2:</strong> Reflect in the x-axis and apply a vertical stretch of factor 2
          (parabola opens downward, narrower than <InlineMath math="y = x^2" />).
        </StepBox>
        <StepBox n={2}>
          <strong>h = 3:</strong> Translate right by 3 units.
        </StepBox>
        <StepBox n={3}>
          <strong>k = 5:</strong> Translate up by 5 units.
        </StepBox>
        <StepBox n={4}>
          Vertex: <InlineMath math="(3,\,5)" />. Maximum value{" "}
          <InlineMath math="5" /> (since <InlineMath math="a < 0" />).
          Axis of symmetry: <InlineMath math="x = 3" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            For <InlineMath math="y = 3(x + 2)^2 - 1" />, state the vertex, axis of symmetry,
            minimum value, and describe the transformation from <InlineMath math="y = x^2" />.
          </>
        }
        answer={
          <>
            <p>Read off: <InlineMath math="a = 3,\; h = -2,\; k = -1" />.</p>
            <p>Vertex: <InlineMath math="(-2,\,-1)" />. Axis: <InlineMath math="x = -2" />. Minimum: <InlineMath math="-1" />.</p>
            <p>Transformation from <InlineMath math="y = x^2" />: vertical stretch by 3 (narrower), translate left 2 units, translate down 1 unit.</p>
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
