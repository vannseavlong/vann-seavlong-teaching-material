import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

// ─── 5. Rounding ──────────────────────────────────────────────────────────────

export default function RoundingSection() {
  return (
    <LessonSection
      id="rounding"
      label="Revision 4"
      title="Rounding & Estimation"
      tag={<SLTag />}
      intro="Rounding shows how precise a value is. In IB exams the default is 3 significant figures unless the question says otherwise — and you must never round in the middle of a calculation."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Find the place you are rounding to, then look at the digit{" "}
          <strong>immediately to its right</strong>. If it is{" "}
          <strong>5 or more</strong>, round up; if it is{" "}
          <strong>4 or less</strong>, leave the digit as it is. Place-value
          zeros are kept (<InlineMath math="5972 \to 6000" />).
        </p>
      </HighlightBox>

      <FormulaBox title="Rounding & Standard Form">
        <FormulaRow
          label="Decimal places (d.p.)"
          math="\text{count digits after the decimal point}"
        />
        <FormulaRow
          label="Significant figures (s.f.)"
          math="\text{count from the first non-zero digit}"
        />
        <FormulaRow
          label="Standard form"
          math="a \times 10^{k},\quad 1 \le a < 10,\; k \in \mathbb{Z}"
        />
        <FormulaRow
          label="Multiply"
          math="(a\times10^m)(b\times10^n) = ab \times 10^{m+n}"
        />
        <FormulaRow
          label="Divide"
          math="\dfrac{a\times10^m}{b\times10^n} = \dfrac{a}{b} \times 10^{m-n}"
        />
      </FormulaBox>

      {/* Visual: significant-figure table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          Which digits are significant?
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Number</th>
                <th className="px-5 py-3 font-semibold">Significant digits</th>
                <th className="px-5 py-3 font-semibold">To 2 s.f.</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "0.004068", d: "4, 0, 6, 8 (leading zeros don't count)", r: "0.0041" },
                { n: "5972", d: "5, 9, 7, 2", r: "6000" },
                { n: "30.07", d: "3, 0, 0, 7 (zeros between count)", r: "30" },
                { n: "2.50", d: "2, 5, 0 (trailing zero after the point counts)", r: "2.5" },
              ].map(({ n, d, r }, i) => (
                <tr key={n} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-mono font-semibold text-ai-primary">{n}</td>
                  <td className="px-5 py-3 text-navy-900">{d}</td>
                  <td className="px-5 py-3 font-mono text-slate-500">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Never round early — and round the right way for the context
        </p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            Keep full GDC values (use the <em>Ans</em>/memory keys) and round
            only the final answer. Rounding the multiplier{" "}
            <InlineMath math="1.0375" /> to <InlineMath math="1.04" /> before
            raising it to the 8th power changes a $2,000 investment by about
            $52.
          </li>
          <li>
            Money: 2 decimal places. Otherwise 3 s.f. unless told otherwise.
          </li>
          <li>
            Things you can only buy whole (packs, buses, boxes): round{" "}
            <strong>up</strong> — 14.96 packs means 15 packs.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="Round 3.14159 to 3 d.p. and to 3 s.f.">
        <StepBox n={1}>
          3 d.p.: the 4th decimal is 5 → round up:{" "}
          <InlineMath math="\boxed{3.142}" />
        </StepBox>
        <StepBox n={2}>
          3 s.f.: the digits are 3, 1, 4 and the next digit is 1 → stay:{" "}
          <InlineMath math="\boxed{3.14}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Zeros: round 0.007049 to 2 s.f.">
        <StepBox n={1}>
          Significant digits start at the 7: <InlineMath math="7,\,0,\,4,\,9" />.
        </StepBox>
        <StepBox n={2}>
          The 3rd s.f. is 4 → stay. Keep the zero:{" "}
          <InlineMath math="\boxed{0.0070}" /> — the trailing zero shows 2 s.f.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Standard form">
        <StepBox n={1}>
          <InlineMath math="0.000508 = \boxed{5.08 \times 10^{-4}}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="(2.5\times10^4)(6\times10^3) = 15 \times 10^{7}" />, but{" "}
          <InlineMath math="a" /> must be below 10:
          <BlockMath math="15 \times 10^7 = \boxed{1.5 \times 10^{8}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Round <InlineMath math="28\,965" /> to 2 s.f. and{" "}
            <InlineMath math="7.996" /> to 2 d.p.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="28\,965 \to \boxed{29\,000}" />
            </p>
            <p>
              <InlineMath math="7.996 \to \boxed{8.00}" /> (keep both decimal
              places).
            </p>
          </>
        }
      />
      <Practice
        problem={
          <>
            Write <InlineMath math="0.0000372" /> and{" "}
            <InlineMath math="83\,000\,000\,000" /> in standard form.
          </>
        }
        answer={
          <>
            <BlockMath math="0.0000372 = \boxed{3.72\times10^{-5}}" />
            <BlockMath math="83\,000\,000\,000 = \boxed{8.3\times10^{10}}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            Calculate{" "}
            <InlineMath math="\dfrac{2.4\times10^{6}}{8\times10^{-2}}" /> in
            standard form.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{2.4}{8} \times 10^{6-(-2)} = 0.3 \times 10^{8} = \boxed{3\times10^{7}}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/rounding"
        label="Session 4 — Rounding (6 questions)"
      />
    </LessonSection>
  );
}

