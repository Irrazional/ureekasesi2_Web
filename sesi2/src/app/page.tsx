import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Image } from "@heroui/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[500] font-[Afacad Flux]">
      <Navbar>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/about">
              <Button>About Me</Button>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="/experience">
              <Button>Experience</Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/resume">
              <Button>Resume</Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              <Button>Contact</Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Image
              alt="Profile Icon"
              src="ureekasesi2_Web/sesi2/public/LogoPFP.png"
              width={10}
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <h1 className="text-4xl font-[700] font-[Afacad Flux]">
        Hello <span className="text-purple-500">everyone</span>!
      </h1>
    </div>
  );
}
