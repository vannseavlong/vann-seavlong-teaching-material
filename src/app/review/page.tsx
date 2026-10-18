import type { Metadata } from "next";
import Link from "next/link";
import { reviewPapers, type ReviewPaper } from "@/lib/review-data";

export const metadata: Metadata = {
  title: "Review Papers | IB Teaching Materials",
  description:
    "Topical review papers with exercise questions and full answer sheets, organised by topic across the AA and AI curricula.",
};

function PaperCard({ paper }: { paper: ReviewPaper }) {
  return (
    <Link
      href={paper.status === "available" ? paper.href : "#"}
      className="block bg-white rounded-2xl border border-slate-200 hover:border-aa-primary p-5 transition-colors a4:border-black a4:rounded-none group"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-navy-900 mb-1 group-hover:underline">{paper.title}</h2>
          <p className="text-slate-500 text-sm">{paper.course} · {paper.questionCount} questions</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-lg font-bold text-navy-900">[{paper.marks}]</p>
        </div>
      </div>
    </Link>
  );
}

export default function ReviewPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="bg-slate-50 border-b border-slate-200 text-navy-900 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold">Review</h1>
          <p className="text-slate-600 mt-1">Topical IB-style papers with worked answers.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-5">
          {reviewPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </main>
  );
}
