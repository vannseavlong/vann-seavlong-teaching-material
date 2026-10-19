"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-navy-900 text-sm font-medium transition-colors border border-slate-300"
    >
      Print Worksheet
    </button>
  );
}
