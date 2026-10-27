import Link from "next/link";
import type { Metadata } from "next";
import { InlineMath } from "@/components/ui/Math";
import { SLTag } from "./_sections/helpers";
import DataSection from "./_sections/Data";
import MeasuresSection from "./_sections/Measures";
import RegressionSection from "./_sections/Regression";
import ProbabilitySection from "./_sections/Probability";
import DistributionsSection from "./_sections/Distributions";
import TestsSection from "./_sections/Tests";

export const metadata: Metadata = {
  title: "Unit 4: Statistics & Probability | AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI SL Unit 4: data, measures, regression, probability, binomial and normal distributions, and hypothesis tests.",
};

function LessonHero() {
  return (
    <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-28 pb-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <nav className="text-sm text-ai-light mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ai" className="hover:underline">
            AI Curriculum
          </Link>
          <span className="opacity-50">›</span>
          <span>Unit 4: Statistics & Probability</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-ai-primary px-3 py-1 rounded">
            Unit 4
          </span>
          <SLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Statistics & Probability
        </h1>
        <p className="text-ai-light text-lg max-w-2xl mb-8">
          Data, measures, regression, probability, binomial and normal distributions, and hypothesis tests. Each topic gives the booklet formulas, a diagram, worked
          examples and practice set in a real context.
        </p>

        <div className="flex gap-6 text-sm text-ai-light flex-wrap">
          <span>6 topics</span>
        </div>
      </div>
    </div>
  );
}

const SUMMARY: { title: string; formulas: string[] }[] = [
  {
    title: "Measures",
    formulas: [
      "\\bar{x} = \\dfrac{\\sum f_i x_i}{n},\\; n = \\sum f_i",
      "\\text{IQR} = Q_3 - Q_1",
    ],
  },
  {
    title: "Probability",
    formulas: [
      "P(A) = \\dfrac{n(A)}{n(U)},\\; P(A) + P(A') = 1",
      "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
    ],
  },
  {
    title: "Conditional and independent",
    formulas: [
      "P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}",
      "P(A \\cap B) = P(A)\\,P(B)",
    ],
  },
  {
    title: "Distributions",
    formulas: [
      "E(X) = \\sum x_i\\,P(X = x_i)",
      "X \\sim B(n, p):\\; E(X) = np,\\; \\mathrm{Var}(X) = np(1 - p)",
    ],
  },
];

function UnitSummary() {
  return (
    <section id="summary" className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
          Key Formulas at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {SUMMARY.map(({ title, formulas }) => (
            <div key={title} className="bg-navy-900 text-white rounded-xl px-6 py-5">
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
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-slate-200">
          <Link href="/ai" className="text-sm font-semibold text-ai-primary hover:underline">
            ← Back to AI Curriculum
          </Link>
          <Link href="/ai/unit-4/lesson#data" className="text-sm font-semibold text-slate-500 hover:text-ai-primary">
            Back to top ↑
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <LessonHero />
      <DataSection />
      <MeasuresSection />
      <RegressionSection />
      <ProbabilitySection />
      <DistributionsSection />
      <TestsSection />
      <UnitSummary />
    </main>
  );
}
