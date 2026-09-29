import React from "react";

// ─── Visual spec (data-driven so PRACTICE_DATA stays plain data) ──────────────
// Unknown quantities are shown as "?" — visuals never reveal a model answer.

export type Visual =
  | {
      kind: "exchange-board";
      title: string;
      base: string;
      rows: { code: string; name: string; rate: string }[];
    }
  | {
      kind: "passbook";
      bank: string;
      holder: string;
      rows: { label: string; value: string; unknown?: boolean }[];
    }
  | {
      kind: "bars";
      title: string;
      /** value = null renders a dashed "?" bar */
      bars: { label: string; value: number | null }[];
    }
  | {
      kind: "offers";
      caption: string;
      offers: { name: string; rate: string; type: string }[];
    }
  | {
      kind: "tvm";
      title: string;
      /** value = null renders the highlighted unknown field */
      fields: { name: string; value: string | null }[];
    }
  | {
      kind: "receipt";
      title: string;
      lines: { label: string; value: string; unknown?: boolean }[];
    }
  | {
      kind: "timeline";
      /** nodes.length === stages.length + 1; "?" marks an unknown value */
      nodes: string[];
      stages: { title: string; detail: string }[];
    }
  | { kind: "growth-goal" }
  | { kind: "invest-vs-car" };

const money = (v: number) =>
  "$" + v.toLocaleString("en-US", { maximumFractionDigits: 0 });

function Frame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="mb-5 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
      <figcaption className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-4 pt-3">
        {label}
      </figcaption>
      <div className="p-4">{children}</div>
    </figure>
  );
}

// ─── Exchange rate board ──────────────────────────────────────────────────────

function ExchangeBoard({
  v,
}: {
  v: Extract<Visual, { kind: "exchange-board" }>;
}) {
  return (
    <Frame label="Exchange board">
      <div className="rounded-lg bg-navy-900 text-white overflow-hidden max-w-md mx-auto">
        <div className="px-5 py-3 border-b border-white/15 flex items-center justify-between">
          <span className="font-bold">{v.title}</span>
          <span className="text-xs font-semibold bg-ai-primary px-2 py-0.5 rounded">
            1 {v.base} =
          </span>
        </div>
        {v.rows.map((r) => (
          <div
            key={r.code}
            className="flex items-center gap-4 px-5 py-2.5 border-b border-white/10 last:border-0"
          >
            <span className="font-mono font-bold text-sm w-12 text-ai-light">
              {r.code}
            </span>
            <span className="text-sm text-white/70 flex-1">{r.name}</span>
            <span className="font-mono font-bold tabular-nums">{r.rate}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ─── Bank passbook ────────────────────────────────────────────────────────────

function Passbook({ v }: { v: Extract<Visual, { kind: "passbook" }> }) {
  return (
    <Frame label="Savings passbook">
      <div className="max-w-md mx-auto rounded-xl bg-gradient-to-br from-ai-dark to-navy-900 text-white p-5 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="font-extrabold tracking-wide">{v.bank}</span>
          <span className="text-[10px] uppercase tracking-widest text-ai-light">
            Fixed deposit
          </span>
        </div>
        <p className="text-xs text-white/60 mb-3">Account holder: {v.holder}</p>
        <dl className="space-y-1.5">
          {v.rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between text-sm border-b border-white/10 pb-1.5"
            >
              <dt className="text-white/75">{r.label}</dt>
              <dd
                className={
                  r.unknown
                    ? "font-mono font-extrabold bg-warn-primary text-navy-900 px-2.5 rounded"
                    : "font-mono font-bold tabular-nums"
                }
              >
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Frame>
  );
}

// ─── Depreciation bars ────────────────────────────────────────────────────────

function Bars({ v }: { v: Extract<Visual, { kind: "bars" }> }) {
  const known = v.bars.filter((b) => b.value !== null) as {
    label: string;
    value: number;
  }[];
  const max = Math.max(...known.map((b) => b.value));
  return (
    <Frame label={v.title}>
      <div className="flex items-end justify-center gap-3 sm:gap-5 h-44">
        {v.bars.map((b) => {
          const pct = b.value === null ? 55 : (b.value / max) * 100;
          return (
            <div
              key={b.label}
              className="flex flex-col items-center justify-end h-full w-16 sm:w-20"
            >
              <span className="text-xs font-bold text-navy-900 mb-1 tabular-nums">
                {b.value === null ? "?" : money(b.value)}
              </span>
              <div
                className={`w-full rounded-t-md ${
                  b.value === null
                    ? "border-2 border-dashed border-warn-primary bg-warn-light"
                    : "bg-ai-primary"
                }`}
                style={{ height: `${pct * 0.78}%` }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-3 sm:gap-5 mt-2 border-t border-slate-200 pt-2">
        {v.bars.map((b) => (
          <span
            key={b.label}
            className="w-16 sm:w-20 text-center text-xs font-semibold text-slate-500"
          >
            {b.label}
          </span>
        ))}
      </div>
    </Frame>
  );
}

// ─── Two competing offers ─────────────────────────────────────────────────────

function Offers({ v }: { v: Extract<Visual, { kind: "offers" }> }) {
  return (
    <Frame label={v.caption}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {v.offers.map((o, i) => (
          <div
            key={o.name}
            className={`rounded-xl border-2 p-4 text-center bg-white ${
              i === 0 ? "border-aa-light" : "border-ai-light"
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                i === 0 ? "text-aa-primary" : "text-ai-primary"
              }`}
            >
              {o.name}
            </p>
            <p className="text-3xl font-extrabold text-navy-900">{o.rate}</p>
            <p className="text-xs text-slate-500 mt-1">{o.type}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ─── GDC TVM Solver screen ────────────────────────────────────────────────────

function TVMScreen({ v }: { v: Extract<Visual, { kind: "tvm" }> }) {
  return (
    <Frame label="GDC — Finance app">
      <div className="max-w-sm mx-auto rounded-lg bg-[#d7e0c8] border-4 border-slate-500 p-3 font-mono text-sm text-navy-900 shadow-inner">
        <p className="text-center font-bold text-xs mb-2 tracking-widest">
          {v.title}
        </p>
        {v.fields.map((f) => (
          <div
            key={f.name}
            className={`flex justify-between px-2 py-0.5 ${
              f.value === null ? "bg-navy-900 text-white font-bold" : ""
            }`}
          >
            <span>{f.name} =</span>
            <span className="tabular-nums">{f.value ?? "?"}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ─── Receipt ──────────────────────────────────────────────────────────────────

function Receipt({ v }: { v: Extract<Visual, { kind: "receipt" }> }) {
  return (
    <Frame label="Receipt">
      <div className="max-w-xs mx-auto bg-white border border-dashed border-slate-400 rounded-md px-5 py-4 font-mono text-sm shadow-sm">
        <p className="text-center font-bold text-navy-900 mb-3 border-b border-dashed border-slate-300 pb-2">
          {v.title}
        </p>
        {v.lines.map((l) => (
          <div key={l.label} className="flex justify-between py-0.5">
            <span className="text-slate-500">{l.label}</span>
            <span
              className={
                l.unknown
                  ? "font-extrabold bg-warn-primary text-navy-900 px-2 rounded"
                  : "font-bold text-navy-900 tabular-nums"
              }
            >
              {l.value}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function Timeline({ v }: { v: Extract<Visual, { kind: "timeline" }> }) {
  return (
    <Frame label="Timeline">
      <div className="flex flex-col sm:flex-row sm:items-stretch items-center justify-center gap-2">
        {v.nodes.map((n, i) => (
          <React.Fragment key={i}>
            <div
              className={`shrink-0 rounded-full min-w-20 px-3 h-14 flex items-center justify-center text-sm font-extrabold ${
                n === "?"
                  ? "bg-warn-light border-2 border-dashed border-warn-primary text-warn-text"
                  : "bg-navy-900 text-white"
              }`}
            >
              {n}
            </div>
            {v.stages[i] && (
              <div className="flex-1 flex flex-col items-center justify-center text-center min-w-32">
                <p className="text-xs font-bold text-ai-dark">
                  {v.stages[i].title}
                </p>
                <div className="w-full flex items-center text-ai-primary">
                  <div className="h-0.5 flex-1 bg-current" />
                  <span aria-hidden className="-ml-1 leading-none">
                    ▶
                  </span>
                </div>
                <p className="text-xs text-slate-500">{v.stages[i].detail}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Frame>
  );
}

// ─── Growth curve with a savings goal ─────────────────────────────────────────

function GrowthGoal() {
  const W = 560,
    H = 250,
    L = 58,
    R = 24,
    T = 20,
    B = 40;
  const years = Array.from({ length: 9 }, (_, n) => n);
  const yMin = 3000,
    yMax = 4500;
  const X = (n: number) => L + (n / 8) * (W - L - R);
  const Y = (val: number) => T + (1 - (val - yMin) / (yMax - yMin)) * (H - T - B);
  const pts = years.map((n) => [X(n), Y(3000 * 1.05 ** n)] as const);
  return (
    <Frame label="Savings growth — $3,000 at 5% p.a., compounded annually">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Line chart of an investment growing from 3,000 dollars over 8 years, with a dashed goal line at 4,000 dollars"
        className="w-full max-w-xl mx-auto"
      >
        {[3000, 3500, 4000, 4500].map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={Y(t)} y2={Y(t)} className="stroke-slate-200" />
            <text x={L - 8} y={Y(t) + 4} textAnchor="end" className="fill-slate-500 text-[11px]">
              {money(t)}
            </text>
          </g>
        ))}
        {years.map((n) => (
          <text key={n} x={X(n)} y={H - 20} textAnchor="middle" className="fill-slate-500 text-[11px]">
            {n}
          </text>
        ))}
        <text x={(L + W - R) / 2} y={H - 4} textAnchor="middle" className="fill-slate-500 text-[11px] font-semibold">
          Years
        </text>
        <line
          x1={L}
          x2={W - R}
          y1={Y(4000)}
          y2={Y(4000)}
          strokeDasharray="6 4"
          strokeWidth={2}
          className="stroke-danger-primary"
        />
        <text x={L + 6} y={Y(4000) - 6} className="fill-danger-text text-[11px] font-bold">
          Goal: $4,000
        </text>
        <polyline
          points={pts.map((p) => p.join(",")).join(" ")}
          fill="none"
          strokeWidth={3}
          className="stroke-ai-primary"
        />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={4} className="fill-ai-primary stroke-white" />
        ))}
      </svg>
    </Frame>
  );
}

// ─── Investment vs. depreciating car ──────────────────────────────────────────

function InvestVsCar() {
  const W = 560,
    H = 270,
    L = 58,
    R = 30,
    T = 20,
    B = 40;
  const years = Array.from({ length: 7 }, (_, n) => n);
  const yMax = 32000;
  const X = (n: number) => L + (n / 6) * (W - L - R);
  const Y = (val: number) => T + (1 - val / yMax) * (H - T - B);
  const inv = years.map((n) => [X(n), Y(22000 * 1.0125 ** (4 * n))] as const);
  const car = years.map((n) => [X(n), Y(22000 * 0.86 ** n)] as const);
  const [ex, eyInv] = inv[6];
  const eyCar = car[6][1];
  return (
    <Frame label="Same $22,000 — two choices">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Two curves starting at 22,000 dollars: an investment that grows and a car that loses value, with the gap after 6 years marked by a question mark"
        className="w-full max-w-xl mx-auto"
      >
        {[0, 8000, 16000, 24000, 32000].map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={Y(t)} y2={Y(t)} className="stroke-slate-200" />
            <text x={L - 8} y={Y(t) + 4} textAnchor="end" className="fill-slate-500 text-[11px]">
              {money(t)}
            </text>
          </g>
        ))}
        {years.map((n) => (
          <text key={n} x={X(n)} y={H - 20} textAnchor="middle" className="fill-slate-500 text-[11px]">
            {n}
          </text>
        ))}
        <text x={(L + W - R) / 2} y={H - 4} textAnchor="middle" className="fill-slate-500 text-[11px] font-semibold">
          Years
        </text>
        <polyline points={inv.map((p) => p.join(",")).join(" ")} fill="none" strokeWidth={3} className="stroke-ai-primary" />
        <polyline points={car.map((p) => p.join(",")).join(" ")} fill="none" strokeWidth={3} className="stroke-danger-primary" />
        <line x1={ex} x2={ex} y1={eyInv} y2={eyCar} strokeDasharray="4 3" strokeWidth={2} className="stroke-navy-900" />
        <circle cx={ex} cy={(eyInv + eyCar) / 2} r={11} className="fill-warn-primary" />
        <text x={ex} y={(eyInv + eyCar) / 2 + 5} textAnchor="middle" className="fill-navy-900 text-[14px] font-extrabold">
          ?
        </text>
        <text x={X(3.2)} y={Y(22000 * 1.0125 ** 12) - 12} className="fill-ai-dark text-[12px] font-bold">
          Investment: 5% p.a., quarterly
        </text>
        <text x={X(2.6)} y={Y(22000 * 0.86 ** 2.6) + 24} className="fill-danger-text text-[12px] font-bold">
          Car: loses 14% p.a.
        </text>
      </svg>
    </Frame>
  );
}

// ─── Public renderer ──────────────────────────────────────────────────────────

export function ProblemVisual({ visual }: { visual: Visual }) {
  switch (visual.kind) {
    case "exchange-board":
      return <ExchangeBoard v={visual} />;
    case "passbook":
      return <Passbook v={visual} />;
    case "bars":
      return <Bars v={visual} />;
    case "offers":
      return <Offers v={visual} />;
    case "tvm":
      return <TVMScreen v={visual} />;
    case "receipt":
      return <Receipt v={visual} />;
    case "timeline":
      return <Timeline v={visual} />;
    case "growth-goal":
      return <GrowthGoal />;
    case "invest-vs-car":
      return <InvestVsCar />;
  }
}
