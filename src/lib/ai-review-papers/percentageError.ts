import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 6 — Percentage Error
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "percentage-error",
  session: 6,
  topic: "Percentage Error",
  title: "Percentage Error",
  subtitle: "Summative Revision — Session 6",
  minutes: 40,
  lessonAnchor: "percentage-error",
  questions: [
    {
      n: 1,
      parts: [
        {
          l: "a", marks: 2, q: "A reporter estimates a crowd at 6000. The true attendance was 5480. Find the percentage error, to 3 significant figures.", restate: "Crowd estimate",
          steps: [
            m`\[\varepsilon = \left|\dfrac{v_A - v_E}{v_E}\right| \times 100 = \left|\dfrac{6000 - 5480}{5480}\right| \times 100\]`,
            m`\[= \dfrac{520}{5480} \times 100 = 9.49\%\]`,
          ],
          final: "9.49%",
        },
        {
          l: "b", marks: 2, q: m`A student uses \(3.14\) as an approximation of \(\pi\). Find the percentage error, to 3 significant figures. (Use the GDC value of \(\pi\) as the exact value.)`, restate: "3.14 for π",
          steps: [m`\[\left|\dfrac{3.14 - \pi}{\pi}\right| \times 100 = \dfrac{0.001593}{3.141593} \times 100 = 0.0507\%\]`],
          final: "0.0507%",
        },
        {
          l: "c", marks: 2, q: m`Find the percentage error when \(\dfrac{22}{7}\) is used as an approximation of \(\pi\). Which approximation is better?`, restate: "22/7 for π",
          steps: [
            m`\[\left|\dfrac{22/7 - \pi}{\pi}\right| \times 100 = 0.0402\%\]`,
            m`\(0.0402\% < 0.0507\%\), so \(\dfrac{22}{7}\) is the closer approximation.`,
          ],
          final: "0.0402%; 22/7 is better",
        },
      ],
    },
    {
      n: 2,
      parts: [
        {
          l: "a", marks: 2, q: "A table is measured as 1.84 m long. Its true length is 1.80 m. Find the percentage error, to 3 significant figures.", restate: "Table length",
          steps: [m`\[\dfrac{|1.84 - 1.80|}{1.80} \times 100 = 2.22\%\]`],
          final: "2.22%",
        },
        {
          l: "b", marks: 3, q: "A 2.50 kg mass is weighed on a scale that is allowed a percentage error of at most 4%. Find the range of readings the scale may give.", lines: 4, restate: "Allowed range",
          steps: [
            m`\[4\% \text{ of } 2.50 = 0.04 \times 2.50 = 0.10\]`,
            m`\[2.50 - 0.10 = 2.40 \quad\text{and}\quad 2.50 + 0.10 = 2.60\]`,
          ],
          final: "2.40 kg to 2.60 kg",
        },
      ],
    },
    {
      n: 3,
      ctx: ["Maly calculates the area of a circle of radius 7.2 cm."],
      parts: [
        {
          l: "a", marks: 2, q: m`She uses \(\pi \approx 3.14\). Find her area.`, restate: "Maly's area",
          steps: [m`\[A = 3.14 \times 7.2^2 = 3.14 \times 51.84 = 162.78\ \text{cm}^2\]`],
          final: "162.78 cm²",
        },
        {
          l: "b", marks: 2, q: "Find the exact area (GDC value of π), then the percentage error in Maly's area.", restate: "% error in area",
          steps: [
            m`\[\text{Exact: } \pi \times 51.84 = 162.86\ \text{cm}^2\]`,
            m`\[\left|\dfrac{162.78 - 162.86}{162.86}\right| \times 100 = 0.0507\%\]`,
          ],
          final: "≈ 0.0507%",
        },
        {
          l: "c", marks: 2, q: "Comment on your answer to (b) compared with Question 1(b).", restate: "Why the same?",
          steps: [m`The areas are \(A = \pi r^2\): the factor \(r^2\) is identical in both values, so it cancels in the ratio. The percentage error in the area equals the percentage error in \(\pi\).`],
          final: "Same error (0.0507%) — r² cancels",
        },
      ],
    },
    {
      n: 4,
      ctx: [
        "A cylinder has height 10 cm. A student measures its radius as 5.2 cm, but the true radius is 5.0 cm.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the percentage error in the radius.", restate: "Error in r",
          steps: [m`\[\dfrac{|5.2 - 5.0|}{5.0} \times 100 = 4\%\]`],
          final: "4%",
        },
        {
          l: "b", marks: 3, q: m`Use \(V = \pi r^2 h\) to find the percentage error in the volume calculated from the measured radius.`, lines: 4, restate: "Error in V",
          steps: [
            m`\[V_A = \pi(5.2)^2(10) = 849.49\ \text{cm}^3 \qquad V_E = \pi(5.0)^2(10) = 785.40\ \text{cm}^3\]`,
            m`\[\dfrac{849.49 - 785.40}{785.40} \times 100 = 8.16\%\]`,
          ],
          final: "8.16%",
        },
        {
          l: "c", marks: 1, q: "Roughly how does the percentage error in V compare with that in r? Suggest why.", lines: 2, restate: "Comparison",
          steps: [m`About double: \(V\) depends on \(r^2\), so a 4% error in \(r\) becomes roughly \(2 \times 4\%\) in \(V\).`],
          final: "About twice as large (r is squared)",
        },
      ],
    },
    {
      n: 5,
      ctx: ["A thermometer reads 41.0 °C. The percentage error in this reading is 2.5%."],
      parts: [
        {
          l: "•", marks: 4, q: "Find the two possible values of the true temperature.", lines: 5, restate: "True temperature",
          steps: [
            m`\[\left|\dfrac{41.0 - v_E}{v_E}\right| = 0.025\]`,
            m`Case 1 (reading too high): \(41.0 - v_E = 0.025\,v_E \Rightarrow v_E = \dfrac{41}{1.025} = 40.0\)`,
            m`Case 2 (reading too low): \(v_E - 41.0 = 0.025\,v_E \Rightarrow v_E = \dfrac{41}{0.975} = 42.05\ldots\)`,
          ],
          final: "40.0 °C or 42.1 °C",
        },
      ],
    },
    {
      n: 6,
      ctx: ["A ruler is used to measure a rod as 18 cm, to the nearest cm."],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the lower and upper bounds of the rod's true length.", restate: "Bounds",
          steps: [m`\[17.5 \le L < 18.5\]`],
          final: "17.5 ≤ L < 18.5",
        },
        {
          l: "b", marks: 3, q: "Find the greatest possible percentage error in the measurement of 18 cm, to 3 significant figures.", lines: 4, restate: "Greatest % error",
          steps: [
            m`If the true length is 17.5: \(\dfrac{|18 - 17.5|}{17.5} \times 100 = 2.857\%\)`,
            m`If the true length is 18.5: \(\dfrac{|18 - 18.5|}{18.5} \times 100 = 2.703\%\)`,
            "Take the larger value (the smaller true length gives the bigger percentage).",
          ],
          final: "2.86%",
        },
      ],
    },
  ],
};

export default paper;
