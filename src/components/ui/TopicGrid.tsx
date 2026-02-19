export default function TopicGrid({ topics }: { topics: string[] }) {
  return (
    <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4">
      {topics.map((topic, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-md text-sm"
        >
          <span className="text-base">&#9655;</span>
          {topic}
        </div>
      ))}
    </div>
  );
}
