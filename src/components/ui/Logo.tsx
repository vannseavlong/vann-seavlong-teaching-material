// Techie Club mark: "T" inside a "C" on a navy tile. Source of truth for the icon files in src/app.
export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="15" fill="#1a365d" />
      <path d="M46.7 21.4A18 18 0 1 0 46.7 42.6" fill="none" stroke="#7fb2ea" strokeWidth="6" strokeLinecap="round" />
      <path d="M23.5 25h17M32 25v17" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
