import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, ReviewPaperLink } from "./helpers";

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
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/percentage-error"
        label="Session 6: Percentage Error (6 questions)"
      />
    </LessonSection>
  );
}
