import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="min-h-[70vh] pt-14 bg-surface">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">404</p>
        <h1 className="text-2xl font-bold text-ink mb-3">This page does not exist</h1>
        <p className="text-ink-muted mb-8">
          The link may be old or mistyped. Search for the topic, or open your course from Browse.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/search" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-strong">
            Search
          </Link>
          <Link href="/browse" className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink hover:border-line-strong">
            Browse courses
          </Link>
          <Link href="/" className="rounded-md px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
