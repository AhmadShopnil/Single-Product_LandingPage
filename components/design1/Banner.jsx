"use client";

import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Smoothly clipped image */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="smoothImageClip" clipPathUnits="objectBoundingBox">
              <path
                d="
                M0,0 
                L1,0 
                L1,1 
                C0.85,0.9,0.7,0.88,0.5,1 
                C0.3,0.88,0.15,0.9,0,1 
                Z"
              />
            </clipPath>
          </defs>
        </svg>

        <Image
          src="/images/design1/1.jpg" // replace with your image
          alt="Product Banner"
          fill
          priority
          className="object-cover object-center"
          style={{
            clipPath: "url(#smoothImageClip)",
          }}
        />
      </div>

      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
        {/* <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover the Future of Comfort
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Experience quality and innovation with our latest product.
        </p> */}
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-3xl hover:bg-gray-200 transition">
          Buy Now
        </button>
      </div>
    </section>
  );
}
