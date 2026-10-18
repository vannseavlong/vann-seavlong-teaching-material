import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 3: Financial Mathematics (IB style: Section A short, Section B extended)
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "financial",
  session: 3,
  topic: "Financial Mathematics",
  title: "Financial Mathematics",
  subtitle: "Summative Revision, Session 3",
  minutes: 50,
  lessonAnchor: "financial-mathematics",
  questions: [
    // ───────────────────────── Section A ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: ["Sophea invests 15 000 USD in a savings account that pays a nominal annual interest rate of 4.2%, compounded quarterly. She leaves the money in the account for 6 years."],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the value of the investment after 6 years.", restate: "Value after 6 years",
          steps: [
            m`\[FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn},\quad k = 4,\ n = 6\]`,
            m`\[FV = 15\,000\left(1 + \dfrac{4.2}{400}\right)^{24}\]`,
            m`GDC: \(N = 24,\ I\% = 4.2,\ PV = -15\,000,\ PMT = 0,\ P/Y = C/Y = 4\), solve for FV.`,
          ],
          final: "19 273.60 USD",
          note: "Marks: (M1) correct formula or TVM entries, (M1) k = 4 and n = 24 (or N = 24) used, (A1) 19 273.60.",
        },
        {
          l: "b", marks: 1, q: "Find the interest Sophea earns.", lines: 1, restate: "Interest earned",
          steps: [m`\[19\,273.60 - 15\,000 = 4273.60\]`],
          final: "4273.60 USD",
          note: "Marks: (A1) 4273.60.",
        },
        {
          l: "c", marks: 2, q: "Another account pays interest compounded annually at the same nominal rate. Find how much less Sophea would have after 6 years in that account.", restate: "Annual vs quarterly",
          steps: [
            m`\[15\,000(1.042)^6 = 19\,199.84\]`,
            m`\[19\,273.60 - 19\,199.84 = 73.76\]`,
          ],
          final: "73.76 USD less",
          note: "Marks: (M1) annual value 19 199.84, (A1) 73.76.",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: ["Dara pays 250 USD at the end of each month into a savings plan. The plan pays a nominal annual interest rate of 3.6%, compounded monthly. The plan starts with a balance of 0 USD."],
      parts: [
        {
          l: "a", marks: 3, q: "Find the value of the plan after 8 years.", restate: "Value after 8 years",
          steps: [
            m`GDC: \(N = 96,\ I\% = 3.6,\ PV = 0,\ PMT = -250,\ P/Y = C/Y = 12\), payments at the end of the period. Solve for FV.`,
          ],
          final: "27 765.20 USD",
          note: "Marks: (A1) N = 96, (A1) I% = 3.6 with P/Y = C/Y = 12, (A1) 27 765.20.",
        },
        {
          l: "b", marks: 1, q: "Calculate how much of this value is interest.", lines: 1, restate: "Interest part",
          steps: [m`\[250 \times 96 = 24\,000 \quad\Rightarrow\quad 27\,765.20 - 24\,000 = 3765.20\]`],
          final: "3765.20 USD",
          note: "Marks: (A1) 3765.20.",
        },
        {
          l: "c", marks: 2, q: "Dara wants the plan to reach 30 000 USD. Find the least number of months needed.", lines: 4, restate: "Months to 30 000 USD",
          steps: [
            m`GDC: \(I\% = 3.6,\ PV = 0,\ PMT = -250,\ FV = 30\,000,\ P/Y = C/Y = 12\), solve for \(N\): \(N = 102.5\ldots\)`,
            m`Check: after 102 payments the balance is 29 780.03 (below 30 000); after 103 it is 30 119.37.`,
          ],
          final: "103 months",
          note: "Marks: (M1) solving for N, (A1) 103 (round up).",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: ["Kimleng travels from the United States to France. She changes 1200 USD into euros (EUR). The exchange rate is 1 USD = 0.8745 EUR. The bank charges a commission of 2% on the USD amount before converting."],
      parts: [
        {
          l: "a", marks: 1, q: "Calculate the commission in USD.", lines: 1, restate: "Commission",
          steps: [m`\[1200 \times 0.02 = 24\]`],
          final: "24.00 USD",
          note: "Marks: (A1) 24.",
        },
        {
          l: "b", marks: 2, q: "Calculate the number of euros Kimleng receives.", restate: "Euros received",
          steps: [m`\[(1200 - 24) \times 0.8745 = 1176 \times 0.8745 = 1028.412\]`],
          final: "1028.41 EUR",
          note: "Marks: (M1) 1176 × 0.8745, (A1) 1028.41.",
        },
        {
          l: "c", marks: 2, q: "At the end of the trip she changes 400 EUR back into USD at 1 EUR = 1.125 USD, with no commission. Find the USD she receives.", restate: "Back to USD",
          steps: [m`\[400 \times 1.125 = 450\]`],
          final: "450.00 USD",
          note: "Marks: (M1) 400 × 1.125, (A1) 450. Common error: dividing by 1.125 instead of multiplying.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      ctx: ["Vuthy invests 4000 USD in an account that pays r% interest per year, compounded annually. After 7 years the account contains 5200 USD."],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the value of \(r\). Give your answer correct to three significant figures.`, lines: 4, restate: "Interest rate",
          steps: [
            m`\[4000\left(1 + \dfrac{r}{100}\right)^7 = 5200 \;\Rightarrow\; \left(1 + \dfrac{r}{100}\right)^7 = 1.3\]`,
            m`\[r = 100\left(1.3^{1/7} - 1\right) = 3.819\ldots\]`,
            m`GDC: \(N = 7,\ PV = -4000,\ PMT = 0,\ FV = 5200,\ P/Y = C/Y = 1\), solve for \(I\%\).`,
          ],
          final: "r = 3.82",
          note: "Marks: (M1) equation set up, (M1) 7th root or TVM solve, (A1) 3.82.",
        },
        {
          l: "b", marks: 2, q: "Assuming the rate stays the same, estimate the value of the account after 10 years. Give your answer to the nearest dollar.", lines: 3, restate: "Value after 10 years",
          steps: [
            m`\[4000\left(1 + \dfrac{3.819\ldots}{100}\right)^{10} = 5818.8\ldots\]`,
            "Using the unrounded rate is best. Using r = 3.82 gives 5819.29, which also rounds to 5819.",
          ],
          final: "5819 USD",
          note: "Marks: (M1) substitution with n = 10, (A1) 5819.",
        },
      ],
    },
    {
      n: 5,
      section: "A",
      ctx: ["A bakery buys an oven. The value of the oven decreases by the same percentage each year. Its value at the start of the first three years is shown in the table."],
      table: {
        head: ["Year", "0", "1", "2"],
        rows: [["Value (USD)", "3200", "2624", "2151.68"]],
      },
      parts: [
        {
          l: "a", marks: 2, q: "Show that the oven depreciates at 18% per year.", lines: 3, restate: "Depreciation rate",
          steps: [
            m`\[\dfrac{2624}{3200} = 0.82 \quad\text{and}\quad \dfrac{2151.68}{2624} = 0.82\]`,
            m`\[1 - 0.82 = 0.18 = 18\%\]`,
          ],
          final: "Constant ratio 0.82, so 18% per year",
          note: "Marks: (M1) ratio of consecutive values, (A1) 0.82 shown for both, so rate 18% (AG).",
        },
        {
          l: "b", marks: 2, q: "Find the value of the oven after 5 years. Give your answer to the nearest dollar.", lines: 3, restate: "Value after 5 years",
          steps: [m`\[3200(0.82)^5 = 1186.37\ldots\]`],
          final: "1186 USD",
          note: "Marks: (M1) 3200(0.82)^5, (A1) 1186.",
        },
        {
          l: "c", marks: 2, q: "Determine the first year in which the oven is worth less than 1000 USD.", lines: 4, restate: "Year below 1000 USD",
          steps: [
            m`\[3200(0.82)^n < 1000 \;\Rightarrow\; n > \dfrac{\ln(1000/3200)}{\ln 0.82} = 5.86\ldots\]`,
            m`Check: \(n = 5 \Rightarrow 1186.37\); \(n = 6 \Rightarrow 972.82\).`,
          ],
          final: "Year 6",
          note: "Marks: (M1) inequality or table of values, (A1) n = 6.",
        },
      ],
    },

    // ───────────────────────── Section B ─────────────────────────
    {
      n: 6,
      section: "B",
      instruction: "In this question, give all monetary answers correct to two decimal places unless told otherwise.",
      ctx: [
        "Chenda buys a tractor for his farm. The tractor costs 40 000 USD and he borrows the full amount. He is offered two loan options, each repaid over 5 years by equal monthly payments made at the end of each month.",
        "Option A: nominal annual interest rate of 6.5%, compounded monthly.",
        "Option B: simple interest of 5.2% per year on the 40 000 USD for 5 years. The total (loan plus interest) is repaid in 60 equal payments.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 3, q: "Calculate the monthly payment under Option A.", restate: "Option A payment",
          steps: [
            m`GDC: \(N = 60,\ I\% = 6.5,\ PV = 40\,000,\ FV = 0,\ P/Y = C/Y = 12\), payments at the end of the period. Solve for PMT.`,
            m`\[PMT = 782.6459\ldots\]`,
          ],
          final: "782.65 USD per month",
          note: "Marks: (A1) N = 60, (A1) I% = 6.5 with P/Y = C/Y = 12, (A1) 782.65.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Calculate the total interest Chenda pays under Option A.", restate: "Option A interest",
          steps: [
            m`\[60 \times 782.6459\ldots = 46\,958.76\]`,
            m`\[46\,958.76 - 40\,000 = 6958.76\]`,
          ],
          final: "6958.76 USD",
          note: "Marks: (M1) 60 × payment, (A1) 6958.76. Using the rounded payment 782.65 gives 6959.00, accept (A1) follow through.",
        },
        {
          l: "b", sub: "i", marks: 2, q: "Calculate the monthly payment under Option B.", restate: "Option B payment",
          steps: [
            m`\[I = 40\,000 \times 0.052 \times 5 = 10\,400\]`,
            m`\[\dfrac{40\,000 + 10\,400}{60} = \dfrac{50\,400}{60} = 840\]`,
          ],
          final: "840.00 USD per month",
          note: "Marks: (M1) simple interest 10 400, (A1) 840.",
        },
        {
          l: "b", sub: "ii", marks: 3, q: "Chenda chooses the option with the lower total cost. Justify which option he should choose, showing the difference in total interest.", lines: 4, restate: "Best option",
          steps: [
            "Option A interest: 6958.76 USD. Option B interest: 10 400 USD.",
            m`\[10\,400 - 6958.76 = 3441.24\]`,
            "Option A has the lower total cost, even though its quoted rate (6.5%) is higher than 5.2%, because simple interest on the full 40 000 USD is charged for all 5 years while compound interest is charged on a balance that falls each month.",
          ],
          final: "Option A, saving 3441.24 USD",
          note: "Marks: (A1) both interest totals, (M1) comparison or difference, (R1) correct choice with reason based on the totals. Option A monthly payment (782.65) is also lower than 840.",
        },
        {
          l: "c", marks: 3, q: "Chenda takes Option A. Find the amount he still owes immediately after his 24th payment.", lines: 4, restate: "Balance after 24 payments",
          steps: [
            m`GDC: \(N = 24,\ I\% = 6.5,\ PV = 40\,000,\ PMT = -782.65,\ P/Y = C/Y = 12\), solve for FV.`,
            m`\[FV = -25\,535.77\ldots\]`,
            "The negative sign means the amount owed.",
          ],
          final: "25 535.77 USD",
          note: "Marks: (M1) TVM with N = 24 and PMT, (A1) 25 535.77 (accept 25 535.8x if the rounded payment is used), (A1) interpreted as the amount owed. Use the unrounded PMT 782.6459… for 25 535.77.",
        },
        {
          l: "d", sub: "i", marks: 2, q: "The tractor depreciates at 12% per year. Find its value after 2 years.", restate: "Tractor value after 2 years",
          steps: [m`\[40\,000(1 - 0.12)^2 = 40\,000(0.88)^2 = 30\,976\]`],
          final: "30 976.00 USD",
          note: "Marks: (M1) 40 000(0.88)^2, (A1) 30 976.",
        },
        {
          l: "d", sub: "ii", marks: 2, q: "Hence determine whether the tractor is worth more or less than the amount Chenda still owes after 2 years, and state the difference.", lines: 3, restate: "Value vs debt",
          steps: [
            m`\[30\,976 - 25\,535.77 = 5440.23\]`,
            "The tractor is worth more than the loan balance.",
          ],
          final: "Worth more, by 5440.23 USD",
          note: "Marks: (M1) subtracting the two values, (A1) 5440.23 with the correct comparison.",
        },
      ],
    },
  ],
};

export default paper;
