import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 9: Arithmetic and Geometric Sequences mixed (IB paper style, 48 marks).
// Choosing the sequence type, using both formulas in one question, comparing the two growth patterns.

const paper: AiReviewPaper = {
  slug: "sequences-mixed",
  session: 9,
  topic: "Arithmetic and Geometric Sequences",
  title: "Arithmetic and Geometric Sequences, Mixed",
  subtitle: "Summative Revision, Session 9",
  minutes: 55,
  lessonAnchor: "arithmetic",
  questions: [
    // ───────────────────────── Section A ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: [
        "Sophea saves money each month for 12 months under one of two plans.",
        "Plan A: she saves 200 USD in month 1, then 15 USD more each month than the month before.",
        "Plan B: she saves 100 USD in month 1, then 10% more each month than the month before.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "State whether the monthly savings form an arithmetic or a geometric sequence for Plan A and for Plan B, and write down the common difference or common ratio.", lines: 3, restate: "Type of sequence",
          steps: [
            m`Plan A adds the same amount each month: arithmetic, \(d = 15\).`,
            m`Plan B multiplies by the same factor each month: geometric, \(r = 1.1\).`,
          ],
          final: "A: arithmetic, d = 15. B: geometric, r = 1.1",
          note: "Marks: (A1) Plan A arithmetic with d = 15, (A1) Plan B geometric with r = 1.1. Common error: r = 0.1 or r = 10.",
        },
        {
          l: "b", marks: 2, q: "Find the amount saved in month 12 under each plan.", lines: 3, restate: "Month 12",
          steps: [
            m`\[\text{Plan A: } u_{12} = 200 + 11(15) = 365\]`,
            m`\[\text{Plan B: } u_{12} = 100(1.1)^{11} = 285.31\ldots\]`,
          ],
          final: "A: 365.00 USD, B: 285.31 USD",
          note: "Marks: (A1) 365, (A1) 285.31. Plan B uses power 11, not 12.",
        },
        {
          l: "c", marks: 3, q: "Find the total saved over the 12 months under each plan.", lines: 4, restate: "Total, 12 months",
          steps: [
            m`\[\text{Plan A: } S_{12} = \dfrac{12}{2}\big(2(200) + 11(15)\big) = 3390\]`,
            m`\[\text{Plan B: } S_{12} = \dfrac{100(1.1^{12} - 1)}{1.1 - 1} = 2138.42\ldots\]`,
          ],
          final: "A: 3390.00 USD, B: 2138.43 USD",
          note: "Marks: (M1) correct sum formula for each type, (A1) 3390, (A1) 2138.43. Plan A wins over 12 months because it starts higher.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: [m`The numbers \(4,\ x,\ 16\) are the first three terms of a sequence, where \(x > 0\).`],
      parts: [
        {
          l: "a", marks: 3, q: m`The sequence is arithmetic. Find \(x\) and the common difference \(d\).`, lines: 3, restate: "Arithmetic case",
          steps: [
            m`\[x - 4 = 16 - x \;\Rightarrow\; 2x = 20 \;\Rightarrow\; x = 10\]`,
            m`\[d = 10 - 4 = 6\]`,
          ],
          final: "x = 10, d = 6",
          note: "Marks: (M1) equal differences, (A1) x = 10, (A1) d = 6. Check: 4, 10, 16.",
        },
        {
          l: "b", marks: 3, q: m`The sequence is geometric. Find \(x\) and the common ratio \(r\).`, lines: 3, restate: "Geometric case",
          steps: [
            m`\[\dfrac{x}{4} = \dfrac{16}{x} \;\Rightarrow\; x^2 = 64\]`,
            m`Since \(x > 0\), \(x = 8\) and \(r = \dfrac{8}{4} = 2\).`,
          ],
          final: "x = 8, r = 2",
          note: "Marks: (M1) equal ratios, (A1) x = 8, (A1) r = 2. Reject x = -8 because x > 0.",
        },
        {
          l: "c", marks: 2, q: "Find the difference between the sum of the first 8 terms of the geometric sequence and the sum of the first 8 terms of the arithmetic sequence.", lines: 4, restate: "Difference of sums",
          steps: [
            m`\[\text{Arithmetic: } S_8 = \dfrac{8}{2}\big(2(4) + 7(6)\big) = 200\]`,
            m`\[\text{Geometric: } S_8 = \dfrac{4(2^8 - 1)}{2 - 1} = 1020\]`,
            m`\[1020 - 200 = 820\]`,
          ],
          final: "820",
          note: "Marks: (A1) 200 and 1020 both correct, (A1) 820.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      ctx: [
        m`An arithmetic sequence \(u_n\) has first term 3 and common difference 4.`,
        m`A geometric sequence \(v_n\) has first term 3 and common ratio 2.`,
      ],
      parts: [
        {
          l: "a", marks: 2, q: m`Find \(u_{20}\) and \(v_{10}\).`, lines: 3, restate: "u₂₀ and v₁₀",
          steps: [
            m`\[u_{20} = 3 + 19(4) = 79\]`,
            m`\[v_{10} = 3(2)^9 = 1536\]`,
          ],
          final: "u₂₀ = 79, v₁₀ = 1536",
          note: "Marks: (A1) 79, (A1) 1536.",
        },
        {
          l: "b", marks: 2, q: m`Find the least value of \(n\) for which \(v_n > u_n\).`, lines: 4, restate: "First term where v > u",
          steps: [
            m`\(n = 1\): both are 3. \(n = 2\): \(v_2 = 6\), \(u_2 = 7\). \(n = 3\): \(v_3 = 12\), \(u_3 = 11\).`,
            m`GDC: table of \(3(2)^{x-1}\) and \(3 + 4(x-1)\).`,
          ],
          final: "n = 3",
          note: "Marks: (M1) comparing terms or a table, (A1) n = 3. Do not answer n = 1 (the terms are equal, not greater).",
        },
        {
          l: "c", marks: 3, q: "Find the least number of terms needed for the sum of the sequence to exceed 1000, for each sequence.", lines: 5, restate: "Terms to pass 1000",
          steps: [
            m`\[\text{Arithmetic: } S_n = \dfrac{n}{2}\big(6 + 4(n-1)\big) = n(2n+1)\]`,
            m`\(S_{22} = 990\) (below 1000), \(S_{23} = 1081\).`,
            m`\[\text{Geometric: } S_n = 3(2^n - 1)\]`,
            m`\(S_8 = 765\) (below 1000), \(S_9 = 1533\).`,
          ],
          final: "Arithmetic: 23 terms. Geometric: 9 terms",
          note: "Marks: (M1) correct S_n for either sequence, (A1) 23, (A1) 9. Use the GDC table of S_n or test consecutive values.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      instruction: "In this question, give all monetary answers correct to the nearest dollar.",
      ctx: [
        "Chantha is offered a 10-year job by two companies. The salary is paid once a year.",
        "Company X: starting salary 24 000 USD, increasing by 1500 USD each year.",
        "Company Y: starting salary 22 000 USD, increasing by 5% each year.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the salary in year 10 at each company.", lines: 3, restate: "Year 10 salary",
          steps: [
            m`\[\text{X: } 24\,000 + 9(1500) = 37\,500\]`,
            m`\[\text{Y: } 22\,000(1.05)^9 = 34\,129.22\ldots\]`,
          ],
          final: "X: 37 500 USD, Y: 34 129 USD",
          note: "Marks: (A1) 37 500, (A1) 34 129.",
        },
        {
          l: "b", marks: 3, q: "Find the total earned over the 10 years at each company.", lines: 4, restate: "Total, 10 years",
          steps: [
            m`\[\text{X: } S_{10} = \dfrac{10}{2}\big(2(24\,000) + 9(1500)\big) = 307\,500\]`,
            m`\[\text{Y: } S_{10} = \dfrac{22\,000(1.05^{10} - 1)}{1.05 - 1} = 276\,713.63\ldots\]`,
          ],
          final: "X: 307 500 USD, Y: 276 714 USD",
          note: "Marks: (M1) sum formula of the correct type for each company, (A1) 307 500, (A1) 276 714.",
        },
        {
          l: "c", marks: 2, q: "Chantha stays for many years. Find the first year in which the salary at Company Y is greater than the salary at Company X.", lines: 4, restate: "Year Y overtakes X",
          steps: [
            m`GDC: table of \(22\,000(1.05)^{x-1}\) and \(24\,000 + 1500(x-1)\).`,
            m`Year 16: X = 46 500, Y = 45 736. Year 17: X = 48 000, Y = 48 023.`,
          ],
          final: "Year 17",
          note: "Marks: (M1) table or inequality for the two salaries, (A1) year 17. The geometric growth is slower to start but passes the arithmetic growth.",
        },
      ],
    },

    // ───────────────────────── Section B ─────────────────────────
    {
      n: 5,
      section: "B",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: [
        "A charity receives monthly donations from two funds, starting in month 1.",
        "Fund 1 donates 300 USD in month 1, and the donation increases by 40 USD each month.",
        "Fund 2 donates 300 USD in month 1, and the donation increases by 8% each month.",
        m`Let \(u_n\) be the Fund 1 donation and \(v_n\) the Fund 2 donation in month \(n\).`,
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Show that in month 3 Fund 1 donates 380 USD and Fund 2 donates 349.92 USD.", lines: 3, restate: "Month 3 donations",
          steps: [
            m`\[u_3 = 300 + 2(40) = 380\]`,
            m`\[v_3 = 300(1.08)^2 = 349.92\]`,
          ],
          final: "u₃ = 380, v₃ = 349.92",
          note: "Marks: (M1) correct formula for one fund with n = 3, (A1) both values shown.",
        },
        {
          l: "b", marks: 3, q: "Find the total donated by Fund 1 over the first 24 months.", lines: 4, restate: "Fund 1, 24 months",
          steps: [m`\[S_{24} = \dfrac{24}{2}\big(2(300) + 23(40)\big) = 12(1520) = 18\,240\]`],
          final: "18 240.00 USD",
          note: "Marks: (M1) arithmetic sum formula, (A1) correct substitution, (A1) 18 240.",
        },
        {
          l: "c", marks: 3, q: "Find the total donated by Fund 2 over the first 24 months.", lines: 4, restate: "Fund 2, 24 months",
          steps: [m`\[S_{24} = \dfrac{300(1.08^{24} - 1)}{1.08 - 1} = 20\,029.43\ldots\]`],
          final: "20 029.43 USD",
          note: "Marks: (M1) geometric sum formula, (A1) correct substitution with r = 1.08, (A1) 20 029.43.",
        },
        {
          l: "d", marks: 3, q: "Find the first month in which the donation from Fund 2 is greater than the donation from Fund 1.", lines: 5, restate: "First month v > u",
          steps: [
            m`GDC: table of \(300(1.08)^{x-1}\) and \(300 + 40(x-1)\).`,
            m`Month 14: \(v_{14} = 815.69\), \(u_{14} = 820\). Month 15: \(v_{15} = 881.16\), \(u_{15} = 860\).`,
          ],
          final: "Month 15",
          note: "Marks: (M1) inequality or table, (A1) values either side of the change, (A1) month 15.",
        },
        {
          l: "e", marks: 3, q: m`The charity records the combined donation \(w_n = u_n + v_n\). Find \(w_1\), \(w_2\) and \(w_3\), and hence show that \(w_n\) is neither arithmetic nor geometric.`, lines: 5, restate: "Is w arithmetic or geometric?",
          steps: [
            m`\[w_1 = 300 + 300 = 600,\quad w_2 = 340 + 324 = 664,\quad w_3 = 380 + 349.92 = 729.92\]`,
            m`Differences: \(664 - 600 = 64\) and \(729.92 - 664 = 65.92\), not equal.`,
            m`Ratios: \(\dfrac{664}{600} = 1.1067\) and \(\dfrac{729.92}{664} = 1.0993\), not equal.`,
          ],
          final: "600, 664, 729.92. Differences 64 and 65.92 are unequal; ratios 1.1067 and 1.0993 are unequal",
          note: "Marks: (A1) w₁ = 600, w₂ = 664, w₃ = 729.92, (M1) test of both differences and ratios, (R1) conclusion. The sum of an arithmetic and a geometric sequence is not either type.",
        },
        {
          l: "f", marks: 2, q: m`Find the total of \(w_n\) over the first 12 months.`, lines: 4, restate: "Combined, 12 months",
          steps: [
            m`\[\text{Fund 1: } S_{12} = \dfrac{12}{2}\big(600 + 11(40)\big) = 6240\]`,
            m`\[\text{Fund 2: } S_{12} = \dfrac{300(1.08^{12} - 1)}{0.08} = 5693.14\ldots\]`,
            m`\[6240 + 5693.14 = 11\,933.14\]`,
          ],
          final: "11 933.14 USD",
          note: "Marks: (M1) add the two separate sums, (A1) 11 933.14. Do not apply one formula to w_n.",
        },
        {
          l: "g", marks: 3, q: "The charity needs 20 000 USD in total from both funds. Find the least number of months needed.", lines: 5, restate: "Months to 20 000 USD",
          steps: [
            m`GDC: table of \(\dfrac{x}{2}\big(600 + 40(x-1)\big) + \dfrac{300(1.08^x - 1)}{0.08}\).`,
            m`After 16 months: 18 697.28. After 17 months: 20 665.07.`,
          ],
          final: "17 months",
          note: "Marks: (M1) combined sum expression, (A1) 18 697.28 and 20 665.07, (A1) 17 months (round up).",
        },
      ],
    },
  ],
};

export default paper;
