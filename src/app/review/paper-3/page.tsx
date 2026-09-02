import type { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import PrintButton from "../../worksheets/physics-motion/PrintButton";
import ExportPdfButton from "@/components/review/ExportPdfButton";
import { AnswerRevealProvider } from "@/components/review/AnswerReveal";
import {
  PartHeader,
  QuestionBanner,
  ContextText,
  PartBlock,
  WorkSpace,
  AnswerStep,
  FinalAnswer,
  AnswerPart,
  SummaryTable,
  StickyPaperNav,
  PaperFooterNav,
} from "@/components/review/PaperKit";

export const metadata: Metadata = {
  title: "Sequences and Series — Review Paper 3",
  description:
    "IB AI SL-style full review on arithmetic and geometric sequences and series — 13 questions with a clean exercise paper and a full worked answer sheet.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReviewPaper3() {
  return (
    <AnswerRevealProvider>
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <div className="bg-[#1e3a5f] text-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                href="/review"
                className="text-purple-300 text-xs font-bold uppercase tracking-widest hover:underline"
              >
                ← Review
              </Link>
              <span className="text-white/30">|</span>
              <span className="text-xs bg-purple-700/80 text-white px-2.5 py-1 rounded-full font-semibold">
                Sequences &amp; Series
              </span>
              <span className="text-xs text-white/50">AI — Unit 1 Number &amp; Algebra (Topic 5)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sequences and Series — Full Review</h1>
            <p className="text-purple-300 text-xl font-medium mb-4 italic">Review Paper 3 — Full Review</p>
            <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
              <p className="text-sm font-bold text-white">
                13 Questions &nbsp;|&nbsp; 67 Marks &nbsp;|&nbsp; IB Mathematics: Applications and Interpretation SL
              </p>
              <p className="text-xs text-white/70 italic mt-0.5">
                Show all working. A GDC may be required for some parts. Give non-exact answers correct to
                3 significant figures unless told otherwise.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <PrintButton />
              <ExportPdfButton />
              <span className="text-xs text-white/40">67 marks · 13 questions · ~2 hours</span>
            </div>
          </div>
        </div>

        {/* Sticky navigator */}
        <StickyPaperNav />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* ══════════════════ QUESTIONS & ANSWERS ══════════════════ */}
          <section id="exercise" className="scroll-mt-28">
            <PartHeader
              variant="exercise"
              label="Exercise Paper"
              note="Attempt every part, then tap Show Answer to reveal the worked solution"
            />

            <QuestionBanner n={1} marks={6} />
            <ContextText>
              In an arithmetic sequence, <InlineMath math="u_6 = 23" /> and <InlineMath math="S_6 = 78" />.
            </ContextText>
            <PartBlock letter="•" marks={6}>
              Find the value of <InlineMath math="u_1" /> and the value of <InlineMath math="d" />.
            </PartBlock>
            <WorkSpace lines={6} answerId="ans-q1" />
            <AnswerPart id="ans-q1" letter="•" marks={6} restate="Find u₁ and d">
              <AnswerStep>
                <BlockMath math="u_6 = u_1+5d = 23 \quad \text{...(1)}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="S_6 = \frac{6}{2}(2u_1+5d) = 3(2u_1+5d) = 78 \;\Rightarrow\; 2u_1+5d = 26 \quad \text{...(2)}" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">
                Multiply (1) by 2: <InlineMath math="2u_1+10d = 46" />. Subtract (2):
              </p>
              <AnswerStep>
                <BlockMath math="(2u_1+10d) - (2u_1+5d) = 46-26 \;\Rightarrow\; 5d = 20 \;\Rightarrow\; d = 4" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="u_1 = 23-5d = 23-5(4) = 3" />
              </AnswerStep>
              <p className="text-xs text-slate-400 italic mb-2">
                Check: <InlineMath math="S_6 = 3(2(3)+5(4)) = 3(26) = 78" /> ✓
              </p>
              <FinalAnswer>Answer: u₁ = 3, d = 4</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={2} marks={6} />
            <ContextText>
              A car is purchased for $32 000. Each year its value decreases by 12% of its value at the
              start of that year, so the value at the end of each year forms a geometric sequence.
            </ContextText>
            <PartBlock letter="a" marks={1}>
              Write down the value of the common ratio, <InlineMath math="r" />.
            </PartBlock>
            <WorkSpace lines={1} answerId="ans-q2a" />
            <AnswerPart id="ans-q2a" letter="a" marks={1} restate="Common ratio">
              <AnswerStep>
                <BlockMath math="r = 1-0.12 = 0.88" />
              </AnswerStep>
              <FinalAnswer>Answer: r = 0.88</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              Find the value of the car after 5 years.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q2b" />
            <AnswerPart id="ans-q2b" letter="b" marks={2} restate="Value after 5 years">
              <AnswerStep>
                <BlockMath math="V_5 = 32\,000(0.88)^5 = 32\,000(0.527732\ldots) \approx \$16\,887.42" />
              </AnswerStep>
              <FinalAnswer>Answer: ≈ $16 887.42</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="c" marks={3}>
              Find the number of complete years after which the car&rsquo;s value first drops below
              $10 000.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q2c" />
            <AnswerPart id="ans-q2c" letter="c" marks={3} restate="Years until below $10 000">
              <p className="text-sm text-slate-600 mb-2">
                Solve <InlineMath math="32\,000(0.88)^n < 10\,000" />:
              </p>
              <AnswerStep>
                <BlockMath math="0.88^n < 0.3125 \;\Rightarrow\; n > \frac{\ln 0.3125}{\ln 0.88} \approx 9.10" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">Checking consecutive integer values:</p>
              <AnswerStep>
                <BlockMath math="V_9 = 32\,000(0.88)^9 \approx \$10\,127.31 \;\text{(still above \$10\,000)}" />
                <BlockMath math="V_{10} = 32\,000(0.88)^{10} \approx \$8910.75 \;\text{(below \$10\,000)}" />
              </AnswerStep>
              <FinalAnswer>Answer: after 10 complete years</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={3} marks={6} />
            <ContextText>
              A theatre has 20 rows of seats. The first row has 18 seats. Each subsequent row has 3 more
              seats than the row before it.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Find the number of seats in the 20th row.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q3a" />
            <AnswerPart id="ans-q3a" letter="a" marks={2} restate="Seats in the 20th row">
              <AnswerStep>
                <BlockMath math="u_{20} = 18+(19)(3) = 18+57 = 75 \text{ seats}" />
              </AnswerStep>
              <FinalAnswer>Answer: 75 seats</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              Find the total number of seats in the theatre.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q3b" />
            <AnswerPart id="ans-q3b" letter="b" marks={2} restate="Total number of seats">
              <AnswerStep>
                <BlockMath math="S_{20} = \frac{20}{2}\left(2(18)+19(3)\right) = 10(36+57) = 930 \text{ seats}" />
              </AnswerStep>
              <FinalAnswer>Answer: 930 seats</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="c" marks={2}>
              The theatre manager wants the total number of seats (still with 20 rows and 18 seats in the
              first row) to be at least 1000. If the common difference is changed to <InlineMath math="d" />{" "}
              seats, find the minimum integer value of <InlineMath math="d" /> required.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q3c" />
            <AnswerPart id="ans-q3c" letter="c" marks={2} restate="Minimum integer d">
              <AnswerStep>
                <BlockMath math="\frac{20}{2}\left(2(18)+19d\right) \geq 1000 \;\Rightarrow\; 10(36+19d)\geq 1000 \;\Rightarrow\; 36+19d\geq 100 \;\Rightarrow\; d\geq 3.368\ldots" />
              </AnswerStep>
              <FinalAnswer>Answer: minimum integer d = 4</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={4} marks={4} />
            <ContextText>
              In a geometric sequence, <InlineMath math="u_1 = 100" /> and <InlineMath math="r = 0.85" />.
            </ContextText>
            <PartBlock letter="•" marks={4}>
              Find the smallest value of <InlineMath math="n" /> for which <InlineMath math="u_n < 20" />.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q4" />
            <AnswerPart id="ans-q4" letter="•" marks={4} restate="Smallest n with uₙ < 20">
              <p className="text-sm text-slate-600 mb-2">
                <InlineMath math="u_n = 100(0.85)^{n-1}" />.
              </p>
              <AnswerStep>
                <BlockMath math="100(0.85)^{n-1} < 20 \;\Rightarrow\; (0.85)^{n-1} < 0.2 \;\Rightarrow\; n-1 > \frac{\ln 0.2}{\ln 0.85} \approx 9.90 \;\Rightarrow\; n > 10.90" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">Checking consecutive integer values:</p>
              <AnswerStep>
                <BlockMath math="u_{10} = 100(0.85)^9 \approx 23.16 \;\text{(not yet below 20)}" />
                <BlockMath math="u_{11} = 100(0.85)^{10} \approx 19.69 \;\text{(below 20)}" />
              </AnswerStep>
              <FinalAnswer>Answer: smallest n = 11</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={5} marks={4} />
            <PartBlock letter="•" marks={4}>
              Evaluate <InlineMath math="\displaystyle\sum_{k=1}^{30} (4k - 7)" />.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q5" />
            <AnswerPart id="ans-q5" letter="•" marks={4} restate="Evaluate the sum">
              <p className="text-sm text-slate-600 mb-2">
                Arithmetic series with <InlineMath math="t_1 = 4(1)-7 = -3" />,{" "}
                <InlineMath math="t_{30} = 4(30)-7 = 113" />, <InlineMath math="n=30" />.
              </p>
              <AnswerStep>
                <BlockMath math="S_{30} = \frac{30}{2}(-3+113) = 15(110) = 1650" />
              </AnswerStep>
              <FinalAnswer>Answer: 1650</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={6} marks={4} />
            <PartBlock letter="•" marks={4}>
              Evaluate <InlineMath math="\displaystyle\sum_{k=1}^{8} 4(3)^{k-1}" />.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q6" />
            <AnswerPart id="ans-q6" letter="•" marks={4} restate="Evaluate the sum">
              <p className="text-sm text-slate-600 mb-2">
                Geometric series with <InlineMath math="u_1=4" />, <InlineMath math="r=3" />,{" "}
                <InlineMath math="n=8" />.
              </p>
              <AnswerStep>
                <BlockMath math="S_8 = \frac{4\left(3^8-1\right)}{3-1} = \frac{4(6561-1)}{2} = \frac{4(6560)}{2} = 13\,120" />
              </AnswerStep>
              <FinalAnswer>Answer: 13 120</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={7} marks={6} />
            <ContextText>The value of an antique painting is recorded at the end of each year:</ContextText>
            <div className="overflow-x-auto mb-4 ml-10">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr>
                    {["Year, n", "1", "2", "3", "4"].map((h) => (
                      <th key={h} className="bg-[#1e3a5f] text-white px-3 py-2 text-left font-semibold text-xs">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-3 py-1.5 border border-slate-200 font-semibold text-navy-900">
                      Value ($)
                    </td>
                    {["2000", "2200", "2420", "2662"].map((v) => (
                      <td key={v} className="px-3 py-1.5 border border-slate-200 text-slate-600">
                        {v}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <PartBlock letter="a" marks={2}>
              Show that the sequence of values is geometric, and state the value of <InlineMath math="r" />
              .
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q7a" />
            <AnswerPart id="ans-q7a" letter="a" marks={2} restate="Show geometric, state r">
              <AnswerStep>
                <BlockMath math="\frac{2200}{2000}=1.1, \quad \frac{2420}{2200}=1.1, \quad \frac{2662}{2420}=1.1" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">
                The ratio between consecutive terms is constant, so the sequence is{" "}
                <strong>geometric</strong> with <InlineMath math="r = 1.1" />.
              </p>
              <FinalAnswer>Answer: geometric, r = 1.1</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              Find the value of the painting after 10 years.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q7b" />
            <AnswerPart id="ans-q7b" letter="b" marks={2} restate="Value after 10 years">
              <AnswerStep>
                <BlockMath math="u_1 = 2000 \;\Rightarrow\; u_{10} = 2000(1.1)^9 = 2000(2.357948\ldots) \approx \$4715.90" />
              </AnswerStep>
              <FinalAnswer>Answer: ≈ $4715.90</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="c" marks={2}>
              Find the first year in which the value of the painting exceeds $5000.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q7c" />
            <AnswerPart id="ans-q7c" letter="c" marks={2} restate="First year value exceeds $5000">
              <p className="text-sm text-slate-600 mb-2">
                Need smallest <InlineMath math="n" /> with <InlineMath math="u_n = 2000(1.1)^{n-1} > 5000" />
                :
              </p>
              <AnswerStep>
                <BlockMath math="(1.1)^{n-1} > 2.5 \;\Rightarrow\; n-1 > \frac{\ln 2.5}{\ln 1.1} \approx 9.62 \;\Rightarrow\; n-1 = 10 \;\Rightarrow\; n=11" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">
                Check: <InlineMath math="u_{10} \approx \$4715.90" /> (below 5000),{" "}
                <InlineMath math="u_{11} = 2000(1.1)^{10} \approx \$5187.48" /> (above 5000)
              </p>
              <FinalAnswer>Answer: year 11</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={8} marks={5} />
            <ContextText>
              Consider the sequence <InlineMath math="100, 94, 88, 82, \dots" />
            </ContextText>
            <PartBlock letter="a" marks={2}>
              State whether this sequence is arithmetic, geometric, or neither. Justify your answer.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q8a" />
            <AnswerPart id="ans-q8a" letter="a" marks={2} restate="Arithmetic, geometric, or neither">
              <AnswerStep>
                <BlockMath math="94-100=-6, \quad 88-94=-6, \quad 82-88=-6" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">
                The consecutive differences are constant, so the sequence is <strong>arithmetic</strong>{" "}
                with <InlineMath math="d=-6" />.
              </p>
              <FinalAnswer>Answer: arithmetic, d = −6</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={1}>
              Find an expression for <InlineMath math="u_n" />.
            </PartBlock>
            <WorkSpace lines={2} answerId="ans-q8b" />
            <AnswerPart id="ans-q8b" letter="b" marks={1} restate="Expression for uₙ">
              <AnswerStep>
                <BlockMath math="u_n = 100+(n-1)(-6) = 106-6n" />
              </AnswerStep>
              <FinalAnswer>Answer: uₙ = 106 − 6n</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="c" marks={1}>
              Find <InlineMath math="u_{20}" />.
            </PartBlock>
            <WorkSpace lines={2} answerId="ans-q8c" />
            <AnswerPart id="ans-q8c" letter="c" marks={1} restate="u₂₀">
              <AnswerStep>
                <BlockMath math="u_{20} = 100+(19)(-6) = 100-114 = -14" />
              </AnswerStep>
              <FinalAnswer>Answer: u₂₀ = −14</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="d" marks={1}>
              Find the sum of the first 20 terms.
            </PartBlock>
            <WorkSpace lines={2} answerId="ans-q8d" />
            <AnswerPart id="ans-q8d" letter="d" marks={1} restate="Sum of first 20 terms">
              <AnswerStep>
                <BlockMath math="S_{20} = \frac{20}{2}\left(2(100)+19(-6)\right) = 10(200-114) = 10(86) = 860" />
              </AnswerStep>
              <FinalAnswer>Answer: S₂₀ = 860</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={9} marks={7} />
            <ContextText>
              Two towns, Riverside and Lakeview, are being compared for population growth. Both towns had
              a population of 12 000 in the year 2020.
              <br />
              Riverside&rsquo;s population increases by <strong>400 people each year</strong>.
              <br />
              Lakeview&rsquo;s population increases by <strong>3% each year</strong>.
              <br />
              Let <InlineMath math="n" /> be the number of years after 2020.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Write down an expression for the population of Riverside, and for the population of
              Lakeview, <InlineMath math="n" /> years after 2020.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q9a" />
            <AnswerPart id="ans-q9a" letter="a" marks={2} restate="Population expressions">
              <AnswerStep>
                <BlockMath math="R_n = 12\,000+400n \quad \text{(Riverside)}" />
                <BlockMath math="L_n = 12\,000(1.03)^n \quad \text{(Lakeview)}" />
              </AnswerStep>
              <FinalAnswer>Answer: Rₙ = 12 000 + 400n; Lₙ = 12 000(1.03)ⁿ</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              Find the population of each town in the year 2030.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q9b" />
            <AnswerPart id="ans-q9b" letter="b" marks={2} restate="Populations in 2030">
              <p className="text-sm text-slate-600 mb-2">
                2030 corresponds to <InlineMath math="n=10" />.
              </p>
              <AnswerStep>
                <BlockMath math="R_{10} = 12\,000+400(10) = 16\,000" />
                <BlockMath math="L_{10} = 12\,000(1.03)^{10} = 12\,000(1.343916\ldots) \approx 16\,127" />
              </AnswerStep>
              <FinalAnswer>Answer: Riverside = 16 000; Lakeview ≈ 16 127</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="c" marks={3}>
              Determine the first year in which Lakeview&rsquo;s population exceeds Riverside&rsquo;s
              population.
            </PartBlock>
            <WorkSpace lines={5} answerId="ans-q9c" />
            <AnswerPart id="ans-q9c" letter="c" marks={3} restate="First year Lakeview exceeds Riverside">
              <p className="text-sm text-slate-600 mb-2">Testing values of n:</p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      {["n", "Rₙ", "Lₙ"].map((h) => (
                        <th key={h} className="bg-[#1e3a5f] text-white px-3 py-2 text-left font-semibold text-xs">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["7", "14800", "14758.49"],
                      ["8", "15200", "15201.24"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-1.5 border border-slate-200 text-slate-600">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                <InlineMath math="L_n < R_n" /> at <InlineMath math="n=7" />;{" "}
                <InlineMath math="L_n > R_n" /> at <InlineMath math="n=8" />, which corresponds to the year{" "}
                <InlineMath math="2020+8=2028" />.
              </p>
              <FinalAnswer>Answer: year 2028 (n = 8)</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={10} marks={4} />
            <ContextText>
              A tour company projects that passenger numbers on its new hot air balloon ride will grow by
              8% each year, starting from 1000 passengers in the first year. Passenger numbers each year
              form a geometric sequence.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Calculate the actual total number of passengers expected over the first 10 years.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q10a" />
            <AnswerPart id="ans-q10a" letter="a" marks={2} restate="Total passengers, first 10 years">
              <p className="text-sm text-slate-600 mb-2">
                <InlineMath math="u_1=1000" />, <InlineMath math="r=1.08" />, <InlineMath math="n=10" />.
              </p>
              <AnswerStep>
                <BlockMath math="S_{10} = \frac{1000\left((1.08)^{10}-1\right)}{1.08-1} = \frac{1000(2.158925\ldots-1)}{0.08} \approx 14\,487 \text{ passengers}" />
              </AnswerStep>
              <FinalAnswer>Answer: ≈ 14 487 passengers</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              The company had estimated a total of 15 000 passengers over the first 10 years. Calculate
              the percentage error in this estimate.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q10b" />
            <AnswerPart id="ans-q10b" letter="b" marks={2} restate="Percentage error">
              <AnswerStep>
                <BlockMath math="\%\text{ error} = \frac{|15\,000-14\,487|}{14\,487}\times 100\% = \frac{513}{14\,487}\times100\% \approx 3.54\%" />
              </AnswerStep>
              <FinalAnswer>Answer: ≈ 3.54%</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={11} marks={4} />
            <ContextText>
              The first term of an infinite geometric sequence is 54, and the sum to infinity of the
              sequence is 162.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Find the common ratio, <InlineMath math="r" />.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q11a" />
            <AnswerPart id="ans-q11a" letter="a" marks={2} restate="Common ratio">
              <AnswerStep>
                <BlockMath math="S_\infty = \frac{u_1}{1-r} \;\Rightarrow\; 162 = \frac{54}{1-r} \;\Rightarrow\; 1-r = \frac{54}{162}=\frac{1}{3} \;\Rightarrow\; r = \frac{2}{3}" />
              </AnswerStep>
              <FinalAnswer>Answer: r = 2/3</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              Find the fifth term of the sequence.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q11b" />
            <AnswerPart id="ans-q11b" letter="b" marks={2} restate="Fifth term">
              <AnswerStep>
                <BlockMath math="u_5 = 54\left(\frac{2}{3}\right)^4 = 54\times\frac{16}{81} = \frac{864}{81} = \frac{32}{3} \approx 10.7" />
              </AnswerStep>
              <FinalAnswer>Answer: u₅ = 32/3 ≈ 10.7</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={12} marks={4} />
            <PartBlock letter="•" marks={4}>
              Express the recurring decimal <InlineMath math="0.\overline{54} = 0.545454\ldots" /> as a
              fraction, by writing it as the sum of an infinite geometric series.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q12" />
            <AnswerPart id="ans-q12" letter="•" marks={4} restate="0.54̄ as a fraction">
              <AnswerStep>
                <BlockMath math="0.\overline{54} = 0.54 + 0.0054 + 0.000054 + \dots" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">
                This is an infinite geometric series with <InlineMath math="u_1 = 0.54" /> and{" "}
                <InlineMath math="r = 0.01" />.
              </p>
              <AnswerStep>
                <BlockMath math="S_\infty = \frac{u_1}{1-r} = \frac{0.54}{1-0.01} = \frac{0.54}{0.99} = \frac{54}{99} = \frac{6}{11}" />
              </AnswerStep>
              <FinalAnswer>Answer: 0.54̄ = 6/11</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={13} marks={7} />
            <ContextText>
              The terms of an arithmetic sequence are given by <InlineMath math="a_n = 5 + 3(n-1)" />.
              <br />
              The terms of a geometric sequence are given by <InlineMath math="g_n = 2(3)^{n-1}" />.
              <br />
              A new sequence is defined by <InlineMath math="b_n = a_n + g_n" />.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Find <InlineMath math="b_1" />, <InlineMath math="b_2" />, and <InlineMath math="b_3" />.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q13a" />
            <AnswerPart id="ans-q13a" letter="a" marks={2} restate="b₁, b₂, b₃">
              <AnswerStep>
                <BlockMath math="b_1=5+2=7, \quad b_2=8+6=14, \quad b_3=11+18=29" />
              </AnswerStep>
              <FinalAnswer>Answer: b₁ = 7, b₂ = 14, b₃ = 29</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="b" marks={2}>
              Find <InlineMath math="\displaystyle\sum_{n=1}^{15} a_n" />.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q13b" />
            <AnswerPart id="ans-q13b" letter="b" marks={2} restate="Sum of aₙ, n = 1 to 15">
              <AnswerStep>
                <BlockMath math="\sum_{n=1}^{15}a_n = \frac{15}{2}\left(2(5)+14(3)\right) = 7.5(10+42) = 390" />
              </AnswerStep>
              <FinalAnswer>Answer: 390</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="c" marks={2}>
              Find <InlineMath math="\displaystyle\sum_{n=1}^{15} g_n" />.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q13c" />
            <AnswerPart id="ans-q13c" letter="c" marks={2} restate="Sum of gₙ, n = 1 to 15">
              <AnswerStep>
                <BlockMath math="\sum_{n=1}^{15}g_n = \frac{2\left(3^{15}-1\right)}{3-1} = \frac{2(14\,348\,907-1)}{2} = 14\,348\,906" />
              </AnswerStep>
              <FinalAnswer>Answer: 14 348 906</FinalAnswer>
            </AnswerPart>
            <PartBlock letter="d" marks={1}>
              Hence find <InlineMath math="\displaystyle\sum_{n=1}^{15} b_n" />.
            </PartBlock>
            <WorkSpace lines={2} answerId="ans-q13d" />
            <AnswerPart id="ans-q13d" letter="d" marks={1} restate="Sum of bₙ, n = 1 to 15">
              <AnswerStep>
                <BlockMath math="\sum_{n=1}^{15}b_n = 390+14\,348\,906 = 14\,349\,296" />
              </AnswerStep>
              <FinalAnswer>Answer: 14 349 296</FinalAnswer>
            </AnswerPart>
          </section>

          {/* ══════════════════ SUMMARY TABLE ══════════════════ */}
          <SummaryTable
            rows={[
              ["1", "—", "u₁ = 3, d = 4"],
              ["2", "(a)", "r = 0.88"],
              ["2", "(b)", "≈ $16 887.42"],
              ["2", "(c)", "10 years"],
              ["3", "(a)", "75 seats"],
              ["3", "(b)", "930 seats"],
              ["3", "(c)", "d = 4"],
              ["4", "—", "n = 11"],
              ["5", "—", "1650"],
              ["6", "—", "13 120"],
              ["7", "(a)", "geometric, r = 1.1"],
              ["7", "(b)", "≈ $4715.90"],
              ["7", "(c)", "year 11"],
              ["8", "(a)", "arithmetic, d = −6"],
              ["8", "(b)", "uₙ = 106 − 6n"],
              ["8", "(c)", "u₂₀ = −14"],
              ["8", "(d)", "S₂₀ = 860"],
              ["9", "(a)", "Rₙ=12000+400n; Lₙ=12000(1.03)ⁿ"],
              ["9", "(b)", "16 000; ≈ 16 127"],
              ["9", "(c)", "year 2028 (n = 8)"],
              ["10", "(a)", "≈ 14 487 passengers"],
              ["10", "(b)", "≈ 3.54%"],
              ["11", "(a)", "r = 2/3"],
              ["11", "(b)", "u₅ ≈ 10.7"],
              ["12", "—", "6/11"],
              ["13", "(a)", "7, 14, 29"],
              ["13", "(b)", "390"],
              ["13", "(c)", "14 348 906"],
              ["13", "(d)", "14 349 296"],
            ]}
          />

          {/* Footer nav */}
          <PaperFooterNav paperLabel="Sequences and Series — Review Paper 3" />
        </div>
      </main>
    </AnswerRevealProvider>
  );
}
