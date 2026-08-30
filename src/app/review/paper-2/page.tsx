import type { Metadata } from "next";
import Link from "next/link";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import PrintButton from "../../worksheets/physics-motion/PrintButton";
import {
  PartHeader,
  QuestionBanner,
  ContextText,
  PartBlock,
  WorkSpace,
  AnswerStep,
  FinalAnswer,
  AnswerPart,
  Note,
  SummaryTable,
  StickyPaperNav,
  PaperFooterNav,
} from "@/components/review/PaperKit";

export const metadata: Metadata = {
  title: "Sequences and Series — Review Paper 2",
  description:
    "Mixed IB-style practice on arithmetic and geometric sequences and series — 12 questions with a clean exercise paper and a full worked answer sheet.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReviewPaper2() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-[#1e3a5f] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="/review" className="text-purple-300 text-xs font-bold uppercase tracking-widest hover:underline">
              ← Review
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-xs bg-purple-700/80 text-white px-2.5 py-1 rounded-full font-semibold">
              Sequences &amp; Series
            </span>
            <span className="text-xs text-white/50">AA — Unit 1 Algebra (Topic 5)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sequences and Series</h1>
          <p className="text-purple-300 text-xl font-medium mb-4 italic">Review Paper 2 — Mixed Practice</p>
          <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
            <p className="text-sm font-bold text-white">
              12 Questions &nbsp;|&nbsp; 76 Marks &nbsp;|&nbsp; Arithmetic &amp; Geometric Sequences, Series, Applications
            </p>
            <p className="text-xs text-white/70 italic mt-0.5">
              Attempt Part A first, then check your work against the fully worked Part B answer sheet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <PrintButton />
            <span className="text-xs text-white/40">76 marks · 12 questions · ~90 min</span>
          </div>
        </div>
      </div>

      {/* Sticky navigator */}
      <StickyPaperNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* ══════════════════ PART A — EXERCISE ══════════════════ */}
        <section id="exercise" className="scroll-mt-28">
          <PartHeader variant="exercise" label="Part A — Exercise Paper" note="No worked solutions below — attempt every part" />

          <QuestionBanner n={2} marks={5} />
          <PartBlock letter="•" marks={5}>
            Consider an arithmetic sequence where <InlineMath math="u_8 = S_8 = 8" />. Find the value of
            the first term, <InlineMath math="u_1" />, and the value of the common difference,{" "}
            <InlineMath math="d" />.
          </PartBlock>
          <WorkSpace lines={5} answerId="ans-q2" />

          <QuestionBanner n={3} marks={5} />
          <ContextText>
            An arithmetic sequence has first term 60 and common difference <InlineMath math="-2.5" />.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            Given that the <InlineMath math="k" />
            th term of the sequence is zero, find the value of <InlineMath math="k" />.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q3a" />
          <PartBlock letter="b" marks={3}>
            Let <InlineMath math="S_n" /> denote the sum of the first <InlineMath math="n" /> terms of
            the sequence. Find the maximum value of <InlineMath math="S_n" />.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q3b" />

          <QuestionBanner n={4} marks={6} />
          <ContextText>
            In an arithmetic sequence, <InlineMath math="u_2 = 5" /> and <InlineMath math="u_3 = 11" />.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            Find the common difference.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q4a" />
          <PartBlock letter="b" marks={2}>
            Find the first term.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q4b" />
          <PartBlock letter="c" marks={2}>
            Find the sum of the first 20 terms.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q4c" />

          <QuestionBanner n={5} marks={2} />
          <ContextText>
            The first terms of an infinite geometric sequence, <InlineMath math="u_n" />, are{" "}
            <InlineMath math="2, 6, 18, 54, \dots" /> The first terms of a second infinite geometric
            sequence, <InlineMath math="v_n" />, are <InlineMath math="2, -6, 18, -54, \dots" /> The terms
            of a third sequence, <InlineMath math="w_n" />, are defined as{" "}
            <InlineMath math="w_n = u_n + v_n" />.
          </ContextText>
          <PartBlock letter="•" marks={2}>
            The finite series <InlineMath math="\sum_{k=1}^{225} w_k" /> can also be written in the form{" "}
            <InlineMath math="\sum_{k=0}^{m} 4r^k" />. Find the value of <InlineMath math="m" />.
          </PartBlock>
          <WorkSpace lines={6} answerId="ans-q5" />

          <QuestionBanner n={6} marks={2} />
          <PartBlock letter="•" marks={2}>
            In an arithmetic sequence, <InlineMath math="u_1 = -5" /> and <InlineMath math="d = 3" />.
            Find <InlineMath math="u_8" />.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q6" />

          <QuestionBanner n={7} marks={4} />
          <ContextText>
            In an arithmetic sequence, the first term is 8 and the second term is 5.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            Find the common difference.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q7a" />
          <PartBlock letter="b" marks={2}>
            Find the tenth term.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q7b" />

          <QuestionBanner n={8} marks={6} />
          <ContextText>
            In an arithmetic sequence, the first term is 3 and the second term is 7.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            Find the common difference.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q8a" />
          <PartBlock letter="b" marks={2}>
            Find the tenth term.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q8b" />
          <PartBlock letter="c" marks={2}>
            Find the sum of the first ten terms of the sequence.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q8c" />

          <QuestionBanner n={9} marks={6} />
          <ContextText>
            Tomás is playing with sticks and forms the first three diagrams of a pattern: Diagram 1 uses
            4 sticks, Diagram 2 uses 7 sticks, Diagram 3 uses 10 sticks — each new square added shares one
            side with the previous one, adding 3 sticks each time. This is an arithmetic sequence with{" "}
            <InlineMath math="u_1 = 4" />, <InlineMath math="d = 3" />.
          </ContextText>
          <PartBlock letter="a" marks={3}>
            Diagram <InlineMath math="n" /> is formed with 52 sticks. Find the value of{" "}
            <InlineMath math="n" />.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q9a" />
          <PartBlock letter="b" marks={3}>
            Tomás forms a total of 24 diagrams. Find the total number of sticks used for all 24 diagrams.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q9b" />

          <QuestionBanner n={10} marks={6} />
          <ContextText>
            One of the locations in the 2016 Olympic Games is an amphitheatre. The number of seats in the
            first row, <InlineMath math="u_1" />, is 240. The number of seats in each subsequent row forms
            an arithmetic sequence. The number of seats in the sixth row, <InlineMath math="u_6" />, is
            270.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            Calculate the value of the common difference, <InlineMath math="d" />.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q10a" />
          <PartBlock letter="b" marks={2}>
            There are 20 rows. Find the total number of seats in the amphitheatre.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q10b" />
          <PartBlock letter="c" marks={2}>
            Anisha estimates the amphitheatre has 6500 seats. Calculate the percentage error in
            Anisha&rsquo;s estimate.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q10c" />

          <QuestionBanner n={11} marks={16} />
          <ContextText>
            Antonio and Barbara start work at the same company on the same day. They each earn an annual
            salary of €8000 during the first year. The company gives a salary increase following
            completion of each year of employment.
            <br />
            <strong>Plan A (Antonio):</strong> annual salary increases by €450 each year (arithmetic).
            <br />
            <strong>Plan B (Barbara):</strong> annual salary increases by 5% each year (geometric).
          </ContextText>
          <PartBlock letter="a" marks={3}>
            Calculate: (i) Antonio&rsquo;s annual salary during his 2nd year; (ii) Barbara&rsquo;s annual
            salary during her 2nd year.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q11a" />
          <PartBlock letter="b" marks={4}>
            Write an expression for: (i) Antonio&rsquo;s salary in year <InlineMath math="n" />; (ii)
            Barbara&rsquo;s salary in year <InlineMath math="n" />.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q11b" />
          <PartBlock letter="c" marks={2}>
            Determine the number of years for which Antonio&rsquo;s annual salary is greater than or
            equal to Barbara&rsquo;s annual salary.
          </PartBlock>
          <WorkSpace lines={5} answerId="ans-q11c" />
          <PartBlock letter="d" marks={7}>
            Both plan to work for a total of 15 years. (i) Calculate the total amount that Barbara will
            be paid during these 15 years. (ii) Determine whether Antonio earns more than Barbara during
            these 15 years.
          </PartBlock>
          <WorkSpace lines={7} answerId="ans-q11d" />

          <QuestionBanner n={12} marks={6} />
          <ContextText>
            The first three terms of an arithmetic sequence are <InlineMath math="u_1 = 0.3" />,{" "}
            <InlineMath math="u_2 = 1.5" />, <InlineMath math="u_3 = 2.7" />.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            Find the common difference.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q12a" />
          <PartBlock letter="b" marks={2}>
            Find the 30th term of the sequence.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q12b" />
          <PartBlock letter="c" marks={2}>
            Find the sum of the first 30 terms.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q12c" />

          <QuestionBanner n={13} marks={12} />
          <ContextText>
            Prachi is on vacation in the United States, visiting the Grand Canyon. When she reaches the
            top, she drops a coin down a cliff. The coin falls 5 m in the first second, 15 m in the next
            second, 25 m in the third second, and so on — an arithmetic sequence.
          </ContextText>
          <PartBlock letter="a" marks={2}>
            (i) Write down the common difference <InlineMath math="d" />. (ii) Write down the distance
            the coin falls during the 4th second.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q13a" />
          <PartBlock letter="b" marks={2}>
            Calculate the distance the coin falls during the 15th second.
          </PartBlock>
          <WorkSpace lines={2} answerId="ans-q13b" />
          <PartBlock letter="c" marks={3}>
            Calculate the total distance the coin falls in the first 15 seconds. Give your answer in
            kilometres.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q13c" />
          <ContextText>
            Prachi visits a tourist centre nearby. It opened at the start of 2015 with 17 000 visitors in
            the first year. Visitors are expected to increase by 10% each year.
          </ContextText>
          <PartBlock letter="d" marks={2}>
            Calculate the number of people expected to visit in 2016.
          </PartBlock>
          <WorkSpace lines={3} answerId="ans-q13d" />
          <PartBlock letter="e" marks={3}>
            Calculate the total number of people expected to visit the tourist centre during the first 10
            years since it opened.
          </PartBlock>
          <WorkSpace lines={4} answerId="ans-q13e" />
        </section>

        {/* ══════════════════ PART B — ANSWER SHEET ══════════════════ */}
        <section id="answers" className="scroll-mt-28">
          <PartHeader variant="answers" label="Part B — Answer Sheet" note="Full worked solutions" />

          <QuestionBanner n={2} marks={5} />
          <AnswerPart id="ans-q2" letter="•" marks={5} restate="Find u₁ and d">
            <AnswerStep>
              <BlockMath math="u_8 = u_1 + 7d = 8 \quad \text{...(1)}" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="S_8 = \frac{8}{2}\left(2u_1 + 7d\right) = 4(2u_1+7d) = 8 \;\Rightarrow\; 2u_1+7d = 2 \quad \text{...(2)}" />
            </AnswerStep>
            <p className="text-sm text-slate-600 mb-2">
              From (1): <InlineMath math="u_1 = 8 - 7d" />. Substitute into (2):
            </p>
            <AnswerStep>
              <BlockMath math="2(8-7d) + 7d = 2" />
              <BlockMath math="16 - 14d + 7d = 2" />
              <BlockMath math="16 - 7d = 2" />
              <BlockMath math="d = 2" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="u_1 = 8 - 7(2) = -6" />
            </AnswerStep>
            <p className="text-xs text-slate-400 italic mb-2">
              Check: <InlineMath math="u_8 = -6 + 7(2) = 8" /> ✓,{" "}
              <InlineMath math="S_8 = 4(-12+14) = 8" /> ✓
            </p>
            <FinalAnswer>Answer: u₁ = −6, d = 2</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={3} marks={5} />
          <AnswerPart id="ans-q3a" letter="a" marks={2} restate="Value of k">
            <AnswerStep>
              <BlockMath math="u_k = 60 + (k-1)(-2.5) = 0" />
              <BlockMath math="60 - 2.5(k-1) = 0" />
              <BlockMath math="k - 1 = \frac{60}{2.5} = 24" />
              <BlockMath math="k = 25" />
            </AnswerStep>
            <FinalAnswer>Answer: k = 25</FinalAnswer>
            <Note>
              A working of the form &ldquo;<InlineMath math="k = 60(-5) \Rightarrow k=-300" />&rdquo; is
              not valid algebra — you cannot treat <InlineMath math="-2.5" /> as <InlineMath math="-5" />{" "}
              and multiply like that. The correct approach is shown above.
            </Note>
          </AnswerPart>
          <AnswerPart id="ans-q3b" letter="b" marks={3} restate="Maximum Sₙ">
            <p className="text-sm text-slate-600 mb-2">
              Since <InlineMath math="d = -2.5 < 0" />, the terms are decreasing, so{" "}
              <InlineMath math="S_n" /> is maximised at the last term that is still{" "}
              <InlineMath math="\geq 0" /> — which is exactly <InlineMath math="u_{25} = 0" /> (found in
              part a). So the maximum occurs at <InlineMath math="n = 24" /> or <InlineMath math="n = 25" />{" "}
              (they give the same sum, since <InlineMath math="u_{25}=0" />).
            </p>
            <AnswerStep>
              <BlockMath math="S_{25} = \frac{25}{2}\left(2(60) + (25-1)(-2.5)\right) = \frac{25}{2}\left(120 - 60\right) = \frac{25}{2}(60) = 750" />
            </AnswerStep>
            <FinalAnswer>Answer: maximum Sₙ = 750 (at n = 24 or n = 25)</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={4} marks={6} />
          <AnswerPart id="ans-q4a" letter="a" marks={2} restate="Common difference">
            <AnswerStep>
              <BlockMath math="d = u_3 - u_2 = 11 - 5 = 6" />
            </AnswerStep>
            <FinalAnswer>Answer: d = 6</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q4b" letter="b" marks={2} restate="First term">
            <AnswerStep>
              <BlockMath math="u_1 = u_2 - d = 5 - 6 = -1" />
            </AnswerStep>
            <FinalAnswer>Answer: u₁ = −1</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q4c" letter="c" marks={2} restate="Sum of first 20 terms">
            <AnswerStep>
              <BlockMath math="S_{20} = \frac{20}{2}\left(2(-1) + (20-1)(6)\right) = 10\left(-2 + 114\right) = 10(112) = 1120" />
            </AnswerStep>
            <FinalAnswer>Answer: S₂₀ = 1120</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={5} marks={2} />
          <AnswerPart id="ans-q5" letter="•" marks={2} restate="Value of m">
            <p className="text-sm text-slate-600 mb-2">
              <InlineMath math="u_n = 2(3)^{n-1}" /> and <InlineMath math="v_n = 2(-3)^{n-1}" />, so:
            </p>
            <AnswerStep>
              <BlockMath math="w_n = 2(3)^{n-1} + 2(-3)^{n-1}" />
            </AnswerStep>
            <ul className="list-disc ml-5 text-sm text-slate-600 space-y-1 mb-3">
              <li>
                If <InlineMath math="n" /> is <strong>odd</strong>, <InlineMath math="n-1" /> is even, so{" "}
                <InlineMath math="(-3)^{n-1} = 3^{n-1}" />, giving{" "}
                <InlineMath math="w_n = 2(3^{n-1}) + 2(3^{n-1}) = 4(3)^{n-1}" />.
              </li>
              <li>
                If <InlineMath math="n" /> is <strong>even</strong>, <InlineMath math="n-1" /> is odd, so{" "}
                <InlineMath math="(-3)^{n-1} = -3^{n-1}" />, giving{" "}
                <InlineMath math="w_n = 2(3^{n-1}) - 2(3^{n-1}) = 0" />.
              </li>
            </ul>
            <p className="text-sm text-slate-600 mb-2">
              So only <strong>odd-indexed</strong> terms contribute to the sum. Among{" "}
              <InlineMath math="k=1" /> to <InlineMath math="225" />, the odd values are{" "}
              <InlineMath math="k = 1,3,5,\dots,225" /> — a total of 113 terms. Writing{" "}
              <InlineMath math="k = 2j-1" /> for <InlineMath math="j = 1,\dots,113" />:
            </p>
            <AnswerStep>
              <BlockMath math="w_{2j-1} = 4(3)^{2j-2} = 4\left(3^2\right)^{j-1} = 4(9)^{j-1}" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="\sum_{k=1}^{225} w_k = \sum_{j=1}^{113} 4(9)^{j-1} = \sum_{k=0}^{112} 4(9)^k" />
            </AnswerStep>
            <p className="text-sm text-slate-600 mb-2">
              Comparing with <InlineMath math="\sum_{k=0}^{m}4r^k" />, we get <InlineMath math="r = 9" />{" "}
              and:
            </p>
            <AnswerStep>
              <BlockMath math="\boxed{m = 112}" />
            </AnswerStep>
            <FinalAnswer>Answer: m = 112</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={6} marks={2} />
          <AnswerPart id="ans-q6" letter="•" marks={2} restate="Find u₈">
            <AnswerStep>
              <BlockMath math="u_8 = -5 + (8-1)(3) = -5 + 21 = 16" />
            </AnswerStep>
            <FinalAnswer>Answer: u₈ = 16</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={7} marks={4} />
          <AnswerPart id="ans-q7a" letter="a" marks={2} restate="Common difference">
            <AnswerStep>
              <BlockMath math="d = 5 - 8 = -3" />
            </AnswerStep>
            <FinalAnswer>Answer: d = −3</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q7b" letter="b" marks={2} restate="Tenth term">
            <AnswerStep>
              <BlockMath math="u_{10} = 8 + (10-1)(-3) = 8 - 27 = -19" />
            </AnswerStep>
            <FinalAnswer>Answer: u₁₀ = −19</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={8} marks={6} />
          <AnswerPart id="ans-q8a" letter="a" marks={2} restate="Common difference">
            <AnswerStep>
              <BlockMath math="d = 7 - 3 = 4" />
            </AnswerStep>
            <FinalAnswer>Answer: d = 4</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q8b" letter="b" marks={2} restate="Tenth term">
            <AnswerStep>
              <BlockMath math="u_{10} = 3 + (10-1)(4) = 3 + 36 = 39" />
            </AnswerStep>
            <FinalAnswer>Answer: u₁₀ = 39</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q8c" letter="c" marks={2} restate="Sum of first ten terms">
            <AnswerStep>
              <BlockMath math="S_{10} = \frac{10}{2}\left(2(3) + (10-1)(4)\right) = 5\left(6 + 36\right) = 5(42) = 210" />
            </AnswerStep>
            <FinalAnswer>Answer: S₁₀ = 210</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={9} marks={6} />
          <AnswerPart id="ans-q9a" letter="a" marks={3} restate="Diagram with 52 sticks">
            <AnswerStep>
              <BlockMath math="u_n = 4 + (n-1)(3) = 52" />
              <BlockMath math="3(n-1) = 48" />
              <BlockMath math="n - 1 = 16" />
              <BlockMath math="n = 17" />
            </AnswerStep>
            <FinalAnswer>Answer: n = 17</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q9b" letter="b" marks={3} restate="Sticks for 24 diagrams">
            <AnswerStep>
              <BlockMath math="S_{24} = \frac{24}{2}\left(2(4) + (24-1)(3)\right) = 12\left(8 + 69\right) = 12(77) = 924" />
            </AnswerStep>
            <FinalAnswer>Answer: 924 sticks</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={10} marks={6} />
          <AnswerPart id="ans-q10a" letter="a" marks={2} restate="Common difference">
            <AnswerStep>
              <BlockMath math="u_6 = u_1 + 5d \;\Rightarrow\; 270 = 240 + 5d \;\Rightarrow\; 5d = 30 \;\Rightarrow\; d = 6" />
            </AnswerStep>
            <FinalAnswer>Answer: d = 6</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q10b" letter="b" marks={2} restate="Total seats, 20 rows">
            <AnswerStep>
              <BlockMath math="S_{20} = \frac{20}{2}\left(2(240) + (20-1)(6)\right) = 10\left(480 + 114\right) = 10(594) = 5940" />
            </AnswerStep>
            <FinalAnswer>Answer: S₂₀ = 5940 seats</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q10c" letter="c" marks={2} restate="Percentage error">
            <p className="text-sm text-slate-600 mb-2">
              The percentage error formula uses the <strong>actual (exact)</strong> value in the
              denominator:
            </p>
            <AnswerStep>
              <BlockMath math="\%\text{ error} = \frac{|\text{estimate} - \text{exact}|}{\text{exact}} \times 100\%" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="\%\text{ error} = \frac{|6500 - 5940|}{5940} \times 100\% = \frac{560}{5940} \times 100\%" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="\%\text{ error} \approx 9.43\%" />
            </AnswerStep>
            <FinalAnswer>Answer: percentage error ≈ 9.43%</FinalAnswer>
            <Note>
              Dividing 5940 by the <strong>estimate</strong> 6500 instead of dividing the difference by
              the <strong>exact</strong> value 5940 is a common slip. The correct percentage-error formula
              always divides by the actual/exact value, giving ≈ 9.43% rather than ≈ 9.1%.
            </Note>
          </AnswerPart>

          <QuestionBanner n={11} marks={16} />
          <AnswerPart id="ans-q11a" letter="a" marks={3} restate="2nd year salaries">
            <p className="text-sm text-slate-600 mb-1">i) <InlineMath math="u_2 = 8000 + 450 = 8450" /> euros</p>
            <p className="text-sm text-slate-600 mb-2">ii) <InlineMath math="u_2 = 8000 \times 1.05 = 8400" /> euros</p>
            <FinalAnswer>Answer: Antonio = €8450, Barbara = €8400</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q11b" letter="b" marks={4} restate="Salary in year n">
            <AnswerStep>
              <p className="text-sm text-slate-500 mb-1">i)</p>
              <BlockMath math="u_n = 8000 + 450(n-1)" />
            </AnswerStep>
            <AnswerStep>
              <p className="text-sm text-slate-500 mb-1">ii)</p>
              <BlockMath math="u_n = 8000(1.05)^{n-1}" />
            </AnswerStep>
            <FinalAnswer>
              Answer: uₙ = 8000 + 450(n−1); uₙ = 8000(1.05)ⁿ⁻¹
            </FinalAnswer>
            <Note>
              A common slip writes <InlineMath math="u_n = 8000+450(n)" /> and{" "}
              <InlineMath math="u_n = 8000\times 1.05^{(n)}" /> — both missing the essential{" "}
              <InlineMath math="(n-1)" />, since <InlineMath math="u_1" /> must equal 8000 when{" "}
              <InlineMath math="n=1" />. With the correct formulas:{" "}
              <InlineMath math="u_1 = 8000+450(0)=8000" /> ✓ and <InlineMath math="u_1=8000(1.05)^0=8000" />{" "}
              ✓.
            </Note>
          </AnswerPart>
          <AnswerPart id="ans-q11c" letter="c" marks={2} restate="Years Antonio ≥ Barbara">
            <p className="text-sm text-slate-600 mb-2">
              Compare <InlineMath math="u_n = 8000+450(n-1)" /> (Antonio) against{" "}
              <InlineMath math="u_n = 8000(1.05)^{n-1}" /> (Barbara) year by year:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr>
                    {["n", "Antonio (€)", "Barbara (€)", "Antonio ≥ Barbara?"].map((h) => (
                      <th key={h} className="bg-[#1e3a5f] text-white px-3 py-2 text-left font-semibold text-xs">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "8000.00", "8000.00", "Yes (equal)"],
                    ["2", "8450.00", "8400.00", "Yes"],
                    ["3", "8900.00", "8820.00", "Yes"],
                    ["4", "9350.00", "9261.00", "Yes"],
                    ["5", "9800.00", "9724.05", "Yes"],
                    ["6", "10250.00", "10210.25", "Yes"],
                    ["7", "10700.00", "10720.77", "No"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-3 py-1.5 border border-slate-200 ${
                            j === 3 && cell === "No" ? "font-bold text-danger-primary" : "text-slate-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 mb-2">
              Antonio&rsquo;s salary is greater than or equal to Barbara&rsquo;s for the first{" "}
              <strong>6</strong> years.
            </p>
            <FinalAnswer>Answer: 6 years</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q11d" letter="d" marks={7} restate="15-year totals">
            <p className="text-sm text-slate-500 mb-1">(i) Barbara&rsquo;s total (sum of a geometric series, 15 terms):</p>
            <AnswerStep>
              <BlockMath math="S_{15} = \frac{u_1(r^{15}-1)}{r-1} = \frac{8000\left((1.05)^{15}-1\right)}{1.05-1}" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="(1.05)^{15} \approx 2.078928" />
              <BlockMath math="S_{15} = \frac{8000(2.078928 - 1)}{0.05} = \frac{8000(1.078928)}{0.05} \approx 172\,628.51" />
            </AnswerStep>
            <p className="text-sm text-slate-600 mb-2">
              Barbara is paid a total of approximately €172 628.51 during the 15 years.
            </p>
            <Note>
              A working that finds <InlineMath math="u_{15} = 8000(1.05)^{14} \approx 15\,839" /> stops at
              the salary <strong>in</strong> year 15 — not the <strong>total sum</strong> of all 15 years&rsquo;
              salaries requested by the question. The correct quantity is the geometric series sum{" "}
              <InlineMath math="S_{15}" /> shown above.
            </Note>
            <p className="text-sm text-slate-500 mt-4 mb-1">(ii) Antonio&rsquo;s total (sum of an arithmetic series, 15 terms):</p>
            <AnswerStep>
              <BlockMath math="S_{15} = \frac{15}{2}\left(2(8000) + (15-1)(450)\right) = 7.5\left(16000 + 6300\right) = 7.5(22300) = 167\,250" />
            </AnswerStep>
            <p className="text-sm text-slate-600 mb-2">Antonio is paid a total of €167 250 during the 15 years.</p>
            <p className="text-sm text-slate-500 mb-1">Comparison:</p>
            <AnswerStep>
              <BlockMath math="167\,250 \; (\text{Antonio}) \;<\; 172\,628.51 \; (\text{Barbara})" />
            </AnswerStep>
            <FinalAnswer>
              Answer: No — Barbara&rsquo;s total (≈€172 628.51) exceeds Antonio&rsquo;s total (€167 250)
            </FinalAnswer>
            <p className="text-xs text-slate-500 italic mt-2">
              Even though Antonio&rsquo;s individual annual salary was higher than Barbara&rsquo;s for the
              first 6 years, Barbara&rsquo;s total earnings over the full 15 years exceed Antonio&rsquo;s,
              because of the compounding effect of her percentage-based raises in later years.
            </p>
          </AnswerPart>

          <QuestionBanner n={12} marks={6} />
          <AnswerPart id="ans-q12a" letter="a" marks={2} restate="Common difference">
            <AnswerStep>
              <BlockMath math="d = 1.5 - 0.3 = 1.2" />
            </AnswerStep>
            <FinalAnswer>Answer: d = 1.2</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q12b" letter="b" marks={2} restate="30th term">
            <AnswerStep>
              <BlockMath math="u_{30} = 0.3 + (30-1)(1.2) = 0.3 + 34.8 = 35.1" />
            </AnswerStep>
            <FinalAnswer>Answer: u₃₀ = 35.1</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q12c" letter="c" marks={2} restate="Sum of first 30 terms">
            <AnswerStep>
              <BlockMath math="S_{30} = \frac{30}{2}\left(2(0.3) + (30-1)(1.2)\right) = 15\left(0.6 + 34.8\right) = 15(35.4) = 531" />
            </AnswerStep>
            <FinalAnswer>Answer: S₃₀ = 531</FinalAnswer>
          </AnswerPart>

          <QuestionBanner n={13} marks={12} />
          <AnswerPart id="ans-q13a" letter="a" marks={2} restate="d and 4th-second distance">
            <p className="text-sm text-slate-600 mb-1">i) <InlineMath math="d = 15 - 5 = 10" /></p>
            <p className="text-sm text-slate-600 mb-2">
              ii) <InlineMath math="u_4 = 5 + (4-1)(10) = 5 + 30 = 35\text{ m}" />
            </p>
            <FinalAnswer>Answer: d = 10, u₄ = 35 m</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q13b" letter="b" marks={2} restate="15th-second distance">
            <AnswerStep>
              <BlockMath math="u_{15} = 5 + (15-1)(10) = 5 + 140 = 145\text{ m}" />
            </AnswerStep>
            <FinalAnswer>Answer: u₁₅ = 145 m</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q13c" letter="c" marks={3} restate="Total distance, first 15 s">
            <AnswerStep>
              <BlockMath math="S_{15} = \frac{15}{2}\left(2(5) + (15-1)(10)\right) = 7.5\left(10+140\right) = 7.5(150) = 1125\text{ m}" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="1125\text{ m} = 1.125\text{ km}" />
            </AnswerStep>
            <FinalAnswer>Answer: S₁₅ = 1.125 km</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q13d" letter="d" marks={2} restate="2016 visitors">
            <p className="text-sm text-slate-600 mb-2">
              This is geometric with <InlineMath math="u_1 = 17\,000" /> (year 2015) and{" "}
              <InlineMath math="r = 1.1" />.
            </p>
            <AnswerStep>
              <BlockMath math="u_2 = 17\,000 \times 1.1 = 18\,700" />
            </AnswerStep>
            <FinalAnswer>Answer: 18 700 people expected in 2016</FinalAnswer>
          </AnswerPart>
          <AnswerPart id="ans-q13e" letter="e" marks={3} restate="Total visitors, first 10 years">
            <p className="text-sm text-slate-600 mb-2">
              This requires the <strong>sum</strong> of the first 10 terms of the geometric sequence (not
              just the 10th term):
            </p>
            <AnswerStep>
              <BlockMath math="S_{10} = \frac{u_1\left(r^{10}-1\right)}{r-1} = \frac{17\,000\left((1.1)^{10}-1\right)}{1.1-1}" />
            </AnswerStep>
            <AnswerStep>
              <BlockMath math="(1.1)^{10} \approx 2.593742" />
              <BlockMath math="S_{10} = \frac{17\,000(2.593742 - 1)}{0.1} = \frac{17\,000(1.593742)}{0.1} \approx 270\,936" />
            </AnswerStep>
            <FinalAnswer>Answer: ≈ 270 936 people during the first 10 years</FinalAnswer>
            <Note>
              Computing <InlineMath math="17\,000 \times 1.1^{9} \approx 40\,085" /> gives the number of
              visitors <strong>in year 10 alone</strong> — not the <strong>total</strong> over all 10
              years. The correct quantity is the geometric series sum <InlineMath math="S_{10}" /> shown
              above.
            </Note>
          </AnswerPart>
        </section>

        {/* ══════════════════ SUMMARY TABLE ══════════════════ */}
        <SummaryTable
          rows={[
            ["2", "—", "u₁ = −6, d = 2"],
            ["3", "(a)", "k = 25"],
            ["3", "(b)", "Sₘₐₓ = 750"],
            ["4", "(a)", "d = 6"],
            ["4", "(b)", "u₁ = −1"],
            ["4", "(c)", "S₂₀ = 1120"],
            ["5", "—", "m = 112"],
            ["6", "—", "u₈ = 16"],
            ["7", "(a)", "d = −3"],
            ["7", "(b)", "u₁₀ = −19"],
            ["8", "(a)", "d = 4"],
            ["8", "(b)", "u₁₀ = 39"],
            ["8", "(c)", "S₁₀ = 210"],
            ["9", "(a)", "n = 17"],
            ["9", "(b)", "924 sticks"],
            ["10", "(a)", "d = 6"],
            ["10", "(b)", "S₂₀ = 5940"],
            ["10", "(c)", "≈ 9.43% error"],
            ["11", "(a)", "€8450, €8400"],
            ["11", "(b)", "uₙ=8000+450(n−1); uₙ=8000(1.05)ⁿ⁻¹"],
            ["11", "(c)", "6 years"],
            ["11", "(d)", "Barbara ≈€172 628.51 > Antonio €167 250"],
            ["12", "(a)", "d = 1.2"],
            ["12", "(b)", "u₃₀ = 35.1"],
            ["12", "(c)", "S₃₀ = 531"],
            ["13", "(a)", "d = 10, u₄ = 35 m"],
            ["13", "(b)", "u₁₅ = 145 m"],
            ["13", "(c)", "S₁₅ = 1.125 km"],
            ["13", "(d)", "18 700 people"],
            ["13", "(e)", "≈ 270 936 people"],
          ]}
        />

        {/* Footer nav */}
        <PaperFooterNav paperLabel="Sequences and Series — Review Paper 2" />
      </div>
    </main>
  );
}
