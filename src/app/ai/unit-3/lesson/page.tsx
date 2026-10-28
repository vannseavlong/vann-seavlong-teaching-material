import Link from "next/link";
import type { Metadata } from "next";
import { InlineMath } from "@/components/ui/Math";
import { SLTag, HLTag } from "./_sections/helpers";
import LinesSection from "./_sections/Lines";
import Solids3DSection from "./_sections/Solids3D";
import TrigonometrySection from "./_sections/Trigonometry";
import ArcSectorSection from "./_sections/ArcSector";
import TrigContextSection from "./_sections/TrigContext";
import VoronoiSection from "./_sections/Voronoi";
import GraphTheorySection from "./_sections/GraphTheory";
import VectorsSection from "./_sections/Vectors";

export const metadata: Metadata = {
  title: "Unit 3: Geometry & Trigonometry | AI Lesson | IB Mathematics AI",
  description:
    "Lesson notes for IB Mathematics AI SL Unit 3: lines in 2D, 3D distance and solids, trigonometry, arc length and sector area, trigonometry in context and Voronoi diagrams, plus HL graph theory and vectors.",
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
          <span>Unit 3: Geometry & Trigonometry</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-ai-primary px-3 py-1 rounded">
            Unit 3
          </span>
          <SLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Geometry & Trigonometry
        </h1>
        <p className="text-ai-light text-lg max-w-2xl mb-8">
          Lines, 3D solids, triangles, circles and nearest-site problems:
          each topic is a set of booklet formulas, a diagram, worked examples
          and practice set in a real context.
        </p>

        <div className="flex gap-6 text-sm text-ai-light flex-wrap">
          <span>6 SL topics, 2 HL topics</span>
          <span>Set the GDC to DEGREE mode before any trig question</span>
        </div>
      </div>
    </div>
  );
}

function HLDivider() {
  return (
    <div className="bg-danger-bg border-y border-danger-light py-6 px-6">
      <div className="max-w-[1000px] mx-auto flex items-center gap-3 flex-wrap">
        <HLTag />
        <p className="font-bold text-danger-text">Higher Level topics</p>
        <p className="text-sm text-slate-500">
          Not in the SL course. Radian measure and matrices are not written yet.
        </p>
      </div>
    </div>
  );
}

const SUMMARY = [
  {
    title: "Lines in 2D",
    formulas: [
      "m = \\dfrac{y_2-y_1}{x_2-x_1},\\; y - y_1 = m(x - x_1)",
      "m_1 = m_2 \\text{ (parallel)},\\; m_1 m_2 = -1 \\text{ (perpendicular)}",
      "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
    ],
  },
  {
    title: "3D and solids",
    formulas: [
      "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}",
      "V_{\\text{pyramid}} = \\tfrac13 Ah,\\; V_{\\text{cone}} = \\tfrac13 \\pi r^2 h",
      "V_{\\text{sphere}} = \\tfrac43 \\pi r^3,\\; A_{\\text{sphere}} = 4\\pi r^2",
    ],
  },
  {
    title: "Trigonometry",
    formulas: [
      "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}",
      "c^2 = a^2 + b^2 - 2ab\\cos C",
      "A = \\tfrac12 ab\\sin C",
    ],
  },
  {
    title: "Arc, sector, context",
    formulas: [
      "l = \\dfrac{\\theta}{360} \\times 2\\pi r,\\; A = \\dfrac{\\theta}{360} \\times \\pi r^2",
      "\\text{back bearing} = \\text{bearing} \\pm 180°",
      "\\text{Voronoi edge: } m = -\\dfrac{1}{m_{PQ}} \\text{ through the midpoint}",
    ],
  },
  {
    title: "HL: graph theory",
    formulas: [
      "\\sum \\deg(v) = 2 \\times \\text{edges}",
      "(\\mathbf{A}^n)_{ij} = \\text{walks of length } n \\text{ from } i \\text{ to } j",
    ],
  },
  {
    title: "HL: vectors",
    formulas: [
      "\\cos\\theta = \\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}",
      "\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}",
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
          <Link href="/ai/unit-3/lesson#lines" className="text-sm font-semibold text-slate-500 hover:text-ai-primary">
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
      <LinesSection />
      <Solids3DSection />
      <TrigonometrySection />
      <ArcSectorSection />
      <TrigContextSection />
      <VoronoiSection />
      <HLDivider />
      <GraphTheorySection />
      <VectorsSection />
      <UnitSummary />
    </main>
  );
}
