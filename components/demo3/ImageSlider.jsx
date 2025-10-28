"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 299.99,
  originalPrice: 429.99,
  colors: ["Black", "Silver", "Gold"],
  sizes: null,
  images: [
    "/premium-wireless-headphones.png",
    "/premium-wireless-headphones-product-shot.jpg",
    "/wireless-earbuds.png",
  ],
  description: "Experience crystal-clear audio with active noise cancellation and 30-hour battery life.",
}

export default function ImageSlider() {
  const swiperRef = useRef(null)

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1} // center the second slide if you want first slide on left
        slidesPerView={3} // enough slides to show left and right
        spaceBetween={30} // optional spacing
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full py-8"
      >
        {product.images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center transition-transform duration-300"
          >
            <div className="w-full aspect-[3/4] flex items-center justify-center">
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
