"use client";

import { useEffect, useState, type ReactNode } from "react";

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
      <div role="group" aria-label="Curriculum" className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={selected === c.id}
            onClick={() => choose(c.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              selected === c.id
                ? "border-accent bg-accent text-white"
                : "border-line bg-surface text-ink-body hover:border-line-strong"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
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
