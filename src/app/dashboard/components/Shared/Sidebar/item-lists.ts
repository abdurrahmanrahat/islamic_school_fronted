import {
  BookOpen,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Users,
} from "lucide-react";

export const studentSidebarItems = [
  { text: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { text: "My Courses", href: "/dashboard/my-courses", icon: BookOpen },
  { text: "Contact", href: "/contact", icon: MessageCircle },
];
export const instructorSidebarItems = [
  { text: "Dashboard", href: "/dashboard/instructor", icon: LayoutDashboard },
  { text: "My Courses", href: "/dashboard/my-courses", icon: BookOpen },
  { text: "Contact", href: "/contact", icon: MessageCircle },
];
export const adminSidebarItems = [
  { text: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { text: "Add Course", href: "/dashboard/add-course", icon: BookOpen },
  { text: "Manage Courses", href: "/dashboard/manage-courses", icon: Settings },
  { text: "Manage Users", href: "/dashboard/manage-users", icon: Users },
  {
    text: "Quran LS Students",
    href: "/dashboard/admin/manage-quran-ls-students",
    icon: Users,
  },
];
