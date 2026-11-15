import type { Metadata } from "next";
import { Fragment, Suspense } from "react";
import ResourceRow from "@/components/materials/ResourceRow";
import MaterialsFilter from "@/components/materials/MaterialsFilter";
import { RESOURCE_KIND_ORDER, listCourses, listResources } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Practice and papers",
  description:
    "Topic exercises, worksheets, tests, exam-style questions, revision papers and mock exams, with marks, time and answers shown for each.",
};

/** Lessons and formula sheets have their own entry points (course pages, /reference). */
const EXCLUDED = new Set(["lesson", "formula-sheet", "reference"]);

export default function PracticeHub() {
  const all = listResources().filter((r) => r.status === "available");
  const groups = RESOURCE_KIND_ORDER.filter(({ kind }) => !EXCLUDED.has(kind))
    .map(({ kind, heading }) => ({
      kind,
      heading,
      rows: all
        .filter((r) => r.kind === kind)
        .sort((a, b) => a.courseId.localeCompare(b.courseId) || (a.unitId ?? "").localeCompare(b.unitId ?? "", undefined, { numeric: true }))
        .map((r) => ({ id: r.id, courseId: r.courseId, node: <ResourceRow r={r} showCourse showKind={false} /> })),
    }))
    .filter((g) => g.rows.length > 0);
  const courses = listCourses()
    .filter((c) => all.some((r) => r.courseId === c.id && !EXCLUDED.has(r.kind)))
    .map((c) => ({ id: c.id, name: c.title }));

  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Practice and papers</h1>
          <p className="mt-2 text-ink-muted max-w-[68ch]">
            Each item shows its size, time, calculator rule and whether answers are included. Topic exercises are
            interactive: enter answers, finish, then unlock the model answers.
          </p>
        </div>
      </header>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <Suspense
          fallback={groups.map((g) => (
            <section key={g.kind} className="mt-8">
              <h2 className="text-lg font-semibold text-ink border-b border-line pb-2">{g.heading}</h2>
              <ul>{g.rows.map((r) => <Fragment key={r.id}>{r.node}</Fragment>)}</ul>
            </section>
          ))}
        >
          <MaterialsFilter groups={groups} courses={courses} />
        </Suspense>
      </div>
    </main>
  );
}
