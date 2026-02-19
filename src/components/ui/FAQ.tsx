"use client";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="bg-white border border-slate-200 rounded-xl overflow-hidden group"
        >
          <summary className="px-6 py-4 cursor-pointer font-semibold text-navy-900 list-none flex items-center gap-3 [&::-webkit-details-marker]:hidden">
            <span className="text-xl text-aa-primary font-bold shrink-0 w-6 text-center group-open:hidden">
              +
            </span>
            <span className="text-xl text-aa-primary font-bold shrink-0 w-6 text-center hidden group-open:inline">
              &minus;
            </span>
            {item.question}
          </summary>
          <div
            className="px-6 pb-5 pl-[3.25rem] text-slate-500 text-sm"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </details>
      ))}
    </div>
  );
}
