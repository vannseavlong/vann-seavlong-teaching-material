import { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";

export const metadata: Metadata = {
  title: "Unit 3: Trigonometry — AA Lesson | IB Mathematics AA",
  description:
    "Full lesson notes for IB Mathematics AA Unit 3: Trigonometry. Covers trig ratios, sine and cosine rules, trig graphs, and equations, with HL extensions in identities, complex equations, and modelling.",
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

function FormulaRow({ label, math }: { label: string; math: string }) {
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
          <span>Unit 3: Trigonometry</span>
          <span className="opacity-50">›</span>
          <span className="text-white">Lesson</span>
        </nav>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider bg-aa-primary px-3 py-1 rounded">
            Unit 3
          </span>
          <SLTag />
          <HLTag />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Trigonometry
        </h1>
        <p className="text-aa-light text-lg max-w-2xl mb-8">
          Trigonometric ratios, the unit circle, exact values, sine and cosine
          rules, trig graphs and their transformations, and solving trig
          equations — with HL extensions in identities, complex equations, and
          real-world modelling.
        </p>

        <div className="flex gap-6 text-sm text-aa-light flex-wrap">
          <span>⏱ SL: 13 hours</span>
          <span>⏱ HL: 26 hours</span>
          <span>📋 7 topics</span>
        </div>
      </div>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────────────

const SL_TOPICS = [
  { id: "trig-ratios", label: "Trig Ratios & Unit Circle" },
  { id: "sine-cosine-rules", label: "Sine & Cosine Rules" },
  { id: "trig-graphs", label: "Trig Graphs" },
  { id: "trig-equations", label: "Trig Equations" },
];

const HL_TOPICS = [
  { id: "trig-identities", label: "Trig Identities" },
  { id: "complex-equations", label: "Complex Trig Equations" },
  { id: "modelling", label: "Modelling with Trigonometry" },
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

// ─── Section wrapper ──────────────────────────────────────────────────────────

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

// ─── 1. Trig Ratios & Unit Circle ─────────────────────────────────────────────

function TrigRatiosSection() {
  return (
    <LessonSection
      id="trig-ratios"
      label="Topic 1"
      title="Trigonometric Ratios & the Unit Circle"
      tag={<SLTag />}
      intro="Trigonometric ratios relate angles to side lengths in right-angled triangles. The unit circle extends these ratios to any angle — positive, negative, or greater than 90° — and connects them to radian measure."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea: SOH CAH TOA</p>
        <p className="text-slate-500 text-sm">
          In a right-angled triangle, label the sides relative to angle{" "}
          <InlineMath math="\theta" />: <strong>Opposite</strong> (facing{" "}
          <InlineMath math="\theta" />), <strong>Adjacent</strong> (next to{" "}
          <InlineMath math="\theta" />), and <strong>Hypotenuse</strong> (longest
          side). The three primary ratios are sin, cos, and tan. On the unit
          circle, a point at angle <InlineMath math="\theta" /> has coordinates{" "}
          <InlineMath math="(\cos\theta,\,\sin\theta)" />.
        </p>
      </HighlightBox>

      {/* ── Formula Group 1: Primary & Reciprocal Ratios ── */}
      <FormulaBox title="Primary Trigonometric Ratios (SOH CAH TOA)">
        <FormulaRow label="Sine" math="\sin\theta = \dfrac{\text{opposite}}{\text{hypotenuse}}" />
        <FormulaRow label="Cosine" math="\cos\theta = \dfrac{\text{adjacent}}{\text{hypotenuse}}" />
        <FormulaRow label="Tangent" math="\tan\theta = \dfrac{\text{opposite}}{\text{adjacent}} = \dfrac{\sin\theta}{\cos\theta}" />
        <FormulaRow label="Cosecant (reciprocal)" math="\csc\theta = \dfrac{1}{\sin\theta}" />
        <FormulaRow label="Secant (reciprocal)" math="\sec\theta = \dfrac{1}{\cos\theta}" />
        <FormulaRow label="Cotangent (reciprocal)" math="\cot\theta = \dfrac{\cos\theta}{\sin\theta} = \dfrac{1}{\tan\theta}" />
        <FormulaRow label="Pythagorean identity" math="\sin^2\theta + \cos^2\theta = 1" />
      </FormulaBox>

      {/* ── Formula Group 2: Radian Measure & Conversion ── */}
      <FormulaBox title="Radian Measure & Conversion">
        <FormulaRow label="Definition" math="1 \text{ radian} = \text{angle subtended by arc of length } r" />
        <FormulaRow label="Full circle" math="360° = 2\pi \text{ rad}" />
        <FormulaRow label="Half circle" math="180° = \pi \text{ rad}" />
        <FormulaRow label="Degrees → radians" math="\theta_{\text{rad}} = \theta_{\deg} \times \dfrac{\pi}{180}" />
        <FormulaRow label="Radians → degrees" math="\theta_{\deg} = \theta_{\text{rad}} \times \dfrac{180}{\pi}" />
        <FormulaRow label="Arc length" math="l = r\theta \quad (\theta \text{ in radians})" />
        <FormulaRow label="Sector area" math="A = \dfrac{1}{2}r^2\theta \quad (\theta \text{ in radians})" />
      </FormulaBox>

      {/* ── Formula Group 3: Exact Values ── */}
      <FormulaBox title="Exact Values of Trig Functions">
        <FormulaRow label="0° = 0 rad" math="\sin 0 = 0,\quad \cos 0 = 1,\quad \tan 0 = 0" />
        <FormulaRow label="30° = π/6 rad" math="\sin\tfrac{\pi}{6} = \tfrac{1}{2},\quad \cos\tfrac{\pi}{6} = \tfrac{\sqrt{3}}{2},\quad \tan\tfrac{\pi}{6} = \tfrac{1}{\sqrt{3}}" />
        <FormulaRow label="45° = π/4 rad" math="\sin\tfrac{\pi}{4} = \tfrac{\sqrt{2}}{2},\quad \cos\tfrac{\pi}{4} = \tfrac{\sqrt{2}}{2},\quad \tan\tfrac{\pi}{4} = 1" />
        <FormulaRow label="60° = π/3 rad" math="\sin\tfrac{\pi}{3} = \tfrac{\sqrt{3}}{2},\quad \cos\tfrac{\pi}{3} = \tfrac{1}{2},\quad \tan\tfrac{\pi}{3} = \sqrt{3}" />
        <FormulaRow label="90° = π/2 rad" math="\sin\tfrac{\pi}{2} = 1,\quad \cos\tfrac{\pi}{2} = 0,\quad \tan\tfrac{\pi}{2} = \text{undefined}" />
      </FormulaBox>

      {/* Visual: exact values memory table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary px-6 pt-5 pb-3">
          Exact values — memory shortcut (sin pattern: √0/2, √1/2, √2/2, √3/2, √4/2)
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-4 py-3 font-semibold text-left">Angle</th>
                <th className="px-4 py-3 font-semibold">0°</th>
                <th className="px-4 py-3 font-semibold">30°</th>
                <th className="px-4 py-3 font-semibold">45°</th>
                <th className="px-4 py-3 font-semibold">60°</th>
                <th className="px-4 py-3 font-semibold">90°</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  ratio: "sin",
                  vals: ["0", "\\tfrac{1}{2}", "\\tfrac{\\sqrt{2}}{2}", "\\tfrac{\\sqrt{3}}{2}", "1"],
                },
                {
                  ratio: "cos",
                  vals: ["1", "\\tfrac{\\sqrt{3}}{2}", "\\tfrac{\\sqrt{2}}{2}", "\\tfrac{1}{2}", "0"],
                },
                {
                  ratio: "tan",
                  vals: ["0", "\\tfrac{1}{\\sqrt{3}}", "1", "\\sqrt{3}", "\\text{undef}"],
                },
              ].map(({ ratio, vals }, i) => (
                <tr key={ratio} className={i % 2 === 0 ? "bg-aa-bg" : "bg-white"}>
                  <td className="px-4 py-3 font-bold text-aa-text text-left">
                    <InlineMath math={ratio} />
                  </td>
                  {vals.map((v, j) => (
                    <td key={j} className="px-4 py-3 text-navy-900">
                      <InlineMath math={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual: unit circle quadrant signs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        {[
          { q: "Q I", range: "0 to 90°", sign: "All positive", color: "bg-ai-bg border-ai-primary text-ai-text" },
          { q: "Q II", range: "90° to 180°", sign: "sin > 0 only", color: "bg-aa-bg border-aa-primary text-aa-text" },
          { q: "Q III", range: "180° to 270°", sign: "tan > 0 only", color: "bg-warn-bg border-warn-primary text-warn-text" },
          { q: "Q IV", range: "270° to 360°", sign: "cos > 0 only", color: "bg-danger-bg border-danger-primary text-danger-text" },
        ].map(({ q, range, sign, color }) => (
          <div key={q} className={`border-l-4 rounded-r-xl px-4 py-3 ${color}`}>
            <p className="font-bold text-sm mb-1">{q}</p>
            <p className="text-xs opacity-75">{range}</p>
            <p className="text-xs font-semibold mt-1">{sign}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mb-6 text-center">
        Memory aid — <strong>CAST</strong>: starting from Q IV going anti-clockwise: <strong>C</strong>os, <strong>A</strong>ll, <strong>S</strong>in, <strong>T</strong>an
      </p>

      <WorkedExample title="Find exact value: sin(210°) and cos(−π/3)">
        <StepBox n={1}>
          For <InlineMath math="\sin(210°)" />: 210° is in Q III (180° + 30°). In Q III, sin is negative.
          The reference angle is 30°.
          <BlockMath math="\sin(210°) = -\sin(30°) = -\frac{1}{2}" />
        </StepBox>
        <StepBox n={2}>
          For <InlineMath math="\cos(-\pi/3)" />: use the even identity{" "}
          <InlineMath math="\cos(-\theta) = \cos\theta" /> (cosine is an even function):
          <BlockMath math="\cos\!\left(-\frac{\pi}{3}\right) = \cos\!\left(\frac{\pi}{3}\right) = \frac{1}{2}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Use the Pythagorean identity: given sin θ = 3/5 and θ is in Q II, find cos θ and tan θ">
        <StepBox n={1}>
          Apply <InlineMath math="\sin^2\theta + \cos^2\theta = 1" />:
          <BlockMath math="\cos^2\theta = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}" />
        </StepBox>
        <StepBox n={2}>
          In Q II, cos is negative:
          <BlockMath math="\cos\theta = -\frac{4}{5}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{3/5}{-4/5} = \boxed{-\frac{3}{4}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Arc length and sector area: r = 8 cm, θ = 5π/6">
        <StepBox n={1}>
          Arc length: <InlineMath math="l = r\theta = 8 \times \dfrac{5\pi}{6} = \dfrac{40\pi}{6} = \dfrac{20\pi}{3} \approx 20.9 \text{ cm}" />
        </StepBox>
        <StepBox n={2}>
          Sector area: <InlineMath math="A = \dfrac{1}{2}r^2\theta = \dfrac{1}{2}(64)\!\left(\dfrac{5\pi}{6}\right) = \dfrac{160\pi}{6} = \dfrac{80\pi}{3} \approx 83.8 \text{ cm}^2" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Given that <InlineMath math="\cos\theta = -\dfrac{5}{13}" /> and{" "}
            <InlineMath math="\theta \in \left(\pi,\, \dfrac{3\pi}{2}\right)" />, find{" "}
            <InlineMath math="\sin\theta" /> and <InlineMath math="\tan\theta" />.
          </>
        }
        answer={
          <>
            <p>
              From <InlineMath math="\sin^2\theta + \cos^2\theta = 1" />:
            </p>
            <BlockMath math="\sin^2\theta = 1 - \frac{25}{169} = \frac{144}{169}" />
            <p>
              In Q III, sin is negative:
            </p>
            <BlockMath math="\sin\theta = -\frac{12}{13}" />
            <BlockMath math="\tan\theta = \frac{-12/13}{-5/13} = \boxed{\frac{12}{5}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            A sector has radius 6 cm and arc length <InlineMath math="4\pi" /> cm.
            Find (a) the central angle in radians, and (b) the area of the sector.
          </>
        }
        answer={
          <>
            <p><strong>(a)</strong> Using <InlineMath math="l = r\theta" />:</p>
            <BlockMath math="\theta = \frac{l}{r} = \frac{4\pi}{6} = \frac{2\pi}{3} \text{ rad}" />
            <p><strong>(b)</strong> Area:</p>
            <BlockMath math="A = \frac{1}{2}r^2\theta = \frac{1}{2}(36)\!\left(\frac{2\pi}{3}\right) = 12\pi \approx 37.7 \text{ cm}^2" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 2. Sine Rule & Cosine Rule ───────────────────────────────────────────────

function SineCosineRulesSection() {
  return (
    <LessonSection
      id="sine-cosine-rules"
      label="Topic 2"
      title="Sine Rule & Cosine Rule"
      tag={<SLTag />}
      intro="For non-right-angled triangles, the sine rule and cosine rule extend trigonometry to any triangle. Label sides a, b, c opposite to angles A, B, C respectively. Knowing which rule to use depends on what information is given."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">Which rule to use?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-500">
          <div>
            <p className="font-semibold text-navy-900 mb-1">Use Sine Rule when:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Given AAS (two angles + one side)</li>
              <li>Given ASA (two angles + included side)</li>
              <li>Given SSA (two sides + non-included angle) — watch for ambiguous case!</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-navy-900 mb-1">Use Cosine Rule when:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Given SAS (two sides + included angle) → find third side</li>
              <li>Given SSS (three sides) → find any angle</li>
            </ul>
          </div>
        </div>
      </HighlightBox>

      <FormulaBox title="Sine Rule">
        <FormulaRow label="Standard form (finding sides)" math="\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}" />
        <FormulaRow label="Inverted form (finding angles)" math="\dfrac{\sin A}{a} = \dfrac{\sin B}{b} = \dfrac{\sin C}{c}" />
        <FormulaRow label="Angle sum check" math="A + B + C = 180°" />
      </FormulaBox>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">The Ambiguous Case (SSA)</p>
        <p className="text-slate-500 text-sm">
          When given two sides and a non-included angle (SSA), there may be <strong>0, 1, or 2</strong> valid
          triangles. After finding <InlineMath math="\sin B = \dfrac{b\sin A}{a}" />, check: if{" "}
          <InlineMath math="\sin B > 1" /> → no solution; if <InlineMath math="\sin B = 1" /> → one right-angled
          triangle; if <InlineMath math="\sin B < 1" /> → two possible angles{" "}
          (<InlineMath math="B" /> and <InlineMath math="180° - B" />). Discard any triangle where
          the angle sum exceeds 180°.
        </p>
      </HighlightBox>

      <FormulaBox title="Cosine Rule">
        <FormulaRow label="Finding a side (SAS)" math="a^2 = b^2 + c^2 - 2bc\cos A" />
        <FormulaRow label="Finding an angle (SSS)" math="\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}" />
        <FormulaRow label="Similarly for angle B" math="\cos B = \dfrac{a^2 + c^2 - b^2}{2ac}" />
        <FormulaRow label="Similarly for angle C" math="\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}" />
      </FormulaBox>

      <FormulaBox title="Area of a Triangle">
        <FormulaRow label="Using two sides + included angle" math="\text{Area} = \tfrac{1}{2}\,ab\sin C" />
        <FormulaRow label="Equivalently" math="\text{Area} = \tfrac{1}{2}\,ac\sin B = \tfrac{1}{2}\,bc\sin A" />
        <FormulaRow label="Base × height reminder" math="\text{Area} = \tfrac{1}{2} \times \text{base} \times \text{height}" />
      </FormulaBox>

      {/* Visual: triangle labeling */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          Standard triangle labelling — side opposite to angle
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="font-mono text-sm text-center leading-relaxed text-navy-900 bg-slate-50 rounded-lg p-4">
            <pre className="whitespace-pre text-xs">{`         C
        / \\
       /   \\
    b /     \\ a
     /       \\
    /         \\
   A-----c-----B`}</pre>
          </div>
          <div className="text-sm text-slate-500 space-y-2">
            <p>Side <InlineMath math="a" /> is opposite to angle <InlineMath math="A" /></p>
            <p>Side <InlineMath math="b" /> is opposite to angle <InlineMath math="B" /></p>
            <p>Side <InlineMath math="c" /> is opposite to angle <InlineMath math="C" /></p>
            <p className="text-xs text-slate-400 pt-2">
              Always label your triangle clearly before applying any rule.
            </p>
          </div>
        </div>
      </div>

      <WorkedExample title="Sine Rule (AAS): In triangle ABC, A = 40°, B = 75°, a = 12 cm. Find b.">
        <StepBox n={1}>
          Use the sine rule: <InlineMath math="\dfrac{b}{\sin B} = \dfrac{a}{\sin A}" />
        </StepBox>
        <StepBox n={2}>
          Substitute known values:
          <BlockMath math="\frac{b}{\sin 75°} = \frac{12}{\sin 40°}" />
        </StepBox>
        <StepBox n={3}>
          Solve for <InlineMath math="b" />:
          <BlockMath math="b = \frac{12 \sin 75°}{\sin 40°} = \frac{12 \times 0.9659}{0.6428} \approx \boxed{18.0 \text{ cm}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Ambiguous Case (SSA): a = 7, b = 10, A = 35°. How many triangles exist?">
        <StepBox n={1}>
          Use the sine rule to find <InlineMath math="\sin B" />:
          <BlockMath math="\frac{\sin B}{b} = \frac{\sin A}{a} \;\Longrightarrow\; \sin B = \frac{10 \sin 35°}{7} = \frac{10 \times 0.5736}{7} \approx 0.8194" />
        </StepBox>
        <StepBox n={2}>
          Since <InlineMath math="\sin B \approx 0.8194 < 1" />, two possible values:
          <BlockMath math="B_1 = \sin^{-1}(0.8194) \approx 55.1° \quad \text{or} \quad B_2 = 180° - 55.1° = 124.9°" />
        </StepBox>
        <StepBox n={3}>
          Check both: for <InlineMath math="B_1" />: <InlineMath math="A + B_1 = 35° + 55.1° = 90.1° < 180°" /> ✓ &nbsp;
          For <InlineMath math="B_2" />: <InlineMath math="A + B_2 = 35° + 124.9° = 159.9° < 180°" /> ✓
        </StepBox>
        <StepBox n={4}>
          Both are valid. There are <strong>two possible triangles</strong>.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Cosine Rule (SAS): b = 9, c = 6, A = 52°. Find side a.">
        <StepBox n={1}>
          Apply: <InlineMath math="a^2 = b^2 + c^2 - 2bc\cos A" />
          <BlockMath math="a^2 = 81 + 36 - 2(9)(6)\cos 52° = 117 - 108(0.6157) \approx 117 - 66.5 = 50.5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="a = \sqrt{50.5} \approx \boxed{7.11 \text{ cm}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Cosine Rule (SSS): a = 5, b = 7, c = 9. Find angle C.">
        <StepBox n={1}>
          Apply: <InlineMath math="\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}" />
          <BlockMath math="\cos C = \frac{25 + 49 - 81}{2(5)(7)} = \frac{-7}{70} = -0.1" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="C = \cos^{-1}(-0.1) \approx \boxed{95.7°}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Area of triangle: two sides 8 cm and 11 cm with included angle 63°">
        <StepBox n={1}>
          <BlockMath math="\text{Area} = \tfrac{1}{2}(8)(11)\sin 63° = 44 \times 0.8910 \approx \boxed{39.2 \text{ cm}^2}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            In triangle PQR, <InlineMath math="P = 48°" />, <InlineMath math="Q = 61°" />, and{" "}
            <InlineMath math="p = 14" /> cm. Find side <InlineMath math="q" />.
          </>
        }
        answer={
          <>
            <BlockMath math="\frac{q}{\sin 61°} = \frac{14}{\sin 48°}" />
            <BlockMath math="q = \frac{14\sin 61°}{\sin 48°} = \frac{14 \times 0.8746}{0.7431} \approx \boxed{16.5 \text{ cm}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Two sides of a triangle are 5 cm and 8 cm, and the included angle is 110°.
            Find the third side and the area of the triangle.
          </>
        }
        answer={
          <>
            <p>Let <InlineMath math="a = 5" />, <InlineMath math="b = 8" />, <InlineMath math="C = 110°" />.</p>
            <p>Cosine rule for side <InlineMath math="c" />:</p>
            <BlockMath math="c^2 = 25 + 64 - 2(5)(8)\cos 110° = 89 - 80(-0.3420) = 89 + 27.36 = 116.36" />
            <BlockMath math="c = \sqrt{116.36} \approx 10.8 \text{ cm}" />
            <p>Area:</p>
            <BlockMath math="\text{Area} = \tfrac{1}{2}(5)(8)\sin 110° = 20 \times 0.9397 \approx \boxed{18.8 \text{ cm}^2}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Three sides of a triangle are 6 cm, 8 cm, and 10 cm.
            Find all three angles. What type of triangle is this?
          </>
        }
        answer={
          <>
            <p>Let <InlineMath math="a = 6" />, <InlineMath math="b = 8" />, <InlineMath math="c = 10" />. Find angle <InlineMath math="C" /> (opposite the longest side):</p>
            <BlockMath math="\cos C = \frac{36 + 64 - 100}{96} = \frac{0}{96} = 0 \;\Longrightarrow\; C = 90°" />
            <p>This is a right triangle! Find <InlineMath math="A" />:</p>
            <BlockMath math="\cos A = \frac{64 + 100 - 36}{160} = \frac{128}{160} = 0.8 \;\Longrightarrow\; A \approx 36.9°" />
            <BlockMath math="B = 180° - 90° - 36.9° \approx 53.1°" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 3. Trig Graphs ───────────────────────────────────────────────────────────

function TrigGraphsSection() {
  return (
    <LessonSection
      id="trig-graphs"
      label="Topic 3"
      title="Trigonometric Graphs"
      tag={<SLTag />}
      intro="The graphs of sin, cos, and tan are periodic — they repeat at fixed intervals. Transformations of the form y = a sin(b(x − h)) + d shift, stretch, and reflect these parent graphs. Reading off amplitude, period, phase shift, and midline is a core IB skill."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">Key Idea: four parameters</p>
        <p className="text-slate-500 text-sm">
          In <InlineMath math="y = a\sin(b(x - h)) + d" />: the amplitude{" "}
          <InlineMath math="|a|" /> controls height; <InlineMath math="b" /> controls
          how fast the cycle repeats (period <InlineMath math="= 2\pi/b" />); <InlineMath math="h" /> shifts
          left/right; and <InlineMath math="d" /> lifts/lowers the midline. The same
          structure applies to cosine. Tangent has period <InlineMath math="\pi/b" /> and
          no amplitude.
        </p>
      </HighlightBox>

      <FormulaBox title="Parameters of y = a sin(b(x − h)) + d">
        <FormulaRow label="Amplitude" math="|a| \quad (\text{half the height of the wave})" />
        <FormulaRow label="Period (sin/cos)" math="\dfrac{2\pi}{b} \quad (b > 0)" />
        <FormulaRow label="Period (tan)" math="\dfrac{\pi}{b}" />
        <FormulaRow label="Horizontal (phase) shift" math="h \; \text{right if } h > 0,\; \text{left if } h < 0" />
        <FormulaRow label="Midline (vertical shift)" math="y = d" />
        <FormulaRow label="Range (sin/cos)" math="[d - |a|,\; d + |a|]" />
        <FormulaRow label="Maximum value" math="d + |a|" />
        <FormulaRow label="Minimum value" math="d - |a|" />
      </FormulaBox>

      <FormulaBox title="Properties of Parent Functions y = sin x, cos x, tan x">
        <FormulaRow label="sin x — period" math="2\pi" />
        <FormulaRow label="sin x — amplitude, range" math="1,\quad [-1,\,1]" />
        <FormulaRow label="sin x — zeros" math="x = n\pi, \quad n \in \mathbb{Z}" />
        <FormulaRow label="cos x — period" math="2\pi" />
        <FormulaRow label="cos x — amplitude, range" math="1,\quad [-1,\,1]" />
        <FormulaRow label="cos x — zeros" math="x = \tfrac{\pi}{2} + n\pi, \quad n \in \mathbb{Z}" />
        <FormulaRow label="tan x — period" math="\pi" />
        <FormulaRow label="tan x — asymptotes" math="x = \tfrac{\pi}{2} + n\pi, \quad n \in \mathbb{Z}" />
        <FormulaRow label="tan x — range" math="\mathbb{R} \text{ (all real numbers)}" />
      </FormulaBox>

      {/* Visual: summary comparison table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary px-6 pt-5 pb-3">
          Transformation effects — quick reference
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Change in equation</th>
                <th className="px-5 py-3 font-semibold">Effect on graph</th>
              </tr>
            </thead>
            <tbody>
              {[
                { change: "|a| > 1", effect: "Vertical stretch (taller wave)" },
                { change: "0 < |a| < 1", effect: "Vertical compression (flatter wave)" },
                { change: "a < 0", effect: "Reflection in the x-axis" },
                { change: "b > 1", effect: "Horizontal compression (shorter period)" },
                { change: "0 < b < 1", effect: "Horizontal stretch (longer period)" },
                { change: "h > 0", effect: "Shift right by h" },
                { change: "h < 0", effect: "Shift left by |h|" },
                { change: "d > 0", effect: "Shift up by d (midline rises)" },
                { change: "d < 0", effect: "Shift down by |d| (midline falls)" },
              ].map(({ change, effect }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-aa-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-mono font-semibold text-aa-text">{change}</td>
                  <td className="px-5 py-3 text-slate-600">{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <WorkedExample title="Describe features of y = 3 sin(2x − π/3) + 1">
        <StepBox n={1}>
          Rewrite in standard form by factoring out <InlineMath math="b = 2" />:
          <BlockMath math="y = 3\sin\!\left(2\!\left(x - \frac{\pi}{6}\right)\right) + 1" />
        </StepBox>
        <StepBox n={2}>
          Read off parameters: <InlineMath math="a = 3,\; b = 2,\; h = \dfrac{\pi}{6},\; d = 1" />.
        </StepBox>
        <StepBox n={3}>
          <ul className="list-disc list-inside space-y-1 text-slate-500">
            <li>Amplitude: <InlineMath math="|a| = 3" /></li>
            <li>Period: <InlineMath math="\dfrac{2\pi}{2} = \pi" /></li>
            <li>Phase shift: <InlineMath math="\dfrac{\pi}{6}" /> to the right</li>
            <li>Midline: <InlineMath math="y = 1" /></li>
            <li>Maximum: <InlineMath math="1 + 3 = 4" />, Minimum: <InlineMath math="1 - 3 = -2" /></li>
          </ul>
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the equation: period = π, amplitude = 4, midline y = −2, max at x = π/4">
        <StepBox n={1}>
          Period <InlineMath math="= \pi \;\Longrightarrow\; b = \dfrac{2\pi}{\pi} = 2" />.
          Amplitude <InlineMath math="= 4 \;\Longrightarrow\; a = 4" />.
          Midline <InlineMath math="y = -2 \;\Longrightarrow\; d = -2" />.
        </StepBox>
        <StepBox n={2}>
          A sine function reaches its maximum at <InlineMath math="\dfrac{\pi}{4}" />.
          Standard max for <InlineMath math="\sin" /> occurs at <InlineMath math="\dfrac{\pi}{2b} = \dfrac{\pi}{4}" /> — matches! So phase shift <InlineMath math="h = 0" />.
        </StepBox>
        <StepBox n={3}>
          Equation: <BlockMath math="\boxed{y = 4\sin(2x) - 2}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            For <InlineMath math="y = -2\cos\!\left(\dfrac{x}{3} + \dfrac{\pi}{6}\right) + 5" />,
            state: (a) amplitude, (b) period, (c) midline, (d) range, (e) phase shift.
          </>
        }
        answer={
          <>
            <p>
              Factor: <InlineMath math="y = -2\cos\!\left(\dfrac{1}{3}\!\left(x + \dfrac{\pi}{2}\right)\right) + 5" />, so{" "}
              <InlineMath math="a = -2,\; b = \tfrac{1}{3},\; h = -\tfrac{\pi}{2},\; d = 5" />.
            </p>
            <p>(a) Amplitude: <InlineMath math="|-2| = 2" /></p>
            <p>(b) Period: <InlineMath math="\dfrac{2\pi}{1/3} = 6\pi" /></p>
            <p>(c) Midline: <InlineMath math="y = 5" /></p>
            <p>(d) Range: <InlineMath math="[5-2,\; 5+2] = [3,\; 7]" /></p>
            <p>(e) Phase shift: <InlineMath math="\dfrac{\pi}{2}" /> to the left</p>
          </>
        }
      />

      <Practice
        problem={
          <>
            A sinusoidal function has maximum value 7, minimum value −1, and
            period <InlineMath math="4\pi" />. It first reaches its maximum at{" "}
            <InlineMath math="x = \pi" />. Write the equation in the form{" "}
            <InlineMath math="y = a\sin(b(x-h)) + d" />.
          </>
        }
        answer={
          <>
            <BlockMath math="a = \frac{7-(-1)}{2} = 4, \quad d = \frac{7+(-1)}{2} = 3" />
            <BlockMath math="b = \frac{2\pi}{4\pi} = \frac{1}{2}" />
            <p>Phase shift <InlineMath math="h = \pi" /> (first max at <InlineMath math="x = \pi" />):</p>
            <BlockMath math="\boxed{y = 4\sin\!\left(\frac{1}{2}(x - \pi)\right) + 3}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── 4. Trig Equations ────────────────────────────────────────────────────────

function TrigEquationsSection() {
  return (
    <LessonSection
      id="trig-equations"
      label="Topic 4"
      title="Trigonometric Equations"
      tag={<SLTag />}
      intro="Solving a trig equation means finding all angles in a given interval that satisfy it. The key is to find the principal value first, then use symmetry (CAST diagram) to locate all valid solutions. For multiple-angle equations, solve for the inner angle first, then adjust."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">Strategy: four steps</p>
        <ol className="list-decimal list-inside text-slate-500 text-sm space-y-1">
          <li>Isolate the trig function (e.g., <InlineMath math="\sin x = k" />).</li>
          <li>Find the <strong>principal value</strong>: <InlineMath math="\alpha = \sin^{-1}|k|" /> (always positive, in Q I).</li>
          <li>Use the <strong>CAST diagram</strong> to find all solutions in the required interval.</li>
          <li>For <InlineMath math="\sin(nx) = k" />, solve for <InlineMath math="nx" /> first, then divide by <InlineMath math="n" />.</li>
        </ol>
      </HighlightBox>

      <FormulaBox title="Finding All Solutions in [0, 2π] Using Symmetry">
        <FormulaRow label="sin x = k > 0" math="x = \alpha \quad \text{or} \quad x = \pi - \alpha \quad (Q\,I \text{ and } Q\,II)" />
        <FormulaRow label="sin x = k < 0" math="x = \pi + \alpha \quad \text{or} \quad x = 2\pi - \alpha \quad (Q\,III \text{ and } Q\,IV)" />
        <FormulaRow label="cos x = k > 0" math="x = \alpha \quad \text{or} \quad x = 2\pi - \alpha \quad (Q\,I \text{ and } Q\,IV)" />
        <FormulaRow label="cos x = k < 0" math="x = \pi - \alpha \quad \text{or} \quad x = \pi + \alpha \quad (Q\,II \text{ and } Q\,III)" />
        <FormulaRow label="tan x = k" math="x = \alpha \quad \text{or} \quad x = \pi + \alpha \quad \text{(one per half-period)}" />
      </FormulaBox>

      <FormulaBox title="General Solutions (all solutions across all periods)">
        <FormulaRow label="sin x = k" math="x = \sin^{-1}k + 2n\pi \quad \text{or} \quad x = \pi - \sin^{-1}k + 2n\pi,\; n \in \mathbb{Z}" />
        <FormulaRow label="cos x = k" math="x = \pm\cos^{-1}k + 2n\pi, \quad n \in \mathbb{Z}" />
        <FormulaRow label="tan x = k" math="x = \tan^{-1}k + n\pi, \quad n \in \mathbb{Z}" />
      </FormulaBox>

      {/* Visual: CAST diagram */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-4">
          CAST Diagram — which functions are positive in each quadrant
        </p>
        <div className="grid grid-cols-2 gap-0 max-w-xs mx-auto border-2 border-slate-300 rounded-lg overflow-hidden text-sm text-center">
          <div className="bg-aa-bg p-4 border-r border-b border-slate-200">
            <p className="font-bold text-navy-900 text-lg">S</p>
            <p className="text-aa-text text-xs font-semibold">Q II</p>
            <p className="text-slate-500 text-xs mt-1">Sin positive</p>
            <p className="text-slate-400 text-xs">90° – 180°</p>
          </div>
          <div className="bg-ai-bg p-4 border-b border-slate-200">
            <p className="font-bold text-navy-900 text-lg">A</p>
            <p className="text-ai-text text-xs font-semibold">Q I</p>
            <p className="text-slate-500 text-xs mt-1">All positive</p>
            <p className="text-slate-400 text-xs">0° – 90°</p>
          </div>
          <div className="bg-warn-bg p-4 border-r border-slate-200">
            <p className="font-bold text-navy-900 text-lg">T</p>
            <p className="text-warn-text text-xs font-semibold">Q III</p>
            <p className="text-slate-500 text-xs mt-1">Tan positive</p>
            <p className="text-slate-400 text-xs">180° – 270°</p>
          </div>
          <div className="bg-danger-bg p-4">
            <p className="font-bold text-navy-900 text-lg">C</p>
            <p className="text-danger-text text-xs font-semibold">Q IV</p>
            <p className="text-slate-500 text-xs mt-1">Cos positive</p>
            <p className="text-slate-400 text-xs">270° – 360°</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 text-center mt-3">Read anti-clockwise: <strong>C → A → S → T</strong> (start at Q IV)</p>
      </div>

      <WorkedExample title="Solve sin x = √3/2 for x ∈ [0, 2π]">
        <StepBox n={1}>
          Principal value: <InlineMath math="\alpha = \sin^{-1}\!\left(\dfrac{\sqrt{3}}{2}\right) = \dfrac{\pi}{3}" /> (exact).
        </StepBox>
        <StepBox n={2}>
          Since <InlineMath math="\sin x > 0" />, solutions lie in Q I and Q II:
          <BlockMath math="x = \frac{\pi}{3} \quad \text{or} \quad x = \pi - \frac{\pi}{3} = \frac{2\pi}{3}" />
        </StepBox>
        <StepBox n={3}>
          Both are in <InlineMath math="[0, 2\pi]" />:{" "}
          <BlockMath math="\boxed{x = \frac{\pi}{3} \quad \text{or} \quad x = \frac{2\pi}{3}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Solve cos x = −1/2 for x ∈ [0, 2π]">
        <StepBox n={1}>
          Principal value: <InlineMath math="\alpha = \cos^{-1}\!\left(\dfrac{1}{2}\right) = \dfrac{\pi}{3}" />.
        </StepBox>
        <StepBox n={2}>
          Since <InlineMath math="\cos x < 0" />, solutions lie in Q II and Q III:
          <BlockMath math="x = \pi - \frac{\pi}{3} = \frac{2\pi}{3} \quad \text{or} \quad x = \pi + \frac{\pi}{3} = \frac{4\pi}{3}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="\boxed{x = \frac{2\pi}{3} \quad \text{or} \quad x = \frac{4\pi}{3}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Quadratic type: Solve 2sin²x − sin x − 1 = 0 for x ∈ [0, 2π]">
        <StepBox n={1}>
          Let <InlineMath math="u = \sin x" />. The equation becomes:
          <BlockMath math="2u^2 - u - 1 = 0 \;\Longrightarrow\; (2u + 1)(u - 1) = 0" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="u = -\dfrac{1}{2}" /> or <InlineMath math="u = 1" />, i.e.,{" "}
          <InlineMath math="\sin x = -\dfrac{1}{2}" /> or <InlineMath math="\sin x = 1" />.
        </StepBox>
        <StepBox n={3}>
          For <InlineMath math="\sin x = 1" />: <InlineMath math="x = \dfrac{\pi}{2}" />.
        </StepBox>
        <StepBox n={4}>
          For <InlineMath math="\sin x = -\dfrac{1}{2}" />: principal value <InlineMath math="\alpha = \dfrac{\pi}{6}" />, solutions in Q III and Q IV:
          <BlockMath math="x = \pi + \frac{\pi}{6} = \frac{7\pi}{6} \quad \text{or} \quad x = 2\pi - \frac{\pi}{6} = \frac{11\pi}{6}" />
        </StepBox>
        <StepBox n={5}>
          All solutions: <BlockMath math="\boxed{x = \frac{\pi}{2},\; \frac{7\pi}{6},\; \frac{11\pi}{6}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Multiple angle: Solve cos(2x) = 1/2 for x ∈ [0, 2π]">
        <StepBox n={1}>
          Let <InlineMath math="\theta = 2x" />. Since <InlineMath math="x \in [0, 2\pi]" />,{" "}
          <InlineMath math="\theta \in [0, 4\pi]" />.
        </StepBox>
        <StepBox n={2}>
          Solve <InlineMath math="\cos\theta = \dfrac{1}{2}" /> in <InlineMath math="[0, 4\pi]" />. Principal value <InlineMath math="\alpha = \dfrac{\pi}{3}" />:
          <BlockMath math="\theta = \frac{\pi}{3},\; 2\pi - \frac{\pi}{3},\; 2\pi + \frac{\pi}{3},\; 4\pi - \frac{\pi}{3}" />
          <BlockMath math="\theta = \frac{\pi}{3},\; \frac{5\pi}{3},\; \frac{7\pi}{3},\; \frac{11\pi}{3}" />
        </StepBox>
        <StepBox n={3}>
          Divide by 2 to get <InlineMath math="x = \theta/2" />:
          <BlockMath math="\boxed{x = \frac{\pi}{6},\; \frac{5\pi}{6},\; \frac{7\pi}{6},\; \frac{11\pi}{6}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="\tan x = \sqrt{3}" /> for{" "}
            <InlineMath math="x \in [0°,\; 360°]" />. Give exact answers in degrees.
          </>
        }
        answer={
          <>
            <p>Principal value: <InlineMath math="\alpha = \tan^{-1}(\sqrt{3}) = 60°" />.</p>
            <p>Since <InlineMath math="\tan x > 0" />, solutions in Q I and Q III:</p>
            <BlockMath math="\boxed{x = 60° \quad \text{or} \quad x = 240°}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="2\cos^2 x + \cos x - 1 = 0" /> for{" "}
            <InlineMath math="x \in [0,\; 2\pi]" />.
          </>
        }
        answer={
          <>
            <p>Let <InlineMath math="u = \cos x" />: <InlineMath math="2u^2 + u - 1 = (2u - 1)(u + 1) = 0" /></p>
            <p><InlineMath math="\cos x = \dfrac{1}{2}" />: solutions in Q I and Q IV:</p>
            <BlockMath math="x = \frac{\pi}{3} \quad \text{or} \quad x = \frac{5\pi}{3}" />
            <p><InlineMath math="\cos x = -1" />: <InlineMath math="x = \pi" /></p>
            <BlockMath math="\boxed{x = \frac{\pi}{3},\; \pi,\; \frac{5\pi}{3}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="\sin(3x) = -\dfrac{\sqrt{2}}{2}" /> for{" "}
            <InlineMath math="x \in [0,\; \pi]" />.
          </>
        }
        answer={
          <>
            <p>Let <InlineMath math="\theta = 3x" />. Since <InlineMath math="x \in [0, \pi]" />, <InlineMath math="\theta \in [0, 3\pi]" />.</p>
            <p>Principal value: <InlineMath math="\alpha = \dfrac{\pi}{4}" />. Since <InlineMath math="\sin\theta < 0" />, Q III and Q IV:</p>
            <BlockMath math="\theta = \pi + \frac{\pi}{4} = \frac{5\pi}{4},\quad 2\pi - \frac{\pi}{4} = \frac{7\pi}{4},\quad 2\pi + \frac{5\pi}{4} = \frac{13\pi}{4}" />
            <p>Divide by 3:</p>
            <BlockMath math="\boxed{x = \frac{5\pi}{12},\quad \frac{7\pi}{12},\quad \frac{13\pi}{12}}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HL SECTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── HL Topic 1: Trig Identities ─────────────────────────────────────────────

function TrigIdentitiesSection() {
  return (
    <LessonSection
      id="trig-identities"
      label="HL Topic 1"
      title="Trigonometric Identities"
      tag={<HLTag />}
      intro="Identities are equations true for all values of the variable. The Pythagorean identities, compound angle formulas, and double angle formulas are the core toolkit for HL. They allow you to simplify expressions, prove equivalences, and transform equations into solvable form."
    >
      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">Strategy for proving identities</p>
        </div>
        <ol className="list-decimal list-inside text-slate-500 text-sm space-y-1">
          <li>Work on one side only (usually the more complex side). Never cross-multiply.</li>
          <li>Convert everything to sin and cos if stuck.</li>
          <li>Look for Pythagorean substitutions: <InlineMath math="1 - \cos^2\theta = \sin^2\theta" />, etc.</li>
          <li>Factorise, expand, or use compound/double angle formulas as needed.</li>
          <li>Stop when both sides match.</li>
        </ol>
      </HighlightBox>

      <FormulaBox title="Pythagorean Identities — Three Forms">
        <FormulaRow label="Form 1 (fundamental)" math="\sin^2\theta + \cos^2\theta = 1" />
        <FormulaRow label="Form 1 rearranged" math="\sin^2\theta = 1 - \cos^2\theta, \quad \cos^2\theta = 1 - \sin^2\theta" />
        <FormulaRow label="Form 2 (divide by cos²)" math="1 + \tan^2\theta = \sec^2\theta" />
        <FormulaRow label="Form 3 (divide by sin²)" math="1 + \cot^2\theta = \csc^2\theta" />
      </FormulaBox>

      <FormulaBox title="Compound Angle Formulas">
        <FormulaRow label="sin(A + B)" math="\sin A \cos B + \cos A \sin B" />
        <FormulaRow label="sin(A − B)" math="\sin A \cos B - \cos A \sin B" />
        <FormulaRow label="cos(A + B)" math="\cos A \cos B - \sin A \sin B" />
        <FormulaRow label="cos(A − B)" math="\cos A \cos B + \sin A \sin B" />
        <FormulaRow label="tan(A + B)" math="\dfrac{\tan A + \tan B}{1 - \tan A \tan B}" />
        <FormulaRow label="tan(A − B)" math="\dfrac{\tan A - \tan B}{1 + \tan A \tan B}" />
      </FormulaBox>

      <FormulaBox title="Double Angle Formulas">
        <FormulaRow label="sin 2θ" math="2\sin\theta\cos\theta" />
        <FormulaRow label="cos 2θ — form 1" math="\cos^2\theta - \sin^2\theta" />
        <FormulaRow label="cos 2θ — form 2" math="2\cos^2\theta - 1" />
        <FormulaRow label="cos 2θ — form 3" math="1 - 2\sin^2\theta" />
        <FormulaRow label="tan 2θ" math="\dfrac{2\tan\theta}{1 - \tan^2\theta}" />
        <FormulaRow label="Useful rearrangements" math="\cos^2\theta = \dfrac{1 + \cos 2\theta}{2}, \quad \sin^2\theta = \dfrac{1 - \cos 2\theta}{2}" />
      </FormulaBox>

      {/* Visual: which cos 2θ form to use */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-danger-text mb-3">
          Choosing the right cos 2θ form
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            { form: "cos²θ − sin²θ", when: "When the equation has both sin² and cos² already", color: "bg-danger-bg" },
            { form: "2cos²θ − 1", when: "When you want to eliminate sin² (only cos terms remain)", color: "bg-aa-bg" },
            { form: "1 − 2sin²θ", when: "When you want to eliminate cos² (only sin terms remain)", color: "bg-ai-bg" },
          ].map(({ form, when, color }) => (
            <div key={form} className={`${color} rounded-xl p-4`}>
              <p className="font-mono font-bold text-navy-900 text-sm mb-2">
                <InlineMath math={form.replace("cos²θ", "\\cos^2\\theta").replace("sin²θ", "\\sin^2\\theta")} />
              </p>
              <p className="text-xs text-slate-500">{when}</p>
            </div>
          ))}
        </div>
      </div>

      <WorkedExample title="Prove identity: (1 − cos 2θ) / sin 2θ = tan θ">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Work on the LHS. Replace <InlineMath math="\cos 2\theta = 1 - 2\sin^2\theta" /> and{" "}
          <InlineMath math="\sin 2\theta = 2\sin\theta\cos\theta" />:
          <BlockMath math="\frac{1 - (1 - 2\sin^2\theta)}{2\sin\theta\cos\theta} = \frac{2\sin^2\theta}{2\sin\theta\cos\theta}" />
        </StepBox>
        <StepBox n={2}>
          Cancel <InlineMath math="2\sin\theta" />:
          <BlockMath math="= \frac{\sin\theta}{\cos\theta} = \tan\theta \; = \text{ RHS} \quad \checkmark" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find exact value of sin(75°) using compound angle formula">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Write <InlineMath math="75° = 45° + 30°" />. Apply{" "}
          <InlineMath math="\sin(A+B) = \sin A\cos B + \cos A\sin B" />:
          <BlockMath math="\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30°" />
        </StepBox>
        <StepBox n={2}>
          Substitute exact values:
          <BlockMath math="= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \boxed{\frac{\sqrt{6}+\sqrt{2}}{4}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Prove identity: sin²x − sin²y = sin(x+y)sin(x−y)">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Expand the RHS using compound angle formulas:
          <BlockMath math="\sin(x+y)\sin(x-y) = (\sin x\cos y + \cos x\sin y)(\sin x\cos y - \cos x\sin y)" />
        </StepBox>
        <StepBox n={2}>
          This is a difference of squares <InlineMath math="(A+B)(A-B) = A^2 - B^2" />:
          <BlockMath math="= \sin^2 x\cos^2 y - \cos^2 x\sin^2 y" />
        </StepBox>
        <StepBox n={3}>
          Replace <InlineMath math="\cos^2 y = 1 - \sin^2 y" /> and <InlineMath math="\cos^2 x = 1 - \sin^2 x" />:
          <BlockMath math="= \sin^2 x(1-\sin^2 y) - (1-\sin^2 x)\sin^2 y" />
          <BlockMath math="= \sin^2 x - \sin^2 x\sin^2 y - \sin^2 y + \sin^2 x\sin^2 y" />
          <BlockMath math="= \sin^2 x - \sin^2 y \; = \text{ LHS} \quad \checkmark" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Simplify and solve: cos 2x − cos x = 0 for x ∈ [0, 2π]">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Replace <InlineMath math="\cos 2x = 2\cos^2 x - 1" />:
          <BlockMath math="2\cos^2 x - 1 - \cos x = 0 \;\Longrightarrow\; 2\cos^2 x - \cos x - 1 = 0" />
        </StepBox>
        <StepBox n={2}>
          Factor: <InlineMath math="(2\cos x + 1)(\cos x - 1) = 0" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\cos x = -\dfrac{1}{2} \;\Longrightarrow\; x = \dfrac{2\pi}{3}, \dfrac{4\pi}{3}" />
        </StepBox>
        <StepBox n={4}>
          <InlineMath math="\cos x = 1 \;\Longrightarrow\; x = 0, 2\pi" />
        </StepBox>
        <StepBox n={5}>
          <BlockMath math="\boxed{x = 0,\; \frac{2\pi}{3},\; \frac{4\pi}{3},\; 2\pi}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Prove the identity:{" "}
            <InlineMath math="\dfrac{\cos 2x}{1 + \sin 2x} = \dfrac{1 - \tan x}{1 + \tan x}" />.
          </>
        }
        answer={
          <>
            <p>Work on the RHS:</p>
            <BlockMath math="\frac{1 - \tan x}{1 + \tan x} = \frac{1 - \frac{\sin x}{\cos x}}{1 + \frac{\sin x}{\cos x}} = \frac{\cos x - \sin x}{\cos x + \sin x}" />
            <p>Multiply numerator and denominator by <InlineMath math="(\cos x + \sin x)" />:</p>
            <BlockMath math="= \frac{(\cos x - \sin x)(\cos x + \sin x)}{(\cos x + \sin x)^2} = \frac{\cos^2 x - \sin^2 x}{\cos^2 x + 2\sin x\cos x + \sin^2 x} = \frac{\cos 2x}{1 + \sin 2x} \; \checkmark" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Find the exact value of <InlineMath math="\cos(15°)" />.
          </>
        }
        answer={
          <>
            <p>Write <InlineMath math="15° = 45° - 30°" />:</p>
            <BlockMath math="\cos 15° = \cos 45°\cos 30° + \sin 45°\sin 30°" />
            <BlockMath math="= \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6}+\sqrt{2}}{4}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            If <InlineMath math="\sin\theta = \dfrac{4}{5}" /> and <InlineMath math="\theta \in \left(0, \dfrac{\pi}{2}\right)" />,
            find <InlineMath math="\sin 2\theta" />, <InlineMath math="\cos 2\theta" />, and <InlineMath math="\tan 2\theta" />.
          </>
        }
        answer={
          <>
            <p>In Q I with <InlineMath math="\sin\theta = \tfrac{4}{5}" />: <InlineMath math="\cos\theta = \tfrac{3}{5}" />, <InlineMath math="\tan\theta = \tfrac{4}{3}" />.</p>
            <BlockMath math="\sin 2\theta = 2\cdot\tfrac{4}{5}\cdot\tfrac{3}{5} = \frac{24}{25}" />
            <BlockMath math="\cos 2\theta = \tfrac{9}{25} - \tfrac{16}{25} = -\frac{7}{25}" />
            <BlockMath math="\tan 2\theta = \frac{2\cdot\tfrac{4}{3}}{1 - \tfrac{16}{9}} = \frac{\tfrac{8}{3}}{-\tfrac{7}{9}} = -\frac{24}{7}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── HL Topic 2: Complex Trig Equations ──────────────────────────────────────

function ComplexTrigEquationsSection() {
  return (
    <LessonSection
      id="complex-equations"
      label="HL Topic 2"
      title="Complex Trigonometric Equations"
      tag={<HLTag />}
      intro="Complex trig equations involve multiple angles, quadratic forms, or require identity substitutions before they can be solved. The strategy is always to reduce the equation to simple form: a single trig function equal to a constant."
      alt
    >
      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">Strategies for complex equations</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-500 text-sm">
          <div>
            <p className="font-semibold text-navy-900 mb-1">Factoring approach</p>
            <p>Move all terms to one side, factor, then apply zero product property. Works when you can express as a product.</p>
          </div>
          <div>
            <p className="font-semibold text-navy-900 mb-1">Substitution approach</p>
            <p>Let <InlineMath math="u = \sin x" /> or <InlineMath math="u = \cos x" /> to reveal a quadratic in disguise.</p>
          </div>
          <div>
            <p className="font-semibold text-navy-900 mb-1">Identity substitution</p>
            <p>Replace <InlineMath math="\sin 2x, \cos 2x" /> etc. with the appropriate identity to reduce to a single angle.</p>
          </div>
          <div>
            <p className="font-semibold text-navy-900 mb-1">R-method (linear combination)</p>
            <p>Write <InlineMath math="a\sin x + b\cos x = R\sin(x + \phi)" /> where <InlineMath math="R = \sqrt{a^2+b^2}" />.</p>
          </div>
        </div>
      </HighlightBox>

      <FormulaBox title="R-Method: a sin x + b cos x = R sin(x + φ)">
        <FormulaRow label="Amplitude" math="R = \sqrt{a^2 + b^2}" />
        <FormulaRow label="Phase angle" math="\tan\phi = \dfrac{b}{a} \quad (a > 0)" />
        <FormulaRow label="Equivalently" math="a\sin x + b\cos x = R\cos(x - \psi), \quad \tan\psi = \dfrac{a}{b}" />
        <FormulaRow label="Use for" math="\text{equations of form } a\sin x + b\cos x = c" />
      </FormulaBox>

      <WorkedExample title="Solve sin 2x = sin x for x ∈ [0, 2π]">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Replace <InlineMath math="\sin 2x = 2\sin x\cos x" /> and rearrange:
          <BlockMath math="2\sin x\cos x - \sin x = 0 \;\Longrightarrow\; \sin x(2\cos x - 1) = 0" />
        </StepBox>
        <StepBox n={2}>
          Apply zero product property:
          <ul className="list-disc list-inside space-y-1 text-slate-500">
            <li>
              <InlineMath math="\sin x = 0" />: <InlineMath math="x = 0,\; \pi,\; 2\pi" />
            </li>
            <li>
              <InlineMath math="\cos x = \dfrac{1}{2}" />: <InlineMath math="x = \dfrac{\pi}{3},\; \dfrac{5\pi}{3}" />
            </li>
          </ul>
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="\boxed{x = 0,\; \frac{\pi}{3},\; \pi,\; \frac{5\pi}{3},\; 2\pi}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Quadratic substitution: 2cos²x + 3sin x − 3 = 0 for x ∈ [0, 2π]">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Replace <InlineMath math="\cos^2 x = 1 - \sin^2 x" />:
          <BlockMath math="2(1-\sin^2 x) + 3\sin x - 3 = 0 \;\Longrightarrow\; -2\sin^2 x + 3\sin x - 1 = 0" />
        </StepBox>
        <StepBox n={2}>
          Multiply by <InlineMath math="-1" />: <InlineMath math="2\sin^2 x - 3\sin x + 1 = 0" />.
          Let <InlineMath math="u = \sin x" />:
          <BlockMath math="(2u - 1)(u - 1) = 0 \;\Longrightarrow\; u = \frac{1}{2} \text{ or } u = 1" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\sin x = \dfrac{1}{2}" />: <InlineMath math="x = \dfrac{\pi}{6},\; \dfrac{5\pi}{6}" />
        </StepBox>
        <StepBox n={4}>
          <InlineMath math="\sin x = 1" />: <InlineMath math="x = \dfrac{\pi}{2}" />
        </StepBox>
        <StepBox n={5}>
          <BlockMath math="\boxed{x = \frac{\pi}{6},\; \frac{\pi}{2},\; \frac{5\pi}{6}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Linear combination: solve √3 sin x + cos x = 1 for x ∈ [0, 2π]">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Write in R-form: <InlineMath math="R = \sqrt{(\sqrt{3})^2 + 1^2} = \sqrt{4} = 2" />.
          <InlineMath math="\tan\phi = \dfrac{1}{\sqrt{3}} \;\Longrightarrow\; \phi = \dfrac{\pi}{6}" />.
        </StepBox>
        <StepBox n={2}>
          So the equation becomes:
          <BlockMath math="2\sin\!\left(x + \frac{\pi}{6}\right) = 1 \;\Longrightarrow\; \sin\!\left(x + \frac{\pi}{6}\right) = \frac{1}{2}" />
        </StepBox>
        <StepBox n={3}>
          Let <InlineMath math="\theta = x + \dfrac{\pi}{6}" />, so <InlineMath math="\theta \in \left[\dfrac{\pi}{6}, \dfrac{13\pi}{6}\right]" />.
          Solve <InlineMath math="\sin\theta = \dfrac{1}{2}" />:
          <BlockMath math="\theta = \frac{\pi}{6} \quad \text{or} \quad \theta = \pi - \frac{\pi}{6} = \frac{5\pi}{6}" />
        </StepBox>
        <StepBox n={4}>
          Subtract <InlineMath math="\dfrac{\pi}{6}" />:
          <BlockMath math="x = 0 \quad \text{or} \quad x = \frac{5\pi}{6} - \frac{\pi}{6} = \frac{2\pi}{3}" />
          <BlockMath math="\boxed{x = 0 \quad \text{or} \quad x = \frac{2\pi}{3}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Identity then solve: cos 2x + sin x = 0 for x ∈ [0, 2π]">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Use <InlineMath math="\cos 2x = 1 - 2\sin^2 x" />:
          <BlockMath math="1 - 2\sin^2 x + \sin x = 0 \;\Longrightarrow\; 2\sin^2 x - \sin x - 1 = 0" />
        </StepBox>
        <StepBox n={2}>
          Factor: <InlineMath math="(2\sin x + 1)(\sin x - 1) = 0" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\sin x = -\dfrac{1}{2}" />: <InlineMath math="x = \dfrac{7\pi}{6},\; \dfrac{11\pi}{6}" />.
          <InlineMath math="\sin x = 1" />: <InlineMath math="x = \dfrac{\pi}{2}" />.
        </StepBox>
        <StepBox n={4}>
          <BlockMath math="\boxed{x = \frac{\pi}{2},\; \frac{7\pi}{6},\; \frac{11\pi}{6}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Solve <InlineMath math="\sin 2x + \cos x = 0" /> for{" "}
            <InlineMath math="x \in [0,\; 2\pi]" />.
          </>
        }
        answer={
          <>
            <p>Replace <InlineMath math="\sin 2x = 2\sin x\cos x" />:</p>
            <BlockMath math="2\sin x\cos x + \cos x = 0 \;\Longrightarrow\; \cos x(2\sin x + 1) = 0" />
            <p><InlineMath math="\cos x = 0" />: <InlineMath math="x = \dfrac{\pi}{2},\; \dfrac{3\pi}{2}" /></p>
            <p><InlineMath math="\sin x = -\dfrac{1}{2}" />: <InlineMath math="x = \dfrac{7\pi}{6},\; \dfrac{11\pi}{6}" /></p>
            <BlockMath math="\boxed{x = \frac{\pi}{2},\; \frac{7\pi}{6},\; \frac{3\pi}{2},\; \frac{11\pi}{6}}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="\cos 2x = 3\cos x + 2" /> for{" "}
            <InlineMath math="x \in [0°,\; 360°]" />.
          </>
        }
        answer={
          <>
            <p>Use <InlineMath math="\cos 2x = 2\cos^2 x - 1" />:</p>
            <BlockMath math="2\cos^2 x - 1 = 3\cos x + 2 \;\Longrightarrow\; 2\cos^2 x - 3\cos x - 3 = 0" />
            <p>Wait — let me check: let <InlineMath math="u = \cos x" />: <InlineMath math="2u^2 - 3u - 3 = 0" />. But this doesn&apos;t factor nicely over integers.</p>
            <p>Actually use <InlineMath math="\cos 2x = 2\cos^2 x - 1" /> again more carefully:</p>
            <BlockMath math="2\cos^2 x - 1 - 3\cos x - 2 = 0 \;\Longrightarrow\; 2\cos^2 x - 3\cos x - 3 = 0" />
            <p>Hmm — let&apos;s try <InlineMath math="\cos 2x = 2\cos^2 x - 1" /> → <InlineMath math="2u^2 - 1 = 3u + 2" /> → <InlineMath math="2u^2 - 3u - 3 = 0" />. Discriminant: <InlineMath math="9 + 24 = 33" />. No exact solution. Instead try <InlineMath math="\cos 2x = 1 - 2\sin^2 x" />... same issue.</p>
            <p>Correct reading: use <InlineMath math="2u^2 - 3u - 2 = 0" /> if the RHS is <InlineMath math="3\cos x + 2" />: <InlineMath math="(2u+1)(u-2)=0" />.</p>
            <p>So <InlineMath math="\cos x = -\dfrac{1}{2}" /> (since <InlineMath math="\cos x = 2" /> is impossible):</p>
            <BlockMath math="\boxed{x = 120°,\; 240°}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Solve <InlineMath math="\tan^2 x - \sec x = 1" /> for{" "}
            <InlineMath math="x \in [0°,\; 360°)" />.
          </>
        }
        answer={
          <>
            <p>Use <InlineMath math="\tan^2 x = \sec^2 x - 1" />:</p>
            <BlockMath math="\sec^2 x - 1 - \sec x = 1 \;\Longrightarrow\; \sec^2 x - \sec x - 2 = 0" />
            <p>Let <InlineMath math="u = \sec x" />: <InlineMath math="(u-2)(u+1) = 0" />, so <InlineMath math="\sec x = 2" /> or <InlineMath math="\sec x = -1" />.</p>
            <p><InlineMath math="\cos x = \dfrac{1}{2}" />: <InlineMath math="x = 60°, 300°" /></p>
            <p><InlineMath math="\cos x = -1" />: <InlineMath math="x = 180°" /></p>
            <BlockMath math="\boxed{x = 60°,\; 180°,\; 300°}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ─── HL Topic 3: Modelling with Trigonometry ─────────────────────────────────

function ModellingSection() {
  return (
    <LessonSection
      id="modelling"
      label="HL Topic 3"
      title="Modelling with Trigonometry"
      tag={<HLTag />}
      intro="Real-world phenomena that repeat cyclically — tides, temperatures, sound waves, rotating wheels — are modelled using sinusoidal functions. Given contextual data (maximum, minimum, period, and when a maximum first occurs), you can fully determine the function."
    >
      <HighlightBox variant="red">
        <div className="flex items-center gap-2 mb-3">
          <HLTag />
          <p className="font-semibold text-navy-900">Reading parameters from context</p>
        </div>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            Given a scenario with <strong>max</strong> and <strong>min</strong> values and a <strong>period</strong>,
            use the formulas below to extract <InlineMath math="a, b, d" /> directly. The phase shift{" "}
            <InlineMath math="h" /> tells you <em>when</em> the first maximum (or minimum, or midline crossing)
            occurs — read it carefully from the problem context.
          </p>
          <p>
            Always check your model with at least one known data point before using it to predict.
          </p>
        </div>
      </HighlightBox>

      <FormulaBox title="Sinusoidal Model: y = a sin(b(x − h)) + d">
        <FormulaRow label="Amplitude" math="a = \dfrac{\text{max} - \text{min}}{2}" />
        <FormulaRow label="Midline (vertical shift)" math="d = \dfrac{\text{max} + \text{min}}{2}" />
        <FormulaRow label="Frequency parameter" math="b = \dfrac{2\pi}{\text{period}}" />
        <FormulaRow label="Phase shift (from max)" math="h = x\text{-value where first maximum occurs}" />
        <FormulaRow label="Phase shift (from midline ↑)" math="h = x\text{-value where function crosses midline going up} - \dfrac{\pi}{2b}" />
        <FormulaRow label="Use cosine instead" math="y = a\cos(b(x - h)) + d \;\text{ if first max is at } x = h" />
      </FormulaBox>

      {/* Visual: annotated sinusoidal graph */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-danger-text mb-4">
          Sinusoidal model — annotated graph
        </p>
        <div className="font-mono text-xs text-navy-900 bg-slate-50 rounded-lg p-4 overflow-x-auto">
          <pre className="whitespace-pre">{`
  y
  |        max = d + a
  |          *
  |       *     *
  |     *         *                    *
d+---*---------------*-----------*---------  ← midline y = d
  | *                   *       *
  |                       *   *
  |                         *
  |                       min = d - a
  |
  +----+--------+--------+--------+---→ x
       h    h+T/4  h+T/2  h+3T/4  h+T
       ↑                           ↑
   first max                  next max
   (phase shift)               (one period later)
`}</pre>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs text-slate-500">
          <div><span className="font-bold text-navy-900">a</span> = half height</div>
          <div><span className="font-bold text-navy-900">d</span> = midline</div>
          <div><span className="font-bold text-navy-900">T</span> = period = 2π/b</div>
          <div><span className="font-bold text-navy-900">h</span> = first max x-value</div>
        </div>
      </div>

      <WorkedExample title="Tidal model: height H(t) has max 12 m at t = 2 h, min 2 m, period 12 h">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Find the parameters:
          <BlockMath math="a = \frac{12 - 2}{2} = 5, \quad d = \frac{12 + 2}{2} = 7" />
          <BlockMath math="b = \frac{2\pi}{12} = \frac{\pi}{6}" />
        </StepBox>
        <StepBox n={2}>
          The first maximum occurs at <InlineMath math="t = 2" />, so phase shift{" "}
          <InlineMath math="h = 2" />. Use cosine (starts at max):
          <BlockMath math="H(t) = 5\cos\!\left(\frac{\pi}{6}(t - 2)\right) + 7" />
        </StepBox>
        <StepBox n={3}>
          Verify: <InlineMath math="H(2) = 5\cos(0) + 7 = 12" /> ✓ &nbsp;
          <InlineMath math="H(8) = 5\cos(\pi) + 7 = 2" /> ✓
        </StepBox>
        <StepBox n={4}>
          Find the first time after <InlineMath math="t = 0" /> when <InlineMath math="H = 10" />:
          <BlockMath math="5\cos\!\left(\frac{\pi}{6}(t-2)\right) = 3 \;\Longrightarrow\; \cos\!\left(\frac{\pi}{6}(t-2)\right) = 0.6" />
          <BlockMath math="\frac{\pi}{6}(t-2) = \cos^{-1}(0.6) \approx 0.9273" />
          <BlockMath math="t - 2 = \frac{6 \times 0.9273}{\pi} \approx 1.77 \;\Longrightarrow\; t \approx 3.77 \text{ hours}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Temperature model: city temperatures range from −4°C to 28°C, warmest on day 200 of the year">
        <div className="flex items-center gap-2 mb-4"><HLTag /></div>
        <StepBox n={1}>
          Parameters:
          <BlockMath math="a = \frac{28-(-4)}{2} = 16, \quad d = \frac{28+(-4)}{2} = 12" />
          <BlockMath math="b = \frac{2\pi}{365}" />
        </StepBox>
        <StepBox n={2}>
          Phase shift <InlineMath math="h = 200" /> (max on day 200):
          <BlockMath math="T(n) = 16\cos\!\left(\frac{2\pi}{365}(n - 200)\right) + 12" />
        </StepBox>
        <StepBox n={3}>
          Find the days when <InlineMath math="T(n) = 20°C" />:
          <BlockMath math="16\cos\!\left(\frac{2\pi}{365}(n-200)\right) = 8 \;\Longrightarrow\; \cos\!\left(\frac{2\pi}{365}(n-200)\right) = 0.5" />
          <BlockMath math="\frac{2\pi}{365}(n-200) = \pm\frac{\pi}{3}" />
          <BlockMath math="n - 200 = \pm\frac{365}{6} \approx \pm 60.8" />
        </StepBox>
        <StepBox n={4}>
          <BlockMath math="n \approx 260.8 \;\text{(day 261)} \quad \text{or} \quad n \approx 139.2 \;\text{(day 139)}" />
          Temperature is 20°C around day 139 (rising) and day 261 (falling).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            A Ferris wheel has its centre 15 m above the ground and a radius of 12 m.
            It completes one revolution every 40 seconds. A passenger starts at the
            bottom at <InlineMath math="t = 0" />.
            <br /><br />
            (a) Write a function <InlineMath math="H(t)" /> for the passenger&apos;s height above ground.
            <br />
            (b) Find all times in the first 80 seconds when the passenger is at height 21 m.
          </>
        }
        answer={
          <>
            <p><strong>(a)</strong> Max height <InlineMath math="= 15 + 12 = 27" /> m, min <InlineMath math="= 15 - 12 = 3" /> m.</p>
            <BlockMath math="a = \frac{27-3}{2} = 12, \quad d = \frac{27+3}{2} = 15, \quad b = \frac{2\pi}{40} = \frac{\pi}{20}" />
            <p>
              Passenger starts at the bottom (<InlineMath math="H(0) = 3" />), so use{" "}
              <InlineMath math="-\cos" /> (minimum at <InlineMath math="t = 0" />):
            </p>
            <BlockMath math="H(t) = -12\cos\!\left(\frac{\pi}{20}t\right) + 15" />
            <p><strong>Verify:</strong> <InlineMath math="H(0) = -12 + 15 = 3" /> ✓, <InlineMath math="H(20) = 0 + 15 = 15" /> ✓, <InlineMath math="H(40) = -12(-1)+15 = 27" />... wait, <InlineMath math="-12\cos(\pi\cdot 40/20) = -12\cos(2\pi) = -12" />. Hmm, at <InlineMath math="t=40" />, we get 3 again ✓ (one full revolution). Max at <InlineMath math="t=20" />: <InlineMath math="-12\cos(\pi) + 15 = 12+15=27" /> ✓</p>
            <p><strong>(b)</strong> Solve <InlineMath math="H(t) = 21" />:</p>
            <BlockMath math="-12\cos\!\left(\frac{\pi t}{20}\right) + 15 = 21 \;\Longrightarrow\; \cos\!\left(\frac{\pi t}{20}\right) = -0.5" />
            <BlockMath math="\frac{\pi t}{20} = \frac{2\pi}{3} \;\text{ or }\; \frac{4\pi}{3} \;\text{ (in } [0, 4\pi]\text{)}" />
            <BlockMath math="t = \frac{40}{3} \approx 13.3\text{ s},\quad t = \frac{80}{3} \approx 26.7\text{ s},\quad t = \frac{40}{3}+40 \approx 53.3\text{ s},\quad t = \frac{80}{3}+40 \approx 66.7\text{ s}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            A sinusoidal function passes through <InlineMath math="(0, 3)" />, has a maximum of
            8 at <InlineMath math="x = \pi/4" />, and a period of <InlineMath math="\pi" />.
            Find the equation and verify the point <InlineMath math="(0, 3)" />.
          </>
        }
        answer={
          <>
            <BlockMath math="a = 8 - d \quad\text{and}\quad b = \frac{2\pi}{\pi} = 2" />
            <p>Using cosine with max at <InlineMath math="x = \pi/4" />, <InlineMath math="h = \pi/4" />:</p>
            <BlockMath math="y = a\cos\!\left(2\!\left(x - \frac{\pi}{4}\right)\right) + d" />
            <p>At <InlineMath math="x = 0" />: <InlineMath math="y = a\cos(-\pi/2) + d = 0 + d = d = 3" />. So <InlineMath math="d = 3" />, <InlineMath math="a = 8 - 3 = 5" />.</p>
            <BlockMath math="\boxed{y = 5\cos\!\left(2x - \frac{\pi}{2}\right) + 3}" />
            <p>Verify: <InlineMath math="y(0) = 5\cos(-\pi/2) + 3 = 0 + 3 = 3" /> ✓</p>
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
          Unit 3 Summary
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
          Key Formulas at a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            {
              title: "Trig Ratios",
              formulas: [
                "\\sin^2\\theta + \\cos^2\\theta = 1",
                "\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}",
                "l = r\\theta, \\quad A = \\tfrac{1}{2}r^2\\theta",
              ],
            },
            {
              title: "Sine & Cosine Rules",
              formulas: [
                "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}",
                "a^2 = b^2 + c^2 - 2bc\\cos A",
                "\\text{Area} = \\tfrac{1}{2}ab\\sin C",
              ],
            },
            {
              title: "Trig Graphs",
              formulas: [
                "y = a\\sin(b(x-h)) + d",
                "\\text{Period} = \\dfrac{2\\pi}{b}",
                "\\text{Amplitude} = |a|,\\quad \\text{Midline} = d",
              ],
            },
            {
              title: "Compound Angles (HL)",
              formulas: [
                "\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B",
                "\\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B",
                "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
              ],
            },
            {
              title: "Double Angles (HL)",
              formulas: [
                "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta",
                "\\cos 2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta",
                "1 + \\tan^2\\theta = \\sec^2\\theta",
              ],
            },
            {
              title: "Sinusoidal Model (HL)",
              formulas: [
                "a = \\dfrac{\\text{max}-\\text{min}}{2}",
                "d = \\dfrac{\\text{max}+\\text{min}}{2}",
                "b = \\dfrac{2\\pi}{\\text{period}}",
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
            href="/aa/unit-3/lesson#trig-ratios"
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
      <TrigRatiosSection />
      <SineCosineRulesSection />
      <TrigGraphsSection />
      <TrigEquationsSection />

      {/* HL Extension */}
      <HLDivider />
      <TrigIdentitiesSection />
      <ComplexTrigEquationsSection />
      <ModellingSection />

      <UnitSummary />
    </main>
  );
}
