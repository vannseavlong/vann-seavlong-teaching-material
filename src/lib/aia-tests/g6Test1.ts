import type { AiReviewPaper } from "@/lib/ai-review-papers/types";

const m = String.raw;

// AIA Grade 6 Mathematics, Test 1 (no calculator). Section A short questions, Section B problem solving.

const paper: AiReviewPaper = {
  slug: "g6-test-1",
  session: 1,
  topic: "Number, Algebra, Geometry & Data",
  title: "Grade 6 Mathematics Test 1",
  subtitle: "Mixed Topics Test",
  minutes: 60,
  lessonAnchor: "",
  frame: {
    heroCourse: "AIA Grade 6 Mathematics",
    sheetCourse: "AIA Mathematics",
    sheetLevel: "Grade 6 Test 1 (no calculator)",
    note: "No calculator. Attempt each part, then tap Show Answer to check against the worked solution.",
    instructions: [
      "Answer all questions.",
      "Calculators are not allowed.",
      "Show all working: marks are given for correct method.",
      "Write fractions in their simplest form.",
    ],
    sectionNotes: {
      A: "Answer all questions. Write each answer in the space provided.",
      B: "Answer all questions. Show your working for every part.",
    },
    backHref: "/courses/aia-g6-math",
    backLabel: "← Grade 6 Mathematics",
  },
  questions: [
    // ─── Section A ───────────────────────────────────────────────────────────
    {
      n: 1,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: "Write 4 307 052 in words.", lines: 1, restate: "In words",
          steps: ["4 millions, 307 thousands, 52 ones."],
          final: "Four million, three hundred and seven thousand and fifty-two",
        },
        {
          l: "b", marks: 1, q: "Round 6.4782 to 2 decimal places.", lines: 1, restate: "2 d.p.",
          steps: [m`The third decimal digit is 8, so round up: \(6.47\underline{8}2 \to 6.48\).`],
          final: "6.48",
        },
        {
          l: "c", marks: 1, q: "Round 38 465 to the nearest thousand.", lines: 1, restate: "Nearest 1000",
          steps: ["The hundreds digit is 4 (less than 5), so round down."],
          final: "38 000",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      instruction: "Use the correct order of operations (brackets, indices, ×  ÷, +  −).",
      parts: [
        {
          l: "a", marks: 1, q: m`Calculate \(18 - 4 \times 3\).`, lines: 1, restate: "18 − 4 × 3",
          steps: [m`\[18 - 12 = 6\]`],
          final: "6",
          note: "Common error: (18 − 4) × 3 = 42.",
        },
        {
          l: "b", marks: 2, q: m`Calculate \((7 + 5) \div 3 + 2^2\).`, lines: 2, restate: "(7 + 5) ÷ 3 + 2²",
          steps: [m`\[12 \div 3 + 4\]`, m`\[4 + 4 = 8\]`],
          final: "8",
        },
        {
          l: "c", marks: 1, q: m`Calculate \(36 \div (9 - 3) \times 2\).`, lines: 1, restate: "36 ÷ (9 − 3) × 2",
          steps: [m`\(36 \div 6 \times 2\). Work left to right: \(6 \times 2 = 12\).`],
          final: "12",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: "List all the factors of 36.", lines: 1, restate: "Factors of 36",
          steps: ["Factor pairs: 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6."],
          final: "1, 2, 3, 4, 6, 9, 12, 18, 36",
        },
        {
          l: "b", marks: 1, q: "Find the highest common factor (HCF) of 24 and 36.", lines: 1, restate: "HCF",
          steps: ["Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. The largest one that also divides 36 is 12."],
          final: "12",
        },
        {
          l: "c", marks: 1, q: "Find the lowest common multiple (LCM) of 6 and 8.", lines: 1, restate: "LCM",
          steps: ["Multiples of 8: 8, 16, 24. The first one divisible by 6 is 24."],
          final: "24",
        },
        {
          l: "d", marks: 2, q: "Write 60 as a product of its prime factors.", lines: 2, restate: "Prime factors",
          steps: [m`\(60 = 2 \times 30 = 2 \times 2 \times 15 = 2 \times 2 \times 3 \times 5\)`],
          final: "2² × 3 × 5",
          note: "Marks: (M1) a correct factor tree or division, (A1) 2² × 3 × 5 or 2 × 2 × 3 × 5.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      parts: [
        {
          l: "a", marks: 2, q: m`Calculate \(\dfrac{2}{3} + \dfrac{1}{4}\).`, lines: 2, restate: "2/3 + 1/4",
          steps: [m`\[\dfrac{8}{12} + \dfrac{3}{12} = \dfrac{11}{12}\]`],
          final: "11/12",
          note: "Marks: (M1) common denominator 12, (A1) 11/12.",
        },
        {
          l: "b", marks: 2, q: m`Calculate \(3\tfrac{1}{2} - 1\tfrac{3}{4}\).`, lines: 2, restate: "3½ − 1¾",
          steps: [m`\[\dfrac{7}{2} - \dfrac{7}{4} = \dfrac{14}{4} - \dfrac{7}{4} = \dfrac{7}{4}\]`, m`\(\dfrac{7}{4} = 1\tfrac{3}{4}\)`],
          final: "1¾",
        },
        {
          l: "c", marks: 1, q: m`Find \(\dfrac{2}{5}\) of 15.`, lines: 1, restate: "2/5 of 15",
          steps: [m`\(15 \div 5 = 3\), then \(3 \times 2 = 6\).`],
          final: "6",
        },
        {
          l: "d", marks: 1, q: m`Calculate \(\dfrac{3}{4} \div \dfrac{1}{2}\).`, lines: 1, restate: "3/4 ÷ 1/2",
          steps: [m`\[\dfrac{3}{4} \times \dfrac{2}{1} = \dfrac{6}{4} = 1\tfrac{1}{2}\]`],
          final: "1½",
        },
      ],
    },
    {
      n: 5,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: "Calculate 4.7 + 12.85.", lines: 1, restate: "4.7 + 12.85",
          steps: ["Line up the decimal points: 4.70 + 12.85 = 17.55."],
          final: "17.55",
        },
        {
          l: "b", marks: 1, q: m`Calculate \(0.6 \times 0.4\).`, lines: 1, restate: "0.6 × 0.4",
          steps: [m`\(6 \times 4 = 24\); two decimal places in total, so \(0.24\).`],
          final: "0.24",
        },
        {
          l: "c", marks: 1, q: m`Calculate \(7.2 \div 0.3\).`, lines: 1, restate: "7.2 ÷ 0.3",
          steps: [m`Multiply both by 10: \(72 \div 3 = 24\).`],
          final: "24",
        },
      ],
    },
    {
      n: 6,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: m`Write \(\dfrac{3}{5}\) as a percentage.`, lines: 1, restate: "3/5 as %",
          steps: [m`\[\dfrac{3}{5} = \dfrac{60}{100} = 60\%\]`],
          final: "60%",
        },
        {
          l: "b", marks: 1, q: "Write 0.35 as a fraction in its simplest form.", lines: 1, restate: "0.35 as a fraction",
          steps: [m`\[0.35 = \dfrac{35}{100} = \dfrac{7}{20}\]`],
          final: "7/20",
        },
        {
          l: "c", marks: 1, q: "Find 25% of 84.", lines: 1, restate: "25% of 84",
          steps: [m`\(25\% = \dfrac{1}{4}\), so \(84 \div 4 = 21\).`],
          final: "21",
        },
        {
          l: "d", marks: 2, q: m`Write these numbers in order, smallest first: \(0.7,\ \dfrac{2}{3},\ 65\%,\ 0.68\)`, lines: 2, restate: "Order",
          steps: [m`Change all to decimals: \(0.7,\ 0.666\ldots,\ 0.65,\ 0.68\).`],
          final: "65%, 2/3, 0.68, 0.7",
          note: "Marks: (M1) all converted to one form, (A1) correct order.",
        },
      ],
    },
    {
      n: 7,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: m`Calculate \(-7 + 12\).`, lines: 1, restate: "−7 + 12",
          steps: ["Start at −7 and move 12 to the right."],
          final: "5",
        },
        {
          l: "b", marks: 1, q: m`Calculate \(-3 - 8\).`, lines: 1, restate: "−3 − 8",
          steps: ["Start at −3 and move 8 to the left."],
          final: "−11",
        },
        {
          l: "c", marks: 1, q: m`Calculate \(-4 \times (-6)\).`, lines: 1, restate: "−4 × (−6)",
          steps: ["Negative × negative = positive."],
          final: "24",
        },
        {
          l: "d", marks: 1, q: "At 6 am the temperature was −5 °C. By noon it had risen by 9 °C. Find the temperature at noon.", lines: 1, restate: "Noon temperature",
          steps: [m`\(-5 + 9 = 4\)`],
          final: "4 °C",
        },
      ],
    },
    {
      n: 8,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: "Write the ratio 18 : 24 in its simplest form.", lines: 1, restate: "Simplify",
          steps: ["Divide both parts by the HCF, 6."],
          final: "3 : 4",
        },
        {
          l: "b", marks: 2, q: "Dara and Sophea share 45 sweets in the ratio 2 : 3. How many sweets does each person get?", lines: 2, restate: "Share 45 in 2 : 3",
          steps: [m`Total parts \(= 2 + 3 = 5\). One part \(= 45 \div 5 = 9\).`, m`Dara: \(2 \times 9 = 18\). Sophea: \(3 \times 9 = 27\).`],
          final: "Dara 18, Sophea 27",
          note: "Marks: (M1) 45 ÷ 5, (A1) both amounts. Check: 18 + 27 = 45.",
        },
      ],
    },
    {
      n: 9,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: m`Simplify \(3a + 5b - a + 2b\).`, lines: 1, restate: "Collect like terms",
          steps: [m`\((3a - a) + (5b + 2b)\)`],
          final: "2a + 7b",
        },
        {
          l: "b", marks: 1, q: m`Find the value of \(4x - 3\) when \(x = 5\).`, lines: 1, restate: "Substitute x = 5",
          steps: [m`\(4 \times 5 - 3 = 20 - 3\)`],
          final: "17",
        },
        {
          l: "c", marks: 1, q: m`Solve \(x + 9 = 23\).`, lines: 1, restate: "x + 9 = 23",
          steps: [m`Subtract 9 from both sides: \(x = 14\).`],
          final: "x = 14",
        },
        {
          l: "d", marks: 2, q: m`Solve \(3y - 4 = 17\).`, lines: 2, restate: "3y − 4 = 17",
          steps: [m`\[3y = 21\]`, m`\[y = 7\]`],
          final: "y = 7",
          note: "Marks: (M1) add 4 to both sides, (A1) y = 7. Check: 3 × 7 − 4 = 17.",
        },
        {
          l: "e", marks: 1, q: m`A notebook costs \(n\) dollars and a ruler costs $3. Write an expression for the total cost of 5 notebooks and 1 ruler.`, lines: 1, restate: "Expression",
          steps: [m`5 notebooks cost \(5n\); add the ruler.`],
          final: "5n + 3 dollars",
        },
      ],
    },

    // ─── Section B ───────────────────────────────────────────────────────────
    {
      n: 10,
      section: "B",
      ctx: ["A rectangular garden is 12 m long and 8 m wide."],
      parts: [
        {
          l: "a", marks: 1, q: "Find the perimeter of the garden.", lines: 1, restate: "Perimeter",
          steps: [m`\[2 \times (12 + 8) = 40\]`],
          final: "40 m",
        },
        {
          l: "b", marks: 1, q: "Find the area of the garden.", lines: 1, restate: "Area",
          steps: [m`\[12 \times 8 = 96\]`],
          final: "96 m²",
        },
        {
          l: "c", marks: 2, q: "A square flower bed with side 3 m is dug in the garden. The rest of the garden is grass. Find the area of grass.", lines: 2, restate: "Grass area",
          steps: [m`Flower bed: \(3 \times 3 = 9\) m².`, m`Grass: \(96 - 9 = 87\) m².`],
          final: "87 m²",
          note: "Marks: (M1) subtract the square from the rectangle, (A1) 87.",
        },
        {
          l: "d", marks: 1, q: "Fencing costs $5 per metre. Find the cost of fencing all the way around the garden.", lines: 1, restate: "Fence cost",
          steps: [m`\(40 \times 5 = 200\)`],
          final: "$200",
        },
        {
          l: "e", marks: 1, q: "A triangular sign has a base of 10 cm and a height of 6 cm. Find its area.", lines: 1, restate: "Triangle area",
          steps: [m`\[\tfrac{1}{2} \times 10 \times 6 = 30\]`],
          final: "30 cm²",
        },
      ],
    },
    {
      n: 11,
      section: "B",
      instruction: "Give a reason for each answer (for example, 'angles on a straight line add up to 180°').",
      parts: [
        {
          l: "a", marks: 1, q: "Two angles lie on a straight line. One angle is 125°. Find the other angle.", lines: 1, restate: "Straight line",
          steps: [m`\(180^\circ - 125^\circ = 55^\circ\) (angles on a straight line add up to 180°).`],
          final: "55°",
        },
        {
          l: "b", marks: 1, q: "Two angles of a triangle are 48° and 67°. Find the third angle.", lines: 1, restate: "Triangle",
          steps: [m`\(180^\circ - 48^\circ - 67^\circ = 65^\circ\) (angles in a triangle add up to 180°).`],
          final: "65°",
        },
        {
          l: "c", marks: 1, q: m`Three angles meet at a point. They are 90°, 110° and \(x\). Find \(x\).`, lines: 1, restate: "Around a point",
          steps: [m`\(360^\circ - 90^\circ - 110^\circ = 160^\circ\) (angles around a point add up to 360°).`],
          final: "x = 160°",
        },
        {
          l: "d", marks: 2, q: "In an isosceles triangle, the angle between the two equal sides is 40°. Find the size of each of the other two angles.", lines: 2, restate: "Isosceles",
          steps: [m`The other two angles are equal: \(180^\circ - 40^\circ = 140^\circ\).`, m`\(140^\circ \div 2 = 70^\circ\)`],
          final: "70° and 70°",
          note: "Marks: (M1) 180 − 40, (A1) 70° each.",
        },
      ],
    },
    {
      n: 12,
      section: "B",
      ctx: ["Nine students took a quiz marked out of 15. Their scores were: 9, 7, 13, 4, 9, 8, 6, 9, 7."],
      parts: [
        {
          l: "a", marks: 1, q: "Find the mode.", lines: 1, restate: "Mode",
          steps: ["Ordered: 4, 6, 7, 7, 8, 9, 9, 9, 13. The score 9 appears most often (3 times)."],
          final: "9",
        },
        {
          l: "b", marks: 1, q: "Find the median.", lines: 1, restate: "Median",
          steps: ["9 values, so the median is the 5th value in order: 4, 6, 7, 7, 8, 9, 9, 9, 13."],
          final: "8",
        },
        {
          l: "c", marks: 2, q: "Find the mean.", lines: 2, restate: "Mean",
          steps: [m`Total \(= 4 + 6 + 7 + 7 + 8 + 9 + 9 + 9 + 13 = 72\).`, m`\[72 \div 9 = 8\]`],
          final: "8",
          note: "Marks: (M1) total 72 divided by 9, (A1) 8.",
        },
        {
          l: "d", marks: 1, q: "Find the range.", lines: 1, restate: "Range",
          steps: [m`\(13 - 4 = 9\)`],
          final: "9",
        },
        {
          l: "e", marks: 2, q: "A tenth student then takes the quiz and scores 18. Find the new mean of all ten scores.", lines: 2, restate: "New mean",
          steps: [m`New total \(= 72 + 18 = 90\).`, m`\[90 \div 10 = 9\]`],
          final: "9",
        },
      ],
    },
    {
      n: 13,
      section: "B",
      ctx: ["A shirt normally costs $40. In a sale, all prices are reduced by 15%."],
      parts: [
        {
          l: "a", marks: 1, q: "Find the amount of the discount.", lines: 1, restate: "Discount",
          steps: [m`10% of 40 = 4 and 5% of 40 = 2, so 15% = \(4 + 2 = 6\).`],
          final: "$6",
        },
        {
          l: "b", marks: 1, q: "Find the sale price of the shirt.", lines: 1, restate: "Sale price",
          steps: [m`\(40 - 6 = 34\)`],
          final: "$34",
        },
        {
          l: "c", marks: 2, q: "Bora buys 3 shirts in the sale and pays with $120. How much change does he get?", lines: 2, restate: "Change",
          steps: [m`Cost: \(3 \times 34 = 102\).`, m`Change: \(120 - 102 = 18\).`],
          final: "$18",
          note: "Marks: (M1) 3 × 34, (A1) $18. Follow through from (b).",
        },
      ],
    },
  ],
};

export default paper;
