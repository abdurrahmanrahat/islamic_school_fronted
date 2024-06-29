import { Metadata } from "next";
import { ReactNode } from "react";
import InstructorLayout from "./layout/InstructorLayout";

export const metadata: Metadata = {
  title: "Instructor Dashboard",
  description: "Welcome to Islamic School Platform",
};

const InstructorDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <InstructorLayout>{children}</InstructorLayout>
    </div>
  );
};

export default InstructorDashboardLayout;
