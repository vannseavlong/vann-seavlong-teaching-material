import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 29: Unit 3 mixed paper (lines, 3D, trigonometry, sectors).
const paper: AiReviewPaper = {
  slug: "unit3-mixed",
  session: 29,
  topic: "Geometry and Trigonometry: Mixed",
  title: "Geometry and Trigonometry: Mixed",
  subtitle: "Summative Revision, Session 29",
  minutes: 38,
  lessonAnchor: "lines",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`Points \(A(2, 3)\) and \(B(8, 11)\) are on a plan, with units in metres.`],
      parts: [
        part("a", 2, m`Find the distance \(AB\).`, [m`\[d = \sqrt{6^2 + 8^2} = 10\ \text{m}\]`], "10 m", "Marks: (M1) distance formula, (A1) 10."),
        part("b", 2, m`Find the gradient of \(AB\) and the gradient of a line perpendicular to \(AB\).`, [m`\[m_{AB} = \dfrac{11-3}{8-2} = \dfrac43,\quad m_{\perp} = -\dfrac34\]`], "4/3 and -3/4", "Marks: (A1) 4/3, (A1) -3/4."),
      ],
    },
    {
      n: 2, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      ctx: [m`A room is a cuboid \(6\ \text{m}\) long, \(4\ \text{m}\) wide and \(3\ \text{m}\) high.`],
      parts: [
        part("a", 2, m`Find the length of the longest diagonal from one corner of the floor to the opposite corner of the ceiling.`, [m`\[d = \sqrt{6^2 + 4^2 + 3^2} = \sqrt{61} = 7.81\ \text{m}\]`], "7.81 m", "Marks: (M1) 3D distance, (A1) 7.81."),
        part("b", 3, m`Find the angle between this diagonal and the floor.`, [m`\[\text{floor diagonal} = \sqrt{6^2 + 4^2} = 7.211\]`, m`\[\tan\theta = \dfrac{3}{7.211} \Rightarrow \theta = 22.6^{\circ}\]`], "22.6°", "Marks: (M1) floor diagonal, (M1) tan, (A1) 22.6."),
      ],
    },
    {
      n: 3, section: "B",
      instruction: "In this question, give answers correct to three significant figures.",
      ctx: [m`A triangular field \(ABC\) has \(AB = 120\ \text{m}\), \(AC = 150\ \text{m}\) and angle \(BAC = 50^{\circ}\). A circular flower bed in the shape of a sector of radius \(40\ \text{m}\) is built at corner \(A\), using the angle of the field at \(A\).`],
      parts: [
        part("a", 3, m`Find the length of \(BC\).`, [m`\[BC^2 = 120^2 + 150^2 - 2(120)(150)\cos 50^{\circ} = 13\,759.6\]`, m`\[BC = 117\ \text{m}\]`], "117 m", "Marks: (M1) cosine rule, (A1) substitution, (A1) 117."),
        part("b", 2, m`Find the area of the field.`, [m`\[A = \tfrac12(120)(150)\sin 50^{\circ} = 6890\ \text{m}^2\]`], "6890 m²", "Marks: (M1) 1/2 ab sin C, (A1) 6890."),
        part("c", 3, m`Find angle \(ABC\).`, [m`\[\cos B = \dfrac{120^2 + 117.3^2 - 150^2}{2(120)(117.3)} = 0.2010\]`, m`\[B = 78.4^{\circ}\]`], "78.4°", "Marks: (M1) cosine rule for the angle, (A1) substitution, (A1) 78.4."),
        part("d", 2, m`Find the area of the flower bed.`, [m`\[A = \dfrac{50}{360}\times \pi(40)^2 = 698\ \text{m}^2\]`], "698 m²", "Marks: (M1) sector formula, (A1) 698."),
        part("e", 2, m`Find the length of the curved edge of the flower bed.`, [m`\[l = \dfrac{50}{360}\times 2\pi(40) = 34.9\ \text{m}\]`], "34.9 m", "Marks: (M1) arc formula, (A1) 34.9."),
        part("f", 2, m`Find the percentage of the field that the flower bed covers.`, [m`\[\dfrac{698.1}{6894.4} \times 100 = 10.1\%\]`], "10.1%", "Marks: (M1) ratio, (A1) 10.1."),
        part("g", 2, m`Fencing costs \(\$18\) per metre. Find the cost of fencing the whole boundary of the field.`, [m`\[P = 120 + 150 + 117.3 = 387.3\ \text{m},\quad 387.3 \times 18 = \$6970\]`], "$6970", "Marks: (M1) perimeter times 18, (A1) 6970."),
      ],
    },
  ],
};

export default paper;
