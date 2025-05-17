import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10",
        className
      )}
    >
      <div className="p-6">
        <div className="space-y-4">
          <a
            href="https://www.linkedin.com/in/michael-joshua-kusnadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-purple-500/10 transition-colors"
          >
            <Linkedin className="text-purple-400" />
            <span className="text-white">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/mchl_josh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-purple-500/10 transition-colors"
          >
            <Instagram className="text-purple-400" />
            <span className="text-white">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
