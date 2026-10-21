import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 13: Sequences, Series and Financial Mathematics, chained, Set 2 (62 marks).
// Second mirror of the Grade 11 practice set: same six question types and mark split as Set 1,
// new contexts and numbers, and each part feeds the next part.

const paper: AiReviewPaper = {
  slug: "sequences-finance-chain-2",
  session: 13,
  topic: "Sequences, Series and Financial Mathematics",
  title: "Sequences, Series and Financial Mathematics, Chained, Set 2",
  subtitle: "Summative Revision, Session 13",
  minutes: 70,
  lessonAnchor: "arithmetic",
  source: "Structure and mark split mirror the Grade 11 practice set on Sequences, Series and Financial Mathematics (IB-style questions). Every context and number is new, and in each question a later part uses the answer to an earlier part.",
  questions: [
    // ───────────────────────── Q1 ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: [
        "Vanna pays 250 USD into a bank account at the end of each month. The annual interest paid on money in the account is 2.8%, compounded monthly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Find the value of her investment after a period of 3 years.", lines: 4, restate: "Value after 3 years",
          steps: [
            m`GDC: \(N = 36,\ I\% = 2.8,\ PV = 0,\ PMT = -250,\ P/Y = C/Y = 12\), solve for FV.`,
            m`\[FV = \dfrac{250\left(\left(1 + \frac{0.028}{12}\right)^{36} - 1\right)}{\frac{0.028}{12}} = 9377.40\ldots\]`,
          ],
          final: "9377.41 USD",
          note: "Marks: (M1) N = 36 with P/Y = C/Y = 12, (A1) PMT = -250 and PV = 0, (A1) 9377.41.",
        },
        {
          l: "b", marks: 2, q: "The average rate of inflation per year over the 3 years was 1.8%. Find an approximation for the real interest rate for the money invested in the account.", lines: 3, restate: "Real interest rate",
          steps: [m`\[2.8 - 1.8 = 1.0\%\]`],
          final: "1.0%",
          note: "Marks: (M1) subtracting the inflation rate from the interest rate, (A1) 1.0.",
        },
        {
          l: "c", marks: 2, q: "Hence find the real value of Vanna's investment at the end of 3 years.", lines: 3, restate: "Real value after 3 years",
          steps: [
            m`Use the rate from (b): \(N = 36,\ I\% = 1.0,\ PV = 0,\ PMT = -250,\ P/Y = C/Y = 12\), solve for FV.`,
            m`\[FV = 9132.49\ldots\]`,
          ],
          final: "9132.50 USD",
          note: "Marks: (M1) repeating the TVM calculation with I% = 1.0 from (b), (A1) 9132.50. Follow through from a wrong (b). The real value (9132.50) is less than the value in (a) (9377.41).",
        },
      ],
    },

    // ───────────────────────── Q2 ─────────────────────────
    {
      n: 2,
      section: "A",
      ctx: [
        "A ball is dropped from a height of 3 metres and bounces on the ground. The maximum height reached by the ball after each bounce is 75% of the previous maximum height.",
        m`The diagram shows the first three bounces. The maximum heights after bounces 1, 2 and 3 are \(h_1\), \(h_2\) and \(h_3\).`,
      ],
      figure: { src: "/review/set2-q2-bouncing-ball.svg", alt: "A ball dropped from 3 m, then three bounce arcs of heights h1, h2 and h3, each 75% of the one before", width: 580, height: 300 },
      parts: [
        {
          l: "a", marks: 2, q: "Show that the maximum height reached by the ball after it has bounced for the fourth time is 95 cm, to the nearest cm.", lines: 3, restate: "Height after bounce 4",
          steps: [
            m`The heights form a geometric sequence in cm: \(u_0 = 300\), \(r = 0.75\).`,
            m`\[u_4 = 300(0.75)^4 = 94.92\ldots \approx 95\ \text{cm}\]`,
          ],
          final: "300(0.75)⁴ = 94.92 ≈ 95 cm",
          note: "Marks: (M1) 300(0.75)^4 with the height in cm, (A1) 94.92 shown and rounded to 95. Using 0.75^5 is the common slip: the drop is bounce 0.",
        },
        {
          l: "b", marks: 2, q: "Using the same model, find the number of bounces for which the maximum height reached is greater than 20 cm.", lines: 4, restate: "Bounces above 20 cm",
          steps: [
            m`\[300(0.75)^n > 20\]`,
            m`GDC: \(n = 9\) gives 22.53 cm (above 20), \(n = 10\) gives 16.89 cm (below 20).`,
          ],
          final: "9 bounces",
          note: "Marks: (M1) inequality or table using the model from (a), (A1) 9.",
        },
        {
          l: "c", marks: 3, q: "Find the total vertical distance travelled by the ball from the point at which it is dropped until it returns to the ground after its fourth bounce.", lines: 5, restate: "Total distance to bounce 4",
          steps: [
            m`Heights in metres: \(h_1 = 2.25\), \(h_2 = 1.6875\), \(h_3 = 1.265625\), \(h_4 = 0.94921875\).`,
            m`Each bounce is up and down, so the distance is twice its height: \[3 + 2(2.25 + 1.6875 + 1.265625 + 0.949219) = 3 + 2(6.152344)\]`,
            m`\[= 15.3047 \approx 15.30\ \text{m}\]`,
          ],
          final: "15.30 m",
          note: "Marks: (M1) 3 plus twice the heights, (A1) h₄ = 0.949 from (a) included, (A1) 15.30. Doubling the drop of 3 is the common error.",
        },
      ],
    },

    // ───────────────────────── Q3 ─────────────────────────
    {
      n: 3,
      section: "B",
      ctx: [
        "Rithy builds a path across his rectangular lawn using pairs of concrete tiles. Each tile is 20 cm wide and 40 cm long. A pair is two tiles side by side. Each new pair is placed one tile-width to the right of, and directly above, the previous pair.",
        m`When \(n\) pairs of tiles are laid, the path has a width of \(w_n\) centimetres and a length of \(l_n\) centimetres. The diagram shows the path for \(n = 1\) and \(n = 3\), and the table shows \(w_n\) and \(l_n\) for the first three values of \(n\). Both \(w_n\) and \(l_n\) increase by a constant amount each time a pair is added.`,
      ],
      figure: { src: "/review/set2-q3-paving-path.svg", alt: "Two lawns showing a staircase path of tile pairs for n equals 1 and n equals 3, with width w and length l marked", width: 580, height: 346 },
      table: {
        head: [m`\(n\)`, "1", "2", "3"],
        rows: [
          [m`\(w_n\)`, "40", m`\(a\)`, "80"],
          [m`\(l_n\)`, "40", "80", m`\(b\)`],
        ],
      },
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: m`Find the value of \(a\).`, lines: 2, restate: "a",
          steps: [m`\[a = \dfrac{40 + 80}{2} = 60\]`],
          final: "a = 60",
          note: "Marks: (A1) 60. The step in w is 20, so w goes 40, 60, 80.",
        },
        {
          l: "a", sub: "ii", marks: 1, q: m`Find the value of \(b\).`, lines: 2, restate: "b",
          steps: [m`\[l_2 - l_1 = 80 - 40 = 40 \;\Rightarrow\; b = 80 + 40 = 120\]`],
          final: "b = 120",
          note: "Marks: (A1) 120. Each new pair adds one tile length, 40 cm.",
        },
        {
          l: "b", sub: "i", marks: 2, q: m`Write down an expression in terms of \(n\) for \(w_n\).`, lines: 3, restate: "w_n",
          steps: [
            m`Use \(w_1 = 40\) and \(d = 60 - 40 = 20\) from (a)(i).`,
            m`\[w_n = 40 + 20(n-1) = 20n + 20\]`,
          ],
          final: "w_n = 20n + 20",
          note: "Marks: (M1) arithmetic term formula with u₁ = 40 and d = 20, (A1) 20n + 20.",
        },
        {
          l: "b", sub: "ii", marks: 1, q: m`Write down an expression in terms of \(n\) for \(l_n\).`, lines: 2, restate: "l_n",
          steps: [m`\[l_n = 40 + 40(n-1) = 40n\]`],
          final: "l_n = 40n",
          note: "Marks: (A1) 40n. Check: l₂ = 80 and l₃ = 120 match the table and the diagram.",
        },
        {
          l: "c", sub: "i", marks: 2, q: "Rithy's lawn has a length of 2200 cm. The path reaches the other side of the lawn. Show that Rithy needs 110 tiles.", lines: 3, restate: "Tiles needed",
          steps: [
            m`Use \(l_n\) from (b)(ii): \(40n = 2200 \Rightarrow n = 55\) pairs.`,
            m`\[55 \times 2 = 110\ \text{tiles}\]`,
          ],
          final: "n = 55 pairs, 110 tiles",
          note: "Marks: (M1) setting l_n = 2200, (A1) n = 55 and 2 × 55 = 110 shown. A pair is two tiles.",
        },
        {
          l: "c", sub: "ii", marks: 1, q: m`Find the value of \(w_n\) for this path.`, lines: 2, restate: "w for n = 55",
          steps: [m`\[w_{55} = 20(55) + 20 = 1120\ \text{cm}\]`],
          final: "1120 cm",
          note: "Marks: (A1) 1120. Use n = 55 from (c)(i), not 110.",
        },
        {
          l: "d", marks: 3, q: m`Find the total area of the tiles in Rithy's path. Give your answer in the form \(a \times 10^{k}\), where \(1 \leq a < 10\) and \(k\) is an integer.`, lines: 4, restate: "Total tile area (cm²)",
          steps: [
            m`\[\text{one tile: } 20 \times 40 = 800\ \text{cm}^2\]`,
            m`\[110 \times 800 = 88\,000\ \text{cm}^2\]`,
            m`\[= 8.8 \times 10^{4}\ \text{cm}^2\]`,
          ],
          final: "8.8 × 10⁴ cm²",
          note: "Marks: (M1) area of one tile, (A1) 88 000 using 110 from (c)(i), (A1) 8.8 × 10⁴. The path is the tiles only, so do not use w × l.",
        },
        {
          l: "e", marks: 3, q: "The tiles cost 12.50 USD per square metre and are sold in packs of five tiles. Find the cost of a single pack of five tiles.", lines: 4, restate: "Cost of one pack",
          steps: [
            m`\[800\ \text{cm}^2 = 0.08\ \text{m}^2\]`,
            m`\[5 \times 0.08 = 0.4\ \text{m}^2\]`,
            m`\[0.4 \times 12.50 = 5.00\ \text{USD}\]`,
          ],
          final: "5.00 USD",
          note: "Marks: (M1) converting cm² to m² (divide by 10 000), (A1) 0.4 m² for five tiles, (A1) 5.00.",
        },
        {
          l: "f", marks: 3, q: "To allow for breakages, Rithy wants to have at least 15% more tiles than he needs. Find the minimum number of packs he must order.", lines: 4, restate: "Packs to order",
          steps: [
            m`\[110 \times 1.15 = 126.5 \Rightarrow 127\ \text{tiles}\]`,
            m`\[127 \div 5 = 25.4 \Rightarrow 26\ \text{packs}\]`,
          ],
          final: "26 packs",
          note: "Marks: (M1) 110 × 1.15, (A1) 126.5 so at least 127 tiles, (A1) 26 packs. Round up, not to the nearest whole number.",
        },
        {
          l: "g", marks: 2, q: "There is a fixed delivery cost of 45 USD. Find the total cost of Rithy's order.", lines: 3, restate: "Total cost",
          steps: [
            m`Use 26 packs from (f) and 5.00 USD per pack from (e).`,
            m`\[26 \times 5.00 + 45 = 175\ \text{USD}\]`,
          ],
          final: "175.00 USD",
          note: "Marks: (M1) packs × price + delivery, (A1) 175.00.",
        },
      ],
    },

    // ───────────────────────── Q4 ─────────────────────────
    {
      n: 4,
      section: "B",
      ctx: [
        "Nimol and Rattana have each been given 3000 USD to save for college.",
        "Nimol invests her money in an account that pays a nominal annual interest rate of 2.4%, compounded quarterly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the amount Nimol will have in her account after 5 years. Give your answer correct to 2 decimal places.", lines: 4, restate: "Nimol, 5 years",
          steps: [
            m`\[FV = 3000\left(1 + \dfrac{2.4}{400}\right)^{20}\]`,
            m`GDC: \(N = 5,\ I\% = 2.4,\ PV = -3000,\ PMT = 0,\ P/Y = 1,\ C/Y = 4\), solve for FV.`,
            m`\[FV = 3381.28\]`,
          ],
          final: "3381.28 USD",
          note: "Marks: (M1) correct formula or TVM entries, (M1) k = 4 and kn = 20 used, (A1) 3381.28.",
        },
        {
          l: "b", marks: 3, q: m`Rattana invests her 3000 USD in an account that pays a nominal annual interest of \(r\%\), compounded monthly. After 5 years her account holds exactly 150 USD more than Nimol's account in part (a). Determine the value of \(r\).`, lines: 5, restate: "Value of r",
          steps: [
            m`Target: \(3381.28 + 150 = 3531.28\).`,
            m`\[3000\left(1 + \dfrac{r}{1200}\right)^{60} = 3531.28\]`,
            m`GDC: \(N = 5,\ PV = -3000,\ PMT = 0,\ FV = 3531.28,\ P/Y = 1,\ C/Y = 12\), solve for \(I\%\).`,
          ],
          final: "r = 3.27",
          note: "Marks: (M1) target 3531.28 formed from (a), (M1) equation with k = 12 and kn = 60, (A1) r = 3.27 (3.265...).",
        },
      ],
    },

    // ───────────────────────── Q5 ─────────────────────────
    {
      n: 5,
      section: "B",
      ctx: [
        "A new theatre was built. The first row has 10 seats and the eighth row has 38 seats. Each row has the same number of extra seats compared with the previous row. The theatre has a total of 22 rows.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 3, q: "Find the number of seats in the last row.", lines: 4, restate: "Seats in row 22",
          steps: [
            m`\[10 + 7d = 38 \;\Rightarrow\; d = 4\]`,
            m`\[u_{22} = 10 + 21(4) = 94\]`,
          ],
          final: "94 seats",
          note: "Marks: (M1) u₈ = 10 + 7d = 38, (A1) d = 4, (A1) 94.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the total number of seats in the theatre.", lines: 3, restate: "Total seats",
          steps: [m`\[S_{22} = \dfrac{22}{2}(10 + 94) = 1144\]`],
          final: "1144 seats",
          note: "Marks: (M1) S_n with the last term from (a)(i), (A1) 1144.",
        },
        {
          l: "b", marks: 2, q: "The theatre opened in 2018. The average number of visitors per show during that year was 520. In 2019, the average number of visitors per show increased by 2.5%. Find the average number of visitors per show in 2019.", lines: 3, restate: "Visitors in 2019",
          steps: [m`\[520 \times 1.025 = 533\]`],
          final: "533 visitors",
          note: "Marks: (M1) 520 × 1.025, (A1) 533.",
        },
        {
          l: "c", marks: 5, q: "The theatre managers use this data to model future numbers of visitors. It is assumed that the average number of visitors per show will continue to increase each year by 2.5%. Determine the first year in which this model predicts the average number of visitors per show will exceed the total seating capacity of the theatre.", lines: 6, restate: "First year above capacity",
          steps: [
            m`The capacity is 1144 from (a)(ii). The 2018 value is \(u_1 = 520\) with \(r = 1.025\).`,
            m`\[520(1.025)^{n} > 1144\]`,
            m`GDC: 2049 (\(n = 31\)): 1118.00, below 1144. 2050 (\(n = 32\)): 1145.95, above 1144.`,
          ],
          final: "2050",
          note: "Marks: (M1) capacity 1144 from (a)(ii), (M1) inequality with 520 and 1.025, (A1) 1118.00 and 1145.95 either side, (A1) n = 32 from 2018, (A1) 2050. Common error: 2018 + 31 or counting 2018 as n = 1 and answering 2049.",
        },
        {
          l: "d", marks: 4, q: "It is assumed that the theatre will host 30 shows each year. Use the average number of visitors per show per year to predict the total number of people expected to attend the theatre from when it opens until the end of 2026. Give your answer to the nearest whole number.", lines: 6, restate: "Total attendance 2018 to 2026",
          steps: [
            m`2018 to 2026 is 9 years: \(u_1 = 520\), \(r = 1.025\), \(n = 9\).`,
            m`\[S_9 = \dfrac{520(1.025^{9} - 1)}{1.025 - 1} = 5176.35\ldots\]`,
            m`\[5176.35 \times 30 = 155\,290.49\ldots\]`,
          ],
          final: "155 290 people",
          note: "Marks: (M1) 9 terms, (M1) geometric sum formula, (A1) 5176.35, (A1) 155 290. Common error: n = 8, which leaves out 2018.",
        },
      ],
    },

    // ───────────────────────── Q6 ─────────────────────────
    {
      n: 6,
      section: "B",
      ctx: [
        "The first terms of an infinite geometric sequence \\(u_n\\) are 2, 6, 18, 54, …",
        "The first terms of a second infinite geometric sequence \\(v_n\\) are 2, -6, 18, -54, …",
        m`The terms of a third sequence \(w_n\) are defined as \(w_n = u_n + v_n\).`,
      ],
      parts: [
        {
          l: "a", marks: 3, q: m`Write down the first three non-zero terms of \(w_n\).`, lines: 4, restate: "First 3 non-zero terms of w",
          steps: [
            m`\(w_1 = 2 + 2 = 4\), \(w_2 = 6 - 6 = 0\), \(w_3 = 18 + 18 = 36\), \(w_4 = 0\), \(w_5 = 162 + 162 = 324\).`,
          ],
          final: "4, 36, 324",
          note: "Marks: (A1) 4, (A1) 36, (A1) 324. The terms in even positions are zero because u and v cancel.",
        },
        {
          l: "b", sub: "i", marks: 2, q: m`The finite series \(\displaystyle\sum_{n=1}^{16} w_n\) can also be written in the form \(\displaystyle\sum_{k=1}^{m} 4r^{k-1}\). Find the value of \(r\).`, lines: 3, restate: "Value of r",
          steps: [m`Use the non-zero terms from (a): \(r = \dfrac{36}{4} = \dfrac{324}{36} = 9\).`],
          final: "r = 9",
          note: "Marks: (M1) ratio of consecutive non-zero terms from (a), (A1) 9. Do not use 36 ÷ 0 or 0 ÷ 4.",
        },
        {
          l: "b", sub: "ii", marks: 2, q: m`Find the value of \(m\).`, lines: 3, restate: "Value of m",
          steps: [
            m`Only the odd-numbered terms of \(w_n\) are non-zero.`,
            m`Of the 16 terms, 8 are non-zero, so \(m = 8\).`,
          ],
          final: "m = 8",
          note: "Marks: (M1) recognising that only half of the 16 terms are non-zero, (A1) 8. Check: the last non-zero term is w₁₅ = 4(9)⁷.",
        },
      ],
    },
  ],
};

export default paper;
