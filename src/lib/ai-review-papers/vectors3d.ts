import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 31: Vectors in 3D (AI Unit 3, HL).
const paper: AiReviewPaper = {
  slug: "vectors-3d",
  session: 31,
  topic: "Vectors in 3D (HL)",
  title: "Vectors in 3D",
  subtitle: "Summative Revision, Session 31 (HL)",
  minutes: 30,
  lessonAnchor: "vectors",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      ctx: [m`Points \(A(2, 1, -3)\) and \(B(5, 5, 9)\) are given, with units in metres.`],
      parts: [
        part("a", 2, m`Write down \(\overrightarrow{AB}\) as a column vector.`, [m`\[\overrightarrow{AB} = \begin{pmatrix}5-2\\5-1\\9-(-3)\end{pmatrix} = \begin{pmatrix}3\\4\\12\end{pmatrix}\]`], "(3, 4, 12)", "Marks: (M1) b - a, (A1) (3, 4, 12)."),
        part("b", 2, m`Find \(|\overrightarrow{AB}|\).`, [m`\[\sqrt{3^2 + 4^2 + 12^2} = \sqrt{169} = 13\]`], "13 m", "Marks: (M1) magnitude formula, (A1) 13."),
        part("c", 2, m`Find the unit vector in the direction of \(\overrightarrow{AB}\).`, [m`\[\hat{\mathbf{u}} = \dfrac{1}{13}\begin{pmatrix}3\\4\\12\end{pmatrix}\]`], "(3/13, 4/13, 12/13)", "Marks: (M1) divide by magnitude, (A1) (3/13, 4/13, 12/13)."),
        part("d", 1, m`Find the midpoint of \(AB\).`, [m`\[\left(\dfrac{2+5}{2},\ \dfrac{1+5}{2},\ \dfrac{-3+9}{2}\right) = (3.5, 3, 3)\]`], "(3.5, 3, 3)", "Marks: (A1) (3.5, 3, 3)."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`Let \(\mathbf{p} = \begin{pmatrix}2\\-3\\1\end{pmatrix}\) and \(\mathbf{q} = \begin{pmatrix}4\\1\\k\end{pmatrix}\).`],
      parts: [
        part("a", 2, m`Find \(\mathbf{p}\cdot\mathbf{q}\) when \(k = 5\).`, [m`\[2(4) + (-3)(1) + 1(5) = 10\]`], "10", "Marks: (M1) scalar product, (A1) 10."),
        part("b", 2, m`Find the value of \(k\) for which \(\mathbf{p}\) and \(\mathbf{q}\) are perpendicular.`, [m`\[8 - 3 + k = 0 \Rightarrow k = -5\]`], "k = -5", "Marks: (M1) p.q = 0, (A1) k = -5."),
        part("c", 3, m`When \(k = 2\), find the angle between \(\mathbf{p}\) and \(\mathbf{q}\), correct to 1 decimal place.`, [m`\[\mathbf{p}\cdot\mathbf{q} = 8 - 3 + 2 = 7,\quad |\mathbf{p}| = \sqrt{14},\quad |\mathbf{q}| = \sqrt{21}\]`, m`\[\cos\theta = \dfrac{7}{\sqrt{14}\sqrt{21}} = 0.4082 \Rightarrow \theta = 65.9^{\circ}\]`], "65.9 degrees", "Marks: (A1) p.q = 7, (M1) cosine formula, (A1) 65.9."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`A drone starts at \((10, 20, 60)\) metres and moves with constant velocity \((-3, -4, -12)\) m/s. Its position after \(t\) seconds is \(\mathbf{r}\).`],
      parts: [
        part("a", 1, m`Write down \(\mathbf{r}\) in terms of \(t\).`, [m`\[\mathbf{r} = \begin{pmatrix}10\\20\\60\end{pmatrix} + t\begin{pmatrix}-3\\-4\\-12\end{pmatrix}\]`], "r = (10, 20, 60) + t(-3, -4, -12)", "Marks: (A1) correct equation."),
        part("b", 2, m`Find the speed of the drone.`, [m`\[\sqrt{(-3)^2 + (-4)^2 + (-12)^2} = \sqrt{169} = 13\]`], "13 m/s", "Marks: (M1) magnitude of velocity, (A1) 13."),
        part("c", 2, m`Find the position of the drone after 4 seconds.`, [m`\[(10 - 12,\ 20 - 16,\ 60 - 48) = (-2, 4, 12)\]`], "(-2, 4, 12)", "Marks: (M1) substitute t = 4, (A1) (-2, 4, 12)."),
        part("d", 3, m`The ground is the plane \(z = 0\). Find when the drone reaches the ground and where it lands.`, [m`\[60 - 12t = 0 \Rightarrow t = 5\]`, m`\[(10 - 15,\ 20 - 20,\ 0) = (-5, 0, 0)\]`], "t = 5 s, at (-5, 0, 0)", "Marks: (M1) z = 0, (A1) t = 5, (A1) (-5, 0, 0)."),
      ],
    },
    {
      n: 4, section: "B",
      ctx: [m`Line \(L_1\) has equation \(\mathbf{r} = \begin{pmatrix}1\\2\\3\end{pmatrix} + \lambda\begin{pmatrix}2\\1\\-1\end{pmatrix}\). Line \(L_2\) has direction vector \(\begin{pmatrix}1\\1\\2\end{pmatrix}\).`],
      parts: [
        part("a", 2, m`Show that the point \((5, 4, 1)\) lies on \(L_1\).`, [m`\[1 + 2\lambda = 5 \Rightarrow \lambda = 2;\quad y:\ 2 + 2 = 4\ \checkmark;\quad z:\ 3 - 2 = 1\ \checkmark\]`], "lambda = 2 gives (5, 4, 1)", "Marks: (M1) find lambda from one coordinate, (A1) other two coordinates agree."),
        part("b", 2, m`Show that \(L_1\) is perpendicular to a line with direction \((1, -2, 0)\).`, [m`\[2(1) + 1(-2) + (-1)(0) = 0\]`], "Scalar product of directions is 0", "Marks: (M1) scalar product of directions, (A1) 0."),
        part("c", 3, m`Find the acute angle between \(L_1\) and \(L_2\), correct to 1 decimal place.`, [m`\[\mathbf{d}_1\cdot\mathbf{d}_2 = 2 + 1 - 2 = 1,\quad |\mathbf{d}_1| = |\mathbf{d}_2| = \sqrt{6}\]`, m`\[\cos\theta = \dfrac16 \Rightarrow \theta = 80.4^{\circ}\]`], "80.4 degrees", "Marks: (A1) d1.d2 = 1, (M1) cosine formula, (A1) 80.4."),
      ],
    },
  ],
};

export default paper;
