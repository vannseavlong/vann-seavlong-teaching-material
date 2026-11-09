// Practice sets for AI Unit 3. id = topic order in the lesson (1-indexed).
// Reveal keys are permanent and stored here, not generated at runtime.

export type Problem = {
  id: number;
  /** Short task statement shown in the card header */
  question: string;
  /** Scenario or data, plain text */
  context: string;
  /** Model answer, plain text, shown after key unlock */
  answer: string;
  /** KaTeX worked solution, shown after key unlock */
  answerMath?: string;
  difficulty: "basic" | "standard" | "challenge";
};

export type PracticeSet = {
  id: string;
  topicNumber: number;
  title: string;
  tagline: string;
  lessonAnchor: string;
  revealKey: string;
  problems: Problem[];
};

const m = String.raw;

export const PRACTICE_DATA: Record<string, PracticeSet> = {
  "1": {
    id: "1",
    topicNumber: 1,
    title: "Lines in 2D",
    tagline: "Gradient, midpoint, distance, perpendicular lines and a perpendicular bisector.",
    lessonAnchor: "lines",
    revealKey: "L7N3QX8WPB",
    problems: [
      { id: 1, question: "Find the gradient of AB.", context: "A(1, 3) and B(5, 11).", answer: "2", answerMath: m`m = \dfrac{11-3}{5-1} = 2`, difficulty: "basic" },
      { id: 2, question: "Find the midpoint of PQ.", context: "P(−2, 6) and Q(8, −4).", answer: "(3, 1)", answerMath: m`\left(\dfrac{-2+8}{2},\ \dfrac{6+(-4)}{2}\right) = (3, 1)`, difficulty: "basic" },
      { id: 3, question: "Find the distance between the two points.", context: "(1, 2) and (13, 7), units in metres.", answer: "13 m", answerMath: m`d = \sqrt{12^2 + 5^2} = \sqrt{169} = 13`, difficulty: "basic" },
      { id: 4, question: "Write the equation of the line in the form y = mx + c.", context: "The line is perpendicular to y = 2x + 3 and passes through (4, 1).", answer: "y = −0.5x + 3", answerMath: m`m = -\dfrac12,\quad y - 1 = -\dfrac12(x - 4) \Rightarrow y = -\dfrac12 x + 3`, difficulty: "standard" },
      { id: 5, question: "Find the equation of the perpendicular bisector of PQ in the form ax + by + d = 0.", context: "P(0, 0) and Q(6, 4). Use integer coefficients.", answer: "3x + 2y − 13 = 0", answerMath: m`\text{midpoint } (3, 2),\ m_{PQ} = \dfrac23,\ m = -\dfrac32,\quad y - 2 = -\dfrac32(x - 3) \Rightarrow 3x + 2y - 13 = 0`, difficulty: "challenge" },
    ],
  },
  "2": {
    id: "2",
    topicNumber: 2,
    title: "3D Distance and Solids",
    tagline: "Distance and midpoint in 3D, cone, sphere and pyramid.",
    lessonAnchor: "solids-3d",
    revealKey: "S2K9ZV4RTM",
    problems: [
      { id: 1, question: "Find the distance AB.", context: "A(1, 2, 3) and B(4, 6, 15), units in metres.", answer: "13 m", answerMath: m`d = \sqrt{3^2 + 4^2 + 12^2} = \sqrt{169} = 13`, difficulty: "basic" },
      { id: 2, question: "Find the midpoint of AB.", context: "A(2, −4, 6) and B(8, 0, −2).", answer: "(5, −2, 2)", answerMath: m`\left(\dfrac{2+8}{2},\ \dfrac{-4+0}{2},\ \dfrac{6-2}{2}\right) = (5, -2, 2)`, difficulty: "basic" },
      { id: 3, question: "Find the volume of the cone, correct to 3 significant figures.", context: "A cone has base radius 5 cm and vertical height 12 cm.", answer: "314 cm³", answerMath: m`V = \tfrac13 \pi (5^2)(12) = 100\pi = 314`, difficulty: "standard" },
      { id: 4, question: "Find the surface area of the sphere, correct to 3 significant figures.", context: "A sphere has radius 7 cm.", answer: "616 cm²", answerMath: m`A = 4\pi (7^2) = 196\pi = 616`, difficulty: "standard" },
      { id: 5, question: "Find the volume of the pyramid.", context: "A right pyramid has a square base of side 6 cm and vertical height 4 cm.", answer: "48 cm³", answerMath: m`V = \tfrac13 (6^2)(4) = 48`, difficulty: "standard" },
    ],
  },
  "3": {
    id: "3",
    topicNumber: 3,
    title: "Trigonometry",
    tagline: "Right-angled trig, sine rule, cosine rule and area of a triangle. GDC in degree mode.",
    lessonAnchor: "trigonometry",
    revealKey: "T8H5QD3NYC",
    problems: [
      { id: 1, question: "Find the length of the opposite side, correct to 3 significant figures.", context: "A right-angled triangle has hypotenuse 10 cm and an angle of 35°.", answer: "5.74 cm", answerMath: m`\text{opposite} = 10\sin 35^{\circ} = 5.74`, difficulty: "basic" },
      { id: 2, question: "Find side b, correct to 3 significant figures.", context: "Triangle ABC has A = 40°, B = 65° and a = 7 cm.", answer: "9.87 cm", answerMath: m`\dfrac{b}{\sin 65^{\circ}} = \dfrac{7}{\sin 40^{\circ}} \Rightarrow b = 9.87`, difficulty: "standard" },
      { id: 3, question: "Find side c, correct to 3 significant figures.", context: "Triangle ABC has a = 8 cm, b = 11 cm and C = 60°.", answer: "9.85 cm", answerMath: m`c^2 = 8^2 + 11^2 - 2(8)(11)\cos 60^{\circ} = 97 \Rightarrow c = 9.85`, difficulty: "standard" },
      { id: 4, question: "Find the area of the triangle, correct to 3 significant figures.", context: "Two sides are 9 cm and 12 cm with an included angle of 50°.", answer: "41.4 cm²", answerMath: m`A = \tfrac12 (9)(12)\sin 50^{\circ} = 41.4`, difficulty: "standard" },
      { id: 5, question: "Find the largest angle, correct to 1 decimal place.", context: "A triangle has sides 7 cm, 9 cm and 12 cm.", answer: "96.4°", answerMath: m`\cos C = \dfrac{7^2 + 9^2 - 12^2}{2(7)(9)} = -0.1111 \Rightarrow C = 96.4^{\circ}`, difficulty: "challenge" },
    ],
  },
  "4": {
    id: "4",
    topicNumber: 4,
    title: "Arc Length and Sector Area",
    tagline: "Arc length, sector area, perimeter and finding the angle. Angles in degrees.",
    lessonAnchor: "arc-sector",
    revealKey: "A4M7RX2KDJ",
    problems: [
      { id: 1, question: "Find the arc length, correct to 3 significant figures.", context: "A sector has radius 10 cm and angle 72°.", answer: "12.6 cm", answerMath: m`l = \dfrac{72}{360}\times 2\pi(10) = 4\pi = 12.6`, difficulty: "basic" },
      { id: 2, question: "Find the area of the sector, correct to 3 significant figures.", context: "A sector has radius 6 cm and angle 150°.", answer: "47.1 cm²", answerMath: m`A = \dfrac{150}{360}\times \pi(6^2) = 15\pi = 47.1`, difficulty: "basic" },
      { id: 3, question: "Find the perimeter of the sector, correct to 3 significant figures.", context: "A sector has radius 8 cm and angle 45°.", answer: "22.3 cm", answerMath: m`l = \dfrac{45}{360}\times 2\pi(8) = 6.283,\quad P = 6.283 + 16 = 22.3`, difficulty: "standard" },
      { id: 4, question: "Find the angle at the centre, correct to 1 decimal place.", context: "An arc of length 20 cm is cut from a circle of radius 12 cm.", answer: "95.5°", answerMath: m`\theta = \dfrac{20}{2\pi(12)}\times 360 = 95.5^{\circ}`, difficulty: "standard" },
      { id: 5, question: "Find the angle at the centre, correct to 1 decimal place.", context: "A sector of a circle of radius 9 cm has area 50 cm².", answer: "70.7°", answerMath: m`50 = \dfrac{\theta}{360}\pi(9^2) \Rightarrow \theta = \dfrac{18000}{81\pi} = 70.7^{\circ}`, difficulty: "challenge" },
    ],
  },
  "5": {
    id: "5",
    topicNumber: 5,
    title: "Trigonometry in Context",
    tagline: "Elevation, depression and bearings. GDC in degree mode.",
    lessonAnchor: "trig-context",
    revealKey: "C6P2WJ9HVE",
    problems: [
      { id: 1, question: "Find the height of the building, correct to 3 significant figures.", context: "A student stands 30 m from a building. The angle of elevation of the top is 40°. Ignore the student's height.", answer: "25.2 m", answerMath: m`h = 30\tan 40^{\circ} = 25.2`, difficulty: "basic" },
      { id: 2, question: "Find the horizontal distance from the foot of the cliff to the boat, correct to 3 significant figures.", context: "From the top of an 80 m cliff, the angle of depression of a boat is 25°.", answer: "172 m", answerMath: m`x = \dfrac{80}{\tan 25^{\circ}} = 172`, difficulty: "standard" },
      { id: 3, question: "Write down the back bearing.", context: "The bearing of a lighthouse from a ship is 130°. Find the bearing of the ship from the lighthouse.", answer: "310°", answerMath: m`130^{\circ} + 180^{\circ} = 310^{\circ}`, difficulty: "basic" },
      { id: 4, question: "Find how far east the ship has travelled, correct to 3 significant figures.", context: "A ship sails 20 km on a bearing of 060°.", answer: "17.3 km", answerMath: m`\text{east} = 20\sin 60^{\circ} = 17.3`, difficulty: "standard" },
      { id: 5, question: "Find the distance AC to 3 significant figures, and the bearing of C from A to the nearest degree.", context: "B is 10 km due east of A. C is 6 km due north of B.", answer: "11.7 km, 059°", answerMath: m`AC = \sqrt{10^2 + 6^2} = 11.7,\quad \tan\theta = \dfrac{10}{6} \Rightarrow \theta = 59^{\circ}`, difficulty: "challenge" },
    ],
  },
  "6": {
    id: "6",
    topicNumber: 6,
    title: "Voronoi Diagrams",
    tagline: "Perpendicular bisectors, nearest site, vertices and the largest empty circle.",
    lessonAnchor: "voronoi",
    revealKey: "V3R8NK5ZQX",
    problems: [
      { id: 1, question: "Write the equation of the Voronoi edge between the two sites.", context: "Sites P(0, 0) and Q(8, 0).", answer: "x = 4", answerMath: m`\text{midpoint } (4, 0),\ PQ \text{ horizontal, so the bisector is } x = 4`, difficulty: "basic" },
      { id: 2, question: "Find the equation of the Voronoi edge in the form y = mx + c.", context: "Sites A(1, 1) and B(5, 3).", answer: "y = −2x + 8", answerMath: m`\text{midpoint } (3, 2),\ m_{AB} = \dfrac12,\ m = -2,\quad y - 2 = -2(x - 3) \Rightarrow y = -2x + 8`, difficulty: "standard" },
      { id: 3, question: "State which site is nearest to the point (6, 4).", context: "Sites at (2, 2), (8, 3) and (5, 9).", answer: "(8, 3)", answerMath: m`d_1 = \sqrt{16+4} = 4.47,\quad d_2 = \sqrt{4+1} = 2.24,\quad d_3 = \sqrt{1+25} = 5.10`, difficulty: "standard" },
      { id: 4, question: "Find the coordinates of the Voronoi vertex.", context: "Sites P(0, 0), Q(6, 0) and R(0, 8). The vertex is where the three edges meet.", answer: "(3, 4)", answerMath: m`\text{edge } PQ: x = 3,\quad \text{edge } PR: y = 4 \Rightarrow (3, 4)`, difficulty: "standard" },
      { id: 5, question: "Find the radius of the largest empty circle centred at the vertex.", context: "A waste dump must be as far as possible from the three sites in question 4. Use the vertex (3, 4).", answer: "5 km", answerMath: m`\text{distance to } P = \sqrt{3^2 + 4^2} = 5`, difficulty: "challenge" },
    ],
  },
  "7": {
    id: "7",
    topicNumber: 7,
    title: "Graph Theory (HL)",
    tagline: "Degrees, Euler routes, minimum spanning trees, Chinese postman and walks from an adjacency matrix.",
    lessonAnchor: "graph-theory",
    revealKey: "G5D2MW8JTH",
    problems: [
      { id: 1, question: "Find the sum of the degrees of all the vertices.", context: "A graph has 9 edges.", answer: "18", answerMath: m`\sum \deg(v) = 2 \times 9 = 18`, difficulty: "basic" },
      { id: 2, question: "State whether a connected graph with these vertex degrees has an Eulerian circuit, an Eulerian trail only, or neither.", context: "Degrees: 2, 3, 3, 4, 4.", answer: "Eulerian trail only", answerMath: m`\text{two odd vertices (degree 3): a trail exists from one to the other, but a circuit needs all degrees even}`, difficulty: "basic" },
      { id: 3, question: "Use Kruskal's algorithm to find the weight of the minimum spanning tree.", context: "Towns A to E. Edge weights: AB 7, AC 5, BC 3, BD 6, CD 8, CE 4, DE 2.", answer: "14", answerMath: m`\text{sorted: } DE\,2,\ BC\,3,\ CE\,4,\ AC\,5,\ BD\,6,\ AB\,7,\ CD\,8.\quad \text{Add } DE, BC, CE, AC \text{ (4 edges, 5 vertices)}.\quad 2+3+4+5 = 14`, difficulty: "standard" },
      { id: 4, question: "Find the length of the shortest route that uses every road at least once and returns to the start.", context: "Roads: AB 5, BC 4, CD 6, DA 3, AC 8 (km). A and C are the only odd vertices.", answer: "34 km", answerMath: m`\text{total} = 5+4+6+3+8 = 26.\ \text{Shortest } A \text{ to } C: AC = 8 \ (A\text{-}B\text{-}C = 9,\ A\text{-}D\text{-}C = 9).\quad 26 + 8 = 34`, difficulty: "standard" },
      { id: 5, question: "Find the number of walks of length 3 from P to S, using the adjacency matrix.", context: "Vertices in order P, Q, R, S with edges PQ, PR, QR, RS. Use A³ on your GDC.", answer: "1", answerMath: m`(\mathbf{A}^3)_{PS} = 1: \text{ the only walk is } P,Q,R,S`, difficulty: "challenge" },
    ],
  },
  "8": {
    id: "8",
    topicNumber: 8,
    title: "Vectors in 3D (HL)",
    tagline: "Magnitude, scalar product, angle between vectors and the vector equation of a line.",
    lessonAnchor: "vectors",
    revealKey: "E9B6YC3PUA",
    problems: [
      { id: 1, question: "Find the magnitude of the vector.", context: "a = (2, 3, 6).", answer: "7", answerMath: m`|\mathbf{a}| = \sqrt{2^2 + 3^2 + 6^2} = \sqrt{49} = 7`, difficulty: "basic" },
      { id: 2, question: "Write AB as a column vector and find its length, correct to 3 significant figures.", context: "A(1, −2, 4) and B(5, 1, −2).", answer: "(4, 3, −6), 7.81", answerMath: m`\overrightarrow{AB} = \begin{pmatrix}4\\3\\-6\end{pmatrix},\quad |\overrightarrow{AB}| = \sqrt{16+9+36} = \sqrt{61} = 7.81`, difficulty: "basic" },
      { id: 3, question: "Find the value of k for which the two vectors are perpendicular.", context: "(2, k, −1) and (3, 4, k).", answer: "k = −2", answerMath: m`6 + 4k - k = 0 \Rightarrow 3k = -6 \Rightarrow k = -2`, difficulty: "standard" },
      { id: 4, question: "Find the angle between the vectors, correct to 1 decimal place.", context: "a = (1, 2, 2) and b = (2, −1, 2).", answer: "63.6°", answerMath: m`\mathbf{a}\cdot\mathbf{b} = 2 - 2 + 4 = 4,\quad |\mathbf{a}| = |\mathbf{b}| = 3,\quad \cos\theta = \dfrac49 \Rightarrow \theta = 63.6^{\circ}`, difficulty: "standard" },
      { id: 5, question: "Find the value of λ at which the point lies on the line, or state that it does not lie on it.", context: "Line r = (2, −1, 3) + λ(1, 2, −2). Point (5, 5, −3).", answer: "Yes, λ = 3", answerMath: m`x:\ 2+\lambda = 5 \Rightarrow \lambda = 3.\quad y:\ -1+6 = 5\ \checkmark\quad z:\ 3-6 = -3\ \checkmark`, difficulty: "challenge" },
    ],
  },
  "9": {
    id: "9",
    topicNumber: 9,
    title: "Trigonometry in Shapes",
    tagline: "Right-angled triangles, areas with an included angle, shared diagonals, regular polygons and composite shapes. GDC in degree mode.",
    lessonAnchor: "shapes",
    revealKey: "H4W7ZQ2NKD",
    problems: [
      { id: 1, question: "Find the length of the diagonal.", context: "A rectangular courtyard is 15 m long and 8 m wide.", answer: "17 m", answerMath: m`d = \sqrt{15^2 + 8^2} = \sqrt{289} = 17`, difficulty: "basic" },
      { id: 2, question: "Find the height of the triangle, correct to 3 significant figures.", context: "An isosceles triangle has equal sides of 10 cm. Each base angle is 40°.", answer: "6.43 cm", answerMath: m`h = 10\sin 40^{\circ} = 6.43`, difficulty: "basic" },
      { id: 3, question: "Find the area of the parallelogram.", context: "A parallelogram has sides 14 cm and 6 cm with an angle of 30° between them.", answer: "42 cm²", answerMath: m`A = 14 \times 6 \times \sin 30^{\circ} = 42`, difficulty: "basic" },
      { id: 4, question: "Find the acute angle of the rhombus, correct to 3 significant figures.", context: "A rhombus has diagonals of 16 cm and 30 cm.", answer: "56.1°", answerMath: m`\tan\dfrac{\theta}{2} = \dfrac{8}{15} \Rightarrow \theta = 2\tan^{-1}\!\left(\dfrac{8}{15}\right) = 56.1^{\circ}`, difficulty: "standard" },
      { id: 5, question: "Find the acute angle between the sides, correct to 3 significant figures.", context: "A parallelogram has sides 20 cm and 10 cm and area 150 cm².", answer: "48.6°", answerMath: m`150 = 20(10)\sin\theta \Rightarrow \sin\theta = 0.75 \Rightarrow \theta = 48.6^{\circ}`, difficulty: "standard" },
      { id: 6, question: "Find the area of the floor, correct to 3 significant figures.", context: "A gazebo floor is a regular decagon (10 sides). The distance from the centre to each corner is 12 m.", answer: "423 m²", answerMath: m`A = \tfrac12 (10)(12^2)\sin 36^{\circ} = 423`, difficulty: "standard" },
      { id: 7, question: "Find the length of the diagonal WY, correct to 3 significant figures.", context: "A plot WXYZ has WX = 9 m, XY = 7 m, YZ = 6 m, ZW = 8 m and angle WXY = 100°.", answer: "12.3 m", answerMath: m`WY^2 = 9^2 + 7^2 - 2(9)(7)\cos 100^{\circ} = 151.9 \Rightarrow WY = 12.3`, difficulty: "standard" },
      { id: 8, question: "Find the area of plot WXYZ from question 7, correct to 3 significant figures.", context: "Use the stored value of WY. Angle WZY is found with the cosine rule in triangle WYZ.", answer: "51.2 m²", answerMath: m`\cos Z = \dfrac{6^2 + 8^2 - 12.32^2}{2(6)(8)} \Rightarrow Z = 122.7^{\circ}.\quad A = \tfrac12(9)(7)\sin 100^{\circ} + \tfrac12(6)(8)\sin 122.7^{\circ} = 31.0 + 20.2 = 51.2`, difficulty: "standard" },
      { id: 9, question: "Find the length of one side, correct to 3 significant figures.", context: "A regular nonagon (9 sides) has area 200 cm². First find the distance r from the centre to a corner.", answer: "5.69 cm", answerMath: m`200 = \tfrac12 (9) r^2 \sin 40^{\circ} \Rightarrow r = 8.315.\quad s = 2(8.315)\sin 20^{\circ} = 5.69`, difficulty: "challenge" },
      { id: 10, question: "Find the area and the perimeter of the segment, each correct to 3 significant figures.", context: "A chord subtends an angle of 80° at the centre of a circle of radius 12 cm. The segment is the region between the chord and the minor arc.", answer: "29.6 cm², 32.2 cm", answerMath: m`A = \dfrac{80}{360}\pi(12^2) - \tfrac12(12^2)\sin 80^{\circ} = 100.53 - 70.91 = 29.6.\quad P = \dfrac{80}{360}\times 2\pi(12) + 2(12)\sin 40^{\circ} = 16.76 + 15.43 = 32.2`, difficulty: "challenge" },
    ],
  },
};
