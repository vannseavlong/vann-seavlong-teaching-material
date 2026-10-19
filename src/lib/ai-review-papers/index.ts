import type { AiReviewPaper } from "./types";
export * from "./types";
import arithmetic from "./arithmetic";
import geometric from "./geometric";
import financial from "./financial";
import financial2 from "./financial2";
import rounding from "./rounding";
import bounds from "./bounds";
import percentageError from "./percentageError";
import mock from "./mock";

export const aiReviewPapers: AiReviewPaper[] = [
  arithmetic,
  geometric,
  financial,
  financial2,
  rounding,
  bounds,
  percentageError,
  mock,
];

export const getAiReviewPaper = (slug: string) =>
  aiReviewPapers.find((p) => p.slug === slug);
