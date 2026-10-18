import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 5: Upper & Lower Bounds (IB style, 41 marks)
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "bounds",
  session: 5,
  topic: "Upper & Lower Bounds",
  title: "Upper and Lower Bounds",
  subtitle: "Summative Revision, Session 5",
  minutes: 45,
  lessonAnchor: "bounds",
  questions: [
    {
      n: 1,
      section: "A",
      ctx: ["A company packs mobile phones into boxes for delivery. The measurements for one phone and one box are shown in the table."],
      table: {
        head: ["Item", "Measurement", "Accuracy"],
        rows: [
          ["Mass of one phone", "172 g", "nearest gram"],
          ["Thickness of one phone", "0.78 cm", "2 significant figures"],
          ["Mass of an empty box", "85 g", "nearest 5 g"],
        ],
      },
      parts: [
        {
          l: "a", marks: 1, q: "Write down the lower bound of the mass of one phone.", lines: 1, restate: "Phone mass",
          steps: [m`The accuracy is \(1\) g, so the error is \(\pm 0.5\) g:`, m`\[171.5 \le \text{mass} < 172.5\]`],
          final: "171.5 g",
          note: "Marks: (A1) 171.5.",
        },
        {
          l: "b", marks: 2, q: "Write down the lower bound and the upper bound of the thickness of one phone.", lines: 2, restate: "Thickness",
          steps: [
            m`2 s.f. means the last digit is the hundredths place, so the error is \(\pm 0.005\) cm:`,
            m`\[0.775 \le \text{thickness} < 0.785\]`,
          ],
          final: "Lower 0.775 cm, upper 0.785 cm",
          note: "Marks: (A1) 0.775, (A1) 0.785.",
        },
        {
          l: "c", marks: 3, q: "A box holds 24 phones. Calculate the upper bound of the total mass of the box and its 24 phones.", lines: 4, restate: "Upper bound of total",
          steps: [
            m`Upper bound of one phone \(= 172.5\) g. Box accuracy is \(\pm 2.5\) g, so upper bound of box \(= 87.5\) g.`,
            m`\[24 \times 172.5 + 87.5 = 4140 + 87.5\]`,
            m`\[= 4227.5\]`,
          ],
          final: "4227.5 g",
          note: "Marks: (A1) 172.5, (A1) 87.5, (A1) 4227.5.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      instruction: "In this question, give all answers to 3 significant figures unless told otherwise.",
      ctx: ["The floor of a community hall is a rectangle. Its length is 12.6 m and its width is 9.4 m. Each measurement is correct to 1 decimal place."],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the lower bound of the length and the upper bound of the width.", lines: 2, restate: "Bounds of L and W",
          steps: [m`\[12.55 \le L < 12.65 \qquad 9.35 \le W < 9.45\]`],
          final: "Lower bound of length 12.55 m; upper bound of width 9.45 m",
          note: "Marks: (A1) 12.55, (A1) 9.45.",
        },
        {
          l: "b", marks: 2, q: "Calculate the lower bound and the upper bound of the area of the floor.", lines: 3, restate: "Bounds of area",
          steps: [
            m`Lower: \(12.55 \times 9.35 = 117.3425\)`,
            m`Upper: \(12.65 \times 9.45 = 119.5425\)`,
          ],
          final: "Lower 117 m², upper 120 m²",
          note: "Marks: (A1) 117, (A1) 120 (3 s.f.). Accept unrounded 117.3425 and 119.5425.",
        },
        {
          l: "c", marks: 3, q: "The architect writes the area as 120 m² (2 significant figures). Justify that this is a suitable degree of accuracy.", lines: 4, restate: "Justify 120 m²",
          steps: [
            m`The area lies between \(117.3425\) and \(119.5425\).`,
            m`To 3 s.f. the bounds are \(117\) and \(120\). They are different, so 3 s.f. is not justified.`,
            m`To 2 s.f. both bounds round to \(120\). They agree, so 2 s.f. is justified.`,
          ],
          final: "Both bounds round to 120 at 2 s.f., but not at 3 s.f.",
          note: "Marks: (M1) round both bounds to 3 s.f., (M1) round both bounds to 2 s.f., (R1) conclusion that they agree only at 2 s.f.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      ctx: [
        "Dara runs 200 m in 24.6 s. The distance is correct to the nearest metre and the time is correct to 1 decimal place.",
        "Speed is distance divided by time.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the lower bound of the distance and the upper bound of the time.", lines: 2, restate: "Bounds of d and t",
          steps: [m`\[199.5 \le d < 200.5 \qquad 24.55 \le t < 24.65\]`],
          final: "Lower bound of distance 199.5 m; upper bound of time 24.65 s",
          note: "Marks: (A1) 199.5, (A1) 24.65.",
        },
        {
          l: "b", marks: 2, q: "Find the lower bound and the upper bound of Dara's speed, in m/s. Give your answers to 4 significant figures.", lines: 4, restate: "Bounds of speed",
          steps: [
            "The smallest quotient uses the smallest numerator and the largest denominator. The largest quotient uses the largest numerator and the smallest denominator.",
            m`\[\text{lower} = \dfrac{199.5}{24.65} = 8.093\]`,
            m`\[\text{upper} = \dfrac{200.5}{24.55} = 8.167\]`,
          ],
          final: "Lower 8.093 m/s, upper 8.167 m/s",
          note: "Marks: (A1) 8.093, (A1) 8.167. Award (M1) only if the correct bounds are used but values are wrong.",
        },
        {
          l: "c", marks: 2, q: "Hence write down Dara's speed to a suitable degree of accuracy. Justify your answer.", lines: 3, restate: "Speed accuracy",
          steps: [
            m`To 2 s.f.: \(8.093 \to 8.1\) and \(8.167 \to 8.2\). They are different.`,
            m`To 1 s.f.: both bounds round to \(8\).`,
          ],
          final: "8 m/s (1 s.f.)",
          note: "Marks: (M1) rounding both bounds to 2 s.f. and 1 s.f., (A1) 8 m/s with the reason.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      ctx: [
        "A loaded lorry has a mass of 12.6 tonnes. Its load has a mass of 4.3 tonnes. Both masses are correct to 1 decimal place.",
        "The mass of the empty lorry is the loaded mass minus the mass of the load.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Find the lower bound and the upper bound of the mass of the empty lorry.", lines: 4, restate: "Bounds of empty mass",
          steps: [
            m`\[12.55 \le \text{loaded} < 12.65 \qquad 4.25 \le \text{load} < 4.35\]`,
            "The smallest difference uses the smallest loaded mass and the largest load:",
            m`\[\text{lower} = 12.55 - 4.35 = 8.2\]`,
            m`\[\text{upper} = 12.65 - 4.25 = 8.4\]`,
          ],
          final: "Lower 8.2 tonnes, upper 8.4 tonnes",
          note: "Marks: (M1) subtracting opposite bounds, (A1) 8.2, (A1) 8.4.",
        },
        {
          l: "b", marks: 2, q: "A bridge allows vehicles with a mass of at most 8.5 tonnes. Determine whether the empty lorry is certain to be allowed on the bridge.", lines: 3, restate: "Bridge limit",
          steps: [
            m`The greatest possible mass of the empty lorry is \(8.4\) tonnes.`,
            m`\(8.4 < 8.5\), so the mass is below the limit for every value in the range.`,
          ],
          final: "Yes, the upper bound 8.4 t is less than 8.5 t",
          note: "Marks: (M1) compare the upper bound with 8.5, (R1) conclusion.",
        },
      ],
    },
    {
      n: 5,
      section: "B",
      instruction: "In this question, give all answers to 3 significant figures unless told otherwise.",
      ctx: [
        "A water tank at a farm is a cylinder. Its radius is 2.40 m and its height is 3.50 m. Both measurements are correct to 3 significant figures.",
        "The volume of a cylinder is V = πr²h.",
        "Water is pumped into the empty tank at a rate of 1.2 m³ per minute, correct to 2 significant figures.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 2, q: "Write down the lower bound of the radius and the upper bound of the height.", lines: 2, restate: "Bounds of r and h",
          steps: [
            m`3 s.f. means the last digit is the hundredths place, so the error is \(\pm 0.005\) m.`,
            m`\[2.395 \le r < 2.405 \qquad 3.495 \le h < 3.505\]`,
          ],
          final: "Lower bound of r 2.395 m; upper bound of h 3.505 m",
          note: "Marks: (A1) 2.395, (A1) 3.505.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Calculate the upper bound of the volume of the tank.", lines: 3, restate: "Upper bound of V",
          steps: [
            "The largest volume uses the largest radius and the largest height:",
            m`\[V_{\text{upper}} = \pi \times 2.405^2 \times 3.505 = 63.69\ldots\]`,
          ],
          final: "63.7 m³",
          note: "Marks: (M1) substitution of 2.405 and 3.505, (A1) 63.7.",
        },
        {
          l: "a", sub: "iii", marks: 2, q: "Calculate the lower bound of the volume of the tank.", lines: 3, restate: "Lower bound of V",
          steps: [
            "The smallest volume uses the smallest radius and the smallest height:",
            m`\[V_{\text{lower}} = \pi \times 2.395^2 \times 3.495 = 62.98\ldots\]`,
          ],
          final: "63.0 m³",
          note: "Marks: (M1) substitution of 2.395 and 3.495, (A1) 63.0. Accept 62.98 or 63.",
        },
        {
          l: "b", marks: 3, q: "Hence write down the volume of the tank to a suitable degree of accuracy. Justify your answer.", lines: 4, restate: "Suitable accuracy",
          steps: [
            m`The volume lies between \(62.98\ldots\) and \(63.69\ldots\).`,
            m`To 3 s.f. the bounds are \(63.0\) and \(63.7\). To 2 s.f. they are \(63\) and \(64\). Both are different.`,
            m`To 1 s.f. both bounds round to \(60\).`,
          ],
          final: "60 m³ (1 s.f.)",
          note: "Marks: (M1) rounding both bounds, (R1) bounds differ at 3 s.f. and 2 s.f., (A1) 60 m³.",
        },
        {
          l: "c", sub: "i", marks: 2, q: "Find the lower bound of the time taken to fill the tank.", lines: 3, restate: "Lower bound of time",
          steps: [
            m`Rate: \(1.15 \le R < 1.25\). The smallest time uses the smallest volume and the largest rate.`,
            m`\[t_{\text{lower}} = \dfrac{62.98\ldots}{1.25} = 50.4\]`,
          ],
          final: "50.4 minutes",
          note: "Marks: (M1) V lower divided by 1.25, (A1) 50.4.",
        },
        {
          l: "c", sub: "ii", marks: 2, q: "Find the upper bound of the time taken to fill the tank.", lines: 3, restate: "Upper bound of time",
          steps: [
            "The largest time uses the largest volume and the smallest rate.",
            m`\[t_{\text{upper}} = \dfrac{63.69\ldots}{1.15} = 55.4\]`,
          ],
          final: "55.4 minutes",
          note: "Marks: (M1) V upper divided by 1.15, (A1) 55.4.",
        },
        {
          l: "d", marks: 2, q: "The farmer says, \"The tank will always be full within one hour.\" Determine whether the farmer is correct. Justify your answer.", lines: 3, restate: "One hour claim",
          steps: [
            m`The greatest possible time is \(55.4\) minutes.`,
            m`\(55.4 < 60\), so the tank fills within one hour for every value in the ranges.`,
          ],
          final: "Yes, the upper bound 55.4 min is less than 60 min",
          note: "Marks: (M1) compare the upper bound with 60, (R1) conclusion.",
        },
        {
          l: "e", marks: 2, q: "A worker estimates the volume as 65 m³. Using V = π × 2.40² × 3.50 as the exact value, find the percentage error in the estimate.", lines: 3, restate: "Percentage error",
          steps: [
            m`\[V = \pi \times 2.40^2 \times 3.50 = 63.33\ldots\]`,
            m`\[\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100 = \left|\dfrac{65 - 63.33\ldots}{63.33\ldots}\right| \times 100 = 2.63\%\]`,
          ],
          final: "2.63%",
          note: "Marks: (M1) formula with v_E = 63.33…, (A1) 2.63%.",
        },
      ],
    },
  ],
};

export default paper;
