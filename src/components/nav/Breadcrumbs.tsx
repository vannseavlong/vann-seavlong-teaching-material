import Link from "next/link";
import type { Crumb } from "@/lib/catalog/types";

/**
 * Breadcrumb trail. The last item is the current page (no link).
 * On small screens middle items collapse to "…" so the trail fits one line.
 */
export default function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  if (items.length === 0) return null;
  const last = items.length - 1;
  return (
    <nav aria-label="Breadcrumb" className={`a4-hide print:hidden text-[13px] ${className}`}>
      <ol className="flex items-center gap-1.5 min-w-0 text-ink-faint">
        {items.map((c, i) => {
          const middle = i > 0 && i < last - 1;
          return (
            <li key={`${c.label}-${i}`} className={`items-center gap-1.5 min-w-0 ${middle ? "hidden sm:flex" : "flex"}`}>
              {i > 0 && <span aria-hidden className="text-line-strong">/</span>}
              {i === last || !c.href ? (
                <span aria-current={i === last ? "page" : undefined} className={`truncate ${i === last ? "text-ink-muted" : ""}`}>
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="truncate hover:text-accent hover:underline">
                  {c.label}
                </Link>
              )}
              {/* Phones: stand-in for the hidden middle items, right after the first crumb */}
              {i === 0 && items.length > 3 && (
                <span aria-hidden className="flex sm:hidden items-center gap-1.5">
                  <span className="text-line-strong">/</span>…
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
