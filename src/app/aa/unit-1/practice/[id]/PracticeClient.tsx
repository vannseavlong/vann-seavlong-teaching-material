"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
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
  /** When true, renders a multi-line textarea instead of a single-line input */
  longAnswer?: boolean;
  /** Optional ID for a pattern visual diagram rendered below the problem description */
  patternVisualId?: string;
};

type ExperimentContext = {
  title: string;
  /** Lines of plain text describing the experiment setup */
  setup: string[];
  /** Optional data table shown in the context box */
  table?: {
    headers: string[];
    rows: string[][];
  };
  /** When true, renders the mass-vs-heating-cycle graph below the data table */
  showMassTimeGraph?: boolean;
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
  /** Optional experiment context box rendered above the problem list */
  experimentContext?: ExperimentContext;
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

  "4": {
    id: "4",
    topicNumber: 4,
    title: "Chemistry G10 — NaHCO₃ Decomposition",
    tagline: "Analyse a thermal decomposition experiment: calculate percent yield, interpret data, and evaluate sources of experimental error.",
    revealKey: "P3NX7DCWQ1",
    experimentContext: {
      title: "Thermal Decomposition of Sodium Bicarbonate",
      setup: [
        "Balanced equation: 2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)",
        "A student heats a sample of NaHCO₃ in an open crucible until no further change in mass is observed.",
        "Molar masses used: NaHCO₃ = 84.0 g/mol  |  Na₂CO₃ = 106.0 g/mol",
      ],
      showMassTimeGraph: true,
      table: {
        headers: ["Measurement", "Recorded Value"],
        rows: [
          ["Mass of empty crucible", "20.00 g"],
          ["Mass of crucible + NaHCO₃ (before heating)", "25.00 g"],
          ["Mass of crucible + solid residue (after heating)", "23.10 g"],
          ["Theoretical yield of Na₂CO₃ (from stoichiometry)", "3.08 g"],
          ["Actual mass of solid residue (Na₂CO₃)", "3.10 g"],
        ],
      },
    },
    problems: [
      {
        id: 1,
        question:
          "Define percent yield. Write the formula, then calculate the percent yield for this experiment. Show all working and explain what the result tells you about the experiment.",
        longAnswer: true,
        difficulty: "basic",
        hint: "Percent yield = (actual yield ÷ theoretical yield) × 100%. Use the residue mass and the theoretical yield from the table.",
        answer: `Percent yield is the ratio of the actual yield to the theoretical yield, expressed as a percentage. It measures how efficiently a reaction produces the expected product compared to the stoichiometric maximum.

Formula:
  % yield = (actual yield / theoretical yield) × 100%

Calculation:
  % yield = (3.10 g / 3.08 g) × 100%
           = 100.6%

Interpretation:
A percent yield of 100.6% means the actual solid residue measured is slightly heavier than the stoichiometric prediction. A yield above 100% is physically impossible in a perfect experiment — it indicates an experimental error that has artificially increased the measured mass of the product. The most likely cause is that the product Na₂CO₃ absorbed a small amount of atmospheric moisture before weighing, or that not all NaHCO₃ fully decomposed, leaving some unreacted solid in the residue.`,
      },
      {
        id: 2,
        question:
          "Using the raw data in the table, calculate: (a) the initial mass of NaHCO₃ used, and (b) the mass of gas lost during the reaction. Identify the gas(es) that escaped and explain why they were able to escape.",
        longAnswer: true,
        difficulty: "basic",
        hint: "Subtract crucible masses to find each mass. Gas lost = (mass of crucible + NaHCO₃) − (mass of crucible + residue after heating).",
        answer: `(a) Initial mass of NaHCO₃:
  = (mass of crucible + NaHCO₃) − (mass of empty crucible)
  = 25.00 g − 20.00 g
  = 5.00 g

(b) Mass of gas lost:
  = (mass of crucible + NaHCO₃) − (mass of crucible + residue after heating)
  = 25.00 g − 23.10 g
  = 1.90 g

Gases that escaped:
The decomposition produces H₂O (water vapour) and CO₂ (carbon dioxide gas). Both products exist in the gaseous state at the high temperature of the experiment. Because the crucible is open to the atmosphere, both gases escape freely into the surroundings and are no longer part of the crucible when it is weighed — accounting for the 1.90 g mass loss.

Na₂CO₃ (sodium carbonate) remains as a stable ionic solid in the crucible and does NOT escape.`,
      },
      {
        id: 3,
        question:
          "The percent yield is 100.6%. Is a percent yield above 100% physically possible? Explain your reasoning. Then identify the single most likely experimental error that caused this result and explain how it produced a yield above 100%.",
        longAnswer: true,
        difficulty: "standard",
        hint: "A yield > 100% means the measured product mass exceeds the theoretical maximum. Think about what could ADD mass to the solid residue.",
        answer: `Physical possibility:
A percent yield above 100% is physically impossible in a perfect experiment. The theoretical yield represents the maximum mass of product obtainable from the given amount of reactant, based on conservation of mass and stoichiometry. You cannot obtain more product than the theoretical maximum.

Therefore, a yield of 100.6% indicates an experimental error that has artificially increased the measured mass of the solid residue.

Most likely experimental error:
The sample was not heated long enough to drive off all the water vapour (and possibly unreacted NaHCO₃). If heating stops too early:
• Some NaHCO₃ remains undecomposed in the crucible.
• Some water is still adsorbed onto the Na₂CO₃ product.
Both of these add extra mass to the solid residue beyond what pure dry Na₂CO₃ would weigh, making the actual yield appear greater than the theoretical yield.

(Note: Na₂CO₃ is also hygroscopic — it can re-absorb moisture from the air if left cooling in an open environment before weighing, which would similarly inflate the recorded mass.)`,
      },
      {
        id: 4,
        question:
          "From the balanced equation 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂, identify which products are responsible for the mass loss observed in an open crucible. For each product you identify, explain WHY it contributes to the mass loss. Then explain why Na₂CO₃ does NOT contribute to the mass loss.",
        longAnswer: true,
        difficulty: "standard",
        answer: `Products responsible for mass loss:
H₂O (water vapour) and CO₂ (carbon dioxide gas).

Why H₂O contributes to mass loss:
At the temperature of the experiment, water is produced as steam (gas phase). In an open crucible, this vapour escapes freely into the surrounding atmosphere. Since it leaves the system being weighed, its mass is no longer recorded — causing the crucible's mass to decrease.

Why CO₂ contributes to mass loss:
CO₂ is a gas at all temperatures in this experiment. Like water vapour, it escapes from the open crucible into the atmosphere immediately upon formation. Its mass is therefore lost from the weighed system.

Why Na₂CO₃ does NOT contribute to mass loss:
Na₂CO₃ (sodium carbonate) is an ionic solid with a very high melting point (~851 °C). At the temperatures used in this experiment, it remains entirely in the solid state inside the crucible. Because it does not evaporate or escape, its full mass is retained and measured when the crucible is re-weighed.

Summary: only volatile gaseous products (H₂O and CO₂) escape an open system, causing the observed mass loss of 1.90 g.`,
      },
      {
        id: 5,
        question:
          "Show the complete step-by-step stoichiometric calculation to determine the theoretical yield of Na₂CO₃ when 5.00 g of NaHCO₃ is fully decomposed. State all molar masses used and show every step clearly.",
        longAnswer: true,
        difficulty: "standard",
        hint: "Steps: (1) molar mass of NaHCO₃, (2) moles of NaHCO₃, (3) apply the 2 : 1 mole ratio from the equation, (4) molar mass of Na₂CO₃, (5) mass of Na₂CO₃.",
        answer: `Balanced equation: 2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂

Step 1 — Molar mass of NaHCO₃:
  M(NaHCO₃) = Na + H + C + 3×O
             = 23.0 + 1.0 + 12.0 + 3(16.0)
             = 84.0 g/mol

Step 2 — Moles of NaHCO₃:
  n(NaHCO₃) = mass / M = 5.00 / 84.0 = 0.05952 mol

Step 3 — Mole ratio (from the balanced equation):
  2 mol NaHCO₃ produces 1 mol Na₂CO₃
  ∴ n(Na₂CO₃) = 0.05952 / 2 = 0.02976 mol

Step 4 — Molar mass of Na₂CO₃:
  M(Na₂CO₃) = 2(23.0) + 12.0 + 3(16.0)
             = 46.0 + 12.0 + 48.0
             = 106.0 g/mol

Step 5 — Theoretical yield:
  mass(Na₂CO₃) = n × M = 0.02976 × 106.0 ≈ 3.15 g

Note: the value 3.08 g given in the table uses slightly different atomic mass values or rounding conventions. Always state which atomic masses you are using and show each step to make your reasoning auditable.`,
      },
      {
        id: 6,
        question:
          "A student says: 'This experiment proves that the law of conservation of mass is wrong — the crucible gets lighter after heating.' Evaluate this claim. In your answer, define what system must be considered for conservation of mass to hold, and use the data from the table to demonstrate that mass is conserved.",
        longAnswer: true,
        difficulty: "standard",
        answer: `Evaluation of the claim:
The student's claim is INCORRECT. The law of conservation of mass is not violated. The error is in how the student defines the 'system'.

What conservation of mass requires:
Conservation of mass states that in a closed system, the total mass of the reactants equals the total mass of the products — mass cannot be created or destroyed. The key requirement is a CLOSED system, where nothing enters or leaves.

Why the crucible appears to lose mass:
The crucible is an OPEN system. The gaseous products H₂O (vapour) and CO₂ escape into the surrounding atmosphere during heating. Because they leave the crucible, they are no longer included when the crucible is re-weighed. This gives the false impression that mass has disappeared.

Demonstrating conservation using the data:
  Mass of NaHCO₃ at the start       = 5.00 g
  Mass of solid residue (Na₂CO₃)    = 3.10 g
  Mass of gas lost (H₂O + CO₂)      = 1.90 g

  Total mass of products = 3.10 + 1.90 = 5.00 g ✓

When we account for ALL products — both the solid that remains and the gases that escaped — the total equals the original mass of NaHCO₃. Conservation of mass holds perfectly; we simply need to include the entire system.`,
      },
      {
        id: 7,
        question:
          "Suggest TWO specific improvements a student should make to this experiment to obtain a more accurate percent yield. For each improvement, name the technique, describe how to carry it out, and explain precisely how it reduces the experimental error.",
        longAnswer: true,
        difficulty: "challenge",
        hint: "Think about: (1) incomplete decomposition — how do you know when the reaction is truly finished? (2) the hygroscopic nature of Na₂CO₃ — what happens to its mass when exposed to air?",
        answer: `Improvement 1: Heat to constant mass

Technique: After the initial heating, allow the crucible to cool, record the mass, then heat again for a further 2–3 minutes. Repeat this cycle until two consecutive readings agree to within ±0.01 g.

How it reduces error: Stopping heating too early leaves unreacted NaHCO₃ or residual water adsorbed on the Na₂CO₃ in the crucible. Both add extra mass beyond that of pure dry Na₂CO₃, inflating the actual yield and producing a percent yield above 100%. Heating to constant mass ensures the reaction has gone to completion and all water vapour and CO₂ have been fully driven off, so the mass recorded truly represents only the Na₂CO₃ product.

---

Improvement 2: Cool in a desiccator before weighing

Technique: After heating, transfer the hot crucible immediately into a desiccator (a sealed container holding a drying agent such as silica gel or anhydrous calcium chloride) and allow it to cool to room temperature before placing it on the balance.

How it reduces error: Na₂CO₃ is hygroscopic — it readily absorbs water vapour from the air. If the crucible cools in the open laboratory, the product absorbs moisture, increasing its mass beyond that of pure anhydrous Na₂CO₃. This would make the actual yield appear greater than it should be, causing the percent yield to exceed 100%. Cooling in a desiccator prevents any moisture absorption, so the mass recorded is that of dry Na₂CO₃ alone, giving a more accurate and reliable percent yield.`,
      },
      {
        id: 8,
        question:
          "When re-checking data, a student notices the recorded mass of the empty crucible appears to have 'decreased' slightly between two consecutive measurements, before any chemicals were added. Identify the most likely reason for this apparent mass decrease, and explain how this type of error affects the reliability of experimental results.",
        longAnswer: true,
        difficulty: "basic",
        hint: "Think about what could make a balance give a different reading for the same object — consider both instrument errors and physical conditions of the crucible.",
        answer: `Most likely reason: The balance was 'zeroed' (tared) incorrectly.

If the electronic balance was not properly re-zeroed before the second measurement, or if something was resting on the balance pan when it was tared, the balance will display a value offset from the true mass — even for an unchanged object. This produces an apparent change in mass that is actually an instrument error, not a real physical change.

How this affects reliability:
This is a systematic error — it shifts all readings from that balance by the same offset amount. Any mass calculated using an incorrectly tared balance (such as the mass of NaHCO₃ or the mass of the solid residue) will carry this same offset error, making all derived quantities (including percent yield) inaccurate.

Alternative likely cause: The crucible was still hot from a previous heating. Hot objects create convection currents above the balance pan, which exert a small upward or downward force on the pan, giving an unstable or artificially low reading. Crucibles must always be cooled to room temperature (ideally in a desiccator) before being placed on the balance.

Note: The ceramic material of the crucible does NOT evaporate under normal lab conditions, and a dirty crucible would typically add mass rather than reduce it.`,
      },
      {
        id: 9,
        question:
          "A student heats the crucible containing NaHCO₃ and records the mass of the residue. Describe the procedure they should then follow to confirm that all NaHCO₃ has fully decomposed. Explain why this procedure is necessary and what a constant mass reading confirms about the reaction.",
        longAnswer: true,
        difficulty: "standard",
        hint: "What happens to the mass if the reaction is not yet complete? How do you know when it is done?",
        answer: `Correct procedure — heating to constant mass:

1. After the initial heating, transfer the crucible to a desiccator and allow it to cool completely to room temperature.
2. Weigh the cooled crucible and record the mass.
3. Return the crucible to the heat source and heat again for a further 2–3 minutes.
4. Cool again in the desiccator, then re-weigh.
5. Repeat steps 3–4 until two successive mass readings agree to within ±0.01 g.

Why this is necessary:
If the reaction is incomplete, some NaHCO₃ remains undecomposed in the crucible. On re-heating, that residual NaHCO₃ continues to break down, releasing more H₂O vapour and CO₂ — so the mass will still be decreasing. Stopping after only one heating risks recording a mass that is too high (because undecomposed NaHCO₃ is heavier than the Na₂CO₃ it would become).

What constant mass confirms:
When the mass no longer changes between successive heatings, it confirms:
• All NaHCO₃ has been fully converted to Na₂CO₃.
• All water vapour and CO₂ have been completely driven off.
• The mass recorded represents only dry, pure Na₂CO₃.

This gives the most accurate actual yield and therefore the most reliable percent yield calculation.`,
      },
      {
        id: 10,
        question:
          "Using the balanced equation 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ and the mole ratio, calculate how many moles of CO₂ gas are produced when 2.0 moles of NaHCO₃ are completely decomposed. Show your mole ratio reasoning clearly, and state how many moles of H₂O and Na₂CO₃ are also produced.",
        longAnswer: true,
        difficulty: "basic",
        hint: "Read the coefficients directly from the balanced equation. The ratio NaHCO₃ : CO₂ is 2 : 1.",
        answer: `Balanced equation: 2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂

Mole ratios from the equation:
  NaHCO₃ : Na₂CO₃ : H₂O : CO₂ = 2 : 1 : 1 : 1

Given: n(NaHCO₃) = 2.0 mol

Calculating each product:

  n(CO₂) = n(NaHCO₃) × (1/2) = 2.0 × 0.5 = 1.0 mol

  n(H₂O) = n(NaHCO₃) × (1/2) = 2.0 × 0.5 = 1.0 mol

  n(Na₂CO₃) = n(NaHCO₃) × (1/2) = 2.0 × 0.5 = 1.0 mol

Summary:
  2.0 mol NaHCO₃ produces:
  • 1.0 mol CO₂
  • 1.0 mol H₂O
  • 1.0 mol Na₂CO₃

The key principle: every 2 moles of NaHCO₃ that decompose produce exactly 1 mole of each product. The 2 : 1 ratio means you always halve the moles of NaHCO₃ to find the moles of any single product.`,
      },
      {
        id: 11,
        question:
          "A student finds that their actual yield of Na₂CO₃ is significantly lower than the theoretical yield, giving a percent yield well below 100%. Identify ONE likely procedural error that directly causes a lower actual yield, and explain precisely how that error results in less product being measured.",
        longAnswer: true,
        difficulty: "standard",
        hint: "Think about what could physically remove product from the crucible, or what could cause the initial mass of NaHCO₃ to be overestimated.",
        answer: `Most likely procedural error: Splattering (popping) of solid out of the crucible during heating.

What happens:
When NaHCO₃ is heated too rapidly or at too high a temperature, the sudden violent release of CO₂ and H₂O vapour can cause the solid to 'pop' or splatter. Small particles of the solid product Na₂CO₃ are ejected from the crucible and land on the bench or the outside of the crucible, where they are not weighed as part of the final residue.

How it lowers the actual yield:
The mass of solid residue measured after heating only includes the Na₂CO₃ remaining inside the crucible. The ejected particles are lost. This makes the recorded actual yield smaller than the true amount of Na₂CO₃ produced:

  % yield = (actual yield / theoretical yield) × 100%

With a smaller numerator, the percent yield drops well below 100%.

How to prevent it: Begin heating gently with a low flame, then gradually increase the temperature. This allows gases to escape slowly rather than explosively.

---

Also valid: The reactant NaHCO₃ was slightly damp when first weighed.
If the 5.00 g of 'NaHCO₃' actually contained absorbed water, the true mass of NaHCO₃ is less than 5.00 g. The theoretical yield (calculated from 5.00 g) is therefore an overestimate. The actual yield, produced from the smaller true amount of NaHCO₃, will be lower than the inflated theoretical yield, giving a percent yield below 100%.`,
      },
      {
        id: 12,
        question:
          "State which piece of laboratory equipment is most appropriate for measuring the mass of the crucible to a precision of 0.01 g. Explain why this instrument is chosen for this experiment, and briefly explain why a graduated cylinder, beaker, and spring scale are each unsuitable.",
        longAnswer: true,
        difficulty: "basic",
        answer: `Most appropriate instrument: Electronic Analytical Balance

Why it is chosen:
An electronic analytical balance can measure mass to a precision of 0.01 g (or better, 0.001 g on higher-grade models). It provides a stable digital readout that is easy to read without parallax error, and it can be re-zeroed (tared) to subtract the mass of the container. In this experiment, small changes in mass — such as the 1.90 g of gas lost or the difference between actual and theoretical yield — must be measured accurately to calculate a meaningful percent yield. Only an analytical balance has the required precision.

Why the other options are unsuitable:

• Beaker: A beaker is a glass container used to hold or heat liquids. It is not a measuring instrument and cannot determine mass.

• Graduated Cylinder: A graduated cylinder measures the volume of liquids, not mass. It is irrelevant to a mass-based experiment.

• Spring Scale: A spring scale measures the force of gravity acting on an object (i.e., weight in Newtons or approximate mass in grams). Its precision is typically far too low (often ±5–50 g) to detect the small mass differences in this experiment. It is also sensitive to the local value of gravitational acceleration and gives inconsistent readings if the object swings.

Conclusion: Only the electronic analytical balance has both the precision and the direct mass-reading capability needed for accurate yield calculations.`,
      },

      // ── Graph-reading questions (refer to the Mass vs Heating Cycle graph) ──

      {
        id: 13,
        question:
          "Refer to the graph. At which heating cycle does the mass first reach a constant value? State the final stable mass of the residue and explain what this tells you about the state of the reaction at that point.",
        longAnswer: true,
        difficulty: "basic",
        answer: `Reading from the graph:
The mass between cycles 3 and 4 is approximately 23.12 g and 23.10 g respectively — a difference of only 0.02 g, which is within the accepted tolerance of ±0.02 g for constant mass.

Constant mass is first achieved at cycle 3 (or confirmed between cycles 3 and 4).

Final stable mass of the residue = 23.10 g

What this tells us about the reaction:
When the mass no longer changes between consecutive heatings, it means all the NaHCO₃ has been fully converted to Na₂CO₃ — no further H₂O vapour or CO₂ is being produced and escaping. The residue at this point consists entirely of dry, pure Na₂CO₃. Any further heating will produce no additional mass change, confirming the reaction is complete.`,
      },
      {
        id: 14,
        question:
          "The graph shows the mass decreasing with each heating cycle, then levelling off. Explain, with reference to the decomposition reaction 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂, why the mass decreases during each heating and why it eventually stops decreasing.",
        longAnswer: true,
        difficulty: "standard",
        hint: "Connect the mass decrease to the gases produced. Connect the levelling off to the completion of the reaction.",
        answer: `Why the mass decreases with each heating cycle:

Each time the crucible is heated, the thermal decomposition reaction continues:
  2 NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)

The products H₂O (water vapour) and CO₂ (carbon dioxide gas) both escape from the open crucible into the atmosphere. Because these gases leave the system being weighed, each heating removes mass from the crucible. The steeper the drop between two cycles, the more NaHCO₃ was still reacting during that heating.

Looking at the graph:
• Cycle 0 → 1: drop of 1.20 g — most NaHCO₃ is reacting; large gas loss.
• Cycle 1 → 2: drop of 0.50 g — less NaHCO₃ remaining.
• Cycle 2 → 3: drop of 0.18 g — nearly all decomposed.
• Cycle 3 → 4: drop of 0.02 g — reaction is essentially complete.

Why the mass eventually stops decreasing:

Once all the NaHCO₃ has been completely converted to Na₂CO₃, there is no more reactant left to decompose. No further H₂O or CO₂ can be produced, so no more mass escapes on re-heating. The residue — now entirely Na₂CO₃ — is thermally stable at the temperatures used in this experiment. The mass therefore reaches a true constant value (23.10 g) and further heating produces no change.`,
      },
      {
        id: 15,
        question:
          "A student stops the experiment after cycle 1 only (mass of crucible + contents = 23.80 g) and uses this as their actual yield of Na₂CO₃. Calculate the percent yield they would report. Explain clearly why this value is misleading and what it reveals about the contents of the crucible at that stage.",
        longAnswer: true,
        difficulty: "challenge",
        hint: "First find the mass of residue at cycle 1 by subtracting the empty crucible mass. Then apply the percent yield formula. Think about what the residue actually contains at cycle 1.",
        answer: `Step 1 — Mass of residue at cycle 1:
  = (mass of crucible + residue at cycle 1) − (mass of empty crucible)
  = 23.80 g − 20.00 g
  = 3.80 g

Step 2 — Percent yield using the cycle 1 mass:
  % yield = (actual yield / theoretical yield) × 100%
           = (3.80 / 3.08) × 100%
           = 123.4%

Why this is misleading:

A percent yield of 123.4% is physically impossible for a pure product — you cannot obtain more product than the theoretical maximum. This value is misleading because:

1. The residue at cycle 1 is NOT pure Na₂CO₃. The graph shows the mass is still falling at cycle 1 (it continues to decrease through cycles 2, 3, and 4), which means unreacted NaHCO₃ is still present in the crucible alongside the Na₂CO₃ already formed.

2. NaHCO₃ (molar mass 84.0 g/mol) is heavier than Na₂CO₃ (molar mass 106.0 g/mol per 2 formula units, or 53.0 g per equivalent). The presence of unreacted NaHCO₃ adds extra mass to the residue, inflating the apparent 'actual yield' far beyond what the pure product would weigh.

3. The student has treated a partially decomposed mixture as if it were the finished product, producing a nonsensical result.

Conclusion: Only the final constant mass (23.10 g → 3.10 g residue) represents the true actual yield of Na₂CO₃.`,
      },
      {
        id: 16,
        question:
          "Using only the graph (without referring to the data table), calculate the total mass of gases (H₂O + CO₂ combined) released during the entire experiment. Show clearly which values you read from the graph. Then compare your answer with the result from Question 2 and comment on whether they agree.",
        longAnswer: true,
        difficulty: "standard",
        answer: `Reading from the graph:

  Initial mass of crucible + NaHCO₃ (cycle 0)      = 25.00 g
  Final stable mass of crucible + residue (cycle 4) = 23.10 g

Calculation — total mass of gases released:
  Mass of gases = initial mass − final stable mass
                = 25.00 g − 23.10 g
                = 1.90 g

This 1.90 g represents the combined mass of all H₂O vapour and CO₂ gas that escaped from the open crucible over the four heating cycles.

Comparison with Question 2:

In Question 2, the mass of gas lost was calculated directly from the data table:
  (mass of crucible + NaHCO₃) − (mass of crucible + residue after heating)
  = 25.00 − 23.10 = 1.90 g

Both methods give exactly the same answer: 1.90 g.

Comment:
The two values agree perfectly because the graph and the data table record the same experimental measurements — the initial mass before any heating (25.00 g) and the final stable mass after all heating cycles are complete (23.10 g). This consistency confirms that the graph accurately represents the data, and that 1.90 g of H₂O + CO₂ was released in total during the decomposition of 5.00 g of NaHCO₃.`,
      },
    ],
  },

  "5": {
    id: "5",
    topicNumber: 5,
    title: "Sequences & Patterns",
    tagline: "Spot the rule from visual patterns, then build formulas for arithmetic and geometric sequences.",
    revealKey: "M7QR2VX9KP",
    problems: [
      // ── Visual pattern problems ──────────────────────────────────────────
      {
        id: 1,
        question:
          "The diagrams show dot arrangements forming triangular figures. Use the pattern to answer all parts.",
        patternVisualId: "triangular-dots",
        parts: [
          { label: "(a)", math: "\\text{How many dots are in Figure 5?}" },
          { label: "(b)", math: "\\text{Write a formula for } T(n), \\text{ the number of dots in Figure } n." },
          { label: "(c)", math: "\\text{Which figure contains exactly 120 dots?}" },
        ],
        hint: "The 1st differences are 2, 3, 4, 5, … so they increase by 1 each time. Try expressing T(n) using two consecutive integers.",
        answer: "(a) 15   (b) T(n) = n(n+1)/2   (c) Figure 15",
        answerMath:
          "(a)\\ T(5)=15 \\quad" +
          "(b)\\ T(n)=\\dfrac{n(n+1)}{2} \\quad" +
          "(c)\\ \\dfrac{n(n+1)}{2}=120 \\Rightarrow n(n+1)=240 \\Rightarrow n=15",
        difficulty: "basic",
      },
      {
        id: 2,
        question:
          "Matchstick squares are arranged in a row as shown. Figure 1 uses 4 matchsticks and Figure 2 uses 7 matchsticks.",
        patternVisualId: "matchstick-rows",
        parts: [
          { label: "(a)", math: "\\text{Find the number of matchsticks in Figure 3 and Figure 4.}" },
          {
            label: "(b)",
            math: "\\text{Write a formula for } M(n), \\text{ the number of matchsticks for } n \\text{ squares in a row.}",
          },
          {
            label: "(c)",
            math: "\\text{Abigail has 100 matchsticks. Find the maximum number of complete squares she can build.}",
          },
        ],
        hint: "Each new square shares one vertical stick with the previous square, so only 3 extra sticks are needed per square after the first.",
        answer: "(a) M(3)=10, M(4)=13   (b) M(n)=3n+1   (c) 33 squares",
        answerMath:
          "(a)\\ 10,\\,13 \\quad" +
          "(b)\\ M(n)=3n+1 \\quad" +
          "(c)\\ 3n+1 \\leq 100 \\Rightarrow n \\leq 33",
        difficulty: "basic",
      },
      // ── Table / difference pattern ───────────────────────────────────────
      {
        id: 3,
        question: "The table shows the first few terms of a sequence.",
        tableData: {
          caption: "Look at the first differences",
          headers: ["n", "1", "2", "3", "4", "5", "6"],
          rows: [
            ["u(n)", "2", "6", "12", "20", "30", "?"],
            ["1st diff", "—", "4", "6", "8", "10", "?"],
          ],
        },
        parts: [
          { label: "(a)", math: "\\text{Write down the two missing entries in the table.}" },
          { label: "(b)", math: "\\text{Find a formula for } u(n)." },
          { label: "(c)", math: "\\text{Find the value of } n \\text{ for which } u(n)=110." },
        ],
        hint: "The 1st differences are even numbers 4, 6, 8, 10, … (constant 2nd difference). This means u(n) is quadratic — try factorising n(n+?) form.",
        answer: "(a) 42, 12  (b) u(n) = n(n+1)   (c) n = 10",
        answerMath:
          "(a)\\ u(6)=42,\\text{ diff}=12 \\quad" +
          "(b)\\ u(n)=n(n+1) \\quad" +
          "(c)\\ n(n+1)=110 \\Rightarrow n=10",
        difficulty: "basic",
      },
      {
        id: 4,
        question:
          "A sequence has first and second differences as shown in the table.",
        tableData: {
          caption: "Sequence with constant second differences",
          headers: ["n", "1", "2", "3", "4", "5"],
          rows: [
            ["u(n)", "1", "5", "13", "25", "41"],
            ["1st diff", "—", "4", "8", "12", "16"],
            ["2nd diff", "—", "—", "4", "4", "4"],
          ],
        },
        parts: [
          { label: "(a)", math: "\\text{What does the constant second difference tell you about the type of sequence?}" },
          { label: "(b)", math: "\\text{Find the general term } u(n)." },
          { label: "(c)", math: "\\text{Find the value of } n \\text{ for which } u(n)=265." },
        ],
        hint: "Constant 2nd difference → quadratic u(n)=an²+bn+c. Set up 3 equations from u(1), u(2), u(3) and solve the system.",
        answer: "(a) Quadratic sequence   (b) u(n) = 2n²−2n+1   (c) n = 12",
        answerMath:
          "(a)\\ \\text{quadratic} \\quad" +
          "(b)\\ u(n)=2n^2-2n+1 \\quad" +
          "(c)\\ 2n^2-2n+1=265 \\Rightarrow n=12",
        difficulty: "challenge",
      },
      // ── Arithmetic sequence ──────────────────────────────────────────────
      {
        id: 5,
        question:
          "A theatre has rows of seats. The first row has 12 seats and each subsequent row has 3 more seats than the row before it.",
        parts: [
          { label: "(a)", math: "\\text{Find the number of seats in the 15th row.}" },
          { label: "(b)", math: "\\text{Find the total number of seats in the first 20 rows.}" },
          { label: "(c)", math: "\\text{Which row first has more than 60 seats?}" },
        ],
        hint: "This is an AP with a=12, d=3. Use u(n)=a+(n−1)d and S(n)=(n/2)(2a+(n−1)d).",
        answer: "(a) 54   (b) 810   (c) Row 18",
        answerMath:
          "(a)\\ u_{15}=12+14\\times3=54 \\quad" +
          "(b)\\ S_{20}=\\tfrac{20}{2}(24+57)=810 \\quad" +
          "(c)\\ \\text{Row }18",
        difficulty: "standard",
      },
      // ── Geometric sequence ───────────────────────────────────────────────
      {
        id: 6,
        question:
          "A bacteria colony starts with 200 bacteria. The population triples every hour.",
        parts: [
          { label: "(a)", math: "\\text{Find the number of bacteria after 4 hours.}" },
          { label: "(b)", math: "\\text{Write a formula for } B(n), \\text{ the count after } n \\text{ full hours.}" },
          {
            label: "(c)",
            math: "\\text{Find the first integer } n \\text{ for which the population exceeds 5 000 000.}",
          },
        ],
        hint: "GP with a=200, r=3. For part (c), take log of both sides: n log 3 > log 25000.",
        answer: "(a) 16 200   (b) B(n) = 200 × 3ⁿ   (c) n = 10",
        answerMath:
          "(a)\\ 200\\times3^4=16200 \\quad" +
          "(b)\\ B(n)=200\\times3^n \\quad" +
          "(c)\\ n=10",
        difficulty: "standard",
      },
      // ── Sum to infinity ──────────────────────────────────────────────────
      {
        id: 7,
        question:
          "A ball is dropped from a height of 8 m. After each bounce it rises to 75% of the previous height. Assume the ball bounces indefinitely.",
        parts: [
          { label: "(a)", math: "\\text{Find the height reached after the 4th bounce (3 s.f.).}" },
          {
            label: "(b)",
            math: "\\text{Find the total vertical distance (up and down combined) travelled before the ball comes to rest.}",
          },
        ],
        hint: "After the initial 8 m fall, each bounce cycle = up + down = 2 × (current height). The up-distances form a GP: 6, 4.5, 3.375, … Use S∞ = a/(1−r).",
        answer: "(a) ≈ 2.53 m   (b) 56 m",
        answerMath:
          "(a)\\ 8\\times0.75^4\\approx2.53\\text{ m} \\quad" +
          "(b)\\ 8+2\\cdot\\dfrac{8\\times0.75}{1-0.75}=8+48=56\\text{ m}",
        difficulty: "standard",
      },
      // ── Logic / pattern in powers ────────────────────────────────────────
      {
        id: 8,
        question:
          "The table shows the units digits of the first five powers of 7.",
        tableData: {
          caption: "Units digits of powers of 7",
          headers: ["Power", "7¹", "7²", "7³", "7⁴", "7⁵"],
          rows: [
            ["Value", "7", "49", "343", "2401", "16807"],
            ["Units digit", "7", "9", "3", "1", "7"],
          ],
        },
        parts: [
          { label: "(a)", math: "\\text{State the repeating cycle of units digits and its length.}" },
          { label: "(b)", math: "\\text{Find the units digit of } 7^{100}." },
          { label: "(c)", math: "\\text{Find the units digit of } 7^{2026}." },
        ],
        hint: "Divide the exponent by the cycle length. A remainder of 0 means use the last digit in the cycle.",
        answer: "(a) Cycle [7, 9, 3, 1], length 4   (b) 1   (c) 9",
        answerMath:
          "(a)\\ [7,9,3,1]\\text{ — length }4 \\quad" +
          "(b)\\ 100\\div4=25\\text{ r}0 \\Rightarrow 1 \\quad" +
          "(c)\\ 2026\\div4=506\\text{ r}2 \\Rightarrow 9",
        difficulty: "standard",
      },
      // ── Challenge: AP vs GP comparison ──────────────────────────────────
      {
        id: 9,
        question:
          "An arithmetic sequence and a geometric sequence share the same first term a₁ = 4 and second term a₂ = 12.",
        parts: [
          { label: "(a)", math: "\\text{Write down the first four terms of each sequence.}" },
          {
            label: "(b)",
            math:
              "\\text{Determine algebraically whether the two sequences share any common term beyond the second.}",
          },
        ],
        hint: "AP: u(n)=8n−4. GP: v(n)=4×3^(n−1). Set them equal and analyse 2n−1=3^(n−1) for integer n>2 — compare linear vs exponential growth.",
        answer: "(a) AP: 4,12,20,28; GP: 4,12,36,108   (b) No further common terms beyond n=2",
        answerMath:
          "(a)\\ \\text{AP: }4,12,20,28 \\quad \\text{GP: }4,12,36,108 \\quad" +
          "(b)\\ \\text{For }n>2,\\; 3^{n-1}\\text{ grows faster than }2n-1 \\Rightarrow \\text{no common term}",
        difficulty: "challenge",
      },
      // ── Challenge: infinite shrinking squares ────────────────────────────
      {
        id: 10,
        question:
          "A unit square has side length 1. A second square is formed by joining the midpoints of the sides of the first, and the process continues indefinitely.",
        parts: [
          { label: "(a)", math: "\\text{Show that each inner square has half the area of the outer square.}" },
          { label: "(b)", math: "\\text{Find the sum of the areas of all squares to infinity.}" },
          { label: "(c)", math: "\\text{Find the sum of the perimeters of all squares to infinity.}" },
        ],
        hint: "Pythagoras: if the outer side = s, the inner side = s/√2, so inner area = s²/2. For (c) the perimeters are 4, 4/√2, 4/2, … a GP with r=1/√2. Rationalise the denominator of S∞.",
        answer: "(b) Total area = 2   (c) Total perimeter = 8 + 4√2",
        answerMath:
          "(b)\\ S_{\\infty}=\\dfrac{1}{1-\\frac{1}{2}}=2 \\quad" +
          "(c)\\ S_{\\infty}=\\dfrac{4}{1-\\frac{1}{\\sqrt{2}}}=8+4\\sqrt{2}",
        difficulty: "challenge",
      },
    ],
  },
};

// ─── Pattern Visual Components ───────────────────────────────────────────────

/**
 * Triangular dot pattern — shows T(1)=1 through T(4)=10 in equilateral-style rows.
 * The label below each figure shows the running count so students can verify their
 * pattern recognition before answering.
 */
function TriangularDotsVisual() {
  type Dot = [number, number];
  const figures: Array<{ n: number; t: number; cx: number; dots: Dot[] }> = [
    { n: 1, t: 1,  cx: 70,  dots: [[70, 110]] },
    { n: 2, t: 3,  cx: 200, dots: [[200, 91], [189, 110], [211, 110]] },
    {
      n: 3, t: 6, cx: 340,
      dots: [[340, 72], [329, 91], [351, 91], [318, 110], [340, 110], [362, 110]],
    },
    {
      n: 4, t: 10, cx: 490,
      dots: [
        [490, 53],
        [479, 72], [501, 72],
        [468, 91], [490, 91], [512, 91],
        [457, 110], [479, 110], [501, 110], [523, 110],
      ],
    },
  ];

  return (
    <div className="mt-4 border border-slate-200 rounded-xl bg-slate-50 p-3 overflow-x-auto">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
        Pattern Diagrams — dots arranged in triangular figures
      </p>
      <svg
        viewBox="0 0 580 152"
        className="w-full"
        style={{ minWidth: "380px", maxWidth: "640px" }}
        aria-label="Triangular dot patterns for figures 1 through 4"
      >
        {/* Dividers between figures */}
        {[140, 270, 415].map((x, i) => (
          <line key={i} x1={x} y1={22} x2={x} y2={138} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
        ))}
        {figures.map((fig) => (
          <g key={fig.n}>
            <text x={fig.cx} y={17} textAnchor="middle" fontSize="10" fill="#64748b" fontStyle="italic">
              Figure {fig.n}
            </text>
            {fig.dots.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="7" fill="#1d4ed8" />
            ))}
            <text x={fig.cx} y={138} textAnchor="middle" fontSize="10" fill="#1e3a8a" fontWeight="700">
              T({fig.n}) = {fig.t}
            </text>
          </g>
        ))}
      </svg>
      <p className="text-xs text-slate-400 mt-1">T(n) = total dots in Figure n.</p>
    </div>
  );
}

/**
 * Matchstick rows visual — shows 3 figures of squares-in-a-row built from matchsticks.
 * Figures 1–3 are drawn; the count labels show known values so students can find the
 * pattern and extend it to Figure 4 and beyond.
 */
function MatchstickRowsVisual() {
  const sqSize = 40;
  const yTop = 55, yBot = 95;
  const figs = [
    { n: 1, x0: 50,  label: "M(1) = 4",  cx: 70  },
    { n: 2, x0: 175, label: "M(2) = 7",  cx: 215 },
    { n: 3, x0: 330, label: "M(3) = ?",  cx: 390 },
  ];

  return (
    <div className="mt-4 border border-slate-200 rounded-xl bg-slate-50 p-3 overflow-x-auto">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
        Matchstick Diagrams — squares arranged in a row
      </p>
      <svg
        viewBox="0 0 500 148"
        className="w-full"
        style={{ minWidth: "320px", maxWidth: "600px" }}
        aria-label="Matchstick diagrams for 1, 2, and 3 squares in a row"
      >
        {/* Dividers */}
        {[140, 290].map((x, i) => (
          <line key={i} x1={x} y1={20} x2={x} y2={132} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
        ))}
        {figs.map((fig) => {
          const { n, x0, cx, label } = fig;
          const sticks: React.ReactElement[] = [];
          // Vertical sticks: n+1
          for (let k = 0; k <= n; k++) {
            sticks.push(
              <line key={`v${k}`} x1={x0 + k * sqSize} y1={yTop} x2={x0 + k * sqSize} y2={yBot}
                stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
            );
          }
          // Top horizontal sticks: n
          for (let k = 0; k < n; k++) {
            sticks.push(
              <line key={`th${k}`} x1={x0 + k * sqSize} y1={yTop} x2={x0 + (k + 1) * sqSize} y2={yTop}
                stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
            );
          }
          // Bottom horizontal sticks: n
          for (let k = 0; k < n; k++) {
            sticks.push(
              <line key={`bh${k}`} x1={x0 + k * sqSize} y1={yBot} x2={x0 + (k + 1) * sqSize} y2={yBot}
                stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
            );
          }
          return (
            <g key={n}>
              <text x={cx} y={17} textAnchor="middle" fontSize="10" fill="#64748b" fontStyle="italic">
                Figure {n}
              </text>
              {sticks}
              <text x={cx} y={128} textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">
                {label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-xs text-slate-400 mt-1">
        Each line segment represents one matchstick. Count the sticks and look for the pattern.
      </p>
    </div>
  );
}

// ─── Lookup for pattern visuals (keyed by patternVisualId) ───────────────────

const PATTERN_VISUALS: Record<string, () => React.ReactElement> = {
  "triangular-dots": TriangularDotsVisual,
  "matchstick-rows": MatchstickRowsVisual,
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

function MassTimeGraph() {
  // Plot geometry
  const xLeft = 80, xRight = 520, yTop = 22, yBottom = 258;
  const yMin = 22.5, yMax = 25.5;
  const yHeight = yBottom - yTop;
  const yScale = yHeight / (yMax - yMin); // px per gram

  const toY = (mass: number) => yBottom - (mass - yMin) * yScale;

  const data = [
    { cycle: 0, mass: 25.00 },
    { cycle: 1, mass: 23.80 },
    { cycle: 2, mass: 23.30 },
    { cycle: 3, mass: 23.12 },
    { cycle: 4, mass: 23.10 },
  ];

  const xPositions = [80, 190, 300, 410, 520];
  const points = data.map((d, i) => ({ ...d, x: xPositions[i], y: toY(d.mass) }));
  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  const yGridLines = [22.5, 23.0, 23.5, 24.0, 24.5, 25.0, 25.5];
  const constY = toY(23.10);

  return (
    <div className="mt-5 border-t border-slate-200 pt-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
        Graph — Mass of Crucible + Contents vs. Heating Cycle
      </p>
      <p className="text-xs text-slate-400 mb-3">
        Each point represents the mass recorded after one complete heat → cool → weigh cycle.
        Use this graph to answer Questions 13–16.
      </p>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 580 295"
          className="w-full"
          style={{ minWidth: "360px", maxWidth: "640px" }}
          aria-label="Mass vs heating cycle graph for NaHCO₃ decomposition experiment"
        >
          {/* Plot background */}
          <rect
            x={xLeft} y={yTop}
            width={xRight - xLeft} height={yBottom - yTop}
            fill="#f8fafc" rx="4" stroke="#e2e8f0" strokeWidth="1"
          />

          {/* Horizontal grid lines */}
          {yGridLines.map((mass) => (
            <g key={mass}>
              <line
                x1={xLeft} y1={toY(mass)} x2={xRight} y2={toY(mass)}
                stroke="#e2e8f0"
                strokeWidth={Number.isInteger(mass) ? "1" : "0.5"}
                strokeDasharray="4,3"
              />
              <text
                x={xLeft - 7} y={toY(mass) + 4}
                textAnchor="end" fontSize="10"
                fill="#94a3b8" fontFamily="monospace"
              >
                {mass.toFixed(1)}
              </text>
            </g>
          ))}

          {/* Axes */}
          <line x1={xLeft} y1={yTop} x2={xLeft} y2={yBottom} stroke="#94a3b8" strokeWidth="1.5" />
          <line x1={xLeft} y1={yBottom} x2={xRight} y2={yBottom} stroke="#94a3b8" strokeWidth="1.5" />

          {/* Tick marks on x-axis */}
          {xPositions.map((x, i) => (
            <line key={i} x1={x} y1={yBottom} x2={x} y2={yBottom + 5} stroke="#94a3b8" strokeWidth="1.5" />
          ))}

          {/* Y-axis label */}
          <text
            transform={`rotate(-90 18 ${(yTop + yBottom) / 2})`}
            x="18" y={(yTop + yBottom) / 2}
            textAnchor="middle" fontSize="11" fill="#64748b"
          >
            Mass (g)
          </text>

          {/* Constant-mass reference line */}
          <line
            x1={xLeft} y1={constY} x2={xRight} y2={constY}
            stroke="#16a34a" strokeWidth="1.5" strokeDasharray="8,4"
          />
          <text x={xRight + 5} y={constY + 4} fontSize="9" fill="#16a34a" fontWeight="700">
            23.10 g
          </text>

          {/* Data line */}
          <polyline
            points={polyline}
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Data points + mass labels */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="5" fill="#1d4ed8" stroke="white" strokeWidth="2" />
              <text
                x={p.x} y={p.y - 11}
                textAnchor="middle" fontSize="10"
                fill="#1e3a8a" fontWeight="700" fontFamily="monospace"
              >
                {p.mass.toFixed(2)}
              </text>
            </g>
          ))}

          {/* X-axis cycle labels */}
          {xPositions.map((x, i) => (
            <text key={i} x={x} y={yBottom + 18} textAnchor="middle" fontSize="11" fill="#64748b">
              {i}
            </text>
          ))}

          {/* X-axis title */}
          <text
            x={(xLeft + xRight) / 2} y={yBottom + 34}
            textAnchor="middle" fontSize="11" fill="#64748b"
          >
            Heating Cycle
          </text>

          {/* Legend */}
          <g transform="translate(95, 30)">
            <line x1="0" y1="5" x2="24" y2="5" stroke="#1d4ed8" strokeWidth="2.5" />
            <circle cx="12" cy="5" r="4" fill="#1d4ed8" stroke="white" strokeWidth="1.5" />
            <text x="29" y="9" fontSize="10" fill="#334155">Measured mass</text>
          </g>
          <g transform="translate(95, 48)">
            <line x1="0" y1="5" x2="24" y2="5" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="6,3" />
            <text x="29" y="9" fontSize="10" fill="#334155">Constant mass (23.10 g)</text>
          </g>
        </svg>
      </div>

      <p className="text-xs text-slate-400 mt-1.5">
        Green dashed line = final stable mass once constant mass is achieved.
        Blue line = measured mass after each heating cycle.
      </p>
    </div>
  );
}

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

          {/* Experiment context box */}
          {practice.experimentContext && (
            <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
              <div className="bg-navy-900 px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-aa-light mb-1">
                  Experiment Context
                </p>
                <p className="text-white font-bold text-lg">
                  {practice.experimentContext.title}
                </p>
              </div>
              <div className="px-6 py-5 space-y-3">
                {practice.experimentContext.setup.map((line, i) => (
                  <p key={i} className="text-sm text-navy-900 font-medium">
                    {line}
                  </p>
                ))}
                {practice.experimentContext.table && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          {practice.experimentContext.table.headers.map((h, i) => (
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
                        {practice.experimentContext.table.rows.map((row, ri) => (
                          <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-4 py-2.5 border border-slate-200 text-sm ${
                                  ci === 0
                                    ? "font-medium text-navy-900"
                                    : "text-navy-900 font-semibold"
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
                )}
                {practice.experimentContext.showMassTimeGraph && <MassTimeGraph />}
                <p className="text-xs text-slate-400 pt-1">
                  Read this context carefully — including the graph above — before answering each question below.
                </p>
              </div>
            </div>
          )}

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

        {/* Pattern visual diagram (if specified) */}
        {problem.patternVisualId && PATTERN_VISUALS[problem.patternVisualId] &&
          React.createElement(PATTERN_VISUALS[problem.patternVisualId])}

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
          {problem.longAnswer ? (
            <textarea
              rows={6}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              placeholder="Write your full explanation here. Include definitions, calculations, and reasoning…"
              className={`w-full border-2 rounded-xl px-4 py-3 text-navy-900 font-medium outline-none transition-colors resize-y leading-relaxed ${
                disabled
                  ? "bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed"
                  : hasAnswer
                  ? "border-aa-light focus:border-aa-primary bg-aa-bg"
                  : "border-slate-200 focus:border-aa-primary bg-white"
              }`}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              placeholder="Type your final or short answer here…"
              className={`w-full border-2 rounded-xl px-4 py-3 text-navy-900 font-medium outline-none transition-colors ${
                disabled
                  ? "bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed"
                  : hasAnswer
                  ? "border-aa-light focus:border-aa-primary bg-aa-bg"
                  : "border-slate-200 focus:border-aa-primary bg-white"
              }`}
            />
          )}
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

      {/* Comparison grid — side-by-side for short answers, stacked for long answers */}
      {problem.longAnswer ? (
        <div className="divide-y divide-slate-100">
          {/* Student answer */}
          <div className="px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Your Answer
            </p>
            {studentAnswer.trim() ? (
              <pre className="whitespace-pre-wrap font-sans text-sm text-navy-900 leading-relaxed bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
                {studentAnswer.trim()}
              </pre>
            ) : (
              <p className="text-slate-300 italic text-sm">No answer entered</p>
            )}
          </div>
          {/* Model answer */}
          <div className="px-6 py-5 bg-ai-bg">
            <p className="text-xs font-bold uppercase tracking-wider text-ai-primary mb-3">
              Model Answer
            </p>
            <pre className="whitespace-pre-wrap font-sans text-sm text-navy-900 leading-relaxed bg-white rounded-xl px-4 py-3 border border-ai-light">
              {problem.answer}
            </pre>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {/* Student answer */}
          <div className="px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Your Answer
            </p>
            <p className="text-navy-900 font-medium min-h-6">
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
      )}
    </div>
  );
}
