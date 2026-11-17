"use client";

import { Fragment, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterSelect from "@/components/nav/FilterSelect";

type Option = { id: string; name: string };
type Row = { id: string; courseId: string; node: ReactNode };
type Group = { kind: string; heading: string; rows: Row[] };

/** Materials grouped by kind, filtered by ?course= and ?kind= (shareable links). */
export default function MaterialsFilter({
  groups,
  courses,
}: {
  groups: Group[];
  courses: Option[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const course = params.get("course") ?? "";
  const kind = params.get("kind") ?? "";

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const q = next.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };

  const shown = groups
    .filter((g) => !kind || g.kind === kind)
    .map((g) => ({ ...g, rows: g.rows.filter((r) => !course || r.courseId === course) }))
    .filter((g) => g.rows.length > 0);
  const total = shown.reduce((n, g) => n + g.rows.length, 0);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 pb-5 border-b border-line">
        <FilterSelect label="Course" value={course} options={courses} allLabel="All courses" onChange={(v) => set("course", v)} />
        <FilterSelect label="Type" value={kind} options={groups.map((g) => ({ id: g.kind, name: g.heading }))} allLabel="All types" onChange={(v) => set("kind", v)} />
      </div>
      <p className="mt-4 text-sm text-ink-faint" aria-live="polite">
        {total} material{total === 1 ? "" : "s"}
        {(course || kind) && (
          <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="ml-3 font-medium text-accent hover:underline">
            Clear filters
          </button>
        )}
      </p>
      {shown.length === 0 && <p className="py-10 text-ink-muted">Nothing matches these filters yet.</p>}
      {shown.map((g) => (
        <section key={g.kind} className="mt-8">
          <h2 className="text-lg font-semibold text-ink border-b border-line pb-2">
            {g.heading} <span className="text-sm font-normal text-ink-faint">({g.rows.length})</span>
          </h2>
          <ul>
            {g.rows.map((r) => (
              <Fragment key={r.id}>{r.node}</Fragment>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
