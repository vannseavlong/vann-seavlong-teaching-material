import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 3 — Financial Mathematics
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "financial",
  session: 3,
  topic: "Financial Mathematics",
  title: "Financial Mathematics",
  subtitle: "Summative Revision — Session 3",
  minutes: 50,
  lessonAnchor: "financial-mathematics",
  questions: [
    {
      n: 1,
      ctx: ["Nimol invests $12,000 for 5 years at a nominal annual interest rate of 3.6%."],
      parts: [
        {
          l: "a", marks: 3, q: "The interest is compounded monthly. Find the value of the investment after 5 years.", restate: "Monthly compounding",
          steps: [
            m`\[FV = PV\left(1 + \dfrac{r}{100k}\right)^{kn}\quad\text{with}\quad k = 12,\; n = 5\]`,
            m`\[FV = 12\,000\left(1 + \dfrac{3.6}{1200}\right)^{60} = 12\,000(1.003)^{60}\]`,
            m`GDC: \(N = 60,\ I\% = 3.6,\ PV = -12\,000,\ PMT = 0,\ P/Y = C/Y = 12\)`,
          ],
          final: "$14,362.74",
        },
        {
          l: "b", marks: 1, q: "Find the interest earned.", lines: 1, restate: "Interest earned",
          steps: [m`\[14\,362.74 - 12\,000 = 2362.74\]`],
          final: "$2,362.74",
        },
        {
          l: "c", marks: 3, q: "Had the interest been compounded annually instead, how much less would Nimol have after 5 years?", restate: "Annual vs monthly",
          steps: [
            m`\[FV = 12\,000(1.036)^5 = 14\,321.22\]`,
            m`\[14\,362.74 - 14\,321.22 = 41.52\]`,
          ],
          final: "$41.52 less",
        },
      ],
    },
    {
      n: 2,
      ctx: ["Rotha invests $8,000 at 4.5% per year, compounded annually."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the value of the investment after 6 years.", restate: "Value after 6 years",
          steps: [m`\[FV = 8000(1.045)^6 = 10\,418.08\]`],
          final: "$10,418.08",
        },
        {
          l: "b", marks: 3, q: "Find the number of complete years before the investment first exceeds $12,000.", lines: 4, restate: "Years to exceed $12,000",
          steps: [
            m`\[8000(1.045)^n > 12\,000 \;\Rightarrow\; 1.045^n > 1.5\]`,
            m`\[n > \dfrac{\ln 1.5}{\ln 1.045} = 9.21\]`,
            m`GDC check: \(n = 9 \Rightarrow \$11\,888.76\) (not enough); \(n = 10 \Rightarrow \$12\,423.76\) ✓`,
          ],
          final: "10 years",
        },
      ],
    },
    {
      n: 3,
      ctx: ["A new car costs $26,000. It depreciates at 14% of its value each year."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the value of the car after 4 years.", restate: "Value after 4 years",
          steps: [m`\[FV = 26\,000\left(1 - \dfrac{14}{100}\right)^4 = 26\,000(0.86)^4 = 14\,222.21\]`],
          final: "$14,222.21",
        },
        {
          l: "b", marks: 2, q: "Find the total percentage of its value the car has lost after 4 years, to 3 significant figures.", restate: "% lost",
          steps: [m`\[\dfrac{26\,000 - 14\,222.21}{26\,000} \times 100 = 45.3\%\]`, "Or: 1 − 0.86⁴ = 0.453."],
          final: "45.3%",
        },
        {
          l: "c", marks: 3, q: "After how many complete years is the car first worth less than $10,000?", lines: 4, restate: "Years to fall below $10,000",
          steps: [
            m`\[26\,000(0.86)^n < 10\,000 \;\Rightarrow\; 0.86^n < 0.3846\]`,
            m`\[n > \dfrac{\ln 0.3846}{\ln 0.86} = 6.34 \;\Rightarrow\; n = 7\]`,
            m`Check: \(n = 6 \Rightarrow \$10\,518.75\); \(n = 7 \Rightarrow \$9046.12\) ✓`,
          ],
          final: "7 years",
        },
      ],
    },
    {
      n: 4,
      ctx: ["Vanna invests $5,000 in an account paying r% per year, compounded annually. After 6 years it is worth $6,500."],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the value of \(r\), to 3 significant figures.`, lines: 4, restate: "Interest rate",
          steps: [
            m`\[5000\left(1 + \dfrac{r}{100}\right)^6 = 6500 \;\Rightarrow\; \left(1 + \dfrac{r}{100}\right)^6 = 1.3\]`,
            m`\[1 + \dfrac{r}{100} = 1.3^{1/6} = 1.0447\]`,
            m`GDC: \(N = 6,\ PV = -5000,\ PMT = 0,\ FV = 6500,\ P/Y = C/Y = 1\), solve for \(I\%\).`,
          ],
          final: "r ≈ 4.47",
        },
        {
          l: "b", marks: 3, q: "A different account pays simple interest and also grows $5,000 to $6,500 in 6 years. Find its annual simple interest rate.", restate: "Simple interest rate",
          steps: [
            m`\[I = 1500 = \dfrac{5000 \times R \times 6}{100} \;\Rightarrow\; R = \dfrac{1500 \times 100}{30\,000} = 5\]`,
          ],
          final: "R = 5%",
          note: "The simple-interest rate must be higher (5% vs 4.47%) to match the compound account — compounding is doing extra work.",
        },
      ],
    },
    {
      n: 5,
      ctx: ["A café's rent is $450 per month. The landlord raises the rent by 3.2% every year."],
      parts: [
        {
          l: "a", marks: 2, q: "Find the monthly rent after 5 years.", restate: "Rent after 5 years",
          steps: [m`\[450(1.032)^5 = 526.76\ldots\]`],
          final: "$526.76",
        },
        {
          l: "b", marks: 3, q: "Find the total extra the café pays per year at the end of 5 years compared with now.", restate: "Extra per year",
          steps: [
            m`\[(526.76 - 450) \times 12 = 76.76 \times 12 = 921.1\ldots\]`,
            "Using the unrounded value 526.7578… gives 921.09.",
          ],
          final: "≈ $921.09 per year",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "Tevy invests $2,500 in an account that pays a nominal annual interest rate of r%, compounded quarterly. After 5 years the account contains $3,100.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Write down the values she should enter in the GDC Finance (TVM) app to find r.", lines: 4, restate: "TVM set-up",
          steps: [m`\[N = 20,\quad PV = -2500,\quad PMT = 0,\quad FV = 3100,\quad P/Y = 4,\quad C/Y = 4\]`, "Solve for I%."],
          final: "N = 20, PV = −2500, PMT = 0, FV = 3100, P/Y = C/Y = 4",
        },
        {
          l: "b", marks: 2, q: m`Hence find \(r\), to 3 significant figures.`, lines: 2, restate: "Value of r",
          steps: [m`\[\left(1 + \dfrac{r}{400}\right)^{20} = 1.24 \;\Rightarrow\; r = 400\left(1.24^{1/20} - 1\right) = 4.325\ldots\]`],
          final: "r ≈ 4.33",
        },
      ],
    },
    {
      n: 7,
      ctx: [
        "Maly changes 800 USD into Thai baht (THB). The exchange rate is 1 USD = 36.4 THB. The bank charges a 1.5% commission on the USD amount before converting.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Calculate the commission in USD.", restate: "Commission",
          steps: [m`\[800 \times 0.015 = 12\]`],
          final: "12 USD",
        },
        {
          l: "b", marks: 2, q: "Calculate the number of baht Maly receives.", restate: "Baht received",
          steps: [m`\[(800 - 12) \times 36.4 = 788 \times 36.4 = 28\,683.2\]`],
          final: "28 683.20 THB",
        },
        {
          l: "c", marks: 2, q: "Maly returns home with 5000 THB and changes it back to USD at 1 USD = 37.1 THB, with no commission. Find the USD received to 2 decimal places.", restate: "Back to USD",
          steps: [m`\[5000 \div 37.1 = 134.77\]`],
          final: "134.77 USD",
        },
      ],
    },
  ],
};

export default paper;
