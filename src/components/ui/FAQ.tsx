"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

/** Expandable FAQ (shadcn Accordion; several can be open at once). */
export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="multiple" className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white a4:border-black"
        >
          <AccordionTrigger className="px-6 py-4 text-base font-semibold text-navy-900 hover:no-underline hover:bg-slate-50">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 text-sm text-slate-500">
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
