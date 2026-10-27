import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── Topic 1. Functions, notation, domain and range ───────────────────────────

export default function FunctionsSection() {
  return (
    <LessonSection
      id="functions"
      label="Topic 1"
      title="Functions, Domain and Range"
      tag={<SLTag />}
      intro="A model is a function: one input gives exactly one output. Read the notation, evaluate at a value, and state the domain and range from the context."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          The <strong>domain</strong> is every input the model allows. The{" "}
          <strong>range</strong> is every output that results. In context the
          domain is limited by what makes sense (a number of items cannot be
          negative), and the range follows from the graph.
        </p>
      </HighlightBox>

      <FormulaBox title="Notation (no booklet row: these are definitions)">
        <FormulaRow label="Function" math="y = f(x)" />
        <FormulaRow label="Value at x = a" math="f(a) \text{ means replace } x \text{ by } a" />
        <FormulaRow label="Domain" math="\text{set of allowed } x \text{ values}" />
        <FormulaRow label="Range" math="\text{set of resulting } y \text{ values}" />
        <FormulaRow label="Solve f(x) = k" math="\text{find } x \text{ when the output is } k" />
      </FormulaBox>

      <div className="visual my-5 rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
          Input to output, f(x) = 2x + 1
        </p>
        <table className="w-full max-w-sm text-sm text-center border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-slate-200 py-1.5">x (input)</th>
              <th className="border border-slate-200 py-1.5">f(x) (output)</th>
            </tr>
          </thead>
          <tbody>
            {[[0, 1], [1, 3], [2, 5], [3, 7]].map(([a, b]) => (
              <tr key={a}>
                <td className="border border-slate-200 py-1.5">{a}</td>
                <td className="border border-slate-200 py-1.5">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs text-slate-500">
          Each input has one output. A relation where one x gives two y values
          is not a function (it fails the vertical line test).
        </p>
      </div>

      <WorkedExample title="A ball is thrown so that its height is h(t) = −5t² + 20t metres after t seconds, for 0 ≤ t ≤ 4. Find h(1) and the range of h.">
        <StepBox n={1}>
          <InlineMath math="h(1) = -5(1)^2 + 20(1) = \boxed{15\text{ m}}" />
        </StepBox>
        <StepBox n={2}>
          Plot the graph on the GDC over the domain. The maximum is at{" "}
          <InlineMath math="t = 2" />, where <InlineMath math="h(2) = -20 + 40 = 20" />.
          The ball starts and ends at <InlineMath math="h = 0" />.
        </StepBox>
        <StepBox n={3}>
          Range: <InlineMath math="\boxed{0 \le h \le 20}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A print shop charges <InlineMath math="C(n) = 15n + 40" /> dollars
            for <InlineMath math="n" /> posters. (a) Find <InlineMath math="C(12)" />.
            (b) State a suitable domain. (c) Find <InlineMath math="n" /> when
            the cost is $400.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="C(12) = 15(12) + 40 = 220" />, so $220.</p>
            <p>(b) <InlineMath math="n \ge 0" /> and <InlineMath math="n" /> a whole number.</p>
            <p>(c) <InlineMath math="15n + 40 = 400" />, so <InlineMath math="n = 24" />.</p>
          </>
        }
      />
    </LessonSection>
  );
}
