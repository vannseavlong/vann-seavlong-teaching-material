"use client";

import { Fragment, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Option = { id: string; name: string };
type Row = { id: string; curriculumId: string; levelIds: string[]; subjectId: string; node: ReactNode };

/** Filter bar + course list. Filters live in the URL (?curriculum=&level=&subject=) so a link can be shared. */
export default function BrowseFilters({
  rows,
  options,
}: {
  rows: Row[];
  options: { curricula: Option[]; levels: (Option & { curriculumId: string })[]; subjects: Option[] };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const curriculum = params.get("curriculum") ?? "";
  const level = params.get("level") ?? "";
  const subject = params.get("subject") ?? "";

  const levelOptions = options.levels.filter((l) => !curriculum || l.curriculumId === curriculum);

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    // A level belongs to one curriculum: drop it when the curriculum no longer matches.
    if (key === "curriculum" && value && level && options.levels.find((l) => l.id === level)?.curriculumId !== value) {
      next.delete("level");
    }
    const q = next.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };

  const shown = rows.filter(
    (r) =>
      (!curriculum || r.curriculumId === curriculum) &&
      (!level || r.levelIds.includes(level)) &&
      (!subject || r.subjectId === subject)
  );
  const filtered = Boolean(curriculum || level || subject);

  const select = (id: string, label: string, value: string, opts: Option[], all: string) => (
    <label htmlFor={id} className="flex flex-col gap-1 text-xs font-medium text-ink-muted min-w-0">
      {label}
      <select
        id={id}
        value={value}
        onChange={(e) => set(id, e.target.value)}
        className="w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-accent"
      >
        <option value="">{all}</option>
        {opts.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3 pb-5 border-b border-line">
        {select("curriculum", "Curriculum", curriculum, options.curricula, "All curricula")}
        {select("level", "Grade", level, levelOptions, "All grades")}
        {select("subject", "Subject", subject, options.subjects, "All subjects")}
      </div>
      <p className="mt-4 text-sm text-ink-faint" aria-live="polite">
        {shown.length} course{shown.length === 1 ? "" : "s"}
        {filtered && (
          <button type="button" onClick={() => router.replace(pathname, { scroll: false })} className="ml-3 font-medium text-accent hover:underline">
            Clear filters
          </button>
        )}
      </p>
      {shown.length === 0 ? (
        <p className="py-10 text-ink-muted">No course matches these filters.</p>
      ) : (
        <ul className="mt-2">
          {shown.map((r) => (
            <Fragment key={r.id}>{r.node}</Fragment>
          ))}
        </ul>
      )}
    </>
  );
}
