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
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center px-6 py-2.5 gap-6 overflow-x-auto">
        <Link href="/" className="font-bold text-base text-aa-primary whitespace-nowrap">
          IB Math Guide
        </Link>
        <div className="flex gap-1">
          {mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-aa-bg text-aa-primary font-medium"
                    : "text-slate-500 hover:bg-aa-bg hover:text-aa-primary"
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
