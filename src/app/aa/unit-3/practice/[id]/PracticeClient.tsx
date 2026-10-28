"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { BlockMath } from "@/components/ui/Math";
import { PRACTICE_DATA, type Problem } from "./practiceData";

const DIFFICULTY_STYLE: Record<Problem["difficulty"], string> = {
  basic: "bg-slate-100 text-slate-700",
  standard: "bg-aa-bg text-aa-text",
  challenge: "bg-slate-800 text-white",
};

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
    <div className={`bg-white rounded-2xl border-2 overflow-hidden ${hasAnswer ? "border-aa-light" : "border-slate-200"}`}>
      <div className="flex items-start justify-between gap-3 px-6 py-4 border-b border-slate-100">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-aa-primary text-white text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <p className="font-semibold text-navy-900">{problem.question}</p>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${DIFFICULTY_STYLE[problem.difficulty]}`}>
          {problem.difficulty}
        </span>
      </div>
      <div className="px-6 py-5">
        <p className="text-slate-500 mb-4">{problem.context}</p>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1" htmlFor={`ans-${problem.id}`}>
          Your answer (with units)
        </label>
        <input
          id={`ans-${problem.id}`}
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full max-w-sm border-2 border-slate-200 focus:border-aa-primary rounded-xl px-4 py-2.5 outline-none disabled:bg-slate-50"
        />
      </div>
    </div>
  );
}

function AnswerCompareCard({ problem, index, studentAnswer }: { problem: Problem; index: number; studentAnswer: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <p className="font-semibold text-navy-900">
          {index + 1}. {problem.question}
        </p>
        <p className="text-sm text-slate-500">{problem.context}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
        <div className="bg-white px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Your answer</p>
          <p className="text-navy-900">{studentAnswer || "(blank)"}</p>
        </div>
        <div className="bg-aa-bg px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-aa-primary mb-1">Model answer</p>
          <p className="text-navy-900 font-semibold">{problem.answer}</p>
        </div>
      </div>
      {problem.answerMath && (
        <div className="px-6 py-4 overflow-x-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Working</p>
          <BlockMath math={problem.answerMath} />
        </div>
      )}
    </div>
  );
}

export default function PracticeClient({ id }: { id: string }) {
  const practice = PRACTICE_DATA[id];

  // The page keys this component on `id`, so state starts empty for every set.
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [enteredKey, setEnteredKey] = useState("");
  const [keyError, setKeyError] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const total = practice.problems.length;
  const filledCount = useMemo(
    () => practice.problems.filter((p) => (answers[p.id] ?? "").trim().length > 0).length,
    [answers, practice.problems]
  );
  const allAnswered = filledCount === total;

  const handleAnswer = useCallback((problemId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [problemId]: value }));
  }, []);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    setTimeout(() => document.getElementById("finish-section")?.scrollIntoView({ behavior: "smooth" }), 100);
  }, []);

  const handleReveal = useCallback(() => {
    if (enteredKey.trim().toUpperCase() === practice.revealKey.toUpperCase()) {
      setRevealed(true);
      setKeyError(false);
      setTimeout(() => document.getElementById("answers-section")?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      setKeyError(true);
    }
  }, [enteredKey, practice.revealKey]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-28 pb-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <nav className="text-sm text-aa-light mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/aa" className="hover:underline">AA Curriculum</Link>
            <span className="opacity-50">›</span>
            <Link href="/aa/unit-3/lesson" className="hover:underline">Unit 3: Trigonometry</Link>
            <span className="opacity-50">›</span>
            <span className="text-white">Practice: {practice.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider bg-aa-primary px-3 py-1 rounded">Unit 3</span>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/15 px-3 py-1 rounded">Topic {practice.topicNumber}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{practice.title}: Practice Problems</h1>
          <p className="text-aa-light text-base max-w-xl mb-8">{practice.tagline}</p>
          <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-3">How this works</p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-aa-light">
              <li>Work out each problem on paper or with your GDC.</li>
              <li>Enter your final answer in each box.</li>
              <li>When all {total} answers are filled, click <strong className="text-white">Finish Practice</strong>.</li>
              <li>Enter the <strong className="text-white">permanent reveal key</strong> to compare your answers with the working.</li>
              <li>Your answers are erased when you leave this page. The key works every time you finish.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Unit 3 Practice Topics</p>
          <div className="flex flex-wrap gap-2">
            {Object.values(PRACTICE_DATA).map((p) => (
              <Link
                key={p.id}
                href={`/aa/unit-3/practice/${p.id}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  p.id === id ? "bg-aa-primary text-white" : "bg-aa-bg text-aa-text hover:bg-aa-light"
                }`}
              >
                {p.topicNumber}. {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-[60px] z-10 shadow-sm">
        <div className="max-w-[900px] mx-auto">
          <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
            <span>Progress</span>
            <span>{filledCount} of {total} answered</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-aa-primary transition-all" style={{ width: `${(filledCount / total) * 100}%` }} />
          </div>
        </div>
      </div>

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

      <section id="finish-section" className="px-6 pb-16">
        <div className="max-w-[900px] mx-auto">
          {!isFinished ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-slate-500 text-sm mb-4">
                {allAnswered ? "All problems answered. Finish to receive your reveal key." : `Answer all ${total} problems to unlock the finish button.`}
              </p>
              <button
                onClick={handleFinish}
                disabled={!allAnswered}
                className="bg-aa-primary hover:bg-aa-text disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                Finish Practice &amp; Get Key
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-2">Your Reveal Key</p>
                <p className="text-sm text-aa-light mb-4 max-w-md">
                  This is the permanent key for <strong className="text-white">{practice.title}</strong>. Enter it below to see the working.
                </p>
                <div className="inline-flex items-center bg-white/10 border-2 border-aa-light rounded-xl px-6 py-4">
                  <span className="text-white text-3xl font-mono font-extrabold tracking-[0.25em]">{practice.revealKey}</span>
                </div>
              </div>

              {!revealed && (
                <div id="answers-section" className="bg-white border border-slate-200 rounded-2xl p-8">
                  <p className="font-semibold text-navy-900 text-lg mb-1">Reveal Worked Solutions</p>
                  <p className="text-slate-500 text-sm mb-5">Enter the key to compare your answers with the model answers.</p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
                    <input
                      type="text"
                      maxLength={10}
                      value={enteredKey}
                      aria-label="Reveal key"
                      onChange={(e) => {
                        setEnteredKey(e.target.value.toUpperCase());
                        setKeyError(false);
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleReveal()}
                      placeholder="Enter key"
                      className={`flex-1 border-2 rounded-xl px-4 py-2.5 font-mono font-bold text-lg uppercase tracking-[0.2em] outline-none ${
                        keyError ? "border-danger-primary bg-danger-bg text-danger-text" : "border-slate-200 focus:border-aa-primary"
                      }`}
                    />
                    <button onClick={handleReveal} className="bg-aa-primary hover:bg-aa-text text-white font-bold px-6 py-2.5 rounded-xl transition-colors">
                      Unlock
                    </button>
                  </div>
                  {keyError && <p className="text-danger-primary text-sm mt-2 font-medium">Incorrect key. Try again.</p>}
                </div>
              )}

              {revealed && (
                <div id="answers-section" className="space-y-5">
                  <p className="font-bold text-navy-900">Key accepted. Your answers are shown beside the model answers.</p>
                  {practice.problems.map((problem, idx) => (
                    <AnswerCompareCard key={problem.id} problem={problem} index={idx} studentAnswer={answers[problem.id] ?? ""} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="bg-white border-t border-slate-200 px-6 py-8">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href={`/aa/unit-3/lesson#${practice.lessonAnchor}`} className="text-sm font-semibold text-aa-primary hover:underline">
            ← Back to Lesson
          </Link>
          <Link href="/aa" className="text-sm font-semibold text-slate-500 hover:text-navy-900 hover:underline">
            AA Curriculum →
          </Link>
        </div>
      </div>
    </div>
  );
}
