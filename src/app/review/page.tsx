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
      className="block bg-white rounded-2xl border-2 border-purple-200 hover:border-purple-500 p-6 transition-all shadow-sm hover:shadow-md group"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
              {paper.topic}
            </span>
            <span className="text-xs text-slate-400 font-medium self-center">{paper.course}</span>
            {paper.status === "available" ? (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-700 text-white">
                Available
              </span>
            ) : (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-400">
                Coming Soon
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold text-purple-700 mb-1 group-hover:underline">{paper.title}</h2>
          <p className="text-slate-500 text-sm mb-4">{paper.subtitle}</p>
          <p className="text-xs text-slate-400">{paper.questionCount} questions · Exercise + Answer Sheet</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-3xl font-bold text-purple-700">{paper.marks}</p>
          <p className="text-xs text-slate-400 uppercase tracking-wide">marks</p>
        </div>
      </div>
    </Link>
  );
}

export default function ReviewPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="bg-navy-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            Topical Practice Papers
          </p>
          <h1 className="text-4xl font-bold mb-4">Review</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Exam-style review papers for focused topic practice — each set pairs a clean exercise
            paper with a fully worked answer sheet, following IB assessment style.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-navy-900">
            All Review Papers
            <span className="ml-2 text-sm font-normal text-slate-400">({reviewPapers.length})</span>
          </h2>
        </div>
        <div className="grid gap-5">
          {reviewPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </main>
  );
}
