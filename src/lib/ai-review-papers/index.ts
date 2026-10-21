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
import sequencesMixed from "./sequencesMixed";
import bounds2 from "./bounds2";
import bounds3 from "./bounds3";
import sequencesFinanceChain from "./sequencesFinanceChain";

export const aiReviewPapers: AiReviewPaper[] = [
  arithmetic,
  geometric,
  financial,
  financial2,
  rounding,
  bounds,
  percentageError,
  mock,
  sequencesMixed,
  bounds2,
  bounds3,
  sequencesFinanceChain,
];

export const getAiReviewPaper = (slug: string) =>
  aiReviewPapers.find((p) => p.slug === slug);
