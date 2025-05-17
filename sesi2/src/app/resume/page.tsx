"use client";

import { Afacad } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Resume() {
  return (
    <div
      className={`flex flex-col items-center justify-items-center p-5 pb-10 gap-5 sm:p-20 font-[500] ${afacad.className}`}
    >
      <div className="flex flex-row items-center gap-[30vw] mb-2">
        <h1 className="text-4xl font-[600]">
          <span className="text-purple-500">Resume Page</span>
        </h1>
        <Button
          className="bg-purple-500 hover:bg-purple-800"
          onClick={() => window.open("/pdf/cv.pdf", "_blank")}
        >
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>
      <iframe
        src="/pdf/cv.pdf"
        className="w-[60vw] h-[80vh] border-2 border-gray-300 rounded-lg shadow-lg"
        title="Resume PDF"
      />
    </div>
  );
}
