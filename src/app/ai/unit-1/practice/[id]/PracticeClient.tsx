"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { BlockMath } from "@/components/ui/Math";
import { ProblemVisual, type Visual } from "./FinanceVisuals";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProblemType =
  | "Simple interest"
  | "Compound interest"
  | "Depreciation"
  | "Currency"
  | "TVM Solver";

type Problem = {
  id: number;
  /** Short task statement shown in the card header */
  question: string;
  /** Real-world scenario, plain text */
  context: string;
  /** Sub-questions, plain text */
  parts?: { label: string; text: string }[];
  /** Optional visual (chart, passbook, GDC screen, …) */
  visual?: Visual;
  /** Optional hint shown on demand before answering */
  hint?: string;
  /** Model answer — displayed only after key unlock */
  answer: string;
  /** KaTeX worked solution — displayed only after key unlock */
  answerMath?: string;
  difficulty: "basic" | "standard" | "challenge";
  type: ProblemType;
};

type PracticeSet = {
  id: string;
  topicNumber: number;
  title: string;
  tagline: string;
  /** Permanent reveal key — hard-to-guess, stored in source */
  revealKey: string;
  problems: Problem[];
};

// ─── Practice Data ────────────────────────────────────────────────────────────

const PRACTICE_DATA: Record<string, PracticeSet> = {
  "2": {
    id: "2",
    topicNumber: 2,
    title: "Financial Mathematics",
    tagline:
      "Twelve mixed real-world problems — interest, depreciation, currency and the GDC TVM Solver.",
    revealKey: "R4NQ8ZT6WD",
    problems: [
      {
        id: 1,
        type: "Currency",
        difficulty: "basic",
        question: "Read the exchange board and convert.",
        context:
          "Sokha lives in Phnom Penh and is planning trips to Bangkok and Paris. Today's board at the money changer is shown below.",
        visual: {
          kind: "exchange-board",
          title: "Phnom Penh Exchange",
          base: "USD",
          rows: [
            { code: "KHR", name: "Cambodian riel", rate: "4,100" },
            { code: "THB", name: "Thai baht", rate: "36.4" },
            { code: "EUR", name: "Euro", rate: "0.92" },
          ],
        },
        parts: [
          { label: "(a)", text: "Convert $250 into Cambodian riel (KHR)." },
          {
            label: "(b)",
            text: "A phone is priced at 2,460,000 KHR. What is this in USD?",
          },
        ],
        answer: "(a) 1,025,000 KHR   (b) $600",
        answerMath:
          "\\begin{aligned} \\text{(a)}\\;& 250 \\times 4100 = 1\\,025\\,000 \\text{ KHR} \\\\ \\text{(b)}\\;& 2\\,460\\,000 \\div 4100 = \\$600 \\end{aligned}",
        hint: "Going from USD to another currency: multiply. Coming back to USD: divide.",
      },
      {
        id: 2,
        type: "Compound interest",
        difficulty: "standard",
        question: "Which bank gives more after 10 years, and by how much?",
        context:
          "Chenda has $10,000 to put away for 10 years. Two banks make her an offer — Bank A pays simple interest and Bank B pays compound interest, added once a year.",
        visual: {
          kind: "offers",
          caption: "$10,000 for 10 years",
          offers: [
            { name: "Bank A", rate: "6% p.a.", type: "Simple interest" },
            {
              name: "Bank B",
              rate: "5% p.a.",
              type: "Compound interest, annually",
            },
          ],
        },
        answer: "Bank B is better, by $288.95",
        answerMath:
          "\\begin{aligned} A &= 10000\\left(1+\\tfrac{6\\times10}{100}\\right) = \\$16\\,000 \\\\ B &= 10000(1.05)^{10} = \\$16\\,288.95 \\\\ B - A &= \\$288.95 \\end{aligned}",
        hint: "A higher rate is not automatically better — work out the final amount for each bank.",
      },
      {
        id: 3,
        type: "Depreciation",
        difficulty: "basic",
        question: "Find the motorbike's value after 3 years.",
        context:
          "A new motorbike costs $1,600 and loses 15% of its value each year. The chart shows its value at the end of the first two years.",
        visual: {
          kind: "bars",
          title: "Motorbike value at the end of each year",
          bars: [
            { label: "New", value: 1600 },
            { label: "Year 1", value: 1360 },
            { label: "Year 2", value: 1156 },
            { label: "Year 3", value: null },
          ],
        },
        answer: "$982.60",
        answerMath: "FV = 1600(1 - 0.15)^3 = 1600(0.85)^3 = \\$982.60",
        hint: "Each year the value is multiplied by 0.85.",
      },
      {
        id: 4,
        type: "TVM Solver",
        difficulty: "standard",
        question: "Use the Finance app to find the future value and interest.",
        context:
          "Rithy places $8,000 in a fixed deposit paying 4.8% p.a. compounded monthly for 3 years. The GDC has been set up as below.",
        visual: {
          kind: "tvm",
          title: "TVM Solver",
          fields: [
            { name: "N", value: "36" },
            { name: "I%", value: "4.8" },
            { name: "PV", value: "-8000" },
            { name: "PMT", value: "0" },
            { name: "FV", value: null },
            { name: "P/Y", value: "12" },
            { name: "C/Y", value: "12" },
          ],
        },
        parts: [
          { label: "(a)", text: "Find the future value of the deposit." },
          { label: "(b)", text: "Find the total interest earned." },
        ],
        answer: "(a) $9,236.42   (b) $1,236.42",
        answerMath:
          "\\begin{aligned} FV &= 8000\\left(1+\\tfrac{4.8}{1200}\\right)^{36} = \\$9\\,236.42 \\\\ \\text{Interest} &= 9236.42 - 8000 = \\$1\\,236.42 \\end{aligned}",
        hint: "Monthly compounding: k = 12, so N = 12 × 3 = 36.",
      },
      {
        id: 5,
        type: "Simple interest",
        difficulty: "basic",
        question: "Find the interest earned and the closing balance.",
        context:
          "Bopha opens a passbook account with $2,400 at 3.5% p.a. simple interest and leaves it untouched for 5 years.",
        visual: {
          kind: "passbook",
          bank: "Angkor Savings",
          holder: "Bopha",
          rows: [
            { label: "Opening deposit", value: "$2,400" },
            { label: "Rate (simple)", value: "3.5% p.a." },
            { label: "Term", value: "5 years" },
            { label: "Interest earned", value: "?", unknown: true },
            { label: "Closing balance", value: "?", unknown: true },
          ],
        },
        answer: "Interest $420, balance $2,820",
        answerMath:
          "I = \\dfrac{2400 \\times 3.5 \\times 5}{100} = \\$420 \\;\\Rightarrow\\; A = 2400 + 420 = \\$2\\,820",
      },
      {
        id: 6,
        type: "TVM Solver",
        difficulty: "challenge",
        question: "Find the annual interest rate.",
        context:
          "Sreyneang invests $15,000 in a fixed deposit, compounded quarterly for 6 years. At the end of the term it has grown to $19,620. The unknown is the interest rate on the GDC.",
        visual: {
          kind: "tvm",
          title: "TVM Solver",
          fields: [
            { name: "N", value: "24" },
            { name: "I%", value: null },
            { name: "PV", value: "-15000" },
            { name: "PMT", value: "0" },
            { name: "FV", value: "19620" },
            { name: "P/Y", value: "4" },
            { name: "C/Y", value: "4" },
          ],
        },
        parts: [
          {
            label: "",
            text: "Find the annual interest rate, correct to 2 significant figures.",
          },
        ],
        answer: "4.5% p.a.",
        answerMath:
          "15000\\left(1+\\tfrac{r}{400}\\right)^{24} = 19620 \\;\\Rightarrow\\; \\left(1+\\tfrac{r}{400}\\right)^{24}=1.308 \\;\\Rightarrow\\; r \\approx 4.5",
        hint: "Solve for I% on the GDC. Remember PV is negative (money paid out) and FV is positive.",
      },
      {
        id: 7,
        type: "Currency",
        difficulty: "standard",
        question: "How many baht does Dara receive?",
        context:
          "Dara changes $800 into Thai baht at an airport kiosk. The kiosk charges a 3% commission on the baht amount.",
        visual: {
          kind: "receipt",
          title: "SkyChange Kiosk",
          lines: [
            { label: "You pay", value: "USD 800" },
            { label: "Rate", value: "1 USD = 36.4 THB" },
            { label: "Commission", value: "3%" },
            { label: "You receive", value: "? THB", unknown: true },
          ],
        },
        answer: "28,246.40 THB",
        answerMath:
          "800 \\times 36.4 = 29\\,120 \\;\\Rightarrow\\; 29\\,120 \\times 0.97 = 28\\,246.40 \\text{ THB}",
        hint: "Convert first, then take 3% off — or multiply by 0.97.",
      },
      {
        id: 8,
        type: "Depreciation",
        difficulty: "standard",
        question: "Find the annual rate of depreciation.",
        context:
          "A laptop is bought new for $1,000. Two years later its value is $640. Its value fell by the same percentage each year.",
        visual: {
          kind: "timeline",
          nodes: ["$1,000", "$640"],
          stages: [{ title: "loses r% each year", detail: "for 2 years" }],
        },
        answer: "20% per year",
        answerMath:
          "1000\\left(1-\\tfrac{r}{100}\\right)^2 = 640 \\;\\Rightarrow\\; 1-\\tfrac{r}{100} = \\sqrt{0.64} = 0.8 \\;\\Rightarrow\\; r = 20",
        hint: "Write the equation, divide by 1000, then take a square root.",
      },
      {
        id: 9,
        type: "Compound interest",
        difficulty: "challenge",
        question: "Find the value after the rate change.",
        context:
          "Vanna invests $5,000. For the first 4 years it earns 3% p.a. compounded annually. The bank then moves her to a new account paying 4.2% p.a. compounded monthly for 2 more years.",
        visual: {
          kind: "timeline",
          nodes: ["$5,000", "?", "?"],
          stages: [
            { title: "3% p.a., annually", detail: "4 years" },
            { title: "4.2% p.a., monthly", detail: "2 years" },
          ],
        },
        answer: "$6,119.78",
        answerMath:
          "\\begin{aligned} V_4 &= 5000(1.03)^4 = 5627.54 \\\\ V_6 &= 5627.54\\left(1+\\tfrac{4.2}{1200}\\right)^{24} = \\$6\\,119.78 \\end{aligned}",
        hint: "The answer to stage 1 becomes the starting amount for stage 2.",
      },
      {
        id: 10,
        type: "Simple interest",
        difficulty: "standard",
        question: "Find how much Malis originally deposited.",
        context:
          "Malis deposited a sum at 5% p.a. simple interest. After 5 years the passbook balance is $3,150.",
        visual: {
          kind: "passbook",
          bank: "Mekong Credit",
          holder: "Malis",
          rows: [
            { label: "Opening deposit", value: "?", unknown: true },
            { label: "Rate (simple)", value: "5% p.a." },
            { label: "Term", value: "5 years" },
            { label: "Closing balance", value: "$3,150" },
          ],
        },
        answer: "$2,520",
        answerMath:
          "P\\left(1+\\tfrac{5\\times5}{100}\\right) = 3150 \\;\\Rightarrow\\; 1.25P = 3150 \\;\\Rightarrow\\; P = \\$2\\,520",
        hint: "The balance is 125% of the deposit.",
      },
      {
        id: 11,
        type: "Compound interest",
        difficulty: "standard",
        question: "How many whole years until the goal is reached?",
        context:
          "Piseth puts $3,000 in an account paying 5% p.a. compounded annually. He wants at least $4,000 for a new laptop and camera.",
        visual: { kind: "growth-goal" },
        answer: "6 years",
        answerMath:
          "3000(1.05)^5 = 3828.84 < 4000 \\qquad 3000(1.05)^6 = 4020.29 \\ge 4000",
        hint: "Test n = 5 and n = 6, or use the GDC to solve for N and round up.",
      },
      {
        id: 12,
        type: "Compound interest",
        difficulty: "challenge",
        question: "Find the difference in value after 6 years.",
        context:
          "Sophea has $22,000. She can spend it on a car that depreciates 14% each year, or invest it at 5% p.a. compounded quarterly. Compare the two after 6 years.",
        visual: { kind: "invest-vs-car" },
        answer: "$20,741.24 more in the investment",
        answerMath:
          "\\begin{aligned} \\text{Invest} &= 22000\\left(1+\\tfrac{5}{400}\\right)^{24} = 29\\,641.72 \\\\ \\text{Car} &= 22000(0.86)^6 = 8\\,900.48 \\\\ \\text{Difference} &= \\$20\\,741.24 \\end{aligned}",
        hint: "Two separate calculations: compound growth (k = 4) and depreciation, then subtract.",
      },
    ],
  },
};

const DIFFICULTY_COLORS: Record<Problem["difficulty"], string> = {
  basic: "bg-ai-bg text-ai-text border-ai-light",
  standard: "bg-aa-bg text-aa-text border-aa-light",
  challenge: "bg-danger-bg text-danger-text border-danger-light",
};

const DIFFICULTY_LABELS: Record<Problem["difficulty"], string> = {
  basic: "Basic",
  standard: "Standard",
  challenge: "Challenge",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function DifficultyBadge({ level }: { level: Problem["difficulty"] }) {
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border whitespace-nowrap ${DIFFICULTY_COLORS[level]}`}
    >
      {DIFFICULTY_LABELS[level]}
    </span>
  );
}

function ProgressBar({ filled, total }: { filled: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((filled / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-ai-primary rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">
        {filled} / {total} answered
      </span>
    </div>
  );
}

function ProblemBody({ problem }: { problem: Problem }) {
  return (
    <>
      <p className="text-navy-900 mb-4">{problem.context}</p>
      {problem.visual && <ProblemVisual visual={problem.visual} />}
      {problem.parts && (
        <div className="mb-5 space-y-1.5">
          {problem.parts.map((part, i) => (
            <div key={i} className="flex items-start gap-3 text-navy-900">
              {part.label && (
                <span className="text-sm font-bold text-slate-500 w-7 flex-shrink-0 pt-0.5">
                  {part.label}
                </span>
              )}
              <span>{part.text}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PracticeClient({ id }: { id: string }) {
  const practice = PRACTICE_DATA[id];

  const [answers, setAnswers] = useState<Record<number, string>>(() =>
    Object.fromEntries(practice.problems.map((p) => [p.id, ""]))
  );
  const [isFinished, setIsFinished] = useState(false);
  const [enteredKey, setEnteredKey] = useState("");
  const [keyError, setKeyError] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setAnswers(Object.fromEntries(practice.problems.map((p) => [p.id, ""])));
    setIsFinished(false);
    setEnteredKey("");
    setKeyError(false);
    setRevealed(false);
  }, [id, practice.problems]);

  const filledCount = useMemo(
    () => Object.values(answers).filter((v) => v.trim().length > 0).length,
    [answers]
  );
  const allAnswered = filledCount === practice.problems.length;

  const handleAnswer = useCallback((problemId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [problemId]: value }));
  }, []);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    setTimeout(() => {
      document.getElementById("finish-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const handleReveal = useCallback(() => {
    if (enteredKey.trim().toUpperCase() === practice.revealKey.toUpperCase()) {
      setRevealed(true);
      setKeyError(false);
      setTimeout(() => {
        document.getElementById("answers-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setKeyError(true);
    }
  }, [enteredKey, practice.revealKey]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-28 pb-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <nav className="text-sm text-ai-light mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/ai" className="hover:underline">
              AI Curriculum
            </Link>
            <span className="opacity-50">›</span>
            <Link href="/ai/unit-1/lesson" className="hover:underline">
              Unit 1: Number &amp; Algebra
            </Link>
            <span className="opacity-50">›</span>
            <span className="text-white">Practice — {practice.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider bg-ai-primary px-3 py-1 rounded">
              Unit 1
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded">
              Topic {practice.topicNumber}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-warn-primary text-navy-900 px-3 py-1 rounded">
              Practice
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            {practice.title} — Practice Problems
          </h1>
          <p className="text-ai-light text-base max-w-xl mb-8">
            {practice.tagline}
          </p>

          <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-ai-light mb-3">
              How this works
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-ai-light">
              <li>Work out each problem on paper or with your GDC.</li>
              <li>Enter your final answer in each box (money to 2 d.p. unless told otherwise).</li>
              <li>When all {practice.problems.length} answers are filled, click <strong className="text-white">Finish Practice</strong>.</li>
              <li>You&apos;ll receive a <strong className="text-white">permanent reveal key</strong> — enter it to compare your answers with worked solutions.</li>
              <li>Your entered answers are <strong className="text-white">erased when you leave this page</strong>, but the key works any time you return and finish.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* ── Topic navigator ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Unit 1 Practice Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(PRACTICE_DATA).map((p) => (
              <Link
                key={p.id}
                href={`/ai/unit-1/practice/${p.id}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  p.id === id
                    ? "bg-ai-primary text-white"
                    : "bg-ai-bg text-ai-text hover:bg-ai-light"
                }`}
              >
                {p.topicNumber}. {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-[60px] z-10 shadow-sm">
        <div className="max-w-[900px] mx-auto">
          <ProgressBar filled={filledCount} total={practice.problems.length} />
        </div>
      </div>

      {/* ── Problems ── */}
      <section className="py-12 px-6">
        <div className="max-w-[900px] mx-auto space-y-8">
          {practice.problems.map((problem, idx) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              index={idx}
              value={answers[problem.id] ?? ""}
              onChange={(v) => handleAnswer(problem.id, v)}
              disabled={isFinished}
            />
          ))}
        </div>
      </section>

      {/* ── Finish / Key section ── */}
      <section id="finish-section" className="px-6 pb-16">
        <div className="max-w-[900px] mx-auto">
          {!isFinished ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              {allAnswered ? (
                <>
                  <p className="text-navy-900 font-semibold text-lg mb-2">
                    All problems answered!
                  </p>
                  <p className="text-slate-500 text-sm mb-6">
                    Click below to finish and receive your reveal key.
                  </p>
                  <button
                    onClick={handleFinish}
                    className="inline-flex items-center gap-2 bg-ai-primary hover:bg-ai-dark text-white font-bold px-8 py-3 rounded-xl transition-colors text-base"
                  >
                    Finish Practice &amp; Get Key
                  </button>
                </>
              ) : (
                <>
                  <p className="text-slate-500 text-sm mb-3">
                    Answer all {practice.problems.length} problems to unlock the finish button.
                  </p>
                  <button
                    disabled
                    className="inline-flex items-center gap-2 bg-slate-200 text-slate-500 font-bold px-8 py-3 rounded-xl cursor-not-allowed text-base"
                  >
                    Finish Practice &amp; Get Key
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-ai-light mb-2">
                  Your Reveal Key
                </p>
                <p className="text-sm text-ai-light mb-4 max-w-md">
                  This is the permanent key for <strong className="text-white">{practice.title}</strong>.
                  Enter it below to reveal the worked solutions — it works every time you complete this practice.
                </p>
                <div className="inline-flex items-center gap-3 bg-white/10 border-2 border-ai-light rounded-xl px-6 py-4">
                  <span className="text-white text-3xl font-mono font-extrabold tracking-[0.25em]">
                    {practice.revealKey}
                  </span>
                </div>
                <p className="text-xs text-white/60 mt-3">
                  ℹ Your entered answers are cleared when you leave — the key itself is permanent.
                </p>
              </div>

              {!revealed && (
                <div id="answers-section" className="bg-white border border-slate-200 rounded-2xl p-8">
                  <p className="font-semibold text-navy-900 text-lg mb-1">
                    Reveal Worked Solutions
                  </p>
                  <p className="text-slate-500 text-sm mb-5">
                    Enter the reveal key above to compare your answers with the correct solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
                    <input
                      type="text"
                      maxLength={10}
                      value={enteredKey}
                      onChange={(e) => {
                        setEnteredKey(e.target.value.toUpperCase());
                        setKeyError(false);
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleReveal()}
                      placeholder="Enter key…"
                      className={`flex-1 border-2 rounded-xl px-4 py-2.5 font-mono font-bold text-lg uppercase tracking-[0.2em] outline-none transition-colors ${
                        keyError
                          ? "border-danger-primary bg-danger-bg text-danger-text"
                          : "border-slate-200 focus:border-ai-primary"
                      }`}
                    />
                    <button
                      onClick={handleReveal}
                      className="bg-ai-primary hover:bg-ai-dark text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
                    >
                      Unlock
                    </button>
                  </div>
                  {keyError && (
                    <p className="text-danger-primary text-sm mt-2 font-medium">
                      Incorrect key — please try again.
                    </p>
                  )}
                </div>
              )}

              {revealed && (
                <div id="answers-section" className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-ai-primary flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-navy-900">
                        Key accepted — worked solutions revealed!
                      </p>
                      <p className="text-sm text-slate-500">
                        Your answers are shown alongside the model solutions for comparison.
                      </p>
                    </div>
                  </div>

                  {practice.problems.map((problem, idx) => (
                    <AnswerCompareCard
                      key={problem.id}
                      problem={problem}
                      index={idx}
                      studentAnswer={answers[problem.id] ?? ""}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Navigation ── */}
      <div className="bg-white border-t border-slate-200 px-6 py-8">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/ai/unit-1/lesson#financial-mathematics"
            className="text-sm font-semibold text-ai-primary hover:underline"
          >
            ← Back to Lesson
          </Link>
          <Link
            href="/ai"
            className="text-sm font-semibold text-slate-500 hover:text-navy-900 hover:underline"
          >
            AI Curriculum →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Problem Card ─────────────────────────────────────────────────────────────

function ProblemCard({
  problem,
  index,
  value,
  onChange,
  disabled,
}: {
  problem: Problem;
  index: number;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  const hasAnswer = value.trim().length > 0;

  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-colors ${
        hasAnswer ? "border-ai-light" : "border-slate-200"
      } overflow-hidden`}
    >
      <div className="flex items-start justify-between gap-3 px-6 py-4 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ai-primary text-white text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {problem.type}
            </p>
            <p className="font-semibold text-navy-900">{problem.question}</p>
          </div>
        </div>
        <DifficultyBadge level={problem.difficulty} />
      </div>

      <div className="px-6 py-5">
        <ProblemBody problem={problem} />

        {problem.hint && (
          <details className="mb-4 group">
            <summary className="list-none cursor-pointer text-xs font-semibold text-ai-primary hover:underline w-fit select-none">
              <span className="group-open:hidden">💡 Show hint</span>
              <span className="hidden group-open:inline">💡 Hide hint</span>
            </summary>
            <div className="mt-2 bg-warn-bg border border-warn-primary rounded-lg px-4 py-3 text-sm text-navy-900">
              {problem.hint}
            </div>
          </details>
        )}

        <div>
          <label
            htmlFor={`answer-${problem.id}`}
            className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
          >
            Your answer
          </label>
          <input
            id={`answer-${problem.id}`}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            placeholder="Type your final answer here…"
            className={`w-full border-2 rounded-xl px-4 py-3 text-navy-900 font-medium outline-none transition-colors ${
              disabled
                ? "bg-slate-50 border-slate-100 text-slate-500 cursor-not-allowed"
                : hasAnswer
                ? "border-ai-light focus:border-ai-primary bg-ai-bg"
                : "border-slate-200 focus:border-ai-primary bg-white"
            }`}
          />
          {hasAnswer && !disabled && (
            <p className="text-xs text-ai-primary mt-1.5 font-medium">
              ✓ Answer recorded
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Answer Compare Card (post-reveal) ────────────────────────────────────────

function AnswerCompareCard({
  problem,
  index,
  studentAnswer,
}: {
  problem: Problem;
  index: number;
  studentAnswer: string;
}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-ai-light overflow-hidden">
      <div className="flex items-start justify-between gap-3 px-6 py-4 bg-ai-bg border-b border-ai-light">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ai-primary text-white text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {problem.type}
            </p>
            <p className="font-semibold text-navy-900">{problem.question}</p>
          </div>
        </div>
        <DifficultyBadge level={problem.difficulty} />
      </div>

      <details className="border-b border-slate-100 bg-slate-50 group">
        <summary className="cursor-pointer select-none px-6 py-2.5 text-xs font-semibold text-slate-500 hover:text-navy-900">
          <span className="group-open:hidden">Show question again</span>
          <span className="hidden group-open:inline">Hide question</span>
        </summary>
        <div className="px-6 pt-2 pb-4">
          <ProblemBody problem={problem} />
        </div>
      </details>

      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        <div className="px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Your Answer
          </p>
          <p className="text-navy-900 font-medium min-h-6">
            {studentAnswer.trim() || (
              <span className="text-slate-500 italic">No answer entered</span>
            )}
          </p>
        </div>
        <div className="px-6 py-5 bg-ai-bg">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Model Answer
          </p>
          <p className="text-navy-900 font-bold">{problem.answer}</p>
        </div>
      </div>

      {problem.answerMath && (
        <div className="px-6 py-4 border-t border-ai-light overflow-x-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            Working
          </p>
          <BlockMath math={problem.answerMath} />
        </div>
      )}
    </div>
  );
}
