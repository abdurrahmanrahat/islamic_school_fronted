import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <h2>sidebar</h2>
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
