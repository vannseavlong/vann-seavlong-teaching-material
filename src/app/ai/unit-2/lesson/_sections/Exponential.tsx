import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── Topic 4. Exponential and logarithmic models (booklet 1.5) ────────────────

export default function ExponentialSection() {
  return (
    <LessonSection
      id="exponential"
      label="Topic 4"
      title="Exponential and Logarithmic Models"
      tag={<SLTag />}
      alt
      intro="When a quantity changes by the same percentage each period, the model is exponential. To find the time taken, switch to logarithm form."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Growth multiplies by <InlineMath math="b > 1" /> each step, decay by{" "}
          <InlineMath math="0 < b < 1" />. A rise of 4% each period has{" "}
          <InlineMath math="b = 1.04" />, a fall of 15% has{" "}
          <InlineMath math="b = 0.85" />. The graph never reaches its horizontal
          asymptote. To solve for the exponent, use{" "}
          <InlineMath math="a^x = b \Leftrightarrow x = \log_a b" />.
        </p>
      </HighlightBox>

      <FormulaBox title="Exponential model and logarithm form (booklet 1.5)">
        <FormulaRow label="Exponential model" math="f(x) = a \times b^{x}" />
        <FormulaRow label="Percentage change" math="b = 1 + \dfrac{r}{100}" />
        <FormulaRow label="Switch to logarithm" math="a^x = b \Leftrightarrow x = \log_a b" />
        <FormulaRow label="Horizontal asymptote" math="y = 0 \text{ (or } y = c \text{ for } a b^x + c)" />
      </FormulaBox>

      <WorkedExample title="A town has population P = 2000 × 1.04^t after t years. Find the population after 10 years and the time to reach 5000.">
        <StepBox n={1}>
          <InlineMath math="P(10) = 2000 \times 1.04^{10} = \boxed{2960}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="2000(1.04)^t = 5000 \Rightarrow 1.04^t = 2.5" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="t = \log_{1.04} 2.5 = \boxed{23.4\text{ years}}" /> (or solve on the GDC).
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A car is bought for $24 000 and loses 15% of its value each year. Find its value after 3 years and when it is worth half the price.">
        <StepBox n={1}>
          <InlineMath math="V = 24000 \times 0.85^{t}" />, so <InlineMath math="V(3) = \boxed{\$14\,739}" />.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="0.85^t = 0.5 \Rightarrow t = \log_{0.85} 0.5 = \boxed{4.27\text{ years}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A patient takes 200 mg of a drug. The amount left after{" "}
            <InlineMath math="h" /> hours is <InlineMath math="A = 200 \times 0.88^{h}" /> mg.
            (a) State the percentage lost each hour. (b) Find the amount after 6
            hours. (c) Find when 50 mg remain.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="b = 0.88" />, so 12% is lost each hour.</p>
            <p>(b) <InlineMath math="200 \times 0.88^6 = 92.9\text{ mg}" />.</p>
            <p>(c) <InlineMath math="0.88^h = 0.25 \Rightarrow h = \log_{0.88} 0.25 = 10.8\text{ hours}" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
