import type { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import PrintButton from "../physics-motion/PrintButton";

export const metadata: Metadata = {
  title: "Grade 10 Math AA — Comprehensive Test | Worksheets",
  description:
    "Grade 10 Mathematics (Analysis & Approaches) comprehensive 1-hour test covering indices, surds, quadratics, functions, trigonometry, and coordinate geometry with graph exercises.",
};

// ─── Helper components ────────────────────────────────────────────────────────

function SessionHeader({ n, title, time }: { n: number; title: string; time: string }) {
  return (
    <div className="bg-[#1e3a5f] text-white rounded-xl px-6 py-4 mb-6 mt-10">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <p className="text-aa-light text-xs font-bold uppercase tracking-widest mb-1">Session {n}</p>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <span className="text-sm bg-aa-primary/80 text-white px-3 py-1 rounded-full font-medium">{time}</span>
      </div>
    </div>
  );
}

function PartHeader({ variant }: { variant: "a" | "b" }) {
  return variant === "a" ? (
    <div className="bg-[#2b4a8f] text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider">
      Part A — Formulas &amp; Key Concepts
    </div>
  ) : (
    <div className="bg-aa-primary text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider mt-10">
      Part B — Practice Exercises
    </div>
  );
}

function TopicTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-aa-primary font-bold text-base mt-8 mb-1 border-b border-aa-light pb-1">
      {children}
    </h3>
  );
}

function FormulaCard({
  formula,
  vars,
}: {
  formula: string;
  vars: { sym: string; unit: string }[];
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm my-4">
      <div className="bg-[#1e3a5f] text-white py-4 px-6 text-center overflow-x-auto">
        <BlockMath math={formula} />
      </div>
      <div className="grid grid-cols-2 bg-aa-bg px-6 py-4 gap-x-8 gap-y-0.5">
        <p className="text-aa-primary font-bold text-sm mb-1">Variables</p>
        <p className="text-aa-primary font-bold text-sm mb-1">Units</p>
        {vars.map((v, i) => (
          <div key={i} className="contents">
            <p className="text-sm text-slate-700 font-mono leading-relaxed">{v.sym}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{v.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionBlock({
  code,
  title,
  variant = "blue",
  children,
}: {
  code: string;
  title: string;
  variant?: "blue" | "green" | "orange" | "purple" | "teal";
  children: React.ReactNode;
}) {
  const headerColors = {
    blue: "bg-[#dbeafe] text-[#1e40af] border-[#bfdbfe]",
    green: "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]",
    orange: "bg-[#ffedd5] text-[#c2410c] border-[#fed7aa]",
    purple: "bg-[#f3e8ff] text-[#7e22ce] border-[#e9d5ff]",
    teal: "bg-[#ccfbf1] text-[#0f766e] border-[#99f6e4]",
  };
  return (
    <div className="my-6">
      <div className={`rounded-lg px-5 py-3 mb-4 font-bold text-sm border ${headerColors[variant]}`}>
        {code}: {title}
      </div>
      <div className="space-y-3 px-1">{children}</div>
    </div>
  );
}

function Q({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-slate-700 mb-2">
        <span className="font-bold text-navy-900">{n}.</span> {children}
      </p>
    </div>
  );
}

function AnsLine({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <div className="flex items-center gap-2 my-1.5">
      <span className="font-bold text-sm text-navy-900 whitespace-nowrap">{label}</span>
      <input
        type="text"
        aria-label={label}
        className={`border-b-2 border-slate-300 bg-transparent outline-none focus:border-aa-primary transition-colors text-slate-700 text-sm ${wide ? "flex-1 min-w-0" : "w-52"}`}
      />
    </div>
  );
}

function AnsTextarea({ label }: { label: string }) {
  return (
    <div className="my-2">
      <span className="font-bold text-sm text-navy-900">{label}</span>
      <div className="mt-1 border-b-2 border-slate-300 min-h-8" />
      <div className="border-b-2 border-slate-300 mt-2 min-h-6" />
    </div>
  );
}

function MultipleChoice({
  n,
  question,
  options,
}: {
  n: number;
  question: string;
  options: string[];
}) {
  return (
    <div className="mb-5">
      <p className="text-slate-700 mb-3">
        <span className="font-bold text-navy-900">{n}.</span> {question}
      </p>
      <div className="space-y-2 ml-4">
        {options.map((opt, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full border-2 border-slate-300 flex-shrink-0" />
            <span className="text-sm text-slate-600">{opt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GraphArea({
  title,
  xLabel,
  yLabel,
  xMax,
  yMax,
  xStep = 1,
  yStep,
  data,
  note,
  height = 280,
  showGrid = true,
}: {
  title?: string;
  xLabel: string;
  yLabel: string;
  xMax: number;
  yMax: number;
  xStep?: number;
  yStep?: number;
  data?: { x: number; y: number }[];
  note?: string;
  height?: number;
  showGrid?: boolean;
}) {
  const W = 520;
  const H = height;
  const ml = 52, mr = 20, mt = 20, mb = 44;
  const pw = W - ml - mr;
  const ph = H - mt - mb;

  const actualYStep = yStep ?? (yMax <= 10 ? 2 : yMax <= 20 ? 5 : 10);
  const toX = (x: number) => ml + (x / xMax) * pw;
  const toY = (y: number) => mt + ph - (y / yMax) * ph;

  const xVals = [];
  for (let v = 0; v <= xMax; v += xStep) xVals.push(v);
  const yVals = [];
  for (let v = 0; v <= yMax; v += actualYStep) yVals.push(v);

  const polylinePoints = data
    ? data.map((p) => `${toX(p.x).toFixed(1)},${toY(p.y).toFixed(1)}`).join(" ")
    : "";

  return (
    <div className="my-3 w-full">
      {title && (
        <p className="text-center text-sm font-semibold text-slate-600 mb-1">{title}</p>
      )}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full border border-slate-200 rounded-xl bg-white shadow-sm"
        aria-label={title ?? `${yLabel} vs ${xLabel} graph`}
      >
        {/* Grid lines */}
        {showGrid && xVals.map((v) => (
          <line
            key={`xg-${v}`}
            x1={toX(v)}
            y1={mt}
            x2={toX(v)}
            y2={mt + ph}
            stroke={v === 0 ? "#1a365d" : "#e2e8f0"}
            strokeWidth={v === 0 ? 2 : 1}
          />
        ))}
        {showGrid && yVals.map((v) => (
          <line
            key={`yg-${v}`}
            x1={ml}
            y1={toY(v)}
            x2={ml + pw}
            y2={toY(v)}
            stroke={v === 0 ? "#1a365d" : "#e2e8f0"}
            strokeWidth={v === 0 ? 2 : 1}
          />
        ))}

        {/* Axes */}
        <line x1={ml} y1={mt} x2={ml} y2={mt + ph} stroke="#1a365d" strokeWidth={2.5} />
        <line x1={ml} y1={mt + ph} x2={ml + pw} y2={mt + ph} stroke="#1a365d" strokeWidth={2.5} />

        {/* X ticks and labels */}
        {xVals.map((v) => (
          <g key={`xt-${v}`}>
            <line x1={toX(v)} y1={mt + ph} x2={toX(v)} y2={mt + ph + 5} stroke="#1a365d" strokeWidth={1.5} />
            <text x={toX(v)} y={mt + ph + 17} textAnchor="middle" fontSize={10} fill="#4a5568">
              {v}
            </text>
          </g>
        ))}

        {/* Y ticks and labels */}
        {yVals.map((v) => (
          <g key={`yt-${v}`}>
            <line x1={ml} y1={toY(v)} x2={ml - 5} y2={toY(v)} stroke="#1a365d" strokeWidth={1.5} />
            <text x={ml - 7} y={toY(v) + 4} textAnchor="end" fontSize={10} fill="#4a5568">
              {v}
            </text>
          </g>
        ))}

        {/* Axis labels */}
        <text x={ml + pw / 2} y={H - 5} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#2d3748">
          {xLabel}
        </text>
        <text
          x={13}
          y={mt + ph / 2}
          textAnchor="middle"
          fontSize={12}
          fontWeight="bold"
          fill="#2d3748"
          transform={`rotate(-90, 13, ${mt + ph / 2})`}
        >
          {yLabel}
        </text>

        {/* Plotted data */}
        {data && data.length > 0 && (
          <>
            <polyline
              points={polylinePoints}
              fill="none"
              stroke="#2563eb"
              strokeWidth={2.5}
              strokeLinejoin="round"
            />
            {data.map((p, i) => (
              <circle key={i} cx={toX(p.x)} cy={toY(p.y)} r={4} fill="#2563eb" />
            ))}
          </>
        )}

        {/* Placeholder text for empty graphs */}
        {!data && (
          <text
            x={ml + pw / 2}
            y={mt + ph / 2}
            textAnchor="middle"
            fontSize={12}
            fill="#cbd5e0"
            fontStyle="italic"
          >
            Plot / sketch your graph here
          </text>
        )}
      </svg>
      {note && <p className="text-center text-xs text-slate-400 mt-1 italic">{note}</p>}
    </div>
  );
}

// ─── Session 1: Indices & Surds ────────────────────────────────────────────────────────

function Session1() {
  return (
    <section id="session-1" className="scroll-mt-28">
      <SessionHeader n={1} title="Indices & Surds" time="15 min" />
      <PartHeader variant="a" />

      <TopicTitle>1. Laws of Indices</TopicTitle>
      <div className="grid grid-cols-2 gap-4 my-4">
        <FormulaCard
          formula="a^m \times a^n = a^{m+n}"
          vars={[{ sym: "a^m × a^n", unit: "add exponents" }]}
        />
        <FormulaCard
          formula="a^m \div a^n = a^{m-n}"
          vars={[{ sym: "a^m ÷ a^n", unit: "subtract exponents" }]}
        />
        <FormulaCard
          formula="(a^m)^n = a^{m \times n}"
          vars={[{ sym: "(a^m)^n", unit: "multiply exponents" }]}
        />
        <FormulaCard
          formula="a^0 = 1 \quad (a \neq 0)"
          vars={[{ sym: "a^0", unit: "equals 1" }]}
        />
      </div>

      <TopicTitle>2. Negative & Fractional Indices</TopicTitle>
      <div className="grid grid-cols-2 gap-4 my-4">
        <FormulaCard
          formula="a^{-n} = \frac{1}{a^n}"
          vars={[{ sym: "negative index", unit: "reciprocal" }]}
        />
        <FormulaCard
          formula="a^{\frac{1}{n}} = \sqrt[n]{a}"
          vars={[{ sym: "fractional index", unit: "root" }]}
        />
      </div>

      <TopicTitle>3. Surds (Radicals)</TopicTitle>
      <FormulaCard
        formula="\sqrt{ab} = \sqrt{a} \times \sqrt{b}"
        vars={[{ sym: "product rule", unit: "for surds" }]}
      />

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 1-1" title="Index Laws" variant="blue">
        <MultipleChoice
          n={1}
          question="Simplify $x^5 \cdot x^3$:"
          options={["$x^{15}$", "$x^8$", "$x^{15}$", "$2x^8$"]}
        />

        <MultipleChoice
          n={2}
          question="Simplify $(y^4)^2$:"
          options={["$y^6$", "$y^8$", "$y^{16}$", "$y^2$"]}
        />

        <Q n={3}>Express <InlineMath math="(27)^{\frac{2}{3}}" /> in simplest form.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={4}>Simplify <InlineMath math="(x^{-2})^3" /> using only positive indices.</Q>
        <AnsLine label="Answer:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 1-2" title="Surds & Rationalisation" variant="green">
        <Q n={5}>Simplify <InlineMath math="\sqrt{50}" />.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={6}>Simplify <InlineMath math="\sqrt{3}(\sqrt{12} + \sqrt{27})" />.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={7}>Rationalise the denominator: <InlineMath math="\frac{5}{\sqrt{2}}" /></Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={8}>Simplify <InlineMath math="\frac{6}{\sqrt{3} - 1}" /> by rationalising.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 1-3" title="Combined Indices & Surds" variant="orange">
        <Q n={9}>Find the value of x such that <InlineMath math="2^x = 8^{\frac{2}{3}}" />.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={10}>If <InlineMath math="a = \sqrt{2} + 1" />, find the value of <InlineMath math="a^2 - 2a" />.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Session 2: Quadratic Equations ────────────────────────────────────────────────────────

function Session2() {
  return (
    <section id="session-2" className="scroll-mt-28">
      <SessionHeader n={2} title="Quadratic Equations" time="20 min" />
      <PartHeader variant="a" />

      <TopicTitle>1. Standard Form & Quadratic Formula</TopicTitle>
      <FormulaCard
        formula="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}"
        vars={[
          { sym: "a, b, c", unit: "coefficients" },
          { sym: "Δ = b² - 4ac", unit: "discriminant" },
        ]}
      />

      <TopicTitle>2. Discriminant</TopicTitle>
      <div className="grid grid-cols-3 gap-3 my-4 text-center">
        {[
          { label: "Δ > 0", desc: "Two real roots", color: "green" },
          { label: "Δ = 0", desc: "One repeated root", color: "yellow" },
          { label: "Δ < 0", desc: "No real roots", color: "red" },
        ].map((item, i) => (
          <div key={i} className={`rounded-lg p-3 bg-${item.color}-50 border border-${item.color}-200`}>
            <p className={`font-bold text-${item.color}-700 text-lg`}>{item.label}</p>
            <p className={`text-sm text-${item.color}-600`}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 2-1" title="Solving Quadratics" variant="blue">
        <MultipleChoice
          n={11}
          question="Solve x² - 5x + 6 = 0 by factoring:"
          options={["x = 2 or x = 3", "x = 1 or x = 6", "x = -2 or x = -3", "x = 1 or x = 5"]}
        />

        <Q n={12}>Solve <InlineMath math="x^2 - 7x + 12 = 0" /> by factoring.</Q>
        <AnsLine label="Factors:" wide />
        <AnsLine label="x =" wide />

        <Q n={13}>Solve using the quadratic formula: <InlineMath math="2x^2 + 5x - 3 = 0" /></Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="x =" wide />

        <Q n={14}>Find the discriminant and determine the nature of roots for <InlineMath math="x^2 - 4x + 5 = 0" />.</Q>
        <AnsLine label="Δ =" wide />
        <AnsLine label="Nature of roots:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-2" title="Completing the Square" variant="green">
        <Q n={15}>Complete the square for <InlineMath math="x^2 + 6x + 5" />.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Result:" wide />

        <Q n={16}>Solve by completing the square: <InlineMath math="x^2 + 4x - 3 = 0" /></Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="x =" wide />

        <Q n={17}>Find the vertex of the parabola <InlineMath math="y = x^2 + 6x + 8" />.</Q>
        <AnsLine label="Vertex form:" wide />
        <AnsLine label="Vertex:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-3" title="Quadratic Applications" variant="orange">
        <Q n={18}>The area of a rectangle is 35 cm². The length is 4 cm longer than the width. Find the dimensions.</Q>
        <div className="text-sm text-slate-500 italic mb-2">Let width = x cm, then length = x + 4 cm. Area = x(x + 4) = 35</div>
        <AnsLine label="Equation:" wide />
        <AnsLine label="Width:" wide />
        <AnsLine label="Length:" wide />

        <Q n={19}>A ball is thrown upward with velocity 20 m/s. Its height after t seconds is given by <InlineMath math="h = 20t - 5t^2" />. Find when the ball reaches a height of 15 m.</Q>
        <AnsLine label="Equation:" wide />
        <AnsLine label="t =" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Session 3: Functions & Graphs ────────────────────────────────────────────────────────

function Session3() {
  return (
    <section id="session-3" className="scroll-mt-28">
      <SessionHeader n={3} title="Functions & Graph Transformations" time="20 min" />
      <PartHeader variant="a" />

      <TopicTitle>1. Linear Functions</TopicTitle>
      <FormulaCard
        formula="y = mx + c"
        vars={[
          { sym: "m", unit: "gradient/slope" },
          { sym: "c", unit: "y-intercept" },
        ]}
      />

      <TopicTitle>2. Quadratic Functions</TopicTitle>
      <FormulaCard
        formula="y = a(x-h)^2 + k"
        vars={[
          { sym: "(h, k)", unit: "vertex" },
          { sym: "a", unit: "stretch factor" },
        ]}
      />

      <TopicTitle>3. Graph Transformations</TopicTitle>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr>
              <th className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs">Transformation</th>
              <th className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs">Effect on y = f(x)</th>
              <th className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs">Example</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["y = f(x) + k", "Vertical shift up by k", "x² + 3"],
              ["y = f(x) - k", "Vertical shift down by k", "x² - 2"],
              ["y = f(x - h)", "Horizontal shift right by h", "(x - 1)²"],
              ["y = -f(x)", "Reflection in x-axis", "-x²"],
              ["y = f(-x)", "Reflection in y-axis", "(-x)²"],
              ["y = a·f(x)", "Vertical stretch by factor a", "2x²"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2.5 border border-slate-200 font-mono text-aa-primary">{row[0]}</td>
                <td className="px-4 py-2.5 border border-slate-200 text-slate-600">{row[1]}</td>
                <td className="px-4 py-2.5 border border-slate-200 font-mono text-slate-600">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 3-1" title="Function Analysis" variant="blue">
        <Q n={20}>Find the gradient and y-intercept of the line <InlineMath math="y = -3x + 4" />.</Q>
        <AnsLine label="Gradient (m):" wide />
        <AnsLine label="y-intercept (c):" wide />

        <Q n={21}>Find the equation of the line passing through points (1, 3) and (4, 9).</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Equation:" wide />

        <Q n={22}>Given <InlineMath math="f(x) = x^2 - 4x + 3" />, find:</Q>
        <div className="ml-5 space-y-1">
          <p className="text-sm">(a) The y-intercept</p>
          <p className="text-sm">(b) The x-intercepts</p>
          <p className="text-sm">(c) The vertex</p>
        </div>
        <AnsLine label="(a) y-intercept:" wide />
        <AnsLine label="(b) x-intercepts:" wide />
        <AnsLine label="(c) Vertex:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-2" title="Graph Sketching" variant="green">
        <p className="text-sm text-slate-600 mb-4">Sketch each function on the grid provided. Label key points.</p>

        <Q n={23}>Sketch <InlineMath math="y = x^2 - 4" /> on the grid below. Label the vertex and intercepts.</Q>
        <GraphArea
          title="y = x² - 4"
          xLabel="x"
          yLabel="y"
          xMax={6}
          yMax={8}
          xStep={1}
          yStep={2}
          height={240}
        />

        <Q n={24}>Sketch <InlineMath math="y = -2x + 3" /> on the grid below. Label the intercepts.</Q>
        <GraphArea
          title="y = -2x + 3"
          xLabel="x"
          yLabel="y"
          xMax={5}
          yMax={5}
          xStep={1}
          yStep={1}
          height={220}
        />
      </SectionBlock>

      <SectionBlock code="SECTION 3-3" title="Transformations" variant="teal">
        <Q n={25}>The graph of y = f(x) is shown. Sketch the transformed graphs:</Q>
        <div className="text-sm ml-5 space-y-1 mb-3">
          <p>(a) y = f(x) + 2</p>
          <p>(b) y = f(x - 1)</p>
          <p>(c) y = -f(x)</p>
        </div>
        <GraphArea
          title="Original y = f(x)"
          xLabel="x"
          yLabel="y"
          xMax={6}
          yMax={6}
          xStep={1}
          yStep={1}
          data={[
            { x: 0, y: 4 }, { x: 1, y: 1 }, { x: 2, y: 0 }, { x: 3, y: 1 }, { x: 4, y: 4 },
          ]}
          height={240}
        />
        <GraphArea
          title="Transformations sketch space"
          xLabel="x"
          yLabel="y"
          xMax={6}
          yMax={6}
          xStep={1}
          yStep={1}
          height={240}
        />
      </SectionBlock>
    </section>
  );
}

// ─── Session 4: Trigonometry & Coordinate Geometry ────────────────────────────────────────────────────────

function Session4() {
  return (
    <section id="session-4" className="scroll-mt-28">
      <SessionHeader n={4} title="Trigonometry & Coordinate Geometry" time="20 min" />
      <PartHeader variant="a" />

      <TopicTitle>1. Basic Trigonometry</TopicTitle>
      <div className="grid grid-cols-3 gap-3 my-4">
        {[
          { name: "Sine", formula: "\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}", color: "blue" },
          { name: "Cosine", formula: "\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}", color: "green" },
          { name: "Tangent", formula: "\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}", color: "orange" },
        ].map((trig, i) => (
          <div key={i} className={`rounded-xl p-4 bg-${trig.color}-50 border border-${trig.color}-200 text-center`}>
            <p className={`font-bold text-${trig.color}-700 mb-2`}>{trig.name}</p>
            <BlockMath math={trig.formula} />
          </div>
        ))}
      </div>

      <TopicTitle>2. Sine & Cosine Rules</TopicTitle>
      <div className="grid grid-cols-2 gap-4 my-4">
        <FormulaCard
          formula="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}"
          vars={[{ sym: "Sine Rule", unit: "for any triangle" }]}
        />
        <FormulaCard
          formula="c^2 = a^2 + b^2 - 2ab\\cos C"
          vars={[{ sym: "Cosine Rule", unit: "for any triangle" }]}
        />
      </div>

      <TopicTitle>3. Coordinate Geometry</TopicTitle>
      <div className="grid grid-cols-2 gap-4 my-4">
        <FormulaCard
          formula="d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}"
          vars={[{ sym: "Distance formula", unit: "between two points" }]}
        />
        <FormulaCard
          formula="M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)"
          vars={[{ sym: "Midpoint formula", unit: "between two points" }]}
        />
      </div>

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 4-1" title="Basic Trigonometry" variant="blue">
        <Q n={26}>In a right triangle, the hypotenuse is 13 cm and one side is 5 cm. Find sin θ where θ is the angle opposite the 5 cm side.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="sin θ =" wide />

        <Q n={27}>Find the value of x in the triangle below:</Q>
        <div className="text-center my-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <InlineMath math="\\text{Right triangle: } \\theta = 30^{\\circ}, \\text{adjacent} = 8\\text{ cm}, \\text{opposite} = x" />
        </div>
        <AnsLine label="Working:" wide />
        <AnsLine label="x =" wide />

        <MultipleChoice
          n={28}
          question="If tan θ = 1, what is the value of θ?"
          options = {["30°", "45°", "60°", "90°"]}
        />
      </SectionBlock>

      <SectionBlock code="SECTION 4-2" title="Sine & Cosine Rules" variant="green">
        <Q n={29}>In triangle ABC, ∠A = 30°, ∠B = 45°, and side a = 10 cm. Find side b.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="b =" wide />

        <Q n={30}>Find the length of side c in triangle with sides a = 7, b = 9, and angle C = 60°.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="c =" wide />

        <Q n={31}>A ladder 5 m long leans against a wall making an angle of 70° with the ground. How high up the wall does it reach?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Height:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 4-3" title="Coordinate Geometry" variant="orange">
        <Q n={32}>Find the distance between points P(2, 3) and Q(6, 7).</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Distance:" wide />

        <Q n={33}>Find the midpoint of the line segment from A(-2, 5) to B(4, -3).</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Midpoint:" wide />

        <Q n={34}>Find the equation of the line perpendicular to y = 2x + 1 passing through (3, 4).</Q>
        <AnsLine label="Gradient of original:" wide />
        <AnsLine label="Gradient of perpendicular:" wide />
        <AnsLine label="Equation:" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MathG10AAWorksheet() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-[#1e3a5f] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/worksheets" className="text-aa-light text-xs font-bold uppercase tracking-widest hover:underline">
              ← Worksheets
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-xs bg-aa-primary/80 text-white px-2.5 py-1 rounded-full font-semibold">Mathematics</span>
            <span className="text-xs text-white/50">Grade 10 — AA Foundation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Grade 10 Math AA</h1>
          <p className="text-aa-light text-xl font-medium mb-4 italic">Comprehensive Test — Core Skills</p>
          <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
            <p className="text-sm font-bold text-white">
              Covers: Indices & Surds &nbsp;|&nbsp; Quadratic Equations &nbsp;|&nbsp; Functions &nbsp;|&nbsp; Trigonometry
            </p>
            <p className="text-xs text-white/70 italic mt-0.5">
              Includes: Formulas • Multiple Choice • Graph Sketching • Word Problems
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <PrintButton />
            <span className="text-xs text-white/40">34 questions across 4 sessions • 75 min</span>
          </div>
        </div>
      </div>

      {/* Sticky session navigator */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-2 flex gap-2 overflow-x-auto">
          {[
            { id: "session-1", label: "Session 1 — Indices & Surds" },
            { id: "session-2", label: "Session 2 — Quadratics" },
            { id: "session-3", label: "Session 3 — Functions & Graphs" },
            { id: "session-4", label: "Session 4 — Trig & Coord Geo" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-aa-bg text-slate-500 hover:text-aa-primary font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-2">
        <Session1 />
        <Session2 />
        <Session3 />
        <Session4 />

        {/* Formula Reference Sheet */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-[#1e3a5f] text-white rounded-lg px-5 py-3 mb-5 font-bold text-sm uppercase tracking-wider">
            Quick Formula Reference Sheet
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr>
                  {["Topic", "Formula", "Variables"].map((h) => (
                    <th key={h} className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Indices", "a^m × a^n = a^(m+n)", "add exponents"],
                  ["Indices", "(a^m)^n = a^(mn)", "multiply exponents"],
                  ["Indices", "a^(−n) = 1/a^n", "negative to reciprocal"],
                  ["Surds", "√(ab) = √a × √b", "product rule"],
                  ["Quadratic", "x = (−b ± √(b²−4ac))/2a", "roots formula"],
                  ["Discriminant", "Δ = b² − 4ac", "nature of roots"],
                  ["Linear", "y = mx + c", "m=gradient, c=y-intercept"],
                  ["Quadratic", "y = a(x−h)² + k", "vertex form"],
                  ["Sine", "sin θ = opp/hyp", "right triangle"],
                  ["Cosine", "cos θ = adj/hyp", "right triangle"],
                  ["Tangent", "tan θ = opp/adj", "right triangle"],
                  ["Sine Rule", "a/sin A = b/sin B", "any triangle"],
                  ["Cosine Rule", "c² = a² + b² − 2ab cos C", "any triangle"],
                  ["Distance", "d = √((x₂−x₁)² + (y₂−y₁)²)", "two points"],
                  ["Midpoint", "M = ((x₁+x₂)/2, (y₁+y₂)/2)", "two points"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 border border-slate-200 font-semibold text-navy-900">{row[0]}</td>
                    <td className="px-4 py-2.5 border border-slate-200 font-mono text-aa-primary text-sm">{row[1]}</td>
                    <td className="px-4 py-2.5 border border-slate-200 text-slate-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link href="/worksheets" className="text-sm text-slate-500 hover:text-aa-primary font-medium transition-colors">
            ← All Worksheets
          </Link>
          <p className="text-xs text-slate-400">Grade 10 Math AA — Comprehensive Test</p>
        </div>
      </div>
    </main>
  );
}