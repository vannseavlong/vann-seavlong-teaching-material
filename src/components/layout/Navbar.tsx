"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "AA Curriculum", href: "/aa" },
  { label: "AI Curriculum", href: "/ai" },
  { label: "Worksheets", href: "/worksheets" },
  { label: "Review", href: "/review" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between px-6 h-14 gap-6 overflow-x-auto">
        <Link href="/" className="font-semibold text-base text-navy-900 whitespace-nowrap">
          IB Math Guide
        </Link>
        <div className="flex gap-1" role="list">
          {mainNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-slate-200/70 text-navy-900 font-medium"
                    : "text-slate-500 hover:bg-slate-50 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
