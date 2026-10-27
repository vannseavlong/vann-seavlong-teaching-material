import Link from "next/link";
import type { Metadata } from "next";
import { InlineMath } from "@/components/ui/Math";
import { SLTag } from "./_sections/helpers";
import FunctionsSection from "./_sections/Functions";
import LinearModelSection from "./_sections/LinearModel";
import QuadraticSection from "./_sections/Quadratic";
import ExponentialSection from "./_sections/Exponential";
import OtherModelsSection from "./_sections/OtherModels";

export const metadata: Metadata = {
  title: "Unit 2: Functions & Modelling | AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI SL Unit 2: linear, quadratic, exponential and other models: notation, graphs, features and the gdc.",
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
          <span>Unit 2: Functions & Modelling</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-ai-primary px-3 py-1 rounded">
            Unit 2
          </span>
          <SLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Functions & Modelling
        </h1>
        <p className="text-ai-light text-lg max-w-2xl mb-8">
          Linear, quadratic, exponential and other models: notation, graphs, features and the GDC. Each topic gives the booklet formulas, a diagram, worked
          examples and practice set in a real context.
        </p>

        <div className="flex gap-6 text-sm text-ai-light flex-wrap">
          <span>5 topics</span>
        </div>
      </div>
    </div>
  );
}

const SUMMARY: { title: string; formulas: string[] }[] = [];

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
          <Link href="/ai/unit-2/lesson#functions" className="text-sm font-semibold text-slate-500 hover:text-ai-primary">
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
      <FunctionsSection />
      <LinearModelSection />
      <QuadraticSection />
      <ExponentialSection />
      <OtherModelsSection />
      <UnitSummary />
    </main>
  );
}
