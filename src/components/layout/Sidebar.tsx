import { sidebarTrees } from "@/lib/sidebar-data";
import SidebarNav from "./SidebarNav";

export default function Sidebar({ pathway }: { pathway: "aa" | "ai" }) {
  return (
    <>
      <SidebarNav tree={sidebarTrees[pathway]} />
      {/* Reserve the sidebar column on desktop; removed in A4 mode */}
    </>
  );
}
