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
import sequencesFinanceChain2 from "./sequencesFinanceChain2";
import sequencesFinanceChain3 from "./sequencesFinanceChain3";
import pastPaperPractice2 from "./pastPaperPractice2";
import trigonometry from "./trigonometry";
import arcSector from "./arcSector";
import trig3d from "./trig3d";
import geometricLog from "./geometricLog";
import linearQuadratic from "./linearQuadratic";
import exponentialModels from "./exponentialModels";
import linesVoronoi from "./linesVoronoi";
import solidsMeasure from "./solidsMeasure";
import dataMeasures from "./dataMeasures";
import probabilityPaper from "./probabilityPaper";
import distributionsPaper from "./distributionsPaper";
import derivativeTangent from "./derivativeTangent";
import integrationArea from "./integrationArea";
import trigContext from "./trigContext";
import unit3Mixed from "./unit3Mixed";
import graphTheory from "./graphTheory";
import vectors3d from "./vectors3d";

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
  sequencesFinanceChain2,
  sequencesFinanceChain3,
  pastPaperPractice2,
  trigonometry,
  arcSector,
  trig3d,
  geometricLog,
  linearQuadratic,
  exponentialModels,
  linesVoronoi,
  solidsMeasure,
  dataMeasures,
  probabilityPaper,
  distributionsPaper,
  derivativeTangent,
  integrationArea,
  trigContext,
  unit3Mixed,
  graphTheory,
  vectors3d,
];

export const getAiReviewPaper = (slug: string) =>
  aiReviewPapers.find((p) => p.slug === slug);
