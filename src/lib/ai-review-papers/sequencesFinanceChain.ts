import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 12: Sequences, Series and Financial Mathematics, chained (62 marks).
// Mirror of Grade_11_Practice_Questions_for_Sequence_Series_and_Financial_Mathematics.pdf:
// same six question types and mark split, new numbers, and each part feeds the next part.

const paper: AiReviewPaper = {
  slug: "sequences-finance-chain",
  session: 12,
  topic: "Sequences, Series and Financial Mathematics",
  title: "Sequences, Series and Financial Mathematics, Chained",
  subtitle: "Summative Revision, Session 12",
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
        "Dara pays 150 USD into a bank account at the end of each month. The annual interest paid on money in the account is 3.6%, compounded monthly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Find the value of her investment after a period of 4 years.", lines: 4, restate: "Value after 4 years",
          steps: [
            m`GDC: \(N = 48,\ I\% = 3.6,\ PV = 0,\ PMT = -150,\ P/Y = C/Y = 12\), solve for FV.`,
            m`\[FV = \dfrac{150\left(\left(1 + \frac{0.036}{12}\right)^{48} - 1\right)}{\frac{0.036}{12}} = 7731.75\ldots\]`,
          ],
          final: "7731.76 USD",
          note: "Marks: (M1) N = 48 with P/Y = C/Y = 12, (A1) PMT = -150 and PV = 0, (A1) 7731.76.",
        },
        {
          l: "b", marks: 2, q: "The average rate of inflation per year over the 4 years was 2.5%. Find an approximation for the real interest rate for the money invested in the account.", lines: 3, restate: "Real interest rate",
          steps: [m`\[3.6 - 2.5 = 1.1\%\]`],
          final: "1.1%",
          note: "Marks: (M1) subtracting the inflation rate from the interest rate, (A1) 1.1.",
        },
        {
          l: "c", marks: 2, q: "Hence find the real value of Dara's investment at the end of 4 years.", lines: 3, restate: "Real value after 4 years",
          steps: [
            m`Use the rate from (b): \(N = 48,\ I\% = 1.1,\ PV = 0,\ PMT = -150,\ P/Y = C/Y = 12\), solve for FV.`,
            m`\[FV = 7357.30\ldots\]`,
          ],
          final: "7357.30 USD",
          note: "Marks: (M1) repeating the TVM calculation with I% = 1.1 from (b), (A1) 7357.30. Follow through from a wrong (b). The real value (7357.30) is less than the value in (a) (7731.76).",
        },
      ],
    },

    // ───────────────────────── Q2 ─────────────────────────
    {
      n: 2,
      section: "A",
      ctx: [
        "A ball is dropped from a height of 2.4 metres and bounces on the ground. The maximum height reached by the ball after each bounce is 80% of the previous maximum height.",
        m`The diagram shows the first three bounces. The maximum heights after bounces 1, 2 and 3 are \(h_1\), \(h_2\) and \(h_3\).`,
      ],
      figure: { src: "/review/set1-q2-bouncing-ball.svg", alt: "A ball dropped from 2.4 m, then three bounce arcs of heights h1, h2 and h3, each 80% of the one before", width: 580, height: 300 },
      parts: [
        {
          l: "a", marks: 2, q: "Show that the maximum height reached by the ball after it has bounced for the fifth time is 79 cm, to the nearest cm.", lines: 3, restate: "Height after bounce 5",
          steps: [
            m`The heights form a geometric sequence in cm: \(u_0 = 240\), \(r = 0.8\).`,
            m`\[u_5 = 240(0.8)^5 = 78.64\ldots \approx 79\ \text{cm}\]`,
          ],
          final: "240(0.8)⁵ = 78.64 ≈ 79 cm",
          note: "Marks: (M1) 240(0.8)^5 with the height in cm, (A1) 78.64 shown and rounded to 79. Using 0.8^6 is the common slip: the drop is bounce 0.",
        },
        {
          l: "b", marks: 2, q: "Using the same model, find the number of bounces for which the maximum height reached is greater than 15 cm.", lines: 4, restate: "Bounces above 15 cm",
          steps: [
            m`\[240(0.8)^n > 15\]`,
            m`GDC: \(n = 12\) gives 16.49 cm (above 15), \(n = 13\) gives 13.19 cm (below 15).`,
          ],
          final: "12 bounces",
          note: "Marks: (M1) inequality or table using the model from (a), (A1) 12.",
        },
        {
          l: "c", marks: 3, q: "Find the total vertical distance travelled by the ball from the point at which it is dropped until it returns to the ground after its third bounce.", lines: 5, restate: "Total distance to bounce 3",
          steps: [
            m`Heights in metres: \(h_1 = 1.92\), \(h_2 = 1.536\), \(h_3 = 1.2288\).`,
            m`Each bounce is up and down, so the distance is twice its height: \[2.4 + 2(1.92 + 1.536 + 1.2288) = 2.4 + 2(4.6848)\]`,
            m`\[= 11.7696 \approx 11.77\ \text{m}\]`,
          ],
          final: "11.77 m",
          note: "Marks: (M1) 2.4 plus twice the heights, (A1) heights 1.92, 1.536, 1.2288, (A1) 11.77. Doubling the drop of 2.4 is the common error.",
        },
      ],
    },

    // ───────────────────────── Q3 ─────────────────────────
    {
      n: 3,
      section: "B",
      ctx: [
        "Mehta builds a path across her rectangular lawn using pairs of paving slabs. Each slab is 15 cm wide and 30 cm long. A pair is two slabs side by side. Each new pair is placed one slab-width to the right of, and directly above, the previous pair.",
        m`When \(n\) pairs of slabs are laid, the path has a width of \(w_n\) centimetres and a length of \(l_n\) centimetres. The diagram shows the path for \(n = 1\) and \(n = 3\), and the table shows \(w_n\) and \(l_n\) for the first three values of \(n\). Both \(w_n\) and \(l_n\) increase by a constant amount each time a pair is added.`,
      ],
      figure: { src: "/review/set1-q3-paving-path.svg", alt: "Two lawns showing a staircase path of slab pairs for n equals 1 and n equals 3, with width w and length l marked", width: 580, height: 346 },
      table: {
        head: [m`\(n\)`, "1", "2", "3"],
        rows: [
          [m`\(w_n\)`, "30", m`\(a\)`, "60"],
          [m`\(l_n\)`, "30", "60", m`\(b\)`],
        ],
      },
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: m`Find the value of \(a\).`, lines: 2, restate: "a",
          steps: [m`\[a = \dfrac{30 + 60}{2} = 45\]`],
          final: "a = 45",
          note: "Marks: (A1) 45. The step in w is 15, so w goes 30, 45, 60.",
        },
        {
          l: "a", sub: "ii", marks: 1, q: m`Find the value of \(b\).`, lines: 2, restate: "b",
          steps: [m`\[l_2 - l_1 = 60 - 30 = 30 \;\Rightarrow\; b = 60 + 30 = 90\]`],
          final: "b = 90",
          note: "Marks: (A1) 90. Each new pair adds one slab length, 30 cm.",
        },
        {
          l: "b", sub: "i", marks: 2, q: m`Write down an expression in terms of \(n\) for \(w_n\).`, lines: 3, restate: "w_n",
          steps: [
            m`Use \(w_1 = 30\) and \(d = 45 - 30 = 15\) from (a)(i).`,
            m`\[w_n = 30 + 15(n-1) = 15n + 15\]`,
          ],
          final: "w_n = 15n + 15",
          note: "Marks: (M1) arithmetic term formula with u₁ = 30 and d = 15, (A1) 15n + 15.",
        },
        {
          l: "b", sub: "ii", marks: 1, q: m`Write down an expression in terms of \(n\) for \(l_n\).`, lines: 2, restate: "l_n",
          steps: [m`\[l_n = 30 + 30(n-1) = 30n\]`],
          final: "l_n = 30n",
          note: "Marks: (A1) 30n. Check: l₂ = 60 and l₃ = 90 match the table and the diagram.",
        },
        {
          l: "c", sub: "i", marks: 2, q: "Mehta's lawn has a length of 1560 cm. The path reaches the other side of the lawn. Show that Mehta needs 104 slabs.", lines: 3, restate: "Slabs needed",
          steps: [
            m`Use \(l_n\) from (b)(ii): \(30n = 1560 \Rightarrow n = 52\) pairs.`,
            m`\[52 \times 2 = 104\ \text{slabs}\]`,
          ],
          final: "n = 52 pairs, 104 slabs",
          note: "Marks: (M1) setting l_n = 1560, (A1) n = 52 and 2 × 52 = 104 shown. A pair is two slabs.",
        },
        {
          l: "c", sub: "ii", marks: 1, q: m`Find the value of \(w_n\) for this path.`, lines: 2, restate: "w for n = 52",
          steps: [m`\[w_{52} = 15(52) + 15 = 795\ \text{cm}\]`],
          final: "795 cm",
          note: "Marks: (A1) 795. Use n = 52 from (c)(i), not 104.",
        },
        {
          l: "d", marks: 3, q: m`Find the total area of the slabs in Mehta's path. Give your answer in the form \(a \times 10^{k}\), where \(1 \leq a < 10\) and \(k\) is an integer.`, lines: 4, restate: "Total slab area (cm²)",
          steps: [
            m`\[\text{one slab: } 15 \times 30 = 450\ \text{cm}^2\]`,
            m`\[104 \times 450 = 46\,800\ \text{cm}^2\]`,
            m`\[= 4.68 \times 10^{4}\ \text{cm}^2\]`,
          ],
          final: "4.68 × 10⁴ cm²",
          note: "Marks: (M1) area of one slab, (A1) 46 800 using 104 from (c)(i), (A1) 4.68 × 10⁴. The path is the slabs only, so do not use w × l.",
        },
        {
          l: "e", marks: 3, q: "The slabs cost 20 USD per square metre and are sold in packs of five slabs. Find the cost of a single pack of five slabs.", lines: 4, restate: "Cost of one pack",
          steps: [
            m`\[450\ \text{cm}^2 = 0.045\ \text{m}^2\]`,
            m`\[5 \times 0.045 = 0.225\ \text{m}^2\]`,
            m`\[0.225 \times 20 = 4.50\ \text{USD}\]`,
          ],
          final: "4.50 USD",
          note: "Marks: (M1) converting cm² to m² (divide by 10 000), (A1) 0.225 m² for five slabs, (A1) 4.50.",
        },
        {
          l: "f", marks: 3, q: "To allow for breakages, Mehta wants to have at least 12% more slabs than she needs. Find the minimum number of packs she must order.", lines: 4, restate: "Packs to order",
          steps: [
            m`\[104 \times 1.12 = 116.48 \Rightarrow 117\ \text{slabs}\]`,
            m`\[117 \div 5 = 23.4 \Rightarrow 24\ \text{packs}\]`,
          ],
          final: "24 packs",
          note: "Marks: (M1) 104 × 1.12, (A1) 116.48 so at least 117 slabs, (A1) 24 packs. Round up, not to the nearest whole number.",
        },
        {
          l: "g", marks: 2, q: "There is a fixed delivery cost of 30 USD. Find the total cost of Mehta's order.", lines: 3, restate: "Total cost",
          steps: [
            m`Use 24 packs from (f) and 4.50 USD per pack from (e).`,
            m`\[24 \times 4.50 + 30 = 138\ \text{USD}\]`,
          ],
          final: "138.00 USD",
          note: "Marks: (M1) packs × price + delivery, (A1) 138.00.",
        },
      ],
    },

    // ───────────────────────── Q4 ─────────────────────────
    {
      n: 4,
      section: "B",
      ctx: [
        "Sokha and Vibol have each been given 2000 USD to save for college.",
        "Sokha invests her money in an account that pays a nominal annual interest rate of 3.2%, compounded half-yearly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the amount Sokha will have in her account after 6 years. Give your answer correct to 2 decimal places.", lines: 4, restate: "Sokha, 6 years",
          steps: [
            m`\[FV = 2000\left(1 + \dfrac{3.2}{200}\right)^{12}\]`,
            m`GDC: \(N = 6,\ I\% = 3.2,\ PV = -2000,\ PMT = 0,\ P/Y = 1,\ C/Y = 2\), solve for FV.`,
            m`\[FV = 2419.66\]`,
          ],
          final: "2419.66 USD",
          note: "Marks: (M1) correct formula or TVM entries, (M1) k = 2 and kn = 12 used, (A1) 2419.66.",
        },
        {
          l: "b", marks: 3, q: m`Vibol invests his 2000 USD in an account that pays a nominal annual interest of \(r\%\), compounded quarterly. After 6 years his account holds exactly 100 USD more than Sokha's account in part (a). Determine the value of \(r\).`, lines: 5, restate: "Value of r",
          steps: [
            m`Target: \(2419.66 + 100 = 2519.66\).`,
            m`\[2000\left(1 + \dfrac{r}{400}\right)^{24} = 2519.66\]`,
            m`GDC: \(N = 6,\ PV = -2000,\ PMT = 0,\ FV = 2519.66,\ P/Y = 1,\ C/Y = 4\), solve for \(I\%\).`,
          ],
          final: "r = 3.87",
          note: "Marks: (M1) target 2519.66 formed from (a), (M1) equation with k = 4 and kn = 24, (A1) r = 3.87 (3.868...).",
        },
      ],
    },

    // ───────────────────────── Q5 ─────────────────────────
    {
      n: 5,
      section: "B",
      ctx: [
        "A new concert hall was built. The first row has 12 seats and the sixth row has 27 seats. Each row has the same number of extra seats compared with the previous row. The hall has a total of 25 rows.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 3, q: "Find the number of seats in the last row.", lines: 4, restate: "Seats in row 25",
          steps: [
            m`\[12 + 5d = 27 \;\Rightarrow\; d = 3\]`,
            m`\[u_{25} = 12 + 24(3) = 84\]`,
          ],
          final: "84 seats",
          note: "Marks: (M1) u₆ = 12 + 5d = 27, (A1) d = 3, (A1) 84.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the total number of seats in the concert hall.", lines: 3, restate: "Total seats",
          steps: [m`\[S_{25} = \dfrac{25}{2}(12 + 84) = 1200\]`],
          final: "1200 seats",
          note: "Marks: (M1) S_n with the last term from (a)(i), (A1) 1200.",
        },
        {
          l: "b", marks: 2, q: "The concert hall opened in 2019. The average number of visitors per concert during that year was 600. In 2020, the average number of visitors per concert increased by 2.5%. Find the average number of visitors per concert in 2020.", lines: 3, restate: "Visitors in 2020",
          steps: [m`\[600 \times 1.025 = 615\]`],
          final: "615 visitors",
          note: "Marks: (M1) 600 × 1.025, (A1) 615.",
        },
        {
          l: "c", marks: 5, q: "The concert organizers use this data to model future numbers of visitors. It is assumed that the average number of visitors per concert will continue to increase each year by 2.5%. Determine the first year in which this model predicts the average number of visitors per concert will exceed the total seating capacity of the concert hall.", lines: 6, restate: "First year above capacity",
          steps: [
            m`The capacity is 1200 from (a)(ii). The 2019 value is \(u_1 = 600\) with \(r = 1.025\).`,
            m`\[600(1.025)^{n} > 1200\]`,
            m`GDC: 2047 (\(n = 28\)): 1197.90, below 1200. 2048 (\(n = 29\)): 1227.84, above 1200.`,
          ],
          final: "2048",
          note: "Marks: (M1) capacity 1200 from (a)(ii), (M1) inequality with 600 and 1.025, (A1) 1197.90 and 1227.84 either side, (A1) n = 29 from 2019, (A1) 2048. Common error: 2019 + 28 or counting 2019 as n = 1 and answering 2047.",
        },
        {
          l: "d", marks: 4, q: "It is assumed that the concert hall will host 40 concerts each year. Use the average number of visitors per concert per year to predict the total number of people expected to attend the concert hall from when it opens until the end of 2027. Give your answer to the nearest whole number.", lines: 6, restate: "Total attendance 2019 to 2027",
          steps: [
            m`2019 to 2027 is 9 years: \(u_1 = 600\), \(r = 1.025\), \(n = 9\).`,
            m`\[S_9 = \dfrac{600(1.025^{9} - 1)}{1.025 - 1} = 5972.71\ldots\]`,
            m`\[5972.71 \times 40 = 238\,908.45\ldots\]`,
          ],
          final: "238 908 people",
          note: "Marks: (M1) 9 terms, (M1) geometric sum formula, (A1) 5972.71, (A1) 238 908. Common error: n = 8, which leaves out 2019.",
        },
      ],
    },

    // ───────────────────────── Q6 ─────────────────────────
    {
      n: 6,
      section: "B",
      ctx: [
        "The first terms of an infinite geometric sequence \\(u_n\\) are 3, 6, 12, 24, …",
        "The first terms of a second infinite geometric sequence \\(v_n\\) are 3, -6, 12, -24, …",
        m`The terms of a third sequence \(w_n\) are defined as \(w_n = u_n + v_n\).`,
      ],
      parts: [
        {
          l: "a", marks: 3, q: m`Write down the first three non-zero terms of \(w_n\).`, lines: 4, restate: "First 3 non-zero terms of w",
          steps: [
            m`\(w_1 = 3 + 3 = 6\), \(w_2 = 6 - 6 = 0\), \(w_3 = 12 + 12 = 24\), \(w_4 = 0\), \(w_5 = 48 + 48 = 96\).`,
          ],
          final: "6, 24, 96",
          note: "Marks: (A1) 6, (A1) 24, (A1) 96. The terms in even positions are zero because u and v cancel.",
        },
        {
          l: "b", sub: "i", marks: 2, q: m`The finite series \(\displaystyle\sum_{n=1}^{20} w_n\) can also be written in the form \(\displaystyle\sum_{k=1}^{m} 6r^{k-1}\). Find the value of \(r\).`, lines: 3, restate: "Value of r",
          steps: [m`Use the non-zero terms from (a): \(r = \dfrac{24}{6} = \dfrac{96}{24} = 4\).`],
          final: "r = 4",
          note: "Marks: (M1) ratio of consecutive non-zero terms from (a), (A1) 4. Do not use 24 ÷ 0 or 0 ÷ 6.",
        },
        {
          l: "b", sub: "ii", marks: 2, q: m`Find the value of \(m\).`, lines: 3, restate: "Value of m",
          steps: [
            m`Only the odd-numbered terms of \(w_n\) are non-zero.`,
            m`Of the 20 terms, 10 are non-zero, so \(m = 10\).`,
          ],
          final: "m = 10",
          note: "Marks: (M1) recognising that only half of the 20 terms are non-zero, (A1) 10. Check: the last non-zero term is w₁₉ = 6(4)⁹.",
        },
      ],
    },
  ],
};

export default paper;
