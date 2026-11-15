import { sidebarTree } from "@/lib/sidebar-data";
import SidebarNav from "./SidebarNav";

/** Left course navigation (units, lesson topics, practice). The tree is built on the server. */
export default function Sidebar({ courseId }: { courseId: string }) {
  return <SidebarNav tree={sidebarTree(courseId)} />;
}
