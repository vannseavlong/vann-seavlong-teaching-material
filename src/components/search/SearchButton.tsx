"use client";

// Navbar search trigger. Stub until Web-mc-search-reference adds the dialog: links to /search.
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

export default function SearchButton() {
  return (
    <Link
      href="/search"
      aria-label="Search"
      className="flex items-center gap-2 rounded-md border border-line px-2.5 py-1.5 text-sm text-ink-faint hover:border-line-strong hover:text-ink"
    >
      <HugeiconsIcon icon={Search01Icon} size={16} strokeWidth={1.8} />
      <span className="hidden lg:inline">Search</span>
    </Link>
  );
}
