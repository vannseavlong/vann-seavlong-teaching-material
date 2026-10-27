import type { AiReviewPaper } from "./types";
import { part } from "./build";

const m = String.raw;

// Session 23: Data and measures of centre and spread (AI Unit 4, booklet 4.2 and 4.3).
const paper: AiReviewPaper = {
  slug: "data-measures",
  session: 23,
  topic: "Data, Mean and Interquartile Range",
  title: "Data, Mean and Interquartile Range",
  subtitle: "Summative Revision, Session 23",
  minutes: 30,
  lessonAnchor: "measures",
  lessonHref: "/ai/unit-4/lesson",
  questions: [
    {
      n: 1, section: "A",
      instruction: "In this question, give the mean correct to three significant figures.",
      ctx: [m`A librarian records the number of books borrowed by \(30\) members in one month.`],
      table: { head: ["Books, \\(x\\)", "0", "1", "2", "3", "4"], rows: [["Frequency, \\(f\\)", "5", "8", "10", "4", "3"]] },
      parts: [
        part("a", 3, m`Find the mean number of books borrowed.`, [m`\[\sum fx = 0 + 8 + 20 + 12 + 12 = 52,\quad \bar{x} = \dfrac{52}{30} = 1.73\]`], "1.73", "Marks: (M1) sum of fx, (M1) divide by n = 30, (A1) 1.73."),
        part("b", 1, m`Write down the median.`, [m`\[\text{15th and 16th values are both } 2\]`], "2", "Marks: (A1) 2."),
        part("c", 2, m`Find the interquartile range.`, [m`\[Q_1 = 1,\quad Q_3 = 2,\quad \text{IQR} = 2 - 1 = 1\]`], "1", "Marks: (M1) Q1 and Q3, (A1) 1."),
      ],
    },
    {
      n: 2, section: "A",
      ctx: [m`The ages of eight club members are \(12, 15, 17, 18, 20, 22, 25, 60\).`],
      parts: [
        part("a", 2, m`Find \(Q_1\) and \(Q_3\).`, [m`\[Q_1 = \dfrac{15 + 17}{2} = 16,\quad Q_3 = \dfrac{22 + 25}{2} = 23.5\]`], "Q1 = 16, Q3 = 23.5", "Marks: (A1) Q1, (A1) Q3."),
        part("b", 1, m`Find the interquartile range.`, [m`\[23.5 - 16 = 7.5\]`], "7.5", "Marks: (A1) 7.5."),
        part("c", 2, m`Show that \(60\) is an outlier, using \(Q_3 + 1.5 \times \text{IQR}\).`, [m`\[23.5 + 1.5(7.5) = 34.75 \quad\text{and}\quad 60 > 34.75\]`], "34.75 < 60, so 60 is an outlier", "Marks: (M1) upper fence, (R1) comparison."),
        part("d", 2, m`The mean is \(23.6\) with 60 and \(18.4\) without it. State which measure of centre is affected more by 60, and why.`, [m`\[\text{The mean is pulled up by the outlier; the median hardly changes.}\]`], "The mean, because it uses every value", "Marks: (A1) mean, (R1) reason."),
      ],
    },
    {
      n: 3, section: "B",
      ctx: [m`The times \(t\) minutes that \(30\) students spend on homework are grouped in a table.`],
      table: { head: ["Time \\(t\\) (minutes)", "0 ≤ t < 10", "10 ≤ t < 20", "20 ≤ t < 30", "30 ≤ t < 40"], rows: [["Frequency", "4", "9", "12", "5"]] },
      parts: [
        part("a", 2, m`Write down the midpoint of each class.`, [m`\[5,\ 15,\ 25,\ 35\]`], "5, 15, 25, 35", "Marks: (A2) all four correct (A1 for two or three)."),
        part("b", 3, m`Estimate the mean time using the midpoints.`, [m`\[\sum fx = 4(5) + 9(15) + 12(25) + 5(35) = 630\]`, m`\[\bar{x} = \dfrac{630}{30} = 21\ \text{minutes}\]`], "21 minutes", "Marks: (M1) midpoints with frequencies, (M1) divide by 30, (A1) 21."),
        part("c", 2, m`Write down the class that contains the median, and justify your answer.`, [m`\[\text{Cumulative frequency: } 4,\ 13,\ 25,\ 30\]`, m`\[\text{The 15th and 16th values lie in the third class.}\]`], "20 ≤ t < 30", "Marks: (M1) cumulative frequencies, (A1) class."),
        part("d", 1, m`Explain why the answer to part (b) is only an estimate.`, [m`\[\text{The exact times in each class are not known, so the midpoint is used.}\]`], "Exact values are not known", "Marks: (R1) reason."),
      ],
    },
  ],
};

export default paper;
