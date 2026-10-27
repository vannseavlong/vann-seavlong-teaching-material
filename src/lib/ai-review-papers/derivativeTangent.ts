import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 26: Derivatives, tangents and stationary points (AI Unit 5, booklet 5.3).
const paper: AiReviewPaper = {
  slug: "derivative-tangent",
  session: 26,
  topic: "Derivatives, Tangents and Stationary Points",
  title: "Derivatives, Tangents and Stationary Points",
  subtitle: "Summative Revision, Session 26",
  minutes: 28,
  lessonAnchor: "derivative",
  lessonHref: "/ai/unit-5/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`A curve has equation \(f(x) = 2x^3 - 5x^2 + 4x\).`],
      parts: [
        part("a", 2, m`Find \(f'(x)\).`, [m`\[f'(x) = 6x^2 - 10x + 4\]`], "6x^2 - 10x + 4", "Marks: (A1) 6x^2, (A1) -10x + 4."),
        part("b", 2, m`Find the gradient of the curve at \(x = 2\).`, [m`\[f'(2) = 24 - 20 + 4 = 8\]`], "8", "Marks: (M1) substitute, (A1) 8."),
        part("c", 3, m`Find the equation of the tangent at \(x = 2\).`, [m`\[f(2) = 16 - 20 + 8 = 4\]`, m`\[y - 4 = 8(x - 2) \Rightarrow y = 8x - 12\]`], "y = 8x - 12", "Marks: (A1) f(2) = 4, (M1) y - y_1 = m(x - x_1), (A1) y = 8x - 12."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`The cost per item to make \(x\) items is \(C(x) = x^2 - 12x + 50\) dollars.`],
      parts: [
        part("a", 1, m`Find \(C'(x)\).`, [m`\[C'(x) = 2x - 12\]`], "2x - 12", "Marks: (A1) 2x - 12."),
        part("b", 2, m`Find the number of items that gives the least cost per item.`, [m`\[2x - 12 = 0 \Rightarrow x = 6\]`], "6 items", "Marks: (M1) C' = 0, (A1) 6."),
        part("c", 2, m`Find this least cost, and show that it is a minimum.`, [m`\[C(6) = 36 - 72 + 50 = 14\]`, m`\[C' < 0 \text{ for } x < 6 \text{ and } C' > 0 \text{ for } x > 6\]`], "$14, a minimum", "Marks: (A1) 14, (R1) sign change of C'."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`The height of a drone is \(h(t) = t^3 - 9t^2 + 24t\) metres, \(t\) seconds after take-off, for \(0 \le t \le 6\).`],
      parts: [
        part("a", 2, m`Find \(h'(t)\), the vertical velocity.`, [m`\[h'(t) = 3t^2 - 18t + 24\]`], "3t^2 - 18t + 24", "Marks: (A1) 3t^2, (A1) -18t + 24."),
        part("b", 1, m`Find the velocity at \(t = 1\).`, [m`\[h'(1) = 3 - 18 + 24 = 9\ \text{m/s}\]`], "9 m/s", "Marks: (A1) 9."),
        part("c", 3, m`Find the times when the drone is momentarily still in the air.`, [m`\[3(t^2 - 6t + 8) = 3(t - 2)(t - 4) = 0\]`], "t = 2 and t = 4", "Marks: (M1) h' = 0, (A1) t = 2, (A1) t = 4."),
        part("d", 3, m`Find the greatest and least heights at these times, and classify each.`, [m`\[h(2) = 8 - 36 + 48 = 20,\quad h(4) = 64 - 144 + 96 = 16\]`], "Maximum 20 m at t = 2, minimum 16 m at t = 4", "Marks: (A1) 20, (A1) 16, (R1) classification from the sign of h'."),
        part("e", 1, m`State the interval of time when the drone is descending.`, [m`\[h'(t) < 0 \text{ for } 2 < t < 4\]`], "2 < t < 4", "Marks: (A1) 2 < t < 4."),
      ],
    },
  ],
};

export default paper;
