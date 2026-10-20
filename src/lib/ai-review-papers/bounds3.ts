import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 11: Limits of Accuracy, Set 2 (Limits-of-Accuracy-PQ.pdf, questions 15 to 28).
// Bounds in formulae, speed, area, trigonometry and reverse percentages. 50 marks.

const paper: AiReviewPaper = {
  slug: "bounds-3",
  session: 11,
  topic: "Upper & Lower Bounds",
  title: "Limits of Accuracy, Set 2",
  subtitle: "Summative Revision, Session 11",
  minutes: 55,
  lessonAnchor: "bounds",
  source: `Questions adapted from "Limits of Accuracy: Exam Style Questions" by Corbettmaths (corbettmaths.com), © Corbettmaths. Wording, units and worked answers rewritten for this course.`,
  questions: [
    {
      n: 1,
      ctx: [
        "The width of a rectangle is 50 cm, correct to 2 significant figures.",
        "The length of the rectangle is 115 cm, correct to 3 significant figures.",
      ],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the lower bound of the width.", lines: 1, restate: "Width lower bound",
          steps: [m`The second significant figure is the units place, so the error is \(\pm 0.5\): \(49.5\).`],
          final: "49.5 cm",
          note: "Marks: (A1) 49.5.",
        },
        {
          l: "b", marks: 2, q: "Calculate the lower bound of the area of the rectangle.", lines: 3, restate: "Area lower bound",
          steps: [
            m`Length lower bound \(= 114.5\) (the third significant figure is the units place).`,
            m`\[49.5 \times 114.5 = 5667.75\]`,
          ],
          final: "5667.75 cm²",
          note: "Marks: (M1) 49.5 × 114.5, (A1) 5667.75.",
        },
      ],
    },
    {
      n: 2,
      ctx: [
        m`\(c = 70\), correct to 1 significant figure.`,
        m`\(d = 12\), correct to the nearest whole number.`,
      ],
      parts: [
        {
          l: "•", marks: 3, q: m`Find the lower bound of \(5c^2 - 2d^3\).`, lines: 5, restate: "Lower bound of 5c² − 2d³",
          steps: [
            m`\(65 \le c < 75\) and \(11.5 \le d < 12.5\).`,
            m`The expression is smallest when \(c\) is at its lower bound and \(d\) is at its upper bound (it is subtracted).`,
            m`\[5(65)^2 - 2(12.5)^3 = 21\,125 - 3906.25\]`,
            m`\[= 17\,218.75\]`,
          ],
          final: "17 218.75",
          note: "Marks: (A1) c = 65 and d = 12.5 chosen, (M1) substitution, (A1) 17 218.75.",
        },
      ],
    },
    {
      n: 3,
      ctx: [
        m`\[w = \dfrac{\sqrt{m}}{t}\]`,
        m`\(m = 4.2\), correct to 1 decimal place. \(t = 0.08\), correct to 1 significant figure.`,
      ],
      parts: [
        {
          l: "•", marks: 3, q: m`Find the lower bound of \(w\). Give your answer correct to two decimal places.`, lines: 5, restate: "Lower bound of w",
          steps: [
            m`\(4.15 \le m < 4.25\) and \(0.075 \le t < 0.085\).`,
            m`\(w\) is smallest when \(m\) is smallest and \(t\) is largest.`,
            m`\[w = \dfrac{\sqrt{4.15}}{0.085} = 23.97\ldots\]`,
          ],
          final: "23.97",
          note: "Marks: (A1) m = 4.15, (A1) t = 0.085, (A1) 23.97.",
        },
      ],
    },
    {
      n: 4,
      ctx: [
        "Declan ran 200 m in a time of 26.2 seconds.",
        "The distance was measured to the nearest 10 m. The time was measured to the nearest tenth of a second.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the upper bound of Declan's average speed. Give your answer correct to three significant figures.", lines: 4, restate: "Speed upper bound",
          steps: [
            m`Largest distance \(= 205\) m. Smallest time \(= 26.15\) s.`,
            m`\[\dfrac{205}{26.15} = 7.839\ldots\]`,
          ],
          final: "7.84 m/s",
          note: "Marks: (M1) 205 ÷ 26.15, (A1) 7.84.",
        },
        {
          l: "b", marks: 2, q: "Find the lower bound of Declan's average speed. Give your answer correct to three significant figures.", lines: 4, restate: "Speed lower bound",
          steps: [
            m`Smallest distance \(= 195\) m. Largest time \(= 26.25\) s.`,
            m`\[\dfrac{195}{26.25} = 7.428\ldots\]`,
          ],
          final: "7.43 m/s",
          note: "Marks: (M1) 195 ÷ 26.25, (A1) 7.43.",
        },
      ],
    },
    {
      n: 5,
      ctx: ["A circle has an area of 120 cm², correct to the nearest 10 cm²."],
      parts: [
        {
          l: "•", marks: 3, q: "Find the upper bound of the radius. Give your answer correct to three significant figures.", lines: 5, restate: "Radius upper bound",
          steps: [
            m`\(115 \le A < 125\).`,
            m`\[\pi r^2 = 125 \;\Rightarrow\; r = \sqrt{\dfrac{125}{\pi}} = 6.307\ldots\]`,
          ],
          final: "6.31 cm",
          note: "Marks: (A1) 125, (M1) r = √(A/π), (A1) 6.31.",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "Sophie estimates the distance from Bristol to Newcastle as 290 miles, to the nearest 10 miles.",
        "She estimates her average driving speed as 60 mph, to the nearest 10 mph.",
      ],
      parts: [
        {
          l: "•", marks: 4, q: "Find the lower bound of the journey time. Give your answer in hours and minutes, to the nearest minute.", lines: 6, restate: "Lower bound of time",
          steps: [
            m`Smallest distance \(= 285\) miles. Largest speed \(= 65\) mph.`,
            m`\[t = \dfrac{285}{65} = 4.3846\ldots \text{ hours}\]`,
            m`\[0.3846\ldots \times 60 = 23.08\ldots \text{ minutes}\]`,
          ],
          final: "4 hours 23 minutes",
          note: "Marks: (A1) 285, (A1) 65, (M1) distance ÷ speed, (A1) 4 h 23 min. The shortest time uses the smallest distance and the largest speed.",
        },
      ],
    },
    {
      n: 7,
      ctx: [
        m`The final velocity of an object is \(v = u + at\).`,
        m`\(u = 2.4\) m/s, correct to 2 significant figures. \(a = 12\) m/s², correct to 2 significant figures. \(t = 5\) s, correct to 1 significant figure.`,
      ],
      parts: [
        {
          l: "•", marks: 4, q: m`Find the lower bound of \(v\).`, lines: 5, restate: "Lower bound of v",
          steps: [
            m`\(u \ge 2.35\), \(a \ge 11.5\), \(t \ge 4.5\). All three are added or multiplied, so every lower bound is used.`,
            m`\[v = 2.35 + 11.5 \times 4.5\]`,
            m`\[= 2.35 + 51.75 = 54.1\]`,
          ],
          final: "54.1 m/s",
          note: "Marks: (A1) 2.35, (A1) 11.5 and 4.5, (M1) substitution, (A1) 54.1.",
        },
      ],
    },
    {
      n: 8,
      ctx: [
        m`The curved surface area of a cone is \(A = \pi r l\), where \(r\) is the base radius and \(l\) is the slant height.`,
        m`\(A = 220\) cm², correct to 3 significant figures. \(r = 8\) cm, correct to 1 significant figure.`,
      ],
      parts: [
        {
          l: "•", marks: 3, q: m`Find the upper bound of \(l\). Give your answer correct to three significant figures.`, lines: 5, restate: "Upper bound of l",
          steps: [
            m`\(219.5 \le A < 220.5\) and \(7.5 \le r < 8.5\).`,
            m`\[l = \dfrac{A}{\pi r}\]`,
            m`\(l\) is largest when \(A\) is largest and \(r\) is smallest:`,
            m`\[l = \dfrac{220.5}{\pi \times 7.5} = 9.358\ldots\]`,
          ],
          final: "9.36 cm",
          note: "Marks: (A1) A = 220.5 and r = 7.5, (M1) A ÷ (π r), (A1) 9.36.",
        },
      ],
    },
    {
      n: 9,
      ctx: [
        "In triangle RST, angle T is a right angle. Angle SRT is 53°, correct to the nearest degree. ST is 17 cm, correct to the nearest centimetre.",
        "Angle SRT is opposite ST. RS is the hypotenuse.",
      ],
      parts: [
        {
          l: "•", marks: 4, q: "Find the upper bound of the length of RS. Give your answer correct to three significant figures.", lines: 6, restate: "Upper bound of RS",
          steps: [
            m`\[\sin \theta = \dfrac{\text{ST}}{\text{RS}} \;\Rightarrow\; \text{RS} = \dfrac{\text{ST}}{\sin \theta}\]`,
            m`RS is largest when ST is largest (\(17.5\)) and \(\theta\) is smallest (\(52.5^\circ\)), because sine is smaller for a smaller acute angle.`,
            m`\[\text{RS} = \dfrac{17.5}{\sin 52.5^\circ} = 22.05\ldots\]`,
          ],
          final: "22.1 cm",
          note: "Marks: (M1) RS = ST ÷ sin θ, (A1) 17.5, (A1) 52.5°, (A1) 22.1. Set the GDC to degrees.",
        },
      ],
    },
    {
      n: 10,
      ctx: [
        "In triangle EFG, angle F is a right angle. EG = 24 cm and FG = 15 cm, both correct to the nearest centimetre.",
        "EG is the hypotenuse and FG is adjacent to angle EGF.",
      ],
      parts: [
        {
          l: "•", marks: 4, q: "Find the lower bound of angle EGF. Give your answer correct to one decimal place.", lines: 6, restate: "Lower bound of angle EGF",
          steps: [
            m`\[\cos \theta = \dfrac{\text{FG}}{\text{EG}}\]`,
            m`Cosine decreases as the angle increases, so \(\theta\) is smallest when \(\cos\theta\) is largest: FG \(= 15.5\) and EG \(= 23.5\).`,
            m`\[\theta = \cos^{-1}\!\left(\dfrac{15.5}{23.5}\right) = 48.73\ldots^\circ\]`,
          ],
          final: "48.7°",
          note: "Marks: (M1) cos θ = FG ÷ EG, (A1) 15.5 and 23.5 chosen, (M1) cos⁻¹, (A1) 48.7. Common error: 15 ÷ 24 gives 51.3°.",
        },
      ],
    },
    {
      n: 11,
      ctx: ["The base of a triangle is 10 cm and its perpendicular height is 15 cm. Both are correct to 2 significant figures."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the upper bound of the area of the triangle.", lines: 3, restate: "Area upper bound",
          steps: [
            m`\(9.5 \le b < 10.5\) and \(14.5 \le h < 15.5\).`,
            m`\[\tfrac{1}{2}(10.5)(15.5) = 81.375\]`,
          ],
          final: "81.375 cm²",
          note: "Marks: (M1) ½ × 10.5 × 15.5, (A1) 81.375.",
        },
        {
          l: "b", marks: 2, q: "Find the lower bound of the area of the triangle.", lines: 3, restate: "Area lower bound",
          steps: [m`\[\tfrac{1}{2}(9.5)(14.5) = 68.875\]`],
          final: "68.875 cm²",
          note: "Marks: (M1) ½ × 9.5 × 14.5, (A1) 68.875.",
        },
      ],
    },
    {
      n: 12,
      ctx: [
        "In triangle ABC, AC = 6 cm and BC = 7 cm, both correct to the nearest centimetre.",
        "Angle ACB = 108°, correct to the nearest degree.",
      ],
      parts: [
        {
          l: "•", marks: 4, q: "Find the lower bound of the area of triangle ABC. Give your answer correct to three significant figures.", lines: 6, restate: "Area lower bound",
          steps: [
            m`\[\text{Area} = \tfrac{1}{2}\,ab\sin C\]`,
            m`\(a \ge 5.5\) and \(b \ge 6.5\). For angles above \(90^\circ\), sine decreases as the angle increases, so the smallest sine uses \(C = 108.5^\circ\).`,
            m`\[\tfrac{1}{2}(5.5)(6.5)\sin 108.5^\circ = 16.95\ldots\]`,
          ],
          final: "17.0 cm²",
          note: "Marks: (M1) ½ ab sin C, (A1) 5.5 and 6.5, (A1) 108.5°, (A1) 17.0. Common error: using 107.5°, which gives a larger sine.",
        },
      ],
    },
    {
      n: 13,
      instruction: "In this question, give the answer correct to the nearest dollar.",
      ctx: ["After a reduction of 18% from the original price, a motorbike sold for 6200 USD. Both values are correct to 2 significant figures."],
      parts: [
        {
          l: "•", marks: 3, q: "Find the greatest possible original price of the motorbike.", lines: 5, restate: "Greatest original price",
          steps: [
            m`Sale price \(< 6250\). Reduction \(\ge 17.5\%\), so the sale price is at most \(82.5\%\) of the original.`,
            m`\[\text{original} = \dfrac{6250}{0.825} = 7575.75\ldots\]`,
          ],
          final: "7576 USD",
          note: "Marks: (A1) 6250 and 17.5%, (M1) 6250 ÷ 0.825, (A1) 7576. The smaller the reduction, the larger the original price.",
        },
      ],
    },
    {
      n: 14,
      ctx: [
        "A sculptor wants to transport a rock in the shape of a sphere with radius 0.3 m, correct to the nearest centimetre.",
        m`The density of the rock is 7.98 g/cm³. The truck can carry up to 1000 kg, correct to 1 significant figure. Use \(V = \tfrac{4}{3}\pi r^3\).`,
      ],
      parts: [
        {
          l: "•", marks: 4, q: "Determine whether the sculptor can safely transport the rock. Show your working.", lines: 7, restate: "Safe to transport?",
          steps: [
            m`Largest radius \(= 30.5\) cm.`,
            m`\[V = \tfrac{4}{3}\pi (30.5)^3 = 118\,847\ \text{cm}^3\]`,
            m`\[\text{mass} = 118\,847 \times 7.98 = 948\,399\ \text{g} = 948.4\ \text{kg}\]`,
            m`The truck limit has lower bound \(950\) kg. Since \(948.4 < 950\), the rock is within the limit even in the worst case.`,
          ],
          final: "Yes: greatest mass 948.4 kg is below the lowest possible limit 950 kg",
          note: "Marks: (A1) 30.5, (M1) volume of a sphere, (A1) 948.4 kg, (R1) compared with 950 kg. Compare the worst mass with the worst limit.",
        },
      ],
    },
  ],
};

export default paper;
