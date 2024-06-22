"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ActiveLink from "../ui/ActiveLink";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="py-5 px-7 md:px-[4%] bg-[#1b1464] text-white flex justify-between items-center relative">
      <h2 className="text-[28px] font-semibold">Logo</h2>
      <ul className="hidden md:flex gap-4 text-[16px] md:text-[17px] font-medium">
        <li className="hover:text-yellow-600 transition-colors duration-500">
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li className="hover:text-yellow-600 transition-colors duration-500">
          <ActiveLink href="/about">About</ActiveLink>
        </li>
        <li className=" relative group cursor-pointer">
          <span className="hover:text-yellow-600 transition-colors duration-500">
            Portfolio
          </span>
          <ul className="absolute top-10 left-0 bg-[#1b1464] p-4 space-y-2 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 transition-all w-44 rounded-xl border-y-[3px] border-yellow-600">
            <li className="hover:text-yellow-600 transition-colors duration-500">
              One he fhe
            </li>
            <li className="hover:text-yellow-600 transition-colors duration-500">
              Two
            </li>
            <li className="hover:text-yellow-600 transition-colors duration-500">
              Three
            </li>
          </ul>
        </li>
        <li className="hover:text-yellow-600 transition-colors duration-500">
          <ActiveLink href="/contact">Contact</ActiveLink>
        </li>
      </ul>

      <div className="hidden md:block">
        <button>Button</button>
      </div>

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
            isNavOpen ? "top-20" : "-top-[250px]"
          }  right-0 bg-[#1b1464] w-full p-7 transition-all duration-500 border-t-2 border-yellow-600 rounded-t`}
        >
          <ul className="space-y-4 text-[16px] md:text-[17px]">
            <li className="hover:text-yellow-600 transition-colors duration-500">
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li className="hover:text-yellow-600 transition-colors duration-500">
              <ActiveLink href="/about">About</ActiveLink>
            </li>
            <li className=" relative group cursor-pointer">
              <span className="hover:text-yellow-600 transition-colors duration-500">
                Portfolio
              </span>
              <ul className="absolute top-10 left-0 bg-[#1b1464] p-4 space-y-2 opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 transition-all w-44 rounded-xl border-y-[3px] border-yellow-600">
                <li className="hover:text-yellow-600 transition-colors duration-500">
                  One he fhe
                </li>
                <li className="hover:text-yellow-600 transition-colors duration-500">
                  Two
                </li>
                <li className="hover:text-yellow-600 transition-colors duration-500">
                  Three
                </li>
              </ul>
            </li>
            <li className="hover:text-yellow-600 transition-colors duration-500">
              <ActiveLink href="/contact">Contact</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// py-12 md:py-24 xl:py-28 px-7 md:px-[4%]
