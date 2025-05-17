import { Afacad } from "next/font/google";
import Navbar from "@/components/ui/navbar";

import Header from "./header/page";
import About from "./about/page";
import Experience from "./experience/page";
import Resume from "./resume/page";
import Contact from "./contact/page";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-items-center min-h-screen p-5 pb-10 gap-5 sm:p-5 font-[500] bg-gradient-to-t from-[#1a1625] via-[#111212] to-[#1a1625] text-white ${afacad.className}`}
    >
      <Navbar />

      <section id="header" className="w-full">
        <Header />
      </section>

      <section id="about" className="w-full">
        <About />
      </section>

      <section id="experience" className="w-full">
        <Experience />
      </section>

      <section id="resume" className="w-full">
        <Resume />
      </section>

      <section id="contact" className="w-full">
        <Contact />
      </section>
    </div>
  );
}
