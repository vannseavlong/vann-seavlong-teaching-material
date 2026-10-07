// ─── AI SL Summative Assessment Revision papers ───────────────────────────────
// Data-driven review papers rendered by src/components/review/DataPaper.tsx at
// /review/ai-sl/[slug]. Each paper = one revision session; every paper exports
// via the shared "Export PDF → Question / Q&A" button.
//
// Text conventions (see RichText in DataPaper.tsx):
//   \( ... \)   inline KaTeX         \[ ... \]  block KaTeX (whole string)
// Plain "$" is a dollar sign. `final` strings are plain text (no LaTeX) because
// they are reused in the masked summary table.

const m = String.raw;

export type ReviewPart = {
  /** Part letter, or "•" for an unlettered question */
  l: string;
  marks: number;
  /** Question statement */
  q: string;
  /** Optional context shown immediately above this part */
  ctx?: string;
  /** Ruled working lines (default 3) */
  lines?: number;
  /** Short label on the answer card */
  restate?: string;
  /** Worked solution — text, or a whole-string \[ ... \] block */
  steps: string[];
  /** Plain-text final answer */
  final: string;
  note?: string;
};

export type ReviewQuestion = {
  n: number;
  /** Context shown before the first part */
  ctx?: string[];
  parts: ReviewPart[];
};

export type AiReviewPaper = {
  slug: string;
  /** Revision session number (1-based) */
  session: number;
  topic: string;
  title: string;
  subtitle: string;
  minutes: number;
  /** Lesson anchor on /ai/unit-1/lesson */
  lessonAnchor: string;
  questions: ReviewQuestion[];
};

export const paperMarks = (p: AiReviewPaper) =>
  p.questions.reduce((s, q) => s + q.parts.reduce((t, x) => t + x.marks, 0), 0);

export const questionMarks = (q: ReviewQuestion) =>
  q.parts.reduce((t, x) => t + x.marks, 0);

// ═══════════════════════════════════════════════════════════════════════════════
// Session 1 — Arithmetic Sequences & Series
// ═══════════════════════════════════════════════════════════════════════════════

const arithmetic: AiReviewPaper = {
  slug: "arithmetic",
  session: 1,
  topic: "Arithmetic Sequences & Series",
  title: "Arithmetic Sequences and Series",
  subtitle: "Summative Revision — Session 1",
  minutes: 45,
  lessonAnchor: "arithmetic",
  questions: [
    {
      n: 1,
      ctx: [m`The first three terms of an arithmetic sequence are \(7,\ 11,\ 15,\ \dots\)`],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the common difference.", lines: 1,
          restate: "Common difference",
          steps: [m`\[d = 11 - 7 = 4\]`],
          final: "d = 4",
        },
        {
          l: "b", marks: 2, q: m`Find the 20th term, \(u_{20}\).`, restate: "20th term",
          steps: [m`\[u_n = u_1 + (n-1)d\]`, m`\[u_{20} = 7 + 19(4) = 7 + 76 = 83\]`],
          final: "u₂₀ = 83",
        },
        {
          l: "c", marks: 3, q: "Which term of the sequence is equal to 123?", restate: "Position of 123",
          steps: [
            m`\[7 + 4(n-1) = 123\]`,
            m`\[4(n-1) = 116 \;\Rightarrow\; n - 1 = 29\]`,
            m`\[n = 30\]`,
          ],
          final: "The 30th term",
        },
      ],
    },
    {
      n: 2,
      ctx: [
        "Dara is training for a 10 km race. In week 1 she runs 2 km in total. In each following week she runs 0.5 km more than the week before.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the distance Dara runs in week 10.", restate: "Week 10",
          steps: [m`\[u_{10} = 2 + 9(0.5) = 6.5\]`],
          final: "6.5 km",
        },
        {
          l: "b", marks: 2, q: "Find the total distance Dara runs in the first 12 weeks.", restate: "Total, 12 weeks",
          steps: [
            m`\[S_n = \dfrac{n}{2}\left(2u_1 + (n-1)d\right)\]`,
            m`\[S_{12} = \dfrac{12}{2}\left(2(2) + 11(0.5)\right) = 6(9.5) = 57\]`,
          ],
          final: "57 km",
        },
        {
          l: "c", marks: 3, q: "In which week does her weekly distance first exceed 15 km?", restate: "First week above 15 km",
          steps: [
            m`\[2 + 0.5(n-1) > 15\]`,
            m`\[0.5(n-1) > 13 \;\Rightarrow\; n - 1 > 26 \;\Rightarrow\; n > 27\]`,
            "Smallest whole number of weeks:",
            m`\[n = 28\]`,
          ],
          final: "Week 28",
          note: "Check: u₂₇ = 2 + 26(0.5) = 15, which is not greater than 15 — so week 27 does not qualify.",
        },
      ],
    },
    {
      n: 3,
      ctx: [m`An arithmetic sequence has \(u_3 = 17\) and \(u_8 = 42\).`],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the common difference \(d\) and the first term \(u_1\).`, restate: "d and u₁",
          steps: [
            m`\[u_8 - u_3 = 5d = 42 - 17 = 25 \;\Rightarrow\; d = 5\]`,
            m`\[u_3 = u_1 + 2d \;\Rightarrow\; 17 = u_1 + 10 \;\Rightarrow\; u_1 = 7\]`,
          ],
          final: "d = 5, u₁ = 7",
        },
        {
          l: "b", marks: 2, q: m`Find \(S_{20}\), the sum of the first 20 terms.`, restate: "S₂₀",
          steps: [m`\[S_{20} = \dfrac{20}{2}\left(2(7) + 19(5)\right) = 10(14 + 95) = 1090\]`],
          final: "S₂₀ = 1090",
        },
        {
          l: "c", marks: 3, q: m`Find the least value of \(n\) for which \(S_n > 2000\).`, lines: 4, restate: "Least n",
          steps: [
            m`\[S_n = \dfrac{n}{2}\left(14 + 5(n-1)\right) = \dfrac{n(5n + 9)}{2} > 2000\]`,
            "On the GDC, solve (or tabulate) the expression:",
            m`\[S_{27} = 1944 \quad (\le 2000) \qquad S_{28} = 2086 \quad (> 2000)\]`,
          ],
          final: "n = 28",
        },
      ],
    },
    {
      n: 4,
      ctx: [
        "A theatre has 25 rows of seats. Row 1 has 18 seats and each row has 3 more seats than the row in front of it.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the number of seats in the last row.", restate: "Seats in row 25",
          steps: [m`\[u_{25} = 18 + 24(3) = 90\]`],
          final: "90 seats",
        },
        {
          l: "b", marks: 2, q: "Find the total number of seats in the theatre.", restate: "Total seats",
          steps: [m`\[S_{25} = \dfrac{25}{2}(18 + 90) = 12.5 \times 108 = 1350\]`],
          final: "1350 seats",
        },
        {
          l: "c", marks: 1, q: "Every seat is sold at $12. Find the total ticket income.", lines: 1, restate: "Income",
          steps: [m`\[1350 \times 12 = 16\,200\]`],
          final: "$16,200",
        },
        {
          l: "d", marks: 3, q: "A smaller hall is built with the same seating pattern. Find the least number of rows needed for at least 600 seats.", lines: 4, restate: "Least rows for 600 seats",
          steps: [
            m`\[S_n = \dfrac{n}{2}\left(36 + 3(n-1)\right) \ge 600\]`,
            m`\[S_{15} = 585 \;(<600) \qquad S_{16} = 648 \;(\ge 600)\]`,
          ],
          final: "16 rows",
        },
      ],
    },
    {
      n: 5,
      ctx: [
        "Sophea starts a job on a salary of $24,000 in year 1. Her salary increases by $1,500 each year.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find her salary in year 8.", restate: "Year 8 salary",
          steps: [m`\[u_8 = 24\,000 + 7(1500) = 34\,500\]`],
          final: "$34,500",
        },
        {
          l: "b", marks: 2, q: "Find her total earnings over the first 10 years.", restate: "Total, 10 years",
          steps: [m`\[S_{10} = \dfrac{10}{2}\left(2(24\,000) + 9(1500)\right) = 5(61\,500) = 307\,500\]`],
          final: "$307,500",
        },
        {
          l: "c", marks: 2, q: "In which year does her salary first exceed $40,000?", restate: "First year above $40,000",
          steps: [
            m`\[24\,000 + 1500(n-1) > 40\,000 \;\Rightarrow\; n - 1 > 10.67\]`,
            m`\[n = 12 \quad (u_{12} = \$40\,500)\]`,
          ],
          final: "Year 12",
        },
      ],
    },
    {
      n: 6,
      parts: [
        {
          l: "•", marks: 3, q: m`Evaluate \(\displaystyle\sum_{k=1}^{15}(3k + 2)\).`, restate: "Sigma notation",
          steps: [
            m`The terms form an arithmetic sequence: \(u_1 = 5\), \(d = 3\), \(u_{15} = 47\).`,
            m`\[S_{15} = \dfrac{15}{2}(5 + 47) = 7.5 \times 52 = 390\]`,
          ],
          final: "390",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// Session 2 — Geometric Sequences & Series
// ═══════════════════════════════════════════════════════════════════════════════

const geometric: AiReviewPaper = {
  slug: "geometric",
  session: 2,
  topic: "Geometric Sequences & Series",
  title: "Geometric Sequences and Series",
  subtitle: "Summative Revision — Session 2",
  minutes: 50,
  lessonAnchor: "geometric",
  questions: [
    {
      n: 1,
      ctx: [m`The first three terms of a geometric sequence are \(5,\ 15,\ 45,\ \dots\)`],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the common ratio.", lines: 1, restate: "Common ratio",
          steps: [m`\[r = \dfrac{15}{5} = 3\]`],
          final: "r = 3",
        },
        {
          l: "b", marks: 2, q: m`Find the 8th term, \(u_8\).`, restate: "8th term",
          steps: [m`\[u_n = u_1 r^{\,n-1} \;\Rightarrow\; u_8 = 5(3)^7 = 5 \times 2187 = 10\,935\]`],
          final: "u₈ = 10 935",
        },
        {
          l: "c", marks: 3, q: "Find the first term of the sequence that is greater than 1 000 000.", lines: 4, restate: "First term above 10⁶",
          steps: [
            m`\[5(3)^{n-1} > 1\,000\,000 \;\Rightarrow\; 3^{n-1} > 200\,000\]`,
            "Use the GDC (table or solver) — or take logarithms:",
            m`\[n - 1 > \dfrac{\ln 200\,000}{\ln 3} = 11.1 \;\Rightarrow\; n - 1 = 12 \;\Rightarrow\; n = 13\]`,
            m`\[u_{13} = 5(3)^{12} = 2\,657\,205\]`,
          ],
          final: "u₁₃ = 2 657 205",
          note: "Check: u₁₂ = 885 735 is below 1 000 000, so u₁₃ is the first term above it.",
        },
      ],
    },
    {
      n: 2,
      ctx: [m`A geometric sequence has \(u_2 = 12\) and \(u_5 = 96\).`],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the common ratio \(r\) and the first term \(u_1\).`, restate: "r and u₁",
          steps: [
            m`\[\dfrac{u_5}{u_2} = r^3 = \dfrac{96}{12} = 8 \;\Rightarrow\; r = 2\]`,
            m`\[u_1 = \dfrac{u_2}{r} = \dfrac{12}{2} = 6\]`,
          ],
          final: "r = 2, u₁ = 6",
        },
        {
          l: "b", marks: 2, q: m`Find \(S_{10}\).`, restate: "S₁₀",
          steps: [
            m`\[S_n = \dfrac{u_1(r^n - 1)}{r - 1} \;\Rightarrow\; S_{10} = \dfrac{6(2^{10} - 1)}{2 - 1} = 6 \times 1023 = 6138\]`,
          ],
          final: "S₁₀ = 6138",
        },
        {
          l: "c", marks: 2, q: m`Find the least \(n\) for which \(S_n > 10\,000\).`, restate: "Least n",
          steps: [
            m`\[6(2^n - 1) > 10\,000 \;\Rightarrow\; 2^n > 1667.7\]`,
            m`\[2^{10} = 1024 \;(\text{too small}), \qquad 2^{11} = 2048 \;\checkmark\]`,
          ],
          final: "n = 11",
        },
      ],
    },
    {
      n: 3,
      ctx: [
        "A ball is dropped from a height of 3.0 m. After each bounce it rises to 80% of the height of the previous bounce.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the height reached after the 4th bounce, to 3 significant figures.", restate: "Height after bounce 4",
          steps: [
            m`The heights after each bounce form a geometric sequence with \(r = 0.8\).`,
            m`\[3.0 \times 0.8^4 = 1.2288 \approx 1.23\ \text{m}\]`,
          ],
          final: "1.23 m",
        },
        {
          l: "b", marks: 3, q: "After which bounce does the ball first rise to a height of less than 0.5 m?", lines: 4, restate: "First bounce below 0.5 m",
          steps: [
            m`\[3(0.8)^n < 0.5 \;\Rightarrow\; 0.8^n < 0.1667\]`,
            m`\[n > \dfrac{\ln(0.1667)}{\ln(0.8)} = 8.03 \;\Rightarrow\; n = 9\]`,
          ],
          final: "After the 9th bounce",
          note: "Check: after bounce 8 the height is 0.503 m (still above 0.5); after bounce 9 it is 0.403 m.",
        },
        {
          l: "c", marks: 3, q: "Find the sum of the heights reached after the first 6 bounces.", restate: "Sum of 6 bounce heights",
          steps: [
            m`First bounce height \(u_1 = 3(0.8) = 2.4\), \(r = 0.8\), \(n = 6\):`,
            m`\[S_6 = \dfrac{2.4\left(1 - 0.8^6\right)}{1 - 0.8} = \dfrac{2.4(0.737856)}{0.2} = 8.854\ldots\]`,
          ],
          final: "≈ 8.85 m",
        },
      ],
    },
    {
      n: 4,
      ctx: ["A culture starts with 500 bacteria. The population grows by 12% every hour."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the common ratio of this geometric sequence.", lines: 1, restate: "Common ratio",
          steps: [m`\[r = 1 + \dfrac{12}{100} = 1.12\]`],
          final: "r = 1.12",
        },
        {
          l: "b", marks: 2, q: "Find the number of bacteria after 6 hours, to the nearest whole number.", restate: "After 6 hours",
          steps: [m`\[500(1.12)^6 = 986.91\ldots\]`],
          final: "987 bacteria",
        },
        {
          l: "c", marks: 3, q: "After how many whole hours does the population first exceed 2000?", lines: 4, restate: "First hour above 2000",
          steps: [
            m`\[500(1.12)^n > 2000 \;\Rightarrow\; 1.12^n > 4\]`,
            m`\[n > \dfrac{\ln 4}{\ln 1.12} = 12.23\]`,
            m`\[n = 13 \quad (500 \times 1.12^{13} = 2182)\]`,
          ],
          final: "13 hours",
        },
      ],
    },
    {
      n: 5,
      ctx: [m`The sequence \(4,\ 6,\ 9,\ \dots\) is geometric.`],
      parts: [
        {
          l: "a", marks: 2, q: "Show that the sequence is geometric and find its common ratio.", restate: "Common ratio",
          steps: [m`\[\dfrac{6}{4} = 1.5 \qquad \dfrac{9}{6} = 1.5\]`, "Equal ratios, so the sequence is geometric with r = 1.5."],
          final: "r = 1.5",
        },
        {
          l: "b", marks: 2, q: m`Find \(u_6\).`, restate: "6th term",
          steps: [m`\[u_6 = 4(1.5)^5 = 30.375\]`],
          final: "u₆ = 30.375",
        },
        {
          l: "c", marks: 2, q: m`Find \(S_8\), to 3 significant figures.`, restate: "S₈",
          steps: [m`\[S_8 = \dfrac{4\left(1.5^8 - 1\right)}{1.5 - 1} = 8(24.6289) = 197.03\ldots\]`],
          final: "S₈ ≈ 197",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "A company offers a temporary worker two ways to be paid over 14 days.",
        "Option A: $50 on day 1, then $5 more each day than the day before. Option B: $2 on day 1, then double the previous day's pay each day.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the total paid under Option A over 14 days.", restate: "Option A total",
          steps: [m`\[S_{14} = \dfrac{14}{2}\left(2(50) + 13(5)\right) = 7(165) = 1155\]`],
          final: "$1,155",
        },
        {
          l: "b", marks: 2, q: "Find the total paid under Option B over 14 days.", restate: "Option B total",
          steps: [m`\[S_{14} = \dfrac{2\left(2^{14} - 1\right)}{2 - 1} = 2(16\,383) = 32\,766\]`],
          final: "$32,766",
        },
        {
          l: "c", marks: 2, q: "On which day does Option B's daily pay first exceed Option A's daily pay?", lines: 4, restate: "Crossover day",
          steps: [
            m`Day \(n\): A pays \(45 + 5n\), B pays \(2^n\).`,
            m`\[n = 6:\; 64 < 75 \qquad n = 7:\; 128 > 80\]`,
          ],
          final: "Day 7",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// Session 3 — Financial Mathematics
// ═══════════════════════════════════════════════════════════════════════════════

const financial: AiReviewPaper = {
  slug: "financial",
  session: 3,
  topic: "Financial Mathematics",
  title: "Financial Mathematics",
  subtitle: "Summative Revision — Session 3",
  minutes: 50,
  lessonAnchor: "financial-mathematics",
  questions: [
    {
      n: 1,
      ctx: ["Nimol invests $12,000 for 5 years at a nominal annual interest rate of 3.6%."],
      parts: [
        {
          l: "a", marks: 3, q: "The interest is compounded monthly. Find the value of the investment after 5 years.", restate: "Monthly compounding",
          steps: [
            m`\[FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn}\quad\text{with}\quad k = 12,\; n = 5\]`,
            m`\[FV = 12\,000\left(1 + \dfrac{3.6}{1200}\right)^{60} = 12\,000(1.003)^{60}\]`,
            m`GDC: \(N = 60,\ I\% = 3.6,\ PV = -12\,000,\ PMT = 0,\ P/Y = C/Y = 12\)`,
          ],
          final: "$14,362.74",
        },
        {
          l: "b", marks: 1, q: "Find the interest earned.", lines: 1, restate: "Interest earned",
          steps: [m`\[14\,362.74 - 12\,000 = 2362.74\]`],
          final: "$2,362.74",
        },
        {
          l: "c", marks: 3, q: "Had the interest been compounded annually instead, how much less would Nimol have after 5 years?", restate: "Annual vs monthly",
          steps: [
            m`\[FV = 12\,000(1.036)^5 = 14\,321.22\]`,
            m`\[14\,362.74 - 14\,321.22 = 41.52\]`,
          ],
          final: "$41.52 less",
        },
      ],
    },
    {
      n: 2,
      ctx: ["Rotha invests $8,000 at 4.5% per year, compounded annually."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the value of the investment after 6 years.", restate: "Value after 6 years",
          steps: [m`\[FV = 8000(1.045)^6 = 10\,418.08\]`],
          final: "$10,418.08",
        },
        {
          l: "b", marks: 3, q: "Find the number of complete years before the investment first exceeds $12,000.", lines: 4, restate: "Years to exceed $12,000",
          steps: [
            m`\[8000(1.045)^n > 12\,000 \;\Rightarrow\; 1.045^n > 1.5\]`,
            m`\[n > \dfrac{\ln 1.5}{\ln 1.045} = 9.21\]`,
            m`GDC check: \(n = 9 \Rightarrow \$11\,888.76\) (not enough); \(n = 10 \Rightarrow \$12\,423.76\) ✓`,
          ],
          final: "10 years",
        },
      ],
    },
    {
      n: 3,
      ctx: ["A new car costs $26,000. It depreciates at 14% of its value each year."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the value of the car after 4 years.", restate: "Value after 4 years",
          steps: [m`\[FV = 26\,000\left(1 - \dfrac{14}{100}\right)^4 = 26\,000(0.86)^4 = 14\,222.21\]`],
          final: "$14,222.21",
        },
        {
          l: "b", marks: 2, q: "Find the total percentage of its value the car has lost after 4 years, to 3 significant figures.", restate: "% lost",
          steps: [m`\[\dfrac{26\,000 - 14\,222.21}{26\,000} \times 100 = 45.3\%\]`, "Or: 1 − 0.86⁴ = 0.453."],
          final: "45.3%",
        },
        {
          l: "c", marks: 3, q: "After how many complete years is the car first worth less than $10,000?", lines: 4, restate: "Years to fall below $10,000",
          steps: [
            m`\[26\,000(0.86)^n < 10\,000 \;\Rightarrow\; 0.86^n < 0.3846\]`,
            m`\[n > \dfrac{\ln 0.3846}{\ln 0.86} = 6.34 \;\Rightarrow\; n = 7\]`,
            m`Check: \(n = 6 \Rightarrow \$10\,518.75\); \(n = 7 \Rightarrow \$9046.12\) ✓`,
          ],
          final: "7 years",
        },
      ],
    },
    {
      n: 4,
      ctx: ["Vanna invests $5,000 in an account paying r% per year, compounded annually. After 6 years it is worth $6,500."],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the value of \(r\), to 3 significant figures.`, lines: 4, restate: "Interest rate",
          steps: [
            m`\[5000\left(1 + \dfrac{r}{100}\right)^6 = 6500 \;\Rightarrow\; \left(1 + \dfrac{r}{100}\right)^6 = 1.3\]`,
            m`\[1 + \dfrac{r}{100} = 1.3^{1/6} = 1.0447\]`,
            m`GDC: \(N = 6,\ PV = -5000,\ PMT = 0,\ FV = 6500,\ P/Y = C/Y = 1\), solve for \(I\%\).`,
          ],
          final: "r ≈ 4.47",
        },
        {
          l: "b", marks: 3, q: "A different account pays simple interest and also grows $5,000 to $6,500 in 6 years. Find its annual simple interest rate.", restate: "Simple interest rate",
          steps: [
            m`\[I = 1500 = \dfrac{5000 \times R \times 6}{100} \;\Rightarrow\; R = \dfrac{1500 \times 100}{30\,000} = 5\]`,
          ],
          final: "R = 5%",
          note: "The simple-interest rate must be higher (5% vs 4.47%) to match the compound account — compounding is doing extra work.",
        },
      ],
    },
    {
      n: 5,
      ctx: ["A café's rent is $450 per month. The landlord raises the rent by 3.2% every year."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the monthly rent after 5 years.", restate: "Rent after 5 years",
          steps: [m`\[450(1.032)^5 = 526.76\ldots\]`],
          final: "$526.76",
        },
        {
          l: "b", marks: 3, q: "Find the total extra the café pays per year at the end of 5 years compared with now.", restate: "Extra per year",
          steps: [
            m`\[(526.76 - 450) \times 12 = 76.76 \times 12 = 921.1\ldots\]`,
            "Using the unrounded value 526.7578… gives 921.09.",
          ],
          final: "≈ $921.09 per year",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "Tevy invests $2,500 in an account that pays a nominal annual interest rate of r%, compounded quarterly. After 5 years the account contains $3,100.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Write down the values she should enter in the GDC Finance (TVM) app to find r.", lines: 4, restate: "TVM set-up",
          steps: [m`\[N = 20,\quad PV = -2500,\quad PMT = 0,\quad FV = 3100,\quad P/Y = 4,\quad C/Y = 4\]`, "Solve for I%."],
          final: "N = 20, PV = −2500, PMT = 0, FV = 3100, P/Y = C/Y = 4",
        },
        {
          l: "b", marks: 2, q: m`Hence find \(r\), to 3 significant figures.`, lines: 2, restate: "Value of r",
          steps: [m`\[\left(1 + \dfrac{r}{400}\right)^{20} = 1.24 \;\Rightarrow\; r = 400\left(1.24^{1/20} - 1\right) = 4.325\ldots\]`],
          final: "r ≈ 4.33",
        },
      ],
    },
    {
      n: 7,
      ctx: [
        "Maly changes 800 USD into Thai baht (THB). The exchange rate is 1 USD = 36.4 THB. The bank charges a 1.5% commission on the USD amount before converting.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Calculate the commission in USD.", restate: "Commission",
          steps: [m`\[800 \times 0.015 = 12\]`],
          final: "12 USD",
        },
        {
          l: "b", marks: 2, q: "Calculate the number of baht Maly receives.", restate: "Baht received",
          steps: [m`\[(800 - 12) \times 36.4 = 788 \times 36.4 = 28\,683.2\]`],
          final: "28 683.20 THB",
        },
        {
          l: "c", marks: 2, q: "Maly returns home with 5000 THB and changes it back to USD at 1 USD = 37.1 THB, with no commission. Find the USD received to 2 decimal places.", restate: "Back to USD",
          steps: [m`\[5000 \div 37.1 = 134.77\]`],
          final: "134.77 USD",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// Session 4 — Rounding & Estimation
// ═══════════════════════════════════════════════════════════════════════════════

const rounding: AiReviewPaper = {
  slug: "rounding",
  session: 4,
  topic: "Rounding & Estimation",
  title: "Rounding",
  subtitle: "Summative Revision — Session 4",
  minutes: 35,
  lessonAnchor: "rounding",
  questions: [
    {
      n: 1,
      ctx: ["Round each number as instructed."],
      parts: [
        { l: "a", marks: 1, q: m`\(48.2759\) to 2 decimal places.`, lines: 1, restate: "2 d.p.", steps: [m`The third decimal digit is 5, so round up: \(48.27\underline{5}9 \to 48.28\).`], final: "48.28" },
        { l: "b", marks: 1, q: m`\(48.2759\) to 3 significant figures.`, lines: 1, restate: "3 s.f.", steps: [m`The 4th s.f. is 7, so round up: \(48.3\).`], final: "48.3" },
        { l: "c", marks: 1, q: m`\(48.2759\) to the nearest 10.`, lines: 1, restate: "Nearest 10", steps: [m`The units digit is 8, so round up: \(50\).`], final: "50" },
        { l: "d", marks: 1, q: m`\(0.004068\) to 2 significant figures.`, lines: 1, restate: "2 s.f.", steps: [m`Leading zeros are not significant. The significant digits are 4, 0, 6, 8 → \(0.0041\).`], final: "0.0041" },
        { l: "e", marks: 1, q: m`\(5972\) to 2 significant figures.`, lines: 1, restate: "2 s.f.", steps: [m`\(5972 \to 6000\) (keep the place-value zeros).`], final: "6000" },
      ],
    },
    {
      n: 2,
      parts: [
        { l: "a", marks: 1, q: "Write 45 600 000 in the form a × 10ᵏ where 1 ≤ a < 10 and k is an integer.", lines: 1, restate: "Standard form", steps: [m`\[4.56 \times 10^{7}\]`], final: "4.56 × 10⁷" },
        { l: "b", marks: 1, q: "Write 0.00032 in the form a × 10ᵏ.", lines: 1, restate: "Standard form", steps: [m`\[3.2 \times 10^{-4}\]`], final: "3.2 × 10⁻⁴" },
        {
          l: "c", marks: 2, q: m`Calculate \((3.2 \times 10^{5}) \times (4 \times 10^{-2})\), giving your answer in standard form.`, restate: "Product",
          steps: [m`\[3.2 \times 4 = 12.8 \quad\text{and}\quad 10^{5} \times 10^{-2} = 10^{3}\]`, m`\[12.8 \times 10^{3} = 1.28 \times 10^{4}\]`],
          final: "1.28 × 10⁴",
        },
        {
          l: "d", marks: 2, q: m`Calculate \(\dfrac{6 \times 10^{8}}{2.5 \times 10^{3}}\), giving your answer in standard form.`, restate: "Quotient",
          steps: [m`\[\dfrac{6}{2.5} = 2.4 \quad\text{and}\quad 10^{8} \div 10^{3} = 10^{5}\]`],
          final: "2.4 × 10⁵",
        },
      ],
    },
    {
      n: 3,
      ctx: ["A rectangular garden has length 12.4 m and width 7.85 m."],
      parts: [
        { l: "a", marks: 1, q: "Calculate the exact area.", lines: 1, restate: "Exact area", steps: [m`\[12.4 \times 7.85 = 97.34\]`], final: "97.34 m²" },
        { l: "b", marks: 1, q: "Write the area to 3 significant figures.", lines: 1, restate: "3 s.f.", steps: [m`\(97.34 \to 97.3\)`], final: "97.3 m²" },
        {
          l: "c", marks: 3, q: "Sambo estimates the area by first rounding each dimension to 1 significant figure. Find his estimate and the percentage error in it.", lines: 4, restate: "Estimate and % error",
          steps: [
            m`Estimate: \(10 \times 8 = 80\)`,
            m`\[\%\text{ error} = \left|\dfrac{80 - 97.34}{97.34}\right| \times 100 = 17.8\%\]`,
          ],
          final: "Estimate 80 m², error ≈ 17.8%",
        },
      ],
    },
    {
      n: 4,
      ctx: ["Sreyneang invests $2,000 at 3.75% per year, compounded annually, for 8 years."],
      parts: [
        { l: "a", marks: 2, q: "Find the future value, to the nearest cent.", restate: "Exact future value", steps: [m`\[FV = 2000(1.0375)^8 = 2684.94\]`], final: "$2,684.94" },
        {
          l: "b", marks: 2, q: "Sreyneang rounds the multiplier 1.0375 to 1.04 before raising it to the power. Find the value she gets.", restate: "Early rounding", steps: [m`\[2000(1.04)^8 = 2737.14\]`], final: "$2,737.14",
        },
        {
          l: "c", marks: 2, q: "Find the percentage error caused by rounding early, to 3 significant figures. Comment briefly.", restate: "% error from early rounding",
          steps: [m`\[\left|\dfrac{2737.14 - 2684.94}{2684.94}\right| \times 100 = 1.94\%\]`, "Rounding a multiplier early is magnified by the power — keep full calculator values until the final step."],
          final: "≈ 1.94%",
        },
      ],
    },
    {
      n: 5,
      parts: [
        {
          l: "a", marks: 2, q: m`Estimate the value of \(\dfrac{48.3 \times 9.87}{2.03}\) by rounding each number to 1 significant figure.`, restate: "Estimate",
          steps: [m`\[\dfrac{50 \times 10}{2} = 250\]`], final: "250",
        },
        {
          l: "b", marks: 3, q: "Calculate the exact value, and find the percentage error of your estimate to 3 significant figures.", lines: 4, restate: "Exact value and % error",
          steps: [
            m`\[\dfrac{48.3 \times 9.87}{2.03} = 234.84\ldots\]`,
            m`\[\left|\dfrac{250 - 234.84}{234.84}\right| \times 100 = 6.46\%\]`,
          ],
          final: "Exact ≈ 234.8, error ≈ 6.46%",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "A floor needs 37.4 m² of tiles. Tiles are sold only in packs, and each pack covers 2.5 m². A pack costs $18.75.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the number of packs Ravy must buy.", restate: "Packs needed",
          steps: [m`\[37.4 \div 2.5 = 14.96\]`, "Tiles are sold in whole packs and 14 packs would leave the floor short, so round UP to the next whole number — whatever the decimal part."],
          final: "15 packs",
        },
        { l: "b", marks: 1, q: "Find the total cost.", lines: 1, restate: "Total cost", steps: [m`\[15 \times 18.75 = 281.25\]`], final: "$281.25" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// Session 5 — Upper & Lower Bounds
// ═══════════════════════════════════════════════════════════════════════════════

const bounds: AiReviewPaper = {
  slug: "bounds",
  session: 5,
  topic: "Upper & Lower Bounds",
  title: "Upper and Lower Bounds",
  subtitle: "Summative Revision — Session 5",
  minutes: 45,
  lessonAnchor: "bounds",
  questions: [
    {
      n: 1,
      ctx: ["Each measurement is rounded as stated. Write down the lower bound and the upper bound."],
      parts: [
        { l: "a", marks: 1, q: "A length of 8 cm, to the nearest cm.", lines: 1, restate: "Nearest cm", steps: [m`\[7.5 \le x < 8.5\]`], final: "7.5 ≤ x < 8.5" },
        { l: "b", marks: 1, q: "A length of 4.2 cm, to 1 decimal place.", lines: 1, restate: "1 d.p.", steps: [m`\[4.15 \le x < 4.25\]`], final: "4.15 ≤ x < 4.25" },
        { l: "c", marks: 1, q: "A mass of 350 g, to 2 significant figures.", lines: 1, restate: "2 s.f.", steps: [m`2 s.f. means the nearest 10 g, so \(\pm 5\):`, m`\[345 \le x < 355\]`], final: "345 ≤ x < 355" },
        { l: "d", marks: 1, q: "A thickness of 0.0072 m, to 2 significant figures.", lines: 1, restate: "2 s.f.", steps: [m`The last digit is the 4th decimal place, so \(\pm 0.00005\):`, m`\[0.00715 \le x < 0.00725\]`], final: "0.00715 ≤ x < 0.00725" },
        { l: "e", marks: 1, q: "A crowd of 1200 people, to the nearest 100.", lines: 1, restate: "Nearest 100", steps: [m`\[1150 \le x < 1250\]`], final: "1150 ≤ x < 1250" },
        { l: "f", marks: 1, q: "A mass of 65 kg, to the nearest 5 kg.", lines: 1, restate: "Nearest 5 kg", steps: [m`Half of 5 is 2.5:`, m`\[62.5 \le x < 67.5\]`], final: "62.5 ≤ x < 67.5" },
      ],
    },
    {
      n: 2,
      ctx: ["A rectangle has length 14.2 cm and width 8.6 cm, each measured to 1 decimal place."],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the lower and upper bounds of the length and of the width.", restate: "Bounds of L and W",
          steps: [m`\[14.15 \le L < 14.25 \qquad 8.55 \le W < 8.65\]`],
          final: "L: 14.15–14.25; W: 8.55–8.65",
        },
        {
          l: "b", marks: 2, q: "Find the lower and upper bounds of the area.", restate: "Bounds of area",
          steps: [
            m`Lower: \(14.15 \times 8.55 = 120.9825\)`,
            m`Upper: \(14.25 \times 8.65 = 123.2625\)`,
          ],
          final: "120.98… ≤ A < 123.26…",
        },
        {
          l: "c", marks: 2, q: "Write the area to a suitable degree of accuracy, justifying your answer.", restate: "Justified accuracy",
          steps: [
            m`To 3 s.f.: lower \(\to 121\), upper \(\to 123\) — they disagree.`,
            m`To 2 s.f.: lower \(\to 120\), upper \(\to 120\) — they agree.`,
          ],
          final: "120 cm² (2 s.f.)",
        },
      ],
    },
    {
      n: 3,
      ctx: [
        "Sokun runs 100 m in 12.4 s. The distance is measured to the nearest metre and the time to 1 decimal place. Speed = distance ÷ time.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the bounds for the distance and for the time.", restate: "Bounds of d and t",
          steps: [m`\[99.5 \le d < 100.5 \qquad 12.35 \le t < 12.45\]`],
          final: "d: 99.5–100.5; t: 12.35–12.45",
        },
        {
          l: "b", marks: 2, q: "Find the upper and lower bounds of her speed in m/s.", restate: "Bounds of speed",
          steps: [
            "For the largest quotient, use the largest numerator and the smallest denominator:",
            m`\[\text{upper} = \dfrac{100.5}{12.35} = 8.1377\ldots\]`,
            m`\[\text{lower} = \dfrac{99.5}{12.45} = 7.9920\ldots\]`,
          ],
          final: "7.992 ≤ speed < 8.138",
        },
        {
          l: "c", marks: 2, q: "Write her speed to a suitable degree of accuracy.", restate: "Justified accuracy",
          steps: [m`2 s.f.: \(8.1\) and \(8.0\) — disagree. 1 s.f.: \(8\) and \(8\) — agree.`],
          final: "8 m/s (1 s.f.)",
        },
      ],
    },
    {
      n: 4,
      ctx: ["Rope A has length 3.4 m and rope B has length 1.8 m, each to 1 decimal place."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the lower and upper bounds of the total length A + B.", restate: "Bounds of A + B",
          steps: [m`\[\text{lower} = 3.35 + 1.75 = 5.10 \qquad \text{upper} = 3.45 + 1.85 = 5.30\]`],
          final: "5.10 ≤ A + B < 5.30",
        },
        {
          l: "b", marks: 2, q: "Find the greatest possible value of A − B.", restate: "Greatest A − B",
          steps: [m`Biggest take-away: largest A, smallest B:`, m`\[3.45 - 1.75 = 1.70\]`],
          final: "1.70 m",
        },
        {
          l: "c", marks: 1, q: "Find the least possible value of A − B.", lines: 2, restate: "Least A − B",
          steps: [m`Smallest A, largest B: \(3.35 - 1.85 = 1.50\)`],
          final: "1.50 m",
        },
      ],
    },
    {
      n: 5,
      ctx: ["A circle has radius 6.5 cm, measured to 1 decimal place."],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the lower and upper bounds of its area, \(A = \pi r^2\).`, restate: "Bounds of area",
          steps: [
            m`\[6.45 \le r < 6.55\]`,
            m`\[\text{lower} = \pi(6.45)^2 = 130.698\ldots \qquad \text{upper} = \pi(6.55)^2 = 134.782\ldots\]`,
          ],
          final: "130.70 ≤ A < 134.78",
        },
        {
          l: "b", marks: 2, q: "Hence write the area to the greatest degree of accuracy that is justified.", restate: "Justified accuracy",
          steps: [m`3 s.f.: \(131\) vs \(135\) — disagree. 2 s.f.: \(130\) vs \(130\) — agree.`],
          final: "130 cm² (2 s.f.)",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "A lift has a maximum safe load of 600 kg. Eight passengers get in. The mass of each passenger is 75 kg, to the nearest kg.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the greatest possible total mass of the eight passengers.", restate: "Greatest total mass",
          steps: [m`\[8 \times 75.5 = 604\ \text{kg}\]`],
          final: "604 kg",
        },
        {
          l: "b", marks: 2, q: "Is the lift definitely overloaded? Explain.", restate: "Conclusion",
          steps: [
            m`Lower bound of the total: \(8 \times 74.5 = 596\) kg.`,
            m`The total lies between 596 kg and 604 kg, so it may be above or below 600 kg.`,
          ],
          final: "No — it might be overloaded, but not for certain",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// Session 6 — Percentage Error
// ═══════════════════════════════════════════════════════════════════════════════

const percentageError: AiReviewPaper = {
  slug: "percentage-error",
  session: 6,
  topic: "Percentage Error",
  title: "Percentage Error",
  subtitle: "Summative Revision — Session 6",
  minutes: 40,
  lessonAnchor: "percentage-error",
  questions: [
    {
      n: 1,
      parts: [
        {
          l: "a", marks: 2, q: "A reporter estimates a crowd at 6000. The true attendance was 5480. Find the percentage error, to 3 significant figures.", restate: "Crowd estimate",
          steps: [
            m`\[\%\text{ error} = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100 = \left|\dfrac{6000 - 5480}{5480}\right| \times 100\]`,
            m`\[= \dfrac{520}{5480} \times 100 = 9.49\%\]`,
          ],
          final: "9.49%",
        },
        {
          l: "b", marks: 2, q: m`A student uses \(3.14\) as an approximation of \(\pi\). Find the percentage error, to 3 significant figures. (Use the GDC value of \(\pi\) as the exact value.)`, restate: "3.14 for π",
          steps: [m`\[\left|\dfrac{3.14 - \pi}{\pi}\right| \times 100 = \dfrac{0.001593}{3.141593} \times 100 = 0.0507\%\]`],
          final: "0.0507%",
        },
        {
          l: "c", marks: 2, q: m`Find the percentage error when \(\dfrac{22}{7}\) is used as an approximation of \(\pi\). Which approximation is better?`, restate: "22/7 for π",
          steps: [
            m`\[\left|\dfrac{22/7 - \pi}{\pi}\right| \times 100 = 0.0402\%\]`,
            m`\(0.0402\% < 0.0507\%\), so \(\dfrac{22}{7}\) is the closer approximation.`,
          ],
          final: "0.0402%; 22/7 is better",
        },
      ],
    },
    {
      n: 2,
      parts: [
        {
          l: "a", marks: 2, q: "A table is measured as 1.84 m long. Its true length is 1.80 m. Find the percentage error, to 3 significant figures.", restate: "Table length",
          steps: [m`\[\dfrac{|1.84 - 1.80|}{1.80} \times 100 = 2.22\%\]`],
          final: "2.22%",
        },
        {
          l: "b", marks: 3, q: "A 2.50 kg mass is weighed on a scale that is allowed a percentage error of at most 4%. Find the range of readings the scale may give.", lines: 4, restate: "Allowed range",
          steps: [
            m`\[4\% \text{ of } 2.50 = 0.04 \times 2.50 = 0.10\]`,
            m`\[2.50 - 0.10 = 2.40 \quad\text{and}\quad 2.50 + 0.10 = 2.60\]`,
          ],
          final: "2.40 kg to 2.60 kg",
        },
      ],
    },
    {
      n: 3,
      ctx: ["Maly calculates the area of a circle of radius 7.2 cm."],
      parts: [
        {
          l: "a", marks: 2, q: m`She uses \(\pi \approx 3.14\). Find her area.`, restate: "Maly's area",
          steps: [m`\[A = 3.14 \times 7.2^2 = 3.14 \times 51.84 = 162.78\ \text{cm}^2\]`],
          final: "162.78 cm²",
        },
        {
          l: "b", marks: 2, q: "Find the exact area (GDC value of π), then the percentage error in Maly's area.", restate: "% error in area",
          steps: [
            m`\[\text{Exact: } \pi \times 51.84 = 162.86\ \text{cm}^2\]`,
            m`\[\left|\dfrac{162.78 - 162.86}{162.86}\right| \times 100 = 0.0507\%\]`,
          ],
          final: "≈ 0.0507%",
        },
        {
          l: "c", marks: 2, q: "Comment on your answer to (b) compared with Question 1(b).", restate: "Why the same?",
          steps: [m`The areas are \(A = \pi r^2\): the factor \(r^2\) is identical in both values, so it cancels in the ratio. The percentage error in the area equals the percentage error in \(\pi\).`],
          final: "Same error (0.0507%) — r² cancels",
        },
      ],
    },
    {
      n: 4,
      ctx: [
        "A cylinder has height 10 cm. A student measures its radius as 5.2 cm, but the true radius is 5.0 cm.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the percentage error in the radius.", restate: "Error in r",
          steps: [m`\[\dfrac{|5.2 - 5.0|}{5.0} \times 100 = 4\%\]`],
          final: "4%",
        },
        {
          l: "b", marks: 3, q: m`Use \(V = \pi r^2 h\) to find the percentage error in the volume calculated from the measured radius.`, lines: 4, restate: "Error in V",
          steps: [
            m`\[V_A = \pi(5.2)^2(10) = 849.49\ \text{cm}^3 \qquad V_E = \pi(5.0)^2(10) = 785.40\ \text{cm}^3\]`,
            m`\[\dfrac{849.49 - 785.40}{785.40} \times 100 = 8.16\%\]`,
          ],
          final: "8.16%",
        },
        {
          l: "c", marks: 1, q: "Roughly how does the percentage error in V compare with that in r? Suggest why.", lines: 2, restate: "Comparison",
          steps: [m`About double: \(V\) depends on \(r^2\), so a 4% error in \(r\) becomes roughly \(2 \times 4\%\) in \(V\).`],
          final: "About twice as large (r is squared)",
        },
      ],
    },
    {
      n: 5,
      ctx: ["A thermometer reads 41.0 °C. The percentage error in this reading is 2.5%."],
      parts: [
        {
          l: "•", marks: 4, q: "Find the two possible values of the true temperature.", lines: 5, restate: "True temperature",
          steps: [
            m`\[\left|\dfrac{41.0 - v_E}{v_E}\right| = 0.025\]`,
            m`Case 1 (reading too high): \(41.0 - v_E = 0.025\,v_E \Rightarrow v_E = \dfrac{41}{1.025} = 40.0\)`,
            m`Case 2 (reading too low): \(v_E - 41.0 = 0.025\,v_E \Rightarrow v_E = \dfrac{41}{0.975} = 42.05\ldots\)`,
          ],
          final: "40.0 °C or 42.1 °C",
        },
      ],
    },
    {
      n: 6,
      ctx: ["A ruler is used to measure a rod as 18 cm, to the nearest cm."],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the lower and upper bounds of the rod's true length.", restate: "Bounds",
          steps: [m`\[17.5 \le L < 18.5\]`],
          final: "17.5 ≤ L < 18.5",
        },
        {
          l: "b", marks: 3, q: "Find the greatest possible percentage error in the measurement of 18 cm, to 3 significant figures.", lines: 4, restate: "Greatest % error",
          steps: [
            m`If the true length is 17.5: \(\dfrac{|18 - 17.5|}{17.5} \times 100 = 2.857\%\)`,
            m`If the true length is 18.5: \(\dfrac{|18 - 18.5|}{18.5} \times 100 = 2.703\%\)`,
            "Take the larger value (the smaller true length gives the bigger percentage).",
          ],
          final: "2.86%",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════
// Session 7 — Mixed Summative Mock
// ═══════════════════════════════════════════════════════════════════════════════

const mock: AiReviewPaper = {
  slug: "summative-mock",
  session: 7,
  topic: "All Summative Topics",
  title: "Summative Assessment — Mixed Mock",
  subtitle: "Summative Revision — Session 7 (full run-through)",
  minutes: 50,
  lessonAnchor: "summative-revision",
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

export const aiReviewPapers: AiReviewPaper[] = [
  arithmetic,
  geometric,
  financial,
  rounding,
  bounds,
  percentageError,
  mock,
];

export const getAiReviewPaper = (slug: string) =>
  aiReviewPapers.find((p) => p.slug === slug);
