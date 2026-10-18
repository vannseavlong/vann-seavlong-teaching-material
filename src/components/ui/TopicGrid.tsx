export default function TopicGrid({ topics }: { topics: string[] }) {
  return (
    <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4">
      {topics.map((topic, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm a4:bg-white a4:border-black"
        >
          <span className="text-base text-aa-primary a4:text-black">&#9655;</span>
          {topic}
        </div>
      ))}
    </div>
  );
}
