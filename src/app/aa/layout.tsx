import Sidebar from "@/components/layout/Sidebar";
import { IB_AA } from "@/content/ib-dp";

export default function PathwayLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar courseId={IB_AA} />
      <div className="lg:pl-64 a4:lg:pl-0">{children}</div>
    </>
  );
}
