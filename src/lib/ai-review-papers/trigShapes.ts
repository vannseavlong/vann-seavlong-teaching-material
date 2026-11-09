import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 32: Trigonometry in shapes (AI Unit 3): isosceles triangles, parallelograms, regular polygons,
// composite shapes, quadrilaterals with a shared diagonal. Diagrams are described in words.
const paper: AiReviewPaper = {
  slug: "trig-shapes",
  session: 32,
  topic: "Trigonometry in Shapes",
  title: "Trigonometry in Shapes",
  subtitle: "Summative Revision, Session 32",
  minutes: 32,
  lessonAnchor: "shapes",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      instruction: "In this question, set the GDC to degree mode and give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-q1.svg", alt: "Isosceles triangle with base 14 cm and equal sides 9 cm", width: 580, height: 240 },
      ctx: [m`A triangular sign is isosceles. Its base is \(14\ \text{cm}\) and each of its equal sides is \(9\ \text{cm}\).`],
      parts: [
        part("a", 2, m`Find the size of a base angle of the sign.`, [m`\[\cos\theta = \dfrac{7}{9} \Rightarrow \theta = 38.9^{\circ}\]`], "38.9°", "Marks: (M1) right-angled triangle with half the base 7 and hypotenuse 9, (A1) 38.9."),
        part("b", 2, m`Find the height of the sign.`, [m`\[h = \sqrt{9^2 - 7^2} = \sqrt{32} = 5.66\ \text{cm}\]`], "5.66 cm", "Marks: (M1) Pythagoras or 9 sin 38.9, (A1) 5.66."),
        part("c", 2, m`Calculate the area of the sign.`, [m`\[A = \tfrac12(14)(5.657) = 39.6\ \text{cm}^2\]`], "39.6 cm²", "Marks: (M1) half base times height, (A1) 39.6."),
      ],
    },
    {
      n: 2, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-q2.svg", alt: "Parallelogram ABCD with AB 14 m, AD 9 m and angle DAB 64 degrees", width: 580, height: 260 },
      ctx: [m`A field \(ABCD\) is a parallelogram with \(AB = 14\ \text{m}\) and \(AD = 9\ \text{m}\). Angle \(DAB = 64^{\circ}\).`],
      parts: [
        part("a", 2, m`Calculate the area of the field.`, [m`\[A = 14 \times 9 \times \sin 64^{\circ} = 113\ \text{m}^2\]`], "113 m²", "Marks: (M1) ab sin(theta), (A1) 113."),
        part("b", 3, m`Find the length of the diagonal \(BD\).`, [m`\[BD^2 = 14^2 + 9^2 - 2(14)(9)\cos 64^{\circ}\]`, m`\[BD^2 = 166.5 \Rightarrow BD = 12.9\ \text{m}\]`], "12.9 m", "Marks: (M1) cosine rule in triangle ABD, (A1) correct substitution, (A1) 12.9."),
      ],
    },
    {
      n: 3, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-q3.svg", alt: "Regular octagon with a dashed line of 15 cm from the centre O to a corner", width: 580, height: 290 },
      ctx: [m`A table top is a regular octagon. The distance from the centre to each corner is \(15\ \text{cm}\).`],
      parts: [
        part("a", 2, m`Find the length of one side of the table top.`, [m`\[s = 2(15)\sin 22.5^{\circ} = 11.5\ \text{cm}\]`], "11.5 cm", "Marks: (M1) half the central angle 22.5, (A1) 11.5."),
        part("b", 2, m`Calculate the area of the table top.`, [m`\[A = 8 \times \tfrac12(15)(15)\sin 45^{\circ} = 636\ \text{cm}^2\]`], "636 cm²", "Marks: (M1) eight triangles with apex angle 45, (A1) 636."),
        part("c", 1, m`Write down the size of one interior angle of the octagon.`, [m`\[180^{\circ} - \dfrac{360^{\circ}}{8} = 135^{\circ}\]`], "135°", "Marks: (A1) 135."),
      ],
    },
    {
      n: 4, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-q4.svg", alt: "Rectangle 10 m long and 6 m wide with a semicircle of diameter 6 m on one end", width: 580, height: 290 },
      ctx: [m`A garden bed is a rectangle \(10\ \text{m}\) long and \(6\ \text{m}\) wide with a semicircle added on one of the \(6\ \text{m}\) ends. The diameter of the semicircle is \(6\ \text{m}\).`],
      parts: [
        part("a", 3, m`Calculate the area of the bed.`, [m`\[A = 10 \times 6 + \tfrac12\pi(3^2) = 60 + 14.14\]`, m`\[A = 74.1\ \text{m}^2\]`], "74.1 m²", "Marks: (A1) 60, (M1) half circle area, (A1) 74.1."),
        part("b", 3, m`Calculate the length of the edge around the bed.`, [m`\[P = 10 + 10 + 6 + \pi(3) = 35.4\ \text{m}\]`], "35.4 m", "Marks: (M1) arc length of a half circle, (M1) two long sides and the other end only, (A1) 35.4."),
      ],
    },
    {
      n: 5, section: "B",
      instruction: "In this question, set the GDC to degree mode, store values for later parts and give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-q5.svg", alt: "Quadrilateral ABCD with AB 120 m, BC 95 m, CD 70 m, DA 105 m, angle ABC 82 degrees and the diagonal AC dashed", width: 580, height: 290 },
      ctx: [m`A plot of land \(ABCD\) has \(AB = 120\ \text{m}\), \(BC = 95\ \text{m}\), \(CD = 70\ \text{m}\) and \(DA = 105\ \text{m}\). Angle \(ABC = 82^{\circ}\). The diagonal \(AC\) is drawn (diagram not to scale).`],
      parts: [
        part("a", 3, m`Find the length of \(AC\).`, [m`\[AC^2 = 120^2 + 95^2 - 2(120)(95)\cos 82^{\circ}\]`, m`\[AC^2 = 20252 \Rightarrow AC = 142\ \text{m}\]`], "142 m", "Marks: (M1) cosine rule, (A1) correct substitution, (A1) 142."),
        part("b", 3, m`Find the size of angle \(ADC\).`, [m`\[\cos D = \dfrac{70^2 + 105^2 - 142.31^2}{2(70)(105)}\]`, m`\[\angle ADC = 107^{\circ}\]`], "107°", "Marks: (M1) cosine rule for the angle, (A1) correct substitution using the stored AC, (A1) 107."),
        part("c", 4, m`Calculate the area of the plot.`, [m`\[\text{triangle } ABC:\ \tfrac12(120)(95)\sin 82^{\circ} = 5645\]`, m`\[\text{triangle } ACD:\ \tfrac12(70)(105)\sin 107.1^{\circ} = 3512\]`, m`\[A = 9157 \approx 9160\ \text{m}^2\]`], "9160 m²", "Marks: (M1) area of ABC, (A1) 5645, (M1) area of ACD, (A1) 9160."),
        part("d", 3, m`Find the size of angle \(BAC\).`, [m`\[\dfrac{\sin(BAC)}{95} = \dfrac{\sin 82^{\circ}}{142.31}\]`, m`\[\angle BAC = 41.4^{\circ}\]`], "41.4°", "Marks: (M1) sine rule, (A1) correct substitution, (A1) 41.4."),
        part("e", 3, m`Fencing costs \(\$18.50\) per metre. Find the cost of fencing the whole boundary of the plot, to three significant figures.`, [m`\[\text{perimeter} = 120 + 95 + 70 + 105 = 390\ \text{m}\]`, m`\[\text{cost} = 390 \times 18.50 = \$7215 \approx \$7220\]`], "$7220", "Marks: (A1) 390, (M1) multiply by 18.50, (A1) 7220."),
      ],
    },
    {
      n: 6, section: "B",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-q6.svg", alt: "Sector OAB of radius 12 m and angle 70 degrees joined to triangle OBC with OC 18 m and angle BOC 55 degrees, chord AB dashed", width: 580, height: 270 },
      ctx: [m`A park bed has a sector \(OAB\) with centre \(O\), radius \(12\ \text{m}\) and angle \(AOB = 70^{\circ}\). A triangle \(OBC\) is joined to the sector along the radius \(OB\), with \(OC = 18\ \text{m}\) and angle \(BOC = 55^{\circ}\). The chord \(AB\) cuts a segment from the sector (diagram not to scale).`],
      parts: [
        part("a", 2, m`Find the area of the sector \(OAB\).`, [m`\[A = \dfrac{70}{360}\pi(12^2) = 88.0\ \text{m}^2\]`], "88.0 m²", "Marks: (M1) fraction 70/360 of the circle, (A1) 88.0."),
        part("b", 2, m`Find the area of triangle \(OAB\).`, [m`\[A = \tfrac12(12)(12)\sin 70^{\circ} = 67.7\ \text{m}^2\]`], "67.7 m²", "Marks: (M1) 1/2 ab sin C, (A1) 67.7."),
        part("c", 2, m`Hence find the area of the segment cut off by the chord \(AB\).`, [m`\[88.0 - 67.7 = 20.3\ \text{m}^2\]`], "20.3 m²", "Marks: (M1) sector minus triangle, (A1) 20.3."),
        part("d", 3, m`Find the length of \(BC\).`, [m`\[BC^2 = 12^2 + 18^2 - 2(12)(18)\cos 55^{\circ}\]`, m`\[BC = 14.8\ \text{m}\]`], "14.8 m", "Marks: (M1) cosine rule, (A1) correct substitution, (A1) 14.8."),
        part("e", 2, m`Find the total area of the sector \(OAB\) and the triangle \(OBC\).`, [m`\[\text{triangle } OBC:\ \tfrac12(12)(18)\sin 55^{\circ} = 88.5\]`, m`\[88.0 + 88.5 = 176\ \text{m}^2\]`], "176 m²", "Marks: (M1) area of OBC, (A1) 176."),
        part("f", 3, m`Find the length of the outer edge of the bed, made of arc \(AB\), \(BC\), \(CO\) and \(OA\).`, [m`\[\text{arc } AB = \dfrac{70}{360}\times 2\pi(12) = 14.7\]`, m`\[14.66 + 14.84 + 18 + 12 = 59.5\ \text{m}\]`], "59.5 m", "Marks: (M1) arc length, (A1) 14.7, (A1) 59.5."),
      ],
    },
  ],
};

export default paper;
