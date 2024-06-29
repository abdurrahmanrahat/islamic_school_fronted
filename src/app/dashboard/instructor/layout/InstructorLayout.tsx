import { ReactNode } from "react";

const InstructorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <h2>sidebar</h2>
      <div>{children}</div>
    </div>
  );
};

export default InstructorLayout;
