"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { InlineMath, BlockMath } from "@/components/ui/Math";

// ─── Types ────────────────────────────────────────────────────────────────────

type Problem = {
  id: number;
  question: string /* plain text description */;
  /** KaTeX math string for the main expression, if any */
  math?: string;
  /** Sub-parts or additional context */
  parts?: { label: string; math: string }[];
  /** Optional visual table embedded in the problem */
  tableData?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  /** Optional hint shown on demand before answering */
  hint?: string;
  /** The model answer — displayed only after key unlock */
  answer: string;
  /** KaTeX math for the answer, if any */
  answerMath?: string;
  /** Difficulty label */
  difficulty: "basic" | "standard" | "challenge";
};

type PracticeSet = {
  id: string;
  topicNumber: number;
  title: string;
  tagline: string;
  /**
   * Permanent reveal key for this topic — hard-to-guess, stored in source.
   * Students must finish all problems before the key is shown to them.
   */
  revealKey: string;
  problems: Problem[];
};

// ─── Practice Data ────────────────────────────────────────────────────────────

const PRACTICE_DATA: Record<string, PracticeSet> = {
  "1": {
    id: "1",
    topicNumber: 1,
    title: "Laws of Indices",
    tagline: "Apply index laws to simplify, evaluate, and solve equations with powers.",
    revealKey: "7XK2QM9PNR",
    problems: [
      {
        id: 1,
        question: "Simplify, giving your answer as a single power of x.",
        math: "x^3 \\cdot x^5",
        answer: "x⁸",
        answerMath: "x^8",
        difficulty: "basic",
      },
      {
        id: 2,
        question: "Evaluate without a calculator.",
        math: "16^{3/4}",
        hint: "Write 16 = 2⁴ first, or use the rule aᵐ/ⁿ = (ⁿ√a)ᵐ.",
        answer: "8",
        answerMath: "(\\sqrt[4]{16})^3 = 2^3 = 8",
        difficulty: "basic",
      },
      {
        id: 3,
        question: "Expand and simplify.",
        math: "(2x^3)^4",
        answer: "16x¹²",
        answerMath: "16x^{12}",
        difficulty: "standard",
      },
      {
        id: 4,
        question: "Solve for x.",
        math: "2^{x+1} = 32",
        hint: "Write 32 as a power of 2, then equate exponents.",
        answer: "x = 4",
        answerMath: "2^{x+1} = 2^5 \\Rightarrow x+1 = 5 \\Rightarrow x = 4",
        difficulty: "standard",
      },
      {
        id: 5,
        question: "Simplify, giving your answer in the form xⁿ.",
        math: "x^{1/2} \\cdot x^{1/3}",
        answer: "x^(5/6)",
        answerMath: "x^{5/6}",
        difficulty: "standard",
      },
      {
        id: 6,
        question: "Simplify, leaving your answer with positive indices only.",
        math: "\\frac{(5a^3b^{-2})^2}{25a^5 b^{-4}}",
        hint: "Expand the numerator first using the power-of-a-product law.",
        answer: "a",
        answerMath: "\\frac{25a^6 b^{-4}}{25a^5 b^{-4}} = a",
        difficulty: "standard",
      },
      {
        id: 7,
        question: "Simplify, writing with positive indices only.",
        math: "\\frac{(3x^2y)^2}{9x^3y^{-1}}",
        answer: "xy³",
        answerMath: "xy^3",
        difficulty: "challenge",
      },
      {
        id: 8,
        question: "Solve for x.",
        math: "9^x = 3^{x+4}",
        hint: "Rewrite 9 as 3², so both sides are powers of 3.",
        answer: "x = 4",
        answerMath: "3^{2x} = 3^{x+4} \\Rightarrow 2x = x+4 \\Rightarrow x = 4",
        difficulty: "challenge",
      },
      {
        id: 9,
        question: "Express each entry as a single power of 2. Write your answers as 2^k, stating the value of k in each case.",
        tableData: {
          caption: "Complete the table",
          headers: ["Expression", "Single power of 2 (your answer)"],
          rows: [
            ["8 × 4", ""],
            ["32 ÷ 4", ""],
            ["(2²)³", ""],
            ["1 ÷ 8", ""],
          ],
        },
        answer: "8×4 = 2⁵; 32÷4 = 2³; (2²)³ = 2⁶; 1÷8 = 2⁻³",
        answerMath: "2^5,\\; 2^3,\\; 2^6,\\; 2^{-3}",
        difficulty: "challenge",
      },
    ],
  },
  "2": {
    id: "2",
    topicNumber: 2,
    title: "Surds",
    tagline: "Simplify, expand, rationalise, and solve equations involving surds.",
    revealKey: "B4NV3RT6WZ",
    problems: [
      {
        id: 1,
        question: "Simplify the surd fully.",
        math: "\\sqrt{75}",
        answer: "5√3",
        answerMath: "5\\sqrt{3}",
        difficulty: "basic",
      },
      {
        id: 2,
        question: "Simplify the expression.",
        math: "\\sqrt{12} + \\sqrt{27}",
        answer: "5√3",
        answerMath: "2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}",
        difficulty: "basic",
      },
      {
        id: 3,
        question: "Expand and simplify.",
        math: "(2 + \\sqrt{3})(2 - \\sqrt{3})",
        hint: "This is a difference-of-squares pattern: (a+b)(a−b) = a²−b².",
        answer: "1",
        answerMath: "4 - 3 = 1",
        difficulty: "standard",
      },
      {
        id: 4,
        question: "Rationalise the denominator. Give your answer in simplest form.",
        math: "\\dfrac{6}{\\sqrt{3}}",
        answer: "2√3",
        answerMath: "\\dfrac{6\\sqrt{3}}{3} = 2\\sqrt{3}",
        difficulty: "standard",
      },
      {
        id: 5,
        question: "Expand and simplify, giving your answer in the form a + b√2.",
        math: "(3 + \\sqrt{2})^2",
        answer: "11 + 6√2",
        answerMath: "9 + 6\\sqrt{2} + 2 = 11 + 6\\sqrt{2}",
        difficulty: "standard",
      },
      {
        id: 6,
        question: "Rationalise the denominator. Give your answer in the form a + b√3.",
        math: "\\dfrac{10}{2 - \\sqrt{3}}",
        hint: "Multiply numerator and denominator by the conjugate (2 + √3).",
        answer: "20 + 10√3",
        answerMath: "\\dfrac{10(2+\\sqrt{3})}{4-3} = 20 + 10\\sqrt{3}",
        difficulty: "standard",
      },
      {
        id: 7,
        question: "Solve for x. Give an exact answer.",
        math: "\\sqrt{2x + 1} = 3",
        answer: "x = 4",
        answerMath: "2x + 1 = 9 \\Rightarrow x = 4",
        difficulty: "standard",
      },
      {
        id: 8,
        question: "Show that the following equation is true. Show all working.",
        math: "(\\sqrt{5}+\\sqrt{2})^2 + (\\sqrt{5}-\\sqrt{2})^2 = 14",
        hint: "Expand each bracket separately using (a±b)² = a² ± 2ab + b².",
        answer: "Both brackets expand to 7 ± 2√10, which cancel when summed: (7+2√10)+(7−2√10) = 14 ✓",
        answerMath: "(7+2\\sqrt{10}) + (7-2\\sqrt{10}) = 14",
        difficulty: "challenge",
      },
      {
        id: 9,
        question: "Let p = 3 + √5 and q = 3 − √5. Answer all three parts.",
        parts: [
          { label: "(a)", math: "\\text{Find } p + q" },
          { label: "(b)", math: "\\text{Find } pq" },
          { label: "(c)", math: "\\text{Show that } \\dfrac{1}{p} + \\dfrac{1}{q} = \\dfrac{3}{2}" },
        ],
        hint: "For part (c), write 1/p + 1/q as a single fraction using (p+q) and pq.",
        answer: "(a) 6   (b) 4   (c) (p+q)/pq = 6/4 = 3/2 ✓",
        answerMath: "\\text{(a)}\ \ p+q=6 \\quad \\text{(b)}\ \ pq=4 \\quad \\text{(c)}\ \ \\frac{p+q}{pq}=\\frac{6}{4}=\\frac{3}{2}",
        difficulty: "challenge",
      },
      {
        id: 10,
        question: "Simplify the expression fully.",
        math: "\\sqrt{50} - 2\\sqrt{8}",
        answer: "√2",
        answerMath: "5\\sqrt{2} - 4\\sqrt{2} = \\sqrt{2}",
        difficulty: "basic",
      },
      {
        id: 11,
        question: "Rationalise the denominator. Give your answer in simplest form.",
        math: "\\dfrac{4}{5 - \\sqrt{7}}",
        answer: "2(5+√7)/9",
        answerMath: "\\dfrac{4(5+\\sqrt{7})}{25-7} = \\dfrac{2(5+\\sqrt{7})}{9}",
        difficulty: "basic",
      },
      {
        id: 12,
        question: "Simplify the cube root fully.",
        math: "\\sqrt[3]{54}",
        answer: "3∛2",
        answerMath: "\\sqrt[3]{27 \\times 2} = 3\\sqrt[3]{2}",
        difficulty: "basic",
      },
      {
        id: 13,
        question: "Rationalise the denominator.",
        math: "\\dfrac{1}{3 - \\sqrt{2}}",
        answer: "(3+√2)/7",
        answerMath: "\\dfrac{3+\\sqrt{2}}{9-2} = \\dfrac{3+\\sqrt{2}}{7}",
        difficulty: "standard",
      },
      {
        id: 14,
        question: "Expand and simplify. Your answer should be in the form a + b√3.",
        math: "(2\\sqrt{3} + \\sqrt{12})(\\sqrt{3} - 1)",
        hint: "First simplify √12 = 2√3, then expand the product.",
        answer: "12 − 4√3",
        answerMath: "4\\sqrt{3}(\\sqrt{3}-1) = 12 - 4\\sqrt{3}",
        difficulty: "standard",
      },
      {
        id: 15,
        question: "Rationalise the denominator using the cube difference identity a³ − b³ = (a−b)(a²+ab+b²).",
        math: "\\dfrac{1}{\\sqrt[3]{2} - 1}",
        hint: "Let a = ∛2 and b = 1. Multiply numerator and denominator by (∛4 + ∛2 + 1).",
        answer: "∛4 + ∛2 + 1",
        answerMath: "\\sqrt[3]{4} + \\sqrt[3]{2} + 1",
        difficulty: "standard",
      },
      {
        id: 16,
        question: "Simplify. Assume x > 0.",
        math: "\\sqrt[5]{x^3} \\cdot \\sqrt[5]{x^2}",
        answer: "x",
        answerMath: "\\sqrt[5]{x^{3+2}} = \\sqrt[5]{x^5} = x",
        difficulty: "standard",
      },
      {
        id: 17,
        question: "Rationalise the denominator. Write your answer in terms of a and b, where a² ≠ b.",
        math: "\\dfrac{1}{a - \\sqrt{b}}",
        answer: "(a + √b)/(a² − b)",
        answerMath: "\\dfrac{a + \\sqrt{b}}{a^2 - b}",
        difficulty: "challenge",
      },
      {
        id: 18,
        question: "Rationalise the denominator. Write as a single fraction in simplest form.",
        math: "\\dfrac{1}{\\sqrt[3]{3} - 2}",
        hint: "Rewrite 2 = ∛8. Then apply the cube difference identity with a = ∛3 and b = ∛8.",
        answer: "−(∛9 + 2∛3 + 4)/5",
        answerMath: "-\\dfrac{\\sqrt[3]{9} + 2\\sqrt[3]{3} + 4}{5}",
        difficulty: "challenge",
      },
      {
        id: 19,
        question: "Write the expression with a rational denominator. Assume x > 0.",
        math: "\\dfrac{3}{\\sqrt[4]{x^3}}",
        hint: "Multiply numerator and denominator by ⁴√x so that the denominator becomes ⁴√(x⁴) = x.",
        answer: "3⁴√x / x",
        answerMath: "\\dfrac{3\\sqrt[4]{x}}{x}",
        difficulty: "challenge",
      },
    ],
  },
  "3": {
    id: "3",
    topicNumber: 3,
    title: "Quadratic Equations",
    tagline: "Solve and analyse quadratics using multiple methods at IB AA standard.",
    revealKey: "P8WZ5LJ2TK",
    problems: [
      {
        id: 1,
        question: "Solve by factorising.",
        math: "x^2 - 7x + 12 = 0",
        answer: "x = 3 or x = 4",
        answerMath: "(x-3)(x-4)=0 \\Rightarrow x=3 \\text{ or } x=4",
        difficulty: "basic",
      },
      {
        id: 2,
        question: "Solve by factorising.",
        math: "2x^2 - x - 3 = 0",
        answer: "x = 3/2 or x = −1",
        answerMath: "(2x-3)(x+1)=0 \\Rightarrow x=\\tfrac{3}{2} \\text{ or } x=-1",
        difficulty: "standard",
      },
      {
        id: 3,
        question: "Write in completed-square form (x + p)² + q. State the vertex of the parabola.",
        math: "x^2 + 6x - 3",
        hint: "Complete the square: halve the coefficient of x, square it, then adjust the constant.",
        answer: "(x+3)² − 12, vertex at (−3, −12)",
        answerMath: "(x+3)^2 - 12, \\text{ vertex } (-3,\\,-12)",
        difficulty: "standard",
      },
      {
        id: 4,
        question: "Solve using the quadratic formula. Leave your answer in exact surd form.",
        math: "x^2 - 6x + 4 = 0",
        answer: "x = 3 ± √5",
        answerMath: "x = \\dfrac{6 \\pm \\sqrt{36-16}}{2} = 3 \\pm \\sqrt{5}",
        difficulty: "standard",
      },
      {
        id: 5,
        question: "Find the discriminant and state the nature and number of roots.",
        math: "2x^2 + 3x + 5 = 0",
        answer: "Δ = −31 < 0, so no real roots",
        answerMath: "\\Delta = 9 - 40 = -31 < 0 \\Rightarrow \\text{no real roots}",
        difficulty: "standard",
      },
      {
        id: 6,
        question: "The equation has two equal roots. Find the possible values of k.",
        math: "x^2 + kx + 9 = 0",
        hint: "Equal roots ⟺ discriminant = 0.",
        answer: "k = 6 or k = −6",
        answerMath: "\\Delta = k^2 - 36 = 0 \\Rightarrow k = \\pm 6",
        difficulty: "standard",
      },
      {
        id: 7,
        question: "Find the range of values of k for which the equation has two distinct real roots.",
        math: "x^2 + kx + k = 0",
        hint: "Two distinct real roots ⟺ discriminant > 0. Factorise the resulting inequality.",
        answer: "k < 0 or k > 4",
        answerMath: "\\Delta = k^2 - 4k > 0 \\Rightarrow k(k-4) > 0 \\Rightarrow k < 0 \\text{ or } k > 4",
        difficulty: "challenge",
      },
      {
        id: 8,
        question: "The curve y = x² − 5 and the line y = 2x + 3 intersect at points A and B. Find the x-coordinates of A and B.",
        hint: "Set the two expressions equal to form a quadratic, then solve.",
        answer: "x = 4 or x = −2",
        answerMath: "x^2-2x-8=0 \\Rightarrow (x-4)(x+2)=0 \\Rightarrow x=4 \\text{ or } x=-2",
        difficulty: "challenge",
      },
      {
        id: 9,
        question: "A ball's height is h = −5t² + 20t + 2 metres at time t seconds. Find the time(s) when h = 22 m.",
        hint: "Substitute h = 22, rearrange to standard form, then solve.",
        answer: "t = 2 s (repeated root — ball reaches h = 22 m exactly at its peak)",
        answerMath: "-5t^2+20t-20=0 \\Rightarrow t^2-4t+4=0 \\Rightarrow (t-2)^2=0 \\Rightarrow t=2",
        difficulty: "challenge",
      },
      {
        id: 10,
        question: "Solve by factorising.",
        math: "2x^2 - 5x - 3 = 0",
        answer: "x = 3 or x = −1/2",
        answerMath: "(2x+1)(x-3)=0 \\Rightarrow x=3 \\text{ or } x=-\\tfrac{1}{2}",
        difficulty: "standard",
      },
      {
        id: 11,
        question: "Find the discriminant and state the nature of the roots.",
        math: "x^2 + 6x + 10 = 0",
        answer: "Δ = −4 < 0, no real roots",
        answerMath: "\\Delta = 36 - 40 = -4 < 0 \\Rightarrow \\text{no real roots}",
        difficulty: "standard",
      },
      {
        id: 12,
        question: "Find the value(s) of k for which the equation has equal (repeated) roots.",
        math: "x^2 + kx + 4 = 0",
        answer: "k = 4 or k = −4",
        answerMath: "\\Delta = k^2 - 16 = 0 \\Rightarrow k = \\pm 4",
        difficulty: "standard",
      },
      {
        id: 13,
        question: "Write in completed-square form (x + p)² + q. State the coordinates of the vertex.",
        math: "x^2 - 8x + 5",
        hint: "Halve the coefficient of x, square it to complete the square, then adjust the constant.",
        answer: "(x−4)² − 11, vertex at (4, −11)",
        answerMath: "(x-4)^2 - 11, \\text{ vertex } (4,\\,-11)",
        difficulty: "standard",
      },
      {
        id: 14,
        question: "The roots of the equation are α and β. Find the value of α² + β².",
        math: "x^2 - 7x + 10 = 0",
        hint: "Use Vieta's formulae to find α+β and αβ, then apply the identity α²+β² = (α+β)² − 2αβ.",
        answer: "29",
        answerMath: "(\\alpha+\\beta)^2 - 2\\alpha\\beta = 49 - 20 = 29",
        difficulty: "standard",
      },
      {
        id: 15,
        question: "Write down a quadratic equation with integer coefficients whose roots are 3 and −4.",
        answer: "x² + x − 12 = 0",
        answerMath: "\\text{Sum} = -1,\\ \\text{Product} = -12 \\Rightarrow x^2 + x - 12 = 0",
        difficulty: "standard",
      },
      {
        id: 16,
        question: "Solve, giving your answers in the form a + bi where a, b ∈ ℝ.",
        math: "3x^2 + 4x + 8 = 0",
        hint: "Δ < 0, so write √(negative) = i√(positive) to express the complex roots.",
        answer: "x = (−2 ± 2i√5)/3",
        answerMath: "x = \\dfrac{-4 \\pm \\sqrt{16-96}}{6} = \\dfrac{-2 \\pm 2i\\sqrt{5}}{3}",
        difficulty: "challenge",
      },
      {
        id: 17,
        question: "Find the range of values of k for which the equation has real roots.",
        math: "x^2 + kx + 9 = 0",
        answer: "k ≤ −6 or k ≥ 6",
        answerMath: "\\Delta = k^2 - 36 \\geq 0 \\Rightarrow k \\leq -6 \\text{ or } k \\geq 6",
        difficulty: "standard",
      },
      {
        id: 18,
        question: "Write down a quadratic equation with integer coefficients whose roots have sum 6 and product 8.",
        answer: "x² − 6x + 8 = 0",
        answerMath: "x^2 - 6x + 8 = 0",
        difficulty: "standard",
      },
      {
        id: 19,
        question: "Find the range of values of k for which the equation has two distinct real roots.",
        math: "x^2 + (k-1)x + k = 0",
        hint: "Require Δ > 0. Expand (k−1)² − 4k > 0 and solve the resulting quadratic inequality.",
        answer: "k < 3 − 2√2 or k > 3 + 2√2",
        answerMath: "k^2 - 6k + 1 > 0 \\Rightarrow k < 3-2\\sqrt{2} \\text{ or } k > 3+2\\sqrt{2}",
        difficulty: "challenge",
      },
      {
        id: 20,
        question: "The roots of x² − 4x + 3 = 0 are α and β. Find a quadratic equation with integer coefficients whose roots are α² and β².",
        hint: "Use Vieta's on the original equation to find α+β and αβ. Then compute α²+β² = (α+β)²−2αβ and α²β² = (αβ)².",
        answer: "x² − 10x + 9 = 0",
        answerMath: "\\alpha^2+\\beta^2=10,\\ (\\alpha\\beta)^2=9 \\Rightarrow x^2 - 10x + 9 = 0",
        difficulty: "challenge",
      },
      {
        id: 21,
        question: "Solve by completing the square. Give exact answers in surd form.",
        math: "x^2 + 10x + 7 = 0",
        answer: "x = −5 ± 3√2",
        answerMath: "(x+5)^2 = 18 \\Rightarrow x = -5 \\pm \\sqrt{18} = -5 \\pm 3\\sqrt{2}",
        difficulty: "challenge",
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
      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${DIFFICULTY_COLORS[level]}`}
    >
      {DIFFICULTY_LABELS[level]}
    </span>
  );
}

function ProgressBar({
  filled,
  total,
}: {
  filled: number;
  total: number;
}) {
  const pct = total === 0 ? 0 : Math.round((filled / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-aa-primary rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">
        {filled} / {total} answered
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PracticeClient({ id }: { id: string }) {
  const practice = PRACTICE_DATA[id];

  // ── State
  const [answers, setAnswers] = useState<Record<number, string>>(() =>
    Object.fromEntries(practice.problems.map((p) => [p.id, ""]))
  );
  const [isFinished, setIsFinished] = useState(false);
  const [enteredKey, setEnteredKey] = useState("");
  const [keyError, setKeyError] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // Reset state if id changes (shouldn't happen normally, but defensive)
  useEffect(() => {
    setAnswers(Object.fromEntries(practice.problems.map((p) => [p.id, ""])));
    setIsFinished(false);
    setEnteredKey("");
    setKeyError(false);
    setRevealed(false);
  }, [id, practice.problems]);

  // ── Derived state
  const filledCount = useMemo(
    () => Object.values(answers).filter((v) => v.trim().length > 0).length,
    [answers]
  );
  const allAnswered = filledCount === practice.problems.length;

  // ── Handlers
  const handleAnswer = useCallback((problemId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [problemId]: value }));
  }, []);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    // Smooth scroll to key section
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

  // ── Render
  const prevId = String(Number(id) - 1);
  const nextId = String(Number(id) + 1);
  const hasPrev = !!PRACTICE_DATA[prevId];
  const hasNext = !!PRACTICE_DATA[nextId];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-700 text-white pt-28 pb-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <nav className="text-sm text-aa-light mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/aa" className="hover:underline">
              AA Curriculum
            </Link>
            <span className="opacity-50">›</span>
            <Link href="/aa/unit-1/lesson" className="hover:underline">
              Unit 1: Algebra
            </Link>
            <span className="opacity-50">›</span>
            <span className="text-white">Practice — {practice.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider bg-aa-primary px-3 py-1 rounded">
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
          <p className="text-aa-light text-base max-w-xl mb-8">
            {practice.tagline}
          </p>

          {/* Instructions card */}
          <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-3">
              How this works
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-aa-light">
              <li>Work out each problem on paper or a calculator.</li>
              <li>Enter your final or short answer in each box below.</li>
              <li>When all {practice.problems.length} answers are filled, click <strong className="text-white">Finish Practice</strong>.</li>
              <li>You&apos;ll receive a <strong className="text-white">permanent reveal key</strong> unique to this topic — enter it to compare your answers with model solutions.</li>
              <li>Your entered answers are <strong className="text-white">erased when you leave this page</strong>, but the key works any time you return and finish.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* ── Topic navigator ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Unit 1 Practice Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(PRACTICE_DATA).map((p) => (
              <Link
                key={p.id}
                href={`/aa/unit-1/practice/${p.id}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  p.id === id
                    ? "bg-aa-primary text-white"
                    : "bg-aa-bg text-aa-text hover:bg-aa-light"
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
              revealed={revealed}
              studentAnswer={answers[problem.id] ?? ""}
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
                    className="inline-flex items-center gap-2 bg-aa-primary hover:bg-navy-700 text-white font-bold px-8 py-3 rounded-xl transition-colors text-base"
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
                    className="inline-flex items-center gap-2 bg-slate-200 text-slate-400 font-bold px-8 py-3 rounded-xl cursor-not-allowed text-base"
                  >
                    Finish Practice &amp; Get Key
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Key display */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-2">
                  Your Reveal Key
                </p>
                <p className="text-sm text-aa-light mb-4 max-w-md">
                  This is the permanent key for <strong className="text-white">{practice.title}</strong>.
                  Enter it below to reveal the model answers — it works every time you complete this practice.
                </p>
                <div className="inline-flex items-center gap-3 bg-white/10 border-2 border-aa-light rounded-xl px-6 py-4">
                  <span className="text-white text-3xl font-mono font-extrabold tracking-[0.25em]">
                    {practice.revealKey}
                  </span>
                </div>
                <p className="text-xs text-white/40 mt-3">
                  ℹ Your entered answers are cleared when you leave — the key itself is permanent.
                </p>
              </div>

              {/* Key input */}
              {!revealed && (
                <div
                  id="answers-section"
                  className="bg-white border border-slate-200 rounded-2xl p-8"
                >
                  <p className="font-semibold text-navy-900 text-lg mb-1">
                    Reveal Model Answers
                  </p>
                  <p className="text-slate-500 text-sm mb-5">
                    Enter the reveal key above to compare your answers with the
                    correct solutions.
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
                          : "border-slate-200 focus:border-aa-primary"
                      }`}
                    />
                    <button
                      onClick={handleReveal}
                      className="bg-aa-primary hover:bg-navy-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
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

              {/* Answer comparison (post-reveal) */}
              {revealed && (
                <div id="answers-section" className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-ai-primary flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-navy-900">
                        Key accepted — model answers revealed!
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
          <div className="flex items-center gap-4">
            <Link
              href="/aa/unit-1/lesson"
              className="text-sm font-semibold text-aa-primary hover:underline flex items-center gap-1"
            >
              ← Back to Lesson
            </Link>
            {hasPrev && (
              <Link
                href={`/aa/unit-1/practice/${prevId}`}
                className="text-sm font-semibold text-slate-500 hover:text-navy-900 hover:underline"
              >
                ← Previous Practice
              </Link>
            )}
          </div>
          <div className="flex items-center gap-4">
            {hasNext && (
              <Link
                href={`/aa/unit-1/practice/${nextId}`}
                className="text-sm font-semibold text-aa-primary hover:underline"
              >
                Next Practice →
              </Link>
            )}
            <Link
              href="/aa"
              className="text-sm font-semibold text-slate-500 hover:text-navy-900 hover:underline"
            >
              AA Curriculum →
            </Link>
          </div>
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
  revealed,
  studentAnswer,
}: {
  problem: Problem;
  index: number;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
  revealed: boolean;
  studentAnswer: string;
}) {
  const hasAnswer = value.trim().length > 0;

  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-colors ${
        hasAnswer ? "border-aa-light" : "border-slate-200"
      } overflow-hidden`}
    >
      {/* Header */}
      <div className="flex items-start justify-between px-6 py-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-aa-primary text-white text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="font-semibold text-navy-900">{problem.question}</span>
        </div>
        <DifficultyBadge level={problem.difficulty} />
      </div>

      {/* Problem content */}
      <div className="px-6 py-5">
        {problem.math && (
          <div className="mb-5 text-center bg-slate-50 rounded-xl py-4 px-6 text-xl">
            <BlockMath math={problem.math} />
          </div>
        )}
        {problem.parts && (
          <div className="mb-5 space-y-2">
            {problem.parts.map((part) => (
              <div key={part.label} className="flex items-start gap-3">
                <span className="text-sm font-bold text-slate-500 w-7 flex-shrink-0 pt-0.5">{part.label}</span>
                <InlineMath math={part.math} />
              </div>
            ))}
          </div>
        )}

        {/* Table visual */}
        {problem.tableData && (
          <div className="mb-5 overflow-x-auto">
            {problem.tableData.caption && (
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {problem.tableData.caption}
              </p>
            )}
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {problem.tableData.headers.map((h, i) => (
                    <th
                      key={i}
                      className="bg-navy-900 text-white font-semibold px-4 py-2.5 text-left border border-navy-700"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {problem.tableData.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-2.5 border border-slate-200 ${
                          ci === 0
                            ? "font-medium text-navy-900"
                            : "text-slate-400 italic text-center select-none"
                        }`}
                      >
                        {cell || "write here"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Hint */}
        {problem.hint && (
          <details className="mb-4 group">
            <summary className="list-none cursor-pointer text-xs font-semibold text-aa-primary hover:underline w-fit select-none">
              <span className="group-open:hidden">💡 Show hint</span>
              <span className="hidden group-open:inline">💡 Hide hint</span>
            </summary>
            <div className="mt-2 bg-warn-bg border border-warn-primary rounded-lg px-4 py-3 text-sm text-navy-900">
              {problem.hint}
            </div>
          </details>
        )}

        {/* Answer input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Your answer
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            placeholder="Type your final or short answer here…"
            className={`w-full border-2 rounded-xl px-4 py-3 text-navy-900 font-medium outline-none transition-colors resize-none ${
              disabled
                ? "bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed"
                : hasAnswer
                ? "border-aa-light focus:border-aa-primary bg-aa-bg"
                : "border-slate-200 focus:border-aa-primary bg-white"
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
    <div className="bg-white rounded-2xl border-2 border-aa-light overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between px-6 py-4 bg-aa-bg border-b border-aa-light">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-aa-primary text-white text-sm font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="font-semibold text-navy-900">{problem.question}</span>
        </div>
        <DifficultyBadge level={problem.difficulty} />
      </div>

      {/* Question recap */}
      {problem.math && (
        <div className="px-6 pt-4 text-center bg-slate-50 border-b border-slate-100">
          <BlockMath math={problem.math} />
        </div>
      )}
      {problem.parts && (
        <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-100 space-y-2">
          {problem.parts.map((part) => (
            <div key={part.label} className="flex items-start gap-3">
              <span className="text-sm font-bold text-slate-500 w-7 flex-shrink-0 pt-0.5">{part.label}</span>
              <InlineMath math={part.math} />
            </div>
          ))}
        </div>
      )}
      {problem.tableData && (
        <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-100 overflow-x-auto">
          {problem.tableData.caption && (
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {problem.tableData.caption}
            </p>
          )}
          <table className="w-full text-sm border-collapse mb-2">
            <thead>
              <tr>
                {problem.tableData.headers.map((h, i) => (
                  <th key={i} className="bg-navy-900 text-white font-semibold px-4 py-2 text-left border border-navy-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {problem.tableData.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-2.5 border border-slate-200 ${ci === 0 ? "font-medium text-navy-900" : "text-slate-400 italic text-center"}`}>
                      {cell || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Comparison grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {/* Student answer */}
        <div className="px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Your Answer
          </p>
          <p className="text-navy-900 font-medium min-h-[1.5rem]">
            {studentAnswer.trim() || (
              <span className="text-slate-300 italic">No answer entered</span>
            )}
          </p>
        </div>

        {/* Model answer */}
        <div className="px-6 py-5 bg-ai-bg">
          <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-2">
            Model Answer
          </p>
          <p className="text-navy-900 font-medium mb-2">{problem.answer}</p>
          {problem.answerMath && (
            <div className="text-navy-900">
              <InlineMath math={problem.answerMath} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
