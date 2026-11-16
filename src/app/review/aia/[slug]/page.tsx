import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DataPaper from "@/components/review/DataPaper";
import { aiaTests, getAiaTest } from "@/lib/aia-tests";

export function generateStaticParams() {
  return aiaTests.map((t) => ({ slug: t.paper.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = getAiaTest(slug);
  if (!paper) return { title: "Test Not Found" };
  return {
    title: `${paper.title} | AIA Mathematics`,
    description: `${paper.title}: ${paper.topic}. Printable test with a full worked answer sheet, exportable as PDF.`,
  };
}

export default async function AiaTestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getAiaTest(slug);
  if (!paper) notFound();
  return <DataPaper paper={paper} />;
}
