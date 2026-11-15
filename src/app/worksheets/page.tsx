import type { Metadata } from "next";
import Link from "next/link";
import MaterialsByCourse from "@/components/materials/MaterialsByCourse";
import { listResources } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Worksheets",
  description: "Printable worksheets and tests for Physics and Mathematics, with answer sheets.",
};

export default function WorksheetsPage() {
  const items = listResources().filter((r) => r.href.startsWith("/worksheets/"));
  return (
    <main className="pt-14 bg-surface min-h-screen">
      <header className="border-b border-line bg-surface-alt">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink">Worksheets</h1>
          <p className="mt-2 text-ink-muted max-w-[68ch]">
            Printable sheets with answers. Switch to A4 for a print-ready page.{" "}
            <Link href="/practice" className="text-accent hover:underline">All practice and papers</Link>
          </p>
        </div>
      </header>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-12">
        <MaterialsByCourse items={items} />
      </div>
    </main>
  );
}
