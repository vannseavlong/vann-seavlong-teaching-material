import type { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "@/components/search/SearchResults";
import { searchIndex } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Search",
  description: "Search courses, lesson topics, practice and papers.",
  robots: { index: false },
};

export default function SearchPage() {
  const entries = searchIndex();
  return (
    <main className="pt-14 bg-surface min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-5">Search</h1>
        <Suspense fallback={null}>
          <SearchResults entries={entries} />
        </Suspense>
      </div>
    </main>
  );
}
