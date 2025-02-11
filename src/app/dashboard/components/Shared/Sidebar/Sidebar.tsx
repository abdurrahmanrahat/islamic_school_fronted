"use client";

import Container from "@/components/shared/Ui/Container";
import { IMAGES } from "@/image-data";
import Image from "next/image";
import Link from "next/link";
import {
  adminSidebarItems,
  instructorSidebarItems,
  studentSidebarItems,
} from "./item-lists";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ role }: { role: string }) => {
  return (
    <div className="h-screen px-4 md:px-0 py-4 md:py-0 border-r">
      <Container>
        <div className="p-10">
          {/* logo section */}
          <div className="flex justify-start items-center">
            <Link href="/">
              <Image src={IMAGES.shared.Logo} alt="Logo" />
            </Link>
          </div>

          {/* Nav items section */}
          <div className="hidden md:flex flex-col mt-8">
            {role === "student" &&
              studentSidebarItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            {role === "instructor" &&
              instructorSidebarItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            {role === "admin" &&
              adminSidebarItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
