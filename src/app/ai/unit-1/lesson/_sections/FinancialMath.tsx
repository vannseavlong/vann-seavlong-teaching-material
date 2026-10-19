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
  Keys,
  TvmEntry,
  CalcSteps,
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
  { t: "Amount still owed on a loan", pv: "+ (amount borrowed)", pmt: "− (given)", fv: "− (solve, amount owed)" },
  { t: "Amount needed now for a goal", pv: "− (solve, amount to pay in)", pmt: "0", fv: "+ (goal)" },
];

// Every TVM case. Blank-free: each cell is what to type, "solve" is the unknown.
// k = periods per year (P/Y = C/Y = k). Depreciation uses a negative I%.
const tvmCheatRows = [
  { g: "Growth: lump sum", rows: [
    { c: "Value after n years", n: "kn", i: "r", pv: "−start", pmt: "0", fv: "solve" },
    { c: "Amount to invest now for a goal", n: "kn", i: "r", pv: "solve", pmt: "0", fv: "+goal" },
    { c: "How long to reach a target (round up)", n: "solve", i: "r", pv: "−start", pmt: "0", fv: "+target" },
    { c: "Find the interest rate", n: "kn", i: "solve", pv: "−start", pmt: "0", fv: "+end value" },
  ]},
  { g: "Depreciation (value falls)", rows: [
    { c: "Value after n years", n: "n", i: "−r", pv: "−start", pmt: "0", fv: "solve" },
    { c: "How long to fall to a value (round up)", n: "solve", i: "−r", pv: "−start", pmt: "0", fv: "+value" },
    { c: "Find the depreciation rate", n: "n", i: "solve (negative)", pv: "−start", pmt: "0", fv: "+end value" },
  ]},
  { g: "Inflation", rows: [
    { c: "Price after n years", n: "n", i: "inflation %", pv: "−price now", pmt: "0", fv: "solve" },
    { c: "Value in today's prices of a future amount", n: "n", i: "inflation %", pv: "solve", pmt: "0", fv: "+future amount" },
  ]},
  { g: "Regular savings (deposits at the end of each period)", rows: [
    { c: "Value after n years", n: "kn", i: "r", pv: "0", pmt: "−deposit", fv: "solve" },
    { c: "Deposit needed to reach a goal", n: "kn", i: "r", pv: "0", pmt: "solve", fv: "+goal" },
    { c: "How long to reach a goal (round up)", n: "solve", i: "r", pv: "0", pmt: "−deposit", fv: "+goal" },
    { c: "Starting lump sum and regular deposits", n: "kn", i: "r", pv: "−lump sum", pmt: "−deposit", fv: "solve" },
  ]},
  { g: "Loans (payments at the end of each period)", rows: [
    { c: "Monthly payment", n: "kn", i: "r", pv: "+loan", pmt: "solve", fv: "0" },
    { c: "Balance owed after m payments", n: "m", i: "r", pv: "+loan", pmt: "−payment", fv: "solve (negative = owed)" },
    { c: "Number of payments to clear the loan", n: "solve", i: "r", pv: "+loan", pmt: "−payment", fv: "0" },
    { c: "Loan you can afford for a given payment", n: "kn", i: "r", pv: "solve", pmt: "−payment", fv: "0" },
    { c: "Find the loan interest rate", n: "kn", i: "solve", pv: "+loan", pmt: "−payment", fv: "0" },
  ]},
];

const methodRows = [
  { clue: "simple interest, same interest every year", method: "I = PRT/100", calc: "Type the formula" },
  { clue: "compounded annually, half-yearly, quarterly, monthly; one deposit, no payments", method: "FV formula with PMT = 0", calc: "TVM Solver, solve FV" },
  { clue: "depreciates, loses r% each year, value falls", method: "PV × (1 − r/100)^n", calc: "Type the multiplier, or TVM Solver with I% = −r" },
  { clue: "loan repaid by equal payments, mortgage, instalments", method: "TVM with FV = 0, PV positive", calc: "TVM Solver, solve PMT" },
  { clue: "saves a fixed amount each month, regular deposits", method: "TVM with PMT negative", calc: "TVM Solver, solve FV" },
  { clue: "how long, how many years, when will it reach", method: "Solve N, then round up", calc: "TVM Solver, solve N" },
  { clue: "what rate, find the interest rate", method: "Solve I%", calc: "TVM Solver, solve I%" },
  { clue: "how much to invest now, present value needed", method: "Solve PV", calc: "TVM Solver, solve PV" },
  { clue: "exchange rate, convert, commission", method: "Multiply or divide by the rate", calc: "Type the product" },
];

const openSolver = (
  <>
    Press <Keys s="apps" />, choose <strong>1:Finance...</strong>, then{" "}
    <strong>1:TVM Solver...</strong> and press <Keys s="enter" />.
  </>
);

const fillScreen = (
  <>
    Fill every line as in the screen: type the value, press <Keys s="enter" />{" "}
    to move down. For a negative value press <Keys s="(−)" /> first (not the{" "}
    <Keys s="−" /> key). Leave <strong>PMT: END</strong> selected.
  </>
);

const solveLine = (name: string) => (
  <>
    Move the cursor onto the <strong>{name}</strong> line and press{" "}
    <Keys s="alpha enter" /> (SOLVE). The answer fills that line.
  </>
);

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

      {/* ── Visual: choose the method from the clue words ── */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-3">
          Choose the method from the clue words
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-5 py-3 font-semibold">Clue in the question</th>
                <th className="px-5 py-3 font-semibold">Method</th>
                <th className="px-5 py-3 font-semibold">TI-84 Plus CE</th>
              </tr>
            </thead>
            <tbody>
              {methodRows.map(({ clue, method, calc }, i) => (
                <tr key={clue} className={i % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                  <td className="px-5 py-3 text-navy-900">{clue}</td>
                  <td className="px-5 py-3 text-slate-500">{method}</td>
                  <td className="px-5 py-3 text-slate-500">{calc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Visual: TI-84 Plus CE TVM Solver how-to ── */}
      <CalcSteps
        steps={[
          openSolver,
          <>
            Check all seven lines, including the ones the question does not
            mention. Old values from the last question stay on the screen, so
            set <InlineMath math="PMT = 0" /> or <InlineMath math="FV = 0" />{" "}
            when they are not used.
          </>,
          <>
            <InlineMath math="N = k \times n" />,{" "}
            <InlineMath math="I\%" /> is the annual rate (type 4.8 for 4.8%),{" "}
            <InlineMath math="P/Y = C/Y = k" />. If you change P/Y, check that
            C/Y changed with it.
          </>,
          <>
            Money you pay out is negative, money you receive is positive. One
            of <InlineMath math="PV" /> and <InlineMath math="FV" /> is
            negative, the other positive, unless one of them is 0.
          </>,
          solveLine("unknown"),
          <>
            Leave the app with <Keys s="2nd mode" />. Round only the final
            answer.
          </>,
        ]}
        screen={
          <TvmEntry
            values={{ N: "kn", "I%": "rate", PV: "-", PMT: "0", "P/Y": "k", "C/Y": "k" }}
            solve="FV"
          />
        }
      />

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

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">
          How to decide the sign of each entry
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-slate-500 text-sm">
          <li>
            Take the customer&apos;s point of view. Ask for each amount: does
            the money leave me or come to me?
          </li>
          <li>
            Money that leaves you (invest, deposit, repay) is negative. Money
            that comes to you (loan received, final balance collected) is
            positive.
          </li>
          <li>
            Enter 0 for any amount that does not occur. Never leave an old
            value from the last question.
          </li>
          <li>
            Solve for the unknown and do not change its sign. The sign tells
            you the direction: <InlineMath math="PV = -37\,162.57" /> means
            you pay in $37,162.57; <InlineMath math="PMT = -417.80" /> means
            you pay $417.80 each period; a negative <InlineMath math="FV" />{" "}
            on a loan means the amount you still owe.
          </li>
          <li>
            Check: <InlineMath math="PV" /> and <InlineMath math="FV" /> with
            the same sign (both nonzero, no payments) give an error or a
            negative <InlineMath math="N" />. Change one sign and solve again.
          </li>
        </ol>
      </HighlightBox>

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

      {/* ── Visual: every TVM case ── */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-5">
        <p className="text-xs font-bold uppercase tracking-wider text-ai-primary px-6 pt-5 pb-1">
          TVM Solver: what to type in every case
        </p>
        <p className="text-sm text-slate-500 px-6 pb-3">
          <InlineMath math="k" /> = periods per year, so{" "}
          <InlineMath math="P/Y = C/Y = k" /> on every row (use 1 for yearly).
          Keep <strong>PMT: END</strong>. &ldquo;solve&rdquo; marks the line to
          solve; a minus sign means you pay it, a plus sign means you receive
          it. Type 0 in any line shown as 0.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white">
                {["Case", "N", "I%", "PV", "PMT", "FV"].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            {tvmCheatRows.map(({ g, rows }) => (
              <tbody key={g}>
                <tr className="bg-slate-200">
                  <td colSpan={6} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-900 border-l-4 border-navy-900">
                    {g}
                  </td>
                </tr>
                {rows.map(({ c, n, i, pv, pmt, fv }, idx) => (
                  <tr key={c} className={idx % 2 === 0 ? "bg-ai-bg" : "bg-white"}>
                    <td className="px-4 py-2.5 text-navy-900 font-semibold">{c}</td>
                    {[n, i, pv, pmt, fv].map((cell, j) => (
                      <td
                        key={j}
                        className={`px-4 py-2.5 font-mono text-xs ${
                          cell.startsWith("solve")
                            ? "font-bold text-navy-900 underline decoration-2 underline-offset-4"
                            : "text-slate-500"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <HighlightBox variant="blue">
        <p className="font-semibold text-navy-900 mb-2">
          Check before you press SOLVE
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-500 text-sm">
          <li>
            Depreciation: type the rate as negative, <InlineMath math="I\% = -12" />{" "}
            for 12% depreciation. When you solve for the rate, the answer is
            negative: report its size as the depreciation rate.
          </li>
          <li>
            Time questions: round <InlineMath math="N" /> up to the next whole
            period, then divide by <InlineMath math="k" /> if the answer is
            needed in years.
          </li>
          <li>
            Total interest on a loan or savings plan is not a TVM line:{" "}
            <InlineMath math="\text{total paid} - \text{amount borrowed}" /> for a
            loan, <InlineMath math="FV - \text{total deposited}" /> for savings.
          </li>
          <li>
            Simple interest and currency exchange do not use the TVM Solver.
            Type the formula or the rate calculation.
          </li>
          <li>
            If the answer looks wrong, check <InlineMath math="P/Y = C/Y" />,{" "}
            <InlineMath math="N = k \times n" />, and the signs of PV, PMT and
            FV.
          </li>
        </ul>
      </HighlightBox>

      {/* ── All worked examples come AFTER all formula groups ── */}

      <WorkedExample title="Find the simple interest on $2,000 at 4% p.a. for 3 years">
        <StepBox n={1}>
          Clue: &ldquo;simple interest&rdquo;. Use the formula, no TVM Solver.{" "}
          <InlineMath math="P = 2000,\; R = 4,\; T = 3" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="I = \dfrac{2000 \times 4 \times 3}{100} = \boxed{\$240}" />
        </StepBox>
        <StepBox n={3}>
          Total amount: <InlineMath math="2000 + 240 = \boxed{\$2{,}240}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>
              Type <Keys s="2000 × 4 × 3 ÷ 100 enter" /> to get 240.
            </>,
            <>
              Total: <Keys s="2000 + Ans enter" />.
            </>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Find the value of $5,000 at 6% p.a. compounded annually after 4 years">
        <StepBox n={1}>
          Clue: &ldquo;compounded&rdquo;, one deposit. Annual compounding gives{" "}
          <InlineMath math="k = 1" />:
          <BlockMath math="FV = 5000(1.06)^4" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 5000 \times 1.262477 = \boxed{\$6{,}312.38}" />
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            fillScreen,
            solveLine("FV"),
            <>
              Check without the app:{" "}
              <Keys s="5000 × ( 1 + 6 ÷ 100 ) ^ 4 enter" />.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "4", "I%": "6", PV: "-5000", PMT: "0", "P/Y": "1", "C/Y": "1" }}
              solve="FV"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Find the value of $3,000 at 5% p.a. compounded monthly after 2 years">
        <StepBox n={1}>
          Monthly gives <InlineMath math="k = 12,\; n = 2,\; kn = 24" />
          <BlockMath math="FV = 3000\left(1 + \dfrac{5}{1200}\right)^{24}" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 3000 \times 1.104941 = \boxed{\$3{,}314.82}" />
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            <>
              <InlineMath math="N" /> is the number of months, 24, not 2. Set{" "}
              <InlineMath math="P/Y = 12" />; check <InlineMath math="C/Y = 12" />.
            </>,
            solveLine("FV"),
            <>
              Check without the app:{" "}
              <Keys s="3000 × ( 1 + 5 ÷ 1200 ) ^ 24 enter" />.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "24", "I%": "5", PV: "-3000", PMT: "0", "P/Y": "12", "C/Y": "12" }}
              solve="FV"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Determine the number of whole years for $6,000 at 5% p.a. (annual) to exceed $10,000">
        <StepBox n={1}>
          Clue: &ldquo;how many years&rdquo;. The unknown is <InlineMath math="N" />, so
          both <InlineMath math="PV" /> and <InlineMath math="FV" /> are given
          with opposite signs: <InlineMath math="PV=-6000,\; FV=10000" />.
        </StepBox>
        <StepBox n={2}>
          The solver gives <InlineMath math="N = 10.47" />. Interest is added
          at the end of each year, so round up. Check by substitution:
          <BlockMath math="6000(1.05)^{10} = 9773.37 \;(<10000), \qquad 6000(1.05)^{11} = 10262.04" />
        </StepBox>
        <StepBox n={3}>
          The first whole number of years is <InlineMath math="\boxed{11}" />.
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            fillScreen,
            solveLine("N"),
            <>
              <InlineMath math="N = 10.4698..." /> years. Never give the decimal
              as the answer to a &ldquo;whole years&rdquo; question.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ "I%": "5", PV: "-6000", PMT: "0", FV: "10000", "P/Y": "1", "C/Y": "1" }}
              solve="N"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Find the annual interest rate if $4,000 grows to $5,000 in 5 years, compounded annually">
        <StepBox n={1}>
          Clue: &ldquo;what rate&rdquo;. The unknown is <InlineMath math="I\%" />.{" "}
          <InlineMath math="PV=-4000,\; FV=5000,\; N=5" />.
        </StepBox>
        <StepBox n={2}>
          By hand: <InlineMath math="4000\left(1+\dfrac{r}{100}\right)^5 = 5000" />,
          so <InlineMath math="1+\dfrac{r}{100} = 1.25^{1/5} = 1.04564" /> and{" "}
          <InlineMath math="r = \boxed{4.56\%}" />.
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            fillScreen,
            solveLine("I%"),
            <>
              The answer is already a percentage, <InlineMath math="I\% = 4.56" />.
              Do not multiply by 100.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "5", PV: "-4000", PMT: "0", FV: "5000", "P/Y": "1", "C/Y": "1" }}
              solve="I%"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Determine how much to invest now to have $9,000 in 4 years at 4% p.a. compounded quarterly">
        <StepBox n={1}>
          Clue: &ldquo;how much to invest now&rdquo;. The unknown is <InlineMath math="PV" />.{" "}
          <InlineMath math="k=4,\; N = 16,\; FV = 9000" />.
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="PV = \dfrac{9000}{(1.01)^{16}} = \boxed{\$7{,}675.39}" />
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            fillScreen,
            solveLine("PV"),
            <>
              The solver shows <InlineMath math="PV = -7675.39" />: the negative
              sign means you pay this amount in. Give the answer as{" "}
              <InlineMath math="\$7{,}675.39" />.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "16", "I%": "4", PMT: "0", FV: "9000", "P/Y": "4", "C/Y": "4" }}
              solve="PV"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Calculate the value of a $28,000 car after 5 years of 12% annual depreciation">
        <StepBox n={1}>
          Clue: &ldquo;depreciation&rdquo;. The decrease multiplier is{" "}
          <InlineMath math="1 - 0.12 = 0.88" />:
          <BlockMath math="FV = 28000(0.88)^5" />
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = 28000 \times 0.527732 = \boxed{\$14{,}776.49}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>
              Type the multiplier directly: <Keys s="28000 × 0.88 ^ 5 enter" />.
            </>,
            <>
              Or let the calculator build the multiplier:{" "}
              <Keys s="28000 × ( 1 − 12 ÷ 100 ) ^ 5 enter" />.
            </>,
            <>
              Or use the TVM Solver with a negative rate, as in the screen:{" "}
              <InlineMath math="I\% = -12" />, <InlineMath math="PV = -28000" />,
              solve <InlineMath math="FV" />. All three give the same answer.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "5", "I%": "-12", PV: "-28000", PMT: "0", "P/Y": "1", "C/Y": "1" }}
              solve="FV"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Convert $850 to EUR, then 500 EUR to USD, at 1 USD = 0.92 EUR">
        <StepBox n={1}>
          The rate is written &ldquo;1 USD = 0.92 EUR&rdquo;. Going from the currency with
          the 1 to the other: multiply.
          <BlockMath math="850 \times 0.92 = \boxed{782 \text{ EUR}}" />
        </StepBox>
        <StepBox n={2}>
          Going back: divide by the same rate.
          <BlockMath math="500 \div 0.92 = \boxed{\$543.48}" />
        </StepBox>
        <CalcSteps
          steps={[
            <>
              <Keys s="850 × 0.92 enter" /> then <Keys s="500 ÷ 0.92 enter" />.
            </>,
            <>
              Sense check: 1 USD buys less than 1 EUR here, so the EUR number
              must be smaller than the USD number, and the USD answer larger
              than 500.
            </>,
          ]}
        />
      </WorkedExample>

      <WorkedExample title="Find the monthly payment on a $20,000 loan at 6% p.a. over 5 years, and the interest paid">
        <StepBox n={1}>
          Clue: &ldquo;loan&rdquo;, &ldquo;monthly payment&rdquo;. Monthly payments:{" "}
          <InlineMath math="N = 12 \times 5 = 60" />. The loan is money you
          receive, so <InlineMath math="PV = 20000" /> and{" "}
          <InlineMath math="FV = 0" /> (fully repaid).
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="PMT = -386.66 \;\Rightarrow\; \text{payment } \boxed{\$386.66}" />
        </StepBox>
        <StepBox n={3}>
          <BlockMath math="\text{Total paid} = 386.656 \times 60 = 23199.36" />
          <BlockMath math="\text{Interest} = 23199.36 - 20000 = \boxed{\$3{,}199.36}" />
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            fillScreen,
            solveLine("PMT"),
            <>
              <InlineMath math="PMT = -386.6560..." />. The negative shows you
              pay it out.
            </>,
            <>
              For the interest, use all the digits the solver shows:{" "}
              <Keys s="386.6560306 × 60 − 20000 enter" />.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "60", "I%": "6", PV: "20000", FV: "0", "P/Y": "12", "C/Y": "12" }}
              solve="PMT"
            />
          }
        />
      </WorkedExample>

      <WorkedExample title="Calculate the value of saving $150 each month at 4.8% p.a. for 6 years">
        <StepBox n={1}>
          Clue: &ldquo;each month&rdquo;. <InlineMath math="N = 12 \times 6 = 72" />.
          Payments go out, so <InlineMath math="PMT = -150" /> and{" "}
          <InlineMath math="PV = 0" /> (nothing at the start).
        </StepBox>
        <StepBox n={2}>
          <BlockMath math="FV = \boxed{\$12{,}487.17}" />
        </StepBox>
        <StepBox n={3}>
          Interest earned:
          <BlockMath math="12487.17 - 150 \times 72 = 12487.17 - 10800 = \boxed{\$1{,}687.17}" />
        </StepBox>
        <CalcSteps
          steps={[
            openSolver,
            fillScreen,
            solveLine("FV"),
            <>
              Interest: <Keys s="12487.17 − 150 × 72 enter" />.
            </>,
          ]}
          screen={
            <TvmEntry
              values={{ N: "72", "I%": "4.8", PV: "0", PMT: "-150", "P/Y": "12", "C/Y": "12" }}
              solve="FV"
            />
          }
        />
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
            <CalcSteps
              steps={[
                <>
                  <Keys s="1500 × 3.5 × 6 ÷ 100 enter" /> gives 315, then{" "}
                  <Keys s="1500 + Ans enter" />.
                </>,
              ]}
            />
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
            <CalcSteps
              steps={[
                openSolver,
                fillScreen,
                solveLine("FV"),
                <>
                  Check: <Keys s="6000 × ( 1 + 4.8 ÷ 400 ) ^ 12 enter" />.
                </>,
              ]}
              screen={
                <TvmEntry
                  values={{ N: "12", "I%": "4.8", PV: "-6000", PMT: "0", "P/Y": "4", "C/Y": "4" }}
                  solve="FV"
                />
              }
            />
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
            <CalcSteps
              steps={[
                openSolver,
                fillScreen,
                solveLine("FV"),
                <>
                  (b): <Keys s="5610.21 − 4000 enter" />.
                </>,
              ]}
              screen={
                <TvmEntry
                  values={{ N: "5", "I%": "7", PV: "-4000", PMT: "0", "P/Y": "1", "C/Y": "1" }}
                  solve="FV"
                />
              }
            />
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
          <>
            <BlockMath math="FV = 1800(0.80)^3 = 1800 \times 0.512 = \boxed{\$921.60}" />
            <CalcSteps
              steps={[
                <>
                  <Keys s="1800 × 0.8 ^ 3 enter" />.
                </>,
              ]}
            />
          </>
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
            <CalcSteps
              steps={[
                <>
                  Press <Keys s="y=" /> and enter{" "}
                  <Keys s="Y1 = 15000 × 0.91 ^ X" /> (the <Keys s="X,T,θ,n" />{" "}
                  key types X).
                </>,
                <>
                  Press <Keys s="2nd graph" /> (TABLE) and scroll down. Read the
                  first X where Y1 is below 8000: X = 7.
                </>,
                <>
                  If the table does not start at 0, press <Keys s="2nd window" />{" "}
                  (TBLSET) and set TblStart = 0, ΔTbl = 1.
                </>,
              ]}
            />
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
            <CalcSteps
              steps={[
                <>
                  <Keys s="640 × 1.27 enter" />, then{" "}
                  <Keys s="200 ÷ 1.27 enter" />.
                </>,
              ]}
            />
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
            <CalcSteps
              steps={[openSolver, fillScreen, solveLine("PMT")]}
              screen={
                <TvmEntry
                  values={{ N: "240", "I%": "4.2", PV: "150000", FV: "0", "P/Y": "12", "C/Y": "12" }}
                  solve="PMT"
                />
              }
            />
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
            <BlockMath math="FV = \boxed{\$22{,}212.16}" />
            <BlockMath math="\text{Interest} = FV - 200 \times 96 = FV - 19200 = \boxed{\$3{,}012.16}" />
            <CalcSteps
              steps={[
                openSolver,
                fillScreen,
                solveLine("FV"),
                <>
                  Interest: <Keys s="22212.16 − 200 × 96 enter" />.
                </>,
              ]}
              screen={
                <TvmEntry
                  values={{ N: "96", "I%": "3.6", PV: "0", PMT: "-200", "P/Y": "12", "C/Y": "12" }}
                  solve="FV"
                />
              }
            />
          </>
        }
      />

      <Practice
        problem={
          <>
            For each situation, state the method (formula, multiplier or TVM
            Solver) and the unknown. Then calculate. (a) $2,500 at 3% p.a.
            simple interest for 4 years: find the interest. (b) $5,000 at 4.5%
            p.a. compounded monthly: find the number of months to reach $8,000.
            (c) A $12,000 loan at 8% p.a. compounded quarterly, repaid by equal
            quarterly payments over 3 years: find the payment. (d) A phone worth
            $900 loses 25% of its value each year: find its value after 4 years.
          </>
        }
        answer={
          <>
            <p>
              (a) Clue &ldquo;simple&rdquo;. Formula, no solver:{" "}
              <InlineMath math="\dfrac{2500 \times 3 \times 4}{100} = \boxed{\$300}" />.
            </p>
            <p>
              (b) Clue &ldquo;how many&rdquo;. TVM, unknown <InlineMath math="N" />:{" "}
              <InlineMath math="I\%=4.5,\; PV=-5000,\; PMT=0,\; FV=8000,\; P/Y=C/Y=12" />.{" "}
              <InlineMath math="N = 125.57" />, so <InlineMath math="\boxed{126}" />{" "}
              months.
            </p>
            <p>
              (c) Clue &ldquo;loan&rdquo;, &ldquo;equal payments&rdquo;. TVM, unknown{" "}
              <InlineMath math="PMT" />:{" "}
              <InlineMath math="N=12,\; I\%=8,\; PV=12000,\; FV=0,\; P/Y=C/Y=4" />.{" "}
              <InlineMath math="PMT = \boxed{\$1{,}134.72}" /> per quarter.
            </p>
            <p>
              (d) Clue &ldquo;loses 25% each year&rdquo;. Multiplier, no solver:{" "}
              <InlineMath math="900(0.75)^4 = \boxed{\$284.77}" />.
            </p>
            <CalcSteps
              steps={[
                <>
                  (a) <Keys s="2500 × 3 × 4 ÷ 100 enter" />. (d){" "}
                  <Keys s="900 × 0.75 ^ 4 enter" />.
                </>,
                <>
                  (b) and (c): <Keys s="apps" />, 1:Finance..., 1:TVM Solver.
                  Fill the entries above, put the cursor on the unknown line
                  and press <Keys s="alpha enter" />.
                </>,
              ]}
            />
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
