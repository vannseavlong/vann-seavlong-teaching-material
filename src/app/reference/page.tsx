import type { Metadata } from "next";
import MaterialsByCourse from "@/components/materials/MaterialsByCourse";
import { listResources } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Formula sheets and reference",
  description: "Formula recaps for every lesson unit, grouped by course and unit, readable on phone and printable.",
};

export default function ReferencePage() {
  const items = listResources({ kinds: ["formula-sheet", "reference"] }).filter((r) => r.status === "available");
  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Formula sheets and reference</h1>
          <p className="mt-2 text-ink-muted max-w-[68ch]">
            Each recap collects the key formulas of one unit. It opens at the end of that unit&rsquo;s lesson.
          </p>
        </div>
      </header>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-12">
        {items.length === 0 ? <p className="py-10 text-ink-muted">No formula sheets yet.</p> : <MaterialsByCourse items={items} />}
      </div>
    </main>
  );
}
