import Link from "next/link";
import type { Metadata } from "next";
import { InlineMath } from "@/components/ui/Math";
import { SLTag } from "./_sections/helpers";
import DerivativeSection from "./_sections/Derivative";
import IntegrationSection from "./_sections/Integration";
import ApplicationsSection from "./_sections/Applications";

export const metadata: Metadata = {
  title: "Unit 5: Calculus & Technology | AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI SL Unit 5: derivatives, integration and area, stationary points and optimisation.",
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
          <span>Unit 5: Calculus & Technology</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-ai-primary px-3 py-1 rounded">
            Unit 5
          </span>
          <SLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Calculus & Technology
        </h1>
        <p className="text-ai-light text-lg max-w-2xl mb-8">
          Derivatives, integration and area, stationary points and optimisation. Each topic gives the booklet formulas, a diagram, worked
          examples and practice set in a real context.
        </p>

        <div className="flex gap-6 text-sm text-ai-light flex-wrap">
          <span>3 topics</span>
        </div>
      </div>
    </div>
  );
}

const SUMMARY: { title: string; formulas: string[] }[] = [
  {
    title: "Derivative",
    formulas: [
      "f(x) = x^n \\Rightarrow f'(x) = nx^{n-1}",
      "y - f(a) = f'(a)(x - a)",
    ],
  },
  {
    title: "Integral and area",
    formulas: [
      "\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C,\\; n \\ne -1",
      "A = \\int_a^b y\\,dx",
    ],
  },
  {
    title: "Trapezoidal rule",
    formulas: [
      "\\int_a^b y\\,dx \\approx \\tfrac12 h\\bigl((y_0 + y_n) + 2(y_1 + \\dots + y_{n-1})\\bigr)",
      "h = \\dfrac{b - a}{n}",
    ],
  },
  {
    title: "Stationary points",
    formulas: [
      "f'(x) = 0",
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
          <Link href="/ai/unit-5/lesson#derivative" className="text-sm font-semibold text-slate-500 hover:text-ai-primary">
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
      <DerivativeSection />
      <IntegrationSection />
      <ApplicationsSection />
      <UnitSummary />
    </main>
  );
}
