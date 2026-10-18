import type { AiReviewPaper } from "./types";

const m = String.raw;

// ═══════════════════════════════════════════════════════════════════════════════
// Session 2 — Geometric Sequences & Series
// ═══════════════════════════════════════════════════════════════════════════════

const paper: AiReviewPaper = {
  slug: "geometric",
  session: 2,
  topic: "Geometric Sequences & Series",
  title: "Geometric Sequences and Series",
  subtitle: "Summative Revision — Session 2",
  minutes: 50,
  lessonAnchor: "geometric",
  questions: [
    {
      n: 1,
      ctx: [m`The first three terms of a geometric sequence are \(5,\ 15,\ 45,\ \dots\)`],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the common ratio.", lines: 1, restate: "Common ratio",
          steps: [m`\[r = \dfrac{15}{5} = 3\]`],
          final: "r = 3",
        },
        {
          l: "b", marks: 2, q: m`Find the 8th term, \(u_8\).`, restate: "8th term",
          steps: [m`\[u_n = u_1 r^{\,n-1} \;\Rightarrow\; u_8 = 5(3)^7 = 5 \times 2187 = 10\,935\]`],
          final: "u₈ = 10 935",
        },
        {
          l: "c", marks: 3, q: "Find the first term of the sequence that is greater than 1 000 000.", lines: 4, restate: "First term above 10⁶",
          steps: [
            m`\[5(3)^{n-1} > 1\,000\,000 \;\Rightarrow\; 3^{n-1} > 200\,000\]`,
            "Use the GDC (table or solver) — or take logarithms:",
            m`\[n - 1 > \dfrac{\ln 200\,000}{\ln 3} = 11.1 \;\Rightarrow\; n - 1 = 12 \;\Rightarrow\; n = 13\]`,
            m`\[u_{13} = 5(3)^{12} = 2\,657\,205\]`,
          ],
          final: "u₁₃ = 2 657 205",
          note: "Check: u₁₂ = 885 735 is below 1 000 000, so u₁₃ is the first term above it.",
        },
      ],
    },
    {
      n: 2,
      ctx: [m`A geometric sequence has \(u_2 = 12\) and \(u_5 = 96\).`],
      parts: [
        {
          l: "a", marks: 3, q: m`Find the common ratio \(r\) and the first term \(u_1\).`, restate: "r and u₁",
          steps: [
            m`\[\dfrac{u_5}{u_2} = r^3 = \dfrac{96}{12} = 8 \;\Rightarrow\; r = 2\]`,
            m`\[u_1 = \dfrac{u_2}{r} = \dfrac{12}{2} = 6\]`,
          ],
          final: "r = 2, u₁ = 6",
        },
        {
          l: "b", marks: 2, q: m`Find \(S_{10}\).`, restate: "S₁₀",
          steps: [
            m`\[S_n = \dfrac{u_1(r^n - 1)}{r - 1} \;\Rightarrow\; S_{10} = \dfrac{6(2^{10} - 1)}{2 - 1} = 6 \times 1023 = 6138\]`,
          ],
          final: "S₁₀ = 6138",
        },
        {
          l: "c", marks: 2, q: m`Find the least \(n\) for which \(S_n > 10\,000\).`, restate: "Least n",
          steps: [
            m`\[6(2^n - 1) > 10\,000 \;\Rightarrow\; 2^n > 1667.7\]`,
            m`\[2^{10} = 1024 \;(\text{too small}), \qquad 2^{11} = 2048 \;\checkmark\]`,
          ],
          final: "n = 11",
        },
      ],
    },
    {
      n: 3,
      ctx: [
        "A ball is dropped from a height of 3.0 m. After each bounce it rises to 80% of the height of the previous bounce.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the height reached after the 4th bounce, to 3 significant figures.", restate: "Height after bounce 4",
          steps: [
            m`The heights after each bounce form a geometric sequence with \(r = 0.8\).`,
            m`\[3.0 \times 0.8^4 = 1.2288 \approx 1.23\ \text{m}\]`,
          ],
          final: "1.23 m",
        },
        {
          l: "b", marks: 3, q: "After which bounce does the ball first rise to a height of less than 0.5 m?", lines: 4, restate: "First bounce below 0.5 m",
          steps: [
            m`\[3(0.8)^n < 0.5 \;\Rightarrow\; 0.8^n < 0.1667\]`,
            m`\[n > \dfrac{\ln(0.1667)}{\ln(0.8)} = 8.03 \;\Rightarrow\; n = 9\]`,
          ],
          final: "After the 9th bounce",
          note: "Check: after bounce 8 the height is 0.503 m (still above 0.5); after bounce 9 it is 0.403 m.",
        },
        {
          l: "c", marks: 3, q: "Find the sum of the heights reached after the first 6 bounces.", restate: "Sum of 6 bounce heights",
          steps: [
            m`First bounce height \(u_1 = 3(0.8) = 2.4\), \(r = 0.8\), \(n = 6\):`,
            m`\[S_6 = \dfrac{2.4\left(1 - 0.8^6\right)}{1 - 0.8} = \dfrac{2.4(0.737856)}{0.2} = 8.854\ldots\]`,
          ],
          final: "≈ 8.85 m",
        },
      ],
    },
    {
      n: 4,
      ctx: ["A culture starts with 500 bacteria. The population grows by 12% every hour."],
      parts: [
        {
          l: "a", marks: 1, q: "Write down the common ratio of this geometric sequence.", lines: 1, restate: "Common ratio",
          steps: [m`\[r = 1 + \dfrac{12}{100} = 1.12\]`],
          final: "r = 1.12",
        },
        {
          l: "b", marks: 2, q: "Find the number of bacteria after 6 hours, to the nearest whole number.", restate: "After 6 hours",
          steps: [m`\[500(1.12)^6 = 986.91\ldots\]`],
          final: "987 bacteria",
        },
        {
          l: "c", marks: 3, q: "After how many whole hours does the population first exceed 2000?", lines: 4, restate: "First hour above 2000",
          steps: [
            m`\[500(1.12)^n > 2000 \;\Rightarrow\; 1.12^n > 4\]`,
            m`\[n > \dfrac{\ln 4}{\ln 1.12} = 12.23\]`,
            m`\[n = 13 \quad (500 \times 1.12^{13} = 2182)\]`,
          ],
          final: "13 hours",
        },
      ],
    },
    {
      n: 5,
      ctx: [m`The sequence \(4,\ 6,\ 9,\ \dots\) is geometric.`],
      parts: [
        {
          l: "a", marks: 2, q: "Show that the sequence is geometric and find its common ratio.", restate: "Common ratio",
          steps: [m`\[\dfrac{6}{4} = 1.5 \qquad \dfrac{9}{6} = 1.5\]`, "Equal ratios, so the sequence is geometric with r = 1.5."],
          final: "r = 1.5",
        },
        {
          l: "b", marks: 2, q: m`Find \(u_6\).`, restate: "6th term",
          steps: [m`\[u_6 = 4(1.5)^5 = 30.375\]`],
          final: "u₆ = 30.375",
        },
        {
          l: "c", marks: 2, q: m`Find \(S_8\), to 3 significant figures.`, restate: "S₈",
          steps: [m`\[S_8 = \dfrac{4\left(1.5^8 - 1\right)}{1.5 - 1} = 8(24.6289) = 197.03\ldots\]`],
          final: "S₈ ≈ 197",
        },
      ],
    },
    {
      n: 6,
      ctx: [
        "A company offers a temporary worker two ways to be paid over 14 days.",
        "Option A: $50 on day 1, then $5 more each day than the day before. Option B: $2 on day 1, then double the previous day's pay each day.",
      ],
      parts: [
        {
          l: "a", marks: 2, q: "Find the total paid under Option A over 14 days.", restate: "Option A total",
          steps: [m`\[S_{14} = \dfrac{14}{2}\left(2(50) + 13(5)\right) = 7(165) = 1155\]`],
          final: "$1,155",
        },
        {
          l: "b", marks: 2, q: "Find the total paid under Option B over 14 days.", restate: "Option B total",
          steps: [m`\[S_{14} = \dfrac{2\left(2^{14} - 1\right)}{2 - 1} = 2(16\,383) = 32\,766\]`],
          final: "$32,766",
        },
        {
          l: "c", marks: 2, q: "On which day does Option B's daily pay first exceed Option A's daily pay?", lines: 4, restate: "Crossover day",
          steps: [
            m`Day \(n\): A pays \(45 + 5n\), B pays \(2^n\).`,
            m`\[n = 6:\; 64 < 75 \qquad n = 7:\; 128 > 80\]`,
          ],
          final: "Day 7",
        },
      ],
    },
  ],
};

export default paper;
