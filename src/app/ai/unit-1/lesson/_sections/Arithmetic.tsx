import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

// ─── 3. Arithmetic Sequences & Series ─────────────────────────────────────────

export default function ArithmeticSection() {
  return (
    <LessonSection
      id="arithmetic"
      label="Revision 1"
      title="Arithmetic Sequences & Series"
      tag={<SLTag />}
      intro="An arithmetic sequence goes up (or down) by the same amount every step. Linear growth — a fixed weekly saving, a salary rise of a fixed dollar amount, seats added row by row — is arithmetic."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Subtract any term from the next one. If you always get the{" "}
          <strong>same number</strong> <InlineMath math="d" />, the sequence is
          arithmetic. A <em>sequence</em> is the list of terms; a{" "}
          <em>series</em> is what you get when you <strong>add</strong> them.
        </p>
      </HighlightBox>

      <FormulaBox title="Arithmetic Sequence">
        <FormulaRow label="Common difference" math="d = u_{n+1} - u_n" />
        <FormulaRow label="nth term" math="u_n = u_1 + (n-1)d" />
      </FormulaBox>

      <FormulaBox title="Arithmetic Series (sum of n terms)">
        <FormulaRow
          label="Sum — using d"
          math="S_n = \dfrac{n}{2}\left(2u_1 + (n-1)d\right)"
        />
        <FormulaRow
          label="Sum — using last term"
          math="S_n = \dfrac{n}{2}\left(u_1 + u_n\right)"
        />
        <FormulaRow
          label="Sigma notation"
          math="\sum_{k=1}^{n}u_k = u_1 + u_2 + \cdots + u_n"
        />
      </FormulaBox>

      {/* Visual: step-flow */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 my-5 overflow-x-auto">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-4">
          Add the same d each step — e.g. 7, 11, 15, 19, …
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
          <InlineMath math="u_1 = 7,\; d = 4" /> — a straight-line pattern:
          the terms change by a constant amount, never by a constant factor.
        </p>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">Which formula? Finding n?</p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            Know <InlineMath math="u_1" /> and <InlineMath math="d" /> → use{" "}
            <InlineMath math="u_n = u_1+(n-1)d" /> for a term and the first
            sum formula for a total.
          </li>
          <li>
            Know the last term → use{" "}
            <InlineMath math="S_n=\frac{n}{2}(u_1+u_n)" />.
          </li>
          <li>
            Two terms given (e.g. <InlineMath math="u_3" /> and{" "}
            <InlineMath math="u_8" />) → subtract them:{" "}
            <InlineMath math="u_8-u_3 = 5d" />.
          </li>
          <li>
            &ldquo;Find <InlineMath math="n" /> such that…&rdquo; → solve{" "}
            <InlineMath math="u_n = \text{value}" /> directly, or tabulate{" "}
            <InlineMath math="S_n" /> on the GDC for an inequality.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="nth term and finding n: 3, 8, 13, 18, …">
        <StepBox n={1}>
          <InlineMath math="u_1 = 3" />, <InlineMath math="d = 8-3 = 5" />. The
          25th term:
          <BlockMath math="u_{25} = 3 + 24(5) = \boxed{123}" />
        </StepBox>
        <StepBox n={2}>
          Which term equals 188?
          <BlockMath math="3 + 5(n-1) = 188 \;\Rightarrow\; n-1 = 37 \;\Rightarrow\; n = \boxed{38}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Sum of the first 25 terms of 3, 8, 13, …">
        <StepBox n={1}>
          From above, <InlineMath math="u_1 = 3" /> and{" "}
          <InlineMath math="u_{25} = 123" />.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="S_{25} = \dfrac{25}{2}(3 + 123) = 12.5 \times 126 = \boxed{1575}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Two terms given: u₅ = 22 and u₁₂ = 57">
        <StepBox n={1}>
          <BlockMath math="u_{12} - u_5 = 7d = 35 \;\Rightarrow\; d = 5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="u_1 = u_5 - 4d = 22 - 20 = \boxed{2}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="S_{12} = \dfrac{12}{2}(2 + 57) = 6 \times 59 = \boxed{354}" />
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
          </>
        }
      />
      <Practice
        problem={
          <>
            Vanna saves $20 in week 1 and increases her saving by $5 each
            week. How much has she saved in total after 30 weeks?
          </>
        }
        answer={
          <>
            <BlockMath math="S_{30} = \dfrac{30}{2}\left(2(20) + 29(5)\right) = 15 \times 185 = \boxed{\$2{,}775}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            For <InlineMath math="5,\ 9,\ 13,\ \dots" /> find the first term
            that is greater than 200.
          </>
        }
        answer={
          <>
            <BlockMath math="5 + 4(n-1) > 200 \;\Rightarrow\; n-1 > 48.75 \;\Rightarrow\; n = 50" />
            <p>
              <InlineMath math="u_{50} = 5 + 49(4) = \boxed{201}" /> (and{" "}
              <InlineMath math="u_{49} = 197" /> is too small).
            </p>
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/arithmetic"
        label="Session 1 — Arithmetic Sequences and Series (6 questions)"
      />
    </LessonSection>
  );
}

