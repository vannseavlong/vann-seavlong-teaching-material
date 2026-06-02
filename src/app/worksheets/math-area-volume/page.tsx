import type { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import PrintButton from "../physics-motion/PrintButton";

export const metadata: Metadata = {
  title: "Area & Volume Practice Worksheet | Worksheets",
  description:
    "Progressive area and volume practice worksheet with shape diagrams — from basic formulas to complex composite shapes requiring splitting and subtraction.",
};

// ─── Shared helpers ───────────────────────────────────────────────────────────

function SessionHeader({ n, title, time }: { n: number; title: string; time: string }) {
  return (
    <div className="bg-[#14532d] text-white rounded-xl px-6 py-4 mb-6 mt-10">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <p className="text-[#86efac] text-xs font-bold uppercase tracking-widest mb-1">Session {n}</p>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <span className="text-sm bg-[#166534]/80 text-white px-3 py-1 rounded-full font-medium">{time}</span>
      </div>
    </div>
  );
}

function SectionBlock({
  code,
  title,
  variant = "green",
  children,
}: {
  code: string;
  title: string;
  variant?: "green" | "blue" | "orange" | "purple" | "teal" | "red";
  children: React.ReactNode;
}) {
  const colors = {
    green: "bg-[#dcfce7] text-[#14532d] border-[#86efac]",
    blue: "bg-[#dbeafe] text-[#1e40af] border-[#bfdbfe]",
    orange: "bg-[#ffedd5] text-[#c2410c] border-[#fed7aa]",
    purple: "bg-[#f3e8ff] text-[#7e22ce] border-[#e9d5ff]",
    teal: "bg-[#ccfbf1] text-[#0f766e] border-[#99f6e4]",
    red: "bg-[#fee2e2] text-[#991b1b] border-[#fca5a5]",
  };
  return (
    <div className="my-6">
      <div className={`rounded-lg px-5 py-3 mb-4 font-bold text-sm border ${colors[variant]}`}>
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
        <span className="font-bold text-[#14532d]">{n}.</span> {children}
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
        className={`border-b-2 border-slate-300 bg-transparent outline-none focus:border-[#16a34a] transition-colors text-slate-700 text-sm ${wide ? "flex-1 min-w-0" : "w-52"}`}
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

function DiagramBox({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-2 w-full max-w-md">
        {children}
      </div>
      {caption && <p className="text-xs text-slate-400 italic mt-1">{caption}</p>}
    </div>
  );
}

function FormulaChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block bg-[#14532d] text-white rounded-lg px-4 py-2 text-sm my-2">
      {children}
    </div>
  );
}

// ─── Shape SVG diagrams ───────────────────────────────────────────────────────

// Q1 — Rectangle 12 cm × 7 cm
function RectangleDiagram() {
  return (
    <svg viewBox="0 0 300 180" className="w-full" aria-label="Rectangle 12 cm × 7 cm">
      <rect x="40" y="25" width="200" height="110" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* width dimension line */}
      <line x1="40" y1="155" x2="240" y2="155" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="40" y1="148" x2="40" y2="162" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="240" y1="148" x2="240" y2="162" stroke="#dc2626" strokeWidth="1.5" />
      <text x="140" y="170" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">12 cm</text>
      {/* height dimension line */}
      <line x1="258" y1="25" x2="258" y2="135" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="251" y1="25" x2="265" y2="25" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="251" y1="135" x2="265" y2="135" stroke="#dc2626" strokeWidth="1.5" />
      <text x="278" y="85" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">7 cm</text>
    </svg>
  );
}

// Q2 — Triangle base 10 cm, height 8 cm
function TriangleDiagram() {
  return (
    <svg viewBox="0 0 300 200" className="w-full" aria-label="Triangle base 10 cm height 8 cm">
      {/* Triangle: base from (50,160) to (250,160), apex at (130,30) */}
      <polygon points="50,160 250,160 130,30" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Dashed height line from apex to base */}
      <line x1="130" y1="30" x2="130" y2="160" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Height label */}
      <text x="148" y="105" textAnchor="start" fontSize="12" fill="#7c3aed" fontWeight="bold">8 cm</text>
      {/* Height bracket */}
      <line x1="123" y1="30" x2="137" y2="30" stroke="#64748b" strokeWidth="1" />
      <line x1="123" y1="160" x2="137" y2="160" stroke="#64748b" strokeWidth="1" />
      {/* Base dimension */}
      <line x1="50" y1="175" x2="250" y2="175" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="50" y1="168" x2="50" y2="182" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="250" y1="168" x2="250" y2="182" stroke="#dc2626" strokeWidth="1.5" />
      <text x="150" y="192" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">10 cm</text>
    </svg>
  );
}

// Q3 — Circle r = 6 cm
function CircleDiagram() {
  return (
    <svg viewBox="0 0 260 200" className="w-full" aria-label="Circle radius 6 cm">
      <circle cx="130" cy="100" r="80" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Centre dot */}
      <circle cx="130" cy="100" r="3" fill="#1e3a5f" />
      {/* Radius line */}
      <line x1="130" y1="100" x2="210" y2="100" stroke="#dc2626" strokeWidth="2" />
      {/* Label */}
      <text x="168" y="93" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">r = 6 cm</text>
      {/* centre label */}
      <text x="120" y="115" textAnchor="middle" fontSize="11" fill="#1e3a5f">O</text>
    </svg>
  );
}

// Q4 — Parallelogram base 14 cm, height 5 cm
function ParallelogramDiagram() {
  return (
    <svg viewBox="0 0 320 180" className="w-full" aria-label="Parallelogram base 14 cm height 5 cm">
      {/* Parallelogram: offset 30px on each side */}
      <polygon points="60,145 280,145 250,45 30,45" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Dashed height line */}
      <line x1="90" y1="45" x2="90" y2="145" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />
      <rect x="90" y="135" width="10" height="10" fill="none" stroke="#64748b" strokeWidth="1" />
      {/* Height label */}
      <text x="102" y="102" textAnchor="start" fontSize="12" fill="#7c3aed" fontWeight="bold">5 cm</text>
      {/* Base dimension line */}
      <line x1="60" y1="163" x2="280" y2="163" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="60" y1="156" x2="60" y2="170" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="280" y1="156" x2="280" y2="170" stroke="#dc2626" strokeWidth="1.5" />
      <text x="170" y="178" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">14 cm</text>
    </svg>
  );
}

// Q5 — Trapezium a=8 cm (top), b=14 cm (bottom), h=6 cm
function TrapeziumDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full" aria-label="Trapezium top 8 cm bottom 14 cm height 6 cm">
      {/* Trapezium: bottom from (40,155) to (270,155), top from (90,55) to (220,55) */}
      <polygon points="40,155 270,155 220,55 90,55" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Dashed height */}
      <line x1="90" y1="55" x2="90" y2="155" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />
      <rect x="90" y="145" width="10" height="10" fill="none" stroke="#64748b" strokeWidth="1" />
      <text x="100" y="110" textAnchor="start" fontSize="12" fill="#7c3aed" fontWeight="bold">h = 6 cm</text>
      {/* Top side label */}
      <text x="155" y="48" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">8 cm</text>
      {/* Bottom dimension */}
      <line x1="40" y1="172" x2="270" y2="172" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="40" y1="165" x2="40" y2="179" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="270" y1="165" x2="270" y2="179" stroke="#dc2626" strokeWidth="1.5" />
      <text x="155" y="190" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">14 cm</text>
    </svg>
  );
}

// Q6 — L-shape: 12×9 outer minus 7×5 top-right cutout
function LShapeDiagram() {
  return (
    <svg viewBox="0 0 320 240" className="w-full" aria-label="L-shape composite">
      {/* L-shape path: outer 12×9 (240px × 180px at 20px/cm), but we scale to fit */}
      {/* Let's use 200×150 for 10 units × 7.5 units at ~20px/unit */}
      {/* Outer: (40,20)→(280,20)→(280,190)→(40,190) = 240×170 = "12×9 cm" approx */}
      {/* Cutout top-right: 140px wide × 80px tall = "7×4 cm" */}
      <path
        d="M 40 20 L 160 20 L 160 90 L 280 90 L 280 195 L 40 195 Z"
        fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5"
      />
      {/* Cutout outline (dashed) */}
      <path
        d="M 160 20 L 280 20 L 280 90 L 160 90"
        fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 4"
      />
      {/* Overall width (bottom) */}
      <line x1="40" y1="210" x2="280" y2="210" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="40" y1="203" x2="40" y2="217" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="280" y1="203" x2="280" y2="217" stroke="#dc2626" strokeWidth="1.5" />
      <text x="160" y="227" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">12 cm</text>
      {/* Overall height (left) */}
      <line x1="22" y1="20" x2="22" y2="195" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="15" y1="20" x2="29" y2="20" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="15" y1="195" x2="29" y2="195" stroke="#dc2626" strokeWidth="1.5" />
      <text x="10" y="112" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626" transform="rotate(-90,10,112)">9 cm</text>
      {/* Cutout width (top dashed section) */}
      <line x1="160" y1="8" x2="280" y2="8" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="220" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">7 cm</text>
      {/* Cutout height (right side of cutout) */}
      <line x1="292" y1="20" x2="292" y2="90" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="308" y="58" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">4 cm</text>
      {/* Step labels */}
      <text x="95" y="140" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part A</text>
      <text x="220" y="145" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part B</text>
    </svg>
  );
}

// Q7 — Rectangle + semicircle on one end
function StadiumHalfDiagram() {
  return (
    <svg viewBox="0 0 320 190" className="w-full" aria-label="Rectangle with semicircle">
      {/* Rectangle 200×100 from (40,45) to (240,145) */}
      <rect x="40" y="45" width="200" height="100" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Semicircle on right end */}
      <path d="M 240 45 A 50 50 0 0 1 240 145" fill="#bbf7d0" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Width label (rectangle part) */}
      <line x1="40" y1="162" x2="240" y2="162" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="40" y1="155" x2="40" y2="169" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="240" y1="155" x2="240" y2="169" stroke="#dc2626" strokeWidth="1.5" />
      <text x="140" y="178" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">10 cm</text>
      {/* Height label */}
      <line x1="22" y1="45" x2="22" y2="145" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="15" y1="45" x2="29" y2="45" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="15" y1="145" x2="29" y2="145" stroke="#dc2626" strokeWidth="1.5" />
      <text x="10" y="98" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626" transform="rotate(-90,10,98)">6 cm</text>
      {/* Radius label of semicircle */}
      <line x1="240" y1="95" x2="290" y2="95" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="270" y="88" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">r=3</text>
      {/* Legend */}
      <rect x="43" y="48" width="14" height="14" fill="#e0f2fe" stroke="none" />
      <text x="50" y="70" textAnchor="middle" fontSize="9" fill="#1e3a5f">Rectangle</text>
      <rect x="245" y="75" width="10" height="10" fill="#bbf7d0" stroke="none" />
      <text x="268" y="115" textAnchor="middle" fontSize="9" fill="#14532d">semicircle</text>
    </svg>
  );
}

// Q8 — Rectangle with circular hole
function RectCircleHoleDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full" aria-label="Rectangle with circular hole">
      {/* Rectangle 14×9 → 252×162 px */}
      <rect x="30" y="20" width="252" height="150" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Circular hole (white + dashed border) */}
      <circle cx="156" cy="95" r="45" fill="white" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />
      {/* Hole radius label */}
      <line x1="156" y1="95" x2="201" y2="95" stroke="#dc2626" strokeWidth="1.5" />
      <circle cx="156" cy="95" r="3" fill="#dc2626" />
      <text x="178" y="88" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">r = 3 cm</text>
      {/* Width */}
      <line x1="30" y1="182" x2="282" y2="182" stroke="#1e3a5f" strokeWidth="1.5" />
      <line x1="30" y1="175" x2="30" y2="189" stroke="#1e3a5f" strokeWidth="1.5" />
      <line x1="282" y1="175" x2="282" y2="189" stroke="#1e3a5f" strokeWidth="1.5" />
      <text x="156" y="198" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a5f">14 cm</text>
      {/* Height */}
      <line x1="298" y1="20" x2="298" y2="170" stroke="#1e3a5f" strokeWidth="1.5" />
      <line x1="291" y1="20" x2="305" y2="20" stroke="#1e3a5f" strokeWidth="1.5" />
      <line x1="291" y1="170" x2="305" y2="170" stroke="#1e3a5f" strokeWidth="1.5" />
      <text x="314" y="98" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a5f" transform="rotate(-90,314,98)">9 cm</text>
    </svg>
  );
}

// Q9 — U/Channel shape: outer 14×10, inner 8×6 removed from top-center
function UShapeDiagram() {
  return (
    <svg viewBox="0 0 340 250" className="w-full" aria-label="U-shape channel">
      {/*
        Outer: x=30, y=20, w=252, h=180 (≈14×10 cm at 18px/cm)
        Inner cutout (top center): x=93, y=20, w=126, h=108 (≈7×6 cm)
        U path: outer rect minus inner top rect
      */}
      <path
        d="M 30 20 L 282 20 L 282 200 L 30 200 L 30 20 Z M 93 20 L 189 20 L 189 128 L 93 128 L 93 20 Z"
        fillRule="evenodd"
        fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5"
      />
      {/* Inner cutout dashed outline */}
      <rect x="93" y="20" width="96" height="108" fill="white" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Outer width */}
      <line x1="30" y1="215" x2="282" y2="215" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="30" y1="208" x2="30" y2="222" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="282" y1="208" x2="282" y2="222" stroke="#dc2626" strokeWidth="1.5" />
      <text x="156" y="232" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">14 cm</text>
      {/* Outer height */}
      <line x1="12" y1="20" x2="12" y2="200" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="5" y1="20" x2="19" y2="20" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="5" y1="200" x2="19" y2="200" stroke="#dc2626" strokeWidth="1.5" />
      <text x="4" y="112" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626" transform="rotate(-90,4,112)">10 cm</text>
      {/* Inner width */}
      <line x1="93" y1="8" x2="189" y2="8" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="141" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">? cm</text>
      {/* Inner height */}
      <line x1="202" y1="20" x2="202" y2="128" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="218" y="78" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">6 cm</text>
      {/* Wall thickness labels */}
      <text x="55" y="75" textAnchor="middle" fontSize="10" fill="#1e3a5f">wall</text>
      <text x="55" y="87" textAnchor="middle" fontSize="10" fill="#dc2626">3 cm</text>
    </svg>
  );
}

// Q10 — Arrow shape: rectangle + triangle on right
function ArrowShapeDiagram() {
  return (
    <svg viewBox="0 0 340 200" className="w-full" aria-label="Arrow shape: rectangle + triangle">
      {/* Rectangle from (30,60) to (210,150) = 180×90 px ≈ 9×6 cm */}
      <rect x="30" y="55" width="180" height="100" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Triangle: from (210,30) to (210,180) to (310,105) */}
      <polygon points="210,30 210,180 310,105" fill="#bbf7d0" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Rectangle width */}
      <line x1="30" y1="170" x2="210" y2="170" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="30" y1="163" x2="30" y2="177" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="210" y1="163" x2="210" y2="177" stroke="#dc2626" strokeWidth="1.5" />
      <text x="120" y="186" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">9 cm</text>
      {/* Rectangle height */}
      <line x1="14" y1="55" x2="14" y2="155" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="7" y1="55" x2="21" y2="55" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="7" y1="155" x2="21" y2="155" stroke="#dc2626" strokeWidth="1.5" />
      <text x="5" y="108" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626" transform="rotate(-90,5,108)">5 cm</text>
      {/* Triangle base (= rectangle height + extra) */}
      <line x1="326" y1="30" x2="326" y2="180" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="319" y1="30" x2="333" y2="30" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="319" y1="180" x2="333" y2="180" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="337" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed" transform="rotate(-90,337,108)">9 cm</text>
      {/* Triangle depth */}
      <line x1="210" y1="192" x2="310" y2="192" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="210" y1="185" x2="210" y2="199" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="310" y1="185" x2="310" y2="199" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="260" y="208" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">5 cm</text>
      {/* Labels */}
      <text x="120" y="108" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Rectangle</text>
      <text x="265" y="108" textAnchor="middle" fontSize="11" fill="#14532d" fontStyle="italic">Triangle</text>
    </svg>
  );
}

// Q11 — Cross shape: requires finding missing lengths
function CrossShapeDiagram() {
  return (
    <svg viewBox="0 0 300 280" className="w-full" aria-label="Cross/plus shape">
      {/*
        Cross shape, total bounding box 12×12 cm.
        Arms: each arm is 4 cm wide. Centre square 4×4.
        Overall: 12×12, arms 4 cm wide.
        Scale: 20px/cm → 240×240 px
        Outer box: (30,20) to (270,260)
        Centre square: (110,100) to (190,180)

        Cross path using 20px/cm:
        Top arm: x=(110,190), y=(20,100)
        Left arm: x=(30,110), y=(100,180)
        Right arm: x=(190,270), y=(100,180)
        Bottom arm: x=(110,190), y=(180,260)
        Centre: x=(110,190), y=(100,180)
      */}
      <path
        d="M 110 20 L 190 20 L 190 100 L 270 100 L 270 180 L 190 180 L 190 260 L 110 260 L 110 180 L 30 180 L 30 100 L 110 100 Z"
        fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5"
      />
      {/* Overall width */}
      <line x1="30" y1="272" x2="270" y2="272" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="30" y1="265" x2="30" y2="279" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="270" y1="265" x2="270" y2="279" stroke="#dc2626" strokeWidth="1.5" />
      <text x="150" y="288" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">12 cm</text>
      {/* Overall height */}
      <line x1="12" y1="20" x2="12" y2="260" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="5" y1="20" x2="19" y2="20" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="5" y1="260" x2="19" y2="260" stroke="#dc2626" strokeWidth="1.5" />
      <text x="4" y="142" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626" transform="rotate(-90,4,142)">12 cm</text>
      {/* Arm width (top arm) */}
      <line x1="110" y1="8" x2="190" y2="8" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="110" y1="2" x2="110" y2="14" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="190" y1="2" x2="190" y2="14" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="150" y="5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">4 cm</text>
      {/* Arm height (right arm) */}
      <line x1="282" y1="100" x2="282" y2="180" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="275" y1="100" x2="289" y2="100" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="275" y1="180" x2="289" y2="180" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="296" y="143" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed" transform="rotate(-90,296,143)">4 cm</text>
      {/* "?" labels for missing dimensions */}
      <text x="65" y="91" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#64748b">?</text>
      <text x="150" y="145" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Find missing</text>
      <text x="150" y="158" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">lengths first</text>
    </svg>
  );
}

// Q12 — Rectangular prism (3D)
function RectPrismDiagram() {
  return (
    <svg viewBox="0 0 300 220" className="w-full" aria-label="Rectangular prism 8×5×4 cm">
      {/* Front face */}
      <rect x="50" y="70" width="170" height="120" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Top face (parallelogram) */}
      <polygon points="50,70 100,30 270,30 220,70" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Right face */}
      <polygon points="220,70 270,30 270,150 220,190" fill="#93c5fd" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Length label (front bottom) */}
      <line x1="50" y1="200" x2="220" y2="200" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="50" y1="193" x2="50" y2="207" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="220" y1="193" x2="220" y2="207" stroke="#dc2626" strokeWidth="1.5" />
      <text x="135" y="216" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">8 cm</text>
      {/* Width label (top face) */}
      <line x1="100" y1="20" x2="270" y2="20" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="100" y1="13" x2="100" y2="27" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="270" y1="13" x2="270" y2="27" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="185" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">5 cm</text>
      {/* Height label (right edge) */}
      <line x1="282" y1="30" x2="282" y2="150" stroke="#14532d" strokeWidth="1.5" />
      <line x1="275" y1="30" x2="289" y2="30" stroke="#14532d" strokeWidth="1.5" />
      <line x1="275" y1="150" x2="289" y2="150" stroke="#14532d" strokeWidth="1.5" />
      <text x="296" y="93" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d" transform="rotate(-90,296,93)">4 cm</text>
    </svg>
  );
}

// Q13 — Cylinder r=4, h=10
function CylinderDiagram() {
  return (
    <svg viewBox="0 0 260 240" className="w-full" aria-label="Cylinder radius 4 cm height 10 cm">
      {/* Cylinder body */}
      <rect x="50" y="60" width="160" height="150" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Top ellipse */}
      <ellipse cx="130" cy="60" rx="80" ry="20" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Bottom ellipse (partial, dashed) */}
      <path d="M 50 210 A 80 20 0 0 0 210 210" fill="none" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M 50 210 A 80 20 0 0 1 210 210" fill="none" stroke="#1e3a5f" strokeWidth="2" />
      {/* Radius line on top */}
      <line x1="130" y1="60" x2="210" y2="60" stroke="#dc2626" strokeWidth="2" />
      <circle cx="130" cy="60" r="3" fill="#dc2626" />
      <text x="170" y="53" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">r = 4 cm</text>
      {/* Height */}
      <line x1="222" y1="60" x2="222" y2="210" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="215" y1="60" x2="229" y2="60" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="215" y1="210" x2="229" y2="210" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="240" y="138" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c3aed" transform="rotate(-90,240,138)">h = 10 cm</text>
    </svg>
  );
}

// Q14 — Triangular prism (isoceles triangle cross-section, length 12)
function TriPrismDiagram() {
  return (
    <svg viewBox="0 0 320 240" className="w-full" aria-label="Triangular prism">
      {/* Front triangle face: base 8 cm, height 6 cm */}
      {/* Scale ~20px/cm: base=160px, height=120px */}
      <polygon points="60,200 220,200 140,80" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Back triangle (offset by depth=100px right and 50px up) */}
      <polygon points="130,160 290,160 210,40" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Connecting edges */}
      <line x1="60" y1="200" x2="130" y2="160" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="220" y1="200" x2="290" y2="160" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="140" y1="80" x2="210" y2="40" stroke="#1e3a5f" strokeWidth="2" />
      {/* Front face dashed height */}
      <line x1="140" y1="80" x2="140" y2="200" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />
      <rect x="140" y="190" width="10" height="10" fill="none" stroke="#64748b" strokeWidth="1" />
      {/* Base label (front) */}
      <line x1="60" y1="215" x2="220" y2="215" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="60" y1="208" x2="60" y2="222" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="220" y1="208" x2="220" y2="222" stroke="#dc2626" strokeWidth="1.5" />
      <text x="140" y="230" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">8 cm</text>
      {/* Height label */}
      <text x="155" y="148" textAnchor="start" fontSize="11" fontWeight="bold" fill="#7c3aed">h = 6 cm</text>
      {/* Length label (bottom right edge) */}
      <line x1="220" y1="200" x2="290" y2="160" stroke="#14532d" strokeWidth="2" />
      <text x="268" y="190" textAnchor="start" fontSize="11" fontWeight="bold" fill="#14532d">L = 12 cm</text>
    </svg>
  );
}

// Q15 — Hollow cylinder (annular cross-section)
function HollowCylinderDiagram() {
  return (
    <svg viewBox="0 0 280 240" className="w-full" aria-label="Hollow cylinder cross-section">
      {/* Outer cylinder */}
      <rect x="40" y="50" width="180" height="160" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      <ellipse cx="130" cy="50" rx="90" ry="22" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Inner hole (white) */}
      <rect x="85" y="50" width="90" height="160" fill="white" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
      <ellipse cx="130" cy="50" rx="45" ry="12" fill="white" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 3" />
      {/* Outer radius */}
      <line x1="130" y1="50" x2="220" y2="50" stroke="#1e3a5f" strokeWidth="1.5" />
      <text x="175" y="43" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a5f">R = 9 cm</text>
      {/* Inner radius */}
      <line x1="130" y1="50" x2="175" y2="50" stroke="#dc2626" strokeWidth="1.5" />
      <text x="152" y="63" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">r = 5 cm</text>
      {/* Height */}
      <line x1="240" y1="50" x2="240" y2="210" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="233" y1="50" x2="247" y2="50" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="233" y1="210" x2="247" y2="210" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="258" y="133" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed" transform="rotate(-90,258,133)">h = 8 cm</text>
    </svg>
  );
}

// Q16 — Complex L-shape with unlabeled sides (hard)
function ComplexLShapeDiagram() {
  return (
    <svg viewBox="0 0 360 280" className="w-full" aria-label="Complex L-shape with some unlabeled sides">
      {/*
        Shape coordinates (px, 1cm = 18px):
        Overall bounding: 18cm wide × 12cm tall → 324×216 px
        Origin at (18, 22)
        L-shape: outer minus top-right cutout
        Outer: (18,22) to (342,22) to (342,238) to (18,238)
        Cutout top-right: (200,22) to (342,22) to (342,130)  → 8cm wide, 6cm tall
        L path:
      */}
      <path
        d="M 18 22 L 200 22 L 200 130 L 342 130 L 342 238 L 18 238 Z"
        fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5"
      />
      {/* Dashed cutout outline */}
      <path
        d="M 200 22 L 342 22 L 342 130"
        fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 4"
      />
      {/* Dimension: total width (bottom) */}
      <line x1="18" y1="252" x2="342" y2="252" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="18" y1="245" x2="18" y2="259" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="342" y1="245" x2="342" y2="259" stroke="#dc2626" strokeWidth="1.5" />
      <text x="180" y="269" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">18 cm</text>
      {/* Total height (left) */}
      <line x1="4" y1="22" x2="4" y2="238" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="-3" y1="22" x2="11" y2="22" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="-3" y1="238" x2="11" y2="238" stroke="#dc2626" strokeWidth="1.5" />
      <text x="4" y="132" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626" transform="rotate(-90,4,132)">12 cm</text>
      {/* Top-left portion width */}
      <line x1="18" y1="10" x2="200" y2="10" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="109" y="7" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">10 cm</text>
      {/* Step height (left portion) */}
      <line x1="188" y1="22" x2="188" y2="130" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="205" y="80" textAnchor="start" fontSize="11" fontWeight="bold" fill="#7c3aed">6 cm</text>
      {/* Right portion width (known) */}
      <line x1="200" y1="118" x2="342" y2="118" stroke="#14532d" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="270" y="113" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">? cm</text>
      {/* Right portion height (known) */}
      <line x1="354" y1="130" x2="354" y2="238" stroke="#14532d" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="357" y="187" textAnchor="start" fontSize="11" fontWeight="bold" fill="#14532d">? cm</text>
      {/* Hint labels inside */}
      <text x="100" y="145" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part A</text>
      <text x="270" y="190" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part B</text>
    </svg>
  );
}

// Q17 — Annular sector (part of a ring, 90°)
function AnnularSectorDiagram() {
  return (
    <svg viewBox="0 0 280 260" className="w-full" aria-label="Annular sector 90 degrees">
      {/*
        Quarter ring: from angle 0 to 90°.
        Outer radius R=10 cm → 140px, Inner radius r=6 cm → 84px
        Centre at (20, 220)
        Outer arc: (20+140, 220) → (20, 220-140) → (160, 220) → (20, 80)
        Inner arc: (20+84, 220) → (20, 220-84) → (104, 220) → (20, 136)
      */}
      <path
        d="M 160 220 A 140 140 0 0 0 20 80 L 20 136 A 84 84 0 0 1 104 220 Z"
        fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5"
      />
      {/* Centre point */}
      <circle cx="20" cy="220" r="4" fill="#1e3a5f" />
      <text x="25" y="235" fontSize="11" fill="#1e3a5f">O</text>
      {/* Outer radius line (horizontal) */}
      <line x1="20" y1="220" x2="160" y2="220" stroke="#dc2626" strokeWidth="2" />
      <text x="90" y="213" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">R = 10 cm</text>
      {/* Inner radius line (vertical) */}
      <line x1="20" y1="220" x2="20" y2="136" stroke="#7c3aed" strokeWidth="2" />
      <text x="35" y="178" textAnchor="start" fontSize="11" fontWeight="bold" fill="#7c3aed">r = 6 cm</text>
      {/* Angle label */}
      <path d="M 40 220 A 20 20 0 0 0 20 200" fill="none" stroke="#14532d" strokeWidth="2" />
      <text x="50" y="205" textAnchor="start" fontSize="11" fontWeight="bold" fill="#14532d">90°</text>
      {/* Outer arc label */}
      <text x="165" y="145" textAnchor="start" fontSize="11" fill="#1e3a5f">Outer arc</text>
      {/* Thin wall indicator */}
      <text x="85" y="170" textAnchor="middle" fontSize="10" fill="#64748b">ring</text>
      <text x="85" y="182" textAnchor="middle" fontSize="10" fill="#64748b">width = 4 cm</text>
    </svg>
  );
}

// Q18 — Composite 3D: rectangular prism base + half-cylinder roof
function CompositePrismCylinderDiagram() {
  return (
    <svg viewBox="0 0 340 260" className="w-full" aria-label="Rectangular prism with half-cylinder on top">
      {/* Base rectangular prism (front face) */}
      <rect x="40" y="130" width="200" height="90" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Top face of prism */}
      <polygon points="40,130 90,100 290,100 240,130" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="2" />
      {/* Right face of prism */}
      <polygon points="240,130 290,100 290,190 240,220" fill="#93c5fd" stroke="#1e3a5f" strokeWidth="2" />
      {/* Half-cylinder on top (front semicircle) */}
      <path d="M 40 130 A 100 60 0 0 1 240 130" fill="#bbf7d0" stroke="#14532d" strokeWidth="2.5" />
      {/* Half cylinder back (dashed) */}
      <path d="M 90 100 A 100 60 0 0 1 290 100" fill="none" stroke="#14532d" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Connect half-cyl edges */}
      <line x1="40" y1="130" x2="90" y2="100" stroke="#14532d" strokeWidth="2" />
      <line x1="240" y1="130" x2="290" y2="100" stroke="#14532d" strokeWidth="2" />
      {/* Base width label */}
      <line x1="40" y1="232" x2="240" y2="232" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="40" y1="225" x2="40" y2="239" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="240" y1="225" x2="240" y2="239" stroke="#dc2626" strokeWidth="1.5" />
      <text x="140" y="248" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">20 cm</text>
      {/* Depth label */}
      <line x1="240" y1="232" x2="290" y2="202" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="280" y="228" textAnchor="start" fontSize="11" fontWeight="bold" fill="#7c3aed">10 cm</text>
      {/* Prism height */}
      <line x1="8" y1="130" x2="8" y2="220" stroke="#14532d" strokeWidth="1.5" />
      <line x1="1" y1="130" x2="15" y2="130" stroke="#14532d" strokeWidth="1.5" />
      <line x1="1" y1="220" x2="15" y2="220" stroke="#14532d" strokeWidth="1.5" />
      <text x="4" y="178" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d" transform="rotate(-90,4,178)">8 cm</text>
      {/* Half-cyl radius */}
      <line x1="140" y1="130" x2="140" y2="72" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="148" y="100" textAnchor="start" fontSize="11" fontWeight="bold" fill="#dc2626">r=10</text>
    </svg>
  );
}

// Q19 — Hard: irregular shape requiring 3-part split
function IrregularShapeDiagram() {
  return (
    <svg viewBox="0 0 380 280" className="w-full" aria-label="Irregular composite shape">
      {/*
        Shape:
        Start at (30,240) go right 270px=15cm → (300,240)
        Up 60px=? → (300,180)
        Left 90px=5cm → (210,180)
        Up 90px=5cm → (210,90)
        Left 90px=5cm → (120,90)
        Up 60px → NOT going — instead we go...

        Let me design a cleaner shape:
        An irregular hexagon-ish shape.

        Points (going clockwise from top-left):
        A(30,30)  → B(160,30) : top part, 7cm
        B(160,30) → C(160,110): right drop 4cm
        C(160,110)→ D(280,110): extend right 6cm
        D(280,110)→ E(280,240): drop 7cm
        E(280,240)→ F(30,240) : bottom, 13cm
        F(30,240) → A(30,30) : left side 11cm

        Labeled: AB=7, BC=4, CD=6, DE=7, EF=13, FA=11
        Students need to find the missing inner dimensions.
      */}
      <path
        d="M 30 30 L 165 30 L 165 110 L 285 110 L 285 245 L 30 245 Z"
        fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5"
      />
      {/* Dashed split lines to show how to break it up */}
      <line x1="165" y1="110" x2="165" y2="245" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="30" y1="110" x2="165" y2="110" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* Part labels */}
      <text x="97" y="75" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part A</text>
      <text x="97" y="185" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part B</text>
      <text x="225" y="185" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontStyle="italic">Part C</text>

      {/* AB = 7 cm (top) */}
      <line x1="30" y1="16" x2="165" y2="16" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="30" y1="9" x2="30" y2="23" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="165" y1="9" x2="165" y2="23" stroke="#dc2626" strokeWidth="1.5" />
      <text x="97" y="12" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">7 cm</text>

      {/* BC = 4 cm (right of top part) */}
      <line x1="178" y1="30" x2="178" y2="110" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="171" y1="30" x2="185" y2="30" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="171" y1="110" x2="185" y2="110" stroke="#dc2626" strokeWidth="1.5" />
      <text x="194" y="73" textAnchor="start" fontSize="12" fontWeight="bold" fill="#dc2626">4 cm</text>

      {/* CD = 6 cm (horizontal step) */}
      <line x1="165" y1="97" x2="285" y2="97" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="165" y1="90" x2="165" y2="104" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="285" y1="90" x2="285" y2="104" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="225" y="93" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">6 cm</text>

      {/* DE = 7 cm (right side) */}
      <line x1="300" y1="110" x2="300" y2="245" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="293" y1="110" x2="307" y2="110" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="293" y1="245" x2="307" y2="245" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="316" y="180" textAnchor="start" fontSize="11" fontWeight="bold" fill="#7c3aed">7 cm</text>

      {/* EF = 13 cm (bottom) */}
      <line x1="30" y1="260" x2="285" y2="260" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="30" y1="253" x2="30" y2="267" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="285" y1="253" x2="285" y2="267" stroke="#dc2626" strokeWidth="1.5" />
      <text x="157" y="276" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">13 cm</text>

      {/* FA = 11 cm (left) */}
      <line x1="14" y1="30" x2="14" y2="245" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="7" y1="30" x2="21" y2="30" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="7" y1="245" x2="21" y2="245" stroke="#dc2626" strokeWidth="1.5" />
      <text x="4" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626" transform="rotate(-90,4,140)">11 cm</text>

      {/* Missing dimension hints */}
      <text x="97" y="123" textAnchor="middle" fontSize="10" fill="#64748b">? cm wide</text>
      <text x="97" y="133" textAnchor="middle" fontSize="9" fill="#64748b">(find from given)</text>
    </svg>
  );
}

// Q20 — "Find x" given total area, with composite shape
function FindXDiagram() {
  return (
    <svg viewBox="0 0 300 200" className="w-full" aria-label="Rectangle with unknown side x">
      {/* Main rectangle */}
      <rect x="30" y="20" width="220" height="150" fill="#e0f2fe" stroke="#1e3a5f" strokeWidth="2.5" />
      {/* Inner split line showing two parts */}
      <line x1="140" y1="20" x2="140" y2="170" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* Left part label */}
      <text x="85" y="100" textAnchor="middle" fontSize="12" fill="#1e3a5f">A = 90 cm²</text>
      {/* Right part */}
      <text x="192" y="100" textAnchor="middle" fontSize="11" fill="#14532d" fontStyle="italic">unknown</text>
      {/* Width of left part */}
      <line x1="30" y1="183" x2="140" y2="183" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="30" y1="176" x2="30" y2="190" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="140" y1="176" x2="140" y2="190" stroke="#dc2626" strokeWidth="1.5" />
      <text x="85" y="197" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">9 cm</text>
      {/* Height label */}
      <line x1="262" y1="20" x2="262" y2="170" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="255" y1="20" x2="269" y2="20" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="255" y1="170" x2="269" y2="170" stroke="#dc2626" strokeWidth="1.5" />
      <text x="278" y="97" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626" transform="rotate(-90,278,97)">10 cm</text>
      {/* x label for right part */}
      <line x1="140" y1="183" x2="250" y2="183" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="140" y1="176" x2="140" y2="190" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="250" y1="176" x2="250" y2="190" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="195" y="197" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7c3aed">x cm</text>
      {/* Total area */}
      <text x="192" y="87" textAnchor="middle" fontSize="12" fill="#14532d">Total area</text>
      <text x="192" y="103" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#14532d">= 240 cm²</text>
    </svg>
  );
}

// ─── Sessions ─────────────────────────────────────────────────────────────────

function Session1() {
  return (
    <section id="session-1" className="scroll-mt-28">
      <SessionHeader n={1} title="Area of Basic Shapes" time="20 min" />

      <div className="bg-[#dcfce7] border border-[#86efac] rounded-xl px-5 py-4 mb-6">
        <p className="font-bold text-[#14532d] text-sm mb-2">Key Formulas — Basic Areas</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            { name: "Rectangle", f: "A = l \\times w" },
            { name: "Triangle", f: "A = \\tfrac{1}{2} b h" },
            { name: "Circle", f: "A = \\pi r^2" },
            { name: "Parallelogram", f: "A = b \\times h" },
            { name: "Trapezium", f: "A = \\tfrac{1}{2}(a+b)h" },
            { name: "Sector", f: "A = \\tfrac{\\theta}{360}\\pi r^2" },
          ].map((item) => (
            <div key={item.name} className="bg-white rounded-lg px-3 py-2 border border-[#bbf7d0] text-center">
              <p className="font-semibold text-[#14532d] text-xs mb-1">{item.name}</p>
              <BlockMath math={item.f} />
            </div>
          ))}
        </div>
      </div>

      <SectionBlock code="SECTION 1-1" title="Single Shapes" variant="green">
        <Q n={1}>Find the area of the rectangle below.</Q>
        <DiagramBox caption="Not to scale — use the labeled dimensions">
          <RectangleDiagram />
        </DiagramBox>
        <AnsLine label="Formula:" wide />
        <AnsLine label="Working:" wide />
        <AnsLine label="Area =" wide />

        <Q n={2}>Find the area of the triangle below. The dashed line shows the perpendicular height.</Q>
        <DiagramBox>
          <TriangleDiagram />
        </DiagramBox>
        <AnsLine label="Formula:" wide />
        <AnsLine label="Working:" wide />
        <AnsLine label="Area =" wide />

        <Q n={3}>Find the exact area of the circle below, then give your answer correct to 3 significant figures.</Q>
        <DiagramBox>
          <CircleDiagram />
        </DiagramBox>
        <AnsLine label="Exact area (in terms of π):" wide />
        <AnsLine label="Area (3 s.f.) =" wide />

        <Q n={4}>Find the area of the parallelogram. The dashed vertical line shows the perpendicular height.</Q>
        <DiagramBox>
          <ParallelogramDiagram />
        </DiagramBox>
        <AnsLine label="Formula:" wide />
        <AnsLine label="Working:" wide />
        <AnsLine label="Area =" wide />

        <Q n={5}>Find the area of the trapezium below.</Q>
        <DiagramBox>
          <TrapeziumDiagram />
        </DiagramBox>
        <AnsLine label="Formula:" wide />
        <div className="ml-4 text-sm text-slate-500 italic my-1">
          <InlineMath math="A = \tfrac{1}{2}(a + b) \times h \;=\; \tfrac{1}{2}(" />
          <input type="text" className="border-b-2 border-slate-300 w-8 bg-transparent outline-none mx-1" aria-label="a" />
          <InlineMath math="+\;" />
          <input type="text" className="border-b-2 border-slate-300 w-8 bg-transparent outline-none mx-1" aria-label="b" />
          <InlineMath math=") \times" />
          <input type="text" className="border-b-2 border-slate-300 w-8 bg-transparent outline-none mx-1" aria-label="h" />
        </div>
        <AnsLine label="Area =" wide />
      </SectionBlock>
    </section>
  );
}

function Session2() {
  return (
    <section id="session-2" className="scroll-mt-28">
      <SessionHeader n={2} title="Composite Area — Split, Add & Subtract" time="25 min" />

      <div className="bg-[#fef9c3] border border-[#fde047] rounded-xl px-5 py-4 mb-6">
        <p className="font-bold text-[#713f12] text-sm mb-1">Strategy for Composite Shapes</p>
        <ol className="text-sm text-[#713f12] space-y-0.5 list-decimal ml-4">
          <li>Identify whether you <strong>add</strong> (joining parts) or <strong>subtract</strong> (removing a cutout)</li>
          <li>Find any <em>unlabeled</em> side lengths from the given dimensions</li>
          <li>Calculate each part separately, then combine</li>
        </ol>
      </div>

      <SectionBlock code="SECTION 2-1" title="L-Shape — Addition Method" variant="blue">
        <Q n={6}>
          The shape below is made of two rectangles. The dashed lines show the cutout region.
          Find the total shaded area using <strong>two methods</strong>.
        </Q>
        <DiagramBox caption="Dimensions in cm. Dashed region is NOT part of the shape.">
          <LShapeDiagram />
        </DiagramBox>
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2 mb-3">
          <p className="font-bold text-[#1e40af]">Method 1 — Split into two rectangles (Part A + Part B)</p>
          <AnsLine label="Part A dimensions:" wide />
          <AnsLine label="Part A area:" wide />
          <AnsLine label="Part B dimensions:" wide />
          <AnsLine label="Part B area:" wide />
          <AnsLine label="Total area (A + B):" wide />
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2">
          <p className="font-bold text-[#15803d]">Method 2 — Big rectangle minus cutout</p>
          <AnsLine label="Big rectangle (12 × 9):" wide />
          <AnsLine label="Cutout area (7 × 4):" wide />
          <AnsLine label="Total area (big − cutout):" wide />
        </div>
      </SectionBlock>

      <SectionBlock code="SECTION 2-2" title="Rectangle + Semicircle" variant="teal">
        <Q n={7}>
          The shape below is a rectangle joined with a semicircle on the right end.
          Find the total area. Give your answer to 1 decimal place.
        </Q>
        <DiagramBox>
          <StadiumHalfDiagram />
        </DiagramBox>
        <AnsLine label="Rectangle area:" wide />
        <AnsLine label="Semicircle area (½πr²):" wide />
        <AnsLine label="Total area =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-3" title="Rectangle with Circular Hole — Subtraction" variant="orange">
        <Q n={8}>
          A rectangular piece of metal has a circular hole drilled through it.
          Find the remaining (shaded) area. Give your answer to 3 significant figures.
        </Q>
        <DiagramBox caption="The circle is a hole — subtract its area">
          <RectCircleHoleDiagram />
        </DiagramBox>
        <AnsLine label="Rectangle area:" wide />
        <AnsLine label="Circle area (πr²):" wide />
        <AnsLine label="Shaded area =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-4" title="U-Channel Shape" variant="purple">
        <Q n={9}>
          The U-shape below is formed by removing a rectangular section from the top of a larger rectangle.
          Each side wall is <strong>3 cm wide</strong>.
          Find the shaded area.
        </Q>
        <DiagramBox caption="Inner rectangle width = 14 − 3 − 3 = 8 cm. Find its height.">
          <UShapeDiagram />
        </DiagramBox>
        <AnsLine label="Inner rectangle width:" wide />
        <AnsLine label="Outer rectangle area:" wide />
        <AnsLine label="Inner rectangle area:" wide />
        <AnsLine label="Shaded area =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-5" title="Arrow Shape — Rectangle + Triangle" variant="green">
        <Q n={10}>
          The arrow shape below is made of a rectangle and a right triangle joined together.
          Find the total area.
        </Q>
        <DiagramBox>
          <ArrowShapeDiagram />
        </DiagramBox>
        <AnsLine label="Rectangle area:" wide />
        <AnsLine label="Triangle area (½ × base × height):" wide />
        <AnsLine label="Total area =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 2-6" title="Cross/Plus Shape — Find Missing Lengths First" variant="red">
        <Q n={11}>
          The cross shape has overall dimensions 12 cm × 12 cm. Each arm is 4 cm wide.
          <strong> First</strong> find the missing side lengths, <strong>then</strong> find the total area using your preferred method.
        </Q>
        <DiagramBox caption="Hint: the '?' lengths can be calculated from 12 cm and 4 cm">
          <CrossShapeDiagram />
        </DiagramBox>
        <AnsLine label="Missing horizontal arm length (each side):" wide />
        <AnsLine label="Missing vertical arm length (each side):" wide />
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-1 my-3">
          <p className="font-semibold text-[#991b1b]">Method — large square minus four corner squares</p>
          <AnsLine label="Big 12×12 square area:" wide />
          <AnsLine label="One corner square size:" wide />
          <AnsLine label="Four corner squares area:" wide />
          <AnsLine label="Cross area =" wide />
        </div>
        <p className="text-sm text-slate-500 italic">Alternatively, split into 5 rectangles (centre + 4 arms) and add.</p>
        <AnsLine label="Answer (cross area):" wide />
      </SectionBlock>
    </section>
  );
}

function Session3() {
  return (
    <section id="session-3" className="scroll-mt-28">
      <SessionHeader n={3} title="Volume of 3D Shapes" time="25 min" />

      <div className="bg-[#dcfce7] border border-[#86efac] rounded-xl px-5 py-4 mb-6">
        <p className="font-bold text-[#14532d] text-sm mb-2">Key Formulas — Volume</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            { name: "Rectangular Prism", f: "V = l \\times w \\times h" },
            { name: "Cylinder", f: "V = \\pi r^2 h" },
            { name: "Triangular Prism", f: "V = \\tfrac{1}{2}bh \\times L" },
            { name: "Cone", f: "V = \\tfrac{1}{3}\\pi r^2 h" },
            { name: "Sphere", f: "V = \\tfrac{4}{3}\\pi r^3" },
            { name: "Any prism", f: "V = A_{\\text{cross}} \\times L" },
          ].map((item) => (
            <div key={item.name} className="bg-white rounded-lg px-3 py-2 border border-[#bbf7d0] text-center">
              <p className="font-semibold text-[#14532d] text-xs mb-1">{item.name}</p>
              <BlockMath math={item.f} />
            </div>
          ))}
        </div>
      </div>

      <SectionBlock code="SECTION 3-1" title="Rectangular Prism" variant="green">
        <Q n={12}>Find the volume of the rectangular prism below.</Q>
        <DiagramBox>
          <RectPrismDiagram />
        </DiagramBox>
        <AnsLine label="Formula: V = l × w × h =" wide />
        <AnsLine label="Volume =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-2" title="Cylinder" variant="blue">
        <Q n={13}>Find the volume of the cylinder. Give your answer in exact form (in terms of π) and as a decimal correct to 1 d.p.</Q>
        <DiagramBox>
          <CylinderDiagram />
        </DiagramBox>
        <AnsLine label="Formula: V = πr²h =" wide />
        <AnsLine label="Exact volume (π terms):" wide />
        <AnsLine label="Volume (1 d.p.) =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-3" title="Triangular Prism" variant="teal">
        <Q n={14}>
          Find the volume of the triangular prism. The cross-section is a triangle with base 8 cm and
          perpendicular height 6 cm. The prism length is 12 cm.
        </Q>
        <DiagramBox>
          <TriPrismDiagram />
        </DiagramBox>
        <AnsLine label="Cross-section area (triangle):" wide />
        <AnsLine label="V = A × Length =" wide />
        <AnsLine label="Volume =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 3-4" title="Hollow Cylinder — Subtraction" variant="orange">
        <Q n={15}>
          A hollow cylinder has outer radius R = 9 cm, inner radius r = 5 cm, and height h = 8 cm.
          Find the volume of the material (the solid part only). Give your answer to 3 s.f.
        </Q>
        <DiagramBox caption="Volume of material = Volume of outer cylinder − Volume of inner hole">
          <HollowCylinderDiagram />
        </DiagramBox>
        <AnsLine label="Outer cylinder volume (πR²h):" wide />
        <AnsLine label="Inner cylinder volume (πr²h):" wide />
        <AnsLine label="Volume of material =" wide />
      </SectionBlock>
    </section>
  );
}

function Session4() {
  return (
    <section id="session-4" className="scroll-mt-28">
      <SessionHeader n={4} title="Challenge — Complex Composite Shapes" time="30 min" />

      <div className="bg-[#fee2e2] border border-[#fca5a5] rounded-xl px-5 py-4 mb-6">
        <p className="font-bold text-[#991b1b] text-sm mb-1">Challenge Level — What to expect</p>
        <ul className="text-sm text-[#991b1b] space-y-0.5 list-disc ml-4">
          <li>Some side lengths are <strong>not labeled</strong> — derive them from other given dimensions</li>
          <li>Shapes may require <strong>3 or more parts</strong> to split or subtract</li>
          <li>3D problems may involve composite solids — calculate each piece separately</li>
          <li>Always draw your own sub-diagram and label each part before calculating</li>
        </ul>
      </div>

      <SectionBlock code="SECTION 4-1" title="L-Shape with Missing Dimensions" variant="red">
        <Q n={16}>
          The L-shape below has an overall width of 18 cm and overall height of 12 cm. The top-left
          rectangle portion is 10 cm wide and 6 cm tall. <strong>Find the two missing side lengths first</strong>,
          then calculate the total shaded area.
        </Q>
        <DiagramBox caption="'?' labels indicate dimensions you must calculate from the given information">
          <ComplexLShapeDiagram />
        </DiagramBox>
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2 mb-3">
          <p className="font-semibold text-[#991b1b]">Step 1 — Find missing lengths</p>
          <AnsLine label="Missing horizontal length (right portion width):" wide />
          <AnsLine label="Missing vertical length (right portion height):" wide />
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2 mb-3">
          <p className="font-semibold text-[#991b1b]">Step 2 — Calculate each part</p>
          <AnsLine label="Part A dimensions and area:" wide />
          <AnsLine label="Part B dimensions and area:" wide />
        </div>
        <AnsLine label="Total shaded area =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 4-2" title="Annular Sector (Ring Sector)" variant="purple">
        <Q n={17}>
          The shape below is a quarter of a ring (annular sector). The outer radius is R = 10 cm,
          the inner radius is r = 6 cm, and the angle is 90°.
          Find the area of the shaded region. Give your answer correct to 3 s.f.
        </Q>
        <DiagramBox caption="Shaded area = area of outer sector − area of inner sector">
          <AnnularSectorDiagram />
        </DiagramBox>
        <div className="text-sm text-slate-500 italic mb-3">
          Sector area formula: <InlineMath math="A = \dfrac{\theta}{360} \pi r^2" />
        </div>
        <AnsLine label="Outer sector area (R = 10):" wide />
        <AnsLine label="Inner sector area (r = 6):" wide />
        <AnsLine label="Shaded area =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 4-3" title="Composite 3D — Prism + Half-Cylinder Roof" variant="blue">
        <Q n={18}>
          A storage shed has a rectangular base (20 cm × 10 cm × 8 cm high) with a half-cylindrical roof
          sitting on top. The half-cylinder has the same length (10 cm depth) and a radius of 10 cm
          (spanning the full 20 cm width).
          Find the <strong>total volume</strong> of the shed.
        </Q>
        <DiagramBox caption="Total volume = rectangular prism volume + half-cylinder volume">
          <CompositePrismCylinderDiagram />
        </DiagramBox>
        <AnsLine label="Rectangular prism volume:" wide />
        <AnsLine label="Half-cylinder volume (½πr²L):" wide />
        <AnsLine label="Total volume =" wide />
      </SectionBlock>

      <SectionBlock code="SECTION 4-4" title="Irregular Composite — Three Parts" variant="red">
        <Q n={19}>
          The irregular shape below is formed from three rectangles joined together.
          Given dimensions: top width AB = 7 cm, step height BC = 4 cm, step width CD = 6 cm,
          right height DE = 7 cm, total base EF = 13 cm, left height FA = 11 cm.
          <strong> Find the unlabeled inner dimensions</strong>, then calculate the total area.
        </Q>
        <DiagramBox caption="The dashed lines show how to split into 3 parts">
          <IrregularShapeDiagram />
        </DiagramBox>
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2 mb-3">
          <p className="font-semibold">Step 1 — Identify each part</p>
          <AnsLine label="Part A: top-left rectangle, width = AB = 7, height = ?" wide />
          <p className="text-xs text-slate-500 italic ml-4">Hint: Part A height = FA − (BC + DE) = 11 − (4 + 7) = ?</p>
          <AnsLine label="Part A height =" wide />
          <AnsLine label="Part B: bottom-left rectangle, width = ?, height = (BC + DE) = ?" wide />
          <p className="text-xs text-slate-500 italic ml-4">Part B width = EF − CD = 13 − 6 = ?</p>
          <AnsLine label="Part B width =" wide />
          <AnsLine label="Part C: right rectangle, width = CD = 6, height = DE = 7" wide />
        </div>
        <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2">
          <p className="font-semibold">Step 2 — Compute areas</p>
          <AnsLine label="Part A area:" wide />
          <AnsLine label="Part B area:" wide />
          <AnsLine label="Part C area:" wide />
          <AnsLine label="Total area =" wide />
        </div>
      </SectionBlock>

      <SectionBlock code="SECTION 4-5" title="Find the Unknown Dimension" variant="orange">
        <Q n={20}>
          The diagram shows a rectangle split into two parts. The left part has an area of 90 cm² and
          is 9 cm wide. The total rectangle area is 240 cm². The full height is 10 cm.
          Find the value of <InlineMath math="x" /> (the width of the right part).
        </Q>
        <DiagramBox>
          <FindXDiagram />
        </DiagramBox>
        <div className="text-sm text-slate-600 space-y-1 mb-3">
          <p>Step 1: Find the right part area = Total area − Left area</p>
          <p>Step 2: Use Area = width × height to find x</p>
        </div>
        <AnsLine label="Right part area:" wide />
        <AnsLine label="x = Right area ÷ height =" wide />
        <AnsLine label="x =" wide />
      </SectionBlock>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AreaVolumePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-[#14532d] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/worksheets" className="text-[#86efac] text-xs font-bold uppercase tracking-widest hover:underline">
              ← Worksheets
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-xs bg-[#166534]/80 text-white px-2.5 py-1 rounded-full font-semibold">Mathematics</span>
            <span className="text-xs text-white/50">Geometry — Area & Volume</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Area & Volume Practice</h1>
          <p className="text-[#86efac] text-xl font-medium mb-4 italic">Composite Shapes — Diagrams Included</p>
          <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
            <p className="text-sm font-bold text-white">
              Basic Shapes &nbsp;|&nbsp; Composite (Add/Subtract) &nbsp;|&nbsp; 3D Volume &nbsp;|&nbsp; Challenge Problems
            </p>
            <p className="text-xs text-white/70 italic mt-0.5">
              Every question has a shape diagram • Progressive difficulty • Missing dimensions in hard problems
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <PrintButton />
            <span className="text-xs text-white/40">20 questions across 4 sessions • ~100 min</span>
          </div>
        </div>
      </div>

      {/* Sticky session navigator */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-2 flex gap-2 overflow-x-auto">
          {[
            { id: "session-1", label: "Session 1 — Basic Shapes" },
            { id: "session-2", label: "Session 2 — Composite Area" },
            { id: "session-3", label: "Session 3 — Volume" },
            { id: "session-4", label: "Session 4 — Challenge" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#dcfce7] text-slate-500 hover:text-[#14532d] font-medium transition-colors"
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

        {/* Formula Reference */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-[#14532d] text-white rounded-lg px-5 py-3 mb-5 font-bold text-sm uppercase tracking-wider">
            Quick Formula Reference Sheet
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr>
                  {["Shape", "Area Formula", "Volume Formula"].map((h) => (
                    <th key={h} className="bg-[#14532d] text-white px-4 py-2.5 text-left font-semibold text-xs uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rectangle", "A = l × w", "V = l × w × h"],
                  ["Triangle", "A = ½ × b × h", "—"],
                  ["Circle", "A = πr²", "—"],
                  ["Parallelogram", "A = b × h", "—"],
                  ["Trapezium", "A = ½(a+b)h", "—"],
                  ["Sector", "A = (θ/360)πr²", "—"],
                  ["Cylinder", "A_base = πr²", "V = πr²h"],
                  ["Triangular Prism", "A_tri = ½bh", "V = ½bh × L"],
                  ["Cone", "—", "V = ⅓πr²h"],
                  ["Sphere", "—", "V = (4/3)πr³"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2.5 border border-slate-200 font-semibold text-[#14532d]">{row[0]}</td>
                    <td className="px-4 py-2.5 border border-slate-200 font-mono text-sm text-slate-700">{row[1]}</td>
                    <td className="px-4 py-2.5 border border-slate-200 font-mono text-sm text-slate-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link href="/worksheets" className="text-sm text-slate-500 hover:text-[#14532d] font-medium transition-colors">
            ← All Worksheets
          </Link>
          <p className="text-xs text-slate-400">Area & Volume Practice — Geometry</p>
        </div>
      </div>
    </main>
  );
}
