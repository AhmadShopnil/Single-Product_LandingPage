"use client"

import Link from "next/link"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-600">
            Organic
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-green-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-xl" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-green-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-green-600 transition"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
