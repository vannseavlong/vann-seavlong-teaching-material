import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps, Diagram } from "./helpers";

// ─── Topic 2. Integration, area and the trapezoidal rule (booklet 5.5, 5.8) ───

/** y = x^2 on [0, 2] with 4 trapezoids (h = 0.5). 80 px per unit in x, 36 px per unit in y. */
function TrapezoidDiagram() {
  const X = (x: number) => 20 + 80 * x;
  const Y = (y: number) => 150 - 36 * y;
  const xs = [0, 0.5, 1, 1.5, 2];
  const curve: string[] = [];
  for (let x = 0; x <= 2.001; x += 0.05) curve.push(`${X(x)},${Y(x * x)}`);
  return (
    <Diagram caption="Trapezoidal rule for y = x² on [0, 2] with n = 4 strips of width h = 0.5. Straight tops replace the curve.">
      <svg viewBox="0 0 200 165" width="100%" style={{ maxWidth: 340 }} role="img" aria-label="Four trapezoids under a parabola">
        <line x1={X(0)} y1={Y(0)} x2={X(2) + 10} y2={Y(0)} stroke="#94a3b8" strokeWidth={1.2} />
        {xs.slice(0, 4).map((x, i) => {
          const x2 = xs[i + 1];
          return (
            <polygon key={x} points={`${X(x)},${Y(0)} ${X(x)},${Y(x * x)} ${X(x2)},${Y(x2 * x2)} ${X(x2)},${Y(0)}`} fill="#bfdbfe" fillOpacity={0.7} stroke="#2563eb" strokeWidth={1.2} />
          );
        })}
        <polyline points={curve.join(" ")} fill="none" stroke="#dc2626" strokeWidth={2} />
        {xs.map((x) => (
          <text key={x} x={X(x)} y={Y(0) + 13} fontSize={10} textAnchor="middle" fill="#64748b">{x}</text>
        ))}
      </svg>
    </Diagram>
  );
}

export default function IntegrationSection() {
  return (
    <LessonSection
      id="integration"
      label="Topic 2"
      title="Integration and Area"
      tag={<SLTag />}
      alt
      intro="Integration reverses differentiation and finds the area under a curve. When the integral is hard, the trapezoidal rule gives an estimate."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Raise the power by 1, then divide by the new power. Always add{" "}
          <InlineMath math="+C" /> to an indefinite integral. For a definite
          integral, substitute the upper limit, subtract the lower limit, and
          no constant is needed. The area formula needs{" "}
          <InlineMath math="f(x) > 0" /> on the interval.
        </p>
      </HighlightBox>

      <FormulaBox title="Integral of x^n and area (booklet 5.5)">
        <FormulaRow label="Integral of x^n" math="\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + C, \quad n \ne -1" />
        <FormulaRow label="Area under a curve, f(x) > 0" math="A = \int_a^b y\,dx" />
        <FormulaRow label="Constant multiple and sum" math="\int kx^n\,dx = k\,\dfrac{x^{n+1}}{n+1} + C" />
      </FormulaBox>

      <FormulaBox title="The trapezoidal rule (booklet 5.8)">
        <FormulaRow label="Trapezoidal rule" math="\int_a^b y\,dx \approx \tfrac12 h\bigl((y_0 + y_n) + 2(y_1 + y_2 + \dots + y_{n-1})\bigr)" />
        <FormulaRow label="Strip width" math="h = \dfrac{b - a}{n}" />
      </FormulaBox>

      <TrapezoidDiagram />

      <WorkedExample title="Find ∫(6x² − 4x + 1) dx. Then find f(x) given f′(x) = 4x − 3 and f(2) = 5.">
        <StepBox n={1}>
          <InlineMath math="\int (6x^2 - 4x + 1)\,dx = \boxed{2x^3 - 2x^2 + x + C}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="f(x) = 2x^2 - 3x + C" />. Use <InlineMath math="f(2) = 8 - 6 + C = 5" />, so <InlineMath math="C = 3" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\boxed{f(x) = 2x^2 - 3x + 3}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the area under y = x² + 1 between x = 0 and x = 3.">
        <StepBox n={1}>
          <InlineMath math="A = \int_0^3 (x^2 + 1)\,dx = \left[\dfrac{x^3}{3} + x\right]_0^3" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="= (9 + 3) - (0) = \boxed{12\text{ square units}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Use the trapezoidal rule with 4 strips to estimate ∫₀² x² dx.">
        <StepBox n={1}>
          <InlineMath math="h = \dfrac{2 - 0}{4} = 0.5" />. Heights: 0, 0.25, 1, 2.25, 4.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="\tfrac12(0.5)\bigl((0 + 4) + 2(0.25 + 1 + 2.25)\bigr) = 0.25(4 + 7) = \boxed{2.75}" />
        </StepBox>
        <StepBox n={3}>
          The exact value is <InlineMath math="\tfrac83 = 2.67" />. The estimate is larger because the curve is convex (the straight tops lie above it).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Find the area under <InlineMath math="y = 3x^2 + 2" /> from{" "}
            <InlineMath math="x = 1" /> to <InlineMath math="x = 2" />.
          </p>
        }
        answer={
          <p>
            <InlineMath math="\int_1^2 (3x^2 + 2)\,dx = [x^3 + 2x]_1^2 = (8 + 4) - (1 + 2) = 9" /> square units.
          </p>
        }
      />

      <Practice
        problem={
          <p>
            Use the trapezoidal rule with 3 strips to estimate{" "}
            <InlineMath math="\int_1^4 \sqrt{x}\,dx" />, and compare with the exact value{" "}
            <InlineMath math="\tfrac{14}{3}" />.
          </p>
        }
        answer={
          <>
            <p><InlineMath math="h = 1" />, heights <InlineMath math="1,\ 1.414,\ 1.732,\ 2" />.</p>
            <p><InlineMath math="\tfrac12(1)\bigl((1 + 2) + 2(1.414 + 1.732)\bigr) = 4.65" />.</p>
            <p>Exact value 4.67, so the estimate is an underestimate because the curve is concave.</p>
          </>
        }
      />

      <CalcSteps
        steps={[
          <>Definite integral: press <Keys s="MATH" /> then <Keys s="9:fnInt(" />.</>,
          <>Enter <Keys s="fnInt(function, X, a, b)" /> and press <Keys s="ENTER" />.</>,
          <>Check against the area found by hand, and use the GDC when the integral is not a simple power.</>,
        ]}
      />
    </LessonSection>
  );
}
