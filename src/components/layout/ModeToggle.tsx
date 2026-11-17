"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/shadcn/toggle-group";
import { useDisplayMode } from "./ModeProvider";

/** Web / A4 display switch (shadcn ToggleGroup). */
export default function ModeToggle() {
  const { mode, setMode } = useDisplayMode();
  return (
    <ToggleGroup
      type="single"
      value={mode}
      onValueChange={(v) => (v === "web" || v === "a4") && setMode(v)}
      aria-label="Display mode"
      className="shrink-0 rounded-md border border-line p-0.5"
    >
      {[
        { value: "web", label: "Web" },
        { value: "a4", label: "A4" },
      ].map((o) => (
        <ToggleGroupItem
          key={o.value}
          value={o.value}
          className="h-6 min-w-0 rounded px-2.5 text-xs text-ink-muted shadow-none !rounded hover:bg-transparent hover:text-ink data-[state=on]:bg-accent data-[state=on]:font-medium data-[state=on]:text-white"
        >
          {o.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
