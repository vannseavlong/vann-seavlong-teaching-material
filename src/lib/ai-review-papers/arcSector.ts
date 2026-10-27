import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 16: Arc Length and Sector Area (AI Unit 3). Section A short, Section B extended.
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "arc-sector",
  session: 16,
  topic: "Arc Length and Sector Area",
  title: "Arc Length and Sector Area",
  subtitle: "Summative Revision, Session 16",
  minutes: 38,
  lessonAnchor: "arc-sector",
  lessonHref: "/ai/unit-3/lesson",
  questions: [
    // ───────────────────────── Section A ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all answers correct to three significant figures.",
      ctx: [m`A slice is cut from a round cake of radius \(12\ \text{cm}\). The angle of the slice at the centre of the cake is \(75^{\circ}\).`],
      parts: [
        {
          l: "a", marks: 2, q: m`Calculate the length of the curved edge of the slice.`, lines: 3, restate: "Arc length",
          steps: [m`\[l = \dfrac{75}{360} \times 2\pi(12) = 15.7\ \text{cm}\]`],
          final: "15.7 cm",
          note: "Marks: (M1) 75/360 × 2πr, (A1) 15.7.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the area of the top of the slice.`, lines: 3, restate: "Sector area",
          steps: [m`\[A = \dfrac{75}{360} \times \pi(12)^2 = 94.2\ \text{cm}^2\]`],
          final: "94.2 cm²",
          note: "Marks: (M1) 75/360 × πr², (A1) 94.2.",
        },
        {
          l: "c", marks: 2, q: m`Calculate the perimeter of the top of the slice.`, lines: 3, restate: "Perimeter",
          steps: [m`\[P = l + 2r = 15.71 + 24 = 39.7\ \text{cm}\]`],
          final: "39.7 cm",
          note: "Marks: (M1) arc plus two radii, (A1) 39.7.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      ctx: [m`A decorative fan is a sector of a circle of radius \(15\ \text{cm}\). The curved edge of the fan has length \(18\ \text{cm}\).`],
      parts: [
        {
          l: "a", marks: 2, q: m`Find the angle at the centre of the fan. Give your answer to the nearest degree.`, lines: 3, restate: "Angle at centre",
          steps: [m`\[\theta = \dfrac{18}{2\pi(15)} \times 360 = 68.8^{\circ} \approx 69^{\circ}\]`],
          final: "69°",
          note: "Marks: (M1) θ = l / (2πr) × 360, (A1) 69.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the area of the fan.`, lines: 3, restate: "Area of fan",
          steps: [m`\[A = \dfrac{68.75}{360} \times \pi(15)^2 = 135\ \text{cm}^2\]`],
          final: "135 cm²",
          note: "Marks: (M1) sector area with the unrounded angle, (A1) 135. Check: A = ½lr = ½(18)(15) = 135.",
        },
        {
          l: "c", marks: 1, q: m`Write down the perimeter of the fan.`, lines: 2, restate: "Perimeter",
          steps: [m`\[P = 18 + 2(15) = 48\ \text{cm}\]`],
          final: "48 cm",
          note: "Marks: (A1) 48.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "In this question, give all answers correct to three significant figures.",
      ctx: [m`A flower bed is a sector of a circle. It has area \(154\ \text{m}^2\) and angle \(100^{\circ}\) at the centre.`],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the radius of the flower bed.`, lines: 4, restate: "Radius",
          steps: [
            m`\[154 = \dfrac{100}{360} \times \pi r^2\]`,
            m`\[r^2 = \dfrac{154 \times 360}{100\pi} = 176.5 \Rightarrow r = 13.3\ \text{m}\]`,
          ],
          final: "13.3 m",
          note: "Marks: (M1) equation, (M1) rearranged for r², (A1) 13.3.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the length of the curved edge of the flower bed.`, lines: 3, restate: "Arc length",
          steps: [m`\[l = \dfrac{100}{360} \times 2\pi(13.284) = 23.2\ \text{m}\]`],
          final: "23.2 m",
          note: "Marks: (M1) arc formula with the unrounded radius, (A1) 23.2.",
        },
        {
          l: "c", marks: 1, q: m`Calculate the length of edging needed to go all the way around the flower bed.`, lines: 2, restate: "Perimeter",
          steps: [m`\[P = 23.19 + 2(13.284) = 49.8\ \text{m}\]`],
          final: "49.8 m",
          note: "Marks: (A1) 49.8.",
        },
      ],
    },
    // ───────────────────────── Section B ─────────────────────────
    {
      n: 4,
      section: "B",
      instruction: "In this question, give all answers correct to three significant figures unless told otherwise.",
      ctx: [
        m`A garden sprinkler is fixed at point \(O\) and waters a sector of lawn of radius \(8\ \text{m}\). The sprinkler turns through an angle of \(140^{\circ}\) from point \(A\) to point \(B\) on the edge of the lawn.`,
      ],
      parts: [
        {
          l: "a", marks: 2, q: m`Calculate the area of lawn that is watered.`, lines: 3, restate: "Watered area",
          steps: [m`\[A = \dfrac{140}{360} \times \pi(8)^2 = 78.2\ \text{m}^2\]`],
          final: "78.2 m²",
          note: "Marks: (M1) 140/360 × πr², (A1) 78.2.",
        },
        {
          l: "b", marks: 2, q: m`Calculate the length of the curved edge \(AB\) of the watered region.`, lines: 3, restate: "Arc AB",
          steps: [m`\[l = \dfrac{140}{360} \times 2\pi(8) = 19.5\ \text{m}\]`],
          final: "19.5 m",
          note: "Marks: (M1) 140/360 × 2πr, (A1) 19.5.",
        },
        {
          l: "c", marks: 2, q: m`A low fence is placed along the whole boundary of the watered region, that is, along \(OA\), the arc \(AB\) and \(BO\). Calculate the length of the fence.`, lines: 3, restate: "Fence length",
          steps: [m`\[P = 19.55 + 2(8) = 35.5\ \text{m}\]`],
          final: "35.5 m",
          note: "Marks: (M1) arc plus two radii, (A1) 35.5.",
        },
        {
          l: "d", marks: 2, q: m`Calculate the area of triangle \(OAB\).`, lines: 3, restate: "Area OAB",
          steps: [m`\[\tfrac12 (8)^2 \sin 140^{\circ} = 20.6\ \text{m}^2\]`],
          final: "20.6 m²",
          note: "Marks: (M1) ½ r² sin θ, (A1) 20.6.",
        },
        {
          l: "e", marks: 2, q: m`A straight path is laid from \(A\) to \(B\). Find the area of lawn between the path and the arc \(AB\).`, lines: 3, restate: "Segment area",
          steps: [m`\[78.19 - 20.57 = 57.6\ \text{m}^2\]`],
          final: "57.6 m²",
          note: "Marks: (M1) sector minus triangle, (A1) 57.6.",
        },
        {
          l: "f", marks: 2, q: m`Grass seed for the area in part (e) costs \$0.85 per square metre. Calculate the cost, to the nearest dollar.`, lines: 3, restate: "Cost of seed",
          steps: [m`\[57.62 \times 0.85 = \$48.98 \approx \$49\]`],
          final: "$49",
          note: "Marks: (M1) area × 0.85, (A1) 49 (follow through).",
        },
        {
          l: "g", marks: 3, q: m`The gardener adjusts the sprinkler so that the curved edge has length \(24\ \text{m}\) with the radius still \(8\ \text{m}\). Find the new angle through which the sprinkler turns. Give your answer to the nearest degree.`, lines: 4, restate: "New angle",
          steps: [
            m`\[24 = \dfrac{\theta}{360} \times 2\pi(8)\]`,
            m`\[\theta = \dfrac{24 \times 360}{16\pi} = 171.9^{\circ} \approx 172^{\circ}\]`,
          ],
          final: "172°",
          note: "Marks: (M1) equation, (M1) rearranged for θ, (A1) 172.",
        },
        {
          l: "h", marks: 2, q: m`Calculate the area of lawn watered after the adjustment.`, lines: 3, restate: "New area",
          steps: [m`\[A = \dfrac{171.89}{360} \times \pi(8)^2 = 96.0\ \text{m}^2\]`],
          final: "96.0 m²",
          note: "Marks: (M1) sector area with the unrounded angle, (A1) 96.0. Check: A = ½lr = ½(24)(8) = 96.",
        },
      ],
    },
  ],
};

export default paper;
