"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import type { SidebarTree } from "@/lib/sidebar-data";

function withMode(href: string, mode: string | null) {
  return mode === "a4" || mode === "web" ? `${href}?mode=${mode}` : href;
}

function Tree({ tree, onNavigate }: { tree: SidebarTree; onNavigate?: () => void }) {
  const pathname = usePathname();
  const mode = useSearchParams().get("mode");
  // Units whose pages contain the current path start open; others toggle manually.
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});

  return (
    <nav aria-label={`${tree.shortName} units`} className="text-sm">
      <Link
        href={withMode(tree.overviewHref, mode)}
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
          const open = openMap[u.unit] ?? inUnit;
          return (
            <li key={u.unit}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenMap((m) => ({ ...m, [u.unit]: !open }))}
                className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-left text-navy-900 hover:bg-slate-50"
              >
                <span className={inUnit ? "font-semibold" : ""}>
                  Unit {u.unit}: {u.title}
                </span>
                <span aria-hidden className="text-slate-400 text-xs">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <ul className="ml-3 mt-1 border-l border-slate-200 space-y-0.5">
                  {u.items.map((item) => {
                    const active = !!item.href && pathname === item.href;
                    const base = "block pl-3 pr-2 py-1.5 -ml-px border-l-2 text-[13px]";
                    if (!item.href) {
                      return (
                        <li key={item.label}>
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
                      <li key={item.label}>
                        <Link
                          href={withMode(item.href, mode)}
                          onClick={onNavigate}
                          aria-current={active ? "page" : undefined}
                          className={`${base} ${
                            active
                              ? "border-aa-primary text-aa-primary font-medium bg-slate-50"
                              : "border-transparent text-slate-500 hover:text-navy-900 hover:bg-slate-50"
                          }`}
                        >
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
