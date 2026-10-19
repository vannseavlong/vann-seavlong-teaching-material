import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 4: Rounding & Estimation (IB SL style: Section A short questions, Section B extended question)

const paper: AiReviewPaper = {
  slug: "rounding",
  session: 4,
  topic: "Rounding & Estimation",
  title: "Rounding",
  subtitle: "Summative Revision, Session 4",
  minutes: 35,
  lessonAnchor: "rounding",
  questions: [
    {
      n: 1,
      section: "A",
      ctx: [
        "The mean distance from the Earth to the Sun is 149 597 871 km. Light travels at a speed of 3.00 × 10⁵ km per second.",
      ],
      parts: [
        {
          l: "a", marks: 1, q: "Write the distance from the Earth to the Sun correct to 3 significant figures.", lines: 1, restate: "3 s.f.",
          steps: [m`The 4th significant figure is 9, so round up: \(149\,597\,871 \to 150\,000\,000\).`],
          final: "150 000 000 km",
          note: "Marks: (A1) 150 000 000.",
        },
        {
          l: "b", marks: 1, q: m`Write your answer to part (a) in the form \(a \times 10^{k}\), where \(1 \le a < 10\) and \(k \in \mathbb{Z}\).`, lines: 1, restate: "Standard form",
          steps: [m`\[1.50 \times 10^{8}\]`],
          final: "1.50 × 10⁸ km",
          note: "Marks: (A1) 1.50 × 10⁸. Follow through from (a).",
        },
        {
          l: "c", marks: 2, q: "Calculate the time, in seconds, for light to travel from the Sun to the Earth. Use the exact distance given and give your answer correct to 3 significant figures.", restate: "Time in seconds",
          steps: [
            m`\[t = \dfrac{149\,597\,871}{3.00 \times 10^{5}} = 498.659\ldots\]`,
            m`\(498.659\ldots \to 499\) s (3 s.f.).`,
          ],
          final: "499 seconds",
          note: "Marks: (M1) distance ÷ speed, (A1) 499. Using the rounded distance 1.50 × 10⁸ gives 500, which is not accepted.",
        },
        {
          l: "d", marks: 1, q: m`Write your answer to part (c) in the form \(a \times 10^{k}\).`, lines: 1, restate: "Standard form",
          steps: [m`\[4.99 \times 10^{2}\]`],
          final: "4.99 × 10² s",
          note: "Marks: (A1) 4.99 × 10².",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: ["A rectangular building plot has length 18.6 m and width 9.35 m."],
      parts: [
        {
          l: "a", marks: 1, q: "Calculate the area of the plot.", lines: 1, restate: "Exact area",
          steps: [m`\[18.6 \times 9.35 = 173.91\]`],
          final: "173.91 m²",
          note: "Marks: (A1) 173.91.",
        },
        {
          l: "b", marks: 1, q: "Estimate the area by rounding each dimension to 1 significant figure.", lines: 2, restate: "Estimate",
          steps: [m`\(18.6 \to 20\) and \(9.35 \to 9\), so the estimate is \(20 \times 9 = 180\).`],
          final: "180 m²",
          note: "Marks: (A1) 180.",
        },
        {
          l: "c", marks: 2, q: "Calculate the percentage error in the estimate. Give your answer correct to 3 significant figures.", restate: "Percentage error",
          steps: [
            m`\[\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100 = \left|\dfrac{180 - 173.91}{173.91}\right| \times 100\]`,
            m`\[\varepsilon = 3.50\%\]`,
          ],
          final: "3.50%",
          note: "Marks: (M1) substitution with v_E = 173.91 in the denominator, (A1) 3.50.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "In this question, give all money answers to two decimal places unless told otherwise.",
      ctx: [
        "Chenda must paint a wall of area 44.0 m². Each tin of paint covers 8.5 m² and costs $14.60. Tins are sold whole only.",
        "The exchange rate is $1 = 4100 riels.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the number of tins Chenda must buy.", restate: "Tins needed",
          steps: [
            m`\[44.0 \div 8.5 = 5.176\ldots\]`,
            "Tins are sold whole, so round up to the next whole number.",
          ],
          final: "6 tins",
          note: "Marks: (M1) 44.0 ÷ 8.5, (A1) 6. Answer 5 scores (M1) only.",
        },
        {
          l: "b", marks: 1, q: "Justify why 5 tins are not enough.", lines: 2, restate: "Justification",
          steps: [m`5 tins cover \(5 \times 8.5 = 42.5\ \text{m}^2\), which is less than \(44.0\ \text{m}^2\).`],
          final: "5 tins cover only 42.5 m²",
          note: "Marks: (R1) 42.5 < 44.0.",
        },
        {
          l: "c", marks: 2, q: m`Find the cost of the paint in riels. Give your answer in the form \(a \times 10^{k}\), correct to 3 significant figures.`, restate: "Cost in riels",
          steps: [
            m`\[6 \times 14.60 = 87.60\ \text{dollars}\]`,
            m`\[87.60 \times 4100 = 359\,160 = 3.59 \times 10^{5}\ \text{riels}\ (3\ \text{s.f.})\]`,
          ],
          final: "3.59 × 10⁵ riels",
          note: "Marks: (M1) 6 × 14.60 × 4100, (A1) 3.59 × 10⁵.",
        },
      ],
    },
    {
      n: 4,
      section: "B",
      instruction: "In this question, give all money answers to two decimal places unless told otherwise.",
      ctx: [
        "Dara invests $6500 in an account that pays a nominal annual interest rate of 4.2%, compounded quarterly. No money is added or withdrawn.",
        "The bank reports the balance at the end of each year, rounded to the nearest dollar, as shown in the table.",
      ],
      table: {
        head: ["End of year", "1", "2", "3"],
        rows: [["Balance ($)", "6777", "7066", "7368"]],
      },
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: "Write down the interest rate per quarter.", lines: 1, restate: "Quarterly rate",
          steps: [m`\[4.2 \div 4 = 1.05\%\]`],
          final: "1.05%",
          note: "Marks: (A1) 1.05.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Calculate the value of the investment after 6 years.", restate: "Value after 6 years",
          steps: [
            m`There are \(6 \times 4 = 24\) quarters.`,
            m`\[FV = 6500\left(1 + \dfrac{4.2}{4 \times 100}\right)^{24} = 6500(1.0105)^{24} = 8351.89\]`,
            "GDC finance app: N = 24, I% = 4.2, PV = -6500, PMT = 0, P/Y = 4, C/Y = 4, solve for FV.",
          ],
          final: "$8351.89",
          note: "Marks: (M1) correct substitution (N = 24, 1.0105), (A1) 8351.89.",
        },
        {
          l: "b", sub: "i", marks: 2, q: "Dara's friend rounds the quarterly multiplier 1.0105 to 3 significant figures before raising it to the power. Calculate the value this gives after 6 years.", restate: "Early rounding",
          steps: [
            m`\(1.0105 \to 1.01\) (3 s.f.).`,
            m`\[6500(1.01)^{24} = 8253.28\]`,
          ],
          final: "$8253.28",
          note: "Marks: (M1) 6500 × 1.01^24, (A1) 8253.28.",
        },
        {
          l: "b", sub: "ii", marks: 2, q: "Calculate the percentage error in the friend's value, compared with the value in part (a)(ii). Give your answer correct to 3 significant figures.", restate: "Percentage error",
          steps: [
            m`\[\varepsilon = \left|\dfrac{8253.28 - 8351.89}{8351.89}\right| \times 100\]`,
            m`\[\varepsilon = 1.18\%\]`,
            "Rounding the multiplier early is magnified by the power 24. Keep the full value in the GDC until the final step.",
          ],
          final: "1.18%",
          note: "Marks: (M1) substitution with 8351.89 in the denominator, (A1) 1.18.",
        },
        {
          l: "c", marks: 2, q: m`Dara changes the value from part (a)(ii) into riels at a rate of $1 = 4080 riels. Give your answer in the form \(a \times 10^{k}\), correct to 3 significant figures.`, restate: "Value in riels",
          steps: [
            m`\[8351.89 \times 4080 = 34\,075\,728\ldots\]`,
            m`\[= 3.41 \times 10^{7}\ \text{riels}\]`,
          ],
          final: "3.41 × 10⁷ riels",
          note: "Marks: (M1) 8351.89 × 4080 (or unrounded FV), (A1) 3.41 × 10⁷. Using the rounded $8351.89 gives the same answer to 3 s.f.",
        },
        {
          l: "d", sub: "i", marks: 3, q: "Dara wants the investment to reach at least $9000. Find the least number of quarters needed.", restate: "Least number of quarters",
          steps: [
            m`\[6500(1.0105)^{n} \ge 9000\]`,
            m`\[n \ge 31.155\ldots\]`,
            m`\(n\) must be a whole number of quarters, so round up: \(n = 32\). Check: \(n = 31\) gives \(\$8985.44 < 9000\) and \(n = 32\) gives \(\$9079.78\).`,
            "GDC finance app: solve for N with PV = -6500, FV = 9000, I% = 4.2, P/Y = C/Y = 4.",
          ],
          final: "32 quarters",
          note: "Marks: (M1) equation or inequality, (A1) 31.155 (or 31 gives less than 9000), (A1) 32.",
        },
        {
          l: "d", sub: "ii", marks: 1, q: "Write your answer to part (d)(i) in years.", lines: 1, restate: "Years",
          steps: [m`\[32 \div 4 = 8\]`],
          final: "8 years",
          note: "Marks: (A1) 8. Follow through from (d)(i).",
        },
        {
          l: "e", sub: "i", marks: 2,
          q: "Using the table, find the ratio of the balance at the end of year 2 to year 1, and of year 3 to year 2. Give each answer correct to 5 significant figures.",
          lines: 3, restate: "Ratios from the table",
          steps: [
            m`\[\dfrac{7066}{6777} = 1.0426\ldots \qquad \dfrac{7368}{7066} = 1.0427\ldots\]`,
            "Both ratios are 1.043 to 4 significant figures, so the balances form an approximate geometric sequence.",
          ],
          final: "1.0426 and 1.0427 (5 s.f.)",
          note: "Marks: (M1) one ratio u_(n+1) ÷ u_n, (A1) both ratios 1.0426 and 1.0427.",
        },
        {
          l: "e", sub: "ii", marks: 2, q: m`Find the exact annual growth factor \((1.0105)^{4}\), and hence write down the effective annual interest rate as a percentage, correct to 3 significant figures.`, restate: "Effective annual rate",
          steps: [
            m`\[(1.0105)^{4} = 1.04267\ldots\]`,
            m`\[(1.04267 - 1) \times 100 = 4.27\%\]`,
            "The ratios from the rounded table values (1.0426 and 1.0427) differ slightly because each balance was rounded to the nearest dollar.",
          ],
          final: "1.04267 (5 s.f.), effective rate 4.27%",
          note: "Marks: (A1) 1.04267 (accept 1.0427), (A1) 4.27%.",
        },
      ],
    },
  ],
};

export default paper;
