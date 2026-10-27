import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Diagram } from "./helpers";

// ─── Topic 4. Probability (booklet 4.5, 4.6) ──────────────────────────────────

function VennDiagram() {
  return (
    <Diagram caption="Two overlapping events inside the sample space U. The overlap is A ∩ B; the whole shaded area is A ∪ B.">
      <svg viewBox="0 0 260 130" width="100%" style={{ maxWidth: 360 }} role="img" aria-label="Venn diagram of events A and B">
        <rect x={5} y={5} width={250} height={120} fill="none" stroke="#94a3b8" strokeWidth={1.5} />
        <text x={12} y={20} fontSize={12} fill="#475569">U</text>
        <circle cx={100} cy={65} r={42} fill="#bfdbfe" fillOpacity={0.6} stroke="#2563eb" strokeWidth={2} />
        <circle cx={150} cy={65} r={42} fill="#fecaca" fillOpacity={0.6} stroke="#dc2626" strokeWidth={2} />
        <text x={72} y={69} fontSize={13} fill="#1e3a8a">A</text>
        <text x={171} y={69} fontSize={13} fill="#7f1d1d">B</text>
        <text x={116} y={69} fontSize={11} fill="#0f172a">A ∩ B</text>
      </svg>
    </Diagram>
  );
}

export default function ProbabilitySection() {
  return (
    <LessonSection
      id="probability"
      label="Topic 4"
      title="Probability"
      tag={<SLTag />}
      alt
      intro="Probability of one event, the complement, combined events with the union rule, and conditional and independent events, shown with Venn and tree diagrams."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Draw the diagram first. Mutually exclusive events cannot happen
          together (<InlineMath math="P(A \cap B) = 0" />). Independent events do
          not affect each other (<InlineMath math="P(A \cap B) = P(A)P(B)" />).
          These are different ideas: two events with non-zero probability
          cannot be both.
        </p>
      </HighlightBox>

      <FormulaBox title="Probability of an event and complement (booklet 4.5)">
        <FormulaRow label="Probability of an event A" math="P(A) = \dfrac{n(A)}{n(U)}" />
        <FormulaRow label="Complementary events" math="P(A) + P(A') = 1" />
      </FormulaBox>

      <FormulaBox title="Combined, conditional and independent events (booklet 4.6)">
        <FormulaRow label="Combined events" math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
        <FormulaRow label="Mutually exclusive events" math="P(A \cup B) = P(A) + P(B)" />
        <FormulaRow label="Conditional probability" math="P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}" />
        <FormulaRow label="Independent events" math="P(A \cap B) = P(A)\,P(B)" />
      </FormulaBox>

      <VennDiagram />

      <WorkedExample title="P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. Find P(A ∪ B) and P(A | B), and decide whether A and B are independent.">
        <StepBox n={1}>
          <InlineMath math="P(A \cup B) = 0.5 + 0.4 - 0.2 = \boxed{0.7}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="P(A \mid B) = \dfrac{0.2}{0.4} = \boxed{0.5}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="P(A)P(B) = 0.5 \times 0.4 = 0.2 = P(A \cap B)" />, so A and B are independent.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="A bag has 5 red and 3 blue counters. Two are drawn without replacement. Find P(both red) and P(one of each colour).">
        <StepBox n={1}>
          Both red: <InlineMath math="\dfrac58 \times \dfrac47 = \dfrac{5}{14} = \boxed{0.357}" />
        </StepBox>
        <StepBox n={2}>
          One of each: <InlineMath math="\dfrac58\times\dfrac37 + \dfrac38\times\dfrac57 = \dfrac{30}{56} = \boxed{0.536}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            Of 80 students, 45 play football (F), 30 play basketball (B) and 15
            play both. Find (a) <InlineMath math="P(F \cup B)" />, (b) the
            probability a student plays neither, (c) <InlineMath math="P(F \mid B)" />.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="\dfrac{45 + 30 - 15}{80} = \dfrac{60}{80} = 0.75" />.</p>
            <p>(b) <InlineMath math="1 - 0.75 = 0.25" />.</p>
            <p>(c) <InlineMath math="\dfrac{15}{30} = 0.5" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            Events A and B are mutually exclusive with <InlineMath math="P(A) = 0.3" /> and{" "}
            <InlineMath math="P(B) = 0.45" />. Find <InlineMath math="P(A \cup B)" /> and{" "}
            <InlineMath math="P((A \cup B)')" />.
          </p>
        }
        answer={
          <p>
            <InlineMath math="P(A \cup B) = 0.3 + 0.45 = 0.75" />, so{" "}
            <InlineMath math="P((A \cup B)') = 1 - 0.75 = 0.25" />.
          </p>
        }
      />
    </LessonSection>
  );
}
