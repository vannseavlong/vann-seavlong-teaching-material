import type { Metadata } from "next";
import { Fragment, Suspense } from "react";
import CourseRow from "@/components/course/CourseRow";
import BrowseFilters from "@/components/course/BrowseFilters";
import { curricula, levels, listCourses, subjects } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Browse courses",
  description: "All courses by curriculum, grade and subject: IB DP Mathematics AA and AI, AIA Mathematics and other materials.",
};

export default function BrowsePage() {
  const all = listCourses();
  const rows = all.map((c) => ({
    id: c.id,
    curriculumId: c.curriculumId,
    levelIds: c.levelIds,
    subjectId: c.subjectId,
    node: <CourseRow course={c} />,
  }));
  const usedSubjects = subjects.filter((s) => all.some((c) => c.subjectId === s.id));
  const options = {
    curricula: curricula.map((c) => ({ id: c.id, name: c.name })),
    levels: levels.map((l) => ({ id: l.id, name: l.name, curriculumId: l.curriculumId })),
    subjects: usedSubjects.map((s) => ({ id: s.id, name: s.name })),
  };

  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Browse courses</h1>
          <p className="mt-2 text-ink-muted">Pick your curriculum and grade to see your course.</p>
        </div>
      </header>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <Suspense fallback={<ul>{rows.map((r) => <Fragment key={r.id}>{r.node}</Fragment>)}</ul>}>
          <BrowseFilters rows={rows} options={options} />
        </Suspense>
      </div>
    </main>
  );
}
