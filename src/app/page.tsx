import Link from "next/link";
import CourseRow from "@/components/course/CourseRow";
import ResourceRow from "@/components/materials/ResourceRow";
import CurriculumPicker from "@/components/home-learn/CurriculumPicker";
import { curricula, levelsFor, listCourses, recentlyAdded } from "@/lib/catalog";
import { SITE_NAME } from "@/lib/site";

function CurriculumPanel({ id, name }: { id: string; name: string }) {
  const all = listCourses({ curriculum: id });
  const groups = [
    ...levelsFor(id).map((l) => ({ key: l.id, label: l.name, items: all.filter((c) => c.levelIds.includes(l.id)) })),
    { key: "any", label: "Any grade", items: all.filter((c) => c.levelIds.length === 0) },
  ].filter((g) => g.items.length > 0);

  return (
    <section aria-labelledby={`cur-${id}`} className="mb-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-2">
        <h2 id={`cur-${id}`} className="text-lg font-semibold text-ink">
          {name}
        </h2>
        <span className="flex gap-4 text-sm">
          {id === "ib-dp" && (
            <Link href="/ib/aa-vs-ai" className="text-ink-muted hover:text-accent hover:underline">
              AA or AI? Read the guide
            </Link>
          )}
          <Link href={`/curricula/${id}`} className="font-medium text-accent hover:underline">
            All courses
          </Link>
        </span>
      </div>
      {groups.map((g) => (
        <div key={g.key} className="mt-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{g.label}</h3>
          <ul>
            {g.items.map((c) => (
              <CourseRow key={c.id} course={c} showContext={false} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  const recent = recentlyAdded(6);
  const panels = curricula.map((c) => ({
    id: c.id,
    name: c.shortName,
    node: <CurriculumPanel id={c.id} name={c.name} />,
  }));

  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink">{SITE_NAME}</h1>
          <p className="mt-3 text-lg text-ink-muted max-w-[60ch]">
            Lessons, practice and revision papers for your course. Pick your curriculum to start.
          </p>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <CurriculumPicker panels={panels} />
        </div>

        <aside aria-labelledby="recent" className="min-w-0">
          <div className="flex items-baseline justify-between border-b border-line pb-2">
            <h2 id="recent" className="text-lg font-semibold text-ink">
              Recently added
            </h2>
            <Link href="/practice" className="text-sm font-medium text-accent hover:underline">
              All materials
            </Link>
          </div>
          <ul>
            {recent.map((r) => (
              <ResourceRow key={r.id} r={r} showCourse />
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
