import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 1: Arithmetic Sequences & Series (IB structure: Section A short, Section B extended)
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "arithmetic",
  session: 1,
  topic: "Arithmetic Sequences & Series",
  title: "Arithmetic Sequences and Series",
  subtitle: "Summative Revision, Session 1",
  minutes: 45,
  lessonAnchor: "arithmetic",
  questions: [
    // ───────────── Section A ─────────────
    {
      n: 1,
      section: "A",
      ctx: [
        "A mobile data plan records Sreyneang's monthly usage in gigabytes (GB). The usage in the first three months forms an arithmetic sequence.",
      ],
      table: {
        head: ["Month, \\(n\\)", "1", "2", "3"],
        rows: [["Usage, \\(u_n\\) (GB)", "8.5", "11", "13.5"]],
      },
      parts: [
        {
          l: "a", marks: 1, q: "Write down the common difference.", lines: 1, restate: "Common difference",
          steps: [m`\[d = 11 - 8.5 = 2.5\]`],
          final: "d = 2.5 GB",
          note: "Marks: (A1) 2.5.",
        },
        {
          l: "b", marks: 2, q: "Find her usage in month 18.", restate: "Month 18",
          steps: [m`\[u_n = u_1 + (n-1)d\]`, m`\[u_{18} = 8.5 + 17(2.5) = 51\]`],
          final: "51 GB",
          note: "Marks: (M1) substitution into u_n, (A1) 51.",
        },
        {
          l: "c", marks: 2, q: "Find the first month in which her usage is greater than 60 GB.", restate: "First month above 60 GB",
          steps: [
            m`\[8.5 + 2.5(n-1) > 60 \;\Rightarrow\; n - 1 > 20.6 \;\Rightarrow\; n > 21.6\]`,
            m`\[n = 22 \quad (u_{22} = 61)\]`,
          ],
          final: "Month 22",
          note: "Marks: (M1) inequality or table on GDC, (A1) 22. Check: u₂₁ = 58.5 does not exceed 60.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: [
        "Logs are stacked in rows in a timber yard. The numbers of logs in the rows form an arithmetic sequence. Row 5 has 19 logs and row 12 has 47 logs.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Show that the common difference is 4.", restate: "Show d = 4",
          steps: [
            m`\[u_{12} - u_5 = 7d\]`,
            m`\[47 - 19 = 7d \;\Rightarrow\; d = \dfrac{28}{7} = 4\]`,
          ],
          final: "d = 4 (shown)",
          note: "Marks: (M1) 7d = 47 - 19, (A1) d = 4 with no error.",
        },
        {
          l: "b", marks: 2, q: "Find the number of logs in row 1.", restate: "Row 1",
          steps: [
            m`\[u_5 = u_1 + 4d \;\Rightarrow\; 19 = u_1 + 16\]`,
            m`\[u_1 = 3\]`,
          ],
          final: "3 logs",
          note: "Marks: (M1) 19 = u₁ + 4(4), (A1) 3.",
        },
        {
          l: "c", marks: 2, q: "Find the total number of logs in the first 30 rows.", restate: "Total, 30 rows",
          steps: [
            m`\[S_n = \dfrac{n}{2}\left(2u_1 + (n-1)d\right)\]`,
            m`\[S_{30} = \dfrac{30}{2}\left(2(3) + 29(4)\right) = 15(122) = 1830\]`,
          ],
          final: "1830 logs",
          note: "Marks: (M1) substitution into S_n, (A1) 1830.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      ctx: [m`A sequence has general term \(u_k = 3k + 4\), for \(k = 1, 2, 3, \dots\) Let \(S_n = \displaystyle\sum_{k=1}^{n} (3k + 4)\).`],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the first three terms of the sequence.", lines: 1, restate: "First three terms",
          steps: [m`\[u_1 = 7,\quad u_2 = 10,\quad u_3 = 13\]`],
          final: "7, 10, 13",
          note: "Marks: (A1) all three terms.",
        },
        {
          l: "b", marks: 3, q: m`Find \(S_{25}\).`, restate: "S₂₅",
          steps: [
            m`The terms are arithmetic with \(u_1 = 7\), \(d = 3\).`,
            m`\[u_{25} = 3(25) + 4 = 79\]`,
            m`\[S_{25} = \dfrac{25}{2}(7 + 79) = 12.5 \times 86 = 1075\]`,
          ],
          final: "S₂₅ = 1075",
          note: "Marks: (M1) identify u₁ and d, (M1) sum formula with n = 25, (A1) 1075.",
        },
        {
          l: "c", marks: 2, q: m`Find the least value of \(n\) for which \(S_n > 5000\).`, lines: 4, restate: "Least n",
          steps: [
            m`\[S_n = \dfrac{n}{2}\left(14 + 3(n-1)\right) = \dfrac{n(3n + 11)}{2}\]`,
            "On the GDC, tabulate S_n:",
            m`\[S_{55} = 4840 \;(\le 5000) \qquad S_{56} = 5012 \;(> 5000)\]`,
          ],
          final: "n = 56",
          note: "Marks: (M1) S_n expression or table, (A1) 56.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      ctx: [
        "Vuthy saves money for a motorbike. In week 1 he saves $20. In each following week he saves $5 more than in the previous week.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the amount he saves in week 52.", restate: "Week 52",
          steps: [m`\[u_{52} = 20 + 51(5) = 275\]`],
          final: "$275",
          note: "Marks: (M1) 20 + 51(5), (A1) 275.",
        },
        {
          l: "b", marks: 2, q: "Find the total amount he saves in the first 52 weeks.", restate: "Total, 52 weeks",
          steps: [m`\[S_{52} = \dfrac{52}{2}\left(2(20) + 51(5)\right) = 26(295) = 7670\]`],
          final: "$7670",
          note: "Marks: (M1) substitution into S_n, (A1) 7670.",
        },
        {
          l: "c", marks: 3, q: "The motorbike costs $5000. Determine the least number of weeks he needs to save for his total savings to be greater than $5000.", lines: 4, restate: "Least weeks to pass $5000",
          steps: [
            m`\[S_n = \dfrac{n}{2}\left(40 + 5(n-1)\right) = \dfrac{n(5n + 35)}{2} > 5000\]`,
            "On the GDC, tabulate S_n:",
            m`\[S_{41} = 4920 \;(\le 5000) \qquad S_{42} = 5145 \;(> 5000)\]`,
          ],
          final: "42 weeks",
          note: "Marks: (M1) S_n with inequality, (M1) table or solver, (A1) 42.",
        },
      ],
    },

    // ───────────── Section B ─────────────
    {
      n: 5,
      section: "B",
      ctx: [
        "Bopha is preparing for a marathon, which is 42.2 km long. She considers two training plans. In both plans the distance she runs each week forms an arithmetic sequence.",
        "Plan A: she runs 9 km in week 1, and increases the distance by 2.5 km each week.",
        "Plan B: she runs 15 km in week 1, and increases the distance by 1.5 km each week.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: "Show that in week 4 of Plan A she runs 16.5 km.", lines: 2, restate: "Plan A, week 4",
          steps: [m`\[u_4 = 9 + 3(2.5) = 16.5\]`],
          final: "16.5 km (shown)",
          note: "Marks: (A1) 9 + 3(2.5) = 16.5.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the distance she runs in week 12 of Plan A.", restate: "Plan A, week 12",
          steps: [m`\[u_{12} = 9 + 11(2.5) = 36.5\]`],
          final: "36.5 km",
          note: "Marks: (M1) 9 + 11(2.5), (A1) 36.5.",
        },
        {
          l: "b", marks: 2, q: "Find the total distance she runs in the first 12 weeks of Plan A.", restate: "Plan A, total 12 weeks",
          steps: [m`\[S_{12} = \dfrac{12}{2}\left(2(9) + 11(2.5)\right) = 6(45.5) = 273\]`],
          final: "273 km",
          note: "Marks: (M1) substitution into S_n, (A1) 273.",
        },
        {
          l: "c", sub: "i", marks: 1, q: m`Write down an expression for \(u_n\), the distance in week \(n\) of Plan B.`, lines: 1, restate: "Plan B, u_n",
          steps: [m`\[u_n = 15 + 1.5(n-1)\]`],
          final: "u_n = 15 + 1.5(n - 1)",
          note: "Marks: (A1) correct expression, equivalent forms accepted (for example 13.5 + 1.5n).",
        },
        {
          l: "c", sub: "ii", marks: 3, q: "Find the week in which the distance she runs is the same in both plans, and state this distance.", lines: 4, restate: "Equal weekly distance",
          steps: [
            m`\[9 + 2.5(n-1) = 15 + 1.5(n-1)\]`,
            m`\[n - 1 = 6 \;\Rightarrow\; n = 7\]`,
            m`\[u_7 = 9 + 6(2.5) = 24\]`,
          ],
          final: "Week 7, 24 km",
          note: "Marks: (M1) equate the two expressions, (A1) n = 7, (A1) 24 km.",
        },
        {
          l: "d", marks: 3, q: "Determine the first week in which the total distance run since week 1 under Plan A is greater than the total under Plan B.", lines: 5, restate: "Plan A total first exceeds Plan B total",
          steps: [
            m`\[S_n^{A} = \dfrac{n}{2}\left(18 + 2.5(n-1)\right) \qquad S_n^{B} = \dfrac{n}{2}\left(30 + 1.5(n-1)\right)\]`,
            "On the GDC, tabulate both sums:",
            m`\[n = 13:\; S^A = 312,\; S^B = 312 \;(\text{equal}) \qquad n = 14:\; S^A = 353.5,\; S^B = 346.5\]`,
          ],
          final: "Week 14",
          note: "Marks: (M1) both S_n expressions, (M1) table or inequality, (A1) 14. Week 13 gives equal totals, so it does not qualify.",
        },
        {
          l: "e", marks: 2, q: "Bopha chooses Plan A. Find the first week in which the distance she runs is greater than the marathon distance of 42.2 km.", lines: 4, restate: "First week above 42.2 km",
          steps: [
            m`\[9 + 2.5(n-1) > 42.2 \;\Rightarrow\; n - 1 > 13.28 \;\Rightarrow\; n > 14.28\]`,
            m`\[n = 15 \quad (u_{15} = 44)\]`,
          ],
          final: "Week 15",
          note: "Marks: (M1) inequality or table, (A1) 15. Check: u₁₄ = 41.5, which is below 42.2.",
        },
        {
          l: "f", marks: 2, q: "Find the total distance she runs from week 1 to the week found in part (e). Give your answer correct to three significant figures.", restate: "Total to week 15 (3 s.f.)",
          steps: [
            m`\[S_{15} = \dfrac{15}{2}\left(2(9) + 14(2.5)\right) = 7.5 \times 53 = 397.5\]`,
            m`\[397.5 \approx 398 \quad (3\text{ s.f.})\]`,
          ],
          final: "398 km (3 s.f.)",
          note: "Marks: (M1) S₁₅ = 397.5, (A1) 398.",
        },
      ],
    },
  ],
};

export default paper;
