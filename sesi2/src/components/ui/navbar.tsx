"use client";

import {
  Navbar as HeroNavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroNavbar className="w-full flex justify-between items-center sticky top-2 py-1 shadow-xl rounded-[25] bg-[#111212] z-50">
      <NavbarContent className="flex sm:flex gap-0" justify="start">
        <NavbarItem>
          <Button
            className="w-auto rounded-none text-xl font-[500]"
            variant="ghost"
            onClick={() => scrollToSection("about")}
          >
            About Me
          </Button>
        </NavbarItem>

        <NavbarItem className="flex items-center">
          <div className="h-9 w-0.5 bg-gray-300 rounded"></div>
        </NavbarItem>

        <NavbarItem>
          <Button
            className="w-auto rounded-none text-xl font-[500]"
            variant="ghost"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </Button>
        </NavbarItem>

        <NavbarItem className="flex items-center">
          <div className="h-9 w-0.5 bg-gray-300 rounded"></div>
        </NavbarItem>

        <NavbarItem>
          <Button
            className="w-auto rounded-none text-xl font-[500]"
            variant="ghost"
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </Button>
        </NavbarItem>

        <NavbarItem className="flex items-center">
          <div className="h-9 w-0.5 bg-gray-300 rounded"></div>
        </NavbarItem>

        <NavbarItem>
          <Button
            className="w-auto rounded-none text-xl font-[500]"
            variant="ghost"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="flex ml-auto">
        <NavbarItem>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent border-0 cursor-pointer p-0"
          >
            <Image
              src="/LogoPFP.png"
              alt="Profile Icon"
              width={50}
              height={50}
              className="rounded-full m-2"
            />
          </button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
}
