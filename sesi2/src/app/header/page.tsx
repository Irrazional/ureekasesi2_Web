import { Afacad } from "next/font/google";
const afacad = Afacad({
  subsets: ["latin"],
});

import Image from "next/image";

export default function Header() {
  return (
    <div
      className={`flex flex-col items-center justify-items-center p-5 pb-10 gap-2 sm:p-5 font-[500] ${afacad.className} bg-[#111212] rounded-2xl shadow-lg`}
    >
      <div className="text-center">
        <h1 className="text-4xl font-[700] font-[Afacad Flux]">
          Hello <span className="text-purple-500">everyone</span>!
        </h1>
      </div>
      <div className="flex flex-row items-center gap-2 mb-2">
        <Image src="/aipom.png" alt="aipom" height={150} width={150}></Image>
        <h1 className="text-4xl font-[600]">
          My name is{" "}
          <span className="text-purple-500">Michael Joshua Kusnadi</span>
        </h1>
      </div>
    </div>
  );
}
