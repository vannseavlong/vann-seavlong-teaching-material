import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeClient from "./PracticeClient";

// ─── Supported practice IDs ───────────────────────────────────────────────────

const TITLES: Record<string, string> = {
  "1": "Laws of Indices",
  "2": "Surds",
  "3": "Quadratic Equations",
  "4": "Chemistry G10 — NaHCO₃ Experiment",
  "5": "Sequences & Patterns",
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
    title: `Unit 1: ${title} — Practice Problems | IB Mathematics AA`,
    description: `Practice problems for AA Unit 1: ${title}. Enter your answers, get a reveal key, and compare with model solutions.`,
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

// ─── Static params (only ids 1–3 are built) ───────────────────────────────────

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}
