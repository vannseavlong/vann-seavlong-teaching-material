import { ReactNode } from "react";

export default function Hero({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string;
  subtitle: string;
  badge?: string;
  children?: ReactNode;
}) {
  return (
    <header className="hero bg-white text-navy-900 pt-28 pb-14 px-6 border-b border-slate-200 a4:border-black">
      <div className="max-w-[1000px] mx-auto">
        {badge && (
          <p className="text-sm text-slate-500 mb-4">{badge}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-[640px] text-pretty">
          {subtitle}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  );
}
