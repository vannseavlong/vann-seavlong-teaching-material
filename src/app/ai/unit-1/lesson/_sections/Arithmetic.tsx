import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink, Keys, CalcSteps } from "./helpers";

// ─── 3. Arithmetic Sequences & Series ─────────────────────────────────────────

export default function ArithmeticSection() {
  return (
    <LessonSection
      id="arithmetic"
      label="Revision 1"
      title="Arithmetic Sequences & Series"
      tag={<SLTag />}
      intro="Arithmetic sequences model linear growth: a fixed weekly saving, a fixed yearly pay rise, a fixed number of extra seats per row."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          A sequence is arithmetic if every term differs from the previous one by the
          same number <InlineMath math="d" />. A <em>sequence</em> is the list of
          terms; a <em>series</em> is their <strong>sum</strong>. The formulas for{" "}
          <InlineMath math="u_n" /> and <InlineMath math="S_n" /> are in the IB
          formula booklet.
        </p>
      </HighlightBox>

      <FormulaBox title="Group 1: Sequence (nth term)">
        <FormulaRow label="Common difference" math="d = u_{n+1} - u_n" />
        <FormulaRow label="nth term" math="u_n = u_1 + (n-1)d" />
        <FormulaRow label="Two terms given" math="u_q - u_p = (q-p)d" />
      </FormulaBox>

      <FormulaBox title="Group 2: Series (sum of n terms)">
        <FormulaRow label="Sum, using d" math="S_n = \dfrac{n}{2}\left(2u_1 + (n-1)d\right)" />
        <FormulaRow label="Sum, using last term" math="S_n = \dfrac{n}{2}\left(u_1 + u_n\right)" />
      </FormulaBox>

      <FormulaBox title="Group 3: Sigma notation">
        <FormulaRow label="Meaning" math="\sum_{k=1}^{n}u_k = u_1 + u_2 + \cdots + u_n" />
        <FormulaRow label="Number of terms" math="\sum_{k=a}^{b}\ \text{has}\ b-a+1\ \text{terms}" />
        <FormulaRow label="Linear rule" math="u_k = pk + q \Rightarrow d = p,\ u_1 = p+q" />
      </FormulaBox>

      {/* Visual: step-flow */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-4">
          Add the same d each step: 7, 11, 15, 19, 23
        </p>
        <div className="flex items-center gap-2 min-w-max">
          {["7", "11", "15", "19", "23"].map((t, i) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-14 h-12 rounded-lg bg-navy-900 text-white font-mono font-semibold flex items-center justify-center">
                {t}
              </span>
              {i < 4 && (
                <span className="text-xs font-bold text-ai-primary bg-ai-bg rounded-full px-2 py-1">
                  +4 →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          <InlineMath math="u_1 = 7,\; d = 4" />. The terms change by a constant
          amount, never by a constant factor (that is geometric).
        </p>
      </div>

      <CalcSteps
        steps={[
          <>One term: type the formula with brackets, <Keys s="3 + ( 25 − 1 ) × 5 enter" />.</>,
          <>Table of terms: press <Keys s="y=" /> and type Y1 as the rule, using <Keys s="X,T,θ,n" /> for n, for example <Keys s="3 + 5 ( X − 1 )" />. Press <Keys s="2nd window" /> (TBLSET), set TblStart = 1 and ΔTbl = 1, then press <Keys s="2nd graph" /> (TABLE) and scroll to read terms.</>,
          <>Sum of a rule: sum( is under <Keys s="2nd stat" />, MATH, 5:sum(. seq( is under <Keys s="2nd stat" />, OPS, 5:seq(. Type sum(seq(3X + 2, X, 1, 20)) and press <Keys s="enter" />. The four seq( inputs are rule, variable, start, end.</>,
          <>Find n for a target value: press <Keys s="math" />, choose 0:Solver... Type the equation as 0 = rule minus target, for example <Keys s="3 + 5 ( X − 1 ) − 188" /> after the 0 =, press <Keys s="enter" />, type a guess for X, put the cursor on X and press <Keys s="alpha enter" />.</>,
          <>To find the first n where a sum passes a target, put S_n in Y1 and scroll the table until it crosses the target. Read the n just before and just after.</>,
        ]}
      />

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">Choose the method</p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            Know <InlineMath math="u_1" /> and <InlineMath math="d" />: use{" "}
            <InlineMath math="u_n" /> for a term, <InlineMath math="S_n" /> with{" "}
            <InlineMath math="d" /> for a total.
          </li>
          <li>
            Know <InlineMath math="u_1" /> and the last term: use{" "}
            <InlineMath math="S_n=\frac{n}{2}(u_1+u_n)" />.
          </li>
          <li>
            Two terms given: subtract them to get <InlineMath math="d" /> first.
          </li>
          <li>
            &ldquo;Find <InlineMath math="n" />&rdquo; for a target term: solve{" "}
            <InlineMath math="u_n=\text{value}" />. For a target sum or an
            inequality on <InlineMath math="S_n" />, use the GDC table.
          </li>
          <li>
            GDC: enter <InlineMath math="u_n" /> or <InlineMath math="S_n" /> as a
            function of <InlineMath math="n" /> in the table or equation solver, or
            use the sequence and sum commands for sigma.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="Find the 25th term and the position of 188 in 3, 8, 13, 18, …">
        <StepBox n={1}>
          <InlineMath math="u_1 = 3" />, <InlineMath math="d = 8-3 = 5" />.
          <BlockMath math="u_{25} = 3 + 24(5) = \boxed{123}" />
        </StepBox>
        <StepBox n={2}>
          Set <InlineMath math="u_n = 188" />.
          <BlockMath math="3 + 5(n-1) = 188 \;\Rightarrow\; n-1 = 37 \;\Rightarrow\; n = \boxed{38}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>u_25: <Keys s="3 + 24 × 5 enter" /> gives 123.</>,
            <>Position of 188: open <Keys s="math" />, 0:Solver..., enter 0 = <Keys s="3 + 5 ( X − 1 ) − 188" />, guess X = 10, cursor on X, <Keys s="alpha enter" />. X = 38.</>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Given u₅ = 22 and u₁₂ = 57, find u₁, d and S₁₂">
        <StepBox n={1}>
          <BlockMath math="u_{12} - u_5 = 7d = 35 \;\Rightarrow\; d = \boxed{5}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_1 = u_5 - 4d = 22 - 20 = \boxed{2}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="S_{12} = \dfrac{12}{2}(2 + 57) = 6 \times 59 = \boxed{354}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>Type <Keys s="12 ÷ 2 × ( 2 + 57 ) enter" /> to get 354.</>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Evaluate the sum of 3k + 2 for k = 1 to 20">
        <StepBox n={1}>
          The rule is linear, so the terms are arithmetic: <InlineMath math="u_1 = 5" />,{" "}
          <InlineMath math="d = 3" />, 20 terms.
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="u_{20} = 3(20)+2 = 62" />.
          <BlockMath math="S_{20} = \dfrac{20}{2}(5 + 62) = 10 \times 67 = \boxed{670}" />
        </StepBox>
        <StepBox n={3}>
          GDC check: sum of the sequence <InlineMath math="3X+2" /> for{" "}
          <InlineMath math="X" /> from 1 to 20 gives 670.
        </StepBox>
        <CalcSteps
          steps={[
            <>Press <Keys s="2nd stat" />, MATH, 5:sum(, then <Keys s="2nd stat" />, OPS, 5:seq(. Complete it as sum(seq(3X + 2, X, 1, 20)) with <Keys s="X,T,θ,n" /> for X, then press <Keys s="enter" />. The answer is 670.</>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Application: a hall has 18 seats in row 1 and 3 more in each next row. Find the least number of rows for at least 1000 seats">
        <StepBox n={1}>
          <InlineMath math="u_1 = 18" />, <InlineMath math="d = 3" />.
          <BlockMath math="S_n = \dfrac{n}{2}\left(36 + 3(n-1)\right) = \dfrac{n}{2}(3n+33)" />
        </StepBox>
        <StepBox n={2}>
          Solve <InlineMath math="S_n \geq 1000" /> with the GDC table:
          <BlockMath math="S_{20} = 930 < 1000, \qquad S_{21} = 1008 \geq 1000" />
        </StepBox>
        <CalcSteps
          steps={[
            <>Press <Keys s="y=" /> and type Y1 = <Keys s="X ÷ 2 × ( 36 + 3 ( X − 1 ) )" />. Press <Keys s="2nd graph" /> (TABLE) and scroll: X = 20 gives 930, X = 21 gives 1008. The first value of at least 1000 is at X = 21.</>,
          ]}
        />
        <StepBox n={3}>
          The least number of rows is <InlineMath math="n = \boxed{21}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            The sequence <InlineMath math="100,\ 94,\ 88,\ \dots" /> is
            arithmetic. Find <InlineMath math="u_{15}" /> and{" "}
            <InlineMath math="S_{15}" />.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="d = -6" />
            </p>
            <BlockMath math="u_{15} = 100 + 14(-6) = \boxed{16}" />
            <BlockMath math="S_{15} = \dfrac{15}{2}(100+16) = \boxed{870}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="100 + 14 × (−) 6 enter" /> for u_15, then <Keys s="15 ÷ 2 × ( 100 + 16 ) enter" />. Use <Keys s="(−)" /> for the negative d.</>,
              ]}
            />
          </>
        }
      />
      <Practice
        problem={
          <>
            An arithmetic sequence has <InlineMath math="u_4 = 17" /> and{" "}
            <InlineMath math="u_9 = -3" />. Find <InlineMath math="d" />,{" "}
            <InlineMath math="u_1" /> and <InlineMath math="S_{20}" />.
          </>
        }
        answer={
          <>
            <BlockMath math="5d = -3 - 17 = -20 \;\Rightarrow\; d = \boxed{-4}" />
            <BlockMath math="u_1 = 17 + 3(4) = \boxed{29}" />
            <BlockMath math="u_{20} = 29 - 19(4) = -47, \quad S_{20} = 10(29 - 47) = \boxed{-180}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            For <InlineMath math="5,\ 9,\ 13,\ \dots" /> find the first term
            greater than 200.
          </>
        }
        answer={
          <>
            <BlockMath math="5 + 4(n-1) > 200 \;\Rightarrow\; n-1 > 48.75 \;\Rightarrow\; n = 50" />
            <p>
              <InlineMath math="u_{50} = 5 + 49(4) = \boxed{201}" />, and{" "}
              <InlineMath math="u_{49} = 197" /> is too small.
            </p>
          </>
        }
      />
      <Practice
        problem={
          <>
            Evaluate <InlineMath math="\sum_{k=1}^{15}(4k-1)" />.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="u_1 = 3" />, <InlineMath math="u_{15} = 59" />, 15 terms.
            </p>
            <BlockMath math="S_{15} = \dfrac{15}{2}(3 + 59) = 7.5 \times 62 = \boxed{465}" />
            <CalcSteps
              steps={[
                <>Type sum(seq(4X − 1, X, 1, 15)) using <Keys s="2nd stat" /> menus as in the toolkit, then <Keys s="enter" />. The answer is 465.</>,
              ]}
            />
          </>
        }
      />
      <Practice
        problem={
          <>
            Vanna saves $20 in week 1 and increases her saving by $5 each week.
            (a) Find her total savings after 30 weeks. (b) Find the first week
            in which her total savings exceed $1000.
          </>
        }
        answer={
          <>
            <BlockMath math="\text{(a)}\quad S_{30} = \dfrac{30}{2}\left(2(20) + 29(5)\right) = 15 \times 185 = \boxed{\$2775}" />
            <BlockMath math="\text{(b)}\quad S_n = \dfrac{n}{2}(5n+35)" />
            <BlockMath math="S_{16} = 920 < 1000, \qquad S_{17} = 1020 > 1000" />
            <p>
              Week <InlineMath math="\boxed{17}" />.
            </p>
            <CalcSteps
              steps={[
                <>Put Y1 = <Keys s="X ÷ 2 × ( 5 X + 35 )" /> in <Keys s="y=" /> and open the table: X = 16 gives 920, X = 17 gives 1020.</>,
              ]}
            />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/arithmetic"
        label="Session 1: Arithmetic Sequences and Series (5 questions, 40 marks)"
      />
    </LessonSection>
  );
}
