import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── Topic 3. Stationary points and optimisation ──────────────────────────────

export default function ApplicationsSection() {
  return (
    <LessonSection
      id="applications"
      label="Topic 3"
      title="Stationary Points and Optimisation"
      tag={<SLTag />}
      intro="Set the derivative to zero to find turning points, decide whether each is a maximum or minimum, and use this to find the best value in a context."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          At a stationary point the gradient is zero:{" "}
          <InlineMath math="f'(x) = 0" />. If <InlineMath math="f'" /> changes
          from positive to negative it is a <strong>maximum</strong>, from
          negative to positive a <strong>minimum</strong>. To optimise: write
          one quantity as a function of one variable, differentiate, solve{" "}
          <InlineMath math="f'(x) = 0" />, then answer the question asked.
        </p>
      </HighlightBox>

      <FormulaBox title="Stationary points (builds on booklet 5.3)">
        <FormulaRow label="Stationary point" math="f'(x) = 0" />
        <FormulaRow label="Maximum" math="f' \text{ changes } + \to -" />
        <FormulaRow label="Minimum" math="f' \text{ changes } - \to +" />
        <FormulaRow label="Optimisation steps" math="\text{model} \to f'(x) = 0 \to \text{check} \to \text{answer}" />
      </FormulaBox>

      <WorkedExample title="Find and classify the stationary points of f(x) = x³ − 6x² + 9x + 2.">
        <StepBox n={1}>
          <InlineMath math="f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)" />, so{" "}
          <InlineMath math="x = 1" /> or <InlineMath math="x = 3" />.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="f(1) = 1 - 6 + 9 + 2 = 6" /> and <InlineMath math="f(3) = 27 - 54 + 27 + 2 = 2" />.
        </StepBox>
        <StepBox n={3}>
          Sign of <InlineMath math="f'" />: positive for <InlineMath math="x < 1" />, negative for{" "}
          <InlineMath math="1 < x < 3" />, positive for <InlineMath math="x > 3" />. So{" "}
          <InlineMath math="\boxed{(1, 6) \text{ is a maximum}}" /> and{" "}
          <InlineMath math="\boxed{(3, 2) \text{ is a minimum}}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A farmer has 60 m of fence for three sides of a rectangle against a wall. Find the dimensions for the greatest area.">
        <StepBox n={1}>
          Let the sides at right angles to the wall be <InlineMath math="x" />. Then <InlineMath math="A = x(60 - 2x) = 60x - 2x^2" />.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="A' = 60 - 4x = 0 \Rightarrow x = 15" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="A'" /> changes from positive to negative, so this is a maximum. The side along the wall is{" "}
          <InlineMath math="60 - 30 = 30" />. Dimensions <InlineMath math="\boxed{15\text{ m} \times 30\text{ m}}" />, area{" "}
          <InlineMath math="450\text{ m}^2" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A ball&apos;s height is <InlineMath math="h = -5t^2 + 30t" /> metres.
            Find the time of greatest height and the greatest height.
          </p>
        }
        answer={
          <p>
            <InlineMath math="h' = -10t + 30 = 0 \Rightarrow t = 3\text{ s}" />.{" "}
            <InlineMath math="h(3) = -45 + 90 = 45\text{ m}" />.
          </p>
        }
      />

      <Practice
        problem={
          <p>
            The cost per item of making <InlineMath math="x" /> items is{" "}
            <InlineMath math="C(x) = 0.5x^2 - 20x + 300" /> dollars. Find the
            number of items that gives the least cost and that cost.
          </p>
        }
        answer={
          <p>
            <InlineMath math="C' = x - 20 = 0 \Rightarrow x = 20" />. <InlineMath math="C'" /> goes from negative to positive, so it is a minimum.{" "}
            <InlineMath math="C(20) = 200 - 400 + 300 = \$100" />.
          </p>
        }
      />
    </LessonSection>
  );
}
