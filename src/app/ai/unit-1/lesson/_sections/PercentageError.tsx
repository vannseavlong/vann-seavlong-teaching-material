import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink, Keys, CalcSteps } from "./helpers";

// ─── 7. Percentage Error ──────────────────────────────────────────────────────

export default function PercentageErrorSection() {
  return (
    <LessonSection
      id="percentage-error"
      label="Revision 6"
      title="Percentage Error"
      tag={<SLTag />}
      intro="Compare an approximate value with the exact value using absolute error and percentage error. Used for measurements, early rounding and bounds."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Percentage error is the size of the mistake as a percentage of the{" "}
          <strong>exact value</strong>. Always divide by{" "}
          <InlineMath math="v_E" />, never by the estimate{" "}
          <InlineMath math="v_A" />. The modulus bars make the answer
          positive, so it shows how big the error is, not its direction.
        </p>
      </HighlightBox>

      <FormulaBox title="Group 1: Absolute and percentage error">
        <FormulaRow label="Approximate value" math="v_A = \text{measured or estimated value}" />
        <FormulaRow label="Exact value" math="v_E = \text{true value}" />
        <FormulaRow label="Absolute error" math="|v_A - v_E|" />
        <FormulaRow
          label="Percentage error"
          math="\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100\%"
        />
      </FormulaBox>

      <FormulaBox title="Group 2: Working backwards">
        <FormulaRow
          label="Exact value from v_A and ε"
          math="v_E = \dfrac{v_A}{1 + \varepsilon/100} \quad\text{or}\quad v_E = \dfrac{v_A}{1 - \varepsilon/100}"
        />
        <FormulaRow
          label="Estimate from v_E and ε"
          math="v_A = v_E\left(1 \pm \dfrac{\varepsilon}{100}\right)"
        />
        <FormulaRow label="Number of answers" math="\text{two values, because the sign was removed by } |\ |" />
      </FormulaBox>

      <FormulaBox title="Group 3: Error from rounding and bounds">
        <FormulaRow
          label="Bounds, nearest unit u"
          math="v - \dfrac{u}{2} \le x < v + \dfrac{u}{2}"
        />
        <FormulaRow
          label="Greatest possible error"
          math="\text{use the bound closest to } 0 \text{ as } v_E"
        />
        <FormulaRow
          label="Effect of early rounding"
          math="v_A = \text{rounded calculation}, \quad v_E = \text{unrounded calculation}"
        />
      </FormulaBox>

      <div className="my-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-navy-900">
            <tr>
              <th className="px-4 py-2 text-left">Given</th>
              <th className="px-4 py-2 text-left">Find</th>
              <th className="px-4 py-2 text-left">Method</th>
            </tr>
          </thead>
          <tbody className="text-slate-500">
            <tr className="border-t border-slate-200">
              <td className="px-4 py-2"><InlineMath math="v_A,\ v_E" /></td>
              <td className="px-4 py-2"><InlineMath math="\varepsilon" /></td>
              <td className="px-4 py-2">Substitute into the formula</td>
            </tr>
            <tr className="border-t border-slate-200">
              <td className="px-4 py-2"><InlineMath math="v_A,\ \varepsilon" /></td>
              <td className="px-4 py-2"><InlineMath math="v_E" /></td>
              <td className="px-4 py-2">Divide by <InlineMath math="1\pm\varepsilon/100" /></td>
            </tr>
            <tr className="border-t border-slate-200">
              <td className="px-4 py-2"><InlineMath math="v_E,\ \varepsilon" /></td>
              <td className="px-4 py-2"><InlineMath math="v_A" /></td>
              <td className="px-4 py-2">Multiply <InlineMath math="v_E" /> by <InlineMath math="1\pm\varepsilon/100" /></td>
            </tr>
            <tr className="border-t border-slate-200">
              <td className="px-4 py-2">Measurement to nearest unit</td>
              <td className="px-4 py-2">Greatest <InlineMath math="\varepsilon" /></td>
              <td className="px-4 py-2">Test both bounds, keep the larger result</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CalcSteps
        steps={[
          <>The absolute value is under <Keys s="math" />, NUM, 1:abs(. Type the whole formula in one line: abs( then <Keys s="2.4 − 2.5 ) ÷ 2.5 × 100 enter" />.</>,
          <>Divide by the exact value. Check that the number after ÷ is v_E, not the estimate.</>,
          <>Store long values: <Keys s="22 ÷ 7 sto→ alpha A enter" /> and <Keys s="2nd ^ sto→ alpha B enter" /> (π). Then abs( <Keys s="alpha A − alpha B ) ÷ alpha B × 100 enter" />.</>,
          <>Working backwards, two lines give the two answers: <Keys s="80 ÷ 1.05 enter" /> and <Keys s="80 ÷ 0.95 enter" />.</>,
          <>Greatest error from a measurement: type the formula once for each bound. Press <Keys s="2nd enter" /> to recall the line and edit the bound.</>,
          <>Give ε to 3 s.f. unless the question says otherwise.</>,
        ]}
      />

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-1">Exam tip</p>
        <p className="text-slate-500 text-sm">
          On the GDC, store the unrounded result and recall it with Ans. Do not
          retype a rounded value. Give <InlineMath math="\varepsilon" /> to 3
          s.f. unless told otherwise.
        </p>
      </HighlightBox>

      <WorkedExample title="Find the percentage error">
        <p className="text-sm text-slate-500 mb-4">
          A table is measured as 2.4 m. Its true length is 2.5 m.
        </p>
        <StepBox n={1}>
          Absolute error: <InlineMath math="|2.4 - 2.5| = 0.1" /> m.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\varepsilon = \left|\dfrac{2.4 - 2.5}{2.5}\right| \times 100 = \boxed{4\%}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>Press <Keys s="math" />, NUM, 1:abs(, then <Keys s="2.4 − 2.5 ) ÷ 2.5 × 100 enter" /> gives 4.</>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Find the possible exact values">
        <p className="text-sm text-slate-500 mb-4">
          A reading of 80 has a percentage error of 5%. Find the possible exact
          values, to 3 s.f.
        </p>
        <StepBox n={1}>
          Reading too high (<InlineMath math="v_E < 80" />):{" "}
          <InlineMath math="v_E = \dfrac{80}{1.05} = 76.2" />.
        </StepBox>
        <StepBox n={2}>
          Reading too low (<InlineMath math="v_E > 80" />):{" "}
          <InlineMath math="v_E = \dfrac{80}{0.95} = 84.2" />.
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="\boxed{v_E = 76.2 \text{ or } 84.2}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>Type <Keys s="80 ÷ 1.05 enter" /> for 76.19... and <Keys s="80 ÷ 0.95 enter" /> for 84.21...</>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Find the greatest possible percentage error">
        <p className="text-sm text-slate-500 mb-4">
          A rod is measured as 20 cm to the nearest cm. Find the greatest
          possible percentage error.
        </p>
        <StepBox n={1}>
          Bounds: <InlineMath math="19.5 \le x < 20.5" />.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\dfrac{|20 - 19.5|}{19.5} \times 100 = 2.56\% \qquad \dfrac{|20 - 20.5|}{20.5} \times 100 = 2.44\%" />
        </StepBox>
        <StepBox n={3}>
          The bound closest to 0 gives the larger error:{" "}
          <InlineMath math="\boxed{2.56\%}" />.
        </StepBox>
        <CalcSteps
          steps={[
            <>Type <Keys s="0.5 ÷ 19.5 × 100 enter" /> for 2.564... and <Keys s="0.5 ÷ 20.5 × 100 enter" /> for 2.439... Keep the larger.</>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Find the error caused by rounding">
        <p className="text-sm text-slate-500 mb-4">
          Use <InlineMath math="\frac{22}{7}" /> as an approximation of{" "}
          <InlineMath math="\pi" />. Find the percentage error, to 3 s.f.
        </p>
        <StepBox n={1}>
          <InlineMath math="v_A = \frac{22}{7} = 3.142857\ldots" />, and{" "}
          <InlineMath math="v_E = \pi = 3.141593\ldots" /> (store both on the
          GDC).
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\varepsilon = \left|\dfrac{\frac{22}{7} - \pi}{\pi}\right| \times 100 = \boxed{0.0402\%}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>Store <Keys s="22 ÷ 7 sto→ alpha A enter" /> and <Keys s="2nd ^ sto→ alpha B enter" />. Then abs( from <Keys s="math" /> NUM, and <Keys s="alpha A − alpha B ) ÷ alpha B × 100 enter" /> gives 0.04024...</>,
          ]}
        />
      </WorkedExample>

      <Practice
        problem={
          <>
            An estimate is 3.2 m. The exact length is 3.0 m. Find the
            percentage error to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{|3.2-3.0|}{3.0} \times 100 = \boxed{6.67\%}" />
            <CalcSteps
              steps={[
                <>abs( <Keys s="3.2 − 3 ) ÷ 3 × 100 enter" />.</>,
              ]}
            />
          </>
        }
      />
      <Practice
        problem={
          <>
            A man&apos;s mass is estimated as 70 kg. It is actually 72 kg. Find
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
            The exact value is 250. The percentage error in an estimate is 6%.
            Find the two possible estimates.
          </>
        }
        answer={
          <>
            <BlockMath math="250 \times 0.06 = 15 \;\Rightarrow\; \boxed{235 \text{ or } 265}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="250 × 0.94 enter" /> and <Keys s="250 × 1.06 enter" />.</>,
              ]}
            />
          </>
        }
      />
      <Practice
        problem={
          <>
            A reading of 45 has a percentage error of 10%. Find the possible
            exact values.
          </>
        }
        answer={
          <>
            <BlockMath math="v_E = \dfrac{45}{1.1} = 40.9 \quad\text{or}\quad v_E = \dfrac{45}{0.9} = 50" />
            <p>
              Check: <InlineMath math="|45-50|/50 = 10\%" /> and{" "}
              <InlineMath math="|45-40.9|/40.9 \approx 10\%" />.
            </p>
          </>
        }
      />
      <Practice
        problem={
          <>
            A length is recorded as 4.6 cm to 1 d.p. Find the greatest possible
            percentage error, to 3 s.f.
          </>
        }
        answer={
          <>
            <p>
              Bounds: <InlineMath math="4.55 \le x < 4.65" />.
            </p>
            <BlockMath math="\dfrac{0.05}{4.55} \times 100 = \boxed{1.10\%}" />
            <CalcSteps
              steps={[
                <>Type <Keys s="0.05 ÷ 4.55 × 100 enter" /> and <Keys s="0.05 ÷ 4.65 × 100 enter" />. Keep the larger.</>,
              ]}
            />
            <p>The other bound gives 1.08%, which is smaller.</p>
          </>
        }
      />
      <Practice
        problem={
          <>
            <InlineMath math="\sqrt{2}" /> is approximated as 1.4. Find the
            percentage error, to 3 s.f.
          </>
        }
        answer={
          <>
            <BlockMath math="\dfrac{|1.4 - \sqrt{2}|}{\sqrt{2}} \times 100 = \dfrac{0.01421\ldots}{1.41421\ldots} \times 100 = \boxed{1.01\%}" />
            <CalcSteps
              steps={[
                <>abs( <Keys s="1.4 − 2nd x² 2 ) ) ÷ 2nd x² 2 ) × 100 enter" />. The first ) closes the root, the second closes abs(.</>,
              ]}
            />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/percentage-error"
        label="Session 6: Percentage Error (5 questions, 36 marks)"
      />
    </LessonSection>
  );
}
