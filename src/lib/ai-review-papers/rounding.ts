import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 4 — Rounding & Estimation
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "rounding",
  session: 4,
  topic: "Rounding & Estimation",
  title: "Rounding",
  subtitle: "Summative Revision — Session 4",
  minutes: 35,
  lessonAnchor: "rounding",
  questions: [
    {
      n: 1,
      ctx: ["Round each number as instructed."],
      parts: [
        { l: "a", marks: 1, q: m`\(48.2759\) to 2 decimal places.`, lines: 1, restate: "2 d.p.", steps: [m`The third decimal digit is 5, so round up: \(48.27\underline{5}9 \to 48.28\).`], final: "48.28" },
        { l: "b", marks: 1, q: m`\(48.2759\) to 3 significant figures.`, lines: 1, restate: "3 s.f.", steps: [m`The 4th s.f. is 7, so round up: \(48.3\).`], final: "48.3" },
        { l: "c", marks: 1, q: m`\(48.2759\) to the nearest 10.`, lines: 1, restate: "Nearest 10", steps: [m`The units digit is 8, so round up: \(50\).`], final: "50" },
        { l: "d", marks: 1, q: m`\(0.004068\) to 2 significant figures.`, lines: 1, restate: "2 s.f.", steps: [m`Leading zeros are not significant. The significant digits are 4, 0, 6, 8 → \(0.0041\).`], final: "0.0041" },
        { l: "e", marks: 1, q: m`\(5972\) to 2 significant figures.`, lines: 1, restate: "2 s.f.", steps: [m`\(5972 \to 6000\) (keep the place-value zeros).`], final: "6000" },
      ],
    },
    {
      n: 2,
      parts: [
        { l: "a", marks: 1, q: "Write 45 600 000 in the form a × 10ᵏ where 1 ≤ a < 10 and k is an integer.", lines: 1, restate: "Standard form", steps: [m`\[4.56 \times 10^{7}\]`], final: "4.56 × 10⁷" },
        { l: "b", marks: 1, q: "Write 0.00032 in the form a × 10ᵏ.", lines: 1, restate: "Standard form", steps: [m`\[3.2 \times 10^{-4}\]`], final: "3.2 × 10⁻⁴" },
        {
          l: "c", marks: 2, q: m`Calculate \((3.2 \times 10^{5}) \times (4 \times 10^{-2})\), giving your answer in standard form.`, restate: "Product",
          steps: [m`\[3.2 \times 4 = 12.8 \quad\text{and}\quad 10^{5} \times 10^{-2} = 10^{3}\]`, m`\[12.8 \times 10^{3} = 1.28 \times 10^{4}\]`],
          final: "1.28 × 10⁴",
        },
        {
          l: "d", marks: 2, q: m`Calculate \(\dfrac{6 \times 10^{8}}{2.5 \times 10^{3}}\), giving your answer in standard form.`, restate: "Quotient",
          steps: [m`\[\dfrac{6}{2.5} = 2.4 \quad\text{and}\quad 10^{8} \div 10^{3} = 10^{5}\]`],
          final: "2.4 × 10⁵",
        },
      ],
    },
    {
      n: 3,
      ctx: ["A rectangular garden has length 12.4 m and width 7.85 m."],
      parts: [
        { l: "a", marks: 1, q: "Calculate the exact area.", lines: 1, restate: "Exact area", steps: [m`\[12.4 \times 7.85 = 97.34\]`], final: "97.34 m²" },
        { l: "b", marks: 1, q: "Write the area to 3 significant figures.", lines: 1, restate: "3 s.f.", steps: [m`\(97.34 \to 97.3\)`], final: "97.3 m²" },
        {
          l: "c", marks: 3, q: "Sambo estimates the area by first rounding each dimension to 1 significant figure. Find his estimate and the percentage error in it.", lines: 4, restate: "Estimate and % error",
          steps: [
            m`Estimate: \(10 \times 8 = 80\)`,
            m`\[\varepsilon = \left|\dfrac{80 - 97.34}{97.34}\right| \times 100 = 17.8\%\]`,
          ],
          final: "Estimate 80 m², error ≈ 17.8%",
        },
      ],
    },
    {
      n: 4,
      ctx: ["Sreyneang invests $2,000 at 3.75% per year, compounded annually, for 8 years."],
      parts: [
        { l: "a", marks: 2, q: "Find the future value, to the nearest cent.", restate: "Exact future value", steps: [m`\[FV = 2000(1.0375)^8 = 2684.94\]`], final: "$2,684.94" },
        {
          l: "b", marks: 2, q: "Sreyneang rounds the multiplier 1.0375 to 1.04 before raising it to the power. Find the value she gets.", restate: "Early rounding", steps: [m`\[2000(1.04)^8 = 2737.14\]`], final: "$2,737.14",
        },
        {
          l: "c", marks: 2, q: "Find the percentage error caused by rounding early, to 3 significant figures. Comment briefly.", restate: "% error from early rounding",
          steps: [m`\[\left|\dfrac{2737.14 - 2684.94}{2684.94}\right| \times 100 = 1.94\%\]`, "Rounding a multiplier early is magnified by the power — keep full calculator values until the final step."],
          final: "≈ 1.94%",
        },
      ],
    },
    {
      n: 5,
      parts: [
        {
          l: "a", marks: 2, q: m`Estimate the value of \(\dfrac{48.3 \times 9.87}{2.03}\) by rounding each number to 1 significant figure.`, restate: "Estimate",
          steps: [m`\[\dfrac{50 \times 10}{2} = 250\]`], final: "250",
        },
        {
          l: "b", marks: 3, q: "Calculate the exact value, and find the percentage error of your estimate to 3 significant figures.", lines: 4, restate: "Exact value and % error",
          steps: [
            m`\[\dfrac{48.3 \times 9.87}{2.03} = 234.84\ldots\]`,
            m`\[\left|\dfrac{250 - 234.84}{234.84}\right| \times 100 = 6.46\%\]`,
          ],
          final: "Exact ≈ 234.8, error ≈ 6.46%",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "A floor needs 37.4 m² of tiles. Tiles are sold only in packs, and each pack covers 2.5 m². A pack costs $18.75.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the number of packs Ravy must buy.", restate: "Packs needed",
          steps: [m`\[37.4 \div 2.5 = 14.96\]`, "Tiles are sold in whole packs and 14 packs would leave the floor short, so round UP to the next whole number — whatever the decimal part."],
          final: "15 packs",
        },
        { l: "b", marks: 1, q: "Find the total cost.", lines: 1, restate: "Total cost", steps: [m`\[15 \times 18.75 = 281.25\]`], final: "$281.25" },
      ],
    },
  ],
};

export default paper;
