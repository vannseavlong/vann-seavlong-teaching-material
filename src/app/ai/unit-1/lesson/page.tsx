import { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "Unit 1: Number & Algebra — AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI Unit 1: Number & Algebra. Covers percentages and financial mathematics — compound interest, depreciation, currency conversion, and the GDC TVM Solver.",
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
        <p className="text-xs font-bold uppercase tracking-wider text-ai-light mb-4">
          {title}
        </p>
      )}
      <div className="text-white space-y-1">{children}</div>
    </div>
  );
}

function FormulaRow({ label, math }: { label: string; math: string }) {
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

function StepBox({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start my-3">
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ai-primary text-white text-sm font-bold flex items-center justify-center mt-0.5">
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
    <div className="border border-ai-light rounded-xl p-6 my-5 bg-ai-bg">
      <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-3">
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

function SLTag() {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-ai-light text-ai-text">
      SL + HL
    </span>
  );
}

// ─── Lesson Header ────────────────────────────────────────────────────────────

function LessonHero() {
  return (
    <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-28 pb-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <nav className="text-sm text-ai-light mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ai" className="hover:underline">
            AI Curriculum
          </Link>
          <span className="opacity-50">›</span>
          <span>Unit 1: Number & Algebra</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-ai-primary px-3 py-1 rounded">
            Unit 1
          </span>
          <SLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Number & Algebra
        </h1>
        <p className="text-ai-light text-lg max-w-2xl mb-8">
          Practical numeracy for real-world problems: percentage change and
          reverse percentages, then the financial mathematics behind
          interest, growth, and depreciation — the toolkit AI students reach
          for across every unit of the course.
        </p>

        <div className="flex gap-6 text-sm text-ai-light flex-wrap">
          <span>📋 Topics 1–2 of 5 (SL)</span>
          <span>🧮 Includes the GDC TVM Solver</span>
          <span>🔜 More topics in progress</span>
        </div>
      </div>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────

const SL_TOPICS = [
  { id: "percentages", label: "Percentages" },
  { id: "financial-mathematics", label: "Financial Mathematics" },
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
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-ai-bg text-ai-text hover:bg-ai-light transition-colors"
            >
              {t.label}
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

// ─── 1. Percentages ───────────────────────────────────────────────────────────

function PercentagesSection() {
  return (
    <LessonSection
      id="percentages"
      label="Topic 1"
      title="Percentages"
      tag={<SLTag />}
      intro="Percentage change underpins almost every applied problem in this course — from a sale discount to compound interest. The multiplier method lets you increase, decrease, and reverse percentages in a single calculation, without ever finding 'the percentage' as a separate step."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Instead of finding the percentage and then adding or subtracting
          it, multiply directly by a single number called the{" "}
          <strong>multiplier</strong>. A 15% increase has multiplier{" "}
          <InlineMath math="1.15" />; a 15% decrease has multiplier{" "}
          <InlineMath math="0.85" />. This is faster and far less
          error-prone under exam conditions.
        </p>
      </HighlightBox>

      <FormulaBox title="Percentage Toolkit">
        <FormulaRow
          label="Percentage of an amount"
          math="P\% \text{ of } N = \dfrac{P}{100} \times N"
        />
        <FormulaRow
          label="Increase multiplier"
          math="\text{New} = \text{Original} \times \left(1 + \dfrac{r}{100}\right)"
        />
        <FormulaRow
          label="Decrease multiplier"
          math="\text{New} = \text{Original} \times \left(1 - \dfrac{r}{100}\right)"
        />
        <FormulaRow
          label="Reverse percentage"
          math="\text{Original} = \dfrac{\text{New}}{1 \pm \frac{r}{100}}"
        />
        <FormulaRow
          label="General % change"
          math="\%\text{ change} = \dfrac{\text{New} - \text{Original}}{\text{Original}} \times 100"
        />
        <FormulaRow
          label="Percentage error"
          math="\%\text{ error} = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100"
        />
      </FormulaBox>

      {/* Visual: multiplier quick-reference */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        {[
          { change: "+5%", mult: "× 1.05" },
          { change: "+18%", mult: "× 1.18" },
          { change: "−8%", mult: "× 0.92" },
          { change: "−35%", mult: "× 0.65" },
        ].map(({ change, mult }) => (
          <div
            key={change}
            className="bg-white border border-slate-200 rounded-xl p-4 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
              {change}
            </p>
            <p className="font-mono text-navy-900 font-semibold text-lg">
              {mult}
            </p>
          </div>
        ))}
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Why don&apos;t a +20% and a −20% change cancel out?
        </p>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            Applying an increase of <InlineMath math="r\%" /> followed by a
            decrease of <InlineMath math="r\%" /> multiplies the original
            value by:
          </p>
          <BlockMath math="\left(1 + \dfrac{r}{100}\right)\left(1 - \dfrac{r}{100}\right) = 1 - \left(\dfrac{r}{100}\right)^2" />
          <p>
            This is always <em>less than 1</em> whenever{" "}
            <InlineMath math="r \neq 0" />, so the combined effect is always
            a net decrease — regardless of which change is applied first.
          </p>
        </div>
      </HighlightBox>

      {/* ── All worked examples come AFTER the formula group ── */}

      <WorkedExample title="Increase & decrease using multipliers">
        <StepBox n={1}>
          A shirt costs $40 and its price is increased by 15%. The
          multiplier is <InlineMath math="1 + \frac{15}{100} = 1.15" />:
          <BlockMath math="40 \times 1.15 = \boxed{\$46.00}" />
        </StepBox>
        <StepBox n={2}>
          A laptop costs $650 and is reduced by 12% in a sale. The
          multiplier is <InlineMath math="1 - \frac{12}{100} = 0.88" />:
          <BlockMath math="650 \times 0.88 = \boxed{\$572.00}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Reverse percentage — find the original amount">
        <p className="text-sm text-slate-500 mb-4">
          After a 20% pay rise, Sokha&apos;s monthly salary is $2,160. Find
          her original salary.
        </p>
        <StepBox n={1}>
          The multiplier for a 20% increase is{" "}
          <InlineMath math="1.20" />. The new salary is the{" "}
          <em>result</em> of multiplying, so divide — do not take 80% of
          $2,160 (a common mistake, since 20% off the new value is not the
          same as 20% off the original).
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\text{Original} = \dfrac{2160}{1.20} = \boxed{\$1{,}800}" />
        </StepBox>
        <StepBox n={3}>
          Check: <InlineMath math="1800 \times 1.20 = 2160" /> ✓
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Successive percentage changes">
        <p className="text-sm text-slate-500 mb-4">
          A price of $100 is increased by 20%, then the new price is
          decreased by 20%. Find the final price and the overall percentage
          change.
        </p>
        <StepBox n={1}>
          Increase: <InlineMath math="100 \times 1.20 = 120" />
        </StepBox>
        <StepBox n={2}>
          Decrease: <InlineMath math="120 \times 0.80 = \boxed{\$96}" />
        </StepBox>
        <StepBox n={3}>
          Overall change:{" "}
          <InlineMath math="\dfrac{96 - 100}{100} \times 100 = -4\%" /> — a
          net <strong>4% decrease</strong>, not 0%, exactly as predicted by{" "}
          <InlineMath math="1 - 0.2^2 = 0.96" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Percentage error">
        <p className="text-sm text-slate-500 mb-4">
          A stadium&apos;s crowd was estimated at 5,000 people. The exact
          count released afterwards was 4,850. Find the percentage error in
          the estimate.
        </p>
        <StepBox n={1}>
          Here <InlineMath math="v_A = 5000" /> (approximate) and{" "}
          <InlineMath math="v_E = 4850" /> (exact):
          <BlockMath math="\%\text{ error} = \left|\dfrac{5000 - 4850}{4850}\right| \times 100" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="= \dfrac{150}{4850} \times 100 = \boxed{3.09\%} \; (\text{3 s.f.})" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            A phone costs $520. It is discounted by 18% in a sale. Find the
            sale price.
          </>
        }
        answer={
          <>
            <p>
              Multiplier for an 18% decrease:{" "}
              <InlineMath math="1 - 0.18 = 0.82" />
            </p>
            <BlockMath math="520 \times 0.82 = \boxed{\$426.40}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            After a 12% decrease, the value of a share is $4,884. Find its
            original value.
          </>
        }
        answer={
          <>
            <p>
              Multiplier: <InlineMath math="1 - 0.12 = 0.88" />
            </p>
            <BlockMath math="\text{Original} = \dfrac{4884}{0.88} = \boxed{\$5{,}550}" />
            <p>
              Check: <InlineMath math="5550 \times 0.88 = 4884" /> ✓
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            A price increases by 30%, then the new price decreases by 30%.
            Find the overall percentage change from the original price.
          </>
        }
        answer={
          <>
            <p>
              Combined multiplier:{" "}
              <InlineMath math="1.30 \times 0.70 = 0.91" />
            </p>
            <p>
              This matches{" "}
              <InlineMath math="1 - 0.3^2 = 1 - 0.09 = 0.91" />.
            </p>
            <BlockMath math="\text{Overall change} = \boxed{-9\% \; (\text{a 9\% decrease})}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            A recipe estimates a cooking time of 45 minutes, but the dish
            actually takes 50 minutes. Find the percentage error in the
            estimate.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="v_A = 45,\; v_E = 50" />
            </p>
            <BlockMath math="\%\text{ error} = \left|\dfrac{45-50}{50}\right| \times 100 = \dfrac{5}{50}\times 100 = \boxed{10\%}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 2. Financial Mathematics ──────────────────────────────────────────────────

function FinancialMathSection() {
  return (
    <LessonSection
      id="financial-mathematics"
      label="Topic 2"
      title="Financial Mathematics"
      tag={<SLTag />}
      intro="Compound interest, depreciation, and currency conversion are the most heavily examined applications in the AI course. In the exam you will normally use your GDC's Finance app (the TVM Solver) rather than typing formulas — but you must understand what each variable represents to set it up correctly."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">
          Simple vs. compound interest
        </p>
        <p className="text-slate-500 text-sm">
          With <strong>simple interest</strong>, you earn interest only on
          the original principal, so the amount grows{" "}
          <em>linearly</em>. With <strong>compound interest</strong>, each
          period&apos;s interest is added to the principal before the next
          period is calculated, so the amount grows{" "}
          <em>exponentially</em> — this is why compound interest is far more
          powerful over long time periods.
        </p>
      </HighlightBox>

      {/* ── Formula Group 1: Simple & Compound Interest ── */}
      <FormulaBox title="Simple & Compound Interest">
        <FormulaRow label="Simple interest" math="I = \dfrac{PRT}{100}" />
        <FormulaRow
          label="Amount (simple interest)"
          math="A = P\left(1 + \dfrac{RT}{100}\right)"
        />
        <FormulaRow
          label="Compound interest (general)"
          math="FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn}"
        />
        <FormulaRow
          label="Compound interest (annual, k = 1)"
          math="FV = PV\left(1 + \dfrac{r}{100}\right)^{n}"
        />
      </FormulaBox>

      <p className="text-sm text-slate-500 max-w-2xl -mt-1 mb-5">
        Here <InlineMath math="PV" /> is the present value (principal),{" "}
        <InlineMath math="FV" /> is the future value, <InlineMath math="r" />{" "}
        is the annual nominal interest rate (%), <InlineMath math="n" /> is
        the number of years, and <InlineMath math="k" /> is the number of
        compounding periods per year (e.g. <InlineMath math="k=12" /> for
        monthly, <InlineMath math="k=4" /> for quarterly). This is the exact
        form given in the IB AI formula booklet.
      </p>

      {/* ── Formula Group 2: Depreciation & Currency Conversion ── */}
      <FormulaBox title="Depreciation & Currency Conversion">
        <FormulaRow
          label="Depreciation"
          math="FV = PV\left(1 - \dfrac{r}{100}\right)^{n}"
        />
        <FormulaRow
          label="Currency conversion"
          math="\text{Amount}_B = \text{Amount}_A \times (\text{rate } A \to B)"
        />
        <FormulaRow
          label="Reverse conversion"
          math="\text{Amount}_A = \text{Amount}_B \div (\text{rate } A \to B)"
        />
      </FormulaBox>

      <p className="text-sm text-slate-500 max-w-2xl -mt-1 mb-5">
        Depreciation uses the same structure as compound interest, but with
        a <em>negative</em> growth rate — each year the value is multiplied
        by a factor below 1.
      </p>

      {/* Visual: GDC TVM Solver reference table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          GDC Finance App — TVM Solver variables
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Variable</th>
                <th className="px-5 py-3 font-semibold">Meaning</th>
                <th className="px-5 py-3 font-semibold">Typical value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { v: "N", m: "Total number of compounding periods", t: "= k × n" },
                { v: "I%", m: "Annual nominal interest rate", t: "e.g. 5" },
                { v: "PV", m: "Present value (money now)", t: "negative if paid out" },
                { v: "PMT", m: "Regular payment", t: "0 for lump-sum interest" },
                { v: "FV", m: "Future value (money later)", t: "opposite sign to PV" },
                { v: "P/Y", m: "Payments per year", t: "usually = C/Y" },
                { v: "C/Y", m: "Compounding periods per year", t: "= k" },
              ].map(({ v, m, t }, i) => (
                <tr key={v} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-mono font-semibold text-ai-primary">
                    {v}
                  </td>
                  <td className="px-5 py-3 text-navy-900">{m}</td>
                  <td className="px-5 py-3 text-slate-500">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          The #1 TVM Solver mistake: sign convention
        </p>
        <p className="text-slate-500 text-sm">
          Money that <strong>leaves your pocket</strong> (an investment,
          loan payment) is entered as <strong>negative</strong>; money that{" "}
          <strong>you receive</strong> (a payout, a loan you take out) is{" "}
          <strong>positive</strong>. If you invest $3,000, enter{" "}
          <InlineMath math="PV = -3000" /> — the calculator then returns{" "}
          <InlineMath math="FV" /> as a positive number, since that is money
          coming back to you.
        </p>
      </HighlightBox>

      {/* ── All worked examples come AFTER both formula groups ── */}

      <WorkedExample title="Simple interest: $2,000 at 4% p.a. for 3 years">
        <StepBox n={1}>
          Identify: <InlineMath math="P = 2000,\; R = 4,\; T = 3" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="I = \dfrac{2000 \times 4 \times 3}{100} = \boxed{\$240}" />
        </StepBox>
        <StepBox n={3}>
          Total amount: <InlineMath math="A = 2000 + 240 = \boxed{\$2{,}240}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Compound interest: $5,000 at 6% p.a., compounded annually, for 4 years">
        <StepBox n={1}>
          Annual compounding means <InlineMath math="k = 1" />:
          <BlockMath math="FV = 5000\left(1 + \dfrac{6}{100}\right)^{4} = 5000(1.06)^4" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 5000 \times 1.26247696 = \boxed{\$6{,}312.38}" />
        </StepBox>
        <StepBox n={3}>
          GDC TVM Solver: <InlineMath math="N=4,\; I\%=6,\; PV=-5000,\; PMT=0,\; P/Y=C/Y=1" />, solve for FV.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Compound interest with monthly compounding: $3,000 at 5% p.a. for 2 years">
        <StepBox n={1}>
          Monthly compounding means <InlineMath math="k = 12,\; n = 2" />, so <InlineMath math="kn = 24" /> periods:
          <BlockMath math="FV = 3000\left(1 + \dfrac{5}{100 \times 12}\right)^{24} = 3000(1.00416\overline{6})^{24}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 3000 \times 1.104941 = \boxed{\$3{,}314.82}" />
        </StepBox>
        <StepBox n={3}>
          GDC TVM Solver: <InlineMath math="N=24,\; I\%=5,\; PV=-3000,\; PMT=0,\; P/Y=C/Y=12" />, solve for FV.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Depreciation: a $28,000 car depreciating at 12% per year, for 5 years">
        <StepBox n={1}>
          Depreciation uses a decrease multiplier raised to the power{" "}
          <InlineMath math="n" />:
          <BlockMath math="FV = 28000\left(1 - \dfrac{12}{100}\right)^{5} = 28000(0.88)^5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 28000 \times 0.527732 = \boxed{\$14{,}776.49}" />
        </StepBox>
        <StepBox n={3}>
          The car loses over 47% of its value in 5 years — depreciation
          compounds downward just as interest compounds upward.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Currency conversion: USD ↔ EUR at a rate of 1 USD = 0.92 EUR">
        <StepBox n={1}>
          Convert $850 USD to EUR:
          <BlockMath math="850 \times 0.92 = \boxed{782 \text{ EUR}}" />
        </StepBox>
        <StepBox n={2}>
          Convert 500 EUR back to USD using the same rate — divide instead
          of multiply:
          <BlockMath math="500 \div 0.92 = \boxed{\$543.48 \text{ USD (2 d.p.)}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Bopha deposits $1,500 in an account paying 3.5% p.a. simple
            interest. Find the total amount in the account after 6 years.
          </>
        }
        answer={
          <>
            <BlockMath math="I = \dfrac{1500 \times 3.5 \times 6}{100} = \$315" />
            <BlockMath math="A = 1500 + 315 = \boxed{\$1{,}815}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            $4,000 is invested at 7% p.a. compounded annually for 5 years.
            Find the future value.
          </>
        }
        answer={
          <>
            <BlockMath math="FV = 4000(1.07)^5 = 4000 \times 1.402552" />
            <BlockMath math="= \boxed{\$5{,}610.21}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            $6,000 is invested at 4.8% p.a. compounded quarterly for 3
            years. Find the future value, and state the GDC TVM Solver
            values used to solve it.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="k=4,\; n=3 \Rightarrow N = 12" />
            </p>
            <BlockMath math="FV = 6000\left(1+\dfrac{4.8}{400}\right)^{12} = 6000(1.012)^{12}" />
            <BlockMath math="= 6000 \times 1.153895 = \boxed{\$6{,}923.37}" />
            <p>
              TVM Solver: <InlineMath math="N=12,\; I\%=4.8,\; PV=-6000,\; PMT=0,\; P/Y=C/Y=4" />.
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            A laptop worth $1,800 depreciates at 20% per year. Find its
            value after 3 years.
          </>
        }
        answer={
          <>
            <BlockMath math="FV = 1800(0.80)^3 = 1800 \times 0.512" />
            <BlockMath math="= \boxed{\$921.60}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Convert £640 GBP to USD if 1 GBP = 1.27 USD. Then convert $200
            USD back to GBP using the same rate.
          </>
        }
        answer={
          <>
            <BlockMath math="640 \times 1.27 = \boxed{\$812.80 \text{ USD}}" />
            <BlockMath math="200 \div 1.27 = \boxed{£157.48 \text{ GBP (2 d.p.)}}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── More topics in progress ───────────────────────────────────────────────────

function ComingSoonCard() {
  const upcoming = [
    "Exponents & Logarithms",
    "Rearranging Formulas",
    "Sequences",
  ];
  const upcomingHL = [
    "Advanced Financial Models",
    "Logarithmic & Exponential Applications",
  ];

  return (
    <section className="py-14 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded mb-3">
          Rest of Unit 1
        </span>
        <h2 className="text-xl font-bold text-navy-900 mb-3">
          More topics are in progress
        </h2>
        <p className="text-sm text-slate-500 max-w-2xl mb-5">
          This lesson currently covers Percentages and Financial
          Mathematics. The remaining Unit 1 topics are being written next.
        </p>
        <div className="flex flex-wrap gap-2">
          {upcoming.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-400 italic"
            >
              {t} — Coming Soon
            </span>
          ))}
          {upcomingHL.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-danger-light text-danger-text/60 italic"
            >
              HL: {t} — Coming Soon
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Unit Summary ─────────────────────────────────────────────────────────────

function UnitSummary() {
  return (
    <section id="summary" className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-ai-primary bg-ai-bg px-3 py-1 rounded mb-3">
          Covered So Far
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
          Key Formulas at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            {
              title: "Percentages",
              formulas: [
                "\\text{New} = \\text{Original} \\times \\left(1 \\pm \\tfrac{r}{100}\\right)",
                "\\text{Original} = \\dfrac{\\text{New}}{1 \\pm \\frac{r}{100}}",
                "\\%\\text{ error} = \\left|\\dfrac{v_A - v_E}{v_E}\\right| \\times 100",
              ],
            },
            {
              title: "Financial Mathematics",
              formulas: [
                "I = \\dfrac{PRT}{100} \\text{ (simple interest)}",
                "FV = PV\\left(1+\\dfrac{r}{100k}\\right)^{kn} \\text{ (compound)}",
                "FV = PV\\left(1-\\dfrac{r}{100}\\right)^{n} \\text{ (depreciation)}",
              ],
            },
          ].map(({ title, formulas }) => (
            <div
              key={title}
              className="bg-navy-900 text-white rounded-xl px-6 py-5"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-ai-light mb-3">
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
            href="/ai"
            className="text-sm font-semibold text-ai-primary hover:underline"
          >
            ← Back to AI Curriculum
          </Link>
          <Link
            href="/ai/unit-1/lesson#percentages"
            className="text-sm font-semibold text-slate-500 hover:text-ai-primary"
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

      {/* SL Topics (Unit 1, part 1 of 5 — Percentages & Financial Mathematics) */}
      <PercentagesSection />
      <FinancialMathSection />

      <ComingSoonCard />
      <UnitSummary />
    </main>
  );
}
