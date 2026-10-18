import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

// ─── 5. Rounding ──────────────────────────────────────────────────────────────

export default function RoundingSection() {
  return (
    <LessonSection
      id="rounding"
      label="Revision 4"
      title="Rounding & Standard Form"
      tag={<SLTag />}
      intro="Rounding shows how precise a value is. In IB exams the default is 3 significant figures unless the question says otherwise. Never round in the middle of a calculation."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Find the place you round to, then check the digit{" "}
          <strong>immediately to its right</strong>. If it is{" "}
          <strong>5 or more</strong>, round up. If it is{" "}
          <strong>4 or less</strong>, keep the digit. Zeros that hold place
          value stay (<InlineMath math="5972 \to 6000" />). Check the digit to
          the right only, never round twice.
        </p>
      </HighlightBox>

      <FormulaBox title="Decimal places and significant figures">
        <FormulaRow
          label="Decimal places (d.p.)"
          math="\text{count digits after the decimal point}"
        />
        <FormulaRow
          label="Significant figures (s.f.)"
          math="\text{count from the first non-zero digit}"
        />
        <FormulaRow
          label="Zeros that count"
          math="\text{between non-zero digits, and trailing after the point}"
        />
        <FormulaRow
          label="Zeros that do not count"
          math="\text{leading zeros, e.g. } 0.0070 \text{ has 2 s.f.}"
        />
      </FormulaBox>

      <FormulaBox title="Standard form">
        <FormulaRow
          label="Definition"
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
        <FormulaRow
          label="Add / subtract"
          math="\text{write both with the same power of 10, then add } a \text{ values}"
        />
        <FormulaRow
          label="Renormalise"
          math="15\times10^{7} = 1.5\times10^{8}"
        />
      </FormulaBox>

      <FormulaBox title="Rounding in context">
        <FormulaRow label="Default accuracy" math="\text{exact, or 3 s.f.}" />
        <FormulaRow label="Money" math="2 \text{ d.p.}" />
        <FormulaRow
          label="Whole items (packs, buses)"
          math="\text{round up to the next whole number}"
        />
        <FormulaRow
          label="Multi-step"
          math="\text{keep full GDC value, round the final answer only}"
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
          GDC: full values and scientific mode
        </p>
        <ul className="list-disc pl-5 text-slate-500 text-sm space-y-1">
          <li>
            Press <em>Ans</em> to reuse the unrounded previous result. Do not
            retype a rounded value.
          </li>
          <li>
            Store a long value with <em>STO</em> into a letter (for example A)
            and use A in the next line.
          </li>
          <li>
            Standard form: enter numbers with the <em>EXP</em> key (
            <InlineMath math="2.4\times10^{6}" /> is 2.4 EXP 6). Set
            Sci mode to display answers as <InlineMath math="a\times10^{k}" />.
          </li>
          <li>
            Early rounding changes the answer. Using{" "}
            <InlineMath math="1.04" /> instead of <InlineMath math="1.0375" />{" "}
            in <InlineMath math="2000(1.0375)^{8}" /> gives{" "}
            <InlineMath math="2737.14" /> instead of{" "}
            <InlineMath math="2684.94" />, a difference of $52.20.
          </li>
        </ul>
      </HighlightBox>

      <WorkedExample title="Round 3.14159 to 3 d.p. and to 3 s.f.">
        <StepBox n={1}>
          3 d.p.: the 4th decimal is 5, so round up:{" "}
          <InlineMath math="\boxed{3.142}" />
        </StepBox>
        <StepBox n={2}>
          3 s.f.: the digits are 3, 1, 4 and the next digit is 1, so keep:{" "}
          <InlineMath math="\boxed{3.14}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Round 0.007049 to 2 s.f.">
        <StepBox n={1}>
          Significant digits start at the 7: <InlineMath math="7,\,0,\,4,\,9" />.
        </StepBox>
        <StepBox n={2}>
          The 3rd s.f. is 4, so keep. Write the zero:{" "}
          <InlineMath math="\boxed{0.0070}" />. The trailing zero shows 2 s.f.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the diagonal of a 7.46 cm by 3.28 cm rectangle to 3 s.f.">
        <StepBox n={1}>
          <InlineMath math="d = \sqrt{7.46^2 + 3.28^2} = \sqrt{55.6516 + 10.7584}" />
          . Store <InlineMath math="\sqrt{66.41}" /> on the GDC:{" "}
          <InlineMath math="8.14923\ldots" />
        </StepBox>
        <StepBox n={2}>
          Round the final answer only:{" "}
          <InlineMath math="d = \boxed{8.15\text{ cm}}" />
        </StepBox>
        <StepBox n={3}>
          Check the early-rounding error: rounding the squares to 2 s.f. gives{" "}
          <InlineMath math="\sqrt{56+11} = \sqrt{67} \approx 8.19" />, which is
          wrong in the 3rd s.f.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Standard form: convert, multiply, add">
        <StepBox n={1}>
          <InlineMath math="0.000508 = \boxed{5.08 \times 10^{-4}}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="(2.5\times10^4)(6\times10^3) = 15 \times 10^{7}" />, but{" "}
          <InlineMath math="a" /> must be below 10:
          <BlockMath math="15 \times 10^7 = \boxed{1.5 \times 10^{8}}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="3.2\times10^{5} + 4.5\times10^{4} = 32\times10^{4} + 4.5\times10^{4} = 36.5\times10^{4}" />
          <BlockMath math="= \boxed{3.65\times10^{5}}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Round up for whole items">
        <StepBox n={1}>
          A cylinder has radius 4.5 cm and height 12.8 cm.{" "}
          <InlineMath math="V = \pi(4.5)^2(12.8) = 814.30\ldots \approx \boxed{814\text{ cm}^3}" />{" "}
          (3 s.f.).
        </StepBox>
        <StepBox n={2}>
          Cups of 250 cm³ needed to fill it:{" "}
          <InlineMath math="814.30 \div 250 = 3.257\ldots" />. You cannot buy
          part of a cup, so <InlineMath math="\boxed{4}" /> cups.
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
              <InlineMath math="7.996 \to \boxed{8.00}" />. Keep both decimal
              places.
            </p>
          </>
        }
      />
      <Practice
        problem={
          <>
            A rectangular tank has base area <InlineMath math="1250\text{ cm}^2" />.
            Each pack of tiles covers <InlineMath math="84\text{ cm}^2" />.
            Find the number of packs needed to cover the base.
          </>
        }
        answer={
          <>
            <BlockMath math="1250 \div 84 = 14.88\ldots" />
            <p>
              Whole packs only, so round up: <InlineMath math="\boxed{15}" /> packs.
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
            <InlineMath math="\dfrac{2.4\times10^{6}}{8\times10^{-2}}" /> and{" "}
            <InlineMath math="7.8\times10^{6} - 2.5\times10^{5}" />, giving both
            in standard form.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{2.4}{8} \times 10^{6-(-2)} = 0.3 \times 10^{8} = \boxed{3\times10^{7}}" />
            <BlockMath math="78\times10^{5} - 2.5\times10^{5} = 75.5\times10^{5} = \boxed{7.55\times10^{6}}" />
          </>
        }
      />
      <Practice
        problem={
          <>
            Light travels at <InlineMath math="3\times10^{8}\text{ m s}^{-1}" />.
            The Sun is <InlineMath math="1.5\times10^{11}\text{ m}" /> from
            Earth. Find the time for light to arrive, in seconds and in minutes
            to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="t = \dfrac{1.5\times10^{11}}{3\times10^{8}} = \boxed{5\times10^{2}\text{ s}}" />
            <BlockMath math="500 \div 60 = 8.333\ldots = \boxed{8.33\text{ minutes}}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/rounding"
        label="Session 4: Rounding (6 questions)"
      />
    </LessonSection>
  );
}

