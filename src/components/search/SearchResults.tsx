"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SearchEntry } from "@/lib/catalog/types";
import { TYPE_HEADING, groupResults, searchEntries } from "./match";

/** Full results for /search?q= ; the field updates the URL so results can be shared. */
export default function SearchResults({ entries }: { entries: SearchEntry[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const results = searchEntries(entries, q);
  const groups = groupResults(results);

  return (
    <>
      <form role="search" action="/search" onSubmit={(e) => e.preventDefault()} className="pb-5 border-b border-line">
        <label htmlFor="q" className="sr-only">Search</label>
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={q}
          autoFocus
          onChange={(e) => {
            const v = e.target.value.trim();
            router.replace(v ? `${pathname}?q=${encodeURIComponent(v)}` : pathname, { scroll: false });
          }}
          placeholder="Search courses, topics, papers"
          className="w-full rounded-md border border-line bg-surface px-4 py-3 text-base text-ink focus:border-accent outline-none"
        />
      </form>
      {q && (
        <p className="mt-4 text-sm text-ink-faint" aria-live="polite">
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;
        </p>
      )}
      {q && results.length === 0 && (
        <p className="py-8 text-ink-muted">
          Try a shorter word or a topic name.{" "}
          <Link href="/browse" className="text-accent hover:underline">Browse courses</Link> instead.
        </p>
      )}
      {groups.map((g) => (
        <section key={g.type} className="mt-8">
          <h2 className="text-lg font-semibold text-ink border-b border-line pb-2">{TYPE_HEADING[g.type]}</h2>
          <ul>
            {g.items.map((r) => (
              <li key={`${r.type}-${r.href}`} className="border-b border-line last:border-b-0">
                <Link href={r.href} className="group block py-3 px-1 -mx-1 rounded-md hover:bg-surface-alt">
                  <span className="block text-[15px] font-medium text-ink group-hover:text-accent">{r.title}</span>
                  <span className="block text-xs text-ink-faint mt-0.5">{r.context}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
