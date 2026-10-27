import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Diagram } from "./helpers";

// ─── Topic 1. Derivative of x^n (booklet 5.3) ─────────────────────────────────

/** y = x^2 - 3x + 1 with tangent y = x - 3 at (2, -1). 40 px per unit in x, 25 px per unit in y. */
function TangentDiagram() {
  const X = (x: number) => 20 + 40 * x;
  const Y = (y: number) => 60 + 25 * (1 - y) - 25 * 2;
  const pts: string[] = [];
  for (let x = -0.2; x <= 3.4; x += 0.1) pts.push(`${X(x)},${Y(x * x - 3 * x + 1)}`);
  return (
    <Diagram caption="The tangent at x = 2 touches the curve y = x² − 3x + 1 at (2, −1). Its gradient is f′(2) = 1.">
      <svg viewBox="0 0 180 110" width="100%" style={{ maxWidth: 340 }} role="img" aria-label="Curve with tangent line">
        <polyline points={pts.join(" ")} fill="none" stroke="#2563eb" strokeWidth={2} />
        <line x1={X(0.8)} y1={Y(0.8 - 3)} x2={X(3.4)} y2={Y(3.4 - 3)} stroke="#dc2626" strokeWidth={1.8} />
        <circle cx={X(2)} cy={Y(-1)} r={4} fill="#0f172a" />
        <text x={X(2) + 6} y={Y(-1) + 14} fontSize={11} fill="#0f172a">(2, −1)</text>
      </svg>
    </Diagram>
  );
}

export default function DerivativeSection() {
  return (
    <LessonSection
      id="derivative"
      label="Topic 1"
      title="Derivative of x^n"
      tag={<SLTag />}
      intro="The derivative gives the gradient of a curve at any point, which is the instantaneous rate of change. It also gives the equation of a tangent or normal."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Multiply by the power, then reduce the power by 1. Apply this to each
          term. A constant differentiates to 0 and{" "}
          <InlineMath math="kx" /> to <InlineMath math="k" />. Rewrite{" "}
          <InlineMath math="\tfrac{1}{x^2}" /> as <InlineMath math="x^{-2}" /> and{" "}
          <InlineMath math="\sqrt{x}" /> as <InlineMath math="x^{1/2}" /> first.{" "}
          <InlineMath math="f'(x) > 0" /> means increasing,{" "}
          <InlineMath math="f'(x) < 0" /> means decreasing.
        </p>
      </HighlightBox>

      <FormulaBox title="Derivative of x^n (booklet 5.3)">
        <FormulaRow label="Derivative of x^n" math="f(x) = x^n \Rightarrow f'(x) = nx^{n-1}" />
        <FormulaRow label="Constant multiple and sum" math="f(x) = kx^n \Rightarrow f'(x) = knx^{n-1}" />
        <FormulaRow label="Gradient at x = a" math="m = f'(a)" />
      </FormulaBox>

      <FormulaBox title="Tangent and normal (uses booklet 2.1)">
        <FormulaRow label="Tangent at (a, f(a))" math="y - f(a) = f'(a)(x - a)" />
        <FormulaRow label="Normal gradient" math="m_{\text{normal}} = -\dfrac{1}{f'(a)}" />
      </FormulaBox>

      <TangentDiagram />

      <WorkedExample title="Differentiate f(x) = 3x⁴ − 2x² + 5x − 7 and find the gradient at x = 1.">
        <StepBox n={1}>
          <InlineMath math="f'(x) = 12x^3 - 4x + 5" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="f'(1) = 12 - 4 + 5 = \boxed{13}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the equations of the tangent and the normal to f(x) = x² − 3x + 1 at x = 2.">
        <StepBox n={1}>
          <InlineMath math="f(2) = 4 - 6 + 1 = -1" /> and <InlineMath math="f'(x) = 2x - 3" />, so <InlineMath math="f'(2) = 1" />.
        </StepBox>
        <StepBox n={2}>
          Tangent: <InlineMath math="y + 1 = 1(x - 2) \Rightarrow \boxed{y = x - 3}" />.
        </StepBox>
        <StepBox n={3}>
          Normal gradient <InlineMath math="-1" />: <InlineMath math="y + 1 = -(x - 2) \Rightarrow \boxed{y = -x + 1}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Differentiate f(x) = 4/x² and find f′(2).">
        <StepBox n={1}>
          <InlineMath math="f(x) = 4x^{-2} \Rightarrow f'(x) = -8x^{-3} = -\dfrac{8}{x^3}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="f'(2) = -\dfrac{8}{8} = \boxed{-1}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A particle&apos;s displacement is <InlineMath math="s = t^3 - 6t^2" /> metres
            after <InlineMath math="t" /> seconds. The velocity is{" "}
            <InlineMath math="v = \dfrac{ds}{dt}" />. (a) Find <InlineMath math="v" />.
            (b) Find <InlineMath math="v" /> at <InlineMath math="t = 1" />. (c) When is the
            particle momentarily at rest (<InlineMath math="t > 0" />)?
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="v = 3t^2 - 12t" />.</p>
            <p>(b) <InlineMath math="v(1) = 3 - 12 = -9\text{ m/s}" /> (moving backwards).</p>
            <p>(c) <InlineMath math="3t^2 - 12t = 3t(t - 4) = 0" />, so <InlineMath math="t = 4\text{ s}" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            Find the values of <InlineMath math="x" /> for which{" "}
            <InlineMath math="f(x) = x^3 - 3x" /> is decreasing.
          </p>
        }
        answer={
          <p>
            <InlineMath math="f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)" />. Decreasing when{" "}
            <InlineMath math="f'(x) < 0" />, so <InlineMath math="-1 < x < 1" />.
          </p>
        }
      />
    </LessonSection>
  );
}
