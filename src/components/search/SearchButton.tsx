"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import type { SearchEntry } from "@/lib/catalog/types";
import { TYPE_HEADING, groupResults, searchEntries } from "./match";

const PER_GROUP = 6;

/** Navbar search: opens a dialog (button or "/" key). Without the index it links to /search. */
export default function SearchButton({ entries }: { entries?: SearchEntry[] }) {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const groups = useMemo(() => groupResults(searchEntries(entries ?? [], query), PER_GROUP), [entries, query]);
  const flat = groups.flatMap((g) => g.items);

  const open = () => {
    dialog.current?.showModal();
    input.current?.select();
  };
  const close = () => dialog.current?.close();
  const go = (href: string) => {
    close();
    router.push(href);
  };

  // "/" opens search unless the user is typing somewhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName))) return;
      e.preventDefault();
      dialog.current?.showModal();
      input.current?.select();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (flat[active]) go(flat[active].href);
      else if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const trigger = "flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-sm text-ink-faint hover:border-line-strong hover:text-ink";

  if (!entries) {
    return (
      <Link href="/search" aria-label="Search" className={trigger}>
        <HugeiconsIcon icon={Search01Icon} size={16} strokeWidth={1.8} />
        <span className="hidden lg:inline">Search</span>
      </Link>
    );
  }

  return (
    <>
      <button type="button" onClick={open} aria-label="Search" aria-keyshortcuts="/" className={trigger}>
        <HugeiconsIcon icon={Search01Icon} size={16} strokeWidth={1.8} />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden lg:inline rounded border border-line px-1 text-[11px] font-sans">/</kbd>
      </button>

      <dialog
        ref={dialog}
        aria-label="Search the site"
        onClick={(e) => e.target === dialog.current && close()}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-surface p-0 backdrop:bg-black/40 md:mx-auto md:mt-[12vh] md:h-auto md:max-h-[70vh] md:max-w-xl md:rounded-xl md:shadow-xl"
      >
        <div className="flex h-full flex-col md:max-h-[70vh]">
          <div className="flex items-center gap-2 border-b border-line px-4">
            <HugeiconsIcon icon={Search01Icon} size={18} strokeWidth={1.8} className="text-ink-faint shrink-0" />
            <input
              ref={input}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onInputKey}
              placeholder="Search courses, topics, papers"
              aria-label="Search"
              aria-controls="search-results"
              aria-activedescendant={flat[active] ? `sr-${active}` : undefined}
              role="combobox"
              aria-expanded={flat.length > 0}
              className="min-w-0 flex-1 bg-transparent py-3.5 text-base text-ink outline-none placeholder:text-ink-faint"
            />
            <button type="button" onClick={close} className="text-sm text-ink-muted hover:text-ink">
              Close
            </button>
          </div>
          <div id="search-results" role="listbox" className="flex-1 overflow-y-auto px-2 py-2">
            {query.trim() === "" && <p className="px-2 py-6 text-sm text-ink-faint">Type a topic, course or paper name, for example &ldquo;surds&rdquo; or &ldquo;bounds&rdquo;.</p>}
            {query.trim() !== "" && flat.length === 0 && (
              <p className="px-2 py-6 text-sm text-ink-muted">
                No results for &ldquo;{query}&rdquo;.{" "}
                <Link href="/browse" onClick={close} className="text-accent hover:underline">Browse courses</Link>
              </p>
            )}
            {groups.map((g) => (
              <div key={g.type} role="group" aria-label={TYPE_HEADING[g.type]} className="mb-2">
                <p className="px-2 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">{TYPE_HEADING[g.type]}</p>
                {g.items.map((r) => {
                  const i = flat.indexOf(r);
                  return (
                    <a
                      key={`${r.type}-${r.href}`}
                      id={`sr-${i}`}
                      role="option"
                      aria-selected={i === active}
                      href={r.href}
                      onMouseMove={() => setActive(i)}
                      onClick={(e) => {
                        e.preventDefault();
                        go(r.href);
                      }}
                      className={`block rounded-md px-2 py-2 ${i === active ? "bg-accent-soft" : ""}`}
                    >
                      <span className="block text-sm font-medium text-ink">{r.title}</span>
                      <span className="block text-xs text-ink-faint">{r.context}</span>
                    </a>
                  );
                })}
              </div>
            ))}
            {flat.length > 0 && (
              <Link href={`/search?q=${encodeURIComponent(query.trim())}`} onClick={close} className="block px-2 py-2 text-sm font-medium text-accent hover:underline">
                See all results
              </Link>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
