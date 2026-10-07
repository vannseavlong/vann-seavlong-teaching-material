import { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "Unit 1: Number & Algebra — AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI Unit 1: Number & Algebra. Covers percentages, financial mathematics (GDC TVM Solver), arithmetic and geometric sequences & series, rounding, upper and lower bounds, and percentage error — with exportable revision papers.",
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
          <span>📋 Percentages · Financial · Sequences · Rounding · Bounds · % Error</span>
          <span>🧮 Includes the GDC TVM Solver</span>
          <span>📝 7 exportable Q&amp;A revision papers</span>
        </div>
      </div>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────

const SL_TOPICS = [
  { id: "percentages", label: "Percentages" },
  { id: "financial-mathematics", label: "Financial Mathematics" },
  { id: "summative-revision", label: "Summative Revision Plan" },
  { id: "arithmetic", label: "Arithmetic Sequences & Series" },
  { id: "geometric", label: "Geometric Sequences & Series" },
  { id: "rounding", label: "Rounding" },
  { id: "bounds", label: "Upper & Lower Bounds" },
  { id: "percentage-error", label: "Percentage Error" },
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

// ═══════════════════════════════════════════════════════════════════════════════
// SUMMATIVE ASSESSMENT REVISION
// Topics: Arithmetic · Geometric · Financial (Topic 2 above) · Rounding ·
//         Upper & Lower Bounds · Percentage Error
// Each session pairs a lesson section with an exportable Q&A review paper.
// ═══════════════════════════════════════════════════════════════════════════════

const REVISION_SESSIONS = [
  {
    n: 1,
    title: "Arithmetic Sequences & Series",
    lesson: "#arithmetic",
    paper: "/review/ai-sl/arithmetic",
    note: "~45 min",
  },
  {
    n: 2,
    title: "Geometric Sequences & Series",
    lesson: "#geometric",
    paper: "/review/ai-sl/geometric",
    note: "~50 min",
  },
  {
    n: 3,
    title: "Financial Mathematics",
    lesson: "#financial-mathematics",
    paper: "/review/ai-sl/financial",
    note: "~50 min · also /practice/2",
  },
  {
    n: 4,
    title: "Rounding",
    lesson: "#rounding",
    paper: "/review/ai-sl/rounding",
    note: "~35 min",
  },
  {
    n: 5,
    title: "Upper & Lower Bounds",
    lesson: "#bounds",
    paper: "/review/ai-sl/bounds",
    note: "~45 min",
  },
  {
    n: 6,
    title: "Percentage Error",
    lesson: "#percentage-error",
    paper: "/review/ai-sl/percentage-error",
    note: "~40 min",
  },
  {
    n: 7,
    title: "Mixed Summative Mock",
    lesson: "#summative-revision",
    paper: "/review/ai-sl/summative-mock",
    note: "~50 min · all topics",
  },
];

function RevisionPlan() {
  return (
    <section id="summative-revision" className="py-14 px-6 bg-white border-t-4 border-ai-primary">
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-ai-primary px-3 py-1 rounded mb-3">
          Summative Assessment Revision
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
          Seven-session revision plan
        </h2>
        <p className="text-base text-slate-500 max-w-2xl mb-8">
          Each session is one class: revise the lesson section together, then
          students attempt the matching review paper. Every paper can be
          exported from its page as a clean <strong>Question</strong> sheet or a
          full <strong>Q&amp;A</strong> answer sheet (Export PDF button). Topics
          follow the summative assessment list: arithmetic and geometric
          sequences &amp; series, financial mathematics, rounding, upper and
          lower bounds, and percentage error.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REVISION_SESSIONS.map((s) => (
            <div
              key={s.n}
              className="border border-slate-200 rounded-xl p-5 bg-slate-50 flex gap-4 items-start"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-ai-primary text-white font-bold flex items-center justify-center">
                {s.n}
              </span>
              <div className="flex-1">
                <p className="font-semibold text-navy-900">{s.title}</p>
                <p className="text-xs text-slate-400 mb-3">{s.note}</p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <a href={s.lesson} className="text-ai-primary hover:underline">
                    Lesson ↓
                  </a>
                  <Link href={s.paper} className="text-ai-primary hover:underline">
                    Review paper (Q&amp;A) →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewPaperLink({ href, label }: { href: string; label: string }) {
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

// ─── 3. Arithmetic Sequences & Series ─────────────────────────────────────────

function ArithmeticSection() {
  return (
    <LessonSection
      id="arithmetic"
      label="Revision 1"
      title="Arithmetic Sequences & Series"
      tag={<SLTag />}
      intro="An arithmetic sequence goes up (or down) by the same amount every step. Linear growth — a fixed weekly saving, a salary rise of a fixed dollar amount, seats added row by row — is arithmetic."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Subtract any term from the next one. If you always get the{" "}
          <strong>same number</strong> <InlineMath math="d" />, the sequence is
          arithmetic. A <em>sequence</em> is the list of terms; a{" "}
          <em>series</em> is what you get when you <strong>add</strong> them.
        </p>
      </HighlightBox>

      <FormulaBox title="Arithmetic Sequence">
        <FormulaRow label="Common difference" math="d = u_{n+1} - u_n" />
        <FormulaRow label="nth term" math="u_n = u_1 + (n-1)d" />
      </FormulaBox>

      <FormulaBox title="Arithmetic Series (sum of n terms)">
        <FormulaRow
          label="Sum — using d"
          math="S_n = \dfrac{n}{2}\left(2u_1 + (n-1)d\right)"
        />
        <FormulaRow
          label="Sum — using last term"
          math="S_n = \dfrac{n}{2}\left(u_1 + u_n\right)"
        />
        <FormulaRow
          label="Sigma notation"
          math="\sum_{k=1}^{n}u_k = u_1 + u_2 + \cdots + u_n"
        />
      </FormulaBox>

      {/* Visual: step-flow */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-4">
          Add the same d each step — e.g. 7, 11, 15, 19, …
        </p>
        <div className="flex items-center gap-2 min-w-max">
          {["7", "11", "15", "19", "23"].map((t, i) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-14 h-12 rounded-lg bg-navy-900 text-white font-mono font-semibold flex items-center justify-center">
                {t}
              </span>
              {i < 4 && (
                <span className="text-xs font-bold text-ai-primary bg-ai-bg rounded-full px-2 py-1">
                  +4 →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          <InlineMath math="u_1 = 7,\; d = 4" /> — a straight-line pattern:
          the terms change by a constant amount, never by a constant factor.
        </p>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">Which formula? Finding n?</p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            Know <InlineMath math="u_1" /> and <InlineMath math="d" /> → use{" "}
            <InlineMath math="u_n = u_1+(n-1)d" /> for a term and the first
            sum formula for a total.
          </li>
          <li>
            Know the last term → use{" "}
            <InlineMath math="S_n=\frac{n}{2}(u_1+u_n)" />.
          </li>
          <li>
            Two terms given (e.g. <InlineMath math="u_3" /> and{" "}
            <InlineMath math="u_8" />) → subtract them:{" "}
            <InlineMath math="u_8-u_3 = 5d" />.
          </li>
          <li>
            &ldquo;Find <InlineMath math="n" /> such that…&rdquo; → solve{" "}
            <InlineMath math="u_n = \text{value}" /> directly, or tabulate{" "}
            <InlineMath math="S_n" /> on the GDC for an inequality.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="nth term and finding n: 3, 8, 13, 18, …">
        <StepBox n={1}>
          <InlineMath math="u_1 = 3" />, <InlineMath math="d = 8-3 = 5" />. The
          25th term:
          <BlockMath math="u_{25} = 3 + 24(5) = \boxed{123}" />
        </StepBox>
        <StepBox n={2}>
          Which term equals 188?
          <BlockMath math="3 + 5(n-1) = 188 \;\Rightarrow\; n-1 = 37 \;\Rightarrow\; n = \boxed{38}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Sum of the first 25 terms of 3, 8, 13, …">
        <StepBox n={1}>
          From above, <InlineMath math="u_1 = 3" /> and{" "}
          <InlineMath math="u_{25} = 123" />.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="S_{25} = \dfrac{25}{2}(3 + 123) = 12.5 \times 126 = \boxed{1575}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Two terms given: u₅ = 22 and u₁₂ = 57">
        <StepBox n={1}>
          <BlockMath math="u_{12} - u_5 = 7d = 35 \;\Rightarrow\; d = 5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_1 = u_5 - 4d = 22 - 20 = \boxed{2}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="S_{12} = \dfrac{12}{2}(2 + 57) = 6 \times 59 = \boxed{354}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            The sequence <InlineMath math="100,\ 94,\ 88,\ \dots" /> is
            arithmetic. Find <InlineMath math="u_{15}" /> and{" "}
            <InlineMath math="S_{15}" />.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="d = -6" />
            </p>
            <BlockMath math="u_{15} = 100 + 14(-6) = \boxed{16}" />
            <BlockMath math="S_{15} = \dfrac{15}{2}(100+16) = \boxed{870}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            Vanna saves $20 in week 1 and increases her saving by $5 each
            week. How much has she saved in total after 30 weeks?
          </>
        }
        answer={
          <>
            <BlockMath math="S_{30} = \dfrac{30}{2}\left(2(20) + 29(5)\right) = 15 \times 185 = \boxed{\$2{,}775}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            For <InlineMath math="5,\ 9,\ 13,\ \dots" /> find the first term
            that is greater than 200.
          </>
        }
        answer={
          <>
            <BlockMath math="5 + 4(n-1) > 200 \;\Rightarrow\; n-1 > 48.75 \;\Rightarrow\; n = 50" />
            <p>
              <InlineMath math="u_{50} = 5 + 49(4) = \boxed{201}" /> (and{" "}
              <InlineMath math="u_{49} = 197" /> is too small).
            </p>
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/arithmetic"
        label="Session 1 — Arithmetic Sequences and Series (6 questions)"
      />
    </LessonSection>
  );
}

// ─── 4. Geometric Sequences & Series ──────────────────────────────────────────

function GeometricSection() {
  return (
    <LessonSection
      id="geometric"
      label="Revision 2"
      title="Geometric Sequences & Series"
      tag={<SLTag />}
      intro="A geometric sequence multiplies by the same number every step. Percentage growth and decay — populations, bouncing balls, compound interest, depreciation — are all geometric."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Divide any term by the one before it. If you always get the same{" "}
          <InlineMath math="r" />, the sequence is geometric. A{" "}
          <InlineMath math="x\%" /> increase each step gives{" "}
          <InlineMath math="r = 1 + \frac{x}{100}" />; a{" "}
          <InlineMath math="x\%" /> decrease gives{" "}
          <InlineMath math="r = 1 - \frac{x}{100}" />. This is exactly the
          multiplier from the Percentages topic.
        </p>
      </HighlightBox>

      <FormulaBox title="Geometric Sequence">
        <FormulaRow label="Common ratio" math="r = \dfrac{u_{n+1}}{u_n}" />
        <FormulaRow label="nth term" math="u_n = u_1\, r^{\,n-1}" />
      </FormulaBox>

      <FormulaBox title="Geometric Series (sum of n terms)">
        <FormulaRow
          label="Sum (r > 1)"
          math="S_n = \dfrac{u_1\left(r^n - 1\right)}{r - 1}"
        />
        <FormulaRow
          label="Sum (r < 1)"
          math="S_n = \dfrac{u_1\left(1 - r^n\right)}{1 - r}"
        />
        <FormulaRow label="Valid for" math="r \neq 1" />
      </FormulaBox>

      {/* Visual: AP vs GP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Arithmetic — add d
          </p>
          <p className="font-mono text-navy-900 font-semibold">
            3, 8, 13, 18, 23, …
          </p>
          <p className="text-xs text-slate-400 mt-2">Straight-line growth</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Geometric — multiply by r
          </p>
          <p className="font-mono text-navy-900 font-semibold">
            3, 6, 12, 24, 48, …
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Exponential growth (<InlineMath math="r = 2" />)
          </p>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Watch the exponent: n − 1, not n
        </p>
        <p className="text-slate-500 text-sm">
          The first term has had <em>no</em> multiplications yet, so{" "}
          <InlineMath math="u_1 = u_1 r^0" />. In a bounce problem, though,
          &ldquo;height after the 4th bounce&rdquo; starts from the drop
          height: <InlineMath math="3 \times 0.8^4" />. Always ask: how many
          times has the multiplier been applied? To find{" "}
          <InlineMath math="n" /> in <InlineMath math="r^n > k" />, use the
          GDC table/solver or logarithms:{" "}
          <InlineMath math="n > \dfrac{\ln k}{\ln r}" />.
        </p>
      </HighlightBox>

      <WorkedExample title="nth term: 2, 6, 18, 54, …">
        <StepBox n={1}>
          <InlineMath math="r = 6 \div 2 = 3" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_7 = 2(3)^6 = 2 \times 729 = \boxed{1458}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Sum with r < 1: 81, 54, 36, …">
        <StepBox n={1}>
          <InlineMath math="r = 54 \div 81 = \frac{2}{3}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_5 = 81\left(\tfrac{2}{3}\right)^4 = \boxed{16}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="S_5 = \dfrac{81\left(1 - (2/3)^5\right)}{1 - 2/3} = 243 - 32 = \boxed{211}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Decay in context: a population of 2,400 falls by 5% each year">
        <StepBox n={1}>
          <InlineMath math="r = 1 - 0.05 = 0.95" />. After 8 years:
          <BlockMath math="2400(0.95)^8 = \boxed{1592}" />
        </StepBox>
        <StepBox n={2}>
          First year the population is below 1,500:
          <BlockMath math="2400(0.95)^n < 1500 \;\Rightarrow\; n > \dfrac{\ln 0.625}{\ln 0.95} = 9.16" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="n = \boxed{10}" /> (check: 1,513 after 9 years,
          1,437 after 10).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Find <InlineMath math="u_6" /> for{" "}
            <InlineMath math="3,\ 12,\ 48,\ \dots" />
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="r = 4" />
            </p>
            <BlockMath math="u_6 = 3(4)^5 = \boxed{3072}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A geometric sequence has <InlineMath math="u_1 = 6" /> and{" "}
            <InlineMath math="r = 2" />. Find <InlineMath math="S_9" />.
          </>
        }
        answer={
          <>
            <BlockMath math="S_9 = \dfrac{6(2^9 - 1)}{2-1} = 6 \times 511 = \boxed{3066}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A town of 15,000 people grows by 2.5% per year. Find the
            population after 10 years, to the nearest whole number.
          </>
        }
        answer={
          <>
            <BlockMath math="15000(1.025)^{10} = \boxed{19\,201}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/geometric"
        label="Session 2 — Geometric Sequences and Series (6 questions)"
      />
    </LessonSection>
  );
}

// ─── 5. Rounding ──────────────────────────────────────────────────────────────

function RoundingSection() {
  return (
    <LessonSection
      id="rounding"
      label="Revision 4"
      title="Rounding & Estimation"
      tag={<SLTag />}
      intro="Rounding shows how precise a value is. In IB exams the default is 3 significant figures unless the question says otherwise — and you must never round in the middle of a calculation."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Find the place you are rounding to, then look at the digit{" "}
          <strong>immediately to its right</strong>. If it is{" "}
          <strong>5 or more</strong>, round up; if it is{" "}
          <strong>4 or less</strong>, leave the digit as it is. Place-value
          zeros are kept (<InlineMath math="5972 \to 6000" />).
        </p>
      </HighlightBox>

      <FormulaBox title="Rounding & Standard Form">
        <FormulaRow
          label="Decimal places (d.p.)"
          math="\text{count digits after the decimal point}"
        />
        <FormulaRow
          label="Significant figures (s.f.)"
          math="\text{count from the first non-zero digit}"
        />
        <FormulaRow
          label="Standard form"
          math="a \times 10^{k},\quad 1 \le a < 10,\; k \in \mathbb{Z}"
        />
        <FormulaRow
          label="Multiply"
          math="(a\times10^m)(b\times10^n) = ab \times 10^{m+n}"
        />
        <FormulaRow
          label="Divide"
          math="\dfrac{a\times10^m}{b\times10^n} = \dfrac{a}{b} \times 10^{m-n}"
        />
      </FormulaBox>

      {/* Visual: significant-figure table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          Which digits are significant?
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Number</th>
                <th className="px-5 py-3 font-semibold">Significant digits</th>
                <th className="px-5 py-3 font-semibold">To 2 s.f.</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "0.004068", d: "4, 0, 6, 8 (leading zeros don't count)", r: "0.0041" },
                { n: "5972", d: "5, 9, 7, 2", r: "6000" },
                { n: "30.07", d: "3, 0, 0, 7 (zeros between count)", r: "30" },
                { n: "2.50", d: "2, 5, 0 (trailing zero after the point counts)", r: "2.5" },
              ].map(({ n, d, r }, i) => (
                <tr key={n} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-mono font-semibold text-ai-primary">{n}</td>
                  <td className="px-5 py-3 text-navy-900">{d}</td>
                  <td className="px-5 py-3 font-mono text-slate-500">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Never round early — and round the right way for the context
        </p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            Keep full GDC values (use the <em>Ans</em>/memory keys) and round
            only the final answer. Rounding the multiplier{" "}
            <InlineMath math="1.0375" /> to <InlineMath math="1.04" /> before
            raising it to the 8th power changes a $2,000 investment by about
            $52.
          </li>
          <li>
            Money: 2 decimal places. Otherwise 3 s.f. unless told otherwise.
          </li>
          <li>
            Things you can only buy whole (packs, buses, boxes): round{" "}
            <strong>up</strong> — 14.96 packs means 15 packs.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="Round 3.14159 to 3 d.p. and to 3 s.f.">
        <StepBox n={1}>
          3 d.p.: the 4th decimal is 5 → round up:{" "}
          <InlineMath math="\boxed{3.142}" />
        </StepBox>
        <StepBox n={2}>
          3 s.f.: the digits are 3, 1, 4 and the next digit is 1 → stay:{" "}
          <InlineMath math="\boxed{3.14}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Zeros: round 0.007049 to 2 s.f.">
        <StepBox n={1}>
          Significant digits start at the 7: <InlineMath math="7,\,0,\,4,\,9" />.
        </StepBox>
        <StepBox n={2}>
          The 3rd s.f. is 4 → stay. Keep the zero:{" "}
          <InlineMath math="\boxed{0.0070}" /> — the trailing zero shows 2 s.f.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Standard form">
        <StepBox n={1}>
          <InlineMath math="0.000508 = \boxed{5.08 \times 10^{-4}}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="(2.5\times10^4)(6\times10^3) = 15 \times 10^{7}" />, but{" "}
          <InlineMath math="a" /> must be below 10:
          <BlockMath math="15 \times 10^7 = \boxed{1.5 \times 10^{8}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Round <InlineMath math="28\,965" /> to 2 s.f. and{" "}
            <InlineMath math="7.996" /> to 2 d.p.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="28\,965 \to \boxed{29\,000}" />
            </p>
            <p>
              <InlineMath math="7.996 \to \boxed{8.00}" /> (keep both decimal
              places).
            </p>
          </>
        }
      />
      <Practice
        problem={
          <>
            Write <InlineMath math="0.0000372" /> and{" "}
            <InlineMath math="83\,000\,000\,000" /> in standard form.
          </>
        }
        answer={
          <>
            <BlockMath math="0.0000372 = \boxed{3.72\times10^{-5}}" />
            <BlockMath math="83\,000\,000\,000 = \boxed{8.3\times10^{10}}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            Calculate{" "}
            <InlineMath math="\dfrac{2.4\times10^{6}}{8\times10^{-2}}" /> in
            standard form.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{2.4}{8} \times 10^{6-(-2)} = 0.3 \times 10^{8} = \boxed{3\times10^{7}}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/rounding"
        label="Session 4 — Rounding (6 questions)"
      />
    </LessonSection>
  );
}

// ─── 6. Upper & Lower Bounds ──────────────────────────────────────────────────

function BoundsSection() {
  return (
    <LessonSection
      id="bounds"
      label="Revision 5"
      title="Upper & Lower Bounds"
      tag={<SLTag />}
      intro="A rounded measurement is not one exact number — it stands for a whole interval of true values. Bounds describe that interval, and they let you decide how many figures of a calculated answer you can honestly trust."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          If a value is rounded to a given accuracy, the true value is within{" "}
          <strong>half a unit</strong> of that accuracy either side. 8 cm to
          the nearest cm means{" "}
          <InlineMath math="7.5 \le x < 8.5" />. The lower bound is{" "}
          <em>included</em>; the upper bound is the first value that would round
          up, so it is <em>not</em> included.
        </p>
      </HighlightBox>

      <FormulaBox title="Finding the Bounds">
        <FormulaRow
          label="Rule"
          math="\text{lower} = x - \tfrac{1}{2}\text{unit}, \quad \text{upper} = x + \tfrac{1}{2}\text{unit}"
        />
        <FormulaRow
          label="Inequality form"
          math="\text{lower bound} \le x < \text{upper bound}"
        />
      </FormulaBox>

      <FormulaBox title="Bounds of a Calculation">
        <FormulaRow label="Sum  a + b" math="\text{upper: } a_U + b_U \qquad \text{lower: } a_L + b_L" />
        <FormulaRow label="Difference  a − b" math="\text{upper: } a_U - b_L \qquad \text{lower: } a_L - b_U" />
        <FormulaRow label="Product  a × b" math="\text{upper: } a_U \times b_U \qquad \text{lower: } a_L \times b_L" />
        <FormulaRow label="Quotient  a ÷ b" math="\text{upper: } a_U \div b_L \qquad \text{lower: } a_L \div b_U" />
      </FormulaBox>

      {/* Visual: number line */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-4">
          8 cm to the nearest cm
        </p>
        <div className="relative min-w-[420px] h-16">
          <div className="absolute left-4 right-4 top-6 h-1 bg-slate-200 rounded" />
          <div className="absolute left-[22%] right-[22%] top-5 h-3 bg-ai-light rounded" />
          <div className="absolute left-[22%] top-3 w-3 h-3 rounded-full bg-ai-primary -translate-x-1/2" />
          <div className="absolute right-[22%] top-3 w-3 h-3 rounded-full border-2 border-ai-primary bg-white translate-x-1/2" />
          <span className="absolute left-[22%] top-12 -translate-x-1/2 text-xs font-mono text-navy-900">7.5 (included)</span>
          <span className="absolute left-1/2 top-12 -translate-x-1/2 text-xs font-mono font-bold text-ai-primary">8</span>
          <span className="absolute right-[22%] top-12 translate-x-1/2 text-xs font-mono text-navy-900">8.5 (not included)</span>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Significant figures → find the last digit&apos;s place value
        </p>
        <p className="text-slate-500 text-sm">
          <InlineMath math="350" /> to 2 s.f. is accurate to the{" "}
          <em>nearest 10</em>, so <InlineMath math="345 \le x < 355" />.{" "}
          <InlineMath math="0.0072" /> to 2 s.f. is accurate to the 4th decimal
          place, so <InlineMath math="0.00715 \le x < 0.00725" />.
          &ldquo;Nearest 5 kg&rdquo; means half of 5 = 2.5 either side.
        </p>
      </HighlightBox>

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">
          Justified accuracy — the final step in exam questions
        </p>
        <p className="text-slate-500 text-sm">
          Round the lower and upper bound of the <em>answer</em> to the same
          number of significant figures. The greatest accuracy at which{" "}
          <strong>both agree</strong> is the accuracy you can give for the
          answer. If they disagree at 3 s.f. but agree at 2 s.f., the answer is
          quoted to 2 s.f.
        </p>
      </HighlightBox>

      <WorkedExample title="State the bounds">
        <StepBox n={1}>
          A time of 6.8 s to 1 d.p.:{" "}
          <InlineMath math="6.75 \le t < 6.85" />
        </StepBox>
        <StepBox n={2}>
          A crowd of 1200 to the nearest 100:{" "}
          <InlineMath math="1150 \le N < 1250" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Product with justified accuracy: A = 8.4, B = 3.2 (both 1 d.p.)">
        <StepBox n={1}>
          <InlineMath math="8.35 \le A < 8.45" /> and{" "}
          <InlineMath math="3.15 \le B < 3.25" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\text{lower} = 8.35 \times 3.15 = 26.3025 \qquad \text{upper} = 8.45 \times 3.25 = 27.4625" />
        </StepBox>
        <StepBox n={3}>
          2 s.f.: 26 and 27 — disagree. 1 s.f.: 30 and 30 — agree. So{" "}
          <InlineMath math="AB = \boxed{30}" /> (1 s.f.).
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Quotient: speed = 45 km (nearest km) ÷ 3.6 h (1 d.p.)">
        <StepBox n={1}>
          <InlineMath math="44.5 \le d < 45.5" />,{" "}
          <InlineMath math="3.55 \le t < 3.65" />
        </StepBox>
        <StepBox n={2}>
          Largest speed = largest distance ÷ smallest time; smallest speed =
          smallest ÷ largest:
          <BlockMath math="\text{upper} = \dfrac{45.5}{3.55} = 12.82 \qquad \text{lower} = \dfrac{44.5}{3.65} = 12.19" />
        </StepBox>
        <StepBox n={3}>
          Both round to 10 at 1 s.f.; at 2 s.f. they are 13 and 12. So the
          speed is <InlineMath math="\boxed{10\text{ km/h}}" /> (1 s.f.).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Write the bounds for a mass of 250 g to 2 s.f., and for a time of
            6.8 s to 1 d.p.
          </>
        }
        answer={
          <>
            <BlockMath math="245 \le m < 255" />
            <BlockMath math="6.75 \le t < 6.85" />
          </>
        }
      />
      <Practice
        problem={
          <>
            <InlineMath math="a = 12" /> and <InlineMath math="b = 5" />, both
            to the nearest integer. Find the greatest and least possible value
            of <InlineMath math="a - b" />.
          </>
        }
        answer={
          <>
            <BlockMath math="\text{greatest} = 12.5 - 4.5 = \boxed{8}" />
            <BlockMath math="\text{least} = 11.5 - 5.5 = \boxed{6}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A square has side 9.5 cm to 1 d.p. Find the bounds of its area and
            state the area to a justified accuracy.
          </>
        }
        answer={
          <>
            <BlockMath math="9.45^2 = 89.3025 \qquad 9.55^2 = 91.2025" />
            <p>
              2 s.f.: 89 vs 91 — disagree. 1 s.f.: 90 and 90 — agree.
            </p>
            <BlockMath math="\text{Area} = \boxed{90\ \text{cm}^2\ (1\text{ s.f.})}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/bounds"
        label="Session 5 — Upper and Lower Bounds (6 questions)"
      />
    </LessonSection>
  );
}

// ─── 7. Percentage Error ──────────────────────────────────────────────────────

function PercentageErrorSection() {
  return (
    <LessonSection
      id="percentage-error"
      label="Revision 6"
      title="Percentage Error"
      tag={<SLTag />}
      intro="Percentage error measures how far an approximate or measured value is from the true value, as a percentage of the true value. It is how we judge whether an estimate, a measurement or a rounding was good enough."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Always divide by the <strong>exact (true) value</strong>, not the
          approximate one. The absolute value bars mean the answer is never
          negative — percentage error says how big the mistake is, not which
          way.
        </p>
      </HighlightBox>

      <FormulaBox title="Percentage Error">
        <FormulaRow
          label="Percentage error"
          math="\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100\%"
        />
        <FormulaRow label="v_A" math="v_A = \text{approximate (measured) value}" />
        <FormulaRow label="v_E" math="v_E = \text{exact (true) value}" />
        <FormulaRow
          label="Find v_E from ε"
          math="v_E = \dfrac{v_A}{1 \pm \varepsilon/100}\quad(\text{two possible values})"
        />
      </FormulaBox>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Two links to earlier topics
        </p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            <strong>Rounding:</strong> percentage error tells you the effect of
            rounding early (e.g. 1.94% when 1.0375 is rounded to 1.04 before
            raising to the 8th power).
          </li>
          <li>
            <strong>Bounds:</strong> to find the greatest possible percentage
            error of a measurement, use the bound <em>closest to zero</em> as{" "}
            <InlineMath math="v_E" /> — a smaller true value gives a larger
            percentage.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="Direct percentage error">
        <p className="text-sm text-slate-500 mb-4">
          A table is measured as 2.4 m but its true length is 2.5 m.
        </p>
        <StepBox n={1}>
          <BlockMath math="\varepsilon = \left|\dfrac{2.4 - 2.5}{2.5}\right| \times 100 = \boxed{4\%}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Greatest possible error from bounds">
        <p className="text-sm text-slate-500 mb-4">
          A rod is measured as 20 cm to the nearest cm. Find the greatest
          possible percentage error in this measurement.
        </p>
        <StepBox n={1}>
          True length is between 19.5 and 20.5.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\dfrac{|20 - 19.5|}{19.5} = 2.56\% \qquad \dfrac{|20 - 20.5|}{20.5} = 2.44\%" />
        </StepBox>
        <StepBox n={3}>
          Greatest percentage error: <InlineMath math="\boxed{2.56\%}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Working backwards: v_A = 80, error 5%">
        <p className="text-sm text-slate-500 mb-4">
          A reading of 80 has a 5% error. Find the possible true values.
        </p>
        <StepBox n={1}>
          <BlockMath math="\dfrac{|80 - v_E|}{v_E} = 0.05" />
        </StepBox>
        <StepBox n={2}>
          Reading too high: <InlineMath math="v_E = \dfrac{80}{1.05} = 76.2" />.
          Reading too low: <InlineMath math="v_E = \dfrac{80}{0.95} = 84.2" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            An estimate is 3.2 m; the exact length is 3.0 m. Find the
            percentage error to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{0.2}{3.0} \times 100 = \boxed{6.67\%}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A man&apos;s mass is estimated as 70 kg; it is actually 72 kg. Find
            the percentage error to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{|70-72|}{72}\times100 = \boxed{2.78\%}" />
            <p>Divide by the exact value 72, not the estimate 70.</p>
          </>
        }
      />
      <Practice
        problem={
          <>
            The exact value is 250 and the percentage error in an estimate is
            6%. Find the two possible estimates.
          </>
        }
        answer={
          <>
            <BlockMath math="250 \times 0.06 = 15 \;\Rightarrow\; \boxed{235 \text{ or } 265}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/percentage-error"
        label="Session 6 — Percentage Error (6 questions)"
      />
    </LessonSection>
  );
}

// ─── More topics in progress ───────────────────────────────────────────────────

function ComingSoonCard() {
  const upcoming = [
    "Exponents & Logarithms",
    "Rearranging Formulas",
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
          This lesson covers Percentages, Financial Mathematics, Sequences &
          Series, Rounding, Bounds and Percentage Error. The remaining Unit 1
          topics are being written next.
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
            {
              title: "Arithmetic Sequences & Series",
              formulas: [
                "u_n = u_1 + (n-1)d",
                "S_n = \\dfrac{n}{2}\\left(2u_1 + (n-1)d\\right)",
                "S_n = \\dfrac{n}{2}(u_1 + u_n)",
              ],
            },
            {
              title: "Geometric Sequences & Series",
              formulas: [
                "u_n = u_1 r^{n-1}",
                "S_n = \\dfrac{u_1(r^n-1)}{r-1}",
                "r = 1 \\pm \\tfrac{x}{100} \\text{ (x\\% change)}",
              ],
            },
            {
              title: "Rounding & Bounds",
              formulas: [
                "a \\times 10^{k},\\; 1 \\le a < 10",
                "\\text{bounds} = x \\pm \\tfrac{1}{2}\\text{unit}",
                "\\text{upper}(a \\div b) = a_U \\div b_L",
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
          <Link
            href="/review"
            className="text-sm font-semibold text-ai-primary hover:underline"
          >
            Revision Papers (Q&amp;A) →
          </Link>
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

      {/* Summative assessment revision: sequences, rounding, bounds, % error */}
      <RevisionPlan />
      <ArithmeticSection />
      <GeometricSection />
      <RoundingSection />
      <BoundsSection />
      <PercentageErrorSection />

      <ComingSoonCard />
      <UnitSummary />
    </main>
  );
}
