import { ReactNode } from "react";
import DashboardNavbar from "../../components/Shared/DashboardNavbar/DashboardNavbar";
import UserSidebar from "../../components/Shared/Sidebar/UserSidebar";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3 hidden md:block">
        <UserSidebar />
      </div>
      <div className="col-span-12 md:col-span-9">
        <DashboardNavbar>{children}</DashboardNavbar>
      </div>
    </div>
  );
};

export default UserLayout;
