import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 24: Probability (AI Unit 4, booklet 4.5 and 4.6).
const paper: AiReviewPaper = {
  slug: "probability",
  session: 24,
  topic: "Probability Rules",
  title: "Probability Rules",
  subtitle: "Summative Revision, Session 24",
  minutes: 28,
  lessonAnchor: "probability",
  lessonHref: "/ai/unit-4/lesson",
  questions: [
    {
      n: 1, section: "A",
      instruction: "In this question, give decimal answers correct to three significant figures.",
      ctx: [m`Of \(60\) students, \(28\) study French (\(F\)), \(22\) study Spanish (\(S\)) and \(8\) study both.`],
      parts: [
        part("a", 1, m`Find \(P(F)\).`, [m`\[P(F) = \dfrac{n(F)}{n(U)} = \dfrac{28}{60} = 0.467\]`], "0.467", "Marks: (A1) 0.467."),
        part("b", 2, m`Find \(P(F \cup S)\).`, [m`\[P(F \cup S) = \dfrac{28 + 22 - 8}{60} = 0.7\]`], "0.7", "Marks: (M1) subtract the overlap, (A1) 0.7."),
        part("c", 1, m`Find the probability that a student studies neither language.`, [m`\[1 - 0.7 = 0.3\]`], "0.3", "Marks: (A1) 0.3."),
        part("d", 2, m`Find \(P(S \mid F)\).`, [m`\[P(S \mid F) = \dfrac{P(S \cap F)}{P(F)} = \dfrac{8}{28} = 0.286\]`], "0.286", "Marks: (M1) conditional formula, (A1) 0.286."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`Events \(A\) and \(B\) are independent, with \(P(A) = 0.6\) and \(P(B) = 0.25\).`],
      parts: [
        part("a", 2, m`Find \(P(A \cap B)\).`, [m`\[P(A \cap B) = P(A)P(B) = 0.6 \times 0.25 = 0.15\]`], "0.15", "Marks: (M1) product, (A1) 0.15."),
        part("b", 2, m`Find \(P(A \cup B)\).`, [m`\[0.6 + 0.25 - 0.15 = 0.7\]`], "0.7", "Marks: (M1) union formula, (A1) 0.7."),
        part("c", 2, m`Find \(P(A' \cap B)\).`, [m`\[A' \text{ and } B \text{ are independent: } 0.4 \times 0.25 = 0.1\]`], "0.1", "Marks: (M1) P(A') = 0.4, (A1) 0.1."),
      ],
    },
    {
      n: 3, section: "B",
      instruction: "In this question, give decimal answers correct to three significant figures.",
      ctx: [m`The probability of rain on a given morning is \(0.3\). If it rains, the probability that Sam is late for school is \(0.4\). If it does not rain, the probability that Sam is late is \(0.1\).`],
      parts: [
        part("a", 2, m`Find the probability that it rains and Sam is late.`, [m`\[0.3 \times 0.4 = 0.12\]`], "0.12", "Marks: (M1) multiply along the branch, (A1) 0.12."),
        part("b", 3, m`Show that the probability that Sam is late is \(0.19\).`, [m`\[P(\text{late}) = 0.3(0.4) + 0.7(0.1) = 0.12 + 0.07 = 0.19\]`], "Shown", "Marks: (M1) rain branch, (M1) no-rain branch, (AG) 0.19."),
        part("c", 3, m`Sam is late. Find the probability that it rained.`, [m`\[P(R \mid L) = \dfrac{P(R \cap L)}{P(L)} = \dfrac{0.12}{0.19} = 0.632\]`], "0.632", "Marks: (M1) conditional formula, (A1) 0.12 over 0.19, (A1) 0.632."),
        part("d", 2, m`Determine whether rain and being late are independent. Justify your answer.`, [m`\[P(L \mid R) = 0.4 \ne P(L) = 0.19\]`], "Not independent: P(L | R) differs from P(L)", "Marks: (M1) compare, (R1) conclusion."),
      ],
    },
  ],
};

export default paper;
