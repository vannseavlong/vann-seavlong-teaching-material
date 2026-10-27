import Link from "next/link";
import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps } from "./helpers";

// ─── Topic 2. Linear model (booklet 2.1) ──────────────────────────────────────

export default function LinearModelSection() {
  return (
    <LessonSection
      id="linear-model"
      label="Topic 2"
      title="Linear Model"
      tag={<SLTag />}
      alt
      intro="A constant rate of change gives a straight-line model. The gradient is the rate, the y-intercept is the starting value."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          In <InlineMath math="y = mx + c" />, <InlineMath math="m" /> is the
          change in y for each 1 unit of x (always give its units), and{" "}
          <InlineMath math="c" /> is the value when <InlineMath math="x = 0" />.
          Finding a line from two points and the perpendicular and parallel
          conditions are in{" "}
          <Link href="/ai/unit-3/lesson#lines" className="text-ai-primary underline">
            Unit 3, Lines in 2D
          </Link>
          .
        </p>
      </HighlightBox>

      <FormulaBox title="Equations of a straight line (booklet 2.1)">
        <FormulaRow label="Gradient form" math="y = mx + c" />
        <FormulaRow label="General form" math="ax + by + d = 0" />
        <FormulaRow label="Point-gradient form" math="y - y_1 = m(x - x_1)" />
        <FormulaRow label="Gradient formula" math="m = \dfrac{y_2 - y_1}{x_2 - x_1}" />
      </FormulaBox>

      <WorkedExample title="A taxi charges a fixed $3.50 plus $1.80 per km. (a) Write the fare model. (b) Find the fare for 14 km. (c) Find the distance for a $50 fare.">
        <StepBox n={1}>
          <InlineMath math="F = 1.8d + 3.5" />, with <InlineMath math="m = 1.8" /> dollars per km and{" "}
          <InlineMath math="c = 3.5" /> dollars.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="F = 1.8(14) + 3.5 = \boxed{\$28.70}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="1.8d + 3.5 = 50 \Rightarrow d = \dfrac{46.5}{1.8} = \boxed{25.8\text{ km}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A plant is 14 cm tall after 2 weeks and 26 cm after 6 weeks. Assume linear growth. Find the model and predict the height after 10 weeks.">
        <StepBox n={1}>
          <InlineMath math="m = \dfrac{26 - 14}{6 - 2} = 3" /> cm per week.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="y - 14 = 3(x - 2) \Rightarrow y = 3x + 8" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="y(10) = 3(10) + 8 = \boxed{38\text{ cm}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Plan A costs $35 to join plus $20 per month. Plan B costs $60 to join
            plus $15 per month. (a) Write a model for each. (b) After how many
            months do the plans cost the same? (c) Which is cheaper over 12 months?
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="A = 20m + 35" />, <InlineMath math="B = 15m + 60" />.</p>
            <p>(b) <InlineMath math="20m + 35 = 15m + 60 \Rightarrow m = 5" /> months.</p>
            <p>(c) A: <InlineMath math="20(12) + 35 = 275" />. B: <InlineMath math="15(12) + 60 = 240" />. Plan B is cheaper.</p>
          </>
        }
      />

      <CalcSteps
        steps={[
          <>Press <Keys s="Y=" /> and enter both models in Y1 and Y2.</>,
          <>Press <Keys s="WINDOW" /> and set Xmax and Ymax to fit the values.</>,
          <>Press <Keys s="2nd TRACE" /> then choose <Keys s="5:intersect" /> and press <Keys s="ENTER" /> three times.</>,
        ]}
      />
    </LessonSection>
  );
}
