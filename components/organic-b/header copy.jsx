"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-600">
              Organic
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition">
              Grocery
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-green-600 transition">
              Products
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition">
              Service
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link href="#" className="text-gray-700 hover:text-green-600 py-2">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 py-2">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 py-2">
              Grocery
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-green-600 py-2">
              Products
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 py-2">
              Service
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
