import { ReactNode } from "react";

export default function Section({
  id,
  label,
  title,
  intro,
  children,
  alt = false,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={`py-14 px-6 ${alt ? "bg-white border-y border-slate-200" : ""}`}>
      <div className="max-w-[1000px] mx-auto">
        <span className="block text-sm font-medium text-slate-500 mb-2">
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-navy-900 mb-4 text-balance">
          {title}
        </h2>
        {intro && (
          <p className="text-base text-slate-500 max-w-3xl mb-8">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
