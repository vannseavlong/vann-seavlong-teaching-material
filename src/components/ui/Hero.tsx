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
    <header className="hero bg-navy-900 text-white pt-28 pb-14 px-6 border-b border-white/10">
      <div className="max-w-[1000px] mx-auto">
        {badge && (
          <p className="text-sm text-white/60 mb-4">{badge}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg text-white/75 max-w-[640px] text-pretty">
          {subtitle}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  );
}
