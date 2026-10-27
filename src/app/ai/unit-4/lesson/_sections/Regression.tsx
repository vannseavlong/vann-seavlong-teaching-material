import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps } from "./helpers";

// ─── Topic 3. Correlation and regression ──────────────────────────────────────

export default function RegressionSection() {
  return (
    <LessonSection
      id="regression"
      label="Topic 3"
      title="Correlation and Regression"
      tag={<SLTag />}
      intro="Measure how strongly two variables move together, fit the line of best fit on the GDC, and decide when a prediction can be trusted."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          The booklet prints no formula for <InlineMath math="r" /> or the
          regression line: the GDC gives both. Predicting inside the data range
          is <strong>interpolation</strong> (reliable). Predicting outside is{" "}
          <strong>extrapolation</strong> (unreliable). Correlation does not mean
          one variable causes the other.
        </p>
      </HighlightBox>

      <FormulaBox title="Correlation and regression line (GDC output, not in the booklet)">
        <FormulaRow label="Pearson's coefficient" math="-1 \le r \le 1" />
        <FormulaRow label="Strong positive / negative" math="r \text{ near } +1 \text{ or } -1" />
        <FormulaRow label="No linear correlation" math="r \text{ near } 0" />
        <FormulaRow label="Regression line of y on x" math="y = ax + b" />
      </FormulaBox>

      <WorkedExample title="Hours studied x and test mark y: (1, 42), (2, 48), (3, 55), (4, 59), (5, 68), (6, 72). Find r and the line, then predict the mark for 4.5 hours and for 15 hours.">
        <StepBox n={1}>
          GDC LinReg: <InlineMath math="r = 0.996" />, a very strong positive correlation.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="y = 6.11x + 35.9" />: each extra hour adds about 6.11 marks.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="y(4.5) = 6.11(4.5) + 35.9 = \boxed{63.4}" />. This is interpolation, so it is reliable.
        </StepBox>
        <StepBox n={4}>
          <InlineMath math="y(15) = 127.6" /> is above 100%. This is extrapolation and is not valid.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Daily ice-cream sales and temperature have <InlineMath math="r = 0.93" /> and
            line <InlineMath math="y = 12.4x - 150" /> (x in °C, y in sales).
            (a) Describe the correlation. (b) Interpret the gradient. (c)
            Predict sales at 25°C. (d) A seller says heat causes sales. Comment.
          </p>
        }
        answer={
          <>
            <p>(a) Strong positive correlation.</p>
            <p>(b) Each 1°C rise gives about 12.4 more sales.</p>
            <p>(c) <InlineMath math="12.4(25) - 150 = 160" /> sales.</p>
            <p>(d) Correlation shows an association, not proof of cause. Heat is a plausible cause, but other factors (holidays, weekends) also change.</p>
          </>
        }
      />

      <CalcSteps
        steps={[
          <>Turn diagnostics on: <Keys s="2nd 0" /> (CATALOG), choose <Keys s="DiagnosticOn" />, press <Keys s="ENTER" /> twice.</>,
          <>Enter x in L1 and y in L2 using <Keys s="STAT" /> then <Keys s="1:Edit" />.</>,
          <>Press <Keys s="STAT" />, <Keys s="CALC" />, <Keys s="4:LinReg(ax+b)" />, then <Keys s="ENTER" />. Read a, b and r.</>,
        ]}
      />
    </LessonSection>
  );
}
