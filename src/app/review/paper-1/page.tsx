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
  Note,
  SummaryTable,
  StickyPaperNav,
  PaperFooterNav,
} from "@/components/review/PaperKit";

export const metadata: Metadata = {
  title: "Arithmetic Sequence and Series — Review Paper 1",
  description:
    "IB-style review paper on arithmetic and geometric sequences and series, with a clean exercise paper and a full worked answer sheet.",
};

// ─── Paper-specific helper ─────────────────────────────────────────────────────

function PendulumDiagram() {
  return (
    <div className="my-4 flex justify-center">
      <svg viewBox="0 0 400 190" className="w-full max-w-md border border-slate-200 rounded-xl bg-white shadow-sm" aria-label="Pendulum swing diagram">
        {/* Pivot */}
        <circle cx="200" cy="18" r="4" fill="#1a365d" />
        <line x1="180" y1="18" x2="220" y2="18" stroke="#1a365d" strokeWidth={2} />

        {/* Initial (release) position — dashed */}
        <line x1="200" y1="18" x2="90" y2="150" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5,4" />
        <circle cx="90" cy="150" r="9" fill="#94a3b8" />
        <text x="90" y="172" textAnchor="middle" fontSize={11} fill="#64748b">Initial position</text>
        <text x="90" y="185" textAnchor="middle" fontSize={9} fill="#94a3b8" fontStyle="italic">(release point)</text>

        {/* Extreme (recording start) position — solid */}
        <line x1="200" y1="18" x2="320" y2="150" stroke="#7e22ce" strokeWidth={2} />
        <circle cx="320" cy="150" r="9" fill="#7e22ce" />
        <text x="320" y="172" textAnchor="middle" fontSize={11} fill="#7e22ce" fontWeight="bold">Extreme position</text>
        <text x="320" y="185" textAnchor="middle" fontSize={9} fill="#7e22ce" fontStyle="italic">(recording starts here)</text>

        {/* Swing arc */}
        <path d="M 90 150 A 132 132 0 0 0 320 150" fill="none" stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="3,3" />
      </svg>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ReviewPaper1() {
  return (
    <AnswerRevealProvider>
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Arithmetic Sequence and Series</h1>
            <p className="text-purple-300 text-xl font-medium mb-4 italic">Review Paper 1 — Exercise &amp; Answer Sheet</p>
            <div className="bg-white/10 rounded-xl px-5 py-3 inline-block mb-6">
              <p className="text-sm font-bold text-white">
                3 Questions &nbsp;|&nbsp; 25 Marks &nbsp;|&nbsp; Arithmetic &amp; Geometric Sequences, Series, Simple Interest
              </p>
              <p className="text-xs text-white/70 italic mt-0.5">
                Attempt each part, then tap Show Answer to check your work against the worked solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <PrintButton />
              <ExportPdfButton />
              <span className="text-xs text-white/40">25 marks · 3 questions · ~35 min</span>
            </div>
          </div>
        </div>

        {/* Sticky navigator */}
        <StickyPaperNav />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* ══════════════════ QUESTIONS & ANSWERS ══════════════════ */}
          <section id="exercise" className="scroll-mt-28">
            <PartHeader variant="exercise" label="Exercise Paper" note="Attempt every part, then tap Show Answer to reveal the worked solution" />

            <QuestionBanner n={1} marks={15} />
            <ContextText>
              Daina makes pendulums to sell at a market. She plans to make 10 pendulums on the first day
              and, on each subsequent day, make 6 more than she did the day before.
            </ContextText>

            <PartBlock letter="a" marks={3}>
              Calculate the number of pendulums she would make on the 12th day.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q1a" />
            <AnswerPart id="ans-q1a" letter="a" marks={3} restate="12th day pendulum count">
              <p className="text-sm text-slate-500 mb-2">
                Arithmetic sequence with first term <InlineMath math="u_1 = 10" /> and common difference{" "}
                <InlineMath math="d = 6" />.
              </p>
              <AnswerStep>
                <BlockMath math="u_{12} = u_1 + (12-1)d = 10 + (11)(6) = 10 + 66 = 76" />
              </AnswerStep>
              <FinalAnswer>Answer: 76 pendulums</FinalAnswer>
            </AnswerPart>

            <ContextText>
              She plans to make pendulums for a total of 15 days in preparation for going to the market.
            </ContextText>
            <PartBlock letter="b" marks={2}>
              Calculate the total number of pendulums she would have available at the market.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q1b" />
            <AnswerPart id="ans-q1b" letter="b" marks={2} restate="Total over 15 days">
              <AnswerStep>
                <BlockMath math="S_n = \frac{n}{2}\left(2u_1 + (n-1)d\right)" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="S_{15} = \frac{15}{2}\left(2(10) + (15-1)(6)\right) = 7.5\left(20 + 84\right) = 7.5(104)" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="S_{15} = 780" />
              </AnswerStep>
              <FinalAnswer>Answer: 780 pendulums</FinalAnswer>
            </AnswerPart>

            <ContextText>
              Daina would like to have at least 1000 pendulums available to sell at the market and
              therefore decides to increase her production. She still plans to make 10 pendulums on the
              first day, but on each subsequent day, she will make <InlineMath math="x" /> more than she
              did the day before.
            </ContextText>
            <PartBlock letter="c" marks={3}>
              Given that she will still make pendulums for a total of 15 days, calculate the minimum
              integer value of <InlineMath math="x" /> required for her to reach her target.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q1c" />
            <AnswerPart id="ans-q1c" letter="c" marks={3} restate="Minimum integer x">
              <AnswerStep>
                <BlockMath math="\frac{15}{2}\left(2(10) + (15-1)x\right) \geq 1000" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="7.5(20 + 14x) \geq 1000" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="20 + 14x \geq \frac{1000}{7.5} = 133.\overline{3}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="14x \geq 113.\overline{3}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="x \geq 8.095..." />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">
                Since <InlineMath math="x" /> must be an integer satisfying <InlineMath math="x \ge 8.095" />:
              </p>
              <AnswerStep>
                <BlockMath math="\boxed{x = 9}" />
              </AnswerStep>
              <FinalAnswer>Answer: x = 9</FinalAnswer>
              <Note>
                The precise threshold is <InlineMath math="x \approx 8.095" />, which rounds up to the same
                minimum integer, <InlineMath math="x = 9" />.
              </Note>
            </AnswerPart>

            <ContextText>
              Daina tests one of her pendulums. She releases the ball at the end of the pendulum to swing
              freely. The point at which she releases it is shown as the initial position on the left side
              of the diagram below. Daina begins recording the distances travelled by the ball{" "}
              <strong>after</strong> it has reached the extreme position, represented by the right-hand
              side of the diagram.
            </ContextText>
            <PendulumDiagram />
            <ContextText>
              On each successive swing, the distance that the ball travelled was 95% of its previous
              distance. During the first swing that Daina recorded, the ball travelled a distance of{" "}
              <InlineMath math="17.1\text{ cm}" />. During the second swing that she recorded, it travelled
              a distance of <InlineMath math="16.245\text{ cm}" />.
            </ContextText>

            <PartBlock letter="d" marks={3}>
              Calculate the distance that the ball travelled during the 5th recorded swing.
            </PartBlock>
            <WorkSpace lines={4} answerId="ans-q1d" />
            <AnswerPart id="ans-q1d" letter="d" marks={3} restate="5th recorded swing">
              <p className="text-sm text-slate-500 mb-2">
                On each successive swing, the ball travels 95% of its previous distance — a geometric
                sequence with <InlineMath math="u_1 = 17.1" /> and common ratio <InlineMath math="r = 0.95" />.
                <br />
                <span className="text-xs text-slate-400 italic">
                  Check: <InlineMath math="17.1 \times 0.95 = 16.245" /> ✓ (matches the given second swing)
                </span>
              </p>
              <AnswerStep>
                <BlockMath math="u_5 = u_1 r^{4} = 17.1 \times (0.95)^4" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="u_2 = 16.245" />
                <BlockMath math="u_3 = 16.245 \times 0.95 = 15.43275" />
                <BlockMath math="u_4 = 15.43275 \times 0.95 = 14.6611125" />
                <BlockMath math="u_5 = 14.6611125 \times 0.95 = 13.928\text{ cm (3 s.f.)}" />
              </AnswerStep>
              <FinalAnswer>Answer: u₅ ≈ 13.9 cm</FinalAnswer>
            </AnswerPart>

            <PartBlock letter="e" marks={2}>
              Calculate the total distance that the ball travelled during the first 16 recorded swings.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q1e" />
            <AnswerPart id="ans-q1e" letter="e" marks={2} restate="Total of first 16 swings">
              <AnswerStep>
                <BlockMath math="S_n = \frac{u_1\left(1 - r^n\right)}{1-r}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="S_{16} = \frac{17.1\left(1 - 0.95^{16}\right)}{1 - 0.95} = \frac{17.1\left(1 - 0.4401\right)}{0.05}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="S_{16} = \frac{17.1(0.5599)}{0.05} \approx \frac{9.574}{0.05}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="S_{16} \approx 191.5\text{ cm (4 s.f.)}" />
              </AnswerStep>
              <FinalAnswer>Answer: S₁₆ ≈ 191 cm</FinalAnswer>
            </AnswerPart>

            <PartBlock letter="f" marks={2}>
              Calculate the distance that the ball travelled before Daina started recording.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q1f" />
            <AnswerPart id="ans-q1f" letter="f" marks={2} restate="Distance before recording began">
              <p className="text-sm text-slate-600 mb-2">
                The recording starts at the extreme position, i.e. after the first &ldquo;unrecorded&rdquo;
                swing from the initial release position to the extreme position. Since{" "}
                <InlineMath math="u_1 = 17.1" /> is the first recorded swing, and each swing is 0.95 times
                the previous one, the swing immediately before <InlineMath math="u_1" /> (call it{" "}
                <InlineMath math="u_0" />) satisfies:
              </p>
              <AnswerStep>
                <BlockMath math="u_1 = u_0 \times r \quad \Rightarrow \quad u_0 = \frac{u_1}{r} = \frac{17.1}{0.95}" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="u_0 = 18\text{ cm}" />
              </AnswerStep>
              <FinalAnswer>Answer: 18 cm</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={2} marks={5} />
            <ContextText>
              On 1 January in a particular year, Anton invests $18 000 in a new bank account. The account
              earns 4% simple interest, on the original $18 000, at the start of each subsequent year.
              The amounts in the account at the start of each year form an arithmetic sequence.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Find the common difference of this sequence.
            </PartBlock>
            <WorkSpace lines={2} answerId="ans-q2a" />
            <AnswerPart id="ans-q2a" letter="a" marks={2} restate="Common difference">
              <p className="text-sm text-slate-500 mb-2">Simple interest each year is a fixed amount:</p>
              <AnswerStep>
                <BlockMath math="d = 4\% \times 18\,000 = 0.04 \times 18\,000 = 720" />
              </AnswerStep>
              <FinalAnswer>Answer: d = $720</FinalAnswer>
            </AnswerPart>

            <ContextText>
              After <InlineMath math="k" /> complete years, the amount in Anton&rsquo;s account will be
              greater than $32 000 for the first time.
            </ContextText>
            <PartBlock letter="b" marks={3}>
              Find the value of <InlineMath math="k" />.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q2b" />
            <AnswerPart id="ans-q2b" letter="b" marks={3} restate="Value of k">
              <p className="text-sm text-slate-500 mb-2">Amount after k complete years:</p>
              <AnswerStep>
                <BlockMath math="u_{k+1} = 18\,000 + 720k > 32\,000" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="720k > 14\,000" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="k > 19.44" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">Since k must be a whole number of complete years:</p>
              <AnswerStep>
                <BlockMath math="\boxed{k = 20}" />
              </AnswerStep>
              <FinalAnswer>Answer: k = 20</FinalAnswer>
            </AnswerPart>

            <QuestionBanner n={3} marks={5} />
            <ContextText>
              On 1 January in a particular year, Eva invests $25 000 in a new bank account. The account
              earns 5% simple interest, on the original $25 000, at the start of each subsequent year.
              The amounts in the account at the start of each year form an arithmetic sequence.
            </ContextText>
            <PartBlock letter="a" marks={2}>
              Find the common difference of this sequence.
            </PartBlock>
            <WorkSpace lines={2} answerId="ans-q3a" />
            <AnswerPart id="ans-q3a" letter="a" marks={2} restate="Common difference">
              <AnswerStep>
                <BlockMath math="d = 5\% \times 25\,000 = 0.05 \times 25\,000 = 1250" />
              </AnswerStep>
              <FinalAnswer>Answer: d = $1250</FinalAnswer>
            </AnswerPart>

            <ContextText>
              After <InlineMath math="k" /> complete years, the amount in Eva&rsquo;s account will be
              greater than $44 000 for the first time.
            </ContextText>
            <PartBlock letter="b" marks={3}>
              Find the value of <InlineMath math="k" />.
            </PartBlock>
            <WorkSpace lines={3} answerId="ans-q3b" />
            <AnswerPart id="ans-q3b" letter="b" marks={3} restate="Value of k">
              <AnswerStep>
                <BlockMath math="25\,000 + 1250k > 44\,000" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="1250k > 19\,000" />
              </AnswerStep>
              <AnswerStep>
                <BlockMath math="k > 15.2" />
              </AnswerStep>
              <p className="text-sm text-slate-600 mb-2">Since k must be a whole number of complete years:</p>
              <AnswerStep>
                <BlockMath math="\boxed{k = 16}" />
              </AnswerStep>
              <FinalAnswer>Answer: k = 16</FinalAnswer>
            </AnswerPart>
          </section>

          {/* ══════════════════ SUMMARY TABLE ══════════════════ */}
          <SummaryTable
            rows={[
              ["1", "(a)", "76 pendulums"],
              ["1", "(b)", "780 pendulums"],
              ["1", "(c)", "x = 9"],
              ["1", "(d)", "≈ 13.9 cm"],
              ["1", "(e)", "≈ 191 cm"],
              ["1", "(f)", "18 cm"],
              ["2", "(a)", "d = $720"],
              ["2", "(b)", "k = 20"],
              ["3", "(a)", "d = $1250"],
              ["3", "(b)", "k = 16"],
            ]}
          />

          {/* Footer nav */}
          <PaperFooterNav paperLabel="Arithmetic Sequence and Series — Review Paper 1" />
        </div>
      </main>
    </AnswerRevealProvider>
  );
}
