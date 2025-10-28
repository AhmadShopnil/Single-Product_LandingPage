"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00A63E] text-white pt-14 pb-8 ">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight">LUKAZ</h3>
          <p className="text-teal-100 text-sm mt-3 leading-relaxed max-w-xs">
            Discover premium quality and timeless design. Find your perfect item today.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-teal-100">
            {["Shop", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-lg">Support</h4>
          <ul className="space-y-2 text-sm text-teal-100">
            {[
              "FAQ",
              "Returns & Refunds",
              "Privacy Policy",
              "Terms of Service",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3 text-lg">Contact</h4>
          <p className="text-sm text-teal-100">support@lukaz.com</p>
          <p className="text-sm text-teal-100 mt-1">+8801XXXXXXXXX</p>
          <p className="text-sm text-teal-200 mt-3">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-teal-100">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Lukaz</span>. All rights reserved.
      </div>
    </footer>
  );
}
