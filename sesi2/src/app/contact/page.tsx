import { Afacad } from "next/font/google";
const afacad = Afacad({
  subsets: ["latin"],
});
import React from "react";
import ContactCard from "@/components/ui/contactcard";

export default function Contact() {
  return (
    <div className="min-w-screen flex flex-col items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-purple-500">
            Contacts
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Connect with me on LinkedIn and Instagram below!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <ContactCard className="w-full md:max-w-md mx-auto" />
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Proyek Ureeka Sesi 2</p>
      </footer>
    </div>
  );
}
