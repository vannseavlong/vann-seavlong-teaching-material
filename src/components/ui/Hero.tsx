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
    <div className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white text-center pt-28 pb-16 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-br from-transparent via-transparent to-slate-50 [background-position:49.5%]" style={{ background: "linear-gradient(to bottom right, transparent 49.5%, #f7fafc 50%)" }} />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 relative z-10">
        {title}
      </h1>
      <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-[700px] mx-auto mb-6 relative z-10">
        {subtitle}
      </p>
      {badge && (
        <span className="inline-block bg-white/20 border border-white/30 px-5 py-1.5 rounded-full text-sm relative z-10">
          {badge}
        </span>
      )}
      {children && <div className="relative z-10 mt-6">{children}</div>}
    </div>
  );
}
