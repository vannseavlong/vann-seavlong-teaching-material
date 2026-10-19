import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 6: Percentage Error (IB standard: Section A short questions, Section B extended)
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "percentage-error",
  session: 6,
  topic: "Percentage Error",
  title: "Percentage Error",
  subtitle: "Summative Revision, Session 6",
  minutes: 40,
  lessonAnchor: "percentage-error",
  questions: [
    // ───────────────────────── Section A ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all percentages correct to three significant figures.",
      ctx: [m`The 2019 census recorded the population of Battambang province as \(1\,847\,300\). A news report gives the population as \(1.8 \times 10^{6}\).`],
      parts: [
        {
          l: "a", marks: 1, q: m`Write \(1\,847\,300\) in the form \(a \times 10^{k}\), where \(1 \le a < 10\) and \(k \in \mathbb{Z}\), with \(a\) correct to three significant figures.`, restate: "Standard form",
          steps: [m`\[1\,847\,300 = 1.8473 \times 10^{6} \approx 1.85 \times 10^{6}\]`],
          final: "1.85 × 10^6",
          note: "Marks: (A1) 1.85 × 10^6.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the percentage error in the news report's figure of \(1.8 \times 10^{6}\).`, restate: "Error in 1.8 × 10^6",
          steps: [
            m`\[\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100\% = \left|\dfrac{1\,800\,000 - 1\,847\,300}{1\,847\,300}\right| \times 100\%\]`,
            m`\[= \dfrac{47\,300}{1\,847\,300} \times 100\% = 2.56\%\]`,
          ],
          final: "2.56%",
          note: "Marks: (M1) correct substitution with v_E = 1 847 300, (A1) 2.56%.",
        },
        {
          l: "c", marks: 2, q: m`Calculate the percentage error when the population is written as \(1.85 \times 10^{6}\). Hence state which of the two figures is the better approximation.`, lines: 3, restate: "Error in 1.85 × 10^6",
          steps: [
            m`\[\left|\dfrac{1\,850\,000 - 1\,847\,300}{1\,847\,300}\right| \times 100\% = \dfrac{2700}{1\,847\,300} \times 100\% = 0.146\%\]`,
            m`\(0.146\% < 2.56\%\), so \(1.85 \times 10^{6}\) is the better approximation.`,
          ],
          final: "0.146%; 1.85 × 10^6 is better",
          note: "Marks: (A1) 0.146%, (R1) correct conclusion from the comparison.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      instruction: "In this question, give all percentages correct to three significant figures.",
      ctx: [
        m`The exact speed of light in a vacuum is \(299\,792\,458\) m s\(^{-1}\). In a physics test, Dara uses \(3 \times 10^{8}\) m s\(^{-1}\).`,
        m`The distance from the Earth to the Moon is \(3.84 \times 10^{8}\) m.`,
      ],
      parts: [
        {
          l: "a", marks: 2, q: m`Calculate the percentage error in Dara's value of the speed of light.`, restate: "Error in speed",
          steps: [
            m`\[\varepsilon = \left|\dfrac{3 \times 10^{8} - 299\,792\,458}{299\,792\,458}\right| \times 100\% = \dfrac{207\,542}{299\,792\,458} \times 100\%\]`,
            m`\[= 0.0692\%\]`,
          ],
          final: "0.0692%",
          note: "Marks: (M1) correct substitution, (A1) 0.0692%.",
        },
        {
          l: "b", sub: "i", marks: 1, q: m`Use Dara's value to calculate the time, in seconds, for light to travel from the Earth to the Moon.`, restate: "Time, Dara's value",
          steps: [m`\[t = \dfrac{3.84 \times 10^{8}}{3 \times 10^{8}} = 1.28\ \text{s}\]`],
          final: "1.28 s",
          note: "Marks: (A1) 1.28.",
        },
        {
          l: "b", sub: "ii", marks: 1, q: m`Use the exact speed to calculate the time, correct to six significant figures.`, restate: "Exact time",
          steps: [m`\[t = \dfrac{3.84 \times 10^{8}}{299\,792\,458} = 1.28089\ \text{s}\]`],
          final: "1.28089 s",
          note: "Marks: (A1) 1.28089.",
        },
        {
          l: "b", sub: "iii", marks: 1, q: m`Find the percentage error in Dara's time.`, restate: "Error in time",
          steps: [m`\[\left|\dfrac{1.28 - 1.28089}{1.28089}\right| \times 100\% = 0.0692\%\]`],
          final: "0.0692%",
          note: "Marks: (A1) 0.0692%. The distance cancels, so the error in time matches the error in speed (to 3 s.f.).",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      ctx: [m`The display of a kitchen oven shows \(180\,^{\circ}\)C. The manufacturer states that the percentage error in the displayed temperature is \(2.5\%\).`],
      parts: [
        {
          l: "a", marks: 4, q: m`Determine the two possible values of the true temperature of the oven. Give your answers correct to one decimal place.`, lines: 5, restate: "True temperature",
          steps: [
            m`\[\left|\dfrac{180 - v_E}{v_E}\right| \times 100\% = 2.5\% \;\Rightarrow\; |180 - v_E| = 0.025\,v_E\]`,
            m`Display too high: \(180 - v_E = 0.025\,v_E \Rightarrow v_E = \dfrac{180}{1.025} = 175.6\)`,
            m`Display too low: \(v_E - 180 = 0.025\,v_E \Rightarrow v_E = \dfrac{180}{0.975} = 184.6\)`,
          ],
          final: "175.6 °C or 184.6 °C",
          note: "Marks: (M1) set up the equation with ε = 0.025 (or 2.5%), (M1) one case solved, (A1) 175.6, (A1) 184.6. Only one mark for 4.5/−4.5 added to 180.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      ctx: [m`A carpenter measures the length of a plank as \(85\) cm, correct to the nearest centimetre.`],
      parts: [
        {
          l: "a", marks: 2, q: m`Write down the lower bound and the upper bound of the plank's true length \(L\).`, restate: "Bounds",
          steps: [m`\[84.5 \le L < 85.5\]`],
          final: "84.5 ≤ L < 85.5",
          note: "Marks: (A1) 84.5, (A1) 85.5.",
        },
        {
          l: "b", marks: 3, q: m`Determine the greatest possible percentage error in the measurement of \(85\) cm. Give your answer correct to three significant figures.`, lines: 4, restate: "Greatest % error",
          steps: [
            m`If \(L = 84.5\): \(\dfrac{|85 - 84.5|}{84.5} \times 100\% = 0.592\%\)`,
            m`If \(L = 85.5\): \(\dfrac{|85 - 85.5|}{85.5} \times 100\% = 0.585\%\)`,
            "The smaller true length gives the larger percentage error (v_E is in the denominator).",
          ],
          final: "0.592%",
          note: "Marks: (M1) uses a bound as v_E, (M1) compares both ends, (A1) 0.592%.",
        },
      ],
    },

    // ───────────────────────── Section B ─────────────────────────
    {
      n: 5,
      section: "B",
      instruction: "In this question, give all percentages correct to three significant figures.",
      ctx: [
        m`Sokha measures a rectangular rice field. He finds the length to be \(412\) m and the width to be \(265\) m, each correct to the nearest metre. The land register gives the exact area of the field as \(109\,000\ \text{m}^2\).`,
      ],
      table: {
        head: ["Quantity", "Sokha's measurement", "Accuracy"],
        rows: [
          ["Length", "412 m", "nearest metre"],
          ["Width", "265 m", "nearest metre"],
        ],
      },
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: m`Calculate the area of the field using Sokha's measurements.`, restate: "Measured area",
          steps: [m`\[A = 412 \times 265 = 109\,180\ \text{m}^2\]`],
          final: "109 180 m²",
          note: "Marks: (A1) 109 180.",
        },
        {
          l: "a", sub: "ii", marks: 1, q: m`Write your answer to part (a)(i) in the form \(a \times 10^{k}\), where \(1 \le a < 10\) and \(k \in \mathbb{Z}\), with \(a\) correct to three significant figures.`, restate: "Standard form",
          steps: [m`\[109\,180 = 1.0918 \times 10^{5} \approx 1.09 \times 10^{5}\]`],
          final: "1.09 × 10^5 m²",
          note: "Marks: (A1) 1.09 × 10^5.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the percentage error in Sokha's calculated area of the field.`, restate: "Error in area",
          steps: [
            m`\[\varepsilon = \left|\dfrac{109\,180 - 109\,000}{109\,000}\right| \times 100\% = \dfrac{180}{109\,000} \times 100\%\]`,
            m`\[= 0.165\%\]`,
          ],
          final: "0.165%",
          note: "Marks: (M1) correct substitution with v_E = 109 000, (A1) 0.165%.",
        },
        {
          l: "c", sub: "i", marks: 2, q: m`Calculate the lower bound for the area of the field.`, lines: 3, restate: "Lower bound of area",
          steps: [
            m`Lower bounds: length \(411.5\) m, width \(264.5\) m.`,
            m`\[A_{\min} = 411.5 \times 264.5 = 108\,841.75\ \text{m}^2\]`,
          ],
          final: "108 841.75 m²",
          note: "Marks: (M1) uses 411.5 and 264.5, (A1) 108 841.75.",
        },
        {
          l: "c", sub: "ii", marks: 2, q: m`Calculate the upper bound for the area of the field.`, lines: 3, restate: "Upper bound of area",
          steps: [
            m`Upper bounds: length \(412.5\) m, width \(265.5\) m.`,
            m`\[A_{\max} = 412.5 \times 265.5 = 109\,518.75\ \text{m}^2\]`,
          ],
          final: "109 518.75 m²",
          note: "Marks: (M1) uses 412.5 and 265.5, (A1) 109 518.75.",
        },
        {
          l: "d", marks: 2, q: m`Justify, using your answers to part (c), that the land register's area of \(109\,000\ \text{m}^2\) is consistent with Sokha's measurements.`, lines: 3, restate: "Consistency check",
          steps: [
            m`\[108\,841.75 \le 109\,000 < 109\,518.75\]`,
            "The register's area lies between the lower and upper bounds, so it is possible for the true area of the field.",
          ],
          final: "109 000 lies within the bounds",
          note: "Marks: (M1) compares 109 000 with both bounds, (R1) conclusion stated.",
        },
        {
          l: "e", marks: 3, q: m`The true area is not known to be exactly \(109\,000\ \text{m}^2\). Determine the greatest possible percentage error in Sokha's calculated area of \(109\,180\ \text{m}^2\).`, lines: 4, restate: "Greatest % error",
          steps: [
            m`True area \(108\,841.75\): \(\dfrac{|109\,180 - 108\,841.75|}{108\,841.75} \times 100\% = 0.311\%\)`,
            m`True area \(109\,518.75\): \(\dfrac{|109\,180 - 109\,518.75|}{109\,518.75} \times 100\% = 0.309\%\)`,
            "The greater value is at the lower bound of the true area.",
          ],
          final: "0.311%",
          note: "Marks: (M1) uses a bound as v_E, (M1) compares both ends, (A1) 0.311%.",
        },
        {
          l: "f", sub: "i", marks: 1, q: m`Sokha applies fertiliser that costs $0.042 per square metre. He first rounds the area to two significant figures, \(1.1 \times 10^{5}\ \text{m}^2\). Calculate the estimated cost of the fertiliser. Give your answer to two decimal places.`, restate: "Estimated cost",
          steps: [m`\[110\,000 \times 0.042 = \$4620.00\]`],
          final: "$4620.00",
          note: "Marks: (A1) 4620.00.",
        },
        {
          l: "f", sub: "ii", marks: 1, q: m`Calculate the cost of the fertiliser using the exact area of \(109\,000\ \text{m}^2\). Give your answer to two decimal places.`, restate: "Exact cost",
          steps: [m`\[109\,000 \times 0.042 = \$4578.00\]`],
          final: "$4578.00",
          note: "Marks: (A1) 4578.00.",
        },
        {
          l: "f", sub: "iii", marks: 2, q: m`Find the percentage error in the estimated cost. State what this shows about the effect of rounding the area to two significant figures.`, lines: 3, restate: "Error from rounding",
          steps: [
            m`\[\left|\dfrac{4620 - 4578}{4578}\right| \times 100\% = \dfrac{42}{4578} \times 100\% = 0.917\%\]`,
            "This equals the percentage error in the rounded area itself, because the cost per square metre is a constant factor that cancels.",
          ],
          final: "0.917%; same as the percentage error in the rounded area",
          note: "Marks: (A1) 0.917%, (R1) cost error equals area error because the constant cancels.",
        },
      ],
    },
  ],
};

export default paper;
