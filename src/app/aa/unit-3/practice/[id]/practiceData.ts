// Practice sets for AA Unit 3. id = topic order in the lesson (1-indexed, HL topics follow SL).
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
    title: "Trig Ratios and the Unit Circle",
    tagline: "Radians, exact values, quadrant signs, arc length and sector area.",
    lessonAnchor: "trig-ratios",
    revealKey: "R4X8KD2NQM",
    problems: [
      { id: 1, question: "Convert the angle to radians, as a fraction of π.", context: "150°.", answer: "5π/6", answerMath: m`150 \times \dfrac{\pi}{180} = \dfrac{5\pi}{6}`, difficulty: "basic" },
      { id: 2, question: "Convert the angle to degrees.", context: "7π/4 radians.", answer: "315°", answerMath: m`\dfrac{7\pi}{4} \times \dfrac{180}{\pi} = 315^{\circ}`, difficulty: "basic" },
      { id: 3, question: "Find the exact value.", context: "tan(3π/4).", answer: "−1", answerMath: m`\dfrac{3\pi}{4} \text{ is in Q II, reference angle } \dfrac{\pi}{4},\ \tan\text{ is negative: } -\tan\dfrac{\pi}{4} = -1`, difficulty: "standard" },
      { id: 4, question: "Find the exact values of cos θ and tan θ.", context: "sin θ = 3/5 and θ is in the second quadrant.", answer: "cos θ = −4/5, tan θ = −3/4", answerMath: m`\cos^2\theta = 1 - \dfrac{9}{25} = \dfrac{16}{25},\ \cos\theta = -\dfrac45 \text{ (Q II)},\quad \tan\theta = \dfrac{3/5}{-4/5} = -\dfrac34`, difficulty: "standard" },
      { id: 5, question: "Find the arc length and the sector area, correct to 3 significant figures.", context: "A sector has radius 8 cm and angle 5π/6 radians.", answer: "20.9 cm and 83.8 cm²", answerMath: m`l = r\theta = 8 \times \dfrac{5\pi}{6} = \dfrac{20\pi}{3} = 20.9,\quad A = \tfrac12 r^2\theta = \tfrac12(64)\dfrac{5\pi}{6} = \dfrac{80\pi}{3} = 83.8`, difficulty: "challenge" },
    ],
  },
  "2": {
    id: "2",
    topicNumber: 2,
    title: "Sine Rule and Cosine Rule",
    tagline: "Sides and angles of non-right triangles, the ambiguous case and area.",
    lessonAnchor: "sine-cosine-rules",
    revealKey: "S7W3PB9TZH",
    problems: [
      { id: 1, question: "Find side b, correct to 3 significant figures.", context: "Triangle ABC has A = 40°, B = 75° and a = 12 cm.", answer: "18.0 cm", answerMath: m`\dfrac{b}{\sin 75^{\circ}} = \dfrac{12}{\sin 40^{\circ}} \Rightarrow b = 18.0`, difficulty: "basic" },
      { id: 2, question: "Find side a, correct to 3 significant figures.", context: "Triangle ABC has b = 9 cm, c = 6 cm and A = 52°.", answer: "7.11 cm", answerMath: m`a^2 = 9^2 + 6^2 - 2(9)(6)\cos 52^{\circ} = 50.51 \Rightarrow a = 7.11`, difficulty: "standard" },
      { id: 3, question: "Find angle C, correct to 1 decimal place.", context: "Triangle ABC has a = 5 cm, b = 7 cm and c = 9 cm.", answer: "95.7°", answerMath: m`\cos C = \dfrac{5^2 + 7^2 - 9^2}{2(5)(7)} = -0.1 \Rightarrow C = 95.7^{\circ}`, difficulty: "standard" },
      { id: 4, question: "Find the area of the triangle, correct to 3 significant figures.", context: "Two sides are 8 cm and 11 cm with an included angle of 63°.", answer: "39.2 cm²", answerMath: m`A = \tfrac12(8)(11)\sin 63^{\circ} = 39.2`, difficulty: "standard" },
      { id: 5, question: "Find both possible values of angle B, correct to 1 decimal place.", context: "Triangle ABC has a = 7 cm, b = 10 cm and A = 35°.", answer: "55.0° and 125.0°", answerMath: m`\sin B = \dfrac{10\sin 35^{\circ}}{7} = 0.8194 \Rightarrow B = 55.0^{\circ} \text{ or } 180^{\circ} - 55.0^{\circ} = 125.0^{\circ}`, difficulty: "challenge" },
    ],
  },
  "3": {
    id: "3",
    topicNumber: 3,
    title: "Trigonometric Graphs",
    tagline: "Amplitude, period, midline, phase shift and writing an equation from a graph.",
    lessonAnchor: "trig-graphs",
    revealKey: "G2F6YC5VJA",
    problems: [
      { id: 1, question: "State the amplitude and the period.", context: "y = 3 sin(2x) + 1.", answer: "Amplitude 3, period π", answerMath: m`\text{amplitude} = 3,\quad \text{period} = \dfrac{2\pi}{2} = \pi`, difficulty: "basic" },
      { id: 2, question: "State the range of the function.", context: "y = −2 cos x + 4.", answer: "2 ≤ y ≤ 6", answerMath: m`\text{midline } 4,\ \text{amplitude } 2 \Rightarrow 4 - 2 \le y \le 4 + 2`, difficulty: "basic" },
      { id: 3, question: "Find the period of the function.", context: "y = 5 cos(πx/4).", answer: "8", answerMath: m`\text{period} = \dfrac{2\pi}{\pi/4} = 8`, difficulty: "standard" },
      { id: 4, question: "Write an equation of the form y = a sin(bx) + d.", context: "The graph has maximum 7, minimum −1 and period π, with a > 0.", answer: "y = 4 sin(2x) + 3", answerMath: m`a = \dfrac{7-(-1)}{2} = 4,\quad d = \dfrac{7+(-1)}{2} = 3,\quad b = \dfrac{2\pi}{\pi} = 2`, difficulty: "standard" },
      { id: 5, question: "State the amplitude, period, horizontal shift and range.", context: "y = 3 sin(2x − π/3) + 1.", answer: "Amplitude 3, period π, shift π/6 to the right, range −2 ≤ y ≤ 4", answerMath: m`y = 3\sin\!\left(2\left(x - \dfrac{\pi}{6}\right)\right) + 1:\ \text{amplitude } 3,\ \text{period } \pi,\ \text{shift } \dfrac{\pi}{6}\text{ right},\ -2 \le y \le 4`, difficulty: "challenge" },
    ],
  },
  "4": {
    id: "4",
    topicNumber: 4,
    title: "Trigonometric Equations",
    tagline: "Solutions in a given interval using symmetry, quadratic form and multiple angles.",
    lessonAnchor: "trig-equations",
    revealKey: "E8N4MU3LXD",
    problems: [
      { id: 1, question: "Solve for 0 ≤ x ≤ 2π.", context: "sin x = √3/2.", answer: "x = π/3, 2π/3", answerMath: m`x = \dfrac{\pi}{3} \text{ or } \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}`, difficulty: "basic" },
      { id: 2, question: "Solve for 0 ≤ x ≤ 2π.", context: "cos x = −1/2.", answer: "x = 2π/3, 4π/3", answerMath: m`x = \dfrac{2\pi}{3} \text{ or } 2\pi - \dfrac{2\pi}{3} = \dfrac{4\pi}{3}`, difficulty: "basic" },
      { id: 3, question: "Solve for 0 ≤ x ≤ 2π.", context: "2 sin²x − sin x − 1 = 0.", answer: "x = π/2, 7π/6, 11π/6", answerMath: m`(2\sin x + 1)(\sin x - 1) = 0:\ \sin x = 1 \Rightarrow x = \dfrac{\pi}{2};\ \sin x = -\dfrac12 \Rightarrow x = \dfrac{7\pi}{6},\ \dfrac{11\pi}{6}`, difficulty: "standard" },
      { id: 4, question: "Solve for 0 ≤ x ≤ 2π.", context: "cos(2x) = 1/2.", answer: "x = π/6, 5π/6, 7π/6, 11π/6", answerMath: m`2x = \dfrac{\pi}{3},\ \dfrac{5\pi}{3},\ \dfrac{7\pi}{3},\ \dfrac{11\pi}{3} \Rightarrow x = \dfrac{\pi}{6},\ \dfrac{5\pi}{6},\ \dfrac{7\pi}{6},\ \dfrac{11\pi}{6}`, difficulty: "standard" },
      { id: 5, question: "Solve for 0° ≤ x ≤ 360°, correct to 1 decimal place.", context: "3 sin x = 2.", answer: "x = 41.8°, 138.2°", answerMath: m`\sin x = \dfrac23 \Rightarrow x = 41.8^{\circ} \text{ or } 180^{\circ} - 41.8^{\circ} = 138.2^{\circ}`, difficulty: "challenge" },
    ],
  },
  "5": {
    id: "5",
    topicNumber: 5,
    title: "Trigonometric Identities (HL)",
    tagline: "Pythagorean and double-angle identities for simplifying, evaluating and solving.",
    lessonAnchor: "trig-identities",
    revealKey: "I5H9QK7BWR",
    problems: [
      { id: 1, question: "Simplify to a single term.", context: "(1 − cos²x) / sin x.", answer: "sin x", answerMath: m`\dfrac{1 - \cos^2 x}{\sin x} = \dfrac{\sin^2 x}{\sin x} = \sin x`, difficulty: "basic" },
      { id: 2, question: "Find sin 2θ.", context: "sin θ = 3/5 and θ is acute.", answer: "24/25", answerMath: m`\cos\theta = \dfrac45,\quad \sin 2\theta = 2\sin\theta\cos\theta = 2\cdot\dfrac35\cdot\dfrac45 = \dfrac{24}{25}`, difficulty: "standard" },
      { id: 3, question: "Find cos 2θ.", context: "cos θ = 1/3.", answer: "−7/9", answerMath: m`\cos 2\theta = 2\cos^2\theta - 1 = \dfrac29 - 1 = -\dfrac79`, difficulty: "standard" },
      { id: 4, question: "Solve for 0 ≤ x ≤ 2π.", context: "sin 2x = sin x.", answer: "x = 0, π/3, π, 5π/3, 2π", answerMath: m`2\sin x\cos x - \sin x = 0 \Rightarrow \sin x(2\cos x - 1) = 0:\ \sin x = 0 \Rightarrow x = 0, \pi, 2\pi;\ \cos x = \dfrac12 \Rightarrow x = \dfrac{\pi}{3}, \dfrac{5\pi}{3}`, difficulty: "standard" },
      { id: 5, question: "Express as a single term in sin 2θ.", context: "tan θ + 1/tan θ.", answer: "2 / sin 2θ", answerMath: m`\dfrac{\sin\theta}{\cos\theta} + \dfrac{\cos\theta}{\sin\theta} = \dfrac{\sin^2\theta + \cos^2\theta}{\sin\theta\cos\theta} = \dfrac{1}{\sin\theta\cos\theta} = \dfrac{2}{\sin 2\theta}`, difficulty: "challenge" },
    ],
  },
  "6": {
    id: "6",
    topicNumber: 6,
    title: "Complex Trig Equations (HL)",
    tagline: "Quadratic form, identity substitution and the R-method.",
    lessonAnchor: "complex-equations",
    revealKey: "C3Z7TD6PEV",
    problems: [
      { id: 1, question: "Solve for 0 ≤ x ≤ 2π.", context: "2 sin²x + 3 cos x − 3 = 0.", answer: "x = 0, π/3, 5π/3, 2π", answerMath: m`2(1 - \cos^2 x) + 3\cos x - 3 = 0 \Rightarrow 2\cos^2 x - 3\cos x + 1 = 0 \Rightarrow (2\cos x - 1)(\cos x - 1) = 0:\ \cos x = \dfrac12 \Rightarrow \dfrac{\pi}{3}, \dfrac{5\pi}{3};\ \cos x = 1 \Rightarrow 0, 2\pi`, difficulty: "standard" },
      { id: 2, question: "Solve for 0 ≤ x ≤ 2π.", context: "sin²x = 3 cos²x.", answer: "x = π/3, 2π/3, 4π/3, 5π/3", answerMath: m`\tan^2 x = 3 \Rightarrow \tan x = \pm\sqrt3 \Rightarrow x = \dfrac{\pi}{3}, \dfrac{2\pi}{3}, \dfrac{4\pi}{3}, \dfrac{5\pi}{3}`, difficulty: "standard" },
      { id: 3, question: "Write in the form R sin(x + α) with R > 0 and 0 < α < π/2. Give α to 3 significant figures.", context: "3 sin x + 4 cos x.", answer: "5 sin(x + 0.927)", answerMath: m`R = \sqrt{3^2 + 4^2} = 5,\quad R\cos\alpha = 3,\ R\sin\alpha = 4 \Rightarrow \alpha = \arctan\dfrac43 = 0.927`, difficulty: "standard" },
      { id: 4, question: "Hence solve for 0 ≤ x ≤ 2π, correct to 3 significant figures.", context: "3 sin x + 4 cos x = 2.5. Use the form from question 3.", answer: "x = 1.69, 5.88", answerMath: m`\sin(x + 0.9273) = 0.5 \Rightarrow x + 0.9273 = \dfrac{\pi}{6},\ \dfrac{5\pi}{6},\ \dfrac{13\pi}{6} \Rightarrow x = -0.404\ (\text{reject}),\ 1.69,\ 5.88`, difficulty: "challenge" },
      { id: 5, question: "Solve for 0 ≤ x ≤ 2π, correct to 3 significant figures.", context: "3 cos 2x + cos x + 2 = 0.", answer: "x = 1.23, 2.09, 4.19, 5.05", answerMath: m`3(2\cos^2 x - 1) + \cos x + 2 = 0 \Rightarrow 6\cos^2 x + \cos x - 1 = 0 \Rightarrow (3\cos x - 1)(2\cos x + 1) = 0:\ \cos x = \dfrac13 \Rightarrow 1.23,\ 5.05;\ \cos x = -\dfrac12 \Rightarrow 2.09,\ 4.19`, difficulty: "challenge" },
    ],
  },
  "7": {
    id: "7",
    topicNumber: 7,
    title: "Modelling with Trigonometry (HL)",
    tagline: "Tides and wheels: maximum, period, values and times from a sinusoidal model.",
    lessonAnchor: "modelling",
    revealKey: "M6J2XA8SGN",
    problems: [
      { id: 1, question: "Find the maximum depth.", context: "The depth of water in a harbour is h = 3 sin(πt/6) + 5 metres, t hours after midnight.", answer: "8 m", answerMath: m`h_{\max} = 3 + 5 = 8`, difficulty: "basic" },
      { id: 2, question: "Find the time between consecutive high tides.", context: "Use the model h = 3 sin(πt/6) + 5.", answer: "12 hours", answerMath: m`\text{period} = \dfrac{2\pi}{\pi/6} = 12`, difficulty: "basic" },
      { id: 3, question: "Find the depth at t = 2, correct to 3 significant figures.", context: "Use the model h = 3 sin(πt/6) + 5.", answer: "7.60 m", answerMath: m`h = 3\sin\dfrac{\pi}{3} + 5 = 3(0.8660) + 5 = 7.60`, difficulty: "standard" },
      { id: 4, question: "Find the two times in the first 12 hours when the depth is 6.5 m.", context: "Use the model h = 3 sin(πt/6) + 5.", answer: "t = 1 and t = 5", answerMath: m`3\sin\dfrac{\pi t}{6} = 1.5 \Rightarrow \sin\dfrac{\pi t}{6} = 0.5 \Rightarrow \dfrac{\pi t}{6} = \dfrac{\pi}{6},\ \dfrac{5\pi}{6} \Rightarrow t = 1,\ 5`, difficulty: "standard" },
      { id: 5, question: "Find for how many seconds in one revolution the rider is higher than 14 m.", context: "A wheel's rider has height h = 10 − 8 cos(πt/15) metres, t seconds after the start, for 0 ≤ t ≤ 30.", answer: "10 s", answerMath: m`10 - 8\cos\dfrac{\pi t}{15} > 14 \Rightarrow \cos\dfrac{\pi t}{15} < -\dfrac12 \Rightarrow \dfrac{2\pi}{3} < \dfrac{\pi t}{15} < \dfrac{4\pi}{3} \Rightarrow 10 < t < 20`, difficulty: "challenge" },
    ],
  },
};
