import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 5 — Upper & Lower Bounds
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
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

export default paper;
