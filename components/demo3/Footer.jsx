"use client";

export default function Footer() {
  return (
    <footer className="bg-[#DC7550] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">MyBrand</h1>
        </div>

        {/* Navigation / Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        {/* <div className="flex gap-4">
          <a href="#" className="hover:opacity-80">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="#" className="hover:opacity-80">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
          </a>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
