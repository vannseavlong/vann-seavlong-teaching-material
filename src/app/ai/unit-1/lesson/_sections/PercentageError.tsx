import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

// ─── 7. Percentage Error ──────────────────────────────────────────────────────

export default function PercentageErrorSection() {
  return (
    <LessonSection
      id="percentage-error"
      label="Revision 6"
      title="Percentage Error"
      tag={<SLTag />}
      intro="Percentage error measures how far an approximate or measured value is from the true value, as a percentage of the true value. It is how we judge whether an estimate, a measurement or a rounding was good enough."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Always divide by the <strong>exact (true) value</strong>, not the
          approximate one. The absolute value bars mean the answer is never
          negative — percentage error says how big the mistake is, not which
          way.
        </p>
      </HighlightBox>

      <FormulaBox title="Percentage Error">
        <FormulaRow
          label="Percentage error"
          math="\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100\%"
        />
        <FormulaRow label="v_A" math="v_A = \text{approximate (measured) value}" />
        <FormulaRow label="v_E" math="v_E = \text{exact (true) value}" />
        <FormulaRow
          label="Find v_E from ε"
          math="v_E = \dfrac{v_A}{1 \pm \varepsilon/100}\quad(\text{two possible values})"
        />
      </FormulaBox>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Two links to earlier topics
        </p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            <strong>Rounding:</strong> percentage error tells you the effect of
            rounding early (e.g. 1.94% when 1.0375 is rounded to 1.04 before
            raising to the 8th power).
          </li>
          <li>
            <strong>Bounds:</strong> to find the greatest possible percentage
            error of a measurement, use the bound <em>closest to zero</em> as{" "}
            <InlineMath math="v_E" /> — a smaller true value gives a larger
            percentage.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="Direct percentage error">
        <p className="text-sm text-slate-500 mb-4">
          A table is measured as 2.4 m but its true length is 2.5 m.
        </p>
        <StepBox n={1}>
          <BlockMath math="\varepsilon = \left|\dfrac{2.4 - 2.5}{2.5}\right| \times 100 = \boxed{4\%}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Greatest possible error from bounds">
        <p className="text-sm text-slate-500 mb-4">
          A rod is measured as 20 cm to the nearest cm. Find the greatest
          possible percentage error in this measurement.
        </p>
        <StepBox n={1}>
          True length is between 19.5 and 20.5.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\dfrac{|20 - 19.5|}{19.5} = 2.56\% \qquad \dfrac{|20 - 20.5|}{20.5} = 2.44\%" />
        </StepBox>
        <StepBox n={3}>
          Greatest percentage error: <InlineMath math="\boxed{2.56\%}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Working backwards: v_A = 80, error 5%">
        <p className="text-sm text-slate-500 mb-4">
          A reading of 80 has a 5% error. Find the possible true values.
        </p>
        <StepBox n={1}>
          <BlockMath math="\dfrac{|80 - v_E|}{v_E} = 0.05" />
        </StepBox>
        <StepBox n={2}>
          Reading too high: <InlineMath math="v_E = \dfrac{80}{1.05} = 76.2" />.
          Reading too low: <InlineMath math="v_E = \dfrac{80}{0.95} = 84.2" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            An estimate is 3.2 m; the exact length is 3.0 m. Find the
            percentage error to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{0.2}{3.0} \times 100 = \boxed{6.67\%}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A man&apos;s mass is estimated as 70 kg; it is actually 72 kg. Find
            the percentage error to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{|70-72|}{72}\times100 = \boxed{2.78\%}" />
            <p>Divide by the exact value 72, not the estimate 70.</p>
          </>
        }
      />
      <Practice
        problem={
          <>
            The exact value is 250 and the percentage error in an estimate is
            6%. Find the two possible estimates.
          </>
        }
        answer={
          <>
            <BlockMath math="250 \times 0.06 = 15 \;\Rightarrow\; \boxed{235 \text{ or } 265}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/percentage-error"
        label="Session 6 — Percentage Error (6 questions)"
      />
    </LessonSection>
  );
}

