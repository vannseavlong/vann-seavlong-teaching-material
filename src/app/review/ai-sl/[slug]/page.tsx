import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DataPaper from "@/components/review/DataPaper";
import { aiReviewPapers, getAiReviewPaper } from "@/lib/ai-review-papers";

export function generateStaticParams() {
  return aiReviewPapers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = getAiReviewPaper(slug);
  if (!paper) return { title: "Review Paper Not Found" };
  return {
    title: `${paper.title} — ${paper.subtitle} | IB Mathematics AI`,
    description: `AI SL summative assessment revision: ${paper.topic}. Exercise paper with a full worked answer sheet, exportable as PDF.`,
  };
}

export default async function AiReviewPaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getAiReviewPaper(slug);
  if (!paper) notFound();
  return <DataPaper paper={paper} />;
}
