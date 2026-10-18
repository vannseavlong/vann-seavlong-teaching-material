import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 7: Mixed Summative Mock (45 marks, Section A 26 + Section B 19)
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "summative-mock",
  session: 7,
  topic: "All Summative Topics",
  title: "Summative Assessment: Mixed Mock",
  subtitle: "Summative Revision, Session 7 (full run-through)",
  minutes: 50,
  lessonAnchor: "arithmetic",
  questions: [
    {
      n: 1,
      section: "A",
      ctx: ["A hall has 20 rows of seats. Row 1 has 14 seats and each row has 3 more seats than the row in front of it."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the number of seats in row 20.", restate: "Seats in row 20",
          steps: [m`\[u_n = u_1 + (n-1)d \;\Rightarrow\; u_{20} = 14 + 19(3) = 71\]`],
          final: "71 seats",
          note: "Marks: (M1) formula with d = 3, (A1) 71.",
        },
        {
          l: "b", marks: 2, q: "Find the total number of seats in the hall.", restate: "Total seats",
          steps: [m`\[S_n = \dfrac{n}{2}\left(u_1 + u_n\right) \;\Rightarrow\; S_{20} = \dfrac{20}{2}(14 + 71) = 850\]`],
          final: "850 seats",
          note: "Marks: (M1) substitution into S_n, (A1) 850.",
        },
        {
          l: "c", marks: 1, q: "Each ticket costs $12.50. Calculate the income when all seats are sold.", lines: 1, restate: "Income",
          steps: [m`\[850 \times 12.50 = 10\,625\]`],
          final: "$10,625",
          note: "Marks: (A1) 10625.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: ["The number of bacteria in a sample is recorded at the end of each hour. The first three counts (in thousands) are shown in the table."],
      table: { head: ["Hour", "1", "2", "3"], rows: [["Count (thousands)", "6.4", "9.6", "14.4"]] },
      parts: [
        {
          l: "a", marks: 1, q: "The counts form a geometric sequence. Write down the common ratio.", lines: 1, restate: "Common ratio",
          steps: [m`\[r = \dfrac{9.6}{6.4} = 1.5\]`],
          final: "r = 1.5",
          note: "Marks: (A1) 1.5.",
        },
        {
          l: "b", marks: 2, q: "Find the count in hour 8. Give your answer correct to three significant figures.", restate: "Count in hour 8",
          steps: [m`\[u_n = u_1 r^{\,n-1} \;\Rightarrow\; u_8 = 6.4(1.5)^7 = 109.35\]`],
          final: "109 thousand",
          note: "Marks: (M1) formula with n = 8, (A1) 109.",
        },
        {
          l: "c", marks: 2, q: "Find the first hour in which the count exceeds 1000 thousand.", restate: "First hour above 1000",
          steps: [
            m`\[6.4(1.5)^{n-1} > 1000\]`,
            m`GDC table: \(u_{13} = 830.4\) (too small), \(u_{14} = 1245.6\) (exceeds 1000)`,
          ],
          final: "Hour 14",
          note: "Marks: (M1) inequality or table of values, (A1) 14.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "In this question, give all answers to two decimal places.",
      ctx: ["Dara invests $9,000 for 4 years at a nominal annual interest rate of 3.8%, compounded monthly."],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the value of the investment after 4 years.", restate: "Value after 4 years",
          steps: [
            m`\[FV = 9000\left(1 + \dfrac{3.8}{1200}\right)^{48} = 10\,474.93\]`,
            m`GDC: \(N = 48,\ I\% = 3.8,\ PV = -9000,\ PMT = 0,\ P/Y = C/Y = 12\)`,
          ],
          final: "$10,474.93",
          note: "Marks: (M1) k = 12 and n = 4, (M1) substitution, (A1) 10474.93.",
        },
        {
          l: "b", marks: 2, q: "The same rate compounded annually would give $10,447.97. Find how much more Dara earns with monthly compounding.", restate: "Extra interest",
          steps: [m`\[10\,474.93 - 10\,447.97 = 26.96\]`],
          final: "$26.96",
          note: "Marks: (M1) subtraction, (A1) 26.96. Unrounded values give 26.96 as well.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      ctx: [m`A star is \(4.2 \times 10^{13}\) km from Earth. Light travels at \(3.0 \times 10^{5}\) km per second.`],
      parts: [
        {
          l: "a", marks: 2, q: m`Calculate the time light takes to reach Earth from the star. Give your answer in seconds in the form \(a \times 10^k\), where \(1 \le a < 10\) and \(k \in \mathbb{Z}\).`, restate: "Time in seconds",
          steps: [m`\[\dfrac{4.2 \times 10^{13}}{3.0 \times 10^{5}} = 1.4 \times 10^{8}\]`],
          final: "1.4 × 10^8 s",
          note: "Marks: (M1) distance divided by speed, (A1) 1.4 × 10^8.",
        },
        {
          l: "b", marks: 2, q: "Convert this time to years, using 1 year = 365 days. Give your answer correct to three significant figures.", restate: "Time in years",
          steps: [m`\[1\ \text{year} = 365 \times 24 \times 3600 = 31\,536\,000\ \text{s}\]`, m`\[\dfrac{1.4 \times 10^{8}}{31\,536\,000} = 4.439\ldots\]`],
          final: "4.44 years",
          note: "Marks: (M1) seconds in a year, (A1) 4.44.",
        },
        {
          l: "c", marks: 2, q: "A student states the time as 4 years. Calculate the percentage error, correct to three significant figures.", restate: "Percentage error",
          steps: [m`\[\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100 = \left|\dfrac{4 - 4.4394}{4.4394}\right| \times 100 = 9.90\%\]`, "Use the unrounded value 4.4394 as the exact value."],
          final: "9.90%",
          note: "Marks: (M1) formula with v_E = 4.4394, (A1) 9.90.",
        },
      ],
    },
    {
      n: 5,
      section: "A",
      ctx: ["A rectangular garden has length 12.4 m and width 8.5 m, each measured correct to one decimal place."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the lower and upper bounds of the length.", lines: 1, restate: "Length bounds",
          steps: [m`\[12.35 \le l < 12.45\]`],
          final: "12.35 ≤ l < 12.45 m",
          note: "Marks: (A1) both bounds.",
        },
        {
          l: "b", marks: 2, q: "Find the upper bound of the area of the garden.", restate: "Upper bound of area",
          steps: [m`\[\text{Width} < 8.55,\quad \text{Area} < 12.45 \times 8.55 = 106.4475\]`],
          final: "106.4475 m²",
          note: "Marks: (M1) both upper bounds multiplied, (A1) 106.4475.",
        },
        {
          l: "c", marks: 2, q: "Find the lower bound of the perimeter of the garden.", restate: "Lower bound of perimeter",
          steps: [m`\[P = 2(l + w) \ge 2(12.35 + 8.45) = 41.6\]`],
          final: "41.6 m",
          note: "Marks: (M1) both lower bounds used, (A1) 41.6.",
        },
      ],
    },
    {
      n: 6,
      section: "B",
      instruction: "In this question, give monetary answers to two decimal places unless told otherwise.",
      ctx: [
        "Sokha saves to buy a motorbike. In month 1 she deposits $120. In each later month she deposits $15 more than in the previous month.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 2, q: "Find the amount Sokha deposits in month 12.", restate: "Month 12 deposit",
          steps: [m`\[u_{12} = 120 + 11(15) = 285\]`],
          final: "$285",
          note: "Marks: (M1) formula with d = 15, (A1) 285.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the total amount Sokha deposits in the first 24 months.", restate: "Total, 24 months",
          steps: [m`\[u_{24} = 120 + 23(15) = 465\]`, m`\[S_{24} = \dfrac{24}{2}(120 + 465) = 7020\]`],
          final: "$7,020",
          note: "Marks: (M1) S_n with n = 24, (A1) 7020.",
        },
        {
          l: "a", sub: "iii", marks: 2, q: "Determine the first month in which her deposit is more than $500.", restate: "First month above $500",
          steps: [m`\[120 + 15(n-1) > 500 \;\Rightarrow\; n - 1 > 25.33\ldots\]`, m`Check: \(u_{26} = 495\), \(u_{27} = 510\)`],
          final: "Month 27",
          note: "Marks: (M1) inequality or table, (A1) 27.",
        },
        {
          l: "b", sub: "i", marks: 2, q: "A new motorbike costs $3,200 and loses 15% of its value each year. Find its value after 5 years.", restate: "Value after 5 years",
          steps: [m`\[3200(1 - 0.15)^5 = 3200(0.85)^5 = 1419.86\]`],
          final: "$1,419.86",
          note: "Marks: (M1) 3200(0.85)^5, (A1) 1419.86.",
        },
        {
          l: "b", sub: "ii", marks: 3, q: "Determine the number of complete years after which the value of the motorbike first falls below $1,000.", lines: 4, restate: "Years to fall below $1,000",
          steps: [
            m`\[3200(0.85)^n < 1000 \;\Rightarrow\; 0.85^n < 0.3125\]`,
            m`\[n > \dfrac{\ln 0.3125}{\ln 0.85} = 7.17\ldots\]`,
            m`Check: \(n = 7 \Rightarrow \$1025.85\) (not below), \(n = 8 \Rightarrow \$871.97\)`,
          ],
          final: "8 years",
          note: "Marks: (M1) inequality, (M1) solving or table, (A1) 8.",
        },
        {
          l: "c", sub: "i", marks: 3, q: "Sokha invests the $7,020 from part (a)(ii) for 3 years at a nominal annual rate of 4.8%, compounded quarterly. Calculate the value of the investment after 3 years.", restate: "Value after 3 years",
          steps: [
            m`\[FV = 7020\left(1 + \dfrac{4.8}{400}\right)^{12} = 7020(1.012)^{12} = 8100.34\]`,
            m`GDC: \(N = 12\), \(I\% = 4.8\), \(PV = -7020\), \(PMT = 0\), \(P/Y = C/Y = 4\)`,
          ],
          final: "$8,100.34",
          note: "Marks: (M1) k = 4 and kn = 12, (M1) substitution, (A1) 8100.34.",
        },
        {
          l: "c", sub: "ii", marks: 2, q: "A friend estimates the value in part (c)(i) as $8,500. Find the percentage error in the estimate, correct to three significant figures.", restate: "Percentage error",
          steps: [m`\[\varepsilon = \left|\dfrac{8500 - 8100.34}{8100.34}\right| \times 100 = 4.93\%\]`],
          final: "4.93%",
          note: "Marks: (M1) formula with v_E = 8100.34, (A1) 4.93.",
        },
        {
          l: "d", marks: 3, q: "Sokha rides 18 km to work, measured to the nearest km, at an average speed of 30 km/h, measured to the nearest km/h. Find the upper bound of her journey time in minutes, correct to three significant figures.", restate: "Upper bound of time",
          steps: [
            m`\[\text{time} = \dfrac{\text{distance}}{\text{speed}}\text{, so the maximum time uses the largest distance and the smallest speed}\]`,
            m`\[t < \dfrac{18.5}{29.5} \text{ hours} = 0.6271\ldots\ \text{h}\]`,
            m`\[0.6271 \times 60 = 37.6\ \text{minutes}\]`,
          ],
          final: "37.6 minutes",
          note: "Marks: (M1) upper distance over lower speed, (M1) conversion to minutes, (A1) 37.6.",
        },
      ],
    },
  ],
};

export default paper;
