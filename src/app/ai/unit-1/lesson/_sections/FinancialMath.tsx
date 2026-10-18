import HighlightBox from "@/components/ui/HighlightBox";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import {
  FormulaBox,
  FormulaRow,
  StepBox,
  WorkedExample,
  Practice,
  SLTag,
  LessonSection,
  ReviewPaperLink,
} from "./helpers";

// ─── 2. Financial Mathematics ──────────────────────────────────────────────────

const tvmRows = [
  { v: "N", m: "Total number of payment periods", t: "kn (years × periods per year)" },
  { v: "I%", m: "Annual nominal interest rate", t: "Enter 4.8 for 4.8%" },
  { v: "PV", m: "Present value (amount at the start)", t: "Negative if you pay it in" },
  { v: "PMT", m: "Regular payment each period", t: "0 for a single lump sum" },
  { v: "FV", m: "Future value (amount at the end)", t: "0 for a loan fully repaid" },
  { v: "P/Y", m: "Payments per year", t: "Same as C/Y in this course" },
  { v: "C/Y", m: "Compounding periods per year", t: "k (1, 2, 4 or 12)" },
];

const tvmCases = [
  { t: "Lump sum grows", pv: "−", pmt: "0", fv: "+ (solve)" },
  { t: "Loan repaid in full", pv: "+ (amount borrowed)", pmt: "− (solve)", fv: "0" },
  { t: "Regular savings", pv: "0", pmt: "−", fv: "+ (solve)" },
];

export default function FinancialMathSection() {
  return (
    <LessonSection
      id="financial-mathematics"
      label="Topic 2"
      title="Financial Mathematics"
      tag={<SLTag />}
      intro="Paper 1 and Paper 2 questions on compound interest, depreciation, loans and savings are answered with the GDC Finance app (TVM Solver). Know what each TVM variable means and which sign it takes, because a wrong sign or wrong C/Y gives a wrong answer with no warning."
      alt
    >
      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-1">
          Simple interest is linear, compound interest is exponential
        </p>
        <p className="text-slate-500 text-sm">
          Simple interest is paid on the original amount only, so the balance
          rises by the same amount each year. Compound interest is paid on the
          current balance, so each period multiplies the balance by{" "}
          <InlineMath math="1 + \dfrac{r}{100k}" />. Depreciation is the same
          idea with a multiplier below 1.
        </p>
      </HighlightBox>

      {/* ── Formula Group 1 ── */}
      <FormulaBox title="Group 1: Simple and compound interest">
        <FormulaRow label="Simple interest" math="I = \dfrac{PRT}{100}" />
        <FormulaRow
          label="Amount (simple)"
          math="A = P\left(1 + \dfrac{RT}{100}\right)"
        />
        <FormulaRow
          label="Compound (k periods a year)"
          math="FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn}"
        />
        <FormulaRow
          label="Compound (annual, k = 1)"
          math="FV = PV\left(1 + \dfrac{r}{100}\right)^{n}"
        />
        <FormulaRow label="Interest earned" math="FV - PV" />
      </FormulaBox>

      <p className="text-sm text-slate-500 max-w-2xl -mt-1 mb-5">
        <InlineMath math="r" /> is the annual nominal rate in percent,{" "}
        <InlineMath math="n" /> is the number of years and{" "}
        <InlineMath math="k" /> is the number of compounding periods per year
        (annual 1, half-yearly 2, quarterly 4, monthly 12). The compound
        formula is in the formula booklet.
      </p>

      {/* ── Formula Group 2 ── */}
      <FormulaBox title="Group 2: Depreciation and currency conversion">
        <FormulaRow
          label="Depreciation"
          math="FV = PV\left(1 - \dfrac{r}{100}\right)^{n}"
        />
        <FormulaRow
          label="Multiply by the rate"
          math="\text{Amount}_B = \text{Amount}_A \times (\text{rate } A \to B)"
        />
        <FormulaRow
          label="Divide to reverse"
          math="\text{Amount}_A = \text{Amount}_B \div (\text{rate } A \to B)"
        />
      </FormulaBox>

      {/* ── Formula Group 3: TVM Solver ── */}
      <FormulaBox title="Group 3: Loans and savings (TVM Solver)">
        <FormulaRow label="Number of periods" math="N = k \times n" />
        <FormulaRow label="Per-period rate" math="i = \dfrac{r}{100k}" />
        <FormulaRow
          label="Total paid on a loan"
          math="\text{PMT} \times N"
        />
        <FormulaRow
          label="Interest paid on a loan"
          math="\text{PMT} \times N - \text{amount borrowed}"
        />
        <FormulaRow
          label="Interest from savings"
          math="FV - \text{PMT} \times N"
        />
      </FormulaBox>

      {/* ── Visual: TVM variable table ── */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          GDC Finance app: TVM Solver variables
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Variable</th>
                <th className="px-5 py-3 font-semibold">Meaning</th>
                <th className="px-5 py-3 font-semibold">Entry</th>
              </tr>
            </thead>
            <tbody>
              {tvmRows.map(({ v, m, t }, i) => (
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

      {/* ── Visual: sign pattern by situation ── */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          Sign pattern by situation
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Situation</th>
                <th className="px-5 py-3 font-semibold">PV</th>
                <th className="px-5 py-3 font-semibold">PMT</th>
                <th className="px-5 py-3 font-semibold">FV</th>
              </tr>
            </thead>
            <tbody>
              {tvmCases.map(({ t, pv, pmt, fv }, i) => (
                <tr key={t} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                  <td className="px-5 py-3 text-navy-900 font-semibold">{t}</td>
                  <td className="px-5 py-3 text-slate-500">{pv}</td>
                  <td className="px-5 py-3 text-slate-500">{pmt}</td>
                  <td className="px-5 py-3 text-slate-500">{fv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <HighlightBox variant="red">
        <p className="font-semibold text-navy-900 mb-2">
          Sign convention and C/Y
        </p>
        <p className="text-slate-500 text-sm">
          Money you pay out is negative, money you receive is positive. If you
          invest $3,000, enter <InlineMath math="PV = -3000" />; the solver
          returns <InlineMath math="FV" /> as a positive number. Set{" "}
          <InlineMath math="P/Y" /> and <InlineMath math="C/Y" /> to the same
          value <InlineMath math="k" />, and enter <InlineMath math="N" /> as{" "}
          <InlineMath math="k \times n" />, not <InlineMath math="n" />. Give
          money answers to 2 d.p. unless the question says otherwise.
        </p>
      </HighlightBox>

      {/* ── All worked examples come AFTER all formula groups ── */}

      <WorkedExample title="Find the simple interest on $2,000 at 4% p.a. for 3 years">
        <StepBox n={1}>
          <InlineMath math="P = 2000,\; R = 4,\; T = 3" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="I = \dfrac{2000 \times 4 \times 3}{100} = \boxed{\$240}" />
        </StepBox>
        <StepBox n={3}>
          Total amount: <InlineMath math="2000 + 240 = \boxed{\$2{,}240}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the value of $5,000 at 6% p.a. compounded annually after 4 years">
        <StepBox n={1}>
          Annual compounding gives <InlineMath math="k = 1" />:
          <BlockMath math="FV = 5000(1.06)^4" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 5000 \times 1.262477 = \boxed{\$6{,}312.38}" />
        </StepBox>
        <StepBox n={3}>
          GDC: <InlineMath math="N=4,\; I\%=6,\; PV=-5000,\; PMT=0,\; P/Y=C/Y=1" />.
          Solve for <InlineMath math="FV" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the value of $3,000 at 5% p.a. compounded monthly after 2 years">
        <StepBox n={1}>
          <InlineMath math="k = 12,\; n = 2,\; kn = 24" />
          <BlockMath math="FV = 3000\left(1 + \dfrac{5}{1200}\right)^{24}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 3000 \times 1.104941 = \boxed{\$3{,}314.82}" />
        </StepBox>
        <StepBox n={3}>
          GDC: <InlineMath math="N=24,\; I\%=5,\; PV=-3000,\; PMT=0,\; P/Y=C/Y=12" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Determine the number of whole years for $6,000 at 5% p.a. (annual) to exceed $10,000">
        <StepBox n={1}>
          Set <InlineMath math="PV=-6000,\; FV=10000,\; I\%=5,\; PMT=0,\; P/Y=C/Y=1" /> and
          solve for <InlineMath math="N" />:{" "}
          <InlineMath math="N = 10.47" />.
        </StepBox>
        <StepBox n={2}>
          Check by substitution:
          <BlockMath math="6000(1.05)^{10} = 9773.37 \;(<10000), \qquad 6000(1.05)^{11} = 10262.04" />
        </StepBox>
        <StepBox n={3}>
          The first whole number of years is <InlineMath math="\boxed{11}" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Calculate the value of a $28,000 car after 5 years of 12% annual depreciation">
        <StepBox n={1}>
          The decrease multiplier is <InlineMath math="1 - 0.12 = 0.88" />:
          <BlockMath math="FV = 28000(0.88)^5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 28000 \times 0.527732 = \boxed{\$14{,}776.49}" />
        </StepBox>
        <StepBox n={3}>
          GDC: the TVM Solver is built for growth, so type the multiplier
          directly: <InlineMath math="28000 \times 0.88^5" />.
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Convert $850 to EUR, then 500 EUR to USD, at 1 USD = 0.92 EUR">
        <StepBox n={1}>
          USD to EUR, multiply:
          <BlockMath math="850 \times 0.92 = \boxed{782 \text{ EUR}}" />
        </StepBox>
        <StepBox n={2}>
          EUR to USD, divide by the same rate:
          <BlockMath math="500 \div 0.92 = \boxed{\$543.48}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Find the monthly payment on a $20,000 loan at 6% p.a. over 5 years, and the interest paid">
        <StepBox n={1}>
          Monthly payments: <InlineMath math="N = 12 \times 5 = 60" />.
        </StepBox>
        <StepBox n={2}>
          GDC: <InlineMath math="N=60,\; I\%=6,\; PV=20000,\; FV=0,\; P/Y=C/Y=12" />.
          Solve for <InlineMath math="PMT" />:
          <BlockMath math="PMT = -386.66 \;\Rightarrow\; \text{payment } \boxed{\$386.66}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="\text{Total paid} = 386.656 \times 60 = 23199.36" />
          <BlockMath math="\text{Interest} = 23199.36 - 20000 = \boxed{\$3{,}199.36}" />
        </StepBox>
      </WorkedExample>

      <WorkedExample title="Calculate the value of saving $150 each month at 4.8% p.a. for 6 years">
        <StepBox n={1}>
          <InlineMath math="N = 12 \times 6 = 72" />. Payments go out, so{" "}
          <InlineMath math="PMT = -150" /> and <InlineMath math="PV = 0" />.
        </StepBox>
        <StepBox n={2}>
          GDC: <InlineMath math="N=72,\; I\%=4.8,\; PV=0,\; PMT=-150,\; P/Y=C/Y=12" />.
          Solve for <InlineMath math="FV" />:{" "}
          <InlineMath math="\boxed{\$12{,}487.17}" />.
        </StepBox>
        <StepBox n={3}>
          Interest earned:
          <BlockMath math="12487.17 - 150 \times 72 = 12487.17 - 10800 = \boxed{\$1{,}687.17}" />
        </StepBox>
      </WorkedExample>

      {/* ── Practice, at least one per technique group ── */}

      <Practice
        problem={
          <>
            Bopha deposits $1,500 at 3.5% p.a. simple interest. Find the total
            amount after 6 years.
          </>
        }
        answer={
          <>
            <BlockMath math="I = \dfrac{1500 \times 3.5 \times 6}{100} = 315" />
            <BlockMath math="A = 1500 + 315 = \boxed{\$1{,}815}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            $6,000 is invested at 4.8% p.a. compounded quarterly for 3 years.
            Find the future value and state the TVM Solver entries.
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
              TVM: <InlineMath math="N=12,\; I\%=4.8,\; PV=-6000,\; PMT=0,\; P/Y=C/Y=4" />.
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            $4,000 is invested at 7% p.a. compounded annually. (a) Find the
            value after 5 years. (b) Find the interest earned.
          </>
        }
        answer={
          <>
            <BlockMath math="FV = 4000(1.07)^5 = \boxed{\$5{,}610.21}" />
            <BlockMath math="\text{Interest} = 5610.21 - 4000 = \boxed{\$1{,}610.21}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            A laptop worth $1,800 depreciates by 20% per year. Find its value
            after 3 years.
          </>
        }
        answer={
          <BlockMath math="FV = 1800(0.80)^3 = 1800 \times 0.512 = \boxed{\$921.60}" />
        }
      />

      <Practice
        problem={
          <>
            Machinery worth $15,000 depreciates by 9% per year. Determine the
            number of whole years until its value first falls below $8,000.
          </>
        }
        answer={
          <>
            <BlockMath math="15000(0.91)^n < 8000 \;\Rightarrow\; n > \dfrac{\ln(8/15)}{\ln 0.91} = 6.67" />
            <p>
              Check: <InlineMath math="15000(0.91)^6 = 8518.04" /> (too high),{" "}
              <InlineMath math="15000(0.91)^7 = 7751.42" />.
            </p>
            <p>
              <InlineMath math="n = \boxed{7}" /> years.
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            Convert £640 to USD at 1 GBP = 1.27 USD. Then convert $200 to GBP
            at the same rate.
          </>
        }
        answer={
          <>
            <BlockMath math="640 \times 1.27 = \boxed{\$812.80}" />
            <BlockMath math="200 \div 1.27 = \boxed{£157.48}" />
          </>
        }
      />

      <Practice
        problem={
          <>
            Sophea takes a $150,000 loan at 4.2% p.a., compounded monthly, to
            be repaid in equal monthly payments over 20 years. (a) State the
            TVM entries. (b) Find the monthly payment to the nearest cent.
          </>
        }
        answer={
          <>
            <p>
              (a) <InlineMath math="N=240,\; I\%=4.2,\; PV=150000,\; FV=0,\; P/Y=C/Y=12" />,
              solve for <InlineMath math="PMT" />.
            </p>
            <p>
              (b) <InlineMath math="PMT = \boxed{\$924.86}" /> per month
              (the solver shows <InlineMath math="-924.86" />).
            </p>
          </>
        }
      />

      <Practice
        problem={
          <>
            Dara saves $200 at the end of each month in an account paying
            3.6% p.a. compounded monthly. Find the value after 8 years, and
            the interest earned.
          </>
        }
        answer={
          <>
            <p>
              <InlineMath math="N=96,\; I\%=3.6,\; PV=0,\; PMT=-200,\; P/Y=C/Y=12" />
            </p>
            <BlockMath math="FV = \boxed{\$22{,}212.16}" />
            <BlockMath math="\text{Interest} = FV - 200 \times 96 = FV - 19200 = \boxed{\$3{,}012.16}" />
          </>
        }
      />

      <ReviewPaperLink
        href="/review/ai-sl/financial"
        label="Session 3: Financial Mathematics (6 questions, 45 marks)"
      />
    </LessonSection>
  );
}
