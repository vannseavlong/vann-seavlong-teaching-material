import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeClient from "./PracticeClient";

// ─── Supported practice IDs (id = topic order in the lesson) ──────────────────

const TITLES: Record<string, string> = {
  "2": "Financial Mathematics",
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const title = TITLES[id];
  if (!title) return { title: "Practice Not Found" };

  return {
    title: `Unit 1: ${title} — Practice Problems | IB Mathematics AI`,
    description: `Practice problems for AI Unit 1: ${title}. Enter your answers, get a reveal key, and compare with worked solutions.`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PracticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!TITLES[id]) {
    notFound();
  }

  return <PracticeClient id={id} />;
}

export function generateStaticParams() {
  return [{ id: "2" }];
}
