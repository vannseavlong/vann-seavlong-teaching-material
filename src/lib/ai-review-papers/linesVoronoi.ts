import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 21: Lines and Voronoi diagrams (AI Unit 3, booklet prior learning and 2.1).
const paper: AiReviewPaper = {
  slug: "lines-voronoi",
  session: 21,
  topic: "Lines and Voronoi Diagrams",
  title: "Lines and Voronoi Diagrams",
  subtitle: "Summative Revision, Session 21",
  minutes: 32,
  lessonAnchor: "lines",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`Points \(A(1, 2)\) and \(B(7, 10)\) are on a map, with units in kilometres.`],
      parts: [
        part("a", 2, m`Find the coordinates of the midpoint of \(AB\).`, [m`\[\left(\dfrac{1+7}{2},\ \dfrac{2+10}{2}\right) = (4, 6)\]`], "(4, 6)", "Marks: (M1) midpoint formula, (A1) (4, 6)."),
        part("b", 2, m`Find the distance \(AB\).`, [m`\[d = \sqrt{(7-1)^2 + (10-2)^2} = \sqrt{100} = 10\ \text{km}\]`], "10 km", "Marks: (M1) distance formula, (A1) 10."),
        part("c", 2, m`Find the equation of line \(AB\) in the form \(y - y_1 = m(x - x_1)\).`, [m`\[m = \dfrac{10 - 2}{7 - 1} = \dfrac43,\quad y - 2 = \dfrac43(x - 1)\]`], "y - 2 = (4/3)(x - 1)", "Marks: (A1) gradient 4/3, (A1) equation."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`Points \(A(0, 2)\) and \(B(6, 6)\) lie on a plan. The perpendicular bisector of \(AB\) is a line \(L\).`],
      parts: [
        part("a", 1, m`Find the midpoint of \(AB\).`, [m`\[(3, 4)\]`], "(3, 4)", "Marks: (A1) (3, 4)."),
        part("b", 2, m`Find the gradient of \(L\).`, [m`\[m_{AB} = \dfrac{6-2}{6-0} = \dfrac23,\quad m_L = -\dfrac32\]`], "-3/2", "Marks: (M1) m_AB, (A1) -3/2 using m_1 m_2 = -1."),
        part("c", 2, m`Find the equation of \(L\) in the form \(ax + by + d = 0\).`, [m`\[y - 4 = -\dfrac32(x - 3) \Rightarrow 3x + 2y - 17 = 0\]`], "3x + 2y - 17 = 0", "Marks: (M1) point-gradient form, (A1) 3x + 2y - 17 = 0."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`Three phone towers are at \(P(2, 1)\), \(Q(8, 1)\) and \(R(5, 7)\), with units in kilometres. The region served by each tower is a cell of a Voronoi diagram.`],
      parts: [
        part("a", 2, m`Find the equation of the perpendicular bisector of \(PQ\).`, [m`\[\text{midpoint } (5, 1);\ PQ \text{ is horizontal, so the bisector is vertical}\]`], "x = 5", "Marks: (M1) midpoint, (A1) x = 5."),
        part("b", 3, m`Find the equation of the perpendicular bisector of \(PR\).`, [m`\[\text{midpoint } (3.5, 4),\quad m_{PR} = \dfrac{7-1}{5-2} = 2,\quad m = -\dfrac12\]`, m`\[y - 4 = -\dfrac12(x - 3.5) \Rightarrow y = -0.5x + 5.75\]`], "y = -0.5x + 5.75", "Marks: (A1) midpoint, (A1) perpendicular gradient, (A1) equation."),
        part("c", 2, m`Find the coordinates of the Voronoi vertex where the two bisectors meet.`, [m`\[x = 5,\quad y = -0.5(5) + 5.75 = 3.25\]`], "(5, 3.25)", "Marks: (M1) substitute x = 5, (A1) (5, 3.25)."),
        part("d", 2, m`Find the distance from the vertex to \(P\), and say what it represents.`, [m`\[\sqrt{(5-2)^2 + (3.25-1)^2} = 3.75\ \text{km}\]`], "3.75 km: the vertex is equidistant from P, Q and R", "Marks: (M1) distance, (A1) 3.75 with meaning."),
        part("e", 2, m`A house is at \((4, 3)\). Find which tower is nearest.`, [m`\[d_P = \sqrt{4 + 4} = 2.83,\quad d_Q = \sqrt{16 + 4} = 4.47,\quad d_R = \sqrt{1 + 16} = 4.12\]`], "Tower P", "Marks: (M1) three distances, (A1) P."),
      ],
    },
  ],
};

export default paper;
