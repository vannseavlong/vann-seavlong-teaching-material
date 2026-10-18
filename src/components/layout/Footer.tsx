import Link from "next/link";

export default function Footer() {
  return (
    <footer className="print:hidden bg-navy-900 text-white/70 py-10 px-6 text-sm">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div>
          <p className="font-semibold text-white">IB Math Guide</p>
          <p className="mt-1 max-w-xs">
            Lessons, practice and mock papers for IB Mathematics AA and AI.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-x-8 gap-y-2 flex-wrap">
          <Link href="/aa" className="hover:text-white">AA Curriculum</Link>
          <Link href="/ai" className="hover:text-white">AI Curriculum</Link>
          <Link href="/worksheets" className="hover:text-white">Worksheets</Link>
          <Link href="/review" className="hover:text-white">Review</Link>
        </nav>
      </div>
      <p className="max-w-[1000px] mx-auto mt-8 pt-6 border-t border-white/10 text-white/50">
        Created by VANN Seavlong, 2026.
      </p>
    </footer>
  );
}
