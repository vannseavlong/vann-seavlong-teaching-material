import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Physics Exam Review — Motion, Kinematics & Dynamics | Worksheets",
  description:
    "10SCI Unit 5 exam review worksheet covering describing motion, acceleration, Newton's laws, and comprehensive mixed review with 49 practice problems.",
};

// ─── Helper components ────────────────────────────────────────────────────────

function SessionHeader({ n, title }: { n: number; title: string }) {
  return (
    <div className="bg-[#1e3a5f] text-white rounded-xl px-6 py-4 mb-6 mt-12">
      <p className="text-phys-light text-xs font-bold uppercase tracking-widest mb-1">Session {n}</p>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function PartHeader({ variant }: { variant: "a" | "b" }) {
  return variant === "a" ? (
    <div className="bg-[#2b4a8f] text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider">
      Part A — Formulas &amp; Key Concepts
    </div>
  ) : (
    <div className="bg-phys-primary text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider mt-10">
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
  relationship,
  note,
}: {
  formula: string;
  vars: { sym: string; unit: string }[];
  relationship?: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm my-4">
      <div className="bg-[#1e3a5f] text-white py-4 px-6 text-center overflow-x-auto">
        <BlockMath math={formula} />
      </div>
      <div className="grid grid-cols-2 bg-[#dbeafe] px-6 py-4 gap-x-8 gap-y-0.5">
        <p className="text-[#1e40af] font-bold text-sm mb-1">Variables</p>
        <p className="text-[#1e40af] font-bold text-sm mb-1">SI Units</p>
        {vars.map((v, i) => (
          <Fragment key={i}>
            <p className="text-sm text-slate-700 font-mono leading-relaxed">{v.sym}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{v.unit}</p>
          </Fragment>
        ))}
      </div>
      {(relationship || note) && (
        <div className="px-6 py-4 bg-white border-t border-slate-100 space-y-1.5">
          {relationship && (
            <p className="text-sm">
              <span className="font-bold text-orange-600">Relationship: </span>
              <span className="text-slate-600">{relationship}</span>
            </p>
          )}
          {note && (
            <p className="text-sm">
              <span className="font-semibold text-slate-500">Note: </span>
              <span className="text-slate-500 italic">{note}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function GraphShapeTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs uppercase tracking-wide border border-[#2a4a7f]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-2.5 border border-slate-200 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
        className={`border-b-2 border-slate-300 bg-transparent outline-none focus:border-phys-primary transition-colors text-slate-700 text-sm ${wide ? "flex-1 min-w-0" : "w-52"}`}
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
}) {
  const W = 540;
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
        {xVals.map((v) => (
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
        {yVals.map((v) => (
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
              stroke="#c2410c"
              strokeWidth={2.5}
              strokeLinejoin="round"
            />
            {data.map((p, i) => (
              <circle key={i} cx={toX(p.x)} cy={toY(p.y)} r={4} fill="#c2410c" />
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

// ─── Session 1 ────────────────────────────────────────────────────────────────

function Session1() {
  return (
    <section id="session-1" className="scroll-mt-28">
      <SessionHeader n={1} title="Describing Motion" />
      <PartHeader variant="a" />

      <TopicTitle>1. Speed</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">Speed is the distance an object travels per unit of time. It is a scalar (magnitude only).</p>
      <FormulaCard
        formula="s = \dfrac{d}{t}"
        vars={[
          { sym: "s = speed", unit: "m/s  (or km/h, mi/hr, etc.)" },
          { sym: "d = distance", unit: "metres (m)" },
          { sym: "t = time", unit: "seconds (s)" },
        ]}
        relationship="Speed increases as distance increases (for fixed time), or as time decreases (for fixed distance)."
        note="Speed is scalar — it has no direction. Common units: m/s, km/h, mi/hr, ft/s."
      />

      <TopicTitle>2. Average Speed</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">Average speed = total distance traveled ÷ total time taken.</p>
      <FormulaCard
        formula="s_{\text{avg}} = \dfrac{d_{\text{total}}}{t_{\text{total}}}"
        vars={[
          { sym: "s_avg = average speed", unit: "m/s" },
          { sym: "d_total = total distance", unit: "metres (m)" },
          { sym: "t_total = total time", unit: "seconds (s)" },
        ]}
        relationship="Average speed does NOT depend on direction — it uses total path length, not displacement."
        note="A trip of 300 km in 5 hours → average speed = 60 km/h, even with stops and speed changes."
      />

      <TopicTitle>3. Velocity</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">Velocity is the speed of an object AND its direction of motion. It is a vector quantity.</p>
      <FormulaCard
        formula="v = \dfrac{\Delta x}{t}"
        vars={[
          { sym: "v = velocity", unit: "m/s (with direction)" },
          { sym: "Δx = displacement (change in position)", unit: "metres (m)" },
          { sym: "t = time", unit: "seconds (s)" },
        ]}
        relationship="Velocity = displacement ÷ time. Speed can remain constant while velocity changes if direction changes."
        note="Always include direction in your answer! e.g., 50 km/h North."
      />

      <TopicTitle>4. Displacement vs. Distance</TopicTitle>
      <p className="text-sm text-slate-600 mb-1">Distance (d): Total path length traveled — scalar, always positive.</p>
      <p className="text-sm text-slate-600 mb-3">Displacement (Δx): Straight-line change in position from start to end — vector, can be negative.</p>
      <div className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-slate-200 my-4 shadow-sm">
        <div className="bg-[#2b6cb0] text-white p-3 text-center font-bold text-sm">Distance</div>
        <div className="bg-[#c05621] text-white p-3 text-center font-bold text-sm">Displacement</div>
        <div className="bg-aa-bg p-4 space-y-1.5">
          <p className="text-sm">• Scalar (no direction)</p>
          <p className="text-sm">• Total path length</p>
          <p className="text-sm">• Always positive or zero</p>
          <p className="text-sm">• Measured in metres</p>
        </div>
        <div className="bg-phys-bg p-4 space-y-1.5">
          <p className="text-sm">• Vector (has direction)</p>
          <p className="text-sm">• Shortest path start→end</p>
          <p className="text-sm">• Can be negative or zero</p>
          <p className="text-sm">• Use Pythagorean theorem for 2D</p>
        </div>
      </div>

      <TopicTitle>5. Pythagorean Theorem (for 2D Displacement)</TopicTitle>
      <FormulaCard
        formula="c^2 = a^2 + b^2 \quad\Longrightarrow\quad c = \sqrt{a^2 + b^2}"
        vars={[
          { sym: "c = hypotenuse (displacement)", unit: "metres (m)" },
          { sym: "a = horizontal distance", unit: "metres (m)" },
          { sym: "b = vertical distance", unit: "metres (m)" },
        ]}
        relationship="Used when an object moves in two perpendicular directions. The hypotenuse IS the displacement magnitude."
        note="Only needed when path has a 90° turn. Always state direction as well (e.g., 10.2 blocks East)."
      />

      <TopicTitle>6. Slope on a Distance-Time Graph</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">On a distance vs. time graph, the slope of the line equals the object&apos;s speed.</p>
      <FormulaCard
        formula="\text{slope} = \frac{\text{rise}}{\text{run}} = \frac{\Delta d}{\Delta t} = \text{speed}"
        vars={[
          { sym: "rise = change in distance (Δd)", unit: "metres (m)" },
          { sym: "run = change in time (Δt)", unit: "seconds (s)" },
          { sym: "slope = speed", unit: "m/s" },
        ]}
        relationship="A steeper slope = faster speed. A horizontal line = object is NOT moving. A curved line = changing speed."
      />

      <p className="text-sm font-semibold text-[#2b6cb0] mt-6 mb-2">Graph Shapes — Distance vs. Time</p>
      <GraphShapeTable
        headers={["Graph Shape", "What It Means", "Speed"]}
        rows={[
          ["Horizontal line", "Object is NOT moving (stopped)", "0 m/s"],
          ["Straight diagonal line (up)", "Moving away from reference at CONSTANT speed", "Constant, positive"],
          ["Straight diagonal line (down)", "Moving toward reference at CONSTANT speed", "Constant, positive"],
          ["Curve (steepening)", "Object is SPEEDING UP (accelerating)", "Increasing"],
          ["Curve (flattening)", "Object is SLOWING DOWN (decelerating)", "Decreasing"],
        ]}
      />

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 1-1" title="Distance & Displacement" variant="blue">
        <p className="text-sm text-slate-600 italic">Solve the following problems. Draw a diagram before solving.</p>
        <Q n={1}>A cross-country team runs a 10 km race. They end up outside the locker room where they started. What is their distance? What is their displacement?</Q>
        <AnsLine label="Distance:" wide />
        <AnsLine label="Displacement:" wide />

        <Q n={2}>Nicole parks her car at Target and walks 150 ft north to get to the store. On her way back to her car, she walks 50 ft before pausing. Find her distance and displacement.</Q>
        <AnsLine label="Distance:" wide />
        <AnsLine label="Displacement:" wide />

        <Q n={3}>Maria walks 20 ft north, 35 ft east, and then 20 ft south to reach the pool. Find her distance and displacement.</Q>
        <AnsLine label="Distance:" wide />
        <AnsLine label="Displacement:" wide />

        <Q n={4}>A delivery truck drives 18 blocks north, 10 blocks east, and 16 blocks south. All blocks are equal length. Find the distance and displacement. <em>(Hint: use Pythagorean theorem for displacement!)</em></Q>
        <AnsLine label="Distance:" wide />
        <div className="my-2">
          <p className="font-bold text-sm text-navy-900">Displacement working:</p>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-600">
            <InlineMath math="a^2 + b^2 = c^2" />
            <span>→</span>
            <input type="text" className="border-b-2 border-slate-300 w-10 bg-transparent outline-none focus:border-phys-primary" aria-label="a value" />
            <sup>2</sup>
            <span>+</span>
            <input type="text" className="border-b-2 border-slate-300 w-10 bg-transparent outline-none focus:border-phys-primary" aria-label="b value" />
            <sup>2</sup>
            <span>=</span>
            <input type="text" className="border-b-2 border-slate-300 w-10 bg-transparent outline-none focus:border-phys-primary" aria-label="c value" />
            <sup>2</sup>
          </div>
        </div>
        <AnsLine label="Displacement:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 1-2" title="Speed & Velocity" variant="green">
        <Q n={5}>A student runs 250 m in 30 s. What is her average speed?</Q>
        <AnsLine label="Formula used:" wide />
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={6}>Sound travels at 343 m/s. If a lightning bolt strikes 2 km away, how long does it take the sound to reach you?</Q>
        <AnsLine label="Formula used:" wide />
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={7}>A space shuttle orbits Earth at 21,000 km/hr. How far will it travel in 5 hours?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={8}>An elevator travels 210 m upward in 35 s. What is its velocity?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer (include direction):" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 1-3" title="Graph Interpretation" variant="teal">
        <p className="text-sm text-slate-600 mb-4">Use the data tables below to create distance vs. time graphs, then answer the questions.</p>

        {/* Data tables A and B side by side */}
        <div className="grid grid-cols-2 gap-6 mb-4">
          {["A", "B"].map((label) => (
            <div key={label}>
              <p className="text-sm font-bold text-[#2b6cb0] mb-2">Data Table {label}</p>
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr>
                    <th className="bg-[#2b6cb0] text-white px-3 py-2 text-center font-semibold">Time (s)</th>
                    <th className="bg-[#2b6cb0] text-white px-3 py-2 text-center font-semibold">Distance (m)</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4, 5].map((t) => (
                    <tr key={t} className={t % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 py-2 text-center border border-slate-200">{t}</td>
                      <td className="px-3 py-2 text-center border border-slate-200">
                        <input
                          type="text"
                          className="w-full text-center bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary text-sm"
                          aria-label={`Table ${label} t=${t} distance`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* Graph grids side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <GraphArea title="Graph A: Distance vs. Time" xLabel="Time (s)" yLabel="Distance (m)" xMax={5} yMax={30} xStep={1} yStep={5} height={240} />
          <GraphArea title="Graph B: Distance vs. Time" xLabel="Time (s)" yLabel="Distance (m)" xMax={5} yMax={30} xStep={1} yStep={5} height={240} />
        </div>

        <Q n={9}>Describe the motion shown in Graph A. What is the object doing?</Q>
        <AnsTextarea label="Answer:" />

        <Q n={10}>Calculate the speed in Graph B using the slope formula.</Q>
        <div className="text-sm text-slate-600 flex flex-wrap items-center gap-1 my-2">
          <span>slope = rise/run = Δdistance/Δtime =</span>
          <input type="text" className="border-b-2 border-slate-300 w-14 bg-transparent outline-none focus:border-phys-primary text-center" aria-label="rise" />
          <span>/</span>
          <input type="text" className="border-b-2 border-slate-300 w-14 bg-transparent outline-none focus:border-phys-primary text-center" aria-label="run" />
          <span>=</span>
          <input type="text" className="border-b-2 border-slate-300 w-20 bg-transparent outline-none focus:border-phys-primary text-center" aria-label="speed result" />
          <span>m/s</span>
        </div>

        <Q n={11}>On the graph below, sketch: (a) an object not moving, (b) an object at constant speed, (c) an object speeding up. Label each line.</Q>
        <GraphArea
          title="Sketch Graph — Describe motion with labels"
          xLabel="Time (s)"
          yLabel="Distance (m)"
          xMax={6}
          yMax={30}
          xStep={1}
          yStep={5}
          height={250}
          note="Label your sketched lines (a), (b), and (c)"
        />
      </SectionBlock>
    </section>
  );
}

// ─── Session 2 ────────────────────────────────────────────────────────────────

const vtData = [
  { x: 0, y: 0 }, { x: 1, y: 3 }, { x: 2, y: 6 }, { x: 3, y: 9 },
  { x: 4, y: 12 }, { x: 5, y: 15 }, { x: 6, y: 15 }, { x: 7, y: 15 },
  { x: 8, y: 10 }, { x: 9, y: 5 }, { x: 10, y: 0 },
];

function Session2() {
  return (
    <section id="session-2" className="scroll-mt-28">
      <SessionHeader n={2} title="Acceleration" />
      <PartHeader variant="a" />

      <TopicTitle>1. Acceleration</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">Acceleration is the rate of change of velocity over time. An object accelerates when it speeds up, slows down, OR changes direction.</p>
      <FormulaCard
        formula="a = \dfrac{v_f - v_i}{t}"
        vars={[
          { sym: "a = acceleration", unit: "m/s²  (or km/h², mi/hr²)" },
          { sym: "v_f = final velocity", unit: "m/s" },
          { sym: "v_i = initial velocity", unit: "m/s" },
          { sym: "t = time", unit: "seconds (s)" },
        ]}
        relationship="Positive acceleration = speeding up. Negative acceleration (deceleration) = slowing down."
        note="Also written as a = Δv/t where Δv = change in velocity."
      />

      <TopicTitle>2. Kinematic Equation 1 — Final Velocity</TopicTitle>
      <FormulaCard
        formula="v_f = v_i + a \cdot t"
        vars={[
          { sym: "v_f = final velocity", unit: "m/s" },
          { sym: "v_i = initial velocity", unit: "m/s" },
          { sym: "a = acceleration", unit: "m/s²" },
          { sym: "t = time", unit: "seconds (s)" },
        ]}
        relationship="Use when you know initial velocity, acceleration, and time and want to find final velocity."
        note="Rearranged: v_i = v_f − at  |  a = (v_f − v_i)/t  |  t = (v_f − v_i)/a"
      />

      <TopicTitle>3. Kinematic Equation 2 — Displacement with Acceleration</TopicTitle>
      <FormulaCard
        formula="s = v_i \cdot t + \tfrac{1}{2} \cdot a \cdot t^2"
        vars={[
          { sym: "s = displacement", unit: "metres (m)" },
          { sym: "v_i = initial velocity", unit: "m/s" },
          { sym: "a = acceleration", unit: "m/s²" },
          { sym: "t = time", unit: "seconds (s)" },
        ]}
        relationship="Use when you need to find displacement (distance traveled) given time, initial velocity, and acceleration."
        note="If starting from rest: v_i = 0, so s = ½at². If position starts at 0: drop s₀."
      />

      <TopicTitle>4. Kinematic Equation 3 — No Time Variable</TopicTitle>
      <FormulaCard
        formula="v_f^2 = v_i^2 + 2 \cdot a \cdot s"
        vars={[
          { sym: "v_f = final velocity", unit: "m/s" },
          { sym: "v_i = initial velocity", unit: "m/s" },
          { sym: "a = acceleration", unit: "m/s²" },
          { sym: "s = displacement", unit: "metres (m)" },
        ]}
        relationship="Use when TIME is not given or not needed. Relates velocity, acceleration, and displacement directly."
        note="Also written as: v² = u² + 2as  or  v_f² = v_i² + 2a(s − s₀)"
      />

      <TopicTitle>5. Slope on a Velocity-Time Graph</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">On a velocity vs. time graph, the slope of the line equals the object&apos;s acceleration.</p>
      <FormulaCard
        formula="\text{slope} = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{t} = \text{acceleration}"
        vars={[
          { sym: "Δv = change in velocity", unit: "m/s" },
          { sym: "Δt = change in time", unit: "seconds (s)" },
          { sym: "slope = acceleration", unit: "m/s²" },
        ]}
        relationship="Positive slope = positive acceleration (speeding up). Negative slope = negative acceleration (slowing down). Horizontal line = zero acceleration (constant velocity)."
      />

      <p className="text-sm font-semibold text-[#2b6cb0] mt-6 mb-2">Graph Shapes — Velocity vs. Time</p>
      <GraphShapeTable
        headers={["Graph Shape", "What It Means", "Acceleration"]}
        rows={[
          ["Horizontal line at v = 0", "Object is NOT moving", "0"],
          ["Horizontal line (v > 0)", "Moving at CONSTANT speed", "0 (zero acceleration)"],
          ["Straight line sloping UP", "Object is SPEEDING UP", "Positive (+)"],
          ["Straight line sloping DOWN", "Object is SLOWING DOWN", "Negative (−)"],
          ["Steep slope", "Large acceleration", "Greater |a|"],
        ]}
      />

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 2-1" title="Acceleration Calculations" variant="orange">
        <Q n={12}>A car accelerates from a standstill to 60 km/s in 10 s. What is its acceleration?</Q>
        <AnsLine label="Formula:" wide />
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={13}>A jet is traveling at 80 m/s when it lands and parks in 10 s. What is its acceleration?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={14}>A skateboarder has an acceleration of 1.5 m/s². Starting from rest, what speed will he reach after 2 s?</Q>
        <div className="text-sm text-slate-500 italic mb-1">Formula: <InlineMath math="v_f = v_i + a \cdot t" /></div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={15}>A roller coaster starts at 4 m/s. After 3 seconds, its speed is 22 m/s. Find its acceleration.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={16}>A car approaches a stop sign at 5 m/s and comes to a stop in 4 seconds. What was its acceleration?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-2" title="Kinematic Equations" variant="teal">
        <Q n={17}>A Ferrari with an initial velocity of 10 m/s accelerates at 5 m/s² for 3 seconds. What is its final velocity?</Q>
        <div className="text-sm text-slate-500 italic mb-1">Formula: <InlineMath math="v_f = v_i + a \cdot t" /></div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={18}>A ball is dropped from rest and accelerates at 9.8 m/s² due to gravity. How far does it fall in 3 seconds?</Q>
        <div className="text-sm text-slate-500 italic mb-1">Formula: <InlineMath math="s = v_i \cdot t + \tfrac{1}{2} \cdot a \cdot t^2" /> <span className="text-slate-400">(v_i = 0 since dropped from rest)</span></div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={19}>A car accelerates from 0 to 30 m/s over 200 m. What is its acceleration? <em>(No time given — use Equation 3)</em></Q>
        <div className="text-sm text-slate-500 italic mb-1">Formula: <InlineMath math="v_f^2 = v_i^2 + 2 \cdot a \cdot s" /></div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-3" title="Velocity-Time Graphs" variant="green">
        <p className="text-sm text-slate-600 mb-4">Use the data table below to create a velocity vs. time graph, then answer the questions.</p>

        {/* Data table with actual values */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr>
                <th className="bg-[#2b6cb0] text-white px-6 py-2.5 text-center font-semibold">Time (s)</th>
                <th className="bg-[#2b6cb0] text-white px-6 py-2.5 text-center font-semibold">Velocity (m/s)</th>
              </tr>
            </thead>
            <tbody>
              {vtData.map(({ x, y }, i) => (
                <tr key={x} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-6 py-2 text-center border border-slate-200">{x}</td>
                  <td className="px-6 py-2 text-center border border-slate-200">{y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Plotted graph */}
        <GraphArea
          title="Velocity vs. Time Graph"
          xLabel="Time (s)"
          yLabel="Velocity (m/s)"
          xMax={10}
          yMax={15}
          xStep={1}
          yStep={5}
          data={vtData}
          note="Orange line = plotted data from the table above"
          height={300}
        />

        <Q n={20}>Describe what is happening between t = 0 and t = 5 seconds.</Q>
        <AnsTextarea label="Answer:" />

        <Q n={21}>Calculate the acceleration between t = 0 and t = 5 s.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={22}>What is happening between t = 5 and t = 7 seconds?</Q>
        <AnsTextarea label="Answer:" />

        <Q n={23}>Calculate the acceleration between t = 8 and t = 10 s. Is it positive or negative?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-4" title="Match the Graph" variant="purple">
        <p className="text-sm text-slate-600 mb-4">Match each description (A–D) to the correct velocity-time graph shape. Then write the acceleration type.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr>
                <th className="bg-[#7e22ce] text-white px-4 py-3 text-left font-semibold">Description</th>
                <th className="bg-[#7e22ce] text-white px-4 py-3 text-center font-semibold">Graph Type</th>
                <th className="bg-[#7e22ce] text-white px-4 py-3 text-center font-semibold">Acceleration Type</th>
              </tr>
            </thead>
            <tbody>
              {[
                "A. Object not moving",
                "B. Object moving at constant speed",
                "C. Object speeding up",
                "D. Object slowing down",
              ].map((desc, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border border-slate-200 text-center">{desc}</td>
                  <td className="px-4 py-3 border border-slate-200 text-center">
                    <input type="text" className="w-full text-center bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary" aria-label={`Graph type for ${desc}`} />
                  </td>
                  <td className="px-4 py-3 border border-slate-200 text-center">
                    <input type="text" className="w-full text-center bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary" aria-label={`Acceleration type for ${desc}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock code="SECTION 2-5" title="Multi-Step Kinematic Problems" variant="purple">
        <p className="text-sm text-slate-500 italic mb-3">These problems require selecting the correct kinematic equation — and may need two equations used in sequence. Show all working clearly.</p>

        <Q n={50}>A train moving at 30 m/s applies brakes with a uniform deceleration of 2.5 m/s².</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) How long does it take to stop completely?</p>
          <p>(b) What is the total stopping distance?</p>
          <p>(c) What is the train&apos;s velocity after it has traveled 100 m from where the brakes were applied? <em>(Use Equation 3 — no time needed)</em></p>
        </div>
        <AnsLine label="(a) Formula &amp; working:" wide />
        <AnsLine label="(a) Answer:" wide />
        <AnsLine label="(b) Formula &amp; working:" wide />
        <AnsLine label="(b) Answer:" wide />
        <AnsLine label="(c) Working:" wide />
        <AnsLine label="(c) Velocity at 100 m:" wide />

        <Q n={51}>A sports car starts from rest, accelerates at 5 m/s² for 6 s, then cruises at constant velocity for 4 s, then brakes at 3 m/s² until it stops. Find the results for each phase separately, then combine.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) What is the velocity after the acceleration phase?</p>
          <p>(b) How far does it travel during the constant-velocity phase?</p>
          <p>(c) How long does it take to stop once braking begins?</p>
          <p>(d) What is the total distance traveled across all three phases?</p>
        </div>
        <AnsLine label="(a) Velocity after Phase 1:" wide />
        <AnsLine label="(b) Distance during Phase 2:" wide />
        <AnsLine label="(c) Braking time (Phase 3):" wide />
        <div className="ml-5 text-sm text-slate-500 italic mb-1">Phase 1 dist: _____ m &nbsp;|&nbsp; Phase 2 dist: _____ m &nbsp;|&nbsp; Phase 3 dist: _____ m</div>
        <AnsLine label="(d) Total distance:" wide />

        <Q n={52}>A ball is launched vertically upward at 24.5 m/s. Use <InlineMath math="g = 9.8\text{ m/s}^2" /> with upward as positive (<InlineMath math="a = -9.8\text{ m/s}^2" />).</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Find the maximum height. <em>(At the peak, <InlineMath math="v_f = 0" />. Use <InlineMath math="v_f^2 = v_i^2 + 2as" />)</em></p>
          <p>(b) Find the time to reach maximum height.</p>
          <p>(c) Find the ball&apos;s velocity 4 s after launch. State whether it is moving up or down and explain.</p>
        </div>
        <AnsLine label="(a) Max height:" wide />
        <AnsLine label="(b) Time to reach peak:" wide />
        <AnsLine label="(c) Velocity at t = 4 s:" wide />
        <AnsLine label="    Moving up or down? Why:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-6" title="Displacement from V-T Graph Area" variant="orange">
        <div className="bg-orange-50 border border-orange-200 rounded-xl px-5 py-4 mb-4">
          <p className="font-bold text-orange-800 text-sm mb-2">Key Concept — Area Under a Velocity-Time Graph = Displacement</p>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="text-center">
              <p className="font-semibold text-orange-700 mb-1">Constant Velocity → Rectangle</p>
              <BlockMath math="\text{displacement} = v \times \Delta t" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-orange-700 mb-1">Uniform Accel/Decel → Triangle</p>
              <BlockMath math="\text{displacement} = \tfrac{1}{2} \times \text{base} \times \text{height}" />
            </div>
          </div>
          <p className="text-xs text-orange-700 mt-2 text-center italic">Trapezoid (speeding up/down between two non-zero velocities): use ½ × (v₁ + v₂) × Δt</p>
        </div>

        <Q n={53}>A cyclist&apos;s journey has three phases: Phase 1 — accelerates from 0 to 12 m/s in 8 s; Phase 2 — maintains 12 m/s for 10 s; Phase 3 — decelerates uniformly to rest in 6 s.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Calculate the displacement for each phase using the area method. Name the shape (triangle / rectangle).</p>
          <p>(b) Find the total displacement.</p>
          <p>(c) Find the average speed for the entire journey.</p>
        </div>
        <AnsLine label="(a) Phase 1 (shape: _____) displacement:" wide />
        <AnsLine label="    Phase 2 (shape: _____) displacement:" wide />
        <AnsLine label="    Phase 3 (shape: _____) displacement:" wide />
        <AnsLine label="(b) Total displacement:" wide />
        <AnsLine label="(c) Total time:" wide />
        <AnsLine label="    Average speed:" wide />

        <Q n={54}>A car&apos;s velocity-time waypoints are: (0 s, 0 m/s) → (5 s, 25 m/s) → (10 s, 25 m/s) → (14 s, 0 m/s). Sketch the graph, then use areas to find displacements.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Phase 1 (0–5 s): Triangle. Find displacement.</p>
          <p>(b) Phase 2 (5–10 s): Rectangle. Find displacement.</p>
          <p>(c) Phase 3 (10–14 s): Triangle. Find displacement.</p>
          <p>(d) Find total displacement and average velocity for the 14 s journey.</p>
        </div>
        <GraphArea
          title="Sketch Your V-T Graph Here — Plot all 4 waypoints and connect them"
          xLabel="Time (s)"
          yLabel="Velocity (m/s)"
          xMax={14}
          yMax={30}
          xStep={2}
          yStep={5}
          height={250}
          note="Waypoints: (0, 0) → (5, 25) → (10, 25) → (14, 0)"
        />
        <AnsLine label="(a) Phase 1 displacement:" wide />
        <AnsLine label="(b) Phase 2 displacement:" wide />
        <AnsLine label="(c) Phase 3 displacement:" wide />
        <AnsLine label="(d) Total displacement:" wide />
        <AnsLine label="    Average velocity:" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Session 3 ────────────────────────────────────────────────────────────────

function Session3() {
  return (
    <section id="session-3" className="scroll-mt-28">
      <SessionHeader n={3} title="Newton's Laws of Motion" />
      <PartHeader variant="a" />

      <TopicTitle>Newton&apos;s 1st Law — Law of Inertia</TopicTitle>
      <div className="border-l-4 border-aa-primary bg-aa-bg rounded-r-xl px-5 py-4 my-3 italic text-slate-700">
        &quot;An object will move at a constant velocity until a net force acts on it.&quot;
      </div>
      <ul className="text-sm text-slate-700 space-y-1 my-3 ml-4">
        <li>• An object AT REST stays at rest unless a net force acts on it.</li>
        <li>• An object IN MOTION stays in motion (same speed &amp; direction) unless a net force acts on it.</li>
        <li>• Inertia: the tendency of an object to resist a change in motion.</li>
        <li>• More mass = more inertia (harder to change its motion).</li>
      </ul>

      <TopicTitle>Newton&apos;s 2nd Law — F = ma</TopicTitle>
      <p className="text-sm text-slate-600 mb-2">A net force acting on an object causes it to accelerate in the direction of that net force.</p>
      <FormulaCard
        formula="F = m \times a"
        vars={[
          { sym: "F = net force", unit: "Newtons (N) — where 1 N = 1 kg·m/s²" },
          { sym: "m = mass", unit: "kilograms (kg)" },
          { sym: "a = acceleration", unit: "m/s²" },
        ]}
        relationship="Force is directly proportional to mass AND acceleration. Greater mass requires greater force for same acceleration."
        note="Rearranged: m = F/a  |  a = F/m  |  Weight = mass × 9.8 m/s²"
      />

      <TopicTitle>Weight (Special Case of F = ma)</TopicTitle>
      <FormulaCard
        formula="W = m \times g"
        vars={[
          { sym: "W = weight (force of gravity)", unit: "Newtons (N)" },
          { sym: "m = mass", unit: "kilograms (kg)" },
          { sym: "g = acceleration due to gravity", unit: "9.8 m/s² (on Earth)" },
        ]}
        relationship="Weight is the gravitational force on an object. Mass is the amount of matter — it does NOT change with location. Weight DOES change."
        note="On the Moon, g ≈ 1.6 m/s², so you weigh ~1/6 of your Earth weight."
      />

      <TopicTitle>Newton&apos;s 3rd Law — Action-Reaction</TopicTitle>
      <div className="border-l-4 border-phys-primary bg-phys-bg rounded-r-xl px-5 py-4 my-3 italic text-slate-700">
        &quot;Every action has an equal and opposite reaction.&quot;
      </div>
      <ul className="text-sm text-slate-700 space-y-1 my-3 ml-4">
        <li>• When object A exerts a force on object B, object B exerts an equal force on A in the opposite direction.</li>
        <li>• Forces are equal in size but opposite in direction — they act on DIFFERENT objects.</li>
        <li>• Example: You push down on a trampoline → trampoline pushes you UP with equal force.</li>
      </ul>

      <TopicTitle>Momentum</TopicTitle>
      <FormulaCard
        formula="p = m \times v"
        vars={[
          { sym: "p = momentum", unit: "kg·m/s" },
          { sym: "m = mass", unit: "kilograms (kg)" },
          { sym: "v = velocity", unit: "m/s" },
        ]}
        relationship="Momentum = mass in motion. A heavier or faster object has more momentum."
        note="All moving objects have momentum. Momentum is a vector — it has direction."
      />

      <TopicTitle>Law of Conservation of Momentum</TopicTitle>
      <div className="rounded-xl overflow-hidden border border-purple-200 my-4 shadow-sm">
        <div className="bg-[#1e3a5f] text-white py-4 px-6 text-center overflow-x-auto">
          <BlockMath math="p_{\text{before}} = p_{\text{after}}" />
        </div>
        <div className="bg-purple-50 px-6 py-3 italic text-purple-700 text-sm text-center">
          In a collision, total momentum is conserved (never created or destroyed — only transferred).
        </div>
      </div>

      <TopicTitle>Net Force &amp; Balanced/Unbalanced Forces</TopicTitle>
      <GraphShapeTable
        headers={["Force Type", "Definition", "Result on Object"]}
        rows={[
          ["Balanced Forces", "Equal in size, opposite in direction → net force = 0", "No change in motion (stays still or constant speed)"],
          ["Unbalanced Forces", "Not equal — net force ≠ 0", "Object accelerates in the direction of the larger force"],
          ["Net Force", "The combination of all forces acting on an object", "Determines the acceleration via F = ma"],
        ]}
      />

      <TopicTitle>Forces Quick Reference</TopicTitle>
      <GraphShapeTable
        headers={["Force", "Symbol", "Formula", "Unit"]}
        rows={[
          ["Net Force", "F_net", "F = ma", "Newtons (N)"],
          ["Weight", "W", "W = mg  (g = 9.8 m/s²)", "Newtons (N)"],
          ["Momentum", "p", "p = mv", "kg·m/s"],
          ["Acceleration", "a", "a = F/m = (v_f − v_i)/t", "m/s²"],
        ]}
      />

      {/* ── PART B ── */}
      <PartHeader variant="b" />

      <SectionBlock code="SECTION 3-1" title="Newton's 1st Law & Inertia" variant="purple">
        <Q n={24}>Why is Newton&apos;s 1st Law also called the Law of Inertia?</Q>
        <AnsTextarea label="Answer:" />

        <Q n={25}>Rank the following from LEAST to MOST inertia: Pencil | Textbook | Kindergartener | Elephant</Q>
        <AnsLine label="Order (least → most):" wide />

        <Q n={26}>A driver is texting while driving and collides with a parked car, transferring all the car&apos;s moving force. Which law explains this?</Q>
        <div className="flex flex-wrap items-center gap-2 my-2">
          <span className="font-bold text-sm text-navy-900">Newton&apos;s</span>
          <input type="text" className="border-b-2 border-slate-300 w-12 bg-transparent outline-none focus:border-phys-primary text-center" aria-label="law number" />
          <span className="font-bold text-sm text-navy-900">Law because:</span>
          <input type="text" className="border-b-2 border-slate-300 flex-1 bg-transparent outline-none focus:border-phys-primary min-w-32" aria-label="reason" />
        </div>

        <Q n={27}>When you slam on your brakes, your body still flies forward. Explain this using Newton&apos;s 1st Law.</Q>
        <AnsTextarea label="Answer:" />
      </SectionBlock>

      <SectionBlock code="SECTION 3-2" title="Newton's 2nd Law (F = ma)" variant="orange">
        <Q n={28}>With what force will a car (3,000 kg) hit a tree if it has an acceleration of 2 m/s²?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={29}>What force is needed to make a 10 kg bowling ball accelerate at 3 m/s²?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={30}>What is the mass of a truck if it accelerates at 5 m/s² with a force of 14,000 N?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={31}>How much does a 22.5 kg suitcase weigh (in Newtons)?</Q>
        <div className="text-sm text-slate-500 italic mb-1">(Hint: use W = m × g, where g = 9.8 m/s²)</div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={32}>Find the net force on the stack of books below:</Q>
        {/* Force diagram */}
        <div className="flex items-center justify-center gap-6 my-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-aa-primary text-xl font-bold">←</span>
            <span className="font-semibold text-aa-primary text-sm">F = 3 N</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-400 rounded-lg shadow-sm">
            <span className="text-base">📚</span>
            <span className="font-medium text-slate-700">Books</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-phys-primary text-sm">F = 1 N</span>
            <span className="text-phys-primary text-xl font-bold">→</span>
          </div>
        </div>
        <div className="text-sm text-slate-500 italic mb-2">50 N → + 50 N → + ← 50 N</div>
        <AnsLine label="Net Force =" wide />
        <AnsLine label="Balanced or Unbalanced?" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-3" title="Newton's 3rd Law & Momentum" variant="teal">
        <Q n={33}>Find the momentum of a 1,300 kg car traveling at 28 m/s.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={34}>A 15 kg object moving at 3 m/s transfers ALL its momentum to a 5 kg object. What is the velocity of the 5 kg object after the collision?</Q>
        <div className="text-sm text-slate-500 italic mb-1">
          <InlineMath math="p_{\text{before}} = p_{\text{after}} \;\Rightarrow\; m_1 v_1 = m_2 v_2" />
        </div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={35}>A 9 kg ball moving at 5 m/s transfers all its momentum to a 3 kg ball. What is the velocity of the 3 kg ball after the collision?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={36}>Name the Newton&apos;s Law at work in each scenario:</Q>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr>
                <th className="bg-[#0f766e] text-white px-4 py-3 text-center font-semibold">Scenario</th>
                <th className="bg-[#0f766e] text-white px-4 py-3 text-center font-semibold">Newton&apos;s Law #</th>
                <th className="bg-[#0f766e] text-white px-4 py-3 text-center font-semibold">Reason (brief)</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Your dirty clothes stay on the floor all night.",
                "A kicked soccer ball eventually stops due to grass.",
                "Jumping on a trampoline causes you to fly up.",
                "A motorcycle reaches 60 mi/hr faster than a truck.",
                "A fireman feels pushed backward when the hose is on.",
                "A baseball player hits a ball toward the outfield.",
              ].map((scenario, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 border border-slate-200 text-center">{scenario}</td>
                  <td className="px-4 py-3 border border-slate-200 text-center">
                    <input type="text" className="w-full text-center bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary" aria-label={`Law for: ${scenario}`} />
                  </td>
                  <td className="px-4 py-3 border border-slate-200">
                    <input type="text" className="w-full bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary" aria-label={`Reason for: ${scenario}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      <SectionBlock code="SECTION 3-4" title="Force Diagrams & Net Force" variant="blue">
        <p className="text-sm text-slate-600 mb-4">For each scenario, calculate the net force and state whether it is balanced or unbalanced.</p>

        <Q n={37}>Two students push a box in the same direction with 50 N each. A third student pushes the opposite direction with 50 N. What is the net force?</Q>
        <div className="flex flex-wrap items-center gap-2 my-2 text-sm text-slate-500 italic">
          <span>50 N →</span><span>+</span><span>50 N →</span><span>+</span><span>← 50 N</span>
        </div>
        <AnsLine label="Net Force =" wide />
        <AnsLine label="Balanced or Unbalanced?" wide />

        <Q n={38}>One force of 7 N pushes right, another of 3 N pushes left on a box.</Q>
        <AnsLine label="Net Force =" wide />
        <AnsLine label="Direction of motion:" wide />

        <Q n={39}>A 1,600 kg automobile needs a net force to give it an acceleration of 4.5 m/s². What is the required net force?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-5" title="Forces, Friction &amp; Newton's Laws Combined" variant="purple">
        <p className="text-sm text-slate-500 italic mb-3">When multiple forces act on one object, calculate the NET force first, then apply F = ma. Always draw a force diagram before solving.</p>

        <Q n={55}>An 1800 kg car engine produces a forward driving force of 4500 N. The friction force opposing motion is 1200 N.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) What is the net force on the car?</p>
          <p>(b) What is the car&apos;s acceleration?</p>
          <p>(c) Starting from rest, what is the car&apos;s velocity after 8 seconds?</p>
          <p>(d) If the engine force doubled to 9000 N (same friction), what would the new acceleration be?</p>
        </div>
        <AnsLine label="(a) Net force:" wide />
        <AnsLine label="(b) Acceleration:" wide />
        <AnsLine label="(c) Velocity after 8 s:" wide />
        <AnsLine label="(d) New acceleration:" wide />

        <Q n={56}>A 70 kg person stands on a bathroom scale inside an elevator. Use <InlineMath math="g = 9.8\text{ m/s}^2" />. <em>(Hint: <InlineMath math="F_{\text{net}} = F_{\text{scale}} - W = ma" />, so <InlineMath math="F_{\text{scale}} = m(g + a)" /> upward, <InlineMath math="m(g - a)" /> downward)</em></Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) What does the scale read when the elevator is stationary?</p>
          <p>(b) The elevator accelerates UPWARD at 3 m/s². What is the apparent weight?</p>
          <p>(c) The elevator then accelerates DOWNWARD at 3 m/s². What does the scale read?</p>
          <p>(d) If the cable snapped and the elevator fell freely (a = g downward), what would the scale show? Name this phenomenon.</p>
        </div>
        <AnsLine label="(a) Weight (stationary):" wide />
        <AnsLine label="(b) Apparent weight (accel up):" wide />
        <AnsLine label="(c) Apparent weight (accel down):" wide />
        <AnsLine label="(d) Scale reading in free fall:" wide />
        <AnsLine label="    Phenomenon name:" wide />

        <Q n={57}>A 500 kg crate sits on a rough floor. Friction = 600 N throughout.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Worker A pushes with 1600 N. Find the net force and acceleration.</p>
          <p>(b) Worker B joins, also pushing with 400 N in the same direction. Find the new net force and acceleration.</p>
          <p>(c) Starting from rest with both workers, find the velocity after 5 s and the distance traveled.</p>
        </div>
        <AnsLine label="(a) Net force (A alone):" wide />
        <AnsLine label="    Acceleration (A alone):" wide />
        <AnsLine label="(b) Net force (A + B):" wide />
        <AnsLine label="    Acceleration (A + B):" wide />
        <AnsLine label="(c) Velocity after 5 s:" wide />
        <AnsLine label="    Distance traveled:" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-6" title="Impulse, Momentum &amp; Collisions" variant="orange">
        <div className="bg-orange-50 border border-orange-200 rounded-xl px-5 py-4 mb-4">
          <p className="font-bold text-orange-800 text-sm mb-2">New Formula — Impulse-Momentum Theorem</p>
          <div className="text-center overflow-x-auto">
            <BlockMath math="J = F \cdot \Delta t = \Delta p = m(v_f - v_i)" />
          </div>
          <p className="text-xs text-orange-700 mt-1 text-center italic">Impulse J (units: N·s or kg·m/s) = the force applied × the time it acts. It equals the change in momentum.</p>
        </div>

        <Q n={58}>A 0.5 kg soccer ball is kicked from rest and leaves the player&apos;s foot at 28 m/s. The contact time between foot and ball is 0.07 s.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Calculate the impulse applied to the ball.</p>
          <p>(b) Calculate the average force the player&apos;s foot exerted on the ball.</p>
        </div>
        <AnsLine label="(a) Impulse = Δp:" wide />
        <AnsLine label="(b) Average force:" wide />

        <Q n={59}>A 1500 kg car moving at 20 m/s collides with and sticks to a stationary 1000 kg car (perfectly inelastic collision).</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Calculate the total momentum BEFORE the collision.</p>
          <p>(b) Using conservation of momentum, find the combined velocity AFTER the collision.</p>
          <p>(c) Calculate total kinetic energy before and after. <em>(<InlineMath math="KE = \tfrac{1}{2}mv^2" />)</em> Was kinetic energy conserved?</p>
        </div>
        <AnsLine label="(a) Total p_before:" wide />
        <AnsLine label="(b) Combined velocity:" wide />
        <AnsLine label="(c) KE before:" wide />
        <AnsLine label="    KE after:" wide />
        <AnsLine label="    Conserved? (Yes/No + explain):" wide />

        <Q n={60}>A 0.4 kg rubber ball hits a wall at 15 m/s and bounces straight back at 12 m/s. Contact time = 0.05 s. Take toward the wall as positive.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Find the change in momentum. <em>(Careful with signs — the ball reverses direction!)</em></p>
          <p>(b) Find the average force the wall exerts on the ball.</p>
          <p>(c) By Newton&apos;s 3rd Law, what force does the ball exert on the wall? State its direction.</p>
        </div>
        <AnsLine label="(a) Δp = m(v_f − v_i):" wide />
        <AnsLine label="(b) Force on ball (direction: _______):" wide />
        <AnsLine label="(c) Force on wall (direction: _______):" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Session 4 ────────────────────────────────────────────────────────────────

function Session4() {
  return (
    <section id="session-4" className="scroll-mt-28">
      <SessionHeader n={4} title="Comprehensive Mixed Review" />

      <div className="bg-[#2b4a8f] text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider">
        Full Formula Reference Sheet
      </div>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr>
              {["Concept", "Formula", "Variables", "Units"].map((h) => (
                <th key={h} className="bg-[#1e3a5f] text-white px-4 py-2.5 text-left font-semibold text-xs uppercase tracking-wide border border-[#2a4a7f]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Speed", "s = d / t", "s=speed, d=distance, t=time", "m/s"],
              ["Velocity", "v = Δx / t", "v=velocity, Δx=displacement, t=time", "m/s + direction"],
              ["Average Speed", "s_avg = d_total / t_total", "Total distance ÷ total time", "m/s"],
              ["Acceleration", "a = (v_f − v_i) / t", "a=accel, v_f=final vel, v_i=initial vel", "m/s²"],
              ["Kinematic 1", "v_f = v_i + a·t", "Final velocity from initial + acceleration×time", "m/s"],
              ["Kinematic 2", "s = v_i·t + ½·a·t²", "Displacement given time & acceleration", "m"],
              ["Kinematic 3", "v_f² = v_i² + 2·a·s", "No time — velocity from displacement", "m/s"],
              ["Newton's 2nd", "F = m × a", "F=force, m=mass, a=acceleration", "N (kg·m/s²)"],
              ["Weight", "W = m × g", "W=weight, m=mass, g=9.8 m/s²", "N"],
              ["Momentum", "p = m × v", "p=momentum, m=mass, v=velocity", "kg·m/s"],
              ["Conservation", "p_before = p_after", "Total momentum conserved in collision", "kg·m/s"],
              ["Pythagorean", "c = √(a² + b²)", "For 2D displacement at 90° turn", "m"],
              ["D-T Graph slope", "slope = speed", "Rise/Run = Δd/Δt", "m/s"],
              ["V-T Graph slope", "slope = acceleration", "Rise/Run = Δv/Δt", "m/s²"],
            ].map(([concept, formula, vars, units], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2.5 border border-slate-200 font-semibold text-navy-900">{concept}</td>
                <td className="px-4 py-2.5 border border-slate-200 font-mono text-phys-primary font-medium">{formula}</td>
                <td className="px-4 py-2.5 border border-slate-200 text-slate-600">{vars}</td>
                <td className="px-4 py-2.5 border border-slate-200 text-slate-500">{units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-phys-primary text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider mt-8">
        Mixed Practice Problems
      </div>

      <SectionBlock code="PART 1" title="Motion Word Problems" variant="orange">
        <Q n={40}>A school bus leaves school heading east for 2 miles, then turns north for 3 miles. Find the distance and displacement.</Q>
        <AnsLine label="Distance:" wide />
        <AnsLine label="Displacement (use Pythagorean):" wide />
        <AnsLine label="Direction:" wide />

        <Q n={41}>A supersonic jet flies 10 miles in 0.008 hours. Find the speed in mi/hr and m/s. <em>(1 mile = 1609 m)</em></Q>
        <AnsLine label="Speed in mi/hr:" wide />
        <AnsLine label="Speed in m/s:" wide />

        <Q n={42}>An ostrich runs at 43 mi/hr. How far can it run in 15 minutes? <em>(Convert 15 min to hours first!)</em></Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={43}>A helicopter&apos;s speed decreases from 60 m/s to 25 m/s in 5 seconds. What is its acceleration?</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={44}>A cart rolls down an incline from 2 m/s to 22 m/s with an acceleration of 4.0 m/s². How long did it take?</Q>
        <div className="text-sm text-slate-500 italic mb-1">Rearrange: <InlineMath math="t = (v_f - v_i) / a" /></div>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={45}>A bike takes 6 s to accelerate from 10 m/s to 14 m/s. The combined mass of bike and rider is 90 kg. Find the net force AND the final momentum.</Q>
        <AnsLine label="Acceleration:" wide />
        <AnsLine label="Net Force (F=ma):" wide />
        <AnsLine label="Final Momentum (p=mv):" wide />
      </SectionBlock>

      <SectionBlock code="PART 2" title="Graph Analysis" variant="teal">
        <p className="text-sm text-slate-600 mb-4">Use the data tables below to plot TWO graphs (Distance vs. Time and Velocity vs. Time), then answer the analysis questions.</p>

        {/* Mixed data table */}
        <p className="text-sm font-bold text-[#2b6cb0] mb-2">Mixed Data Table (Runner)</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr>
                <th className="bg-[#2b6cb0] text-white px-6 py-2.5 text-center font-semibold">Time (s)</th>
                <th className="bg-[#2b6cb0] text-white px-6 py-2.5 text-center font-semibold">Distance (m)</th>
                <th className="bg-[#2b6cb0] text-white px-6 py-2.5 text-center font-semibold">Velocity (m/s)</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t, i) => (
                <tr key={t} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-6 py-2 text-center border border-slate-200">{t}</td>
                  <td className="px-6 py-2 text-center border border-slate-200">
                    <input type="text" className="w-full text-center bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary text-sm" aria-label={`Runner distance at t=${t}`} />
                  </td>
                  <td className="px-6 py-2 text-center border border-slate-200">
                    <input type="text" className="w-full text-center bg-transparent outline-none border-b border-slate-300 focus:border-phys-primary text-sm" aria-label={`Runner velocity at t=${t}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Two graph areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <GraphArea title="Graph Space — Distance vs. Time" xLabel="Time (s)" yLabel="Distance (m)" xMax={10} yMax={50} xStep={1} yStep={10} height={260} />
          <GraphArea title="Graph Space — Velocity vs. Time" xLabel="Time (s)" yLabel="Velocity (m/s)" xMax={10} yMax={15} xStep={1} yStep={5} height={260} />
        </div>

        <Q n={46}>During which time interval is the runner accelerating? How can you tell from the velocity-time graph?</Q>
        <AnsTextarea label="Answer:" />

        <Q n={47}>During which time interval is the runner moving at constant speed?</Q>
        <AnsTextarea label="Answer:" />

        <Q n={48}>Calculate the runner&apos;s acceleration during the first 5 seconds.</Q>
        <AnsLine label="Working:" wide />
        <AnsLine label="Answer:" wide />

        <Q n={49}>What is the total distance traveled? What is the displacement if the runner ends up at 40 m from the start?</Q>
        <AnsLine label="Total distance (from table):" wide />
        <AnsLine label="Displacement:" wide />
      </SectionBlock>

      <div className="bg-phys-primary text-white rounded-lg px-5 py-2.5 mb-5 font-bold text-sm uppercase tracking-wider mt-8">
        Exam-Level Challenge Problems
      </div>

      <SectionBlock code="PART 3" title="Multi-Concept Challenges" variant="purple">
        <p className="text-sm text-slate-500 italic mb-4">Each problem combines concepts from multiple sessions. Show all working — formula selection, substitution, unit checking, and a clear final answer with units.</p>

        <Q n={61}>A train journey has three phases: Phase 1 — accelerates from rest to 40 m/s in 20 s; Phase 2 — maintains 40 m/s for 30 s; Phase 3 — decelerates uniformly from 40 m/s to rest in 10 s.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Sketch the velocity-time graph. Label each phase and mark key time and velocity points.</p>
          <p>(b) Find the acceleration in Phase 1 and the deceleration in Phase 3.</p>
          <p>(c) Calculate displacement for each phase using the area method, then find total displacement.</p>
          <p>(d) Find the average speed for the entire journey.</p>
        </div>
        <GraphArea
          title="V-T Graph — Sketch Here (Phase 1: 0–20 s | Phase 2: 20–50 s | Phase 3: 50–60 s)"
          xLabel="Time (s)"
          yLabel="Velocity (m/s)"
          xMax={60}
          yMax={50}
          xStep={10}
          yStep={10}
          height={260}
        />
        <AnsLine label="(b) Acceleration Phase 1:" wide />
        <AnsLine label="    Deceleration Phase 3:" wide />
        <AnsLine label="(c) Phase 1 displacement:" wide />
        <AnsLine label="    Phase 2 displacement:" wide />
        <AnsLine label="    Phase 3 displacement:" wide />
        <AnsLine label="    Total displacement:" wide />
        <AnsLine label="(d) Average speed:" wide />

        <Q n={62}>A 3000 kg truck is traveling at 25 m/s when the driver applies the brakes. The braking force is 9000 N.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Find the deceleration. <em>(The braking force opposes motion — use F = ma, then rearrange.)</em></p>
          <p>(b) Find the stopping distance. <em>(Use <InlineMath math="v_f^2 = v_i^2 + 2as" />, with <InlineMath math="v_f = 0" />)</em></p>
          <p>(c) Find the stopping time.</p>
          <p>(d) Calculate the truck&apos;s momentum just BEFORE braking, and state the momentum AFTER stopping.</p>
        </div>
        <AnsLine label="(a) Deceleration:" wide />
        <AnsLine label="(b) Stopping distance:" wide />
        <AnsLine label="(c) Stopping time:" wide />
        <AnsLine label="(d) Momentum before braking:" wide />
        <AnsLine label="    Momentum after stopping:" wide />

        <Q n={63}>During a crash test, a 1200 kg car moving at 18 m/s strikes a rigid barrier and comes to rest in 0.15 s.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Find the car&apos;s change in momentum.</p>
          <p>(b) Using the impulse-momentum theorem, find the average force the barrier exerts on the car.</p>
          <p>(c) Find the deceleration. Express it as a multiple of g (use g = 9.8 m/s²). Comment on whether a passenger wearing a seatbelt might survive and why.</p>
        </div>
        <AnsLine label="(a) Δp:" wide />
        <AnsLine label="(b) Average force:" wide />
        <AnsLine label="(c) Deceleration:" wide />
        <AnsLine label="    As multiple of g:" wide />
        <AnsTextarea label="Discussion — survivable? Why?" />

        <Q n={64}>A 2 kg lab cart starts from rest. Worker A applies a constant 10 N push; friction throughout = 2 N. After 5 s, the push stops and only friction acts until the cart stops.</Q>
        <div className="text-sm text-slate-600 ml-5 mb-3 space-y-0.5">
          <p>(a) Find the net force and acceleration during the push phase.</p>
          <p>(b) Find the velocity at the end of the 5 s push and the distance traveled during the push.</p>
          <p>(c) After the push stops, find the deceleration due to friction, the coasting distance, and the coasting time.</p>
          <p>(d) Find the total distance from start to final stop.</p>
        </div>
        <AnsLine label="(a) Net force:" wide />
        <AnsLine label="    Acceleration:" wide />
        <AnsLine label="(b) Velocity after 5 s push:" wide />
        <AnsLine label="    Distance during push:" wide />
        <AnsLine label="(c) Deceleration (coasting):" wide />
        <AnsLine label="    Coasting distance:" wide />
        <AnsLine label="    Coasting time:" wide />
        <AnsLine label="(d) Total distance:" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PhysicsMotionWorksheet() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-[#1e3a5f] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/worksheets" className="text-phys-light text-xs font-bold uppercase tracking-widest hover:underline">
              ← Worksheets
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-xs bg-phys-primary/80 text-white px-2.5 py-1 rounded-full font-semibold">Physics</span>
            <span className="text-xs text-white/50">Grade 10 — 10SCI Unit 5</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Physics Exam Review</h1>
          <p className="text-phys-light text-xl font-medium mb-4 italic">Motion, Kinematics &amp; Dynamics</p>
          <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
            <p className="text-sm font-bold text-white">
              Covers: Describing Motion &nbsp;|&nbsp; Acceleration &nbsp;|&nbsp; Newton&apos;s Laws
            </p>
            <p className="text-xs text-white/70 italic mt-0.5">
              Includes: Formulas • Practice Problems • Data Tables • Graph Exercises
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <PrintButton />
            <span className="text-xs text-white/40">64 questions across 4 sessions</span>
          </div>
        </div>
      </div>

      {/* Sticky session navigator */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-2 flex gap-2 overflow-x-auto">
          {[
            { id: "session-1", label: "Session 1 — Motion" },
            { id: "session-2", label: "Session 2 — Acceleration" },
            { id: "session-3", label: "Session 3 — Newton's Laws" },
            { id: "session-4", label: "Session 4 — Mixed Review" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-phys-bg text-slate-500 hover:text-phys-primary font-medium transition-colors"
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

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link href="/worksheets" className="text-sm text-slate-500 hover:text-phys-primary font-medium transition-colors">
            ← All Worksheets
          </Link>
          <p className="text-xs text-slate-400">Physics Exam Review — 10SCI Unit 5</p>
        </div>
      </div>
    </main>
  );
}
