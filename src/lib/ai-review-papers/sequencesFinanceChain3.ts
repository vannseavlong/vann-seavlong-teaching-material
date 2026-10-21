import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 14: Summative revision, chained, Set 3 (71 marks).
// Covers all six summative topics: arithmetic sequences and series, geometric sequences and series,
// financial mathematics, rounding, upper and lower bounds, percentage error.
// New contexts and new diagrams (pendulum, L-shaped tile mosaics); each part feeds the next part.

const paper: AiReviewPaper = {
  slug: "sequences-finance-chain-3",
  session: 14,
  topic: "Summative Revision, All Topics",
  title: "Sequences, Finance, Rounding, Bounds and Percentage Error, Chained, Set 3",
  subtitle: "Summative Revision, Session 14",
  minutes: 80,
  lessonAnchor: "arithmetic",
  source: "Topics follow the Summative Assessment Revision list: arithmetic and geometric sequences and series, financial mathematics, rounding, upper and lower bounds, percentage error. Every context and number is new, and in each question a later part uses the answer to an earlier part.",
  questions: [
    // ───────────────────────── Q1: financial, rounding, percentage error ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places unless told otherwise.",
      ctx: [
        "Kosal saves for a new laptop. She pays 600 USD into a bank account at the end of every 3 months. The annual interest paid on money in the account is 4.0%, compounded quarterly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Find the value of her savings after 6 years.", lines: 4, restate: "Value after 6 years",
          steps: [
            m`GDC: \(N = 24,\ I\% = 4.0,\ PV = 0,\ PMT = -600,\ P/Y = C/Y = 4\), solve for FV.`,
            m`\[FV = \dfrac{600\left(\left(1 + \frac{0.04}{4}\right)^{24} - 1\right)}{\frac{0.04}{4}} = 16\,184.07\ldots\]`,
          ],
          final: "16 184.08 USD",
          note: "Marks: (M1) N = 24 with P/Y = C/Y = 4, (A1) PMT = -600 and PV = 0, (A1) 16 184.08.",
        },
        {
          l: "b", marks: 2, q: "The average rate of inflation per year over the 6 years was 2.2%. Find an approximation for the real interest rate for the money saved.", lines: 3, restate: "Real interest rate",
          steps: [m`\[4.0 - 2.2 = 1.8\%\]`],
          final: "1.8%",
          note: "Marks: (M1) subtracting the inflation rate from the interest rate, (A1) 1.8.",
        },
        {
          l: "c", marks: 2, q: "Hence find the real value of Kosal's savings at the end of 6 years.", lines: 3, restate: "Real value after 6 years",
          steps: [
            m`Use the rate from (b): \(N = 24,\ I\% = 1.8,\ PV = 0,\ PMT = -600,\ P/Y = C/Y = 4\), solve for FV.`,
            m`\[FV = 15\,170.38\ldots\]`,
          ],
          final: "15 170.38 USD",
          note: "Marks: (M1) repeating the TVM calculation with I% = 1.8 from (b), (A1) 15 170.38. Follow through from a wrong (b).",
        },
        {
          l: "d", marks: 3, q: m`The exact real interest rate is \(\left(\dfrac{1.04}{1.022} - 1\right) \times 100\%\). Find the percentage error in using the approximation from (b).`, lines: 5, restate: "Percentage error of 1.8%",
          steps: [
            m`\[v_E = \left(\dfrac{1.04}{1.022} - 1\right) \times 100 = 1.7612\ldots\]`,
            m`\[v_A = 1.8\ \text{from (b)}\]`,
            m`\[\varepsilon = \left|\dfrac{1.8 - 1.7612}{1.7612}\right| \times 100\% = 2.2\%\]`,
          ],
          final: "2.2%",
          note: "Marks: (A1) v_E = 1.7612..., (M1) |v_A - v_E| / v_E × 100, (A1) 2.2%. The exact value is the denominator.",
        },
        {
          l: "e", marks: 1, q: "Write your answer to (c) correct to 3 significant figures.", lines: 2, restate: "(c) to 3 s.f.",
          steps: [m`\[15\,170.38 \approx 15\,200\ \text{USD}\]`],
          final: "15 200 USD",
          note: "Marks: (A1) 15 200. The third significant figure is the 1 in 15 170, and the next digit 7 rounds it up to 2.",
        },
      ],
    },

    // ───────────────────────── Q2: geometric, bounds ─────────────────────────
    {
      n: 2,
      section: "A",
      ctx: [
        "A pendulum bob swings back and forth. The first swing, from the left end to the right end, travels an arc of length 80 cm. Each swing after that travels 90% of the arc length of the previous swing.",
        m`The diagram shows the first three swings. Their arc lengths are \(s_1\), \(s_2\) and \(s_3\).`,
      ],
      figure: { src: "/review/set3-q2-pendulum.svg", alt: "A pendulum bob starting at the left, with three nested swing arcs of lengths s1, s2 and s3, each 90% of the one before", width: 580, height: 330 },
      parts: [
        {
          l: "a", marks: 2, q: "Show that the arc length of the 7th swing is 42.5 cm, correct to 3 significant figures.", lines: 3, restate: "Arc length of swing 7",
          steps: [
            m`The arc lengths form a geometric sequence: \(u_1 = 80\), \(r = 0.9\).`,
            m`\[u_7 = 80(0.9)^6 = 42.515\ldots \approx 42.5\ \text{cm}\]`,
          ],
          final: "80(0.9)⁶ = 42.515 ≈ 42.5 cm",
          note: "Marks: (M1) 80(0.9)^6, (A1) 42.515 shown and rounded to 42.5. The power is 6, not 7: swing 1 is the first term.",
        },
        {
          l: "b", marks: 2, q: "Using the same model, find the number of swings with an arc length greater than 20 cm.", lines: 4, restate: "Swings above 20 cm",
          steps: [
            m`\[80(0.9)^{n-1} > 20\]`,
            m`GDC: \(n = 14\) gives 20.33 cm (above 20), \(n = 15\) gives 18.30 cm (below 20).`,
          ],
          final: "14 swings",
          note: "Marks: (M1) inequality or table using the model from (a), (A1) 14.",
        },
        {
          l: "c", marks: 3, q: "Find the total distance travelled by the bob in the first 8 swings. Give your answer correct to 3 significant figures.", lines: 5, restate: "Distance, 8 swings",
          steps: [
            m`\[S_8 = \dfrac{80\left(1 - 0.9^{8}\right)}{1 - 0.9}\]`,
            m`\[= 455.63\ldots \approx 456\ \text{cm}\]`,
          ],
          final: "456 cm",
          note: "Marks: (M1) geometric sum formula, (A1) correct substitution with r = 0.9 and n = 8, (A1) 456.",
        },
        {
          l: "d", sub: "i", marks: 1, q: "The arc length of the first swing, 80 cm, was measured correct to the nearest centimetre. Write down the lower bound and the upper bound of the first arc length.", lines: 2, restate: "Bounds of 80 cm",
          steps: [m`\[79.5 \leq u_1 < 80.5\]`],
          final: "Lower 79.5 cm, upper 80.5 cm",
          note: "Marks: (A1) both bounds. Half of the 1 cm unit is 0.5 cm.",
        },
        {
          l: "d", sub: "ii", marks: 2, q: "Hence find the lower bound and the upper bound of the total distance in part (c).", lines: 4, restate: "Bounds of total distance",
          steps: [
            m`The ratio 0.9 is exact, so \(S_8\) is proportional to \(u_1\): \(S_8 = u_1 \times 5.6953\ldots\)`,
            m`\[\text{lower: } 79.5 \times 5.6953\ldots = 452.78\ldots,\qquad \text{upper: } 80.5 \times 5.6953\ldots = 458.47\ldots\]`,
          ],
          final: "Lower 452.78 cm, upper 458.47 cm",
          note: "Marks: (A1) lower bound 452.78, (A1) upper bound 458.47. Both bounds come from the bounds of u₁ in (d)(i). The value from (c), 455.63, lies between them.",
        },
      ],
    },

    // ───────────────────────── Q3: arithmetic pattern, rounding, percentage error ─────────────────────────
    {
      n: 3,
      section: "B",
      ctx: [
        "Sina decorates the corner of a wall with L-shaped mosaics made of square tiles. Each tile has a side of 25 cm.",
        m`The \(n\)th mosaic has \(t_n\) tiles. Its two arms each contain \(n + 1\) tiles and share one corner tile. The side of the square that the mosaic fits in is \(s_n\) centimetres. The diagram shows \(n = 1, 2, 3\) and the table shows \(t_n\) and \(s_n\) for these values. Both \(t_n\) and \(s_n\) increase by a constant amount as \(n\) increases by 1.`,
      ],
      figure: { src: "/review/set3-q3-l-mosaics.svg", alt: "Three L-shaped mosaics of square tiles for n equals 1, 2 and 3, with the side s of each marked", width: 580, height: 272 },
      table: {
        head: [m`\(n\)`, "1", "2", "3"],
        rows: [
          [m`\(t_n\)`, "3", m`\(a\)`, "7"],
          [m`\(s_n\)`, "50", "75", m`\(b\)`],
        ],
      },
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: m`Find the value of \(a\).`, lines: 2, restate: "a",
          steps: [m`\[a = \dfrac{3 + 7}{2} = 5\]`],
          final: "a = 5",
          note: "Marks: (A1) 5. The step in t is 2, so t goes 3, 5, 7.",
        },
        {
          l: "a", sub: "ii", marks: 1, q: m`Find the value of \(b\).`, lines: 2, restate: "b",
          steps: [m`\[s_2 - s_1 = 75 - 50 = 25 \;\Rightarrow\; b = 75 + 25 = 100\]`],
          final: "b = 100",
          note: "Marks: (A1) 100. Each step adds one tile side, 25 cm.",
        },
        {
          l: "b", sub: "i", marks: 2, q: m`Write down an expression in terms of \(n\) for \(t_n\).`, lines: 3, restate: "t_n",
          steps: [
            m`Use \(t_1 = 3\) and \(d = 5 - 3 = 2\) from (a)(i).`,
            m`\[t_n = 3 + 2(n-1) = 2n + 1\]`,
          ],
          final: "t_n = 2n + 1",
          note: "Marks: (M1) arithmetic term formula with u₁ = 3 and d = 2, (A1) 2n + 1.",
        },
        {
          l: "b", sub: "ii", marks: 1, q: m`Write down an expression in terms of \(n\) for \(s_n\).`, lines: 2, restate: "s_n",
          steps: [m`\[s_n = 50 + 25(n-1) = 25n + 25\]`],
          final: "s_n = 25n + 25",
          note: "Marks: (A1) 25n + 25. Check: s₃ = 100 matches (a)(ii).",
        },
        {
          l: "c", sub: "i", marks: 2, q: "A wall corner has a side of 1250 cm and Sina fits the largest mosaic that suits it exactly, so that s_n = 1250. Show that Sina needs 99 tiles.", lines: 3, restate: "Tiles needed",
          steps: [
            m`Use \(s_n\) from (b)(ii): \(25n + 25 = 1250 \Rightarrow n = 49\).`,
            m`\[t_{49} = 2(49) + 1 = 99\]`,
          ],
          final: "n = 49, t = 99 tiles",
          note: "Marks: (M1) setting s_n = 1250 and solving, (A1) n = 49 and t₄₉ = 99 shown. Use t_n from (b)(i).",
        },
        {
          l: "c", sub: "ii", marks: 1, q: "Find the number of tiles along one arm of this mosaic.", lines: 2, restate: "Tiles along one arm",
          steps: [m`\[n + 1 = 49 + 1 = 50\]`],
          final: "50 tiles",
          note: "Marks: (A1) 50. Check: 1250 ÷ 25 = 50.",
        },
        {
          l: "d", marks: 3, q: "Find the total area of the 99 tiles. Give your answer in square centimetres, correct to 3 significant figures, in the form a × 10^k where 1 ≤ a < 10 and k is an integer.", lines: 4, restate: "Total tile area",
          steps: [
            m`\[\text{one tile: } 25 \times 25 = 625\ \text{cm}^2\]`,
            m`\[99 \times 625 = 61\,875\ \text{cm}^2\]`,
            m`\[= 6.19 \times 10^{4}\ \text{cm}^2\ (3\ \text{s.f.})\]`,
          ],
          final: "6.19 × 10⁴ cm²",
          note: "Marks: (M1) area of one tile, (A1) 61 875 using 99 from (c)(i), (A1) 6.19 × 10⁴. Round to 3 s.f. only at the end.",
        },
        {
          l: "e", marks: 3, q: "The tiles cost 36 USD per square metre and are sold in packs of six tiles. Find the cost of a single pack of six tiles.", lines: 4, restate: "Cost of one pack",
          steps: [
            m`\[625\ \text{cm}^2 = 0.0625\ \text{m}^2\]`,
            m`\[6 \times 0.0625 = 0.375\ \text{m}^2\]`,
            m`\[0.375 \times 36 = 13.50\ \text{USD}\]`,
          ],
          final: "13.50 USD",
          note: "Marks: (M1) converting cm² to m² (divide by 10 000), (A1) 0.375 m² for six tiles, (A1) 13.50.",
        },
        {
          l: "f", marks: 3, q: "To allow for breakages, Sina wants to have at least 10% more tiles than she needs. Find the minimum number of packs she must order.", lines: 4, restate: "Packs to order",
          steps: [
            m`\[99 \times 1.10 = 108.9 \Rightarrow 109\ \text{tiles}\]`,
            m`\[109 \div 6 = 18.17\ldots \Rightarrow 19\ \text{packs}\]`,
          ],
          final: "19 packs",
          note: "Marks: (M1) 99 × 1.10, (A1) 108.9 so at least 109 tiles, (A1) 19 packs. Round up both times.",
        },
        {
          l: "g", marks: 2, q: "There is a fixed delivery cost of 28 USD. Find the total cost of Sina's order.", lines: 3, restate: "Total cost",
          steps: [
            m`Use 19 packs from (f) and 13.50 USD per pack from (e).`,
            m`\[19 \times 13.50 + 28 = 284.50\ \text{USD}\]`,
          ],
          final: "284.50 USD",
          note: "Marks: (M1) packs × price + delivery, (A1) 284.50.",
        },
        {
          l: "h", marks: 2, q: m`Before ordering, Sina estimated the total tile area as \(6 \times 10^{4}\ \text{cm}^2\). Find the percentage error in this estimate, using the exact area from (d).`, lines: 4, restate: "Percentage error of the estimate",
          steps: [
            m`\[v_E = 61\,875\ \text{(unrounded from (d))},\qquad v_A = 60\,000\]`,
            m`\[\varepsilon = \left|\dfrac{60\,000 - 61\,875}{61\,875}\right| \times 100\% = 3.03\%\]`,
          ],
          final: "3.03%",
          note: "Marks: (M1) |v_A - v_E| / v_E × 100 with v_E = 61 875, (A1) 3.03. Using the rounded 6.19 × 10⁴ gives a different answer, so use the unrounded area.",
        },
      ],
    },

    // ───────────────────────── Q4: financial ─────────────────────────
    {
      n: 4,
      section: "B",
      ctx: [
        "Dev and Sovann each want the same amount of money in 4 years.",
        "Dev invests 2500 USD in an account that pays a nominal annual interest rate of 3.6%, compounded monthly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the amount Dev will have in his account after 4 years. Give your answer correct to 2 decimal places.", lines: 4, restate: "Dev, 4 years",
          steps: [
            m`\[FV = 2500\left(1 + \dfrac{3.6}{1200}\right)^{48}\]`,
            m`GDC: \(N = 4,\ I\% = 3.6,\ PV = -2500,\ PMT = 0,\ P/Y = 1,\ C/Y = 12\), solve for FV.`,
            m`\[FV = 2886.59\]`,
          ],
          final: "2886.59 USD",
          note: "Marks: (M1) correct formula or TVM entries, (M1) k = 12 and kn = 48 used, (A1) 2886.59.",
        },
        {
          l: "b", marks: 3, q: m`Sovann invests 2400 USD in an account that pays a nominal annual interest of \(r\%\), compounded half-yearly. After 4 years her account holds exactly the amount Dev has in part (a). Determine the value of \(r\).`, lines: 5, restate: "Value of r",
          steps: [
            m`Target: \(2886.59\) from (a).`,
            m`\[2400\left(1 + \dfrac{r}{200}\right)^{8} = 2886.59\]`,
            m`GDC: \(N = 4,\ PV = -2400,\ PMT = 0,\ FV = 2886.59,\ P/Y = 1,\ C/Y = 2\), solve for \(I\%\).`,
          ],
          final: "r = 4.67",
          note: "Marks: (M1) target 2886.59 taken from (a), (M1) equation with k = 2 and kn = 8, (A1) r = 4.67 (4.669...).",
        },
      ],
    },

    // ───────────────────────── Q5: arithmetic then geometric ─────────────────────────
    {
      n: 5,
      section: "B",
      ctx: [
        "A new car park has 14 levels. Level 2 has 142 spaces and level 5 has 118 spaces. Each level has the same number of fewer spaces than the level below it.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 3, q: "Find the number of spaces on level 14.", lines: 4, restate: "Spaces on level 14",
          steps: [
            m`\[u_5 - u_2 = 3d = 118 - 142 = -24 \;\Rightarrow\; d = -8\]`,
            m`\[u_1 = 142 + 8 = 150,\qquad u_{14} = 150 + 13(-8) = 46\]`,
          ],
          final: "46 spaces",
          note: "Marks: (M1) 3d = 118 - 142, (A1) d = -8, (A1) 46.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the total number of spaces in the car park.", lines: 3, restate: "Total spaces",
          steps: [m`\[S_{14} = \dfrac{14}{2}(150 + 46) = 1372\]`],
          final: "1372 spaces",
          note: "Marks: (M1) S_n with the last term from (a)(i), (A1) 1372.",
        },
        {
          l: "b", marks: 2, q: "The car park opened in 2021. The average number of cars parked per day during that year was 400. In 2022, the average number of cars parked per day increased by 6%. Find the average number of cars parked per day in 2022.", lines: 3, restate: "Cars per day in 2022",
          steps: [m`\[400 \times 1.06 = 424\]`],
          final: "424 cars",
          note: "Marks: (M1) 400 × 1.06, (A1) 424.",
        },
        {
          l: "c", marks: 5, q: "The managers model future demand. It is assumed that the average number of cars parked per day will continue to increase each year by 6%. Determine the first year in which this model predicts the average number of cars per day will exceed the total number of spaces in the car park.", lines: 6, restate: "First year above capacity",
          steps: [
            m`The capacity is 1372 from (a)(ii). The 2021 value is \(u_1 = 400\) with \(r = 1.06\).`,
            m`\[400(1.06)^{n} > 1372\]`,
            m`GDC: 2042 (\(n = 21\)): 1359.83, below 1372. 2043 (\(n = 22\)): 1441.41, above 1372.`,
          ],
          final: "2043",
          note: "Marks: (M1) capacity 1372 from (a)(ii), (M1) inequality with 400 and 1.06, (A1) 1359.83 and 1441.41 either side, (A1) n = 22 from 2021, (A1) 2043. Common error: counting 2021 as n = 1 and answering 2042.",
        },
        {
          l: "d", marks: 4, q: "The car park is open 360 days each year. Use the average number of cars parked per day each year to predict the total number of cars parked from when it opens until the end of 2030. Give your answer to the nearest whole number.", lines: 6, restate: "Total cars 2021 to 2030",
          steps: [
            m`2021 to 2030 is 10 years: \(u_1 = 400\), \(r = 1.06\), \(n = 10\).`,
            m`\[S_{10} = \dfrac{400(1.06^{10} - 1)}{1.06 - 1} = 5272.32\ldots\]`,
            m`\[5272.32\ldots \times 360 = 1\,898\,034.47\ldots\]`,
          ],
          final: "1 898 034 cars",
          note: "Marks: (M1) 10 terms, (M1) geometric sum formula, (A1) 5272.32, (A1) 1 898 034. Multiply the unrounded sum by 360: rounding 5272.32 first gives 1 898 035.",
        },
      ],
    },

    // ───────────────────────── Q6: geometric, series notation ─────────────────────────
    {
      n: 6,
      section: "B",
      ctx: [
        "The first terms of an infinite geometric sequence \\(u_n\\) are 5, 10, 20, 40, …",
        "The first terms of a second infinite geometric sequence \\(v_n\\) are -5, 10, -20, 40, …",
        m`The terms of a third sequence \(w_n\) are defined as \(w_n = u_n + v_n\).`,
      ],
      parts: [
        {
          l: "a", marks: 3, q: m`Write down the first three non-zero terms of \(w_n\).`, lines: 4, restate: "First 3 non-zero terms of w",
          steps: [
            m`\(w_1 = 5 - 5 = 0\), \(w_2 = 10 + 10 = 20\), \(w_3 = 0\), \(w_4 = 40 + 40 = 80\), \(w_5 = 0\), \(w_6 = 160 + 160 = 320\).`,
          ],
          final: "20, 80, 320",
          note: "Marks: (A1) 20, (A1) 80, (A1) 320. The terms in odd positions are zero because u and v cancel.",
        },
        {
          l: "b", sub: "i", marks: 2, q: m`The finite series \(\displaystyle\sum_{n=1}^{18} w_n\) can also be written in the form \(\displaystyle\sum_{k=1}^{m} 20r^{k-1}\). Find the value of \(r\).`, lines: 3, restate: "Value of r",
          steps: [m`Use the non-zero terms from (a): \(r = \dfrac{80}{20} = \dfrac{320}{80} = 4\).`],
          final: "r = 4",
          note: "Marks: (M1) ratio of consecutive non-zero terms from (a), (A1) 4. Do not use 20 ÷ 0 or 0 ÷ 20.",
        },
        {
          l: "b", sub: "ii", marks: 2, q: m`Find the value of \(m\).`, lines: 3, restate: "Value of m",
          steps: [
            m`Only the even-numbered terms of \(w_n\) are non-zero.`,
            m`Of the 18 terms, 9 are non-zero, so \(m = 9\).`,
          ],
          final: "m = 9",
          note: "Marks: (M1) recognising that only half of the 18 terms are non-zero, (A1) 9. Check: the last non-zero term is w₁₈ = 20(4)⁸.",
        },
      ],
    },
  ],
};

export default paper;
