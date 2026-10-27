import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 19: Linear and quadratic models (AI Unit 2, booklet 2.1 and 2.5).
const paper: AiReviewPaper = {
  slug: "linear-quadratic",
  session: 19,
  topic: "Linear and Quadratic Models",
  title: "Linear and Quadratic Models",
  subtitle: "Summative Revision, Session 19",
  minutes: 30,
  lessonAnchor: "linear-model",
  lessonHref: "/ai/unit-2/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`A gym charges a joining fee of \(\$45\) and \(\$28\) per month.`],
      parts: [
        part("a", 2, m`Write a model for the total cost \(C\) after \(m\) months.`, [m`\[C = 28m + 45\]`], "C = 28m + 45", "Marks: (A1) gradient 28, (A1) intercept 45."),
        part("b", 1, m`Find the cost for 18 months.`, [m`\[C = 28(18) + 45 = 549\]`], "$549", "Marks: (A1) 549."),
        part("c", 2, m`Find the first month in which the total cost is more than \(\$1000\).`, [m`\[28m + 45 > 1000 \Rightarrow m > 34.1\]`], "35 months", "Marks: (M1) inequality, (A1) 35."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`A line passes through \(A(2, 5)\) and \(B(8, 17)\).`],
      parts: [
        part("a", 2, m`Find the gradient of the line.`, [m`\[m = \dfrac{17 - 5}{8 - 2} = 2\]`], "2", "Marks: (M1) formula, (A1) 2."),
        part("b", 2, m`Find the equation of the line in the form \(y = mx + c\).`, [m`\[y - 5 = 2(x - 2) \Rightarrow y = 2x + 1\]`], "y = 2x + 1", "Marks: (M1) y - y_1 = m(x - x_1), (A1) y = 2x + 1."),
        part("c", 2, m`Find the coordinates where the line crosses the \(x\)-axis.`, [m`\[0 = 2x + 1 \Rightarrow x = -0.5\]`], "(-0.5, 0)", "Marks: (M1) y = 0, (A1) -0.5."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`A ball is kicked. Its height is \(h(t) = -4.9t^2 + 19.6t + 1\) metres, \(t\) seconds after the kick.`],
      parts: [
        part("a", 2, m`Find the equation of the axis of symmetry of the graph of \(h\).`, [m`\[t = -\dfrac{19.6}{2(-4.9)} = 2\]`], "t = 2", "Marks: (M1) -b/2a, (A1) 2."),
        part("b", 2, m`Hence find the greatest height of the ball.`, [m`\[h(2) = -4.9(4) + 19.6(2) + 1 = 20.6\]`], "20.6 m", "Marks: (M1) substitute t = 2, (A1) 20.6."),
        part("c", 2, m`Find the time when the ball lands.`, [m`\[h(t) = 0 \Rightarrow t = 4.05\ \text{s (reject the negative root)}\]`], "4.05 s", "Marks: (M1) h = 0 on GDC, (A1) 4.05."),
        part("d", 3, m`Find the times between which the ball is higher than \(15\) metres.`, [m`\[-4.9t^2 + 19.6t + 1 = 15 \Rightarrow t = 0.931,\ t = 3.07\]`], "0.931 < t < 3.07", "Marks: (M1) set h = 15, (A1) 0.931, (A1) 3.07."),
      ],
    },
  ],
};

export default paper;
