import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

// ─── 6. Upper & Lower Bounds ──────────────────────────────────────────────────

export default function BoundsSection() {
  return (
    <LessonSection
      id="bounds"
      label="Revision 5"
      title="Upper & Lower Bounds"
      tag={<SLTag />}
      intro="A rounded measurement is not one exact number — it stands for a whole interval of true values. Bounds describe that interval, and they let you decide how many figures of a calculated answer you can honestly trust."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          If a value is rounded to a given accuracy, the true value is within{" "}
          <strong>half a unit</strong> of that accuracy either side. 8 cm to
          the nearest cm means{" "}
          <InlineMath math="7.5 \le x < 8.5" />. The lower bound is{" "}
          <em>included</em>; the upper bound is the first value that would round
          up, so it is <em>not</em> included.
        </p>
      </HighlightBox>

      <FormulaBox title="Finding the Bounds">
        <FormulaRow
          label="Rule"
          math="\text{lower} = x - \tfrac{1}{2}\text{unit}, \quad \text{upper} = x + \tfrac{1}{2}\text{unit}"
        />
        <FormulaRow
          label="Inequality form"
          math="\text{lower bound} \le x < \text{upper bound}"
        />
      </FormulaBox>

      <FormulaBox title="Bounds of a Calculation">
        <FormulaRow label="Sum  a + b" math="\text{upper: } a_U + b_U \qquad \text{lower: } a_L + b_L" />
        <FormulaRow label="Difference  a − b" math="\text{upper: } a_U - b_L \qquad \text{lower: } a_L - b_U" />
        <FormulaRow label="Product  a × b" math="\text{upper: } a_U \times b_U \qquad \text{lower: } a_L \times b_L" />
        <FormulaRow label="Quotient  a ÷ b" math="\text{upper: } a_U \div b_L \qquad \text{lower: } a_L \div b_U" />
      </FormulaBox>

      {/* Visual: number line */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-4">
          8 cm to the nearest cm
        </p>
        <div className="relative min-w-[420px] h-16">
          <div className="absolute left-4 right-4 top-6 h-1 bg-slate-200 rounded" />
          <div className="absolute left-[22%] right-[22%] top-5 h-3 bg-ai-light rounded" />
          <div className="absolute left-[22%] top-3 w-3 h-3 rounded-full bg-ai-primary -translate-x-1/2" />
          <div className="absolute right-[22%] top-3 w-3 h-3 rounded-full border-2 border-ai-primary bg-white translate-x-1/2" />
          <span className="absolute left-[22%] top-12 -translate-x-1/2 text-xs font-mono text-navy-900">7.5 (included)</span>
          <span className="absolute left-1/2 top-12 -translate-x-1/2 text-xs font-mono font-bold text-ai-primary">8</span>
          <span className="absolute right-[22%] top-12 translate-x-1/2 text-xs font-mono text-navy-900">8.5 (not included)</span>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Significant figures → find the last digit&apos;s place value
        </p>
        <p className="text-slate-500 text-sm">
          <InlineMath math="350" /> to 2 s.f. is accurate to the{" "}
          <em>nearest 10</em>, so <InlineMath math="345 \le x < 355" />.{" "}
          <InlineMath math="0.0072" /> to 2 s.f. is accurate to the 4th decimal
          place, so <InlineMath math="0.00715 \le x < 0.00725" />.
          &ldquo;Nearest 5 kg&rdquo; means half of 5 = 2.5 either side.
        </p>
      </HighlightBox>

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">
          Justified accuracy — the final step in exam questions
        </p>
        <p className="text-slate-500 text-sm">
          Round the lower and upper bound of the <em>answer</em> to the same
          number of significant figures. The greatest accuracy at which{" "}
          <strong>both agree</strong> is the accuracy you can give for the
          answer. If they disagree at 3 s.f. but agree at 2 s.f., the answer is
          quoted to 2 s.f.
        </p>
      </HighlightBox>

      <WorkedExample title="State the bounds">
        <StepBox n={1}>
          A time of 6.8 s to 1 d.p.:{" "}
          <InlineMath math="6.75 \le t < 6.85" />
        </StepBox>
        <StepBox n={2}>
          A crowd of 1200 to the nearest 100:{" "}
          <InlineMath math="1150 \le N < 1250" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Product with justified accuracy: A = 8.4, B = 3.2 (both 1 d.p.)">
        <StepBox n={1}>
          <InlineMath math="8.35 \le A < 8.45" /> and{" "}
          <InlineMath math="3.15 \le B < 3.25" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\text{lower} = 8.35 \times 3.15 = 26.3025 \qquad \text{upper} = 8.45 \times 3.25 = 27.4625" />
        </StepBox>
        <StepBox n={3}>
          2 s.f.: 26 and 27 — disagree. 1 s.f.: 30 and 30 — agree. So{" "}
          <InlineMath math="AB = \boxed{30}" /> (1 s.f.).
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Quotient: speed = 45 km (nearest km) ÷ 3.6 h (1 d.p.)">
        <StepBox n={1}>
          <InlineMath math="44.5 \le d < 45.5" />,{" "}
          <InlineMath math="3.55 \le t < 3.65" />
        </StepBox>
        <StepBox n={2}>
          Largest speed = largest distance ÷ smallest time; smallest speed =
          smallest ÷ largest:
          <BlockMath math="\text{upper} = \dfrac{45.5}{3.55} = 12.82 \qquad \text{lower} = \dfrac{44.5}{3.65} = 12.19" />
        </StepBox>
        <StepBox n={3}>
          Both round to 10 at 1 s.f.; at 2 s.f. they are 13 and 12. So the
          speed is <InlineMath math="\boxed{10\text{ km/h}}" /> (1 s.f.).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Write the bounds for a mass of 250 g to 2 s.f., and for a time of
            6.8 s to 1 d.p.
          </>
        }
        answer={
          <>
            <BlockMath math="245 \le m < 255" />
            <BlockMath math="6.75 \le t < 6.85" />
          </>
        }
      />
      <Practice
        problem={
          <>
            <InlineMath math="a = 12" /> and <InlineMath math="b = 5" />, both
            to the nearest integer. Find the greatest and least possible value
            of <InlineMath math="a - b" />.
          </>
        }
        answer={
          <>
            <BlockMath math="\text{greatest} = 12.5 - 4.5 = \boxed{8}" />
            <BlockMath math="\text{least} = 11.5 - 5.5 = \boxed{6}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A square has side 9.5 cm to 1 d.p. Find the bounds of its area and
            state the area to a justified accuracy.
          </>
        }
        answer={
          <>
            <BlockMath math="9.45^2 = 89.3025 \qquad 9.55^2 = 91.2025" />
            <p>
              2 s.f.: 89 vs 91 — disagree. 1 s.f.: 90 and 90 — agree.
            </p>
            <BlockMath math="\text{Area} = \boxed{90\ \text{cm}^2\ (1\text{ s.f.})}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/bounds"
        label="Session 5 — Upper and Lower Bounds (6 questions)"
      />
    </LessonSection>
  );
}

