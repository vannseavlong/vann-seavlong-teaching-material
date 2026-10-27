import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps, Diagram } from "./helpers";

// ─── Topic 3. Quadratic model (booklet 2.5) ───────────────────────────────────

/** y = 2x^2 - 8x + 5, axis x = 2, vertex (2, -3). Scale: 40 px per unit in x, 14 px per unit in y. */
function ParabolaDiagram() {
  const X = (x: number) => 30 + 45 * x;
  const Y = (y: number) => 90 + 14 * y;
  const pts: string[] = [];
  for (let x = -0.4; x <= 4.4; x += 0.2) pts.push(`${X(x)},${Y(2 * x * x - 8 * x + 5)}`);
  return (
    <Diagram caption="y = 2x² − 8x + 5: the axis of symmetry x = 2 passes through the vertex (2, −3), which is the minimum.">
      <svg viewBox="0 0 260 130" width="100%" style={{ maxWidth: 420 }} role="img" aria-label="Parabola with axis of symmetry and vertex">
        <line x1={20} y1={Y(0)} x2={250} y2={Y(0)} stroke="#94a3b8" strokeWidth={1.2} />
        <line x1={X(2)} y1={5} x2={X(2)} y2={125} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="5 4" />
        <polyline points={pts.join(" ")} fill="none" stroke="#2563eb" strokeWidth={2} />
        <circle cx={X(2)} cy={Y(-3)} r={4} fill="#0f172a" />
        <text x={X(2) + 8} y={Y(-3) + 4} fontSize={11} fill="#0f172a">vertex (2, −3)</text>
        <text x={X(2) + 4} y={14} fontSize={11} fill="#dc2626">x = 2</text>
      </svg>
    </Diagram>
  );
}

export default function QuadraticSection() {
  return (
    <LessonSection
      id="quadratic"
      label="Topic 3"
      title="Quadratic Model"
      tag={<SLTag />}
      intro="Use a quadratic when a quantity rises then falls, or falls then rises. The axis of symmetry gives the turning point, and the GDC gives the roots."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          The vertex lies on the axis of symmetry. Find{" "}
          <InlineMath math="x = -\tfrac{b}{2a}" />, substitute it to get the
          y-value, and read it as the maximum (<InlineMath math="a < 0" />) or
          minimum (<InlineMath math="a > 0" />). The quadratic formula is not
          printed in the booklet, so solve{" "}
          <InlineMath math="f(x) = 0" /> on the GDC.
        </p>
      </HighlightBox>

      <FormulaBox title="Graph of a quadratic function (booklet 2.5)">
        <FormulaRow label="Quadratic function" math="f(x) = ax^2 + bx + c" />
        <FormulaRow label="Axis of symmetry" math="x = -\dfrac{b}{2a}" />
        <FormulaRow label="Turning point" math="\left(-\dfrac{b}{2a},\; f\!\left(-\dfrac{b}{2a}\right)\right)" />
        <FormulaRow label="y-intercept" math="f(0) = c" />
      </FormulaBox>

      <ParabolaDiagram />

      <WorkedExample title="For f(x) = 2x² − 8x + 5, find the axis of symmetry, the turning point and the x-intercepts.">
        <StepBox n={1}>
          <InlineMath math="x = -\dfrac{-8}{2(2)} = \boxed{2}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="f(2) = 8 - 16 + 5 = -3" />. Turning point{" "}
          <InlineMath math="\boxed{(2, -3)}" />, a minimum because <InlineMath math="a = 2 > 0" />.
        </StepBox>
        <StepBox n={3}>
          GDC zero: <InlineMath math="x = 0.775" /> and <InlineMath math="x = 3.22" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A ball has height h(t) = −5t² + 20t + 1.5 metres after t seconds. Find the greatest height and when the ball lands.">
        <StepBox n={1}>
          <InlineMath math="t = -\dfrac{20}{2(-5)} = 2" />, and{" "}
          <InlineMath math="h(2) = -20 + 40 + 1.5 = \boxed{21.5\text{ m}}" />.
        </StepBox>
        <StepBox n={2}>
          Solve <InlineMath math="h(t) = 0" /> on the GDC and reject the negative root:{" "}
          <InlineMath math="\boxed{t = 4.07\text{ s}}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A farmer fences a rectangle against a wall using 24 m of fence on
            the other three sides. The sides perpendicular to the wall have
            length <InlineMath math="x" />. (a) Show that the area is{" "}
            <InlineMath math="A = x(24 - 2x)" />. (b) Find the value of{" "}
            <InlineMath math="x" /> that gives the greatest area, and that area.
          </p>
        }
        answer={
          <>
            <p>(a) The side along the wall is <InlineMath math="24 - 2x" />, so <InlineMath math="A = x(24 - 2x)" />.</p>
            <p>(b) <InlineMath math="A = -2x^2 + 24x" />, axis <InlineMath math="x = -\dfrac{24}{2(-2)} = 6" />. <InlineMath math="A(6) = 6(12) = 72\text{ m}^2" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A stall&apos;s daily profit is <InlineMath math="P(x) = -3x^2 + 60x - 100" /> dollars
            when it makes <InlineMath math="x" /> items. (a) Find the number of
            items for maximum profit and that profit. (b) Find the values of{" "}
            <InlineMath math="x" /> where the stall breaks even.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="x = -\dfrac{60}{2(-3)} = 10" />, <InlineMath math="P(10) = -300 + 600 - 100 = \$200" />.</p>
            <p>(b) Solve <InlineMath math="P(x) = 0" /> on the GDC: <InlineMath math="x = 1.84" /> and <InlineMath math="x = 18.2" />.</p>
          </>
        }
      />

      <CalcSteps
        steps={[
          <>Enter the function in <Keys s="Y=" /> and graph with <Keys s="ZOOM 6" /> then adjust <Keys s="WINDOW" />.</>,
          <>Roots: <Keys s="2nd TRACE" /> then <Keys s="2:zero" />. Set left bound, right bound, guess.</>,
          <>Vertex: <Keys s="2nd TRACE" /> then <Keys s="3:minimum" /> or <Keys s="4:maximum" />.</>,
        ]}
      />
    </LessonSection>
  );
}
