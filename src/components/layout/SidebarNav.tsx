"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { SidebarTree } from "@/lib/sidebar-data";

function Tree({ tree, onNavigate }: { tree: SidebarTree; onNavigate?: () => void }) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  // Units the user toggled by hand; the unit holding the current page is open unless closed by hand.
  const [manual, setManual] = useState<Record<number, boolean>>({});

  // Highlight the lesson topic in view (IntersectionObserver) or from the hash.
  useEffect(() => {
    setActiveId(null);
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
        {tree.shortName} Curriculum
      </Link>
      <ul className="space-y-1">
        {tree.units.map((u) => {
          const inUnit = pathname.startsWith(`/${tree.pathway}/unit-${u.unit}/`);
          const open = manual[u.unit] ?? inUnit;
          const panelId = `unit-${tree.pathway}-${u.unit}`;
          return (
            <li key={u.unit} className="mt-3">
              <button
                type="button"
                onClick={() => setManual((m) => ({ ...m, [u.unit]: !open }))}
                aria-expanded={open}
                aria-controls={panelId}
                className={`w-full flex items-center gap-1.5 px-3 py-1.5 rounded-md text-left text-xs uppercase tracking-wide hover:bg-slate-50 ${inUnit ? "font-semibold text-navy-900" : "font-medium text-slate-500"}`}
              >
                <HugeiconsIcon icon={open ? ArrowDown01Icon : ArrowRight01Icon} size={14} strokeWidth={2} className="shrink-0" />
                <span>Unit {u.unit}: {u.title}</span>
              </button>
              {open && (
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
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function SidebarNav({ tree }: { tree: SidebarTree }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        aria-expanded={mobileOpen}
        aria-controls="docs-sidebar"
        className="a4-hide lg:hidden fixed bottom-4 left-4 z-40 rounded-full bg-aa-primary text-white text-sm font-medium px-4 py-2 shadow"
      >
        {mobileOpen ? "Close menu" : "Units menu"}
      </button>
      {mobileOpen && (
        <div
          className="a4-hide lg:hidden fixed inset-0 top-14 z-30 bg-black/30"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
      <aside
        id="docs-sidebar"
        className={`a4-hide fixed top-14 bottom-0 left-0 z-30 w-64 overflow-y-auto bg-white border-r border-slate-200 p-3 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Suspense fallback={null}>
          <Tree tree={tree} onNavigate={() => setMobileOpen(false)} />
        </Suspense>
      </aside>
    </>
  );
}
