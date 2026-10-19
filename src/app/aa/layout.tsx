import Sidebar from "@/components/layout/Sidebar";

export default function PathwayLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar pathway="aa" />
      <div className="lg:pl-64 a4:lg:pl-0">{children}</div>
    </>
  );
}
