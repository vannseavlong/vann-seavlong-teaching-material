import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/nav/Breadcrumbs";
import CourseRow from "@/components/course/CourseRow";
import { curricula, getCurriculum, levelsFor, listCourses } from "@/lib/catalog";

export function generateStaticParams() {
  return curricula.map((c) => ({ curriculum: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ curriculum: string }> }): Promise<Metadata> {
  const { curriculum } = await params;
  const c = getCurriculum(curriculum);
  if (!c) return { title: "Curriculum not found" };
  return { title: `${c.name} courses`, description: c.description };
}

export default async function CurriculumPage({ params }: { params: Promise<{ curriculum: string }> }) {
  const { curriculum } = await params;
  const cur = getCurriculum(curriculum);
  if (!cur) notFound();
  const all = listCourses({ curriculum: cur.id });
  const groups = [
    ...levelsFor(cur.id).map((l) => ({ id: l.id, name: l.name, items: all.filter((c) => c.levelIds.includes(l.id)) })),
    { id: "any", name: "Any level", items: all.filter((c) => c.levelIds.length === 0) },
  ].filter((g) => g.items.length > 0);

  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <Breadcrumbs items={[{ label: "Browse", href: "/browse" }, { label: cur.shortName }]} className="mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">{cur.name}</h1>
          <p className="mt-3 text-ink-muted max-w-[68ch]">{cur.description}</p>
          {cur.id === "ib-dp" && (
            <p className="mt-3 text-sm">
              <Link href="/ib/aa-vs-ai" className="text-accent hover:underline">
                Choosing between AA and AI? Read the guide
              </Link>
            </p>
          )}
        </div>
      </header>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        {groups.length === 0 && <p className="text-ink-muted py-8">No courses yet.</p>}
        {groups.map((g) => (
          <section key={g.id} className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-1">{g.name}</h2>
            <ul>
              {g.items.map((c) => (
                <CourseRow key={c.id} course={c} showContext={false} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
