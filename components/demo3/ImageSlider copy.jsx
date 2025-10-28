"use client"

import {  useRef } from "react"
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
        <div>
            <div className="relative bg-card rounded-2xl border border-border p-3 md:p-8 overflow-hidden">
                <Swiper
                    ref={swiperRef}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full"
                >
                    {product.images.map((image, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="w-full aspect-square flex items-center justify-center">
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={`${product.name} view ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
