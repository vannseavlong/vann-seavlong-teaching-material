import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeClient from "./PracticeClient";
import { PRACTICE_DATA } from "./practiceData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const title = PRACTICE_DATA[id]?.title;
  if (!title) return { title: "Practice Not Found" };

  return {
    title: `Unit 3: ${title} Practice Problems | IB Mathematics AI`,
    description: `Practice problems for AI Unit 3: ${title}. Enter your answers, get a reveal key, and compare with worked solutions.`,
  };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!PRACTICE_DATA[id]) {
    notFound();
  }

  // Keyed on id so answers reset when the student switches topic.
  return <PracticeClient key={id} id={id} />;
}

export function generateStaticParams() {
  return Object.keys(PRACTICE_DATA).map((id) => ({ id }));
}
