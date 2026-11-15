import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoursePage from "@/components/course/CoursePage";
import { courseContext, courses, getCourse } from "@/lib/catalog";

/** Courses with their own page elsewhere (IB AA at /aa) redirect there via next.config.ts. */
const generic = () => courses.filter((c) => c.href === `/courses/${c.id}`);

export function generateStaticParams() {
  return generic().map((c) => ({ course: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params;
  const c = getCourse(course);
  if (!c) return { title: "Course not found" };
  return { title: `${c.title} (${courseContext(c)})`, description: c.description };
}

export default async function GenericCoursePage({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const c = getCourse(course);
  if (!c || c.href !== `/courses/${c.id}`) notFound();
  return <CoursePage courseId={c.id} />;
}
