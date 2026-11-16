// AIA tests rendered with the shared review-paper renderer (src/components/review/DataPaper.tsx).
// Add a test: write a paper file here, add it to `aiaTests` with its course id. The catalog entry in
// src/content/aia/index.ts is built from this list.
import type { AiReviewPaper } from "@/lib/ai-review-papers/types";
import g6Test1 from "./g6Test1";
import g9Test1 from "./g9Test1";

export type AiaTest = { courseId: string; addedOn: string; calculator: boolean; paper: AiReviewPaper };

export const aiaTests: AiaTest[] = [
  { courseId: "aia-g6-math", addedOn: "2026-11-16", calculator: false, paper: g6Test1 },
  { courseId: "aia-g9-math", addedOn: "2026-11-16", calculator: true, paper: g9Test1 },
];

export const getAiaTest = (slug: string) => aiaTests.find((t) => t.paper.slug === slug)?.paper;
