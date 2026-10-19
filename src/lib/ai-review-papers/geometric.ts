import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 2: Geometric Sequences & Series (IB paper style, 45 marks)

const paper: AiReviewPaper = {
  slug: "geometric",
  session: 2,
  topic: "Geometric Sequences & Series",
  title: "Geometric Sequences and Series",
  subtitle: "Summative Revision, Session 2",
  minutes: 50,
  lessonAnchor: "geometric",
  questions: [
    {
      n: 1,
      section: "A",
      instruction: "Give all answers correct to the nearest whole number.",
      ctx: ["A new website records the number of visitors each week. The numbers for the first three weeks follow a geometric sequence."],
      table: {
        head: ["Week", "1", "2", "3"],
        rows: [["Visitors", "400", "460", "529"]],
      },
      parts: [
        {
          l: "a", marks: 2, q: "Show that the common ratio of the sequence is 1.15.", lines: 2, restate: "Common ratio",
          steps: [m`\[\dfrac{460}{400} = 1.15 \qquad \dfrac{529}{460} = 1.15\]`, "The ratios are equal, so r = 1.15."],
          final: "r = 1.15",
          note: "Marks: (M1) one ratio of consecutive terms, (A1) both ratios equal 1.15.",
        },
        {
          l: "b", marks: 2, q: "Find the number of visitors in week 10.", restate: "Visitors in week 10",
          steps: [m`\[u_n = u_1 r^{\,n-1} \;\Rightarrow\; u_{10} = 400(1.15)^9 = 1407.15\ldots\]`],
          final: "1407 visitors",
          note: "Marks: (M1) 400(1.15)^9, (A1) 1407.",
        },
        {
          l: "c", marks: 2, q: "Calculate the total number of visitors in the first 10 weeks.", restate: "Total, 10 weeks",
          steps: [m`\[S_n = \dfrac{u_1(r^n - 1)}{r - 1} \;\Rightarrow\; S_{10} = \dfrac{400(1.15^{10} - 1)}{1.15 - 1} = 8121.49\ldots\]`],
          final: "8121 visitors",
          note: "Marks: (M1) substitution into S_n, (A1) 8121.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: [m`A geometric sequence has third term \(u_3 = 18\) and sixth term \(u_6 = 486\).`],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the common ratio \(r\) and the first term \(u_1\).`, restate: "r and u₁",
          steps: [
            m`\[\dfrac{u_6}{u_3} = r^3 = \dfrac{486}{18} = 27 \;\Rightarrow\; r = 3\]`,
            m`\[u_1 = \dfrac{u_3}{r^2} = \dfrac{18}{9} = 2\]`,
          ],
          final: "r = 3, u₁ = 2",
          note: "Marks: (M1) r^3 = 486/18, (A1) r = 3, (A1) u₁ = 2.",
        },
        {
          l: "b", marks: 1, q: m`Find \(u_{12}\). Give your answer in the form \(a \times 10^k\), where \(1 \le a < 10\) and \(k \in \mathbb{Z}\).`, lines: 2, restate: "u₁₂",
          steps: [m`\[u_{12} = 2(3)^{11} = 354\,294 = 3.54 \times 10^{5}\]`],
          final: "3.54 × 10⁵",
          note: "Marks: (A1) 3.54 × 10^5 (3 s.f.).",
        },
        {
          l: "c", marks: 2, q: m`Find the smallest value of \(n\) for which \(u_n > 10^7\).`, restate: "Smallest n",
          steps: [
            m`\[2(3)^{n-1} > 10^7 \;\Rightarrow\; 3^{n-1} > 5\,000\,000\]`,
            m`Table on the GDC: \(u_{15} = 9\,565\,938 < 10^7\) and \(u_{16} = 28\,697\,814 > 10^7\).`,
          ],
          final: "n = 16",
          note: "Marks: (M1) inequality or table of values, (A1) 16.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "Give all answers in mg, correct to two decimal places where necessary.",
      ctx: [
        "Mr Dara takes a 250 mg tablet every 8 hours. Just before each new tablet, 30% of the previous amount of the drug is still in his body.",
        "Let \\(A_n\\) be the amount of the drug in his body immediately after taking the \\(n\\)th tablet.",
      ],
      parts: [
        {
          l: "a", marks: 1, q: m`Write down \(A_1\) and find \(A_2\).`, lines: 2, restate: "A₁ and A₂",
          steps: [m`\[A_1 = 250 \qquad A_2 = 0.3(250) + 250 = 325\]`],
          final: "A₁ = 250, A₂ = 325",
          note: "Marks: (A1) 325.",
        },
        {
          l: "b", marks: 2, q: m`Show that \(A_3 = 347.5\).`, lines: 2, restate: "A₃",
          steps: [m`\[A_3 = 0.3(325) + 250 = 97.5 + 250 = 347.5\]`, m`\[\text{or } A_3 = 250(1 + 0.3 + 0.3^2) = 250(1.39) = 347.5\]`],
          final: "A₃ = 347.5",
          note: "Marks: (M1) 0.3 × 325 + 250, (A1) 347.5 shown.",
        },
        {
          l: "c", marks: 2, q: m`The amounts \(A_n = 250\left(1 + 0.3 + 0.3^2 + \dots + 0.3^{n-1}\right)\) form a geometric series. Find \(A_6\).`, restate: "A₆",
          steps: [m`\[A_6 = \dfrac{250(1 - 0.3^6)}{1 - 0.3} = \dfrac{250(0.999271)}{0.7} = 356.8825\]`],
          final: "356.88 mg",
          note: "Marks: (M1) S₆ with u₁ = 250, r = 0.3, (A1) 356.88.",
        },
        {
          l: "d", marks: 2, q: m`Find the least number of tablets after which \(A_n\) exceeds 355 mg.`, restate: "Least n",
          steps: [
            m`\[\dfrac{250(1 - 0.3^n)}{0.7} > 355\]`,
            m`Table on the GDC: \(A_4 = 354.25 < 355\), \(A_5 = 356.275 > 355\).`,
          ],
          final: "5 tablets",
          note: "Marks: (M1) inequality or table, (A1) n = 5.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      instruction: "In this question, give monetary answers correct to two decimal places unless told otherwise.",
      ctx: [
        "Chan starts a job in year 1 on a salary of $36 000. Her salary increases by 4% each year, so her yearly salaries form a geometric sequence.",
        "Her friend Vuthy joins another company in year 1 on $38 000. His salary increases by $1200 each year.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Calculate Chan's salary in year 6.", restate: "Chan, year 6",
          steps: [m`\[u_6 = 36\,000(1.04)^5 = 43\,799.50\ldots\]`],
          final: "$43 799.50",
          note: "Marks: (M1) 36 000(1.04)^5, (A1) 43 799.50.",
        },
        {
          l: "b", marks: 2, q: "Calculate Chan's total earnings in the first 10 years. Give your answer to the nearest dollar.", restate: "Chan, 10 years",
          steps: [m`\[S_{10} = \dfrac{36\,000(1.04^{10} - 1)}{1.04 - 1} = 432\,219.86\ldots\]`],
          final: "$432 220",
          note: "Marks: (M1) substitution into S_n, (A1) 432 220.",
        },
        {
          l: "c", marks: 3, q: "Find the first year in which Chan's salary is greater than Vuthy's salary.", lines: 4, restate: "First year Chan earns more",
          steps: [
            m`Vuthy (arithmetic): \(v_n = 38\,000 + 1200(n-1)\). Chan: \(c_n = 36\,000(1.04)^{n-1}\).`,
            m`\[36\,000(1.04)^{n-1} > 38\,000 + 1200(n-1)\]`,
            m`Table on the GDC: year 6, \(43\,799.50 < 44\,000\). Year 7, \(45\,551.48 > 45\,200\).`,
          ],
          final: "Year 7",
          note: "Marks: (M1) Vuthy's formula, (M1) inequality or table, (A1) year 7.",
        },
      ],
    },
    {
      n: 5,
      section: "B",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: [
        "Rina saves for a new laptop by making one deposit into a savings box at the end of each year. Her first deposit is $1200. Each deposit is 5% larger than the one before it, so the deposits form a geometric sequence. She makes 15 deposits. The box pays no interest.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: "Write down the common ratio of the deposits.", lines: 1, restate: "Common ratio",
          steps: [m`\[r = 1 + \dfrac{5}{100} = 1.05\]`],
          final: "r = 1.05",
          note: "Marks: (A1) 1.05.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the deposit in year 10.", restate: "Deposit, year 10",
          steps: [m`\[u_{10} = 1200(1.05)^9 = 1861.59\ldots\]`],
          final: "$1861.59",
          note: "Marks: (M1) 1200(1.05)^9, (A1) 1861.59.",
        },
        {
          l: "b", sub: "i", marks: 2, q: "Calculate the total amount Rina deposits in the 15 years.", restate: "Total, 15 years",
          steps: [m`\[S_{15} = \dfrac{1200(1.05^{15} - 1)}{1.05 - 1} = 25\,894.28\ldots\]`],
          final: "$25 894.28",
          note: "Marks: (M1) substitution into S_n, (A1) 25 894.28.",
        },
        {
          l: "b", sub: "ii", marks: 3, q: m`Rina's brother Sam deposits $1500 in year 1 and increases his deposit by a fixed amount \(d\) dollars each year. After 15 years his total equals Rina's total. Find \(d\).`, lines: 4, restate: "Value of d",
          steps: [
            m`\[S_{15} = \dfrac{15}{2}\left(2(1500) + 14d\right) = 25\,894.28\ldots\]`,
            m`\[3000 + 14d = 6905.14\ldots \;\Rightarrow\; 14d = 452.64\ldots\]`,
            m`\[d = 32.33\]`,
          ],
          final: "d = $32.33",
          note: "Marks: (M1) arithmetic S_n formula, (M1) equate to Rina's total, (A1) 32.33.",
        },
        {
          l: "c", marks: 3, q: "Find the first year in which Rina's deposit is greater than $2000.", lines: 4, restate: "First deposit above $2000",
          steps: [
            m`\[1200(1.05)^{n-1} > 2000 \;\Rightarrow\; 1.05^{n-1} > 1.6667\]`,
            m`\[n - 1 > \dfrac{\ln 1.6667}{\ln 1.05} = 10.47 \;\Rightarrow\; n = 12\]`,
          ],
          final: "Year 12",
          note: "Check: year 11 is $1954.67 and year 12 is $2052.41. Marks: (M1) inequality, (M1) logarithms or table, (A1) 12.",
        },
        {
          l: "d", marks: 2, q: "Rina estimates her 15-year total as $26 000. Calculate the percentage error in her estimate. Give your answer to three significant figures.", restate: "Percentage error",
          steps: [m`\[\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100 = \left|\dfrac{26\,000 - 25\,894.28}{25\,894.28}\right| \times 100 = 0.408\%\]`],
          final: "0.408%",
          note: "Marks: (M1) percentage error formula with v_E = 25 894.28, (A1) 0.408.",
        },
        {
          l: "e", sub: "i", marks: 2, q: "The laptop Rina wants costs $6000 at the start of year 1. Its price increases by 3% each year. Find its price at the end of year 6.", restate: "Price, end of year 6",
          steps: [m`\[6000(1.03)^6 = 7164.31\ldots\]`],
          final: "$7164.31",
          note: "Marks: (M1) 6000(1.03)^6, (A1) 7164.31.",
        },
        {
          l: "e", sub: "ii", marks: 3, q: "Find the least number of years after which Rina's total deposits are at least the price of the laptop at the end of that year.", lines: 5, restate: "Least number of years",
          steps: [
            m`\[\dfrac{1200(1.05^n - 1)}{0.05} \ge 6000(1.03)^n\]`,
            m`Table on the GDC: \(n = 5\): \(6630.76 < 6955.64\). \(n = 6\): \(8162.30 > 7164.31\).`,
          ],
          final: "6 years",
          note: "Marks: (M1) S_n against price, (M1) table of values, (A1) n = 6.",
        },
        {
          l: "e", sub: "iii", marks: 1, q: "Calculate how much money Rina has left after buying the laptop at the end of year 6.", lines: 2, restate: "Money left",
          steps: [m`\[S_6 - 7164.31\ldots = 8162.2954 - 7164.3138 = 997.98\]`],
          final: "$997.98",
          note: "Marks: (A1) 997.98 (accept 997.99 from rounded values).",
        },
      ],
    },
  ],
};

export default paper;
