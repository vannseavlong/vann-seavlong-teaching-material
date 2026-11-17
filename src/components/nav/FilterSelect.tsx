"use client";

import { useId } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/select";

const ALL = "__all__";

export type FilterOption = { id: string; name: string };

/** Labelled filter dropdown (shadcn Select). Empty value = no filter, shown as `allLabel`. */
export default function FilterSelect({
  label,
  value,
  options,
  allLabel,
  onChange,
}: {
  label: string;
  value: string;
  options: FilterOption[];
  allLabel: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  const current = value && options.some((o) => o.id === value) ? value : ALL;
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <span id={id} className="text-xs font-medium text-ink-muted">
        {label}
      </span>
      <Select value={current} onValueChange={(v) => onChange(v === ALL ? "" : v)}>
        <SelectTrigger aria-labelledby={id} className="h-10 w-full bg-surface text-ink data-[size=default]:h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper" className="max-h-80">
          <SelectItem value={ALL}>{allLabel}</SelectItem>
          {options.map((o) => (
            <SelectItem key={o.id} value={o.id}>
              {o.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
