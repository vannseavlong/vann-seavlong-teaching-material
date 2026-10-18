"use client";

import { useDisplayMode } from "./ModeProvider";

export default function ModeToggle() {
  const { mode, setMode } = useDisplayMode();
  const options = [
    { value: "web", label: "Web" },
    { value: "a4", label: "A4" },
  ] as const;
  return (
    <div
      role="group"
      aria-label="Display mode"
      className="flex shrink-0 rounded-md border border-slate-200 p-0.5 text-xs"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={mode === o.value}
          onClick={() => setMode(o.value)}
          className={`px-2.5 py-1 rounded transition-colors ${
            mode === o.value
              ? "bg-aa-primary text-white font-medium"
              : "text-slate-500 hover:text-navy-900"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
