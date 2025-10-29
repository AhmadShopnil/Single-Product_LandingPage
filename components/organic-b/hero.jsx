"use client"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative  bg-linear-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 w-fit">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Premium Organic</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Pure Nature,
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600">
                Perfect Health
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Experience the finest organic products sourced directly from nature. Honey, oils, and more—crafted for
              your wellness journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Buy Now
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Cash On Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Money Back</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`flex justify-center items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative w-full max-w-md">
              {/* Image Container with Shadow */}
              <div className="relative z-10">
                <img
                  src="/images/organic-honey-oil-pineapple-banana-fresh-products.jpg"
                  alt="Premium organic products - honey, oil, pineapple, banana"
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                />
              </div>
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-linear-to-br from-green-400 to-emerald-400 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
