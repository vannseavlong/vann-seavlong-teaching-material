import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 27: Integration, area and the trapezoidal rule (AI Unit 5, booklet 5.5, 5.8 and 1.6).
const paper: AiReviewPaper = {
  slug: "integration-area",
  session: 27,
  topic: "Integration, Area and the Trapezoidal Rule",
  title: "Integration, Area and the Trapezoidal Rule",
  subtitle: "Summative Revision, Session 27",
  minutes: 30,
  lessonAnchor: "integration",
  lessonHref: "/ai/unit-5/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`A function \(f\) has derivative \(f'(x) = 3x^2 - 4x\), and its graph passes through \((1, 2)\).`],
      parts: [
        part("a", 3, m`Find \(f(x)\).`, [m`\[f(x) = x^3 - 2x^2 + C,\quad f(1) = 1 - 2 + C = 2 \Rightarrow C = 3\]`, m`\[f(x) = x^3 - 2x^2 + 3\]`], "f(x) = x^3 - 2x^2 + 3", "Marks: (A1) x^3 - 2x^2, (M1) use (1, 2), (A1) C = 3."),
        part("b", 1, m`Find \(f(3)\).`, [m`\[27 - 18 + 3 = 12\]`], "12", "Marks: (A1) 12."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`The curve \(y = x^2 + 2\) is above the \(x\)-axis for all \(x\).`],
      parts: [
        part("a", 2, m`Write down an integral for the area under the curve between \(x = 1\) and \(x = 4\).`, [m`\[A = \int_1^4 (x^2 + 2)\,dx\]`], "Integral from 1 to 4 of (x^2 + 2) dx", "Marks: (A1) limits, (A1) integrand."),
        part("b", 3, m`Find the area.`, [m`\[\left[\dfrac{x^3}{3} + 2x\right]_1^4 = \left(\dfrac{64}{3} + 8\right) - \left(\dfrac13 + 2\right) = 27\]`], "27 square units", "Marks: (A1) antiderivative, (M1) substitute limits, (A1) 27."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`A river is \(12\ \text{m}\) wide. Its depth is measured every \(3\ \text{m}\) across the river.`],
      table: { head: ["Distance \\(x\\) (m)", "0", "3", "6", "9", "12"], rows: [["Depth (m)", "0", "2.1", "3.4", "2.6", "0"]] },
      parts: [
        part("a", 3, m`Use the trapezoidal rule with 4 strips to estimate the cross-sectional area of the river.`, [m`\[h = 3,\quad A \approx \tfrac12(3)\bigl((0 + 0) + 2(2.1 + 3.4 + 2.6)\bigr) = 1.5 \times 16.2 = 24.3\]`], "24.3 m²", "Marks: (A1) h = 3, (M1) trapezoidal rule, (A1) 24.3."),
        part("b", 2, m`The depth is modelled by \(d(x) = 1.2x - 0.1x^2\). Find the exact area \(\int_0^{12} d(x)\,dx\).`, [m`\[\left[0.6x^2 - \dfrac{x^3}{30}\right]_0^{12} = 86.4 - 57.6 = 28.8\]`], "28.8 m²", "Marks: (M1) integrate, (A1) 28.8."),
        part("c", 2, m`Use the trapezoidal rule with 4 strips on the model to estimate the area.`, [m`\[d = 0,\ 2.7,\ 3.6,\ 2.7,\ 0 \Rightarrow 1.5(0 + 2(9)) = 27.0\]`], "27.0 m²", "Marks: (M1) heights from the model, (A1) 27.0."),
        part("d", 2, m`Find the percentage error of the estimate in part (c), using \(\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100\%\).`, [m`\[\varepsilon = \left|\dfrac{27 - 28.8}{28.8}\right| \times 100\% = 6.25\%\]`], "6.25%", "Marks: (M1) formula with v_E = 28.8, (A1) 6.25."),
        part("e", 1, m`State whether the trapezoidal estimate is an overestimate or underestimate, and give a reason.`, [m`\[\text{The curve is concave, so the straight tops lie below it.}\]`], "Underestimate, because the curve is concave", "Marks: (R1) reason."),
      ],
    },
  ],
};

export default paper;
