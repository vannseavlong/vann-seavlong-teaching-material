import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 10: Limits of Accuracy, Set 1 (Limits-of-Accuracy-PQ.pdf, questions 1 to 14).
// Reading bounds, then adding, subtracting, dividing and averaging bounded values. 37 marks.

const paper: AiReviewPaper = {
  slug: "bounds-2",
  session: 10,
  topic: "Upper & Lower Bounds",
  title: "Limits of Accuracy, Set 1",
  subtitle: "Summative Revision, Session 10",
  minutes: 40,
  lessonAnchor: "bounds",
  source: `Questions adapted from "Limits of Accuracy: Exam Style Questions" by Corbettmaths (corbettmaths.com), © Corbettmaths. Wording, units and worked answers rewritten for this course.`,
  questions: [
    {
      n: 1,
      ctx: ["A bag of apples has a mass of 7 kg, correct to the nearest kilogram."],
      parts: [
        {
          l: "•", marks: 1, q: "Write down the least possible mass of the bag.", lines: 2, restate: "Least mass",
          steps: [m`The error is \(\pm 0.5\) kg, so \(6.5 \le \text{mass} < 7.5\).`],
          final: "6.5 kg",
          note: "Marks: (A1) 6.5.",
        },
      ],
    },
    {
      n: 2,
      ctx: ["The length of a table is 105 cm, correct to the nearest centimetre."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the smallest possible length of the table.", lines: 1, restate: "Smallest length",
          steps: [m`\[105 - 0.5 = 104.5\]`],
          final: "104.5 cm",
          note: "Marks: (A1) 104.5.",
        },
        {
          l: "b", marks: 1, q: "Write down the upper bound of the length of the table.", lines: 1, restate: "Upper bound",
          steps: [m`\[105 + 0.5 = 105.5\]`],
          final: "105.5 cm",
          note: "Marks: (A1) 105.5. The length is below 105.5, but 105.5 is the upper bound.",
        },
      ],
    },
    {
      n: 3,
      ctx: ["The speed of a car is 50 km/h, correct to the nearest 10 km/h."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the lower bound of the speed.", lines: 1, restate: "Lower bound",
          steps: [m`The error is \(\pm 5\) km/h: \(50 - 5 = 45\).`],
          final: "45 km/h",
          note: "Marks: (A1) 45. Half of 10 is 5, not 0.5.",
        },
        {
          l: "b", marks: 1, q: "Write down the upper bound of the speed.", lines: 1, restate: "Upper bound",
          steps: [m`\[50 + 5 = 55\]`],
          final: "55 km/h",
          note: "Marks: (A1) 55.",
        },
      ],
    },
    {
      n: 4,
      ctx: ["The distance from the Sun to the Earth is 150 000 000 km, correct to 2 significant figures."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the lower bound of the distance.", lines: 1, restate: "Lower bound",
          steps: [m`The second significant figure is the millions place, so the error is \(\pm 5\,000\,000\) km.`, m`\[150\,000\,000 - 5\,000\,000 = 145\,000\,000\]`],
          final: "145 000 000 km",
          note: "Marks: (A1) 145 000 000.",
        },
        {
          l: "b", marks: 1, q: "Write down the upper bound of the distance.", lines: 1, restate: "Upper bound",
          steps: [m`\[150\,000\,000 + 5\,000\,000 = 155\,000\,000\]`],
          final: "155 000 000 km",
          note: "Marks: (A1) 155 000 000.",
        },
      ],
    },
    {
      n: 5,
      ctx: [
        "A clementine has an average mass of 74 g, correct to the nearest gram.",
        "A net holds 12 clementines. The empty net has a mass of 20 g, correct to the nearest gram.",
      ],
      parts: [
        {
          l: "•", marks: 3, q: "Find the maximum possible total mass of the net and its 12 clementines.", lines: 4, restate: "Maximum total mass",
          steps: [
            m`Upper bound of one clementine \(= 74.5\) g. Upper bound of the net \(= 20.5\) g.`,
            m`\[12 \times 74.5 + 20.5 = 894 + 20.5\]`,
            m`\[= 914.5\]`,
          ],
          final: "914.5 g",
          note: "Marks: (A1) 74.5 and 20.5, (M1) 12 × 74.5 + 20.5, (A1) 914.5.",
        },
      ],
    },
    {
      n: 6,
      ctx: ["Six sausages each measure 8 cm, correct to the nearest centimetre."],
      parts: [
        {
          l: "•", marks: 2, q: "Find the least and the greatest possible total length of the 6 sausages.", lines: 3, restate: "Total length range",
          steps: [
            m`\[\text{Least: } 6 \times 7.5 = 45\]`,
            m`\[\text{Greatest: } 6 \times 8.5 = 51\]`,
          ],
          final: "Least 45 cm, greatest 51 cm",
          note: "Marks: (A1) 45, (A1) 51.",
        },
      ],
    },
    {
      n: 7,
      ctx: [
        "Bethany thinks of a whole number. When she rounds it to the nearest 10, the answer is 30.",
        "Sabrina thinks of a whole number. When she rounds it to the nearest 100, the answer is 200.",
      ],
      parts: [
        {
          l: "•", marks: 3, q: "Find the maximum possible total of the two original numbers.", lines: 4, restate: "Maximum total",
          steps: [
            m`Bethany: \(25 \le n < 35\), so the largest whole number is 34.`,
            m`Sabrina: \(150 \le n < 250\), so the largest whole number is 249.`,
            m`\[34 + 249 = 283\]`,
          ],
          final: "283",
          note: "Marks: (A1) 34, (A1) 249, (A1) 283. The numbers are whole, so 35 and 250 cannot be used.",
        },
      ],
    },
    {
      n: 8,
      instruction: "In this question, give the answer in USD.",
      ctx: [
        "Curtis has 13 USD, correct to the nearest dollar.",
        "Dylan has 5.20 USD, correct to the nearest 10 cents.",
      ],
      parts: [
        {
          l: "•", marks: 3, q: "Find the minimum possible difference between the amounts of money they have.", lines: 4, restate: "Minimum difference",
          steps: [
            m`Curtis: \(12.50 \le c < 13.50\). Dylan: \(5.15 \le d < 5.25\).`,
            m`The difference is smallest when Curtis has the least and Dylan has the most.`,
            m`\[12.50 - 5.25 = 7.25\]`,
          ],
          final: "7.25 USD",
          note: "Marks: (A1) 12.50, (A1) 5.25, (A1) 7.25. Common error: 12.50 - 5.15.",
        },
      ],
    },
    {
      n: 9,
      ctx: [
        "Saul makes 20 litres of fruit punch, correct to the nearest litre.",
        "He pours it into cups that each hold 200 ml, correct to the nearest 10 ml.",
      ],
      parts: [
        {
          l: "•", marks: 3, q: "Find the largest number of cups Saul could fill.", lines: 5, restate: "Most cups",
          steps: [
            m`Most punch: \(20.5\) litres \(= 20\,500\) ml. Smallest cup: \(195\) ml.`,
            m`\[20\,500 \div 195 = 105.1\ldots\]`,
            "Only whole cups can be filled.",
          ],
          final: "105 cups",
          note: "Marks: (A1) 20 500 and 195, (M1) division, (A1) 105 (round down).",
        },
      ],
    },
    {
      n: 10,
      ctx: [
        "A biology textbook has a mass of 1.3 kg, correct to the nearest 100 g.",
        "A shelf can safely hold 80 kg of books.",
      ],
      parts: [
        {
          l: "•", marks: 3, q: "Find the number of textbooks the shelf can be certain to hold safely. Show your working.", lines: 5, restate: "Safe number of books",
          steps: [
            m`The error is \(\pm 50\) g, so the heaviest book is \(1.35\) kg.`,
            m`\[80 \div 1.35 = 59.2\ldots\]`,
          ],
          final: "59 books",
          note: "Marks: (A1) 1.35, (M1) 80 ÷ 1.35, (A1) 59 (round down). Using the upper bound makes the answer safe for every book.",
        },
      ],
    },
    {
      n: 11,
      ctx: ["A rectangular rugby pitch has a width of 74 m, correct to the nearest metre."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the upper bound of the width.", lines: 1, restate: "Width upper bound",
          steps: [m`\[74 + 0.5 = 74.5\]`],
          final: "74.5 m",
          note: "Marks: (A1) 74.5.",
        },
        {
          l: "b", marks: 3, q: "The length of the pitch is 115 m, correct to the nearest 5 m. Find the upper bound of the perimeter.", lines: 4, restate: "Perimeter upper bound",
          steps: [
            m`Upper bound of the length \(= 115 + 2.5 = 117.5\).`,
            m`\[P = 2(74.5 + 117.5) = 2(192)\]`,
            m`\[= 384\]`,
          ],
          final: "384 m",
          note: "Marks: (A1) 117.5, (M1) 2(w + l) with both upper bounds, (A1) 384.",
        },
      ],
    },
    {
      n: 12,
      ctx: [
        "Anthony measures the length of a rectangle as 18 cm, correct to the nearest centimetre.",
        "He measures the width as 10 cm, correct to the nearest 10 centimetres.",
      ],
      parts: [
        {
          l: "•", marks: 2, q: "Calculate the lower bound of the area of the rectangle.", lines: 3, restate: "Area lower bound",
          steps: [
            m`Length lower bound \(= 17.5\). Width lower bound \(= 10 - 5 = 5\).`,
            m`\[17.5 \times 5 = 87.5\]`,
          ],
          final: "87.5 cm²",
          note: "Marks: (M1) 17.5 × 5, (A1) 87.5. Common error: width lower bound 9.5.",
        },
      ],
    },
    {
      n: 13,
      ctx: ["A circular mirror has a diameter of 60 cm, correct to the nearest centimetre."],
      parts: [
        {
          l: "•", marks: 3, q: "Find the greatest possible area of the mirror. Give your answer correct to one decimal place.", lines: 4, restate: "Greatest area",
          steps: [
            m`Upper bound of the diameter \(= 60.5\), so \(r = 30.25\).`,
            m`\[A = \pi r^2 = \pi (30.25)^2 = 2874.75\ldots\]`,
          ],
          final: "2874.8 cm²",
          note: "Marks: (A1) r = 30.25, (M1) π r², (A1) 2874.8. Halve the diameter after taking the bound.",
        },
      ],
    },
    {
      n: 14,
      ctx: ["The heights of 6 plants are given below, each correct to one decimal place."],
      table: {
        head: ["Plant", "1", "2", "3", "4", "5", "6"],
        rows: [["Height (cm)", "4.5", "7.2", "8.1", "9.6", "9.1", "3.1"]],
      },
      parts: [
        {
          l: "a", marks: 2, q: "Find the smallest possible mean height. Give your answer correct to two decimal places.", lines: 4, restate: "Smallest mean",
          steps: [
            m`Each height has an error of \(\pm 0.05\) cm. The mean of the listed heights is \(\dfrac{41.6}{6} = 6.9333\ldots\)`,
            m`\[6.9333\ldots - 0.05 = 6.8833\ldots\]`,
          ],
          final: "6.88 cm",
          note: "Marks: (M1) lower bound of every height used (or mean − 0.05), (A1) 6.88.",
        },
        {
          l: "b", marks: 2, q: "Find the greatest possible range.", lines: 3, restate: "Greatest range",
          steps: [
            m`Largest value, upper bound: \(9.6 + 0.05 = 9.65\). Smallest value, lower bound: \(3.1 - 0.05 = 3.05\).`,
            m`\[9.65 - 3.05 = 6.6\]`,
          ],
          final: "6.6 cm",
          note: "Marks: (M1) 9.65 and 3.05, (A1) 6.6.",
        },
      ],
    },
  ],
};

export default paper;
