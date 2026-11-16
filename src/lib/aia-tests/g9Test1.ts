import type { AiReviewPaper } from "@/lib/ai-review-papers/types";

const m = String.raw;

// AIA Grade 9 Mathematics, Test 1 (calculator allowed). Section A short questions, Section B problem solving.

const paper: AiReviewPaper = {
  slug: "g9-test-1",
  session: 1,
  topic: "Algebra, Graphs, Geometry, Probability & Statistics",
  title: "Grade 9 Mathematics Test 1",
  subtitle: "Mixed Topics Test",
  minutes: 75,
  lessonAnchor: "",
  frame: {
    heroCourse: "AIA Grade 9 Mathematics",
    sheetCourse: "AIA Mathematics",
    sheetLevel: "Grade 9 Test 1 (calculator allowed)",
    note: "Calculator allowed. Attempt each part, then tap Show Answer to check against the worked solution.",
    instructions: [
      "Answer all questions.",
      "A calculator may be used.",
      "Show all working: marks are given for correct method.",
      "Give non-exact answers correct to 3 significant figures, and angles to 1 decimal place, unless told otherwise.",
    ],
    sectionNotes: {
      A: "Answer all questions. Write each answer in the space provided.",
      B: "Answer all questions. Show your working for every part.",
    },
    backHref: "/courses/aia-g9-math",
    backLabel: "← Grade 9 Mathematics",
  },
  questions: [
    // ─── Section A ───────────────────────────────────────────────────────────
    {
      n: 1,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: m`Simplify \(x^5 \times x^3\).`, lines: 1, restate: "x⁵ × x³",
          steps: [m`Add the indices: \(x^{5+3}\).`],
          final: "x⁸",
        },
        {
          l: "b", marks: 1, q: m`Simplify \((2a^3)^2\).`, lines: 1, restate: "(2a³)²",
          steps: [m`\[2^2 \times a^{3 \times 2} = 4a^6\]`],
          final: "4a⁶",
          note: "Common error: 2a⁶ (the 2 must also be squared).",
        },
        {
          l: "c", marks: 2, q: m`Find the exact value of \(5^0 + 2^{-3}\).`, lines: 2, restate: "5⁰ + 2⁻³",
          steps: [m`\(5^0 = 1\) and \(2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8}\).`, m`\[1 + \dfrac{1}{8} = \dfrac{9}{8}\]`],
          final: "9/8 (or 1⅛)",
          note: "Marks: (A1) for each correct term, both needed for full marks.",
        },
        {
          l: "d", marks: 1, q: "Write 0.000 52 in standard form.", lines: 1, restate: "Standard form",
          steps: [m`Move the decimal point 4 places right: \(5.2 \times 10^{-4}\).`],
          final: "5.2 × 10⁻⁴",
        },
        {
          l: "e", marks: 1, q: m`Calculate \((3 \times 10^5) \times (4 \times 10^3)\). Give your answer in standard form.`, lines: 1, restate: "Product",
          steps: [m`\(3 \times 4 = 12\) and \(10^5 \times 10^3 = 10^8\), so \(12 \times 10^8 = 1.2 \times 10^9\).`],
          final: "1.2 × 10⁹",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: m`Expand \(3(2x - 5)\).`, lines: 1, restate: "Expand",
          steps: [m`\(3 \times 2x - 3 \times 5\)`],
          final: "6x − 15",
        },
        {
          l: "b", marks: 2, q: m`Expand and simplify \((x + 4)(x - 3)\).`, lines: 2, restate: "Expand brackets",
          steps: [m`\[x^2 - 3x + 4x - 12\]`, m`\[x^2 + x - 12\]`],
          final: "x² + x − 12",
          note: "Marks: (M1) four correct terms, (A1) simplified.",
        },
        {
          l: "c", marks: 1, q: m`Factorise fully \(6x^2 - 9x\).`, lines: 1, restate: "Common factor",
          steps: [m`HCF of \(6x^2\) and \(9x\) is \(3x\).`],
          final: "3x(2x − 3)",
        },
        {
          l: "d", marks: 2, q: m`Factorise \(x^2 - 7x + 10\).`, lines: 2, restate: "Quadratic",
          steps: [m`Two numbers that multiply to 10 and add to −7: −2 and −5.`],
          final: "(x − 2)(x − 5)",
        },
        {
          l: "e", marks: 1, q: m`Factorise \(x^2 - 49\).`, lines: 1, restate: "Difference of squares",
          steps: [m`\(a^2 - b^2 = (a - b)(a + b)\) with \(b = 7\).`],
          final: "(x − 7)(x + 7)",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      parts: [
        {
          l: "a", marks: 2, q: m`Solve \(5x - 7 = 2x + 8\).`, lines: 2, restate: "Linear equation",
          steps: [m`\[3x = 15\]`, m`\[x = 5\]`],
          final: "x = 5",
        },
        {
          l: "b", marks: 1, q: m`Solve \(\dfrac{x + 3}{4} = 5\).`, lines: 1, restate: "Fraction equation",
          steps: [m`\(x + 3 = 20\), so \(x = 17\).`],
          final: "x = 17",
        },
        {
          l: "c", marks: 2, q: m`Solve \(3(2x - 1) = 4x + 9\).`, lines: 2, restate: "Brackets",
          steps: [m`\[6x - 3 = 4x + 9\]`, m`\[2x = 12 \Rightarrow x = 6\]`],
          final: "x = 6",
        },
        {
          l: "d", marks: 2, q: m`Solve the inequality \(4x + 3 < 19\). Hence list all the positive integers that satisfy it.`, lines: 2, restate: "Inequality",
          steps: [m`\[4x < 16 \Rightarrow x < 4\]`, "Positive integers less than 4: 1, 2, 3."],
          final: "x < 4; integers 1, 2, 3",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      parts: [
        {
          l: "•", marks: 3, q: m`Solve the simultaneous equations \(2x + y = 11\) and \(x - y = 1\).`, lines: 4, restate: "Simultaneous equations",
          steps: [
            m`Add the equations to eliminate \(y\): \(3x = 12\), so \(x = 4\).`,
            m`Substitute into \(x - y = 1\): \(4 - y = 1\), so \(y = 3\).`,
          ],
          final: "x = 4, y = 3",
          note: "Marks: (M1) elimination or substitution, (A1) x = 4, (A1) y = 3. Check: 2(4) + 3 = 11.",
        },
      ],
    },
    {
      n: 5,
      section: "A",
      ctx: [m`The points \(A(1,\ 3)\) and \(B(5,\ 11)\) lie on a straight line.`],
      parts: [
        {
          l: "a", marks: 2, q: m`Find the gradient of \(AB\).`, lines: 2, restate: "Gradient",
          steps: [m`\[m = \dfrac{11 - 3}{5 - 1} = \dfrac{8}{4} = 2\]`],
          final: "2",
        },
        {
          l: "b", marks: 2, q: m`Find the equation of the line \(AB\) in the form \(y = mx + c\).`, lines: 2, restate: "Equation",
          steps: [m`\(y - 3 = 2(x - 1)\)`, m`\[y = 2x + 1\]`],
          final: "y = 2x + 1",
        },
        {
          l: "c", marks: 1, q: m`Find the midpoint of \(AB\).`, lines: 1, restate: "Midpoint",
          steps: [m`\[\left(\dfrac{1 + 5}{2},\ \dfrac{3 + 11}{2}\right) = (3,\ 7)\]`],
          final: "(3, 7)",
        },
        {
          l: "d", marks: 2, q: m`Find the length of \(AB\).`, lines: 2, restate: "Length",
          steps: [m`\[AB = \sqrt{(5 - 1)^2 + (11 - 3)^2} = \sqrt{16 + 64} = \sqrt{80}\]`, m`\(\sqrt{80} = 8.944\ldots\)`],
          final: "8.94 (3 s.f.)",
          note: "Exact form 4√5 is also accepted.",
        },
        {
          l: "e", marks: 1, q: m`Line \(L\) is parallel to \(AB\) and passes through \((0,\ -4)\). Write down the equation of \(L\).`, lines: 1, restate: "Parallel line",
          steps: ["Parallel lines have the same gradient, 2. The y-intercept is −4."],
          final: "y = 2x − 4",
        },
      ],
    },
    {
      n: 6,
      section: "A",
      parts: [
        {
          l: "•", marks: 2, q: m`Solve \(x^2 - 5x - 14 = 0\) by factorising.`, lines: 2, restate: "Quadratic equation",
          steps: [m`\[(x - 7)(x + 2) = 0\]`, m`\(x = 7\) or \(x = -2\)`],
          final: "x = 7 or x = −2",
        },
      ],
    },

    // ─── Section B ───────────────────────────────────────────────────────────
    {
      n: 7,
      section: "B",
      ctx: ["A ladder 6.5 m long leans against a vertical wall. The foot of the ladder is on horizontal ground, 2.5 m from the wall."],
      parts: [
        {
          l: "a", marks: 2, q: "Find how far up the wall the ladder reaches.", lines: 2, restate: "Height on wall",
          steps: [m`Pythagoras: \(h^2 = 6.5^2 - 2.5^2 = 42.25 - 6.25 = 36\).`, m`\[h = \sqrt{36} = 6\]`],
          final: "6 m",
        },
        {
          l: "b", marks: 2, q: "Find the angle the ladder makes with the ground.", lines: 2, restate: "Angle with ground",
          steps: [m`\[\cos\theta = \dfrac{2.5}{6.5} \Rightarrow \theta = \cos^{-1}(0.3846\ldots) = 67.38\ldots^\circ\]`],
          final: "67.4°",
          note: "Marks: (M1) correct ratio, (A1) 67.4°.",
        },
        {
          l: "c", marks: 2, ctx: "From a point on level ground 40 m from the base of a tower, the angle of elevation of the top of the tower is 32°.",
          q: "Find the height of the tower.", lines: 2, restate: "Tower height",
          steps: [m`\[\tan 32^\circ = \dfrac{h}{40} \Rightarrow h = 40\tan 32^\circ = 24.99\ldots\]`],
          final: "25.0 m (3 s.f.)",
        },
      ],
    },
    {
      n: 8,
      section: "B",
      ctx: ["A bag contains 5 red, 3 blue and 2 green counters. A counter is taken at random."],
      parts: [
        {
          l: "a", marks: 1, q: "Find the probability that the counter is blue.", lines: 1, restate: "P(blue)",
          steps: ["There are 10 counters and 3 are blue."],
          final: "3/10",
        },
        {
          l: "b", marks: 1, q: "Find the probability that the counter is not red.", lines: 1, restate: "P(not red)",
          steps: [m`\[1 - \dfrac{5}{10} = \dfrac{5}{10} = \dfrac{1}{2}\]`],
          final: "1/2",
        },
        {
          l: "c", marks: 2, q: "A counter is taken, its colour is recorded and it is put back. A second counter is then taken. Find the probability that both counters are green.", lines: 2, restate: "Both green (replaced)",
          steps: [m`\[\dfrac{2}{10} \times \dfrac{2}{10} = \dfrac{4}{100} = \dfrac{1}{25}\]`],
          final: "1/25",
        },
        {
          l: "d", marks: 2, q: "Two counters are taken without replacement. Find the probability that both counters are red.", lines: 2, restate: "Both red (not replaced)",
          steps: [m`\[\dfrac{5}{10} \times \dfrac{4}{9} = \dfrac{20}{90} = \dfrac{2}{9}\]`],
          final: "2/9",
          note: "Marks: (M1) 4/9 for the second counter, (A1) 2/9.",
        },
      ],
    },
    {
      n: 9,
      section: "B",
      ctx: ["The table shows the times taken by 40 students to travel to school."],
      table: {
        head: [m`Time \(t\) (minutes)`, "Frequency"],
        rows: [
          [m`\(0 < t \le 10\)`, "6"],
          [m`\(10 < t \le 20\)`, "14"],
          [m`\(20 < t \le 30\)`, "12"],
          [m`\(30 < t \le 40\)`, "8"],
        ],
      },
      parts: [
        {
          l: "a", marks: 1, q: "Write down the modal class.", lines: 1, restate: "Modal class",
          steps: ["The highest frequency is 14."],
          final: "10 < t ≤ 20",
        },
        {
          l: "b", marks: 3, q: "Calculate an estimate of the mean time.", lines: 4, restate: "Estimated mean",
          steps: [
            "Midpoints: 5, 15, 25, 35.",
            m`\[6(5) + 14(15) + 12(25) + 8(35) = 30 + 210 + 300 + 280 = 820\]`,
            m`\[820 \div 40 = 20.5\]`,
          ],
          final: "20.5 minutes",
          note: "Marks: (M1) midpoints, (M1) sum of f × x divided by 40, (A1) 20.5.",
        },
        {
          l: "c", marks: 2, q: "Find the percentage of students who take more than 20 minutes.", lines: 2, restate: "Percentage > 20 min",
          steps: [m`\(12 + 8 = 20\) students.`, m`\[\dfrac{20}{40} \times 100 = 50\%\]`],
          final: "50%",
        },
      ],
    },
    {
      n: 10,
      section: "B",
      ctx: ["A cylindrical can has radius 4 cm and height 10 cm."],
      parts: [
        {
          l: "a", marks: 2, q: "Calculate the volume of the can.", lines: 2, restate: "Volume",
          steps: [m`\[V = \pi r^2 h = \pi \times 4^2 \times 10 = 160\pi = 502.65\ldots\]`],
          final: "503 cm³ (3 s.f.)",
        },
        {
          l: "b", marks: 2, q: "Calculate the curved surface area of the can.", lines: 2, restate: "Curved surface area",
          steps: [m`\[A = 2\pi r h = 2\pi \times 4 \times 10 = 80\pi = 251.32\ldots\]`],
          final: "251 cm² (3 s.f.)",
        },
        {
          l: "c", marks: 2, q: "The can is full of water. All the water is poured into an empty cuboid tank with a base 20 cm by 10 cm. Find the depth of the water in the tank.", lines: 2, restate: "Depth in tank",
          steps: [m`Base area \(= 20 \times 10 = 200\) cm².`, m`\[d = \dfrac{502.65\ldots}{200} = 2.513\ldots\]`],
          final: "2.51 cm (3 s.f.)",
          note: "Use the unrounded volume from (a).",
        },
      ],
    },
    {
      n: 11,
      section: "B",
      parts: [
        {
          l: "a", marks: 2, ctx: "Mr Vann invests $2000 at 4% per year compound interest.",
          q: "Calculate the value of the investment after 3 years.", lines: 2, restate: "Value after 3 years",
          steps: [m`\[2000 \times 1.04^3 = 2000 \times 1.124864 = 2249.728\]`],
          final: "$2249.73",
          note: "Marks: (M1) 2000 × 1.04³, (A1) 2249.73.",
        },
        {
          l: "b", marks: 1, q: "Find the interest earned in the 3 years.", lines: 1, restate: "Interest",
          steps: [m`\(2249.73 - 2000\)`],
          final: "$249.73",
        },
        {
          l: "c", marks: 2, ctx: "The price of a phone increases from $250 to $290.",
          q: "Calculate the percentage increase.", lines: 2, restate: "Percentage increase",
          steps: [m`\[\dfrac{290 - 250}{250} \times 100 = \dfrac{40}{250} \times 100 = 16\%\]`],
          final: "16%",
        },
      ],
    },
  ],
};

export default paper;
