import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import { FormulaBox, FormulaRow, StepBox, WorkedExample, Practice, SLTag, LessonSection } from "./helpers";

// ─── 2. Financial Mathematics ──────────────────────────────────────────────────

export default function FinancialMathSection() {
  return (
    <LessonSection
      id="financial-mathematics"
      label="Topic 2"
      title="Financial Mathematics"
      tag={<SLTag />}
      intro="Compound interest, depreciation, and currency conversion are the most heavily examined applications in the AI course. In the exam you will normally use your GDC's Finance app (the TVM Solver) rather than typing formulas — but you must understand what each variable represents to set it up correctly."
      alt
    >
      <HighlightBox variant="green">
        <p className="font-semibold text-navy-900 mb-1">
          Simple vs. compound interest
        </p>
        <p className="text-slate-500 text-sm">
          With <strong>simple interest</strong>, you earn interest only on
          the original principal, so the amount grows{" "}
          <em>linearly</em>. With <strong>compound interest</strong>, each
          period&apos;s interest is added to the principal before the next
          period is calculated, so the amount grows{" "}
          <em>exponentially</em> — this is why compound interest is far more
          powerful over long time periods.
        </p>
      </HighlightBox>

      {/* ── Formula Group 1: Simple & Compound Interest ── */}
      <FormulaBox title="Simple & Compound Interest">
        <FormulaRow label="Simple interest" math="I = \dfrac{PRT}{100}" />
        <FormulaRow
          label="Amount (simple interest)"
          math="A = P\left(1 + \dfrac{RT}{100}\right)"
        />
        <FormulaRow
          label="Compound interest (general)"
          math="FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn}"
        />
        <FormulaRow
          label="Compound interest (annual, k = 1)"
          math="FV = PV\left(1 + \dfrac{r}{100}\right)^{n}"
        />
      </FormulaBox>

      <p className="text-sm text-slate-500 max-w-2xl -mt-1 mb-5">
        Here <InlineMath math="PV" /> is the present value (principal),{" "}
        <InlineMath math="FV" /> is the future value, <InlineMath math="r" />{" "}
        is the annual nominal interest rate (%), <InlineMath math="n" /> is
        the number of years, and <InlineMath math="k" /> is the number of
        compounding periods per year (e.g. <InlineMath math="k=12" /> for
        monthly, <InlineMath math="k=4" /> for quarterly). This is the exact
        form given in the IB AI formula booklet.
      </p>

      {/* ── Formula Group 2: Depreciation & Currency Conversion ── */}
      <FormulaBox title="Depreciation & Currency Conversion">
        <FormulaRow
          label="Depreciation"
          math="FV = PV\left(1 - \dfrac{r}{100}\right)^{n}"
        />
        <FormulaRow
          label="Currency conversion"
          math="\text{Amount}_B = \text{Amount}_A \times (\text{rate } A \to B)"
        />
        <FormulaRow
          label="Reverse conversion"
          math="\text{Amount}_A = \text{Amount}_B \div (\text{rate } A \to B)"
        />
      </FormulaBox>

      <p className="text-sm text-slate-500 max-w-2xl -mt-1 mb-5">
        Depreciation uses the same structure as compound interest, but with
        a <em>negative</em> growth rate — each year the value is multiplied
        by a factor below 1.
      </p>

      {/* Visual: GDC TVM Solver reference table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          GDC Finance App — TVM Solver variables
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Variable</th>
                <th className="px-5 py-3 font-semibold">Meaning</th>
                <th className="px-5 py-3 font-semibold">Typical value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { v: "N", m: "Total number of compounding periods", t: "= k × n" },
                { v: "I%", m: "Annual nominal interest rate", t: "e.g. 5" },
                { v: "PV", m: "Present value (money now)", t: "negative if paid out" },
                { v: "PMT", m: "Regular payment", t: "0 for lump-sum interest" },
                { v: "FV", m: "Future value (money later)", t: "opposite sign to PV" },
                { v: "P/Y", m: "Payments per year", t: "usually = C/Y" },
                { v: "C/Y", m: "Compounding periods per year", t: "= k" },
              ].map(({ v, m, t }, i) => (
                <tr key={v} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                  <td className="px-5 py-3 font-mono font-semibold text-ai-primary">
                    {v}
                  </td>
                  <td className="px-5 py-3 text-navy-900">{m}</td>
                  <td className="px-5 py-3 text-slate-500">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <HighlightBox variant="yellow">
        <p className="font-semibold text-navy-900 mb-2">
          The #1 TVM Solver mistake: sign convention
        </p>
        <p className="text-slate-500 text-sm">
          Money that <strong>leaves your pocket</strong> (an investment,
          loan payment) is entered as <strong>negative</strong>; money that{" "}
          <strong>you receive</strong> (a payout, a loan you take out) is{" "}
          <strong>positive</strong>. If you invest $3,000, enter{" "}
          <InlineMath math="PV = -3000" /> — the calculator then returns{" "}
          <InlineMath math="FV" /> as a positive number, since that is money
          coming back to you.
        </p>
      </HighlightBox>

      {/* ── All worked examples come AFTER both formula groups ── */}

      <WorkedExample title="Simple interest: $2,000 at 4% p.a. for 3 years">
        <StepBox n={1}>
          Identify: <InlineMath math="P = 2000,\; R = 4,\; T = 3" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="I = \dfrac{2000 \times 4 \times 3}{100} = \boxed{\$240}" />
        </StepBox>
        <StepBox n={3}>
          Total amount: <InlineMath math="A = 2000 + 240 = \boxed{\$2{,}240}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Compound interest: $5,000 at 6% p.a., compounded annually, for 4 years">
        <StepBox n={1}>
          Annual compounding means <InlineMath math="k = 1" />:
          <BlockMath math="FV = 5000\left(1 + \dfrac{6}{100}\right)^{4} = 5000(1.06)^4" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 5000 \times 1.26247696 = \boxed{\$6{,}312.38}" />
        </StepBox>
        <StepBox n={3}>
          GDC TVM Solver: <InlineMath math="N=4,\; I\%=6,\; PV=-5000,\; PMT=0,\; P/Y=C/Y=1" />, solve for FV.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Compound interest with monthly compounding: $3,000 at 5% p.a. for 2 years">
        <StepBox n={1}>
          Monthly compounding means <InlineMath math="k = 12,\; n = 2" />, so <InlineMath math="kn = 24" /> periods:
          <BlockMath math="FV = 3000\left(1 + \dfrac{5}{100 \times 12}\right)^{24} = 3000(1.00416\overline{6})^{24}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 3000 \times 1.104941 = \boxed{\$3{,}314.82}" />
        </StepBox>
        <StepBox n={3}>
          GDC TVM Solver: <InlineMath math="N=24,\; I\%=5,\; PV=-3000,\; PMT=0,\; P/Y=C/Y=12" />, solve for FV.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Depreciation: a $28,000 car depreciating at 12% per year, for 5 years">
        <StepBox n={1}>
          Depreciation uses a decrease multiplier raised to the power{" "}
          <InlineMath math="n" />:
          <BlockMath math="FV = 28000\left(1 - \dfrac{12}{100}\right)^{5} = 28000(0.88)^5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 28000 \times 0.527732 = \boxed{\$14{,}776.49}" />
        </StepBox>
        <StepBox n={3}>
          The car loses over 47% of its value in 5 years — depreciation
          compounds downward just as interest compounds upward.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Currency conversion: USD ↔ EUR at a rate of 1 USD = 0.92 EUR">
        <StepBox n={1}>
          Convert $850 USD to EUR:
          <BlockMath math="850 \times 0.92 = \boxed{782 \text{ EUR}}" />
        </StepBox>
        <StepBox n={2}>
          Convert 500 EUR back to USD using the same rate — divide instead
          of multiply:
          <BlockMath math="500 \div 0.92 = \boxed{\$543.48 \text{ USD (2 d.p.)}}" />
        </StepBox>
      </WorkedExample>

      <Practice
        problem={
          <>
            Bopha deposits $1,500 in an account paying 3.5% p.a. simple
            interest. Find the total amount in the account after 6 years.
          </>
        }
        answer={
          <>
            <BlockMath math="I = \dfrac{1500 \times 3.5 \times 6}{100} = \$315" />
            <BlockMath math="A = 1500 + 315 = \boxed{\$1{,}815}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            $4,000 is invested at 7% p.a. compounded annually for 5 years.
            Find the future value.
          </>
        }
        answer={
          <>
            <BlockMath math="FV = 4000(1.07)^5 = 4000 \times 1.402552" />
            <BlockMath math="= \boxed{\$5{,}610.21}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            $6,000 is invested at 4.8% p.a. compounded quarterly for 3
            years. Find the future value, and state the GDC TVM Solver
            values used to solve it.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="k=4,\; n=3 \Rightarrow N = 12" />
            </p>
            <BlockMath math="FV = 6000\left(1+\dfrac{4.8}{400}\right)^{12} = 6000(1.012)^{12}" />
            <BlockMath math="= 6000 \times 1.153895 = \boxed{\$6{,}923.37}" />
            <p>
              TVM Solver: <InlineMath math="N=12,\; I\%=4.8,\; PV=-6000,\; PMT=0,\; P/Y=C/Y=4" />.
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            A laptop worth $1,800 depreciates at 20% per year. Find its
            value after 3 years.
          </>
        }
        answer={
          <>
            <BlockMath math="FV = 1800(0.80)^3 = 1800 \times 0.512" />
            <BlockMath math="= \boxed{\$921.60}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Convert £640 GBP to USD if 1 GBP = 1.27 USD. Then convert $200
            USD back to GBP using the same rate.
          </>
        }
        answer={
          <>
            <BlockMath math="640 \times 1.27 = \boxed{\$812.80 \text{ USD}}" />
            <BlockMath math="200 \div 1.27 = \boxed{£157.48 \text{ GBP (2 d.p.)}}" />
          </>
        }
      />
    </LessonSection>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SUMMATIVE ASSESSMENT REVISION
// Topics: Arithmetic · Geometric · Financial (Topic 2 above) · Rounding ·
//         Upper & Lower Bounds · Percentage Error
// Each session pairs a lesson section with an exportable Q&A review paper.
// ═══════════════════════════════════════════════════════════════════════════════

