import type { Metadata } from "next";
import Link from "next/link";
import { worksheets, type Worksheet } from "@/lib/worksheet-data";

export const metadata: Metadata = {
  title: "Worksheets | IB Teaching Materials",
  description: "Printable practice worksheets for Mathematics and Physics.",
};

function WorksheetRow({ ws }: { ws: Worksheet }) {
  const available = ws.status === "available";
  const body = (
    <>
      <div className="min-w-0">
        <h2 className="text-lg font-bold text-navy-900 group-hover:text-aa-primary">{ws.title}</h2>
        <p className="text-sm text-slate-500">
          {ws.subject} · {ws.course}
          {!available && " · Coming soon"}
        </p>
      </div>
      <p className="text-sm text-slate-500 flex-shrink-0">{ws.questionCount} questions</p>
    </>
  );
  const cls = "group flex items-baseline justify-between gap-4 py-4";
  return available ? (
    <Link href={ws.href} className={cls}>
      {body}
    </Link>
  ) : (
    <div className={`${cls} opacity-60`}>{body}</div>
  );
}

export default function WorksheetsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="bg-slate-50 border-b border-slate-200 text-navy-900 py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-1">Worksheets</h1>
          <p className="text-slate-500">Printable practice worksheets for Mathematics and Physics.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {worksheets.map((ws) => (
            <WorksheetRow key={ws.id} ws={ws} />
          ))}
        </div>
      </div>
    </main>
  );
}
