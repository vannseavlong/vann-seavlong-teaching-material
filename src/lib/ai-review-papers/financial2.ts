import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 8: Financial Mathematics, Set 2 (no simple interest).
// Compound interest, TVM loans and savings, exchange rates, inflation, depreciation.
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "financial-2",
  session: 8,
  topic: "Financial Mathematics",
  title: "Financial Mathematics, Set 2",
  subtitle: "Summative Revision, Session 8",
  minutes: 50,
  lessonAnchor: "financial-mathematics",
  questions: [
    // ───────────────────────── Section A ─────────────────────────
    {
      n: 1,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: ["Bopha invests 8500 USD in an account that pays a nominal annual interest rate of 3.9%, compounded monthly. She leaves the money in the account for 7 years."],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the value of the investment after 7 years.", restate: "Value after 7 years",
          steps: [
            m`\[FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn},\quad k = 12,\ n = 7\]`,
            m`\[FV = 8500\left(1 + \dfrac{3.9}{1200}\right)^{84}\]`,
            m`GDC: \(N = 84,\ I\% = 3.9,\ PV = -8500,\ PMT = 0,\ P/Y = C/Y = 12\), solve for FV.`,
          ],
          final: "11 163.21 USD",
          note: "Marks: (M1) correct formula or TVM entries, (M1) k = 12 and N = 84 used, (A1) 11 163.21.",
        },
        {
          l: "b", marks: 1, q: "Find the interest Bopha earns.", lines: 1, restate: "Interest earned",
          steps: [m`\[11\,163.21 - 8500 = 2663.21\]`],
          final: "2663.21 USD",
          note: "Marks: (A1) 2663.21.",
        },
        {
          l: "c", marks: 2, q: "A second account pays the same nominal rate, compounded annually. Find how much less Bopha would have after 7 years in that account.", restate: "Annual vs monthly",
          steps: [
            m`\[8500(1.039)^7 = 11\,110.35\]`,
            m`\[11\,163.21 - 11\,110.35 = 52.86\]`,
          ],
          final: "52.86 USD less",
          note: "Marks: (M1) annual value 11 110.35, (A1) 52.86.",
        },
        {
          l: "d", marks: 2, q: "Using the monthly account, find the least number of months for the investment to reach 10 000 USD.", lines: 4, restate: "Months to 10 000 USD",
          steps: [
            m`GDC: \(I\% = 3.9,\ PV = -8500,\ PMT = 0,\ FV = 10\,000,\ P/Y = C/Y = 12\), solve for \(N\): \(N = 50.09\ldots\)`,
            m`Check: after 50 months the value is 9997.18 (below 10 000); after 51 months it is 10 029.67.`,
          ],
          final: "51 months",
          note: "Marks: (M1) solving for N, (A1) 51 (round up, not 50).",
        },
      ],
    },
    {
      n: 2,
      section: "A",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: ["Rithy borrows 18 000 USD to buy a car. The loan has a nominal annual interest rate of 5.4%, compounded monthly. He repays it with equal payments at the end of each month for 4 years."],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the monthly payment.", restate: "Monthly payment",
          steps: [
            m`GDC: \(N = 48,\ I\% = 5.4,\ PV = 18\,000,\ FV = 0,\ P/Y = C/Y = 12\), payments at the end of the period. Solve for PMT.`,
            m`\[PMT = -417.7967\ldots\]`,
          ],
          final: "417.80 USD per month",
          note: "Marks: (A1) N = 48, (A1) I% = 5.4 with P/Y = C/Y = 12 and FV = 0, (A1) 417.80.",
        },
        {
          l: "b", marks: 2, q: "Find the total interest Rithy pays.", lines: 3, restate: "Total interest",
          steps: [
            m`\[48 \times 417.7967\ldots = 20\,054.24\]`,
            m`\[20\,054.24 - 18\,000 = 2054.24\]`,
          ],
          final: "2054.24 USD",
          note: "Marks: (M1) 48 × payment, (A1) 2054.24. Using the rounded payment 417.80 gives 2054.40, accept as follow through.",
        },
        {
          l: "c", marks: 3, q: "Find the amount Rithy still owes immediately after his 24th payment.", lines: 4, restate: "Balance after 24 payments",
          steps: [
            m`GDC: \(N = 24,\ I\% = 5.4,\ PV = 18\,000,\ PMT = -417.7967\ldots,\ P/Y = C/Y = 12\), solve for FV.`,
            m`\[FV = -9484.44\ldots\]`,
            "The negative sign means the amount owed.",
          ],
          final: "9484.44 USD",
          note: "Marks: (M1) TVM with N = 24 and PMT, (A1) 9484.44 (accept 9484.36 if the rounded payment is used), (A1) interpreted as the amount owed.",
        },
      ],
    },
    {
      n: 3,
      section: "A",
      instruction: "In this question, give all answers correct to two decimal places.",
      ctx: ["Vuthy travels to Cambodia and changes 600 USD into Cambodian riel (KHR). The exchange rate is 1 USD = 4080 KHR. The bank charges a commission of 1.5% on the KHR amount."],
      parts: [
        {
          l: "a", marks: 2, q: "Calculate the number of riel Vuthy receives after commission.", restate: "Riel received",
          steps: [
            m`\[600 \times 4080 = 2\,448\,000 \text{ KHR before commission}\]`,
            m`\[2\,448\,000 \times (1 - 0.015) = 2\,411\,280\]`,
          ],
          final: "2 411 280 KHR",
          note: "Marks: (M1) 600 × 4080 and 1.5% removed, (A1) 2 411 280.",
        },
        {
          l: "b", marks: 3, q: "Vuthy spends 2 000 000 KHR. He changes the remaining riel back into USD at 1 USD = 4150 KHR, with no commission. Find the USD he receives.", lines: 4, restate: "Back to USD",
          steps: [
            m`\[2\,411\,280 - 2\,000\,000 = 411\,280 \text{ KHR}\]`,
            m`\[411\,280 \div 4150 = 99.10\ldots\]`,
          ],
          final: "99.10 USD",
          note: "Marks: (A1) 411 280 remaining, (M1) divide by 4150, (A1) 99.10. Common error: multiplying by 4150.",
        },
        {
          l: "c", marks: 2, q: "Find the exchange rate (KHR per 1 USD) at which the 411 280 KHR would give exactly 100 USD.", lines: 3, restate: "Rate for 100 USD",
          steps: [m`\[411\,280 \div 100 = 4112.80\]`],
          final: "1 USD = 4112.80 KHR",
          note: "Marks: (M1) 411 280 ÷ 100, (A1) 4112.80.",
        },
      ],
    },
    {
      n: 4,
      section: "A",
      ctx: ["A restaurant meal costs 25 USD today. Prices in the country rise by an inflation rate of 2.8% per year, compounded annually."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the cost of the same meal after 10 years. Give your answer correct to two decimal places.", lines: 3, restate: "Cost after 10 years",
          steps: [m`\[25(1.028)^{10} = 32.95\ldots\]`],
          final: "32.95 USD",
          note: "Marks: (M1) 25(1.028)^10, (A1) 32.95.",
        },
        {
          l: "b", marks: 3, q: "A worker earns 45 000 USD per year now and 60 000 USD per year after 8 years. Find the constant annual percentage increase in the salary. Give your answer correct to three significant figures.", lines: 4, restate: "Salary growth rate",
          steps: [
            m`\[45\,000\left(1 + \dfrac{r}{100}\right)^8 = 60\,000 \;\Rightarrow\; \left(1 + \dfrac{r}{100}\right)^8 = \dfrac{4}{3}\]`,
            m`\[r = 100\left(\left(\tfrac{4}{3}\right)^{1/8} - 1\right) = 3.661\ldots\]`,
            m`GDC: \(N = 8,\ PV = -45\,000,\ PMT = 0,\ FV = 60\,000,\ P/Y = C/Y = 1\), solve for \(I\%\).`,
          ],
          final: "r = 3.66",
          note: "Marks: (M1) equation set up, (M1) 8th root or TVM solve, (A1) 3.66.",
        },
        {
          l: "c", marks: 2, q: "Find the least number of whole years for prices to at least double.", lines: 4, restate: "Years to double",
          steps: [
            m`\[1.028^n \geq 2 \;\Rightarrow\; n \geq \dfrac{\ln 2}{\ln 1.028} = 25.10\ldots\]`,
            m`Check: \(1.028^{25} = 1.9945\ldots\) (below 2); \(1.028^{26} = 2.0503\ldots\).`,
          ],
          final: "26 years",
          note: "Marks: (M1) inequality or table of values, (A1) 26 (round up, not 25).",
        },
      ],
    },
    {
      n: 5,
      section: "A",
      ctx: ["A laptop is bought for 1900 USD. Its value decreases by 15% each year."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the value of the laptop after 3 years. Give your answer correct to two decimal places.", lines: 3, restate: "Value after 3 years",
          steps: [m`\[1900(1 - 0.15)^3 = 1900(0.85)^3 = 1166.84\ldots\]`],
          final: "1166.84 USD",
          note: "Marks: (M1) 1900(0.85)^3, (A1) 1166.84.",
        },
        {
          l: "b", marks: 2, q: "Determine the first whole year in which the laptop is worth less than 500 USD.", lines: 4, restate: "Year below 500 USD",
          steps: [
            m`\[1900(0.85)^n < 500 \;\Rightarrow\; n > \dfrac{\ln(500/1900)}{\ln 0.85} = 8.21\ldots\]`,
            m`Check: \(n = 8 \Rightarrow 517.73\); \(n = 9 \Rightarrow 440.07\).`,
          ],
          final: "Year 9",
          note: "Marks: (M1) inequality or table of values, (A1) n = 9.",
        },
        {
          l: "c", marks: 3, q: "A tablet is bought for 2400 USD. After 3 years its value is 1500 USD. Find the annual percentage rate of depreciation. Give your answer correct to three significant figures.", lines: 4, restate: "Depreciation rate",
          steps: [
            m`\[2400(1 - d)^3 = 1500 \;\Rightarrow\; (1 - d)^3 = 0.625\]`,
            m`\[1 - d = 0.625^{1/3} = 0.8549\ldots \;\Rightarrow\; d = 0.1450\ldots\]`,
          ],
          final: "14.5% per year",
          note: "Marks: (M1) equation with (1 - d)^3, (M1) cube root, (A1) 14.5. Common error: 1 - 1500/2400 = 37.5% is the total fall over 3 years, not the yearly rate.",
        },
      ],
    },

    // ───────────────────────── Section B ─────────────────────────
    {
      n: 6,
      section: "B",
      instruction: "In this question, give all monetary answers correct to two decimal places.",
      ctx: [
        "Meng wants to have 60 000 USD in 10 years for a business. He can use either of two savings options in an account that pays a nominal annual interest rate of 4.8%, compounded monthly.",
        "Option 1: invest one lump sum today and make no further deposits.",
        "Option 2: start with 0 USD and deposit equal amounts at the end of each month for 10 years.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Find the lump sum Meng must invest today under Option 1.", restate: "Option 1 lump sum",
          steps: [
            m`GDC: \(N = 120,\ I\% = 4.8,\ PMT = 0,\ FV = 60\,000,\ P/Y = C/Y = 12\), solve for PV.`,
            m`\[PV = -37\,162.57\ldots\]`,
            "The negative sign means the money is paid in.",
          ],
          final: "37 162.57 USD",
          note: "Marks: (A1) N = 120, (A1) I% = 4.8 with P/Y = C/Y = 12 and PMT = 0, (A1) 37 162.57.",
        },
        {
          l: "b", marks: 3, q: "Find the monthly deposit Meng must make under Option 2.", restate: "Option 2 deposit",
          steps: [
            m`GDC: \(N = 120,\ I\% = 4.8,\ PV = 0,\ FV = 60\,000,\ P/Y = C/Y = 12\), payments at the end of the period. Solve for PMT.`,
            m`\[PMT = -390.5437\ldots\]`,
          ],
          final: "390.54 USD per month",
          note: "Marks: (A1) PV = 0 and FV = 60 000, (A1) N = 120 with P/Y = C/Y = 12, (A1) 390.54.",
        },
        {
          l: "c", marks: 2, q: "Find the total interest earned under Option 2.", lines: 3, restate: "Option 2 interest",
          steps: [
            m`\[120 \times 390.5437\ldots = 46\,865.25\]`,
            m`\[60\,000 - 46\,865.25 = 13\,134.75\]`,
          ],
          final: "13 134.75 USD",
          note: "Marks: (M1) 120 × payment, (A1) 13 134.75. Using the rounded payment 390.54 gives 13 135.20, accept as follow through.",
        },
        {
          l: "d", marks: 3, q: "Meng has only 40 000 USD available today. Determine which option he can afford, and by how much the total money he puts in differs between the two options.", lines: 4, restate: "Affordable option",
          steps: [
            "Option 1 needs 37 162.57 USD, which is less than 40 000 USD, so it is affordable.",
            m`\[46\,865.25 - 37\,162.57 = 9702.68\]`,
            "Option 2 needs a total of 46 865.25 USD paid in, which is 9702.68 USD more than Option 1, because the lump sum earns interest for the full 10 years.",
          ],
          final: "Option 1; Option 2 costs 9702.68 USD more in total",
          note: "Marks: (A1) 37 162.57 compared with 40 000, (M1) 46 865.25 - 37 162.57, (A1) 9702.68. Option 2 can still be chosen if he cannot pay a lump sum, since the monthly amount (390.54) is small.",
        },
        {
          l: "e", marks: 2, q: "Prices rise by 2.5% per year over the 10 years. Find the value of 60 000 USD in today's prices, that is, the amount today with the same buying power.", lines: 3, restate: "Value in today's prices",
          steps: [m`\[\dfrac{60\,000}{1.025^{10}} = 46\,871.90\ldots\]`],
          final: "46 871.90 USD",
          note: "Marks: (M1) 60 000 ÷ 1.025^10, (A1) 46 871.90. Common error: multiplying by 1.025^10.",
        },
        {
          l: "f", marks: 2, q: "With the 60 000 USD, Meng buys a van that depreciates at 9% per year. Find the value of the van after 4 years.", lines: 3, restate: "Van value after 4 years",
          steps: [m`\[60\,000(1 - 0.09)^4 = 60\,000(0.91)^4 = 41\,144.98\]`],
          final: "41 144.98 USD",
          note: "Marks: (M1) 60 000(0.91)^4, (A1) 41 144.98.",
        },
      ],
    },
  ],
};

export default paper;
