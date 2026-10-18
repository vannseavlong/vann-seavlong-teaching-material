import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 7 — Mixed Summative Mock
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "summative-mock",
  session: 7,
  topic: "All Summative Topics",
  title: "Summative Assessment — Mixed Mock",
  subtitle: "Summative Revision — Session 7 (full run-through)",
  minutes: 50,
  lessonAnchor: "arithmetic",
  questions: [
    {
      n: 1,
      ctx: ["A cinema's first row has 12 seats. Every row has 2 more seats than the row in front."],
      parts: [
        { l: "a", marks: 2, q: "Find the number of seats in row 15.", restate: "Row 15", steps: [m`\[u_{15} = 12 + 14(2) = 40\]`], final: "40 seats" },
        { l: "b", marks: 2, q: "Find the total number of seats in the first 15 rows.", restate: "Total, 15 rows", steps: [m`\[S_{15} = \dfrac{15}{2}(12 + 40) = 390\]`], final: "390 seats" },
      ],
    },
    {
      n: 2,
      ctx: [m`A geometric sequence has first term 80 and common ratio 0.75.`],
      parts: [
        { l: "a", marks: 2, q: m`Find \(u_6\), to 3 significant figures.`, restate: "6th term", steps: [m`\[80(0.75)^5 = 18.98\ldots\]`], final: "u₆ ≈ 19.0" },
        { l: "b", marks: 2, q: m`Find \(S_8\), to 3 significant figures.`, restate: "S₈", steps: [m`\[S_8 = \dfrac{80\left(1 - 0.75^8\right)}{1 - 0.75} = 287.96\ldots\]`], final: "S₈ ≈ 288" },
      ],
    },
    {
      n: 3,
      ctx: ["Boran invests $15,000 at a nominal annual rate of 4.2%, compounded quarterly, for 6 years."],
      parts: [
        { l: "a", marks: 3, q: "Find the final value of the investment.", restate: "Future value", steps: [m`\[FV = 15\,000\left(1 + \dfrac{4.2}{400}\right)^{24} = 15\,000(1.0105)^{24} = 19\,273.60\]`], final: "$19,273.60" },
        { l: "b", marks: 1, q: "Find the interest earned.", lines: 1, restate: "Interest", steps: [m`\[19\,273.60 - 15\,000 = 4273.60\]`], final: "$4,273.60" },
      ],
    },
    {
      n: 4,
      ctx: ["A laptop costs $1,400 and loses 18% of its value each year."],
      parts: [
        { l: "•", marks: 3, q: "Find its value after 3 years, to the nearest dollar.", restate: "Depreciated value", steps: [m`\[1400(0.82)^3 = 771.92\]`], final: "$772" },
      ],
    },
    {
      n: 5,
      parts: [
        { l: "a", marks: 1, q: m`Round \(0.0508473\) to 3 significant figures.`, lines: 1, restate: "3 s.f.", steps: [m`\(0.0508\)`], final: "0.0508" },
        { l: "b", marks: 2, q: m`Calculate \((3.87 \times 10^{5}) \times (2 \times 10^{-3})\) and give the answer in the form \(a \times 10^k\).`, restate: "Standard form", steps: [m`\[3.87 \times 2 = 7.74 \quad\text{and}\quad 10^{5} \times 10^{-3} = 10^{2}\]`], final: "7.74 × 10²" },
      ],
    },
    {
      n: 6,
      ctx: ["A square tile has side length 30 cm, to the nearest cm."],
      parts: [
        { l: "a", marks: 1, q: "Write down the lower and upper bounds of the side length.", lines: 1, restate: "Side bounds", steps: [m`\[29.5 \le s < 30.5\]`], final: "29.5 ≤ s < 30.5" },
        { l: "b", marks: 2, q: "Find the lower and upper bounds of the area of the tile.", restate: "Area bounds", steps: [m`\[29.5^2 = 870.25 \qquad 30.5^2 = 930.25\]`], final: "870.25 ≤ A < 930.25 cm²" },
      ],
    },
    {
      n: 7,
      ctx: ["A tourism board predicts 1.2 million visitors in a year. The actual number is 1,038,000."],
      parts: [
        { l: "•", marks: 3, q: "Find the percentage error in the prediction, to 3 significant figures.", restate: "% error", steps: [m`\[\left|\dfrac{1\,200\,000 - 1\,038\,000}{1\,038\,000}\right| \times 100 = 15.6\%\]`], final: "15.6%" },
      ],
    },
  ],
};

export default paper;
