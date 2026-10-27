import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps } from "./helpers";

// ─── Topic 6. Spearman, chi-squared and t-test ────────────────────────────────

export default function TestsSection() {
  return (
    <LessonSection
      id="tests"
      label="Topic 6"
      title="Spearman, Chi-squared and t-test"
      tag={<SLTag />}
      alt
      intro="Hypothesis tests all follow one pattern: state H0 and H1, let the GDC give the p-value, compare with the significance level, then conclude in context. The booklet prints no formula for these tests."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          <strong>Reject H0</strong> if <InlineMath math="p < \alpha" />, otherwise{" "}
          <strong>do not reject</strong> H0. Never write &quot;accept H0&quot;. State
          the conclusion in the words of the question.
        </p>
      </HighlightBox>

      <FormulaBox title="Decision rule (all tests)">
        <FormulaRow label="Significance level" math="\alpha = 0.05 \text{ unless stated}" />
        <FormulaRow label="Reject H0" math="p\text{-value} < \alpha" />
        <FormulaRow label="Do not reject H0" math="p\text{-value} \ge \alpha" />
      </FormulaBox>

      <FormulaBox title="Chi-squared test for independence (GDC)">
        <FormulaRow label="H0, H1" math="\text{H}_0: \text{variables independent},\; \text{H}_1: \text{not independent}" />
        <FormulaRow label="Expected frequency" math="E = \dfrac{\text{row total} \times \text{column total}}{\text{grand total}}" />
        <FormulaRow label="Degrees of freedom" math="\nu = (\text{rows} - 1)(\text{columns} - 1)" />
        <FormulaRow label="Valid if" math="\text{every expected frequency} \ge 5" />
      </FormulaBox>

      <FormulaBox title="Spearman's rank and t-test (GDC)">
        <FormulaRow label="Spearman's rank r_s" math="-1 \le r_s \le 1,\; r \text{ of the ranks}" />
        <FormulaRow label="Use Spearman when" math="\text{data are ranked or the trend is monotonic, not linear}" />
        <FormulaRow label="Two-sample t-test" math="\text{H}_0: \mu_1 = \mu_2" />
        <FormulaRow label="Conditions" math="\text{both samples roughly normal}" />
      </FormulaBox>

      <WorkedExample title="100 people choose between two products. Product A: 30 like it, 20 dislike it. Product B: 20 like it, 30 dislike it. Test at the 5% level whether liking is independent of the product.">
        <StepBox n={1}>
          H0: liking is independent of the product. H1: it is not independent.
        </StepBox>
        <StepBox n={2}>
          Each expected frequency is <InlineMath math="\dfrac{50 \times 50}{100} = 25" />, all at least 5.
        </StepBox>
        <StepBox n={3}>
          GDC: <InlineMath math="\chi^2 = 4.00" />, <InlineMath math="\nu = 1" />, <InlineMath math="p = 0.0455" />.
        </StepBox>
        <StepBox n={4}>
          <InlineMath math="0.0455 < 0.05" />, so reject H0: there is evidence that liking depends on the product.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Two judges rank five dishes: judge 1 ranks 1, 2, 3, 4, 5 and judge 2 ranks 2, 1, 4, 3, 5. Find Spearman's rank coefficient.">
        <StepBox n={1}>
          Enter the ranks in L1 and L2 and run LinReg: <InlineMath math="r_s = 0.8" />.
        </StepBox>
        <StepBox n={2}>
          Strong positive agreement between the judges.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A t-test on the mean times of two groups gives{" "}
            <InlineMath math="p = 0.032" /> at the 5% level. (a) State H0. (b)
            State the decision. (c) Write the conclusion in context (group A
            used a new study method).
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="\text{H}_0: \mu_A = \mu_B" /> (the mean times are equal).</p>
            <p>(b) <InlineMath math="0.032 < 0.05" />, so reject H0.</p>
            <p>(c) There is evidence at the 5% level that the new study method changes the mean time.</p>
          </>
        }
      />

      <CalcSteps
        steps={[
          <>Chi-squared: enter the observed table in matrix [A] using <Keys s="2nd x^-1" /> (MATRIX) then EDIT.</>,
          <>Press <Keys s="STAT" />, <Keys s="TESTS" />, <Keys s="C:χ²-Test..." /> and choose Calculate.</>,
          <>Read <InlineMath math="\chi^2" />, p and df, and view the expected table in [B].</>,
          <>Two-sample t-test: <Keys s="STAT" />, <Keys s="TESTS" />, <Keys s="4:2-SampT-Test" /> with the lists or statistics.</>,
        ]}
      />
    </LessonSection>
  );
}
