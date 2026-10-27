import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 15: Trigonometry (AI Unit 3). Section A short questions, Section B extended.
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "trigonometry",
  session: 15,
  topic: "Trigonometry",
  title: "Trigonometry",
  subtitle: "Summative Revision, Session 15",
  minutes: 42,
  lessonAnchor: "trigonometry",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    // ───────────────────────── Section A ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all lengths to the nearest metre and all angles to the nearest 0.1°.",
      ctx: [m`A triangular plot of land \(ABC\) has \(AB = 240\ \text{m}\), \(AC = 310\ \text{m}\) and angle \(B\hat{A}C = 64^{\circ}\).`],
      parts: [
        {
          l: "a", marks: 3, q: m`Calculate the length of the boundary \(BC\).`, lines: 4, restate: "Length BC",
          steps: [
            m`\[BC^2 = 240^2 + 310^2 - 2(240)(310)\cos 64^{\circ} = 88\,470\]`,
            m`\[BC = 297.4 = 297\ \text{m}\]`,
          ],
          final: "297 m",
          note: "Marks: (M1) cosine rule, (A1) substitution, (A1) 297. GDC in DEGREE mode.",
        },
        {
          l: "b", marks: 3, q: m`Calculate the size of angle \(A\hat{C}B\).`, lines: 4, restate: "Angle ACB",
          steps: [
            m`\[\dfrac{\sin A\hat{C}B}{240} = \dfrac{\sin 64^{\circ}}{297.44}\]`,
            m`\[\sin A\hat{C}B = \dfrac{240\sin 64^{\circ}}{297.44} = 0.7253 \Rightarrow A\hat{C}B = 46.5^{\circ}\]`,
          ],
          final: "46.5°",
          note: "Marks: (M1) sine rule with AB opposite C, (A1) 0.7253 or equivalent, (A1) 46.5. The obtuse value 133.5° is rejected: 64° + 133.5° > 180°.",
        },
        {
          l: "c", marks: 2, q: m`Calculate the area of the plot. Give your answer to the nearest \(100\ \text{m}^2\).`, lines: 3, restate: "Area",
          steps: [m`\[A = \tfrac12 (240)(310)\sin 64^{\circ} = 33\,435 \approx 33\,400\ \text{m}^2\]`],
          final: "33 400 m²",
          note: "Marks: (M1) area formula with the included angle, (A1) 33 400.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: [m`A wheelchair ramp is \(4.8\ \text{m}\) long and rises \(0.9\ \text{m}\) above the ground. The ramp is a straight slope and the ground is horizontal.`],
      parts: [
        {
          l: "a", marks: 2, q: m`Calculate the angle the ramp makes with the horizontal.`, lines: 3, restate: "Angle of ramp",
          steps: [m`\[\sin\theta = \dfrac{0.9}{4.8} \Rightarrow \theta = 10.8^{\circ}\]`],
          final: "10.8°",
          note: "Marks: (M1) sin θ = opposite over hypotenuse, (A1) 10.8.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the horizontal distance covered by the ramp. Give your answer to three significant figures.`, lines: 3, restate: "Horizontal distance",
          steps: [m`\[d = \sqrt{4.8^2 - 0.9^2} = 4.71\ \text{m}\]`],
          final: "4.71 m",
          note: "Marks: (M1) Pythagoras or cos 10.8°, (A1) 4.71.",
        },
        {
          l: "c", marks: 3, q: m`Building rules state that the angle of a ramp must not exceed \(4.8^{\circ}\). Determine the shortest ramp length that rises \(0.9\ \text{m}\) and meets the rule. Give your answer to three significant figures.`, lines: 4, restate: "Shortest ramp",
          steps: [
            m`\[\sin 4.8^{\circ} = \dfrac{0.9}{L}\]`,
            m`\[L = \dfrac{0.9}{\sin 4.8^{\circ}} = 10.8\ \text{m}\]`,
          ],
          final: "10.8 m",
          note: "Marks: (M1) sin equation with the 4.8° angle, (M1) rearranged for L, (A1) 10.8.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "In this question, give all answers correct to one decimal place.",
      ctx: [m`In triangle \(PQR\), \(PR = 11\ \text{cm}\), \(QR = 8\ \text{cm}\) and angle \(Q\hat{P}R = 35^{\circ}\). Angle \(P\hat{Q}R\) can have two different values.`],
      parts: [
        {
          l: "a", marks: 2, q: m`Find the acute value of angle \(P\hat{Q}R\).`, lines: 3, restate: "Acute angle Q",
          steps: [
            m`\[\dfrac{\sin P\hat{Q}R}{11} = \dfrac{\sin 35^{\circ}}{8} \Rightarrow \sin P\hat{Q}R = 0.7887\]`,
            m`\[P\hat{Q}R = 52.1^{\circ}\]`,
          ],
          final: "52.1°",
          note: "Marks: (M1) sine rule with PR opposite Q, (A1) 52.1.",
        },
        {
          l: "b", marks: 1, q: m`Write down the obtuse value of angle \(P\hat{Q}R\).`, lines: 2, restate: "Obtuse angle Q",
          steps: [m`\[180^{\circ} - 52.1^{\circ} = 127.9^{\circ}\]`],
          final: "127.9°",
          note: "Marks: (A1) 127.9. It is valid because 35° + 127.9° < 180°.",
        },
        {
          l: "c", marks: 3, q: m`For the triangle in which angle \(P\hat{Q}R\) is obtuse, calculate the length of \(PQ\).`, lines: 4, restate: "Length PQ",
          steps: [
            m`\[P\hat{R}Q = 180^{\circ} - 35^{\circ} - 127.9^{\circ} = 17.1^{\circ}\]`,
            m`\[\dfrac{PQ}{\sin 17.1^{\circ}} = \dfrac{8}{\sin 35^{\circ}} \Rightarrow PQ = 4.1\ \text{cm}\]`,
          ],
          final: "4.1 cm",
          note: "Marks: (A1) angle R = 17.1°, (M1) sine rule for PQ, (A1) 4.1. The acute triangle gives angle R = 92.9° and PQ = 13.9 cm.",
        },
      ],
    },
    // ───────────────────────── Section B ─────────────────────────
    {
      n: 4,
      section: "B",
      instruction: "In this question, give all lengths and areas to three significant figures and all angles to the nearest 0.1°. Use unrounded values in later parts.",
      ctx: [
        m`A farmer owns a field \(ABCD\). A straight fence \(AC\) divides the field into two triangular parts, triangle \(ABC\) and triangle \(ACD\).`,
        m`\(AB = 130\ \text{m}\), \(BC = 104\ \text{m}\), \(CD = 88\ \text{m}\), \(AD = 120\ \text{m}\) and angle \(A\hat{B}C = 71^{\circ}\).`,
      ],
      parts: [
        {
          l: "a", marks: 3, q: m`Calculate the length of the fence \(AC\).`, lines: 4, restate: "Length AC",
          steps: [
            m`\[AC^2 = 130^2 + 104^2 - 2(130)(104)\cos 71^{\circ} = 18\,913\]`,
            m`\[AC = 137.5 = 138\ \text{m}\]`,
          ],
          final: "138 m",
          note: "Marks: (M1) cosine rule, (A1) substitution, (A1) 138.",
        },
        {
          l: "b", marks: 3, q: m`Find the size of angle \(B\hat{A}C\).`, lines: 4, restate: "Angle BAC",
          steps: [
            m`\[\dfrac{\sin B\hat{A}C}{104} = \dfrac{\sin 71^{\circ}}{137.52}\]`,
            m`\[\sin B\hat{A}C = 0.7150 \Rightarrow B\hat{A}C = 45.6^{\circ}\]`,
          ],
          final: "45.6°",
          note: "Marks: (M1) sine rule with BC opposite A, (A1) 0.7150, (A1) 45.6. Angle BAC is the smallest angle of triangle ABC, so it is acute.",
        },
        {
          l: "c", marks: 3, q: m`Find the size of angle \(A\hat{D}C\).`, lines: 4, restate: "Angle ADC",
          steps: [
            m`\[\cos A\hat{D}C = \dfrac{88^2 + 120^2 - 137.52^2}{2(88)(120)} = 0.1530\]`,
            m`\[A\hat{D}C = 81.2^{\circ}\]`,
          ],
          final: "81.2°",
          note: "Marks: (M1) cosine rule for the angle, (A1) 0.1530, (A1) 81.2.",
        },
        {
          l: "d", sub: "i", marks: 2, q: m`Calculate the area of triangle \(ABC\).`, lines: 3, restate: "Area ABC",
          steps: [m`\[\tfrac12 (130)(104)\sin 71^{\circ} = 6392 \approx 6390\ \text{m}^2\]`],
          final: "6390 m²",
          note: "Marks: (M1) ½ ab sin C with the included angle 71°, (A1) 6390.",
        },
        {
          l: "d", sub: "ii", marks: 2, q: m`Calculate the area of triangle \(ACD\).`, lines: 3, restate: "Area ACD",
          steps: [m`\[\tfrac12 (88)(120)\sin 81.2^{\circ} = 5218 \approx 5220\ \text{m}^2\]`],
          final: "5220 m²",
          note: "Marks: (M1) ½ ab sin C using angle ADC, (A1) 5220.",
        },
        {
          l: "d", sub: "iii", marks: 1, q: m`Hence write down the area of the field \(ABCD\).`, lines: 2, restate: "Area ABCD",
          steps: [m`\[6392 + 5218 = 11\,610 \approx 11\,600\ \text{m}^2\]`],
          final: "11 600 m²",
          note: "Marks: (A1) 11 600 (follow through).",
        },
        {
          l: "e", marks: 2, q: m`The farmer sows grass seed over the whole field at a cost of \$4.20 per square metre. Calculate the total cost of the seed. Give your answer to the nearest \$100.`, lines: 3, restate: "Cost of seed",
          steps: [m`\[11\,610 \times 4.20 = \$48\,762 \approx \$48\,800\]`],
          final: "$48 800",
          note: "Marks: (M1) area × 4.20, (A1) 48 800 (follow through).",
        },
        {
          l: "f", marks: 1, q: m`The farmer has a budget of \$50\,000 for the seed. Determine whether the budget is enough.`, lines: 2, restate: "Budget",
          steps: [m`\(\$48\,800 < \$50\,000\), so the budget is enough.`],
          final: "Yes, 48 800 < 50 000",
          note: "Marks: (R1) comparison with a conclusion.",
        },
      ],
    },
  ],
};

export default paper;
