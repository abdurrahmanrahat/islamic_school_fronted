"use client";

import { IMAGES } from "@/image-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ActiveLink from "../Ui/ActiveLink";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = (
    <>
      <li className="hover:text-yellow-600 transition-colors duration-500 px-2 py-[1px] md:py-4">
        <ActiveLink href="/">Home</ActiveLink>
      </li>
      <li className="relative group cursor-pointer  px-2 py-[1px] md:py-4">
        <span className="hover:text-yellow-600 transition-colors duration-500 ">
          Faculties
        </span>
        <ul className="absolute top-10 md:top-14 left-0 bg-[#1b1464] p-4 space-y-2 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 transition-all w-44 rounded-xl border-y-[3px] border-yellow-600 pointer-events-none group-hover:pointer-events-auto z-[999]">
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/quran">Quran</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/hadith">Hadith</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/fiqh">Fiqh</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/islamic-history">
              Islamic History
            </ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/islamic">Counseling</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/islamic-library">Islamic Library</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/islamic-qa">Islamic Q&A</ActiveLink>
          </li>
        </ul>
      </li>
      <li className="relative group cursor-pointer px-2 py-[1px] md:py-4">
        <span className="hover:text-yellow-600 transition-colors duration-500">
          Courses
        </span>
        <ul className="absolute top-10 md:top-14 left-0 bg-[#1b1464] p-4 space-y-2 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 transition-all w-44 rounded-xl border-y-[3px] border-yellow-600 pointer-events-none group-hover:pointer-events-auto z-[999]">
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/quran">Quran</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/hadith">Hadith</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/fiqh">Fiqh</ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/islamic-history">
              Islamic History
            </ActiveLink>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-500">
            <ActiveLink href="/faculties/islamic">Islamic</ActiveLink>
          </li>
        </ul>
      </li>
      <li className="hover:text-yellow-600 transition-colors duration-500 px-2 py-[1px] md:py-4">
        <ActiveLink href="/blog">Blog</ActiveLink>
      </li>
      <li className="hover:text-yellow-600 transition-colors duration-500 px-2 py-[1px] md:py-4">
        <ActiveLink href="/contact">Contact</ActiveLink>
      </li>
      <li className="hover:text-yellow-600 transition-colors duration-500 px-2 py-[1px] md:py-4">
        <ActiveLink href="/about">About</ActiveLink>
      </li>
      <li className="hover:text-yellow-600 transition-colors duration-500 px-2 py-[1px] md:py-4">
        <ActiveLink href="/dashboard">Dashboard</ActiveLink>
      </li>
    </>
  );

  return (
    <div className="bg-primary text-white">
      <nav className="w-[90%] max-w-[1240px] mx-auto py-5 md:py-2 flex justify-between items-center relative">
        <div className="flex gap-3">
          {/* mobile menu */}
          <div className="md:hidden">
            {/* toggle open icon */}
            <div onClick={() => setIsNavOpen((prev) => !prev)}>
              {isNavOpen ? (
                <IoMdClose className="h-8 w-8 font-semibold" />
              ) : (
                <GiHamburgerMenu className="w-8 h-8" />
              )}
            </div>

            <div
              className={`absolute ${
                isNavOpen ? "top-20" : "-top-[450px]"
              }  right-0 bg-primary w-full p-7 transition-all duration-500 border-t-2 border-yellow-600 rounded-t z-[999]`}
            >
              <ul className="space-y-4 text-[16px] md:text-[17px]">
                {navItems}
              </ul>
            </div>
          </div>
          {/* <h2 className="text-[28px] font-semibold">Logo</h2> */}
          <Image src={IMAGES.shared.Logo} alt="Logo" />
        </div>

        <ul className="hidden md:flex text-[16px] md:text-[17px] font-medium">
          {navItems}
        </ul>

        <div className="">
          <Link href="/login">
            <button className="custom_button bg-secondary">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
