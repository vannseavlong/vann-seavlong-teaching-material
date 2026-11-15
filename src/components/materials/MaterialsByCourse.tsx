import { getCourse, getUnit, listCourses, type Resource } from "@/lib/catalog";
import ResourceRow from "./ResourceRow";

/** Resources grouped under course, then unit headings (used by /worksheets and /review). */
export default function MaterialsByCourse({ items }: { items: Resource[] }) {
  // Catalog course order (curriculum, then level), not data order.
  const courseIds = listCourses().map((c) => c.id).filter((id) => items.some((r) => r.courseId === id));
  return (
    <>
      {courseIds.map((cid) => {
        const course = getCourse(cid)!;
        const mine = items.filter((r) => r.courseId === cid);
        const unitIds = [...new Set(mine.map((r) => r.unitId ?? ""))].sort((a, b) =>
          a.localeCompare(b, undefined, { numeric: true })
        );
        return (
          <section key={cid} className="mt-8">
            <h2 className="text-lg font-semibold text-ink border-b border-line pb-2">{course.title}</h2>
            {unitIds.map((uid) => {
              const unit = getUnit(course, uid || undefined);
              const rows = mine.filter((r) => (r.unitId ?? "") === uid);
              return (
                <div key={uid || "none"} className="mt-3">
                  {unit && (
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                      {course.unitLabel ?? "Unit"} {unit.number}: {unit.title}
                    </h3>
                  )}
                  <ul>
                    {rows.map((r) => (
                      <ResourceRow key={r.id} r={r} />
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
}
