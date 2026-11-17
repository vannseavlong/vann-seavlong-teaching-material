"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/shadcn/sheet";
import { useDisplayMode } from "./ModeProvider";
import ModeToggle from "./ModeToggle";
import SearchButton from "@/components/search/SearchButton";
import { supportsA4, withMode } from "@/lib/display-mode";
import { SITE_NAME } from "@/lib/site";
import { LogoMark } from "@/components/ui/Logo";
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

/** Course pages render their mobile "Units" menu button into this slot (see SidebarNav). */
export const NAV_COURSE_SLOT = "nav-course-slot";

const isActive = (pathname: string, item: NavItem) =>
  item.match.some((p) => pathname === p || pathname.startsWith(p + "/"));

export default function Navbar({ searchEntries }: { searchEntries?: SearchEntry[] }) {
  const pathname = usePathname();
  const { mode } = useDisplayMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (active: boolean) =>
    `text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
      active ? "bg-accent-soft text-accent-strong font-medium" : "text-ink-muted hover:bg-surface-alt hover:text-ink"
    }`;

  return (
    <nav aria-label="Main" className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-line">
      <div className="max-w-[1200px] mx-auto flex items-center gap-3 px-4 sm:px-6 h-14">
        <Link href={withMode("/", mode)} className="flex items-center gap-2 font-semibold text-base text-ink whitespace-nowrap mr-auto md:mr-4">
          <LogoMark size={28} />
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

        <div id={NAV_COURSE_SLOT} className="flex lg:hidden empty:hidden" />
        {supportsA4(pathname) && <ModeToggle />}
        <SearchButton entries={searchEntries} />

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="md:hidden -mr-1 rounded-md p-2 text-ink-muted hover:bg-surface-alt hover:text-ink"
          >
            <HugeiconsIcon icon={Menu01Icon} size={20} strokeWidth={1.8} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 gap-0 p-0">
            <SheetHeader className="border-b border-line px-5 py-4">
              <SheetTitle className="flex items-center gap-2 text-ink">
                <LogoMark size={24} />
                {SITE_NAME}
              </SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
            </SheetHeader>
            <ul className="space-y-1 p-3">
              {[{ label: "Home", href: "/", match: [] as string[] }, ...mainNav].map((item) => {
                const active = item.href === "/" ? pathname === "/" : isActive(pathname, item);
                return (
                  <li key={item.href}>
                    <Link
                      href={withMode(item.href, mode)}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`block ${linkClass(active)} py-2.5 text-[15px]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
