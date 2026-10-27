import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 20: Exponential models (AI Unit 2, booklet 1.5).
const paper: AiReviewPaper = {
  slug: "exponential-models",
  session: 20,
  topic: "Exponential Models",
  title: "Exponential Models",
  subtitle: "Summative Revision, Session 20",
  minutes: 30,
  lessonAnchor: "exponential",
  lessonHref: "/ai/unit-2/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`A deposit grows as \(V = 5000 \times 1.035^{t}\) dollars after \(t\) years.`],
      parts: [
        part("a", 2, m`Find the value after 8 years.`, [m`\[V = 5000 \times 1.035^{8} = 6584.05\]`], "$6584.05", "Marks: (M1) substitution, (A1) 6584.05."),
        part("b", 3, m`Find the number of years for the deposit to reach \(\$8000\). Use \(a^x = b \Leftrightarrow x = \log_a b\).`, [m`\[1.035^{t} = 1.6 \Rightarrow t = \log_{1.035} 1.6 = 13.7\]`], "13.7 years", "Marks: (A1) 1.035^t = 1.6, (M1) logarithm form, (A1) 13.7."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`The mass of a radioactive sample is \(M = 80 \times 0.9^{t}\) grams, where \(t\) is in days.`],
      parts: [
        part("a", 1, m`State the percentage of the mass lost each day.`, [m`\[1 - 0.9 = 0.1\]`], "10%", "Marks: (A1) 10."),
        part("b", 2, m`Find the mass after 5 days.`, [m`\[M = 80 \times 0.9^{5} = 47.2\ \text{g}\]`], "47.2 g", "Marks: (M1) substitution, (A1) 47.2."),
        part("c", 3, m`Find the time for the mass to halve.`, [m`\[0.9^{t} = 0.5 \Rightarrow t = \log_{0.9} 0.5 = 6.58\ \text{days}\]`], "6.58 days", "Marks: (A1) 0.9^t = 0.5, (M1) logarithm form, (A1) 6.58."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`A lake has \(1200\) fish. The number is modelled by \(P = 1200 \times b^{t}\), where \(t\) is in years and \(b > 1\). After 3 years there are \(1620\) fish.`],
      parts: [
        part("a", 3, m`Find the value of \(b\).`, [m`\[1200 b^{3} = 1620 \Rightarrow b^{3} = 1.35 \Rightarrow b = 1.105\]`], "b = 1.105", "Marks: (A1) b^3 = 1.35, (M1) cube root, (A1) 1.105."),
        part("b", 2, m`Write down the percentage increase each year, to 3 significant figures.`, [m`\[b = 1.1052 \Rightarrow 10.5\%\]`], "10.5%", "Marks: (M1) b - 1, (A1) 10.5."),
        part("c", 2, m`Find the number of fish after 10 years, to the nearest whole number.`, [m`\[P = 1200 \times 1.35^{10/3} = 3263\]`], "3263", "Marks: (M1) use b^10 = 1.35^(10/3), (A1) 3263."),
        part("d", 3, m`Find when the lake first holds \(5000\) fish.`, [m`\[1200 \times 1.35^{t/3} = 5000 \Rightarrow t = 14.3\ \text{years}\]`], "14.3 years", "Marks: (A1) equation, (M1) logarithm or GDC, (A1) 14.3."),
      ],
    },
  ],
};

export default paper;
