// Types and helpers for the AI SL summative revision papers.
// Text conventions (see RichText in DataPaper.tsx): \( ... \) inline KaTeX, \[ ... \] block KaTeX (whole string).
// Plain "$" is a dollar sign. `final` strings are plain text (no LaTeX).

export type ReviewPart = {
  /** Part letter, or "•" for an unlettered question */
  l: string;
  /** Roman sub-part, e.g. "i" for (a)(i). Omit when the part has no sub-parts. */
  sub?: string;
  marks: number;
  /** Question statement */
  q: string;
  /** Optional context shown immediately above this part */
  ctx?: string;
  /** Ruled working lines (default 3) */
  lines?: number;
  /** Short label on the answer card */
  restate?: string;
  /** Worked solution — text, or a whole-string \[ ... \] block */
  steps: string[];
  /** Plain-text final answer */
  final: string;
  note?: string;
};

export type ReviewTable = {
  /** Header cells, then rows; cells accept \( \) inline math */
  head: string[];
  rows: string[][];
};

export type ReviewFigure = {
  /** Path under /public, e.g. "/review/set1-q2-bouncing-ball.svg" */
  src: string;
  alt: string;
  /** Natural size of the exported asset, in px */
  width: number;
  height: number;
};

export type ReviewQuestion = {
  n: number;
  /** IB paper section; a section heading is shown when it changes between questions */
  section?: "A" | "B";
  /** Bold lead-in line, e.g. "In this question, give all answers to two decimal places." */
  instruction?: string;
  /** Diagram shown after the context and before the table */
  figure?: ReviewFigure;
  /** Table shown after the context, e.g. the values in a data table */
  table?: ReviewTable;
  /** Context shown before the first part */
  ctx?: string[];
  parts: ReviewPart[];
};

export type AiReviewPaper = {
  slug: string;
  /** Revision session number (1-based) */
  session: number;
  topic: string;
  title: string;
  subtitle: string;
  minutes: number;
  /** Lesson anchor on /ai/unit-1/lesson */
  lessonAnchor: string;
  /** Credit line for questions adapted from another author; shown above the exercise and in the PDF export */
  source?: string;
  questions: ReviewQuestion[];
};

export const paperMarks = (p: AiReviewPaper) =>
  p.questions.reduce((s, q) => s + q.parts.reduce((t, x) => t + x.marks, 0), 0);

export const questionMarks = (q: ReviewQuestion) =>
  q.parts.reduce((t, x) => t + x.marks, 0);

