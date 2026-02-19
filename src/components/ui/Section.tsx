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
    <section id={id} className={`py-16 px-6 ${alt ? "bg-white" : ""}`}>
      <div className="max-w-[1000px] mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-aa-primary bg-aa-bg px-3 py-1 rounded mb-3">
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
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
