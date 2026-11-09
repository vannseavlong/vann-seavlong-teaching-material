import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 33: Trigonometry in shapes, harder set (AI Unit 3): 2D shapes as faces and sections of
// 3D solids (prisms, pyramids, a cone made from a sector, a cuboid). Every question has a 3D diagram.
const paper: AiReviewPaper = {
  slug: "trig-shapes-3d",
  session: 33,
  topic: "Trigonometry in Shapes (3D)",
  title: "Trigonometry in Shapes: 3D Solids",
  subtitle: "Summative Revision, Session 33",
  minutes: 45,
  lessonAnchor: "shapes",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    {
      n: 1, section: "A",
      instruction: "In this question, set the GDC to degree mode and give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-3d-q1.svg", alt: "Tent shaped as a triangular prism ABCDEF with AB 3 m, AE 2.2 m, BC 4 m and the diagonal BF of the sloping face marked", width: 580, height: 300 },
      ctx: [m`A tent is a triangular prism \(ABCDEF\) on horizontal ground. The rectangle \(ABCD\) is the floor, with \(AB = 3\ \text{m}\) and \(BC = 4\ \text{m}\). The front face \(ABE\) is isosceles with \(AE = BE = 2.2\ \text{m}\), and the ridge \(EF\) is horizontal. \(BF\) is a diagonal of the sloping face \(BCFE\).`],
      parts: [
        part("a", 2, m`Find the size of angle \(EAB\).`, [m`\[\cos(EAB) = \dfrac{1.5}{2.2}\]`, m`\[\angle EAB = 47.0^{\circ}\]`], "47.0°", "Marks: (M1) right-angled triangle with half of AB, (A1) 47.0."),
        part("b", 2, m`Find the height of the ridge above the floor.`, [m`\[h = \sqrt{2.2^2 - 1.5^2} = \sqrt{2.59}\]`, m`\[h = 1.61\ \text{m}\]`], "1.61 m", "Marks: (M1) Pythagoras or 2.2 sin 47.0, (A1) 1.61."),
        part("c", 2, m`Find the length of \(BF\).`, [m`\[BCFE \text{ is a rectangle, so } BF = \sqrt{2.2^2 + 4^2}\]`, m`\[BF = 4.57\ \text{m}\]`], "4.57 m", "Marks: (M1) Pythagoras in the rectangle BCFE, (A1) 4.57."),
        part("d", 2, m`Find the angle between \(BF\) and the floor.`, [m`\[\sin\phi = \dfrac{1.609}{4.565}\]`, m`\[\phi = 20.6^{\circ}\]`], "20.6°", "Marks: (M1) height of F over BF, (A1) 20.6. Accept tan with the horizontal distance 4.27."),
      ],
    },
    {
      n: 2, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-3d-q2.svg", alt: "Right prism with regular hexagonal ends of side 3.5 cm and height 9 cm; P is a bottom vertex and Q the opposite top vertex", width: 580, height: 300 },
      ctx: [m`A paperweight is a right prism of height \(9\ \text{cm}\). Its ends are regular hexagons of side \(3.5\ \text{cm}\). \(P\) is a vertex of the base and \(Q\) is the vertex of the top face that is furthest from \(P\).`],
      parts: [
        part("a", 2, m`Find the area of one hexagonal face.`, [m`\[A = 6 \times \tfrac12(3.5)(3.5)\sin 60^{\circ}\]`, m`\[A = 31.8\ \text{cm}^2\]`], "31.8 cm²", "Marks: (M1) six equilateral triangles with ½ab sin C, (A1) 31.8."),
        part("b", 1, m`Find the volume of the paperweight.`, [m`\[V = 31.83 \times 9 = 286\ \text{cm}^3\]`], "286 cm³", "Marks: (A1) 286."),
        part("c", 3, m`Find the length \(PQ\).`, [m`\[\text{the base vertex below } Q \text{ is opposite } P, \text{ so its distance from } P \text{ is } 2 \times 3.5 = 7\]`, m`\[PQ = \sqrt{7^2 + 9^2} = 11.4\ \text{cm}\]`], "11.4 cm", "Marks: (M1) opposite vertices 7 cm apart, (M1) Pythagoras with the height, (A1) 11.4."),
        part("d", 2, m`Find the angle between \(PQ\) and the base.`, [m`\[\tan\theta = \dfrac{9}{7}\]`, m`\[\theta = 52.1^{\circ}\]`], "52.1°", "Marks: (M1) tan with 9 and 7, (A1) 52.1."),
      ],
    },
    {
      n: 3, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-3d-q3.svg", alt: "Right pyramid VABCD on a rhombus base; the diagonals AC and BD meet at M and VM is 7 m", width: 580, height: 300 },
      ctx: [m`A monument is a right pyramid \(VABCD\). Its base \(ABCD\) is a rhombus with diagonals \(AC = 10\ \text{m}\) and \(BD = 6\ \text{m}\), which meet at \(M\). The vertex \(V\) is \(7\ \text{m}\) vertically above \(M\).`],
      parts: [
        part("a", 2, m`Find the length of a side of the base.`, [m`\[AB = \sqrt{5^2 + 3^2} = \sqrt{34}\]`, m`\[AB = 5.83\ \text{m}\]`], "5.83 m", "Marks: (M1) half diagonals 5 and 3 at right angles, (A1) 5.83."),
        part("b", 2, m`Find the size of angle \(DAB\).`, [m`\[\tan(MAB) = \dfrac{3}{5} \Rightarrow \angle MAB = 30.96^{\circ}\]`, m`\[\angle DAB = 2(30.96) = 61.9^{\circ}\]`], "61.9°", "Marks: (M1) half the angle from the right-angled triangle AMB, (A1) 61.9."),
        part("c", 2, m`Find the angle between the edge \(VA\) and the base.`, [m`\[\tan\theta = \dfrac{7}{5}\]`, m`\[\theta = 54.5^{\circ}\]`], "54.5°", "Marks: (M1) tan with VM and AM, (A1) 54.5."),
        part("d", 2, m`Find the volume of the pyramid.`, [m`\[\text{base area} = \tfrac12(10)(6) = 30\]`, m`\[V = \tfrac13(30)(7) = 70\ \text{m}^3\]`], "70 m³", "Marks: (M1) rhombus area from the diagonals, (A1) 70."),
      ],
    },
    {
      n: 4, section: "A",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-3d-q4.svg", alt: "A sector of radius 15 cm and angle 216 degrees folded into a cone with slant height 15 cm, base radius r and height h", width: 580, height: 300 },
      ctx: [m`A sector of a circle has radius \(15\ \text{cm}\) and angle \(216^{\circ}\). The two straight edges are joined, with no overlap, to make a cone.`],
      parts: [
        part("a", 2, m`Find the length of the arc of the sector.`, [m`\[l = \dfrac{216}{360} \times 2\pi(15) = 18\pi\]`, m`\[l = 56.5\ \text{cm}\]`], "56.5 cm", "Marks: (M1) arc length formula, (A1) 56.5."),
        part("b", 2, m`Show that the radius of the base of the cone is \(9\ \text{cm}\).`, [m`\[\text{the arc becomes the base circumference: } 2\pi r = 18\pi\]`, m`\[r = 9\ \text{cm}\]`], "9 cm", "Marks: (M1) arc length equals 2πr, (A1) r = 9 shown."),
        part("c", 2, m`Find the height of the cone.`, [m`\[h = \sqrt{15^2 - 9^2}\]`, m`\[h = 12\ \text{cm}\]`], "12 cm", "Marks: (M1) slant height 15 as hypotenuse, (A1) 12."),
        part("d", 2, m`Find the angle between the slant edge of the cone and its axis.`, [m`\[\sin\alpha = \dfrac{9}{15}\]`, m`\[\alpha = 36.9^{\circ}\]`], "36.9°", "Marks: (M1) sin, cos or tan with two of 9, 12, 15, (A1) 36.9."),
      ],
    },
    {
      n: 5, section: "B",
      instruction: "In this question, set the GDC to degree mode, store values for later parts and give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-3d-q5.svg", alt: "Cuboid ABCDEFGH with AB 8 m, BC 5 m and CG 3 m; triangle BDE is shaded", width: 580, height: 300 },
      ctx: [m`A storeroom is a cuboid \(ABCDEFGH\) with floor \(ABCD\), \(AB = 8\ \text{m}\), \(BC = 5\ \text{m}\) and height \(3\ \text{m}\). \(E, F, G\) and \(H\) are vertically above \(A, B, C\) and \(D\). A triangular sheet of glass \(BDE\) is fixed inside the room.`],
      parts: [
        part("a", 2, m`Find the length \(BD\).`, [m`\[BD = \sqrt{8^2 + 5^2} = \sqrt{89}\]`, m`\[BD = 9.43\ \text{m}\]`], "9.43 m", "Marks: (M1) Pythagoras on the floor, (A1) 9.43."),
        part("b", 2, m`Find the lengths \(BE\) and \(DE\).`, [m`\[BE = \sqrt{8^2 + 3^2} = 8.54\ \text{m}\]`, m`\[DE = \sqrt{5^2 + 3^2} = 5.83\ \text{m}\]`], "BE = 8.54 m, DE = 5.83 m", "Marks: (A1) 8.54, (A1) 5.83."),
        part("c", 3, m`Find the size of angle \(DBE\).`, [m`\[\cos(DBE) = \dfrac{89 + 73 - 34}{2\sqrt{89}\sqrt{73}} = 0.7940\]`, m`\[\angle DBE = 37.4^{\circ}\]`], "37.4°", "Marks: (M1) cosine rule for an angle, (A1) correct substitution, (A1) 37.4."),
        part("d", 2, m`Find the area of the glass sheet \(BDE\).`, [m`\[A = \tfrac12(9.434)(8.544)\sin 37.44^{\circ}\]`, m`\[A = 24.5\ \text{m}^2\]`], "24.5 m²", "Marks: (M1) ½ab sin C with the included angle, (A1) 24.5."),
        part("e", 3, m`Find the size of angle \(BED\), the largest angle of the triangle.`, [m`\[\cos(BED) = \dfrac{73 + 34 - 89}{2\sqrt{73}\sqrt{34}} = 0.1807\]`, m`\[\angle BED = 79.6^{\circ}\]`], "79.6°", "Marks: (M1) cosine rule (or sine rule with the acute value justified), (A1) correct substitution, (A1) 79.6."),
        part("f", 3, m`A cable runs straight from \(A\) to \(G\). Find the angle between the cable and the floor.`, [m`\[AC = BD = 9.434\ \text{m}\]`, m`\[\tan\theta = \dfrac{3}{9.434} \Rightarrow \theta = 17.6^{\circ}\]`], "17.6°", "Marks: (M1) projection of AG on the floor is AC, (M1) tan with 3 and AC, (A1) 17.6."),
      ],
    },
    {
      n: 6, section: "B",
      instruction: "In this question, give answers correct to three significant figures.",
      figure: { src: "/review/trig-shapes-3d-q6.svg", alt: "Right hexagonal pyramid roof with apex V above the centre M, base edges 2.4 m, slant edges 3.1 m, and N the midpoint of a base edge", width: 580, height: 300 },
      ctx: [m`The roof of a gazebo is a right pyramid with vertex \(V\). Its base is a horizontal regular hexagon of side \(2.4\ \text{m}\) with centre \(M\), and each slant edge is \(3.1\ \text{m}\). \(N\) is the midpoint of one side of the base.`],
      parts: [
        part("a", 2, m`Find the area of the hexagonal base.`, [m`\[A = 6 \times \tfrac12(2.4)^2\sin 60^{\circ}\]`, m`\[A = 15.0\ \text{m}^2\]`], "15.0 m²", "Marks: (M1) six triangles with ½ab sin C, (A1) 15.0."),
        part("b", 2, m`Find the height \(VM\) of the roof.`, [m`\[\text{centre to vertex} = 2.4, \text{ so } VM = \sqrt{3.1^2 - 2.4^2}\]`, m`\[VM = 1.96\ \text{m}\]`], "1.96 m", "Marks: (M1) Pythagoras with 3.1 and 2.4, (A1) 1.96."),
        part("c", 2, m`Find the angle between a slant edge and the horizontal.`, [m`\[\cos\theta = \dfrac{2.4}{3.1}\]`, m`\[\theta = 39.3^{\circ}\]`], "39.3°", "Marks: (M1) cos with 2.4 and 3.1, (A1) 39.3."),
        part("d", 3, m`Find the total area of the six triangular faces of the roof.`, [m`\[VN = \sqrt{3.1^2 - 1.2^2} = 2.858\]`, m`\[\text{one face} = \tfrac12(2.4)(2.858) = 3.430\]`, m`\[\text{roof} = 6(3.430) = 20.6\ \text{m}^2\]`], "20.6 m²", "Marks: (M1) slant height VN, (A1) one face 3.43, (A1) 20.6."),
        part("e", 3, m`Find the angle between a triangular face and the horizontal.`, [m`\[MN = 2.4\cos 30^{\circ} = 2.078\]`, m`\[\tan(VNM) = \dfrac{1.962}{2.078} \Rightarrow \angle VNM = 43.4^{\circ}\]`], "43.4°", "Marks: (M1) MN as the apothem, (M1) tan with VM and MN, (A1) 43.4."),
        part("f", 3, m`Roofing costs \(\$45\) per \(\text{m}^2\). The builder orders \(10\%\) extra for waste. Find the cost of the roofing, to the nearest \(\$10\).`, [m`\[20.58 \times 1.1 = 22.64\ \text{m}^2\]`, m`\[22.64 \times 45 = \$1018.71 \approx \$1020\]`], "$1020", "Marks: (M1) multiply by 1.1, (M1) multiply by 45, (A1) 1020."),
      ],
    },
  ],
};

export default paper;
