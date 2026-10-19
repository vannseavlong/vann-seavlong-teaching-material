import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink, Keys, CalcSteps } from "./helpers";

// ─── 4. Geometric Sequences & Series ──────────────────────────────────────────

export default function GeometricSection() {
  return (
    <LessonSection
      id="geometric"
      label="Revision 2"
      title="Geometric Sequences & Series"
      tag={<SLTag />}
      intro="A geometric sequence multiplies by the same number every step. Percentage growth and decay (populations, bouncing balls, compound interest, depreciation) are all geometric."
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
          <InlineMath math="r = 1 - \frac{x}{100}" />. This is the multiplier
          from the Percentages topic.
        </p>
      </HighlightBox>

      <FormulaBox title="Geometric Sequence">
        <FormulaRow label="Common ratio" math="r = \dfrac{u_{n+1}}{u_n}" />
        <FormulaRow label="nth term" math="u_n = u_1\, r^{\,n-1}" />
        <FormulaRow label="Two known terms" math="\dfrac{u_q}{u_p} = r^{\,q-p}" />
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

      <FormulaBox title="Growth and Decay Models">
        <FormulaRow label="Growth by x% per step" math="r = 1 + \dfrac{x}{100} > 1" />
        <FormulaRow label="Decay by x% per step" math="r = 1 - \dfrac{x}{100},\; 0 < r < 1" />
        <FormulaRow label="Value after n steps" math="u_{n+1} = u_1\, r^{\,n}" />
        <FormulaRow label="Smallest n with r^n > c (r > 1)" math="n > \dfrac{\ln c}{\ln r}" />
      </FormulaBox>

      <FormulaBox title="Infinite Series (extension, outside the AI SL guide)">
        <FormulaRow label="Converges only if" math="|r| < 1" />
        <FormulaRow label="Sum to infinity" math="S_\infty = \dfrac{u_1}{1 - r}" />
      </FormulaBox>

      {/* Visual: AP vs GP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Arithmetic: add d
          </p>
          <p className="font-mono text-navy-900 font-semibold">
            3, 8, 13, 18, 23, …
          </p>
          <p className="text-xs text-slate-400 mt-2">Straight-line growth</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Geometric: multiply by r
          </p>
          <p className="font-mono text-navy-900 font-semibold">
            3, 6, 12, 24, 48, …
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Exponential growth (<InlineMath math="r = 2" />)
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-3">
          Behaviour of the sequence by value of r
        </p>
        <table className="w-full text-sm min-w-[420px]">
          <thead>
            <tr className="text-left text-slate-400 text-xs uppercase">
              <th className="py-1 pr-3">r</th>
              <th className="py-1 pr-3">Example (u₁ = 8)</th>
              <th className="py-1">Behaviour</th>
            </tr>
          </thead>
          <tbody className="text-slate-500">
            <tr className="border-t border-slate-200">
              <td className="py-2 pr-3"><InlineMath math="r > 1" /></td>
              <td className="py-2 pr-3 font-mono">8, 12, 18, 27, …</td>
              <td className="py-2">Grows without limit (growth)</td>
            </tr>
            <tr className="border-t border-slate-200">
              <td className="py-2 pr-3"><InlineMath math="0 < r < 1" /></td>
              <td className="py-2 pr-3 font-mono">8, 4, 2, 1, …</td>
              <td className="py-2">Shrinks towards 0 (decay)</td>
            </tr>
            <tr className="border-t border-slate-200">
              <td className="py-2 pr-3"><InlineMath math="r < 0" /></td>
              <td className="py-2 pr-3 font-mono">8, −4, 2, −1, …</td>
              <td className="py-2">Terms alternate in sign</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CalcSteps
        steps={[
          <>One term: <Keys s="3 × 2 ^ 9 enter" />. The power is n − 1, so the 10th term uses 9.</>,
          <>Ratio as a fraction: <Keys s="54 ÷ 81 enter" />, then press <Keys s="math" /> and choose 1:►Frac to see 2/3.</>,
          <>Find r from r^3 = 8: <Keys s="8 ^ ( 1 ÷ 3 ) enter" />. The bracket around 1 ÷ 3 is essential. <Keys s="math" /> 4:³√( also works.</>,
          <>Sum of a rule: sum(seq(81 (2 ÷ 3) ^ (X − 1), X, 1, 5)), using <Keys s="2nd stat" /> MATH 5:sum( and <Keys s="2nd stat" /> OPS 5:seq(. Or type the formula with brackets around the numerator and the denominator.</>,
          <>Find n in r^n greater than k: <Keys s="ln ( 250 ) ÷ ln ( 1.5 ) enter" />. Then round n up, and check with the table: <Keys s="y=" />, Y1 = the rule with <Keys s="X,T,θ,n" />, <Keys s="2nd graph" /> (TABLE).</>,
          <>Sum to infinity: <Keys s="24 ÷ ( 1 − 1 ÷ 2 ) enter" />. Always put brackets round 1 − r.</>,
        ]}
      />

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Exam tip: count the multiplications
        </p>
        <p className="text-slate-500 text-sm">
          The first term has had no multiplication yet, so{" "}
          <InlineMath math="u_1 = u_1 r^0" /> and the exponent is{" "}
          <InlineMath math="n-1" />. In a bounce problem, &ldquo;height after
          the 4th bounce&rdquo; starts from the drop height:{" "}
          <InlineMath math="3 \times 0.8^4" />. Always ask how many times the
          multiplier has been applied. To find <InlineMath math="n" /> in{" "}
          <InlineMath math="r^n > k" />, use the GDC table or solver, or
          logarithms. When dividing by <InlineMath math="\ln r" /> with{" "}
          <InlineMath math="0<r<1" />, <InlineMath math="\ln r" /> is negative,
          so the inequality reverses. Round <InlineMath math="n" /> up to a
          whole number.
        </p>
      </HighlightBox>

      <WorkedExample title="Find r, u₁ and a term from two known terms: u₃ = 12, u₆ = 96">
        <StepBox n={1}>
          <BlockMath math="\dfrac{u_6}{u_3} = r^3 = \dfrac{96}{12} = 8 \;\Rightarrow\; r = 2" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_1 = \dfrac{u_3}{r^2} = \dfrac{12}{4} = 3" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="u_{10} = 3(2)^9 = 3 \times 512 = \boxed{1536}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>r: <Keys s="( 96 ÷ 12 ) ^ ( 1 ÷ 3 ) enter" /> gives 2. Then <Keys s="3 × 2 ^ 9 enter" /> gives 1536.</>,
          ]}
        />
      </WorkedExample>

      <Practice
        problem={
          <>
            Find <InlineMath math="u_6" /> for{" "}
            <InlineMath math="3,\ 12,\ 48,\ \dots" />. A different sequence has{" "}
            <InlineMath math="u_2 = 6" /> and <InlineMath math="u_5 = 162" />;
            find <InlineMath math="u_8" />.
          </>
        }
        answer={
          <>
            <BlockMath math="r = 4,\quad u_6 = 3(4)^5 = \boxed{3072}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="3 × 4 ^ 5 enter" />.</>,
              ]}
            />
            <BlockMath math="r^3 = \dfrac{162}{6} = 27 \Rightarrow r = 3,\quad u_1 = 2,\quad u_8 = 2(3)^7 = \boxed{4374}" />
          </>
        }
      />

      <WorkedExample title="Sum with r < 1: 81, 54, 36, …">
        <StepBox n={1}>
          <InlineMath math="r = 54 \div 81 = \frac{2}{3}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_5 = 81\left(\tfrac{2}{3}\right)^4 = \boxed{16}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="S_5 = \dfrac{81\left(1 - (2/3)^5\right)}{1 - 2/3} = 243 - 32 = \boxed{211}" />
          Check: 81 + 54 + 36 + 24 + 16 = 211.
        </StepBox>
        <CalcSteps
          steps={[
            <>Formula: <Keys s="81 ( 1 − ( 2 ÷ 3 ) ^ 5 ) ÷ ( 1 − 2 ÷ 3 ) enter" /> gives 211. Check with sum(seq(81 (2 ÷ 3) ^ (X − 1), X, 1, 5)).</>,
          ]}
        />
      </WorkedExample>

      <Practice
        problem={
          <>
            (a) A geometric sequence has <InlineMath math="u_1 = 6" /> and{" "}
            <InlineMath math="r = 2" />. Find <InlineMath math="S_9" />.
            <br />
            (b) Find <InlineMath math="S_6" /> for{" "}
            <InlineMath math="64,\ 48,\ 36,\ \dots" /> to 3 significant
            figures.
          </>
        }
        answer={
          <>
            <BlockMath math="S_9 = \dfrac{6(2^9 - 1)}{2-1} = 6 \times 511 = \boxed{3066}" />
            <BlockMath math="r = 0.75,\quad S_6 = \dfrac{64\left(1-0.75^6\right)}{1-0.75} = 256 \times 0.82202 = \boxed{210}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="64 ( 1 − 0.75 ^ 6 ) ÷ ( 1 − 0.75 ) enter" />. Both brackets are needed.</>,
              ]}
            />
          </>
        }
      />

      <WorkedExample title="Find n: the first term of 2, 3, 4.5, … above 500">
        <StepBox n={1}>
          <InlineMath math="r = 1.5" />, so{" "}
          <InlineMath math="2(1.5)^{n-1} > 500 \Rightarrow 1.5^{n-1} > 250" />.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="n - 1 > \dfrac{\ln 250}{\ln 1.5} = 13.6 \;\Rightarrow\; n - 1 = 14" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="n = \boxed{15}" />. GDC check: table of{" "}
          <InlineMath math="y = 2(1.5)^{x-1}" /> gives 389.2 at{" "}
          <InlineMath math="x=14" /> (below 500) and 583.9 at{" "}
          <InlineMath math="x=15" />.
        </StepBox>
        <CalcSteps
          steps={[
            <>Logs: <Keys s="ln ( 250 ) ÷ ln ( 1.5 ) enter" /> gives 13.6. Table: <Keys s="y=" /> Y1 = <Keys s="2 × 1.5 ^ ( X − 1 )" />, then <Keys s="2nd graph" /> and scroll to X = 14 and X = 15.</>,
          ]}
        />
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
        <CalcSteps
          steps={[
            <>After 8 years: <Keys s="2400 × 0.95 ^ 8 enter" />. Below 1500: <Keys s="ln ( 1500 ÷ 2400 ) ÷ ln ( 0.95 ) enter" /> gives 9.16, so n = 10. Both logs are negative, so the quotient is positive.</>,
          ]}
        />
      </WorkedExample>

      <Practice
        problem={
          <>
            A town of 15,000 people grows by 2.5% per year. (a) Find the
            population after 10 years, to the nearest whole number. (b) Find
            the first year in which the population exceeds 20,000.
          </>
        }
        answer={
          <>
            <BlockMath math="15000(1.025)^{10} = \boxed{19\,201}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="15000 × 1.025 ^ 10 enter" />. For (b): <Keys s="ln ( 20000 ÷ 15000 ) ÷ ln ( 1.025 ) enter" /> gives 11.65, so round up to 12.</>,
              ]}
            />
            <BlockMath math="1.025^n > \dfrac{4}{3} \Rightarrow n > \dfrac{\ln(4/3)}{\ln 1.025} = 11.65 \Rightarrow n = \boxed{12}" />
            (check: 19,681 after 11 years, 20,173 after 12).
          </>
        }
      />

      <WorkedExample title="Extension: sum to infinity of 24, 12, 6, … and a bouncing ball">
        <StepBox n={1}>
          <InlineMath math="r = \frac12" />, and{" "}
          <InlineMath math="|r| < 1" /> so the series converges:
          <BlockMath math="S_\infty = \dfrac{24}{1 - \frac12} = \boxed{48}" />
        </StepBox>
        <StepBox n={2}>
          A ball is dropped from 3 m and rebounds to 80% of its previous
          height each time. After the drop, the heights rise 2.4, 1.92, …, so
          the rebounds sum to{" "}
          <InlineMath math="\dfrac{2.4}{1-0.8} = 12" /> m, travelled up and
          down.
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="\text{total distance} = 3 + 2(12) = \boxed{27\ \text{m}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Find <InlineMath math="S_\infty" /> for{" "}
            <InlineMath math="18,\ 12,\ 8,\ \dots" />. A series has{" "}
            <InlineMath math="r = 0.9" /> and{" "}
            <InlineMath math="S_\infty = 50" />; find{" "}
            <InlineMath math="u_1" />.
          </>
        }
        answer={
          <>
            <BlockMath math="r = \tfrac23,\quad S_\infty = \dfrac{18}{1/3} = \boxed{54}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="18 ÷ ( 1 − 12 ÷ 18 ) enter" />. For the second part: <Keys s="50 × ( 1 − 0.9 ) enter" />.</>,
              ]}
            />
            <BlockMath math="50 = \dfrac{u_1}{1-0.9} \Rightarrow u_1 = 50(0.1) = \boxed{5}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/geometric"
        label="Session 2: Geometric Sequences and Series (5 questions, 45 marks)"
      />
    </LessonSection>
  );
}

