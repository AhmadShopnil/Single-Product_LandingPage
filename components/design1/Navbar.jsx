"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-teal-500 via-teal-600 to-teal-700 text-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight">
          LUKAZ
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
