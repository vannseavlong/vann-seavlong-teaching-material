"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/shadcn/toggle-group";

const STORAGE_KEY = "tc-curriculum";

type Panel = { id: string; name: string; node: ReactNode };

function readStored(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function store(id: string) {
  try {
    if (id === "all") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* storage blocked: the choice just is not remembered */
  }
}

/**
 * Curriculum chips over server-rendered panels. All panels are in the HTML (first paint
 * shows every curriculum); the chip only hides the others. The choice is remembered per browser.
 */
export default function CurriculumPicker({ panels }: { panels: Panel[] }) {
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    const saved = readStored();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from browser storage after hydration
    if (saved && panels.some((p) => p.id === saved)) setSelected(saved);
  }, [panels]);

  const choose = (id: string) => {
    setSelected(id);
    store(id);
  };

  const chips = [{ id: "all", name: "All" }, ...panels];

  return (
    <>
      <ToggleGroup
        type="single"
        value={selected}
        onValueChange={(v) => v && choose(v)}
        aria-label="Curriculum"
        className="flex flex-wrap gap-2"
      >
        {chips.map((c) => (
          <ToggleGroupItem
            key={c.id}
            value={c.id}
            className="h-auto flex-none rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-normal text-ink-body shadow-none !rounded-full hover:border-line-strong hover:bg-surface data-[state=on]:border-accent data-[state=on]:bg-accent data-[state=on]:text-white"
          >
            {c.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="mt-6">
        {panels.map((p) => (
          <div key={p.id} hidden={selected !== "all" && selected !== p.id}>
            {p.node}
          </div>
        ))}
      </div>
    </>
  );
}
