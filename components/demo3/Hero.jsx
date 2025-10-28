"use client"

import { useState, useEffect, useRef } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

 

  useEffect(() => {
    setIsVisible(true)
  }, [])


  const handleScroll = () => {
    const section = document.getElementById("buyNow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative  flex items-center justify-center overflow-hidden
     bg-linear-to-b from-background via-background to-card/30 px-4 py-10">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8">
    

        {/* Main headline */}
        <h1
          className={`text-3xl md:text-7xl font-bold text-balance leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Immerse Yourself in Sound
        </h1>

        {/* Subheading */}
        <p
          className={`text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Experience crystal-clear audio with our latest wireless headphones. Engineered for perfection, designed for
          you.
        </p>

        {/* CTA Buttons */}
     

        {/* Hero Image */}
        <div
          className={`mt-6 md:mt-16 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <img
              src="/premium-wireless-headphones-product-shot.jpg"
              alt="Premium Wireless Headphones"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/20 to-transparent" />
          </div>
        </div>
           <div
          className={`flex flex-col sm:flex-row gap-4 justify-center  transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <button 
           onClick={handleScroll}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95">
            Buy Now
          </button>
       
        </div>

   

      </div>
    </section>
  )
}
