"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const products = [
    { name: "Organic Food", href: "/organic-food", color: "from-green-500 to-green-700" },
    { name: "Organic Demo 2", href: "/organic-b", color: "from-green-500 to-green-700" },
    { name: "Panjabi", href: "https://e-fabrichouse.netlify.app/", color: "from-pink-500 to-rose-700" },
    { name: "Gadget", href: "https://gadgets-shop-1.netlify.app/", color: "from-teal-500 to-emerald-700" },
    
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-teal-50 to-green-100 flex flex-col justify-center items-center px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
           Explore Our  Demos
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Choose a demo to see our beautifully designed  product pages.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.href}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${product.color} p-[2px] shadow-lg hover:scale-[1.03] transition-transform duration-300`}
          >
            <div className="flex flex-col items-center justify-center h-40 bg-white rounded-2xl">
              <span className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                {product.name}
              </span>
              <span className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to View →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Organic Collection. All rights reserved.
      </footer>
    </main>
  );
}
