import type { ReviewPart } from "./types";

/** Short constructor for a paper part; keeps the data files compact. */
export const part = (
  l: string,
  marks: number,
  q: string,
  steps: string[],
  final: string,
  note: string,
  restate?: string,
  lines = 3,
): ReviewPart => ({ l, marks, q, steps, final, note, restate, lines });
