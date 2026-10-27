import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 22: Areas, solids and 3D coordinates (AI Unit 3, booklet prior learning, 3.1, 3.2).
const paper: AiReviewPaper = {
  slug: "solids-3d",
  session: 22,
  topic: "Areas, Solids and 3D Coordinates",
  title: "Areas, Solids and 3D Coordinates",
  subtitle: "Summative Revision, Session 22",
  minutes: 32,
  lessonAnchor: "solids-3d",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      instruction: "In this question, give answers correct to three significant figures where needed.",
      ctx: [m`A plot of land is a trapezoid with parallel sides \(8\ \text{m}\) and \(14\ \text{m}\), and height \(5\ \text{m}\). Next to it is a parallelogram-shaped lawn with base \(9\ \text{m}\) and height \(4\ \text{m}\).`],
      parts: [
        part("a", 2, m`Find the area of the trapezoid.`, [m`\[A = \tfrac12(8 + 14)(5) = 55\ \text{m}^2\]`], "55 m²", "Marks: (M1) 1/2(a+b)h, (A1) 55."),
        part("b", 1, m`Find the area of the parallelogram.`, [m`\[A = bh = 9 \times 4 = 36\ \text{m}^2\]`], "36 m²", "Marks: (A1) 36."),
        part("c", 1, m`Find the total area.`, [m`\[55 + 36 = 91\ \text{m}^2\]`], "91 m²", "Marks: (A1) 91."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`A drone moves from \(A(1, 2, 3)\) to \(B(5, 6, 9)\), with units in metres.`],
      parts: [
        part("a", 2, m`Find the midpoint of \(AB\).`, [m`\[\left(\dfrac{1+5}{2},\dfrac{2+6}{2},\dfrac{3+9}{2}\right) = (3, 4, 6)\]`], "(3, 4, 6)", "Marks: (M1) midpoint formula, (A1) (3, 4, 6)."),
        part("b", 2, m`Find the distance \(AB\).`, [m`\[d = \sqrt{4^2 + 4^2 + 6^2} = \sqrt{68} = 8.25\ \text{m}\]`], "8.25 m", "Marks: (M1) 3D distance formula, (A1) 8.25."),
      ],
    },
    {
      n: 3, section: "B",
      instruction: "In this question, give answers correct to three significant figures.",
      ctx: [m`A grain silo is a cylinder of radius \(3\ \text{m}\) and height \(8\ \text{m}\), with a cone of height \(4\ \text{m}\) on top. A separate gift box is a square-based right pyramid with base side \(10\ \text{cm}\) and vertical height \(12\ \text{cm}\).`],
      parts: [
        part("a", 2, m`Find the volume of the cylinder.`, [m`\[V = \pi r^2 h = \pi(3^2)(8) = 226\ \text{m}^3\]`], "226 m³", "Marks: (M1) pi r^2 h, (A1) 226."),
        part("b", 2, m`Find the volume of the cone.`, [m`\[V = \tfrac13 \pi r^2 h = \tfrac13 \pi (3^2)(4) = 37.7\ \text{m}^3\]`], "37.7 m³", "Marks: (M1) 1/3 pi r^2 h, (A1) 37.7."),
        part("c", 1, m`Find the total volume of the silo.`, [m`\[226.19 + 37.70 = 264\ \text{m}^3\]`], "264 m³", "Marks: (A1) 264."),
        part("d", 2, m`Find the volume of the pyramid.`, [m`\[V = \tfrac13 Ah = \tfrac13(100)(12) = 400\ \text{cm}^3\]`], "400 cm³", "Marks: (M1) 1/3 Ah with A = 100, (A1) 400."),
        part("e", 3, m`Find the total surface area of the pyramid (base and four triangular faces).`, [m`\[\text{slant height } = \sqrt{12^2 + 5^2} = 13\ \text{cm}\]`, m`\[\text{one face } = \tfrac12(10)(13) = 65,\quad \text{total} = 100 + 4(65) = 360\ \text{cm}^2\]`], "360 cm²", "Marks: (M1) slant height, (M1) face area, (A1) 360."),
        part("f", 2, m`A spherical ball has radius \(6\ \text{cm}\). Find its surface area.`, [m`\[A = 4\pi r^2 = 4\pi(6^2) = 452\ \text{cm}^2\]`], "452 cm²", "Marks: (M1) 4 pi r^2, (A1) 452."),
      ],
    },
  ],
};

export default paper;
