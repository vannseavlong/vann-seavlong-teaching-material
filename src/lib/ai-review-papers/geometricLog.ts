import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 18: Geometric sequences and logarithm form (AI Unit 1, booklet 1.3 and 1.5).
const paper: AiReviewPaper = {
  slug: "geometric-log",
  session: 18,
  topic: "Geometric Sequences and Logarithm Form",
  title: "Geometric Sequences and Logarithm Form",
  subtitle: "Summative Revision, Session 18",
  minutes: 22,
  lessonAnchor: "geometric",
  lessonHref: "/ai/unit-1/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`A geometric sequence has first term \(u_1 = 6\) and second term \(u_2 = 18\).`],
      parts: [
        part("a", 1, m`Write down the common ratio \(r\).`, [m`\[r = \dfrac{18}{6} = 3\]`], "r = 3", "Marks: (A1) 3."),
        part("b", 2, m`Find \(u_5\).`, [m`\[u_5 = 6 \times 3^{4} = 486\]`], "486", "Marks: (M1) u_1 r^(n-1), (A1) 486."),
        part("c", 2, m`Find \(S_5\).`, [m`\[S_5 = \dfrac{6(3^5 - 1)}{3 - 1} = 726\]`], "726", "Marks: (M1) S_n formula, (A1) 726."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`An investment is worth \(V = 1200 \times 1.05^{t}\) dollars after \(t\) years.`],
      parts: [
        part("a", 2, m`Find the value after 10 years.`, [m`\[V = 1200 \times 1.05^{10} = 1954.67\]`], "$1954.67", "Marks: (M1) substitution, (A1) 1954.67."),
        part("b", 1, m`Show that the investment reaches \(2000\) dollars when \(1.05^{t} = \dfrac{5}{3}\).`, [m`\[1200 \times 1.05^{t} = 2000 \Rightarrow 1.05^{t} = \dfrac{2000}{1200} = \dfrac{5}{3}\]`], "Shown", "Marks: (AG) division shown."),
        part("c", 2, m`Use \(a^x = b \Leftrightarrow x = \log_a b\) to find \(t\), correct to one decimal place.`, [m`\[t = \log_{1.05}\dfrac{5}{3} = 10.5\ \text{years}\]`], "10.5 years", "Marks: (M1) logarithm form, (A1) 10.5."),
      ],
    },
    {
      n: 3, section: "B",
      instruction: "In this question, give answers correct to the nearest whole number.",
      ctx: [m`A video gets \(800\) views in week 1. Views grow by \(15\%\) each week, so the weekly views form a geometric sequence.`],
      parts: [
        part("a", 2, m`Write down \(u_n\) in terms of \(n\).`, [m`\[r = 1.15,\quad u_n = 800 \times 1.15^{\,n-1}\]`], "u_n = 800 x 1.15^(n-1)", "Marks: (A1) r = 1.15, (A1) formula."),
        part("b", 2, m`Find the views in week 6.`, [m`\[u_6 = 800 \times 1.15^{5} = 1609\]`], "1609", "Marks: (M1) substitution, (A1) 1609."),
        part("c", 2, m`Find the total views in the first 8 weeks.`, [m`\[S_8 = \dfrac{800(1.15^{8} - 1)}{1.15 - 1} = 10\,981\]`], "10 981", "Marks: (M1) S_n, (A1) 10981."),
        part("d", 3, m`Find the first week in which the views exceed \(5000\).`, [m`\[800 \times 1.15^{\,n-1} > 5000 \Rightarrow 1.15^{\,n-1} > 6.25\]`, m`\[n - 1 > \log_{1.15} 6.25 = 13.11 \Rightarrow n > 14.11\]`], "Week 15", "Marks: (M1) inequality, (M1) logarithm or table, (A1) 15. Check: week 14 gives 4922, week 15 gives 5661."),
      ],
    },
  ],
};

export default paper;
