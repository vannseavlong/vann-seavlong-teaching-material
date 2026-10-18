import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

// ─── 4. Geometric Sequences & Series ──────────────────────────────────────────

export default function GeometricSection() {
  return (
    <LessonSection
      id="geometric"
      label="Revision 2"
      title="Geometric Sequences & Series"
      tag={<SLTag />}
      intro="A geometric sequence multiplies by the same number every step. Percentage growth and decay — populations, bouncing balls, compound interest, depreciation — are all geometric."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Divide any term by the one before it. If you always get the same{" "}
          <InlineMath math="r" />, the sequence is geometric. A{" "}
          <InlineMath math="x\%" /> increase each step gives{" "}
          <InlineMath math="r = 1 + \frac{x}{100}" />; a{" "}
          <InlineMath math="x\%" /> decrease gives{" "}
          <InlineMath math="r = 1 - \frac{x}{100}" />. This is exactly the
          multiplier from the Percentages topic.
        </p>
      </HighlightBox>

      <FormulaBox title="Geometric Sequence">
        <FormulaRow label="Common ratio" math="r = \dfrac{u_{n+1}}{u_n}" />
        <FormulaRow label="nth term" math="u_n = u_1\, r^{\,n-1}" />
      </FormulaBox>

      <FormulaBox title="Geometric Series (sum of n terms)">
        <FormulaRow
          label="Sum (r > 1)"
          math="S_n = \dfrac{u_1\left(r^n - 1\right)}{r - 1}"
        />
        <FormulaRow
          label="Sum (r < 1)"
          math="S_n = \dfrac{u_1\left(1 - r^n\right)}{1 - r}"
        />
        <FormulaRow label="Valid for" math="r \neq 1" />
      </FormulaBox>

      {/* Visual: AP vs GP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Arithmetic — add d
          </p>
          <p className="font-mono text-navy-900 font-semibold">
            3, 8, 13, 18, 23, …
          </p>
          <p className="text-xs text-slate-400 mt-2">Straight-line growth</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Geometric — multiply by r
          </p>
          <p className="font-mono text-navy-900 font-semibold">
            3, 6, 12, 24, 48, …
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Exponential growth (<InlineMath math="r = 2" />)
          </p>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Watch the exponent: n − 1, not n
        </p>
        <p className="text-slate-500 text-sm">
          The first term has had <em>no</em> multiplications yet, so{" "}
          <InlineMath math="u_1 = u_1 r^0" />. In a bounce problem, though,
          &ldquo;height after the 4th bounce&rdquo; starts from the drop
          height: <InlineMath math="3 \times 0.8^4" />. Always ask: how many
          times has the multiplier been applied? To find{" "}
          <InlineMath math="n" /> in <InlineMath math="r^n > k" />, use the
          GDC table/solver or logarithms:{" "}
          <InlineMath math="n > \dfrac{\ln k}{\ln r}" />.
        </p>
      </HighlightBox>

      <WorkedExample title="nth term: 2, 6, 18, 54, …">
        <StepBox n={1}>
          <InlineMath math="r = 6 \div 2 = 3" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_7 = 2(3)^6 = 2 \times 729 = \boxed{1458}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Sum with r < 1: 81, 54, 36, …">
        <StepBox n={1}>
          <InlineMath math="r = 54 \div 81 = \frac{2}{3}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_5 = 81\left(\tfrac{2}{3}\right)^4 = \boxed{16}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="S_5 = \dfrac{81\left(1 - (2/3)^5\right)}{1 - 2/3} = 243 - 32 = \boxed{211}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Decay in context: a population of 2,400 falls by 5% each year">
        <StepBox n={1}>
          <InlineMath math="r = 1 - 0.05 = 0.95" />. After 8 years:
          <BlockMath math="2400(0.95)^8 = \boxed{1592}" />
        </StepBox>
        <StepBox n={2}>
          First year the population is below 1,500:
          <BlockMath math="2400(0.95)^n < 1500 \;\Rightarrow\; n > \dfrac{\ln 0.625}{\ln 0.95} = 9.16" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="n = \boxed{10}" /> (check: 1,513 after 9 years,
          1,437 after 10).
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Find <InlineMath math="u_6" /> for{" "}
            <InlineMath math="3,\ 12,\ 48,\ \dots" />
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="r = 4" />
            </p>
            <BlockMath math="u_6 = 3(4)^5 = \boxed{3072}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A geometric sequence has <InlineMath math="u_1 = 6" /> and{" "}
            <InlineMath math="r = 2" />. Find <InlineMath math="S_9" />.
          </>
        }
        answer={
          <>
            <BlockMath math="S_9 = \dfrac{6(2^9 - 1)}{2-1} = 6 \times 511 = \boxed{3066}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            A town of 15,000 people grows by 2.5% per year. Find the
            population after 10 years, to the nearest whole number.
          </>
        }
        answer={
          <>
            <BlockMath math="15000(1.025)^{10} = \boxed{19\,201}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/geometric"
        label="Session 2 — Geometric Sequences and Series (6 questions)"
      />
    </LessonSection>
  );
}

