import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── 1. Percentages ───────────────────────────────────────────────────────────

export default function PercentagesSection() {
  return (
    <LessonSection
      id="percentages"
      label="Topic 1"
      title="Percentages"
      tag={<SLTag />}
      intro="Percentage change underpins almost every applied problem in this course — from a sale discount to compound interest. The multiplier method lets you increase, decrease, and reverse percentages in a single calculation, without ever finding 'the percentage' as a separate step."
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Instead of finding the percentage and then adding or subtracting
          it, multiply directly by a single number called the{" "}
          <strong>multiplier</strong>. A 15% increase has multiplier{" "}
          <InlineMath math="1.15" />; a 15% decrease has multiplier{" "}
          <InlineMath math="0.85" />. This is faster and far less
          error-prone under exam conditions.
        </p>
      </HighlightBox>

      <FormulaBox title="Percentage Toolkit">
        <FormulaRow
          label="Percentage of an amount"
          math="P\% \text{ of } N = \dfrac{P}{100} \times N"
        />
        <FormulaRow
          label="Increase multiplier"
          math="\text{New} = \text{Original} \times \left(1 + \dfrac{r}{100}\right)"
        />
        <FormulaRow
          label="Decrease multiplier"
          math="\text{New} = \text{Original} \times \left(1 - \dfrac{r}{100}\right)"
        />
        <FormulaRow
          label="Reverse percentage"
          math="\text{Original} = \dfrac{\text{New}}{1 \pm \frac{r}{100}}"
        />
        <FormulaRow
          label="General % change"
          math="\%\text{ change} = \dfrac{\text{New} - \text{Original}}{\text{Original}} \times 100"
        />
        <FormulaRow
          label="Percentage error"
          math="\%\text{ error} = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100"
        />
      </FormulaBox>

      {/* Visual: multiplier quick-reference */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
        {[
          { change: "+5%", mult: "× 1.05" },
          { change: "+18%", mult: "× 1.18" },
          { change: "−8%", mult: "× 0.92" },
          { change: "−35%", mult: "× 0.65" },
        ].map(({ change, mult }) => (
          <div
            key={change}
            className="bg-white border border-slate-200 rounded-xl p-4 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
              {change}
            </p>
            <p className="font-mono text-navy-900 font-semibold text-lg">
              {mult}
            </p>
          </div>
        ))}
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          Why don&apos;t a +20% and a −20% change cancel out?
        </p>
        <div className="text-slate-500 text-sm space-y-2">
          <p>
            Applying an increase of <InlineMath math="r\%" /> followed by a
            decrease of <InlineMath math="r\%" /> multiplies the original
            value by:
          </p>
          <BlockMath math="\left(1 + \dfrac{r}{100}\right)\left(1 - \dfrac{r}{100}\right) = 1 - \left(\dfrac{r}{100}\right)^2" />
          <p>
            This is always <em>less than 1</em> whenever{" "}
            <InlineMath math="r \neq 0" />, so the combined effect is always
            a net decrease — regardless of which change is applied first.
          </p>
        </div>
      </HighlightBox>

      {/* ── All worked examples come AFTER the formula group ── */}

      <WorkedExample title="Increase & decrease using multipliers">
        <StepBox n={1}>
          A shirt costs $40 and its price is increased by 15%. The
          multiplier is <InlineMath math="1 + \frac{15}{100} = 1.15" />:
          <BlockMath math="40 \times 1.15 = \boxed{\$46.00}" />
        </StepBox>
        <StepBox n={2}>
          A laptop costs $650 and is reduced by 12% in a sale. The
          multiplier is <InlineMath math="1 - \frac{12}{100} = 0.88" />:
          <BlockMath math="650 \times 0.88 = \boxed{\$572.00}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Reverse percentage — find the original amount">
        <p className="text-sm text-slate-500 mb-4">
          After a 20% pay rise, Sokha&apos;s monthly salary is $2,160. Find
          her original salary.
        </p>
        <StepBox n={1}>
          The multiplier for a 20% increase is{" "}
          <InlineMath math="1.20" />. The new salary is the{" "}
          <em>result</em> of multiplying, so divide — do not take 80% of
          $2,160 (a common mistake, since 20% off the new value is not the
          same as 20% off the original).
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="\text{Original} = \dfrac{2160}{1.20} = \boxed{\$1{,}800}" />
        </StepBox>
        <StepBox n={3}>
          Check: <InlineMath math="1800 \times 1.20 = 2160" /> ✓
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Successive percentage changes">
        <p className="text-sm text-slate-500 mb-4">
          A price of $100 is increased by 20%, then the new price is
          decreased by 20%. Find the final price and the overall percentage
          change.
        </p>
        <StepBox n={1}>
          Increase: <InlineMath math="100 \times 1.20 = 120" />
        </StepBox>
        <StepBox n={2}>
          Decrease: <InlineMath math="120 \times 0.80 = \boxed{\$96}" />
        </StepBox>
        <StepBox n={3}>
          Overall change:{" "}
          <InlineMath math="\dfrac{96 - 100}{100} \times 100 = -4\%" /> — a
          net <strong>4% decrease</strong>, not 0%, exactly as predicted by{" "}
          <InlineMath math="1 - 0.2^2 = 0.96" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Percentage error">
        <p className="text-sm text-slate-500 mb-4">
          A stadium&apos;s crowd was estimated at 5,000 people. The exact
          count released afterwards was 4,850. Find the percentage error in
          the estimate.
        </p>
        <StepBox n={1}>
          Here <InlineMath math="v_A = 5000" /> (approximate) and{" "}
          <InlineMath math="v_E = 4850" /> (exact):
          <BlockMath math="\%\text{ error} = \left|\dfrac{5000 - 4850}{4850}\right| \times 100" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="= \dfrac{150}{4850} \times 100 = \boxed{3.09\%} \; (\text{3 s.f.})" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            A phone costs $520. It is discounted by 18% in a sale. Find the
            sale price.
          </>
        }
        answer={
          <>
            <p>
              Multiplier for an 18% decrease:{" "}
              <InlineMath math="1 - 0.18 = 0.82" />
            </p>
            <BlockMath math="520 \times 0.82 = \boxed{\$426.40}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            After a 12% decrease, the value of a share is $4,884. Find its
            original value.
          </>
        }
        answer={
          <>
            <p>
              Multiplier: <InlineMath math="1 - 0.12 = 0.88" />
            </p>
            <BlockMath math="\text{Original} = \dfrac{4884}{0.88} = \boxed{\$5{,}550}" />
            <p>
              Check: <InlineMath math="5550 \times 0.88 = 4884" /> ✓
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            A price increases by 30%, then the new price decreases by 30%.
            Find the overall percentage change from the original price.
          </>
        }
        answer={
          <>
            <p>
              Combined multiplier:{" "}
              <InlineMath math="1.30 \times 0.70 = 0.91" />
            </p>
            <p>
              This matches{" "}
              <InlineMath math="1 - 0.3^2 = 1 - 0.09 = 0.91" />.
            </p>
            <BlockMath math="\text{Overall change} = \boxed{-9\% \; (\text{a 9\% decrease})}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            A recipe estimates a cooking time of 45 minutes, but the dish
            actually takes 50 minutes. Find the percentage error in the
            estimate.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="v_A = 45,\; v_E = 50" />
            </p>
            <BlockMath math="\%\text{ error} = \left|\dfrac{45-50}{50}\right| \times 100 = \dfrac{5}{50}\times 100 = \boxed{10\%}" />
          </>
        }
      />
    </LessonSection>
  );
}

