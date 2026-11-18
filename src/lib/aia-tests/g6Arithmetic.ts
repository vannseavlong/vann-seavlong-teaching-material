import type { AiReviewPaper } from "@/lib/ai-review-papers/types";

const m = String.raw;

// AIA Grade 6 Mathematics: Arithmetic Operations, Explain & Practice sheet (no calculator).

const paper: AiReviewPaper = {
  slug: "g6-arithmetic-operations",
  session: 1,
  topic: "Arithmetic Operations",
  title: "Arithmetic Operations",
  subtitle: "Explain & Practice Sheet",
  minutes: 60,
  lessonAnchor: "",
  frame: {
    heroCourse: "AIA Grade 6 Mathematics",
    sheetCourse: "AIA Mathematics",
    sheetLevel: "Grade 6: Arithmetic Operations (no calculator)",
    note: "No calculator. Read the explanation, try each question, then tap Show Answer to check the worked solution.",
    instructions: [
      "Read the explanation and worked examples first.",
      "Answer all questions. Calculators are not allowed.",
      "Show your working: marks are given for correct method.",
    ],
    sectionNotes: {
      A: "Skills practice. Write each answer in the space provided.",
      B: "Word problems. Write the calculation you use, then the answer with units.",
    },
    backHref: "/courses/aia-g6-math",
    backLabel: "← Grade 6 Mathematics",
  },

  // ─── Explanation ────────────────────────────────────────────────────────────
  explain: [
    {
      id: "four-operations",
      title: "The four operations",
      points: [
        "Each operation has a name for its answer. Use these words in word problems to choose the operation.",
        m`Addition and subtraction are inverse operations: if \(a + b = c\) then \(c - b = a\). Multiplication and division are also inverses: if \(a \times b = c\) then \(c \div b = a\).`,
        "Use the inverse to check an answer: after 85 − 38 = 47, check that 47 + 38 = 85.",
      ],
      table: {
        head: ["Operation", "Answer is called", "Key words in problems", "Example"],
        rows: [
          ["Addition ( + )", "sum, total", "altogether, more than, increase", "35 + 17 = 52"],
          ["Subtraction ( − )", "difference", "how many more, left, decrease, change", "52 − 17 = 35"],
          ["Multiplication ( × )", "product", "each, groups of, times, per", "6 × 8 = 48"],
          ["Division ( ÷ )", "quotient (and remainder)", "share equally, how many in each, split", "48 ÷ 6 = 8"],
        ],
      },
    },
    {
      id: "properties",
      title: "Rules that make calculating easier",
      points: [
        m`Commutative: order does not change the answer for \(+\) and \(\times\). \(7 + 5 = 5 + 7\) and \(4 \times 9 = 9 \times 4\). It does not work for \(-\) or \(\div\): \(10 - 4 \ne 4 - 10\).`,
        m`Associative: grouping does not change the answer for \(+\) and \(\times\). \((25 \times 4) \times 7 = 25 \times (4 \times 7)\).`,
        m`Distributive: multiply each number inside the brackets. \(a \times (b + c) = a \times b + a \times c\).`,
        m`Identity: adding 0 or multiplying by 1 leaves a number unchanged. Multiplying by 0 always gives 0.`,
      ],
      examples: [
        {
          q: m`Calculate \(6 \times 99\) without a written method.`,
          steps: [m`Write 99 as \(100 - 1\): \(6 \times (100 - 1) = 6 \times 100 - 6 \times 1\)`, m`\(= 600 - 6\)`],
          answer: "594",
        },
        {
          q: m`Calculate \(25 \times 13 \times 4\).`,
          steps: [m`Reorder so 25 and 4 are together: \((25 \times 4) \times 13 = 100 \times 13\)`],
          answer: "1300",
        },
      ],
    },
    {
      id: "order-of-operations",
      title: "Order of operations (BIDMAS)",
      points: [
        "When a calculation has more than one operation, work in this order:",
        "B: Brackets first.",
        m`I: Indices (powers and roots), for example \(3^2 = 9\).`,
        m`D and M: Division and Multiplication, working from left to right.`,
        m`A and S: Addition and Subtraction, working from left to right.`,
        m`Division is not always done before multiplication: they have equal rank, so go left to right. \(12 \div 3 \times 2 = 4 \times 2 = 8\), not \(12 \div 6 = 2\).`,
      ],
      examples: [
        {
          q: m`Calculate \(5 + 3 \times 4\).`,
          steps: [m`Multiply first: \(3 \times 4 = 12\)`, m`Then add: \(5 + 12\)`],
          answer: "17 (not 32)",
        },
        {
          q: m`Calculate \(40 - (6 + 2)^2 \div 4\).`,
          steps: [m`Brackets: \(6 + 2 = 8\)`, m`Index: \(8^2 = 64\)`, m`Divide: \(64 \div 4 = 16\)`, m`Subtract: \(40 - 16\)`],
          answer: "24",
        },
      ],
    },
    {
      id: "written-methods",
      title: "Written methods",
      points: [
        "Column addition and subtraction: line up the digits by place value (ones under ones). Carry when a column adds to 10 or more; exchange (borrow) from the next column when the top digit is smaller.",
        m`Long multiplication: multiply by the ones digit, then by the tens digit (put a 0 in the ones column first), then add the rows.`,
        m`Short division: divide each digit from the left, carrying the remainder to the next digit. Write any final remainder as "r", for example \(47 \div 5 = 9\) r 2.`,
      ],
      examples: [
        {
          q: m`Calculate \(5\,004 - 2\,357\).`,
          steps: [
            "Ones: 4 − 7 is not possible. The tens and hundreds are 0, so exchange from the thousands: 5 004 becomes 4 thousands, 9 hundreds, 9 tens, 14 ones.",
            "14 − 7 = 7, 9 − 5 = 4, 9 − 3 = 6, 4 − 2 = 2.",
            "Check: 2 647 + 2 357 = 5 004.",
          ],
          answer: "2 647",
        },
        {
          q: m`Calculate \(234 \times 16\).`,
          steps: [m`\(234 \times 6 = 1\,404\)`, m`\(234 \times 10 = 2\,340\)`, m`\(1\,404 + 2\,340 = 3\,744\)`],
          answer: "3 744",
        },
        {
          q: m`Calculate \(1\,752 \div 8\).`,
          steps: [
            "17 ÷ 8 = 2 r 1, carry the 1 to make 15.",
            "15 ÷ 8 = 1 r 7, carry the 7 to make 72.",
            "72 ÷ 8 = 9.",
          ],
          answer: "219",
        },
      ],
    },
    {
      id: "decimals",
      title: "Operations with decimals",
      points: [
        "Adding and subtracting: line up the decimal points. Fill empty places with 0, for example 20 − 7.36 becomes 20.00 − 7.36.",
        m`Multiplying: ignore the decimal points, multiply, then give the answer as many decimal places as the two numbers have in total. \(0.3 \times 0.2\): \(3 \times 2 = 6\), 2 decimal places, so \(0.06\).`,
        m`Dividing by a decimal: multiply both numbers by 10 (or 100) until you divide by a whole number. \(4.8 \div 0.6 = 48 \div 6 = 8\).`,
      ],
      examples: [
        {
          q: m`Calculate \(3.4 \times 2.5\).`,
          steps: [m`\(34 \times 25 = 850\)`, "There are 2 decimal places in total, so 8.50."],
          answer: "8.5",
        },
      ],
    },
    {
      id: "negatives",
      title: "Negative numbers",
      points: [
        "Adding a positive number moves right on the number line; subtracting moves left.",
        m`Subtracting a negative is the same as adding: \(5 - (-3) = 5 + 3 = 8\).`,
        m`Multiplying or dividing: same signs give a positive answer, different signs give a negative answer. \((-4) \times (-3) = 12\), \((-12) \div 3 = -4\).`,
      ],
      examples: [
        {
          q: m`Calculate \(-9 + 4 - (-2)\).`,
          steps: [m`\(-9 + 4 = -5\)`, m`\(-5 - (-2) = -5 + 2\)`],
          answer: "−3",
        },
      ],
    },
    {
      id: "estimation",
      title: "Estimating to check",
      points: [
        "Round each number to 1 significant figure, then calculate. If your exact answer is far from the estimate, check your working.",
        m`\(397 \times 21 \approx 400 \times 20 = 8\,000\), so an answer of 83 370 must be wrong (the exact answer is 8 337).`,
      ],
    },
  ],

  // ─── Practice ───────────────────────────────────────────────────────────────
  questions: [
    {
      n: 1,
      section: "A",
      instruction: "Mental calculation. Write the answer only.",
      parts: [
        { l: "a", marks: 1, q: "47 + 38", lines: 1, restate: "47 + 38", steps: ["47 + 40 = 87, then subtract 2."], final: "85" },
        { l: "b", marks: 1, q: "93 − 56", lines: 1, restate: "93 − 56", steps: ["93 − 60 = 33, then add 4."], final: "37" },
        { l: "c", marks: 1, q: m`\(12 \times 15\)`, lines: 1, restate: "12 × 15", steps: [m`\(12 \times 10 + 12 \times 5 = 120 + 60\)`], final: "180" },
        { l: "d", marks: 1, q: m`\(144 \div 12\)`, lines: 1, restate: "144 ÷ 12", steps: [m`\(12 \times 12 = 144\)`], final: "12" },
        { l: "e", marks: 1, q: m`\(25 \times 7 \times 4\)`, lines: 1, restate: "25 × 7 × 4", steps: [m`\((25 \times 4) \times 7 = 100 \times 7\)`], final: "700" },
      ],
    },
    {
      n: 2,
      section: "A",
      parts: [
        {
          l: "a", marks: 1, q: m`Fill in the missing number: \(8 \times (5 + 3) = 8 \times 5 + 8 \times \square\)`, lines: 1, restate: "Missing number",
          steps: ["Distributive rule: the 8 multiplies both 5 and 3."], final: "3",
        },
        {
          l: "b", marks: 2, q: m`Use the distributive rule to calculate \(7 \times 98\). Show your method.`, lines: 2, restate: "7 × 98",
          steps: [m`\(7 \times (100 - 2) = 700 - 14\)`], final: "686",
          note: "Marks: (M1) 7 × 100 − 7 × 2, (A1) 686.",
        },
        {
          l: "c", marks: 1, q: m`Is \(20 - 8\) equal to \(8 - 20\)? Give a reason.`, lines: 1, restate: "Commutative?",
          steps: [m`\(20 - 8 = 12\) but \(8 - 20 = -12\). Subtraction is not commutative.`], final: "No: 12 ≠ −12",
        },
        {
          l: "d", marks: 1, q: m`Calculate \(4 \times 37 \times 25\) by first choosing a good order.`, lines: 1, restate: "4 × 37 × 25",
          steps: [m`\((4 \times 25) \times 37 = 100 \times 37\)`], final: "3700",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "Use the order of operations.",
      parts: [
        { l: "a", marks: 1, q: m`\(6 + 4 \times 5\)`, lines: 1, restate: "6 + 4 × 5", steps: [m`\(6 + 20\)`], final: "26" },
        { l: "b", marks: 1, q: m`\((6 + 4) \times 5\)`, lines: 1, restate: "(6 + 4) × 5", steps: [m`\(10 \times 5\)`], final: "50" },
        { l: "c", marks: 2, q: m`\(20 - 12 \div 4 + 1\)`, lines: 2, restate: "20 − 12 ÷ 4 + 1", steps: [m`Divide first: \(12 \div 4 = 3\)`, m`Left to right: \(20 - 3 + 1 = 18\)`], final: "18", note: "Common error: 20 − 3 + 1 = 16 (adding before subtracting)." },
        { l: "d", marks: 2, q: m`\(3 \times 2^3 - 10\)`, lines: 2, restate: "3 × 2³ − 10", steps: [m`Index: \(2^3 = 8\)`, m`\(3 \times 8 - 10 = 24 - 10\)`], final: "14" },
        { l: "e", marks: 2, q: m`\(48 \div (2 + 6) \times 3\)`, lines: 2, restate: "48 ÷ (2 + 6) × 3", steps: [m`Brackets: \(48 \div 8 \times 3\)`, m`Left to right: \(6 \times 3\)`], final: "18" },
        {
          l: "f", marks: 1, q: m`Insert one pair of brackets to make this correct: \(5 + 3 \times 4 - 2 = 30\)`, lines: 1, restate: "Insert brackets",
          steps: [m`\((5 + 3) \times 4 - 2 = 8 \times 4 - 2 = 32 - 2 = 30\)`], final: "(5 + 3) × 4 − 2 = 30",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      instruction: "Use a written method. Show your working.",
      parts: [
        { l: "a", marks: 1, q: m`\(4\,586 + 2\,739\)`, lines: 2, restate: "4 586 + 2 739", steps: ["Column addition with carrying: 6 + 9 = 15 (carry 1), 8 + 3 + 1 = 12 (carry 1), 5 + 7 + 1 = 13 (carry 1), 4 + 2 + 1 = 7."], final: "7 325" },
        { l: "b", marks: 2, q: m`\(7\,002 - 3\,468\)`, lines: 2, restate: "7 002 − 3 468", steps: ["Exchange: 7 002 becomes 6 thousands, 9 hundreds, 9 tens, 12 ones.", "12 − 8 = 4, 9 − 6 = 3, 9 − 4 = 5, 6 − 3 = 3. Check: 3 534 + 3 468 = 7 002."], final: "3 534" },
        { l: "c", marks: 2, q: m`\(346 \times 27\)`, lines: 3, restate: "346 × 27", steps: [m`\(346 \times 7 = 2\,422\)`, m`\(346 \times 20 = 6\,920\)`, m`\(2\,422 + 6\,920 = 9\,342\)`], final: "9 342", note: "Marks: (M1) both partial products, (A1) 9 342." },
        { l: "d", marks: 2, q: m`\(2\,856 \div 7\)`, lines: 2, restate: "2 856 ÷ 7", steps: ["28 ÷ 7 = 4, 5 ÷ 7 = 0 r 5, 56 ÷ 7 = 8."], final: "408", note: "Common error: 48 (missing the 0 in the tens place)." },
        { l: "e", marks: 1, q: m`\(515 \div 6\). Give your answer with a remainder.`, lines: 2, restate: "515 ÷ 6", steps: ["51 ÷ 6 = 8 r 3, carry 3 to make 35. 35 ÷ 6 = 5 r 5.", m`Check: \(6 \times 85 + 5 = 515\)`], final: "85 r 5" },
      ],
    },
    {
      n: 5,
      section: "A",
      parts: [
        { l: "a", marks: 1, q: m`\(12.6 + 3.85\)`, lines: 1, restate: "12.6 + 3.85", steps: ["12.60 + 3.85"], final: "16.45" },
        { l: "b", marks: 1, q: m`\(20 - 7.36\)`, lines: 1, restate: "20 − 7.36", steps: ["20.00 − 7.36"], final: "12.64" },
        { l: "c", marks: 1, q: m`\(4.5 \times 0.3\)`, lines: 1, restate: "4.5 × 0.3", steps: [m`\(45 \times 3 = 135\); 2 decimal places.`], final: "1.35" },
        { l: "d", marks: 1, q: m`\(2.4 \times 1.5\)`, lines: 1, restate: "2.4 × 1.5", steps: [m`\(24 \times 15 = 360\); 2 decimal places gives 3.60.`], final: "3.6" },
        { l: "e", marks: 1, q: m`\(9.6 \div 0.4\)`, lines: 1, restate: "9.6 ÷ 0.4", steps: [m`Multiply both by 10: \(96 \div 4\)`], final: "24" },
        { l: "f", marks: 1, q: m`\(7.5 \div 3\)`, lines: 1, restate: "7.5 ÷ 3", steps: ["Keep the decimal point in line: 7 ÷ 3 = 2 r 1, then 15 ÷ 3 = 5."], final: "2.5" },
      ],
    },
    {
      n: 6,
      section: "A",
      parts: [
        { l: "a", marks: 1, q: m`\(-8 + 15\)`, lines: 1, restate: "−8 + 15", steps: ["Start at −8, move 15 right."], final: "7" },
        { l: "b", marks: 1, q: m`\(6 - 11\)`, lines: 1, restate: "6 − 11", steps: ["Start at 6, move 11 left."], final: "−5" },
        { l: "c", marks: 1, q: m`\(-4 - 9\)`, lines: 1, restate: "−4 − 9", steps: ["Start at −4, move 9 left."], final: "−13" },
        { l: "d", marks: 1, q: m`\(5 - (-3)\)`, lines: 1, restate: "5 − (−3)", steps: [m`\(5 + 3\)`], final: "8" },
        { l: "e", marks: 1, q: m`\(-7 \times 3\)`, lines: 1, restate: "−7 × 3", steps: ["Different signs: negative."], final: "−21" },
        { l: "f", marks: 1, q: m`\((-36) \div (-4)\)`, lines: 1, restate: "(−36) ÷ (−4)", steps: ["Same signs: positive."], final: "9" },
      ],
    },
    {
      n: 7,
      section: "A",
      instruction: "Round each number to 1 significant figure to estimate.",
      parts: [
        { l: "a", marks: 1, q: m`Estimate \(48.7 \times 21.3\).`, lines: 1, restate: "Estimate", steps: [m`\(50 \times 20\)`], final: "1000" },
        { l: "b", marks: 1, q: m`Estimate \(612 \div 29.8\).`, lines: 1, restate: "Estimate", steps: [m`\(600 \div 30\)`], final: "20" },
      ],
    },

    // ─── Section B: word problems ─────────────────────────────────────────────
    {
      n: 8,
      section: "B",
      ctx: ["275 students are going on a school trip. The school books 6 buses. Each bus has 48 seats."],
      parts: [
        { l: "a", marks: 1, q: "How many seats are there altogether?", lines: 1, restate: "Total seats", steps: [m`\(6 \times 48 = 288\)`], final: "288 seats" },
        { l: "b", marks: 1, q: "How many seats will be empty?", lines: 1, restate: "Empty seats", steps: [m`\(288 - 275 = 13\)`], final: "13 seats" },
        {
          l: "c", marks: 2, q: "Each student pays $12.50. Find the total amount paid by all the students.", lines: 2, restate: "Total paid",
          steps: [m`\(275 \times 12 = 3\,300\) and \(275 \times 0.5 = 137.50\)`, m`\(3\,300 + 137.50 = 3\,437.50\)`], final: "$3437.50",
        },
      ],
    },
    {
      n: 9,
      section: "B",
      ctx: ["Sophea buys 3 notebooks at $2.45 each and one pen at $1.80."],
      parts: [
        { l: "a", marks: 2, q: "Find the total cost.", lines: 2, restate: "Total cost", steps: [m`\(3 \times 2.45 = 7.35\)`, m`\(7.35 + 1.80 = 9.15\)`], final: "$9.15" },
        { l: "b", marks: 1, q: "She pays with a $20 note. How much change does she get?", lines: 1, restate: "Change", steps: [m`\(20.00 - 9.15\)`], final: "$10.85" },
      ],
    },
    {
      n: 10,
      section: "B",
      ctx: ["At midnight the temperature was −6 °C. At noon it was 9 °C."],
      parts: [
        { l: "a", marks: 1, q: "By how many degrees did the temperature rise?", lines: 1, restate: "Rise", steps: [m`\(9 - (-6) = 9 + 6\)`], final: "15 °C" },
        { l: "b", marks: 1, q: "By the evening it had fallen 11 °C from the noon temperature. Find the evening temperature.", lines: 1, restate: "Evening", steps: [m`\(9 - 11\)`], final: "−2 °C" },
      ],
    },
    {
      n: 11,
      section: "B",
      ctx: ["A farmer has 1 960 kg of rice. He packs it into bags that each hold 25 kg."],
      parts: [
        {
          l: "a", marks: 2, q: "How many bags can he fill completely, and how much rice is left over?", lines: 2, restate: "Full bags",
          steps: [m`\(1\,960 \div 25 = 78\) r 10, because \(25 \times 78 = 1\,950\).`], final: "78 bags, 10 kg left",
        },
        {
          l: "b", marks: 1, q: "How many bags does he need to pack all the rice?", lines: 1, restate: "Bags needed",
          steps: ["The 10 kg left over needs one more bag, so round up."], final: "79 bags",
        },
      ],
    },
    {
      n: 12,
      section: "B",
      ctx: ["A cinema has 18 rows of 24 seats. On Saturday there are two shows. 397 tickets are sold for the afternoon show and 418 for the evening show."],
      parts: [
        {
          l: "a", marks: 2, q: "Write a single calculation, using brackets, for the number of empty seats over the two shows.", lines: 2, restate: "Single calculation",
          steps: ["Seats over two shows minus tickets sold."], final: "2 × 18 × 24 − (397 + 418)",
          note: "Equivalent correct forms are accepted, for example 2 × (18 × 24) − (397 + 418).",
        },
        {
          l: "b", marks: 2, q: "Work out the number of empty seats.", lines: 2, restate: "Empty seats",
          steps: [m`\(18 \times 24 = 432\), so \(2 \times 432 = 864\) seats.`, m`\(397 + 418 = 815\), and \(864 - 815 = 49\).`], final: "49 seats",
        },
      ],
    },
    {
      n: 13,
      section: "B",
      instruction: "Use inverse operations to find the missing number.",
      parts: [
        {
          l: "a", marks: 2, q: m`\((\square + 7) \times 3 = 45\)`, lines: 2, restate: "Missing number",
          steps: [m`Undo \(\times 3\): \(45 \div 3 = 15\)`, m`Undo \(+ 7\): \(15 - 7 = 8\)`], final: "8",
        },
        {
          l: "b", marks: 2, q: m`\(60 \div \square - 4 = 8\)`, lines: 2, restate: "Missing number",
          steps: [m`Undo \(- 4\): \(60 \div \square = 12\)`, m`\(60 \div 12 = 5\)`], final: "5",
        },
      ],
    },
  ],
};

export default paper;
