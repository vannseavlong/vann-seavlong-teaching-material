import type { AiReviewPaper } from "./types";

const m = String.raw;

// Session 14: IB past-paper practice, set 2 (Practice_Questions_2.pdf, 9 questions, 102 marks).
// Bounds, percentage error, sequences, series and financial mathematics. Each question carries its IB code in `ref`.

const paper: AiReviewPaper = {
  slug: "past-paper-practice-2",
  session: 14,
  topic: "Sequences, Series and Financial Mathematics",
  title: "IB Past Paper Practice, Set 2",
  subtitle: "Summative Revision, Session 14",
  minutes: 110,
  lessonAnchor: "arithmetic",
  source: "Questions from IB Mathematics: Applications and Interpretation SL past papers (codes shown under each question number), © International Baccalaureate Organization. Diagrams are described in words; worked solutions are rewritten for this course and follow the published mark scheme.",
  questions: [
    // ───────────────────────── Q1 ─────────────────────────
    {
      n: 1,
      ref: "25N.1.SL.TZ1.2",
      ctx: [
        "A digital caliper is used to measure the diameter of a spherical ball.",
        "The digital caliper displays the diameter of the ball as 8.4 cm, and is accurate to one decimal place.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: "Write down the smallest possible diameter of the ball.", lines: 1, restate: "Smallest diameter",
          steps: [m`Accurate to one decimal place, so the error is \(\pm 0.05\): \(8.4 - 0.05 = 8.35\).`],
          final: "8.35 cm",
          note: "Marks: (A1) 8.35.",
        },
        {
          l: "a", sub: "ii", marks: 3, q: "Hence, calculate the smallest possible volume of the ball.", lines: 4, restate: "Smallest volume",
          steps: [
            m`Radius \(= 8.35 \div 2 = 4.175\).`,
            m`\[V = \tfrac{4}{3}\pi (4.175)^3 = 304.83\ldots\]`,
          ],
          final: "305 cm³",
          note: "Marks: (A1) correct radius, (M1) substitution into the volume of a sphere, (A1) 305.",
        },
        {
          l: "b", marks: 2, q: "The exact diameter of the ball is 8.38 cm. Calculate the percentage error in the measurement of 8.4 cm, as shown on the digital caliper.", lines: 3, restate: "Percentage error",
          steps: [m`\[\varepsilon = \left|\frac{8.4 - 8.38}{8.38}\right| \times 100\% = 0.2386\ldots\%\]`],
          final: "0.239%",
          note: "Marks: (M1) substituting both 8.4 and 8.38 into the percentage error formula, (A1) 0.239.",
        },
      ],
    },

    // ───────────────────────── Q2 ─────────────────────────
    {
      n: 2,
      ref: "25N.1.SL.TZ1.5",
      instruction: "In this question, a financial app on the GDC must be used.",
      ctx: [
        "Mikko deposits $10 000 into a savings account with a fixed nominal annual interest rate of r% compounded monthly. At the end of each month, he deposits $800 into the account.",
        "After 10 years, the value in the savings account is $160 000.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the value of \(r\).`, lines: 4, restate: "Interest rate r",
          steps: [
            m`GDC: \(N = 120,\ PV = -10\,000,\ PMT = -800,\ FV = 160\,000,\ P/Y = C/Y = 12\), solve for \(I\%\).`,
            m`\[r = 7.148\ldots\]`,
          ],
          final: "7.15%",
          note: "Marks: (M1) attempt to use the financial app, (A1) all entries correct, (A1) 7.15. The compound interest formula earns no marks here.",
        },
        {
          l: "b", marks: 3, q: "Find the amount of interest earned over the 10 years.", lines: 3, restate: "Interest earned",
          steps: [
            m`\[160\,000 - 10\,000 - 96\,000 = 54\,000\]`,
          ],
          final: "$54 000",
          note: "Marks: (A1) 10 × 12 × 800 = 96 000 seen, (M1) subtracting 10 000 and the total payments from 160 000, (A1) 54 000.",
        },
      ],
    },

    // ───────────────────────── Q3 ─────────────────────────
    {
      n: 3,
      ref: "23N.1.SL.TZ1.2",
      ctx: [
        "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World. When it was built, 4500 years ago, its measurements were in Royal Egyptian Cubits (REC).",
        "Viktor reads online that 1 REC is equal to 0.52 metres, rounded to two decimal places.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Write down the upper and lower bounds of 1 REC in metres.", lines: 2, restate: "Bounds of 1 REC",
          steps: [m`Two decimal places, so the error is \(\pm 0.005\): \(0.515 \le 1\text{ REC} < 0.525\).`],
          final: "Upper bound 0.525 m, lower bound 0.515 m",
          note: "Marks: (A1) 0.525, (A1) 0.515. Interval notation or an inequality is accepted.",
        },
        {
          l: "b", marks: 4, q: "The Great Pyramid has a square base with side lengths of 440 REC and a height of 280 REC. Viktor assumes that these two measurements are exact and that the pyramid can be modelled as a square-based pyramid with smooth faces. Find the minimum possible volume of the pyramid in cubic metres.", lines: 5, restate: "Minimum volume",
          steps: [
            m`The volume is smallest when 1 REC takes its lower bound, 0.515 m.`,
            m`Base side \(= 440 \times 0.515 = 226.6\) m, height \(= 280 \times 0.515 = 144.2\) m.`,
            m`\[V = \tfrac{1}{3}(440 \times 0.515)^2(280 \times 0.515) = 2\,468\,106\ldots\]`,
            m`Method 2: \(\tfrac{1}{3}(440)^2(280) \times (0.515)^3\) gives the same value, since 1 cubic REC \(= 0.515^3\) m³.`,
          ],
          final: "2 470 000 m³ (2.47 × 10⁶ m³)",
          note: "Marks: (M1) converting to metres with the lower bound, (M1) using the pyramid volume formula, (A1) correct substitution, (A1) 2 470 000.",
        },
      ],
    },

    // ───────────────────────── Q4 ─────────────────────────
    {
      n: 4,
      ref: "25N.2.SL.TZ3.1",
      ctx: [
        "A marathon is a race over a distance of 42.19 km.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 1, q: "Write down 42.19 km correct to the nearest kilometre.", lines: 1, restate: "Nearest km",
          steps: [m`The first decimal digit is 1, so round down.`],
          final: "42 km",
          note: "Marks: (A1) 42.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the percentage error if 42.19 km is rounded to the nearest kilometre.", lines: 3, restate: "Percentage error",
          steps: [m`\[\varepsilon = \left|\frac{42 - 42.19}{42.19}\right| \times 100\% = 0.4503\ldots\%\]`],
          final: "0.450%",
          note: "Marks: (M1) correct substitution of the answer to (a)(i) into the percentage error formula, (A1) 0.450.",
        },
        {
          l: "b",
          ctx: "Rolando and Davi are training to run a marathon. They both start their training in the same week. Rolando runs 6 km in the first week, 8 km in the second week and 10 km in the third week. In each subsequent week he runs 2 km further than the previous week.", marks: 3, q: "Find the week during which Rolando runs 42 km.", lines: 3, restate: "Week of 42 km",
          steps: [
            m`Arithmetic sequence: \(u_1 = 6,\ d = 2\).`,
            m`\[42 = 6 + (n - 1) \times 2\]`,
            m`\[n = 19\]`,
          ],
          final: "Week 19",
          note: "Marks: (M1) substituting into the arithmetic sequence formula, (A1) 42 = 6 + (n − 1) × 2, (A1) 19. Listing the terms up to 42 also earns the marks.",
        },
        {
          l: "c", marks: 2, q: "Find the total distance that Rolando runs in the first 10 weeks.", lines: 3, restate: "Total, 10 weeks",
          steps: [m`\[S_{10} = \dfrac{10}{2}\big(2 \times 6 + (10 - 1) \times 2\big) = 150\]`],
          final: "150 km",
          note: "Marks: (A1) correct substitution into the arithmetic series formula, (A1) 150.",
        },
        {
          l: "d",
          ctx: "Davi runs 3 km in the first week. In each subsequent week he runs 20% further than the previous week. These distances form the terms of a geometric sequence.", marks: 4, q: "Find the first week during which Davi runs more than 42 km.", lines: 4, restate: "First week above 42 km",
          steps: [
            m`Geometric sequence: \(u_1 = 3,\ r = 1.2\), so \(u_n = 3(1.2)^{n-1}\).`,
            m`\[3(1.2)^{n-1} > 42 \quad\Rightarrow\quad n - 1 > 14.47\ldots\]`,
            m`Table check: week 15 gives 38.52 km (below 42), week 16 gives 46.22 km (above 42).`,
          ],
          final: "Week 16",
          note: "Marks: (A1) 3(1.2)^(n−1), (M1) comparing with 42, (A1) n = 15.47… or both crossover values 38.5175… and 46.2210…, (A1) 16.",
        },
        {
          l: "e", marks: 3, q: "Find the first week that the total distance that Davi has run, since the start of training, exceeds 150 km.", lines: 4, restate: "First week total above 150 km",
          steps: [
            m`\[\dfrac{3(1 - 1.2^n)}{1 - 1.2} > 150 \quad\Rightarrow\quad n > 13.15\ldots\]`,
            m`Table check: \(S_{13} = 145.59\ldots\) (below 150), \(S_{14} = 177.59\ldots\) (above 150).`,
          ],
          final: "Week 14",
          note: "Marks: (M1) substituting into the geometric series formula, (A1) 13.1520… or both crossover values seen, (A1) 14. Follow through the value of r from (d).",
        },
      ],
    },

    // ───────────────────────── Q5 ─────────────────────────
    {
      n: 5,
      ref: "23M.2.SL.TZ2.2",
      ctx: [
        "Daina makes pendulums to sell at a market. She plans to make 10 pendulums on the first day and, on each subsequent day, make 6 more than she did the day before.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: m`Calculate the number of pendulums she would make on the \(12^{\text{th}}\) day.`, lines: 3, restate: "Pendulums on day 12",
          steps: [
            m`Arithmetic sequence: \(u_1 = 10,\ d = 6\).`,
            m`\[u_{12} = 10 + (12 - 1) \times 6 = 76\]`,
          ],
          final: "76",
          note: "Marks: (M1) recognising an arithmetic sequence, (A1) 10 + (12 − 1) × 6, (A1) 76.",
        },
        {
          l: "b", marks: 2, q: "She plans to make pendulums for a total of 15 days in preparation for going to the market. Calculate the total number of pendulums she would have available at the market.", lines: 3, restate: "Total, 15 days",
          steps: [m`\[S_{15} = \dfrac{15}{2}\big(2 \times 10 + (15 - 1) \times 6\big) = 780\]`],
          final: "780",
          note: "Marks: (A1) correct substitution into an arithmetic series formula, (A1) 780.",
        },
        {
          l: "c", marks: 3, q: m`Daina would like to have at least 1000 pendulums available to sell at the market and therefore decides to increase her production. She still plans to make 10 pendulums on the first day, but on each subsequent day she will make \(x\) more than she did the day before. Given that she will still make pendulums for a total of 15 days, calculate the minimum integer value of \(x\) required for her to reach her target.`, lines: 4, restate: "Minimum integer x",
          steps: [
            m`\[\dfrac{15}{2}\big(2 \times 10 + (15 - 1)x\big) = 1000\]`,
            m`\[x = 8.095\ldots\]`,
            m`The target is "at least 1000", so round up to the next integer.`,
          ],
          final: "x = 9",
          note: "Marks: (M1) the series formula equated to 1000, (A1) 8.09523…, (A1) 9. Answering x = 8 with no working scores M0A0A0.",
        },
        {
          l: "d",
          ctx: "Daina tests one of her pendulums. She releases the ball at the end of the pendulum to swing freely. The diagram (not to scale) shows the ball at its initial position on the left side, and the extreme position on the right side. Daina begins recording the distances travelled by the ball after it has reached the extreme position. On each successive swing, the distance that the ball travelled was 95% of its previous distance. During the first swing that Daina recorded, the ball travelled 17.1 cm. During the second swing, it travelled 16.245 cm.", marks: 3, q: m`Calculate the distance that the ball travelled during the \(5^{\text{th}}\) recorded swing.`, lines: 3, restate: "Distance, swing 5",
          steps: [
            m`Geometric sequence: \(u_1 = 17.1,\ r = 0.95\).`,
            m`\[u_5 = 17.1 \times 0.95^{5-1} = 13.928\ldots\]`,
          ],
          final: "13.9 cm",
          note: "Marks: (M1) recognising a geometric sequence, (A1) 17.1 × 0.95^(5−1), (A1) 13.9.",
        },
        {
          l: "e", marks: 2, q: "Calculate the total distance that the ball travelled during the first 16 recorded swings.", lines: 3, restate: "Total, 16 swings",
          steps: [m`\[S_{16} = \dfrac{17.1(1 - 0.95^{16})}{1 - 0.95} = 191.47\ldots\]`],
          final: "191 cm",
          note: "Marks: (A1) correct substitution into the geometric series formula, (A1) 191.",
        },
        {
          l: "f", marks: 2, q: "Calculate the distance that the ball travelled before Daina started recording.", lines: 3, restate: "Distance before recording",
          steps: [
            m`The swing before the first recorded swing is \(u_0\): \(u_0 = 17.1 \div 0.95\), or \(17.1 \times 0.95^{0-1}\).`,
            m`\[u_0 = 18\]`,
          ],
          final: "18 cm",
          note: "Marks: (M1) a correct method to find u₀, (A1) 18. Using 0.05 or 1.05 scores M0A0.",
        },
      ],
    },

    // ───────────────────────── Q6 ─────────────────────────
    {
      n: 6,
      ref: "25M.2.SL.TZ1.2",
      instruction: "In this question, give all answers to the nearest dollar.",
      ctx: [
        "Anika invested 10 000 Canadian dollars (CAD) in an account which earns a nominal annual interest rate of 3.4%, compounded monthly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the value of Anika's investment after 6 years.", lines: 4, restate: "Value after 6 years",
          steps: [
            m`GDC: \(N = 72,\ I\% = 3.4,\ PV = -10\,000,\ P/Y = C/Y = 12\), solve for FV.`,
            m`Formula check: \(FV = 10\,000\left(1 + \dfrac{3.4}{100 \times 12}\right)^{6 \times 12} = 12\,259.44\ldots\)`,
          ],
          final: "12 259 CAD",
          note: "Marks: (M1) attempt to use the financial app (or the compound interest formula), (A1) all entries correct, (A1) 12 259.",
        },
        {
          l: "b", marks: 1, q: "Anika wants to purchase a house that costs 225 000 CAD. Anika uses the value obtained in part (a) to make an initial payment on the house and takes out a loan to pay the rest. Determine the amount of Anika's loan.", lines: 2, restate: "Loan amount",
          steps: [m`\[225\,000 - 12\,259 = 212\,741\]`],
          final: "212 741 CAD",
          note: "Marks: (A1) 212 741.",
        },
        {
          l: "c", marks: 5, q: "Anika amortizes her loan over 15 years. She arranges to make a loan payment at the end of each month. The nominal annual interest rate for the loan is 6.4%, compounded half-yearly. Determine Anika's monthly loan payment.", lines: 5, restate: "Monthly payment",
          steps: [
            m`GDC: \(N = 180,\ I\% = 6.4,\ PV = 212\,741,\ FV = 0,\ P/Y = 12,\ C/Y = 2\), solve for PMT.`,
            m`The payments are monthly (\(P/Y = 12\)) but the interest is compounded half-yearly (\(C/Y = 2\)).`,
          ],
          final: "1832 CAD",
          note: "Marks: (M1) attempt to use the financial app, (A1) N and I%, (A1) P/Y and C/Y, (A1) PV from (b) and FV = 0, (A1) 1832. Accept −1832. The compound interest formula earns no marks here.",
        },
        {
          l: "d", sub: "i", marks: 5, q: "After 2 complete years, Anika decides to increase her monthly loan payment to 2200 CAD. At the time, the remaining amount of the loan is 194 572 CAD. Calculate the amount by which the loan will decrease during the next 3 complete years.", lines: 5, restate: "Decrease in loan",
          steps: [
            m`GDC: \(N = 36,\ PV = 194\,572,\ PMT = -2200\), with the same \(I\%,\ P/Y,\ C/Y\) as in (c); solve for FV.`,
            m`\[FV = 148\,099\]`,
            m`\[194\,572 - 148\,099 = 46\,473\]`,
          ],
          final: "46 473 CAD",
          note: "Marks: (M1) adjusting N, PV or PMT, (A1) correct entries (PV and PMT of opposite signs), (A1) FV = 148 099, (A1) subtracting from 194 572, (A1) 46 473.",
        },
        {
          l: "d", sub: "ii", marks: 1, q: "Determine the total interest that Anika will pay over this 3-year period.", lines: 2, restate: "Interest over 3 years",
          steps: [
            m`Total paid: \(2200 \times 12 \times 3 = 79\,200\).`,
            m`\[79\,200 - 46\,473 = 32\,727\]`,
          ],
          final: "32 727 CAD",
          note: "Marks: (A1) 32 727 (the 79 200 may be seen as working).",
        },
      ],
    },

    // ───────────────────────── Q7 ─────────────────────────
    {
      n: 7,
      ref: "23N.2.SL.TZ1.4",
      ctx: [
        "Ruben wants to buy a car for a price of 285 000 South African rand (ZAR). He goes to a bank to get a loan to buy the car. To be eligible for the loan, Ruben must make an initial down payment equal to 25% of the price of the car.",
        "The bank offers him a 5-year loan for the remaining balance, with a 4.5% nominal interest rate per annum, compounded monthly. Ruben will pay the loan in fixed payments at the end of each month.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 2, q: "Find the original amount of the loan after the down payment is paid. Give the exact answer.", lines: 2, restate: "Loan amount",
          steps: [m`The loan is 75% of the price: \(285\,000 \times 0.75 = 213\,750\).`],
          final: "213 750 ZAR",
          note: "Marks: (M1) finding 25% or 75% of 285 000, (A1) 213 750. The answer must be exact.",
        },
        {
          l: "a", sub: "ii", marks: 3, q: "Calculate Ruben's monthly payment for this loan, to two decimal places.", lines: 4, restate: "Monthly payment",
          steps: [
            m`GDC: \(N = 60,\ I\% = 4.5,\ PV = 213\,750,\ FV = 0,\ P/Y = C/Y = 12\), solve for PMT.`,
            m`\[PMT = 3984.945\ldots\]`,
          ],
          final: "3984.95 ZAR",
          note: "Marks: (M1) attempt to use the financial app, (A1) all entries correct, (A1) 3984.95 (two decimal places).",
        },
        {
          l: "b", marks: 2, q: "Using your answer from part (a)(ii), calculate the total amount Ruben will pay over the life of the loan, to the nearest ZAR. Do not include the initial down payment.", lines: 3, restate: "Total repaid",
          steps: [m`\[3984.95 \times 60 = 239\,097\]`],
          final: "239 097 ZAR",
          note: "Marks: (M1) 3984.95 × 60, (A1) 239 097 (nearest rand).",
        },
        {
          l: "c", marks: 2, q: "Ruben would like to repay the loan faster and increases his payments such that he pays 4600 ZAR each month. Find the total number of monthly payments he will need to make to pay off the loan.", lines: 3, restate: "Number of payments",
          steps: [
            m`GDC: \(I\% = 4.5,\ PV = 213\,750,\ PMT = -4600,\ FV = 0,\ P/Y = C/Y = 12\), solve for \(N\).`,
            m`\[N = 51.15\ldots\]`,
            m`A part payment is still needed, so 52 payments.`,
          ],
          final: "52 payments",
          note: "Marks: (A1) PMT = −4600 with the other entries correct, (A1) 52.",
        },
        {
          l: "d", marks: 4, q: "This strategy will result in Ruben's final payment being less than 4600 ZAR. Determine the amount of Ruben's final payment, to two decimal places.", lines: 5, restate: "Final payment",
          steps: [
            m`Method 1: after 51 payments, \(N = 51\) gives \(FV = 704.156\ldots\) still owed.`,
            m`One more month of interest: \(704.156\ldots \times \left(1 + \dfrac{0.045}{12}\right) = 706.80\).`,
            m`Method 2: \(N = 52\) gives \(FV = 3893.20\ldots\) (an overpayment), so the final payment is \(4600 - 3893.20 = 706.80\).`,
          ],
          final: "706.80 ZAR",
          note: "Marks: (A1) N = 51 seen, (A1) FV = 704.156…, (M1) finding the interest in the final month, (A1) 706.80. Method 2: (A1) N = 52, (A1) 3893.20…, (A1) 4600 − 3893.20…, (A1) 706.80.",
        },
        {
          l: "e", marks: 3, q: "Hence, determine the total amount Ruben will save, to the nearest ZAR, by making the higher monthly payments.", lines: 4, restate: "Total saved",
          steps: [
            m`Total paid with the higher payments: \(51 \times 4600 + 706.80 = 235\,306.80\).`,
            m`\[239\,097 - 235\,306.80 = 3790.20\ldots\]`,
          ],
          final: "3790 ZAR",
          note: "Marks: (M1) 51 × 4600 + 706.80, (M1) subtracting from the answer to (b), (A1) 3790.",
        },
      ],
    },

    // ───────────────────────── Q8 ─────────────────────────
    {
      n: 8,
      ref: "23M.1.SL.TZ2.2",
      ctx: [
        "Angel has $520 in his savings account. Angel considers investing the money for 5 years with a bank. The bank offers an annual interest rate of 1.2% compounded quarterly.",
      ],
      parts: [
        {
          l: "a", marks: 3, q: "Calculate the amount of money Angel would have at the end of 5 years with the bank. Give your answer correct to two decimal places.", lines: 4, restate: "Value after 5 years",
          steps: [
            m`GDC: \(N = 5,\ I\% = 1.2,\ PV = -520,\ P/Y = 1,\ C/Y = 4\), solve for FV. Equivalent: \(N = 20,\ P/Y = C/Y = 4\).`,
            m`Formula check: \(FV = 520\left(1 + \dfrac{1.2}{100 \times 4}\right)^{5 \times 4} = 552.105\ldots\)`,
          ],
          final: "$552.11",
          note: "Marks: (M1) attempt to use the financial app or the formula, (A1) all entries correct, (A1) 552.11. At most M1A1A0 if not given to two decimal places.",
        },
        {
          l: "b", marks: 3, q: "Instead of investing the money, Angel decides to buy a phone that costs $520. At the end of 5 years, the phone will have a value of $30. It may be assumed that the depreciation rate per year is constant. Calculate the annual depreciation rate of the phone.", lines: 4, restate: "Depreciation rate",
          steps: [
            m`\[30 = 520\left(1 - \dfrac{r}{100}\right)^5\]`,
            m`\[1 - \dfrac{r}{100} = \left(\dfrac{30}{520}\right)^{1/5} = 0.5652\ldots \quad\Rightarrow\quad r = 43.477\ldots\]`,
            m`GDC: \(N = 5,\ PV = -520,\ FV = 30,\ P/Y = C/Y = 1\), solve for \(I\%\), gives \(-43.5\), a loss of value.`,
          ],
          final: "43.5%",
          note: "Marks: (M1) using the compound formula or the app, (A1) correct substitution and equating to 30, (A1) 43.5. A final answer of 56.5% scores M1A1A0.",
        },
      ],
    },

    // ───────────────────────── Q9 ─────────────────────────
    {
      n: 9,
      ref: "SPM.2.SL.TZ0.1",
      instruction: "In this question, give all answers to two decimal places.",
      ctx: [
        "Bryan decides to purchase a new car with a price of €14 000, but cannot afford the full amount. The car dealership offers two options to finance a loan.",
        "Finance option A: a 6 year loan at a nominal annual interest rate of 14% compounded quarterly. No deposit required and repayments are made each quarter.",
      ],
      parts: [
        {
          l: "a", sub: "i", marks: 3, q: "Find the repayment made each quarter.", lines: 4, restate: "Quarterly repayment",
          steps: [
            m`GDC: \(N = 24,\ I\% = 14,\ PV = -14\,000,\ FV = 0,\ P/Y = C/Y = 4\), solve for PMT.`,
            m`\[PMT = 871.819\ldots\]`,
          ],
          final: "€871.82",
          note: "Marks: (M1) attempt to use the financial app, (A1) all entries correct (PV = 14 000 accepted), (A1) 871.82.",
        },
        {
          l: "a", sub: "ii", marks: 2, q: "Find the total amount paid for the car.", lines: 2, restate: "Total paid, option A",
          steps: [m`\[4 \times 6 \times 871.82 = 20\,923.68\]`],
          final: "€20 923.68",
          note: "Marks: (M1) 4 × 6 × 871.82, (A1) 20 923.68.",
        },
        {
          l: "a", sub: "iii", marks: 2, q: "Find the interest paid on the loan.", lines: 2, restate: "Interest, option A",
          steps: [m`\[20\,923.68 - 14\,000 = 6923.68\]`],
          final: "€6923.68",
          note: "Marks: (M1) 20 923.68 − 14 000, (A1) 6923.68.",
        },
        {
          l: "b",
          ctx: m`Finance option B: a 6 year loan at a nominal annual interest rate of \(r\%\) compounded monthly. Terms of the loan require a 10% deposit and monthly repayments of €250.`, sub: "i", marks: 2, q: "Find the amount to be borrowed for this option.", lines: 2, restate: "Amount borrowed",
          steps: [m`\[0.9 \times 14\,000 = 12\,600\]`],
          final: "€12 600.00",
          note: "Marks: (M1) 0.9 × 14 000 (or 14 000 − 0.10 × 14 000), (A1) 12 600.00.",
        },
        {
          l: "b", sub: "ii", marks: 3, q: m`Find the annual interest rate, \(r\).`, lines: 4, restate: "Interest rate r",
          steps: [
            m`GDC: \(N = 72,\ PV = 12\,600,\ PMT = -250,\ FV = 0,\ P/Y = C/Y = 12\), solve for \(I\%\).`,
            m`\[r = 12.56\ldots\]`,
          ],
          final: "12.56%",
          note: "Marks: (M1) attempt to use the financial app, (A1) all entries correct (PV = −12 600 accepted if PMT = 250), (A1) 12.56.",
        },
        {
          l: "c", marks: 2, q: "State which option Bryan should choose. Justify your answer.", lines: 4, restate: "Choice of option",
          steps: [
            m`Option A: interest \(= 6923.68\). Option B: interest \(= 72 \times 250 - 12\,600 = 5400\).`,
            "Option B costs less in interest.",
          ],
          final: "Option B, because its interest cost (5400) is less than option A (6923.68). Option A is also accepted if justified by the absence of a deposit.",
          note: "Marks: (A1) a choice that follows from the reason, (R1) the reason. Option A: no deposit is required. Option B: a correct comparison of costs. Do not award R0A1.",
        },
        {
          l: "d", marks: 3, q: "Bryan's car depreciates at an annual rate of 25% per year. Find the value of Bryan's car six years after it is purchased.", lines: 3, restate: "Value after 6 years",
          steps: [
            m`\[14\,000\left(1 - \dfrac{25}{100}\right)^6 = 2491.70\ldots\]`,
            m`GDC: \(N = 6,\ I\% = -25,\ PV = \pm 14\,000,\ P/Y = C/Y = 1\), solve for FV.`,
          ],
          final: "€2491.70",
          note: "Marks: (M1) substituting into the compound interest formula with a decrease, (A1) correct substitution, (A1) 2491.70.",
        },
      ],
    },
  ],
};

export default paper;
