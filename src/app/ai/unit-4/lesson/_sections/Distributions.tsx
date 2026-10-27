import HighlightBox from "@/components/ui/HighlightBox";
import { InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection, Keys, CalcSteps } from "./helpers";

// ─── Topic 5. Random variables and distributions (booklet 4.7, 4.8) ───────────

export default function DistributionsSection() {
  return (
    <LessonSection
      id="distributions"
      label="Topic 5"
      title="Random Variables and Distributions"
      tag={<SLTag />}
      intro="The expected value of a discrete random variable, the binomial distribution for repeated trials, and the normal distribution for measurements. The GDC does the probability calculations."
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">Key Idea</p>
        <p className="text-slate-500 text-sm">
          Use the binomial when there are a fixed number <InlineMath math="n" />{" "}
          of independent trials, each with the same success probability{" "}
          <InlineMath math="p" />. Use the normal when the data are measured
          and bell-shaped. For both, sketch the curve or bars and shade the
          region before using the GDC.
        </p>
      </HighlightBox>

      <FormulaBox title="Expected value (booklet 4.7)">
        <FormulaRow label="Expected value of a discrete random variable X" math="E(X) = \sum_{i=1}^{k} x_i\, P(X = x_i)" />
        <FormulaRow label="Probabilities sum to 1" math="\sum P(X = x_i) = 1" />
      </FormulaBox>

      <FormulaBox title="Binomial distribution X ~ B(n, p) (booklet 4.8)">
        <FormulaRow label="Mean" math="E(X) = np" />
        <FormulaRow label="Variance" math="\mathrm{Var}(X) = np(1 - p)" />
        <FormulaRow label="Probability (GDC)" math="P(X = k) \to \text{binompdf}(n, p, k)" />
        <FormulaRow label="Cumulative (GDC)" math="P(X \le k) \to \text{binomcdf}(n, p, k)" />
      </FormulaBox>

      <FormulaBox title="Normal distribution X ~ N(μ, σ²) (GDC, no booklet row)">
        <FormulaRow label="Between a and b" math="P(a < X < b) \to \text{normalcdf}(a, b, \mu, \sigma)" />
        <FormulaRow label="Find x for area p to the left" math="x \to \text{invNorm}(p, \mu, \sigma)" />
        <FormulaRow label="Symmetry" math="P(X < \mu) = 0.5" />
      </FormulaBox>

      <WorkedExample title="A game pays $0 with probability 0.4, $1 with 0.3, $2 with 0.2 and $5 with 0.1. It costs $1.50 to play. Find E(X) and say whether the game is fair.">
        <StepBox n={1}>
          <InlineMath math="E(X) = 0(0.4) + 1(0.3) + 2(0.2) + 5(0.1) = \boxed{1.2}" />
        </StepBox>
        <StepBox n={2}>
          Expected profit <InlineMath math="1.20 - 1.50 = -0.30" /> dollars per game. The game is not fair: the player loses 30 cents on average.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="X ~ B(10, 0.3). Find P(X = 3), P(X ≤ 3), E(X) and Var(X).">
        <StepBox n={1}>
          <InlineMath math="P(X = 3) = \text{binompdf}(10, 0.3, 3) = \boxed{0.267}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="P(X \le 3) = \text{binomcdf}(10, 0.3, 3) = \boxed{0.650}" />
        </StepBox>
        <StepBox n={3}>
          <InlineMath math="E(X) = 10(0.3) = 3" /> and <InlineMath math="\mathrm{Var}(X) = 10(0.3)(0.7) = 2.1" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Packet masses are N(50, 4²) grams. Find P(X < 56), P(X > 45) and the mass exceeded by 10% of packets.">
        <StepBox n={1}>
          <InlineMath math="P(X < 56) = \text{normalcdf}(-1000, 56, 50, 4) = \boxed{0.933}" />
        </StepBox>
        <StepBox n={2}>
          <InlineMath math="P(X > 45) = \text{normalcdf}(45, 1000, 50, 4) = \boxed{0.894}" />
        </StepBox>
        <StepBox n={3}>
          10% above means 90% below: <InlineMath math="\text{invNorm}(0.9, 50, 4) = \boxed{55.1\text{ g}}" />.
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <p>
            A basketball player scores each free throw with probability 0.75.
            She takes 12 throws. Find (a) <InlineMath math="P(X = 9)" />, (b){" "}
            <InlineMath math="P(X \ge 10)" />, (c) the expected number of scores.
          </p>
        }
        answer={
          <>
            <p>(a) <InlineMath math="X \sim B(12, 0.75)" />, <InlineMath math="P(X = 9) = 0.258" />.</p>
            <p>(b) <InlineMath math="P(X \ge 10) = 1 - P(X \le 9) = 0.391" />.</p>
            <p>(c) <InlineMath math="E(X) = 12(0.75) = 9" />.</p>
          </>
        }
      />

      <Practice
        problem={
          <p>
            Heights of adults are <InlineMath math="N(170, 8^2)" /> cm. Find the
            probability a person is between 165 cm and 180 cm tall.
          </p>
        }
        answer={
          <p>
            <InlineMath math="P(165 < H < 180) = \text{normalcdf}(165, 180, 170, 8) = 0.628" />.
          </p>
        }
      />

      <CalcSteps
        steps={[
          <>Press <Keys s="2nd VARS" /> (DISTR).</>,
          <>Binomial: choose <Keys s="A:binompdf(" /> or <Keys s="B:binomcdf(" />. Normal: <Keys s="2:normalcdf(" /> or <Keys s="3:invNorm(" />.</>,
          <>Enter the values in the order shown above and press <Keys s="ENTER" />.</>,
        ]}
      />
    </LessonSection>
  );
}
