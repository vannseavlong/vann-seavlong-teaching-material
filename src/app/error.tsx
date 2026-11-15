"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-[70vh] pt-14 bg-surface">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-2xl font-bold text-ink mb-3">This page could not load</h1>
        <p className="text-ink-muted mb-8">Try again. If it keeps failing, go back to Home and open the page from there.</p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-strong"
          >
            Try again
          </button>
          <Link href="/" className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink hover:border-line-strong">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
