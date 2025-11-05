"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function ImageSlider() {
  const images = [
    "/images/design1/1.jpg",
    "/images/design1/2.jpg",
    "/images/design1/3.jpg",
    "/images/design1/4.jpg",
    "/images/design1/5.jpg",
  ];

  return (
    <div className="w-full py-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
           
          768: { slidesPerView: 3 }, 
        }}
        loop={true}
        grabCursor={true}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-2/3 overflow-hidden rounded-md shadow-md">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
