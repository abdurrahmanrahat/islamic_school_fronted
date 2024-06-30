"use client";

import ActiveLink from "@/components/Ui/ActiveLink";
import Container from "@/components/Ui/Container";
import { IMAGES } from "@/image-data";
import Image from "next/image";
import Link from "next/link";

const UserSidebar = () => {
  // Array containing navigation items
  const navItems = [
    { id: 2, text: "Dashboard", href: "/dashboard" },
    { id: 3, text: "My Courses", href: "/dashboard/my-courses" },
    { id: 4, text: "Manage Courses", href: "/dashboard/manage-courses" },
    { id: 5, text: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-primary text-white h-screen px-4 md:px-0 py-4 md:py-0">
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
            {navItems.map((item) => (
              <div
                key={item.id}
                className="px-4 py-2 md:text-[17px] border-b-2 hover:border-b-2 hover:border-secondary rounded-lg my-1 cursor-pointer duration-300"
              >
                <ActiveLink href={item.href}>{item.text}</ActiveLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserSidebar;
