import type { ReactNode } from "react";

// Generic lesson helpers are shared with AI Unit 1; only the SL tag differs.
export {
  FormulaBox,
  FormulaRow,
  StepBox,
  WorkedExample,
  Practice,
  LessonSection,
  Keys,
  CalcSteps,
} from "../../../unit-1/lesson/_sections/helpers";

export function SLTag() {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-ai-light text-ai-text">
      SL
    </span>
  );
}

/** Frame for an inline SVG visual. Colour is allowed inside visuals only. */
export function Diagram({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="visual my-5 rounded-xl border border-slate-200 bg-white p-4 flex flex-col items-center">
      {children}
      <figcaption className="mt-2 text-xs text-slate-500 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Small square marking a right angle at (x, y); dx and dy point along the two arms. */
export function RightAngleMark({
  x,
  y,
  dx = 1,
  dy = -1,
  size = 10,
}: {
  x: number;
  y: number;
  dx?: 1 | -1;
  dy?: 1 | -1;
  size?: number;
}) {
  const a = `${x + dx * size},${y}`;
  const b = `${x + dx * size},${y + dy * size}`;
  const c = `${x},${y + dy * size}`;
  return (
    <polyline points={`${a} ${b} ${c}`} fill="none" stroke="currentColor" strokeWidth={1.2} />
  );
}
