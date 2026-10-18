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
      intro="A rounded value stands for an interval of true values. Find the interval, combine the endpoints correctly, then round both ends of the answer to decide the accuracy you can justify."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          A value rounded to a given accuracy lies within{" "}
          <strong>half a unit</strong> of that accuracy either side. 8 cm to the
          nearest cm gives <InlineMath math="7.5 \le x < 8.5" />. The lower
          bound is <em>included</em>. The upper bound is the first value that
          would round up, so it is <em>not</em> included. In calculations, use
          the bounds as if they were attainable.
        </p>
      </HighlightBox>

      <FormulaBox title="Bounds of a Measurement">
        <FormulaRow
          label="Half-unit rule"
          math="\text{lower} = x - \tfrac{1}{2}\text{unit}, \quad \text{upper} = x + \tfrac{1}{2}\text{unit}"
        />
        <FormulaRow
          label="Inequality form"
          math="\text{lower bound} \le x < \text{upper bound}"
        />
        <FormulaRow
          label="Significant figures"
          math="\text{unit} = \text{place value of the last significant digit}"
        />
      </FormulaBox>

      <FormulaBox title="Bounds of a Calculation">
        <FormulaRow label="Sum  a + b" math="\text{upper: } a_U + b_U \qquad \text{lower: } a_L + b_L" />
        <FormulaRow label="Difference  a − b" math="\text{upper: } a_U - b_L \qquad \text{lower: } a_L - b_U" />
        <FormulaRow label="Product  a × b" math="\text{upper: } a_U \times b_U \qquad \text{lower: } a_L \times b_L" />
        <FormulaRow label="Quotient  a ÷ b" math="\text{upper: } a_U \div b_L \qquad \text{lower: } a_L \div b_U" />
      </FormulaBox>

      <FormulaBox title="Justified Accuracy">
        <FormulaRow label="Step 1" math="\text{Round the lower and upper bound of the answer to } n \text{ s.f.}" />
        <FormulaRow label="Step 2" math="\text{Take the largest } n \text{ at which both round to the same value}" />
        <FormulaRow label="Step 3" math="\text{Quote the answer to that } n \text{ s.f.}" />
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

      {/* Visual: which bound to use */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-4">
          Which bounds give the extreme answer
        </p>
        <table className="w-full min-w-[420px] text-sm text-left">
          <thead>
            <tr className="border-b border-slate-200 text-navy-900">
              <th className="py-2 pr-4">Operation</th>
              <th className="py-2 pr-4">Greatest value</th>
              <th className="py-2">Least value</th>
            </tr>
          </thead>
          <tbody className="text-slate-500">
            <tr className="border-b border-slate-100"><td className="py-2 pr-4">a + b</td><td className="pr-4">a upper, b upper</td><td>a lower, b lower</td></tr>
            <tr className="border-b border-slate-100"><td className="py-2 pr-4">a − b</td><td className="pr-4">a upper, b lower</td><td>a lower, b upper</td></tr>
            <tr className="border-b border-slate-100"><td className="py-2 pr-4">a × b</td><td className="pr-4">a upper, b upper</td><td>a lower, b lower</td></tr>
            <tr><td className="py-2 pr-4">a ÷ b</td><td className="pr-4">a upper, b lower</td><td>a lower, b upper</td></tr>
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-3">
          The quantity being subtracted or divided by is the one that flips.
        </p>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Exam tip: read the accuracy from the last digit
        </p>
        <p className="text-slate-500 text-sm">
          <InlineMath math="350" /> to 2 s.f. is accurate to the{" "}
          <em>nearest 10</em>, so <InlineMath math="345 \le x < 355" />.{" "}
          <InlineMath math="0.0072" /> to 2 s.f. is accurate to the 4th decimal
          place, so <InlineMath math="0.00715 \le x < 0.00725" />.
          &ldquo;Nearest 5 kg&rdquo; means half of 5 = 2.5 either side.
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
        <StepBox n={3}>
          A mass of 0.0072 kg to 2 s.f.:{" "}
          <InlineMath math="0.00715 \le m < 0.00725" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Sum and difference: a = 24.6 cm, b = 8.3 cm (both 1 d.p.)">
        <StepBox n={1}>
          <InlineMath math="24.55 \le a < 24.65" /> and{" "}
          <InlineMath math="8.25 \le b < 8.35" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="a+b:\quad \text{lower} = 24.55 + 8.25 = 32.80 \qquad \text{upper} = 24.65 + 8.35 = 33.00" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="a-b:\quad \text{lower} = 24.55 - 8.35 = 16.20 \qquad \text{upper} = 24.65 - 8.25 = 16.40" />
        </StepBox>
        <StepBox n={4}>
          For <InlineMath math="a-b" />: 3 s.f. gives 16.2 and 16.4 (disagree).
          2 s.f. gives 16 and 16 (agree). So{" "}
          <InlineMath math="a-b = \boxed{16}" /> (2 s.f.).
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
          2 s.f.: 26 and 27 (disagree). 1 s.f.: 30 and 30 (agree). So{" "}
          <InlineMath math="AB = \boxed{30}" /> (1 s.f.).
        </StepBox>
        <StepBox n={4}>
          GDC: enter each bound product directly and store the results to
          compare. Do not round before multiplying.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Quotient: speed = 45 km (nearest km) ÷ 3.6 h (1 d.p.)">
        <StepBox n={1}>
          <InlineMath math="44.5 \le d < 45.5" />,{" "}
          <InlineMath math="3.55 \le t < 3.65" />
        </StepBox>
        <StepBox n={2}>
          Largest speed = largest distance ÷ smallest time. Smallest speed =
          smallest distance ÷ largest time.
          <BlockMath math="\text{upper} = \dfrac{45.5}{3.55} = 12.82 \qquad \text{lower} = \dfrac{44.5}{3.65} = 12.19" />
        </StepBox>
        <StepBox n={3}>
          Both round to 10 at 1 s.f. At 2 s.f. they are 13 and 12. So the
          speed is <InlineMath math="\boxed{10\text{ km/h}}" /> (1 s.f.).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Write the bounds for a mass of 250 g to 2 s.f., a time of 6.8 s to
            1 d.p., and a mass of 40 kg to the nearest 5 kg.
          </>
        }
        answer={
          <>
            <BlockMath math="245 \le m < 255" />
            <BlockMath math="6.75 \le t < 6.85" />
            <BlockMath math="37.5 \le w < 42.5" />
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
            <InlineMath math="p = 15.2" /> and <InlineMath math="q = 6.4" />,
            both to 1 d.p. Find the bounds of <InlineMath math="p + q" /> and
            state the sum to a justified accuracy.
          </>
        }
        answer={
          <>
            <BlockMath math="\text{lower} = 15.15 + 6.35 = 21.50 \qquad \text{upper} = 15.25 + 6.45 = 21.70" />
            <p>3 s.f.: 21.5 and 21.7 (disagree). 2 s.f.: 22 and 22 (agree).</p>
            <BlockMath math="p+q = \boxed{22}\ (2\text{ s.f.})" />
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
            <p>2 s.f.: 89 and 91 (disagree). 1 s.f.: 90 and 90 (agree).</p>
            <BlockMath math="\text{Area} = \boxed{90\ \text{cm}^2\ (1\text{ s.f.})}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A block has mass 52.4 g and volume 6.5 cm³, both to 1 d.p. Find the
            bounds of the density (mass ÷ volume) and state it to a justified
            accuracy.
          </>
        }
        answer={
          <>
            <BlockMath math="\text{upper} = \dfrac{52.45}{6.45} = 8.13 \qquad \text{lower} = \dfrac{52.35}{6.55} = 7.99" />
            <p>2 s.f.: 8.1 and 8.0 (disagree). 1 s.f.: 8 and 8 (agree).</p>
            <BlockMath math="\text{Density} = \boxed{8\ \text{g/cm}^3\ (1\text{ s.f.})}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/bounds"
        label="Session 5: Upper and Lower Bounds (6 questions)"
      />
    </LessonSection>
  );
}
