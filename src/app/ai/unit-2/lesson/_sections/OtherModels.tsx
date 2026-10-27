import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── Topic 5. Other models and graph features ─────────────────────────────────

export default function OtherModelsSection() {
  return (
    <LessonSection
      id="other-models"
      label="Topic 5"
      title="Other Models and Graph Features"
      tag={<SLTag />}
      intro="Cubic, sinusoidal, piecewise and variation models, and how to choose between them from the shape of the data. Set the GDC to DEGREE mode for sinusoidal models."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Pick the model from the shape: a repeating wave is sinusoidal, a curve
          with two turning points is cubic, a curve that falls towards an axis
          is inverse variation. None of these formulas are in the booklet, so
          learn the parameter meanings below.
        </p>
      </HighlightBox>

      <FormulaBox title="Sinusoidal model">
        <FormulaRow label="Model" math="f(x) = a\sin\bigl(b(x - c)\bigr) + d" />
        <FormulaRow label="Amplitude" math="|a|" />
        <FormulaRow label="Period (degrees)" math="\dfrac{360}{b}" />
        <FormulaRow label="Principal axis" math="y = d" />
        <FormulaRow label="Maximum, minimum" math="d + |a|,\; d - |a|" />
      </FormulaBox>

      <FormulaBox title="Cubic, variation and piecewise">
        <FormulaRow label="Cubic" math="f(x) = ax^3 + bx^2 + cx + d \;\text{(up to 3 roots, 2 turning points)}" />
        <FormulaRow label="Direct variation" math="y = kx" />
        <FormulaRow label="Inverse variation" math="y = \dfrac{k}{x}" />
        <FormulaRow label="Piecewise" math="\text{use the rule whose condition the input satisfies}" />
      </FormulaBox>

      <WorkedExample title="The tide height is h = 3 sin(30(t − 2)) + 5 metres, t in hours after midnight. Find the amplitude, period, greatest and least height, and the first time h = 6.">
        <StepBox n={1}>
          Amplitude <InlineMath math="3" />, period <InlineMath math="\dfrac{360}{30} = 12" /> hours.
        </StepBox>
        <StepBox n={2}>
          Principal axis <InlineMath math="y = 5" />, so greatest <InlineMath math="8\text{ m}" /> and least <InlineMath math="2\text{ m}" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\sin(30(t-2)) = \tfrac13 \Rightarrow 30(t - 2) = 19.47" />, so{" "}
          <InlineMath math="\boxed{t = 2.65\text{ hours}}" /> (GDC intersect gives the same).
        </StepBox>
      </WorkedExample>

      <WorkedExample title="y varies inversely with x. When x = 4, y = 15. Find y when x = 10.">
        <StepBox n={1}>
          <InlineMath math="k = xy = 4 \times 15 = 60" />, so <InlineMath math="y = \dfrac{60}{x}" />.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="y = \dfrac{60}{10} = \boxed{6}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Monthly temperature is modelled by <InlineMath math="T = 8\cos(30t) + 14" /> degrees
            Celsius, <InlineMath math="t" /> in months. State the amplitude,
            period, principal axis, and the highest and lowest temperature.
          </p>
        }
        answer={
          <p>
            Amplitude 8. Period <InlineMath math="360 \div 30 = 12" /> months.
            Principal axis <InlineMath math="T = 14" />. Highest{" "}
            <InlineMath math="14 + 8 = 22" />°C, lowest <InlineMath math="14 - 8 = 6" />°C.
          </p>
        }
      />

      <Practice
        problem={
          <p>
            A parking fee is <InlineMath math="f(x) = 2x + 1" /> dollars for{" "}
            <InlineMath math="x < 3" /> hours and <InlineMath math="f(x) = 10 - x" /> for{" "}
            <InlineMath math="x \ge 3" /> (a discount applies). Find{" "}
            <InlineMath math="f(1)" />, <InlineMath math="f(3)" /> and <InlineMath math="f(5)" />.
          </p>
        }
        answer={
          <p>
            <InlineMath math="f(1) = 2(1) + 1 = 3" />. <InlineMath math="3 \ge 3" />, so use the second rule:{" "}
            <InlineMath math="f(3) = 10 - 3 = 7" />. <InlineMath math="f(5) = 10 - 5 = 5" />.
          </p>
        }
      />
    </LessonSection>
  );
}
