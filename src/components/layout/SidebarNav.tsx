"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Book02Icon } from "@hugeicons/core-free-icons";
import type { SidebarTree } from "@/lib/sidebar-data";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/shadcn/collapsible";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/shadcn/sheet";
import { NAV_COURSE_SLOT } from "./Navbar";

function Tree({ tree, onNavigate }: { tree: SidebarTree; onNavigate?: () => void }) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  // Units the user toggled by hand; the unit holding the current page is open unless closed by hand.
  const [manual, setManual] = useState<Record<number, boolean>>({});

  // Highlight the lesson topic in view (IntersectionObserver) or from the hash.
  // State resets per page: SidebarNav keys <Tree> by pathname.
  useEffect(() => {
    const ids = tree.units
      .flatMap((u) => u.items)
      .filter((i) => i.anchor && i.href?.split("#")[0] === pathname)
      .map((i) => i.anchor as string);
    if (ids.length === 0) return;
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (h && ids.includes(h)) setActiveId(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    // Active = last section whose top has passed the sticky header line.
    const recompute = () => {
      let cur: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      if (cur) setActiveId(cur);
    };
    const io = new IntersectionObserver(recompute, { rootMargin: "-72px 0px -60% 0px" });
    window.addEventListener("scroll", recompute, { passive: true });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", recompute);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [pathname, tree]);

  return (
    <nav aria-label={`${tree.shortName} units`} className="text-sm">
      <Link
        href={tree.overviewHref}
        onClick={onNavigate}
        aria-current={pathname === tree.overviewHref ? "page" : undefined}
        className={`block px-3 py-2 mb-2 rounded-md font-semibold ${
          pathname === tree.overviewHref
            ? "bg-slate-100 text-aa-primary"
            : "text-navy-900 hover:bg-slate-50"
        }`}
      >
        Maths {tree.shortName} overview
      </Link>
      <ul className="space-y-1">
        {tree.units.map((u) => {
          const inUnit = pathname.startsWith(`/${tree.pathway}/unit-${u.unit}/`);
          const open = manual[u.unit] ?? inUnit;
          const panelId = `unit-${tree.pathway}-${u.unit}`;
          return (
            <li key={u.unit} className="mt-3">
              <Collapsible open={open} onOpenChange={(o) => setManual((m) => ({ ...m, [u.unit]: o }))}>
              <CollapsibleTrigger
                className={`group w-full flex items-center gap-1.5 px-3 py-1.5 rounded-md text-left text-xs uppercase tracking-wide hover:bg-slate-50 ${inUnit ? "font-semibold text-navy-900" : "font-medium text-slate-500"}`}
              >
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2} className="shrink-0 transition-transform group-data-[state=open]:rotate-90" />
                <span>Unit {u.unit}: {u.title}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul id={panelId} className="ml-3 mt-1 border-l border-slate-200 space-y-0.5">
                  {u.items.map((item, idx) => {
                    const active = item.anchor
                      ? activeId === item.anchor && item.href?.split("#")[0] === pathname
                      : !!item.href && pathname === item.href;
                    const base = "block pl-3 pr-2 py-1.5 -ml-px border-l-2 text-[13px]";
                    const groupHead = item.group ? (
                      <p className="pl-3 pt-2 pb-0.5 text-[11px] uppercase tracking-wide text-slate-400">{item.group}</p>
                    ) : null;
                    if (!item.href) {
                      return (
                        <li key={item.href ?? `${item.label}-${idx}`}>
                          {groupHead}
                          <span
                            aria-disabled="true"
                            className={`${base} border-transparent text-slate-400 cursor-not-allowed`}
                          >
                            {item.label}
                            <span className="ml-1 text-[11px]">(soon)</span>
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={item.href ?? `${item.label}-${idx}`}>
                        {groupHead}
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          aria-current={active ? (item.anchor ? "location" : "page") : undefined}
                          className={`${base} ${
                            active
                              ? "border-aa-primary text-aa-primary font-medium bg-slate-50"
                              : "border-transparent text-slate-500 hover:text-navy-900 hover:bg-slate-50"
                          }`}
                        >
                          {item.hl && <span className="mr-1 text-[11px] text-slate-400">HL</span>}
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleContent>
              </Collapsible>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Mobile trigger lives in the navbar slot; the tree opens in a left sheet. Desktop: fixed left column. */
export default function SidebarNav({ tree }: { tree: SidebarTree }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the navbar slot exists only after mount
    setSlot(document.getElementById(NAV_COURSE_SLOT));
  }, []);

  return (
    <>
      {slot &&
        createPortal(
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="a4-hide flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-sm text-ink-muted hover:border-line-strong hover:text-ink"
          >
            <HugeiconsIcon icon={Book02Icon} size={16} strokeWidth={1.8} />
            Units
          </button>,
          slot
        )}

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-80 max-w-[85vw] gap-0 p-0 lg:hidden">
          <SheetHeader className="border-b border-line px-4 py-3">
            <SheetTitle className="text-ink">Maths {tree.shortName}</SheetTitle>
            <SheetDescription className="sr-only">Units, lesson topics and practice</SheetDescription>
          </SheetHeader>
          <div className="overflow-y-auto p-3">
            <Suspense fallback={null}>
              <Tree key={pathname} tree={tree} onNavigate={() => setMobileOpen(false)} />
            </Suspense>
          </div>
        </SheetContent>
      </Sheet>

      <aside
        id="docs-sidebar"
        className="a4-hide hidden lg:block fixed top-14 bottom-0 left-0 z-30 w-64 overflow-y-auto bg-white border-r border-slate-200 p-3"
      >
        <Suspense fallback={null}>
          <Tree key={pathname} tree={tree} />
        </Suspense>
      </aside>
    </>
  );
}
