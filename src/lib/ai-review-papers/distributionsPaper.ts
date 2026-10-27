import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 25: Expected value, binomial and normal distributions (AI Unit 4, booklet 4.7 and 4.8).
const paper: AiReviewPaper = {
  slug: "distributions",
  session: 25,
  topic: "Expected Value, Binomial and Normal Distributions",
  title: "Expected Value, Binomial and Normal Distributions",
  subtitle: "Summative Revision, Session 25",
  minutes: 32,
  lessonAnchor: "distributions",
  lessonHref: "/ai/unit-4/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`The discrete random variable \(X\) is the score on a spinner.`],
      table: { head: ["\\(x\\)", "1", "2", "3", "4"], rows: [["\\(P(X = x)\\)", "\\(k\\)", "0.3", "0.4", "0.1"]] },
      parts: [
        part("a", 2, m`Find the value of \(k\).`, [m`\[k + 0.3 + 0.4 + 0.1 = 1 \Rightarrow k = 0.2\]`], "k = 0.2", "Marks: (M1) sum of probabilities is 1, (A1) 0.2."),
        part("b", 2, m`Find \(E(X)\).`, [m`\[E(X) = 1(0.2) + 2(0.3) + 3(0.4) + 4(0.1) = 2.4\]`], "2.4", "Marks: (M1) sum of x P(X = x), (A1) 2.4."),
        part("c", 2, m`A player pays \(\$3\) and receives \(\$X\). Determine whether the game favours the player.`, [m`\[E(\text{gain}) = 2.4 - 3 = -0.6\]`], "No: expected loss of $0.60 per game", "Marks: (M1) compare E(X) with cost, (A1) conclusion."),
      ],
    },
    {
      n: 2, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      ctx: [m`A factory finds that each item is faulty with probability \(0.4\) in a test batch. Eight items are chosen. Let \(X\) be the number of faulty items, \(X \sim B(8, 0.4)\).`],
      parts: [
        part("a", 2, m`Find \(P(X = 3)\).`, [m`\[\text{binompdf}(8, 0.4, 3) = 0.279\]`], "0.279", "Marks: (M1) binomial pdf, (A1) 0.279."),
        part("b", 2, m`Find \(P(X \le 2)\).`, [m`\[\text{binomcdf}(8, 0.4, 2) = 0.315\]`], "0.315", "Marks: (M1) binomial cdf, (A1) 0.315."),
        part("c", 2, m`Find \(E(X)\) and \(\mathrm{Var}(X)\).`, [m`\[E(X) = np = 3.2,\quad \mathrm{Var}(X) = np(1-p) = 1.92\]`], "E(X) = 3.2, Var(X) = 1.92", "Marks: (A1) 3.2, (A1) 1.92."),
      ],
    },
    {
      n: 3, section: "B",
      instruction: "In this question, give answers correct to three significant figures.",
      ctx: [m`The volume of juice in a bottle is normally distributed with mean \(500\ \text{ml}\) and standard deviation \(6\ \text{ml}\).`],
      parts: [
        part("a", 2, m`Find the probability that a bottle contains less than \(490\ \text{ml}\).`, [m`\[P(X < 490) = 0.0478\]`], "0.0478", "Marks: (M1) normalcdf, (A1) 0.0478."),
        part("b", 2, m`Find the probability that a bottle contains between \(495\) and \(510\ \text{ml}\).`, [m`\[P(495 < X < 510) = 0.750\]`], "0.750", "Marks: (M1) normalcdf, (A1) 0.750."),
        part("c", 2, m`In a batch of \(2000\) bottles, estimate how many contain less than \(490\ \text{ml}\).`, [m`\[2000 \times 0.0478 = 95.6\]`], "About 96 bottles", "Marks: (M1) multiply, (A1) 96."),
        part("d", 2, m`The lowest \(2\%\) of bottles are rejected. Find the volume below which a bottle is rejected.`, [m`\[\text{invNorm}(0.02, 500, 6) = 487.7\ \text{ml}\]`], "487.7 ml", "Marks: (M1) invNorm, (A1) 488 (3 s.f.)."),
        part("e", 3, m`Ten bottles are chosen at random. Find the probability that exactly one has less than \(490\ \text{ml}\).`, [m`\[Y \sim B(10, 0.0478),\quad P(Y = 1) = 0.308\]`], "0.308", "Marks: (A1) binomial model, (M1) binompdf, (A1) 0.308."),
      ],
    },
  ],
};

export default paper;
