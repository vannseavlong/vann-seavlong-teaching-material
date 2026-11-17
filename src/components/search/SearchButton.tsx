"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/shadcn/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/command";
import type { SearchEntry } from "@/lib/catalog/types";
import { TYPE_HEADING, groupResults, searchEntries } from "./match";

const PER_GROUP = 6;

/** Navbar search: a command palette (button, "/" or Ctrl/Cmd+K). Without the index it links to /search. */
export default function SearchButton({ entries }: { entries?: SearchEntry[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const groups = useMemo(() => groupResults(searchEntries(entries ?? [], query), PER_GROUP), [entries, query]);
  const q = query.trim();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName));
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const trigger =
    "flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-sm text-ink-faint transition-colors hover:border-line-strong hover:text-ink";

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
      <button type="button" onClick={() => setOpen(true)} aria-label="Search" aria-keyshortcuts="/ Control+K" className={trigger}>
        <HugeiconsIcon icon={Search01Icon} size={16} strokeWidth={1.8} />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden lg:inline rounded border border-line px-1 font-sans text-[11px]">/</kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-0 left-0 flex h-dvh max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-0 p-0 sm:top-[12vh] sm:left-1/2 sm:h-auto sm:max-w-xl sm:-translate-x-1/2 sm:rounded-xl sm:border"
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogDescription className="sr-only">Search courses, lesson topics and papers</DialogDescription>
          <Command
            shouldFilter={false}
            className="flex-1 sm:flex-none [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-ink-faint"
          >
            <div className="flex items-center gap-1 border-b border-line pr-2 [&_[data-slot=command-input-wrapper]]:h-14 [&_[data-slot=command-input-wrapper]]:flex-1 [&_[data-slot=command-input-wrapper]]:border-0 [&_[data-slot=command-input-wrapper]]:px-4">
              <CommandInput value={query} onValueChange={setQuery} placeholder="Search courses, topics, papers" className="h-14 text-base" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-xs font-medium text-ink-muted hover:bg-surface-alt hover:text-ink"
              >
                <span className="sm:hidden">Close</span>
                <kbd className="hidden sm:inline rounded border border-line px-1.5 py-0.5 font-sans">Esc</kbd>
              </button>
            </div>
            <CommandList className="max-h-none flex-1 p-2 sm:max-h-[60vh]">
              {q === "" && (
                <p className="px-2 py-6 text-sm text-ink-faint">
                  Type a topic, course or paper name, for example &ldquo;surds&rdquo; or &ldquo;bounds&rdquo;.
                </p>
              )}
              {q !== "" && (
                <CommandEmpty className="px-2 py-6 text-sm text-ink-muted">
                  No results for &ldquo;{q}&rdquo;.{" "}
                  <Link href="/browse" onClick={() => setOpen(false)} className="text-accent hover:underline">
                    Browse courses
                  </Link>
                </CommandEmpty>
              )}
              {groups.map((g) => (
                <CommandGroup key={g.type} heading={TYPE_HEADING[g.type]}>
                  {g.items.map((r) => (
                    <CommandItem
                      key={`${r.type}-${r.href}`}
                      value={`${r.type}-${r.href}`}
                      onSelect={() => go(r.href)}
                      className="flex-col items-start gap-0 rounded-md px-2 py-2"
                    >
                      <span className="text-sm font-medium text-ink">{r.title}</span>
                      <span className="text-xs text-ink-faint">{r.context}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
              {groups.length > 0 && (
                <CommandItem
                  value="see-all"
                  onSelect={() => go(`/search?q=${encodeURIComponent(q)}`)}
                  className="px-2 py-2 text-sm font-medium text-accent"
                >
                  See all results
                </CommandItem>
              )}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
