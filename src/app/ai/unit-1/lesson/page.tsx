import Link from "next/link";
import type { Metadata } from "next";
import { InlineMath } from "@/components/ui/Math";
import { SLTag } from "./_sections/helpers";
import PercentagesSection from "./_sections/Percentages";
import FinancialMathSection from "./_sections/FinancialMath";
import ArithmeticSection from "./_sections/Arithmetic";
import GeometricSection from "./_sections/Geometric";
import RoundingSection from "./_sections/Rounding";
import BoundsSection from "./_sections/Bounds";
import PercentageErrorSection from "./_sections/PercentageError";

export const metadata: Metadata = {
  title: "Unit 1: Number & Algebra — AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI Unit 1: Number & Algebra. Covers percentages, financial mathematics (GDC TVM Solver), arithmetic and geometric sequences & series, rounding, upper and lower bounds, and percentage error — with exportable revision papers.",
};

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