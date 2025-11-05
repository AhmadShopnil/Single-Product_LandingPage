"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CustomerReviews({ reviews }) {
  return (
    <section className="bg-white text-black py-10">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Honest feedback from our happy users — real experiences, real stories.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id} className="h-[200px] flex">
              <div className="bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-2xl p-8 flex flex-col justify-between w-full h-full shadow-sm hover:shadow-md min-h-[200px]">
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-grow">
                  “{r.text}”
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{r.name}</p>
                      <p className="text-xs text-gray-500">Verified Buyer</p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-sm font-medium">
                    {"★".repeat(r.rating)}
                    <span className="text-gray-300">
                      {"★".repeat(5 - r.rating)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
