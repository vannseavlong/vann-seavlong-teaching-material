import type { Metadata } from "next";
import Link from "next/link";
import { worksheets, type Worksheet } from "@/lib/worksheet-data";

export const metadata: Metadata = {
  title: "Worksheets | IB Teaching Materials",
  description:
    "Practice worksheets for Physics, Mathematics, and more — with formulas, exercises, and graph analysis.",
};

function WorksheetCard({ ws }: { ws: Worksheet }) {
  return (
    <Link
      href={ws.status === "available" ? ws.href : "#"}
      className={`block bg-white rounded-2xl border border-slate-200 hover:border-aa-primary p-6 transition-colors group`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200`}>
              {ws.subject}
            </span>
            <span className="text-xs text-slate-400 font-medium self-center">{ws.course}</span>
            {ws.status === "available" ? (
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border border-aa-primary text-aa-primary`}>
                Available
              </span>
            ) : (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-400">
                Coming Soon
              </span>
            )}
          </div>
          <h2 className={`text-xl font-bold text-navy-900 mb-1 group-hover:text-aa-primary`}>{ws.title}</h2>
          <p className="text-slate-500 text-sm mb-4">{ws.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {ws.sessions.map((s, i) => (
              <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className={`text-3xl font-bold text-navy-900`}>{ws.questionCount}</p>
          <p className="text-xs text-slate-400 uppercase tracking-wide">questions</p>
        </div>
      </div>
    </Link>
  );
}

export default function WorksheetsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="bg-slate-50 border-b border-slate-200 text-navy-900 py-16 px-6 a4:bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-aa-primary text-xs font-bold uppercase tracking-widest mb-3">
            Multi-Subject Practice
          </p>
          <h1 className="text-4xl font-bold mb-4 text-navy-900">Worksheets</h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Printable and interactive worksheets covering key formulas, worked examples, graph analysis, and practice
            problems across different subjects.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-navy-900">
            All Worksheets
            <span className="ml-2 text-sm font-normal text-slate-400">({worksheets.length})</span>
          </h2>
        </div>
        <div className="grid gap-5">
          {worksheets.map((ws) => (
            <WorksheetCard key={ws.id} ws={ws} />
          ))}
        </div>
      </div>
    </main>
  );
}
