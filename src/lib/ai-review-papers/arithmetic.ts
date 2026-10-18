import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 1 — Arithmetic Sequences & Series
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
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

export default paper;
