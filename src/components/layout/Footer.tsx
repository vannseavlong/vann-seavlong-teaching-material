import Link from "next/link";
import { curricula } from "@/lib/catalog";
import { AUTHOR, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="print:hidden bg-navy-900 text-white/70 py-10 px-4 sm:px-6 text-sm">
      <div className="max-w-[1100px] mx-auto grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-1 max-w-xs">Lessons, practice, revision papers and formula sheets for the courses I teach.</p>
        </div>
        <nav aria-label="Curricula">
          <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Curricula</p>
          <ul className="space-y-1.5">
            {curricula.map((c) => (
              <li key={c.id}>
                <Link href={`/curricula/${c.id}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Materials">
          <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Materials</p>
          <ul className="space-y-1.5">
            <li><Link href="/browse" className="hover:text-white">Browse courses</Link></li>
            <li><Link href="/practice" className="hover:text-white">Practice and papers</Link></li>
            <li><Link href="/reference" className="hover:text-white">Formula sheets</Link></li>
          </ul>
        </nav>
      </div>
      <p className="max-w-[1100px] mx-auto mt-8 pt-6 border-t border-white/10 text-white/50">
        Created by {AUTHOR}, 2026.
      </p>
    </footer>
  );
}
