"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { useDisplayMode } from "./ModeProvider";
import ModeToggle from "./ModeToggle";
import SearchButton from "@/components/search/SearchButton";
import { supportsA4, withMode } from "@/lib/display-mode";
import { SITE_NAME } from "@/lib/site";
import type { SearchEntry } from "@/lib/catalog/types";

type NavItem = {
  label: string;
  href: string;
  /** Path prefixes that mark this item active */
  match: string[];
};

const mainNav: NavItem[] = [
  { label: "Browse", href: "/browse", match: ["/browse", "/curricula", "/courses", "/aa", "/ai", "/ib"] },
  { label: "Practice", href: "/practice", match: ["/practice", "/worksheets", "/review"] },
  { label: "Reference", href: "/reference", match: ["/reference"] },
];

const isActive = (pathname: string, item: NavItem) =>
  item.match.some((p) => pathname === p || pathname.startsWith(p + "/"));

export default function Navbar({ searchEntries }: { searchEntries?: SearchEntry[] }) {
  const pathname = usePathname();
  const { mode } = useDisplayMode();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape (links close it on click).
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    `text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
      active ? "bg-accent-soft text-accent-strong font-medium" : "text-ink-muted hover:bg-surface-alt hover:text-ink"
    }`;

  return (
    <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-line">
      <div className="max-w-[1200px] mx-auto flex items-center gap-3 px-4 sm:px-6 h-14">
        <Link href={withMode("/", mode)} className="font-semibold text-base text-ink whitespace-nowrap mr-auto md:mr-4">
          {SITE_NAME}
        </Link>

        <ul className="hidden md:flex gap-1 mr-auto">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);
            return (
              <li key={item.href}>
                <Link
                  href={withMode(item.href, mode)}
                  aria-current={active ? "page" : undefined}
                  className={linkClass(active)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {supportsA4(pathname) && <ModeToggle />}
        <SearchButton entries={searchEntries} />

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden -mr-1 p-2 rounded-md text-ink-muted hover:bg-surface-alt hover:text-ink"
        >
          <HugeiconsIcon icon={menuOpen ? Cancel01Icon : Menu01Icon} size={20} strokeWidth={1.8} />
        </button>
      </div>

      {menuOpen && (
        <ul id="main-menu" className="md:hidden border-t border-line bg-surface px-4 py-3 space-y-1 shadow-sm">
          {[{ label: "Home", href: "/", match: [] as string[] }, ...mainNav].map((item) => {
            const active = item.href === "/" ? pathname === "/" : isActive(pathname, item);
            return (
              <li key={item.href}>
                <Link
                  href={withMode(item.href, mode)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block ${linkClass(active)} py-2.5`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
