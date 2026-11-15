import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/nav/Breadcrumbs";
import ResourceRow from "@/components/materials/ResourceRow";
import {
  RESOURCE_KIND_ORDER,
  breadcrumbsFor,
  courseContext,
  getCourse,
  listResources,
  type Course,
  type Resource,
  type Unit,
} from "@/lib/catalog";

const VISIBLE = 5;

function MaterialList({ items }: { items: Resource[] }) {
  if (items.length === 0) return null;
  const sorted = RESOURCE_KIND_ORDER.flatMap(({ kind }) => items.filter((r) => r.kind === kind));
  const head = sorted.slice(0, VISIBLE);
  const rest = sorted.slice(VISIBLE);
  return (
    <>
      <ul>
        {head.map((r) => (
          <ResourceRow key={r.id} r={r} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group/more">
          <summary className="cursor-pointer list-none py-2 text-sm font-medium text-accent hover:underline">
            <span className="group-open/more:hidden">Show {rest.length} more</span>
            <span className="hidden group-open/more:inline">Show fewer</span>
          </summary>
          <ul className="border-t border-line">
            {rest.map((r) => (
              <ResourceRow key={r.id} r={r} />
            ))}
          </ul>
        </details>
      )}
    </>
  );
}

function UnitBlock({ course, unit }: { course: Course; unit: Unit }) {
  const all = listResources({ courseId: course.id, unitId: unit.id });
  const lesson = all.find((r) => r.kind === "lesson");
  const materials = all.filter((r) => r.kind !== "lesson");
  const soon = unit.status === "coming-soon";
  const label = course.unitLabel ?? "Unit";
  const trackLabel = (id?: string) => course.tracks?.find((t) => t.id === id)?.label;
  const firstTrack = course.tracks?.[0]?.id;

  return (
    <section id={unit.id} className="py-8 border-t border-line first:border-t-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-2">
        <h2 className="text-xl font-semibold text-ink">
          {unit.number != null && <span className="text-ink-faint font-normal mr-2">{label} {unit.number}</span>}
          {unit.title}
        </h2>
        {lesson ? (
          <Link
            href={lesson.href}
            className="rounded-md bg-accent px-3.5 py-1.5 text-sm font-medium text-white hover:bg-accent-strong"
          >
            Open lesson
          </Link>
        ) : (
          soon && <span className="text-sm text-ink-faint">Coming soon</span>
        )}
      </div>
      {unit.description && <p className="text-sm text-ink-muted max-w-[72ch] mb-5">{unit.description}</p>}

      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {unit.topics.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Topics</h3>
            <ul className="space-y-1">
              {unit.topics.map((t) => {
                const tl = t.track && t.track !== firstTrack ? trackLabel(t.track) : undefined;
                return (
                  <li key={t.id} className="text-sm leading-snug">
                    {t.href ? (
                      <Link href={t.href} className="text-ink-body hover:text-accent hover:underline">
                        {t.title}
                      </Link>
                    ) : (
                      <span className="text-ink-muted">{t.title}</span>
                    )}
                    {tl && <span className="ml-1.5 text-[11px] font-semibold text-ink-faint">{tl}</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-1">Practice and papers</h3>
          {materials.length > 0 ? (
            <MaterialList items={materials} />
          ) : (
            <p className="text-sm text-ink-faint py-2">No practice for this {label.toLowerCase()} yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Generic course page for every curriculum.
 * `meta` adds lines under the description (e.g. IB teaching hours); `children` adds course-specific blocks at the end.
 */
export default function CoursePage({
  courseId,
  meta,
  aside,
  children,
}: {
  courseId: string;
  meta?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const course = getCourse(courseId);
  if (!course) throw new Error(`Unknown course "${courseId}"`);
  const loose = listResources({ courseId }).filter((r) => !r.unitId);
  const hasUnits = course.units.length > 0;

  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <Breadcrumbs items={breadcrumbsFor(course.href)} className="mb-4" />
          <p className="text-sm text-ink-faint mb-1">{courseContext(course)}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">{course.title}</h1>
          <p className="mt-3 text-ink-muted max-w-[68ch]">{course.description}</p>
          {meta && <div className="mt-3 text-sm text-ink-muted">{meta}</div>}
          {aside && <div className="mt-4">{aside}</div>}
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-12">
        {!hasUnits && loose.length === 0 && (
          <div className="py-16 max-w-xl">
            <h2 className="text-lg font-semibold text-ink mb-2">Materials are coming soon</h2>
            <p className="text-ink-muted mb-6">
              Lessons and practice for {course.title} will appear here as they are written.
            </p>
            <Link href="/browse" className="text-sm font-medium text-accent hover:underline">
              Browse other courses
            </Link>
          </div>
        )}

        {hasUnits && course.units.map((u) => <UnitBlock key={u.id} course={course} unit={u} />)}

        {loose.length > 0 && (
          <section id="materials" className={`py-8 ${hasUnits ? "border-t border-line" : ""}`}>
            <h2 className="text-xl font-semibold text-ink mb-2">{hasUnits ? "More materials" : "Materials"}</h2>
            <MaterialList items={loose} />
          </section>
        )}

        {children}
      </div>
    </main>
  );
}
