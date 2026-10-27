import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── Topic 1. Sampling and data ───────────────────────────────────────────────

export default function DataSection() {
  return (
    <LessonSection
      id="data"
      label="Topic 1"
      title="Sampling and Data"
      tag={<SLTag />}
      intro="Name the type of data, choose a sampling method, and spot bias. Stratified sampling is the one that needs a calculation."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          A <strong>sample</strong> is chosen from the <strong>population</strong>.
          It is representative only if every member has a fair chance of being
          picked. <strong>Discrete</strong> data is counted, <strong>continuous</strong>{" "}
          data is measured, <strong>categorical</strong> data is a label.
        </p>
      </HighlightBox>

      <FormulaBox title="Sampling methods (no booklet row)">
        <FormulaRow label="Simple random" math="\text{every member equally likely, e.g. random numbers}" />
        <FormulaRow label="Systematic" math="\text{every } k\text{th member from a random start}" />
        <FormulaRow label="Stratified" math="n_{\text{group}} = \dfrac{N_{\text{group}}}{N_{\text{total}}} \times n" />
        <FormulaRow label="Quota" math="\text{fixed numbers per group, chosen by the interviewer}" />
        <FormulaRow label="Convenience" math="\text{whoever is easiest to reach (often biased)}" />
      </FormulaBox>

      <WorkedExample title="A school has 240 students in Year 11 and 360 in Year 12. A stratified sample of 50 students is taken. How many come from each year?">
        <StepBox n={1}>
          Total <InlineMath math="N = 240 + 360 = 600" />.
        </StepBox>
        <StepBox n={2}>
          Year 11: <InlineMath math="\dfrac{240}{600} \times 50 = \boxed{20}" />.
        </StepBox>
        <StepBox n={3}>
          Year 12: <InlineMath math="\dfrac{360}{600} \times 50 = \boxed{30}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A club has 400 junior, 500 adult and 300 senior members. A
            stratified sample of 60 is taken. (a) Find the number from each
            group. (b) Classify the data: shoe size, height, favourite colour.
          </p>
        }
        answer={
          <>
            <p>(a) Total 1200. Junior <InlineMath math="\tfrac{400}{1200}\times 60 = 20" />, adult <InlineMath math="\tfrac{500}{1200}\times 60 = 25" />, senior <InlineMath math="\tfrac{300}{1200}\times 60 = 15" />.</p>
            <p>(b) Shoe size: discrete. Height: continuous. Favourite colour: categorical.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            A reporter surveys the first 30 people leaving a gym to find the
            town&apos;s average weekly exercise time. Name the sampling method and
            give one reason the result is biased.
          </p>
        }
        answer={
          <p>
            Convenience sampling. People leaving a gym exercise more than the
            typical resident, so the sample does not represent the town.
          </p>
        }
      />
    </LessonSection>
  );
}
