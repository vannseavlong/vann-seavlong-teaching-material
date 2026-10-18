type Column = {
  header: string;
  className?: string;
};

type Row = string[];

export default function ComparisonTable({
  columns,
  rows,
}: {
  columns: Column[];
  rows: Row[];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-separate border-spacing-0 rounded-xl overflow-hidden border border-slate-200 a4:border-black a4:shadow-none">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className={`px-5 py-4 text-left text-sm font-semibold text-navy-900 bg-slate-50 border-b border-slate-200 a4:bg-white a4:text-black a4:border-black`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-3.5 text-sm border-b border-slate-200 ${ri % 2 === 1 ? "bg-slate-50" : "bg-white"} a4:bg-white a4:border-black ${ci === 0 ? "font-semibold text-navy-900" : "text-slate-500"}`}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
