import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps, Diagram } from "./helpers";

// ─── Topic 1. Lines in 2D ─────────────────────────────────────────────────────

/** Graph of y = 2x - 2 and y = -x/2 + 3 meeting at (2, 2). 1 unit = 40 px. */
function PerpendicularLinesDiagram() {
  const X = (x: number) => 40 + 40 * x;
  const Y = (y: number) => 180 - 40 * y;
  return (
    <Diagram caption="y = 2x − 2 (gradient 2) and y = −x/2 + 3 (gradient −1/2): 2 × (−1/2) = −1, so the lines are perpendicular.">
      <svg viewBox="0 0 280 200" width="100%" style={{ maxWidth: 420 }} role="img" aria-label="Two perpendicular lines meeting at (2, 2)">
        <line x1={X(0)} y1={Y(0)} x2={X(6)} y2={Y(0)} stroke="#94a3b8" strokeWidth={1.2} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(4.2)} stroke="#94a3b8" strokeWidth={1.2} />
        {[1, 2, 3, 4, 5, 6].map((t) => (
          <text key={`x${t}`} x={X(t)} y={Y(0) + 14} fontSize={10} textAnchor="middle" fill="#64748b">{t}</text>
        ))}
        {[1, 2, 3, 4].map((t) => (
          <text key={`y${t}`} x={X(0) - 8} y={Y(t) + 3} fontSize={10} textAnchor="end" fill="#64748b">{t}</text>
        ))}
        <line x1={X(0.5)} y1={Y(-1)} x2={X(3.1)} y2={Y(4.2)} stroke="#2563eb" strokeWidth={2} />
        <line x1={X(0)} y1={Y(3)} x2={X(6)} y2={Y(0)} stroke="#dc2626" strokeWidth={2} />
        <circle cx={X(2)} cy={Y(2)} r={4} fill="#0f172a" />
        <text x={X(2) + 8} y={Y(2) - 6} fontSize={11} fill="#0f172a">(2, 2)</text>
        <text x={X(3.1) + 4} y={Y(4.2) + 4} fontSize={11} fill="#2563eb">m = 2</text>
        <text x={X(5.2)} y={Y(0.4) - 8} fontSize={11} fill="#dc2626">m = −1/2</text>
      </svg>
    </Diagram>
  );
}

export default function LinesSection() {
  return (
    <LessonSection
      id="lines"
      label="Topic 1"
      title="Lines in 2D"
      tag={<SLTag />}
      intro="Find the equation of a line from two points or from a point and a gradient, decide whether two lines are parallel or perpendicular, and find a midpoint or a distance. The perpendicular bisector built here is the edge of a Voronoi diagram in Topic 6."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          A straight line is fixed by its <strong>gradient</strong> and one
          point on it. Parallel lines have the <strong>same gradient</strong>.
          Perpendicular lines have gradients that <strong>multiply to
          −1</strong>. Rearrange <InlineMath math="ax+by+d=0" /> into{" "}
          <InlineMath math="y=mx+c" /> to read the gradient.
        </p>
      </HighlightBox>

      <FormulaBox title="Gradient and equation of a line">
        <FormulaRow label="Gradient" math="m = \dfrac{y_2 - y_1}{x_2 - x_1}" />
        <FormulaRow label="Gradient-intercept form" math="y = mx + c" />
        <FormulaRow label="Point-gradient form" math="y - y_1 = m(x - x_1)" />
        <FormulaRow label="General form" math="ax + by + d = 0" />
        <FormulaRow label="Gradient from general form" math="m = -\dfrac{a}{b}" />
      </FormulaBox>

      <FormulaBox title="Parallel, perpendicular, midpoint, distance">
        <FormulaRow label="Parallel lines" math="m_1 = m_2" />
        <FormulaRow label="Perpendicular lines" math="m_1 \times m_2 = -1" />
        <FormulaRow label="Midpoint of AB" math="\left(\dfrac{x_1 + x_2}{2},\ \dfrac{y_1 + y_2}{2}\right)" />
        <FormulaRow label="Distance AB" math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
      </FormulaBox>

      <PerpendicularLinesDiagram />

      <WorkedExample title="Find the equation of the line through A(2, 5) and B(6, 13)">
        <StepBox n={1}>
          <InlineMath math="m = \dfrac{13 - 5}{6 - 2} = 2" />
        </StepBox>
        <StepBox n={2}>
          Use A: <InlineMath math="y - 5 = 2(x - 2)" />, so{" "}
          <InlineMath math="\boxed{y = 2x + 1}" />. Check B:{" "}
          <InlineMath math="2(6)+1 = 13" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the line perpendicular to 3x + 4y − 12 = 0 through (3, 2)">
        <StepBox n={1}>
          Gradient of the given line: <InlineMath math="m = -\tfrac{3}{4}" />.
        </StepBox>
        <StepBox n={2}>
          Perpendicular gradient: <InlineMath math="m = \tfrac{4}{3}" />, since{" "}
          <InlineMath math="-\tfrac34 \times \tfrac43 = -1" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="y - 2 = \tfrac43(x - 3)" /> gives{" "}
          <InlineMath math="y = \tfrac43 x - 2" />, so{" "}
          <InlineMath math="\boxed{4x - 3y - 6 = 0}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the midpoint, the distance and the perpendicular bisector of P(−2, 3) and Q(6, 9)">
        <StepBox n={1}>
          Midpoint: <InlineMath math="M = \left(\tfrac{-2+6}{2}, \tfrac{3+9}{2}\right) = \boxed{(2, 6)}" />
        </StepBox>
        <StepBox n={2}>
          Distance: <InlineMath math="PQ = \sqrt{8^2 + 6^2} = \boxed{10}" />
        </StepBox>
        <StepBox n={3}>
          Gradient of PQ: <InlineMath math="\tfrac{6}{8} = \tfrac34" />. The
          bisector is perpendicular, so <InlineMath math="m = -\tfrac43" />,
          and it passes through M.
        </StepBox>
        <StepBox n={4}>
          <InlineMath math="y - 6 = -\tfrac43(x - 2)" /> gives{" "}
          <InlineMath math="\boxed{4x + 3y = 26}" />. Check M:{" "}
          <InlineMath math="8 + 18 = 26" />.
        </StepBox>
      </WorkedExample>

      <CalcSteps
        steps={[
          <>Press <Keys s="y=" /> and enter each line as Y1 and Y2, written as <InlineMath math="y=mx+c" />.</>,
          <>Press <Keys s="graph" />. If the intersection is off screen, use <Keys s="window" /> to change Xmin, Xmax, Ymin, Ymax.</>,
          <>Press <Keys s="2nd trace" /> for CALC, choose 5:intersect, then press <Keys s="enter" /> three times (first curve, second curve, guess).</>,
          <>Read the coordinates at the bottom of the screen. Write them to 3 s.f. unless the question says otherwise.</>,
        ]}
      />

      <Practice
        problem={
          <>
            <p>
              Road A passes through (0, 4) and (6, 1). Road B is perpendicular
              to A and passes through a farm F(4, 1). Units are km.
            </p>
            <p className="mt-2">
              (a) Find the equation of road A. (b) Find the equation of road
              B. (c) Find the coordinates of the junction J where the roads
              meet. (d) Calculate the distance FJ.
            </p>
          </>
        }
        answer={
          <>
            <p>(a) <InlineMath math="m = \tfrac{1-4}{6-0} = -\tfrac12" />, so <InlineMath math="y = -\tfrac12 x + 4" />.</p>
            <p>(b) <InlineMath math="m = 2" />. <InlineMath math="y - 1 = 2(x - 4)" />, so <InlineMath math="y = 2x - 7" />.</p>
            <p>(c) <InlineMath math="-\tfrac12 x + 4 = 2x - 7" /> gives <InlineMath math="x = 4.4" />, <InlineMath math="y = 1.8" />. J = (4.4, 1.8).</p>
            <p>(d) <InlineMath math="FJ = \sqrt{0.4^2 + 0.8^2} = \sqrt{0.8} = 0.894\text{ km}" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A fence follows the line <InlineMath math="5x + 2y = 10" />. A
            second fence is parallel to it and passes through (4, −1). Find
            its equation in the form <InlineMath math="ax + by + d = 0" />.
          </p>
        }
        answer={
          <>
            <p>Gradient of the first fence: <InlineMath math="m = -\tfrac52" />. The parallel fence has the same gradient.</p>
            <p><InlineMath math="y + 1 = -\tfrac52(x - 4)" /> gives <InlineMath math="y = -\tfrac52 x + 9" />.</p>
            <p>Multiply by 2: <InlineMath math="\boxed{5x + 2y - 18 = 0}" />. Check (4, −1): <InlineMath math="20 - 2 - 18 = 0" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
