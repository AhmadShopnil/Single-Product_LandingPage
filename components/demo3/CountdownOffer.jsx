"use client"

import { useState, useEffect } from "react"

export default function CountdownOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 18,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--

        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          days--
        }
        if (days < 0) {
          days = 0
          hours = 0
          minutes = 0
          seconds = 0
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleScroll = () => {
    const section = document.getElementById("buyNow");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };




  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center space-y-3">
      <div className="bg-linear-to-br from-accent to-accent/80 rounded-xl p-4 md:p-6 min-w-16 md:min-w-20 shadow-lg shadow-accent/20">
        <div className="text-3xl md:text-5xl font-bold text-accent-foreground tabular-nums">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">{label}</div>
    </div>
  )

  return (
    <section className="py-10 px-4 bg-linear-to-r from-card/50 to-card/30 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 md:space-y-6">
          {/* Section title */}
          <div className="space-y-3">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm">Limited Time Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Get 30% Off Today</h2>
            <p className="text-muted-foreground text-lg font-medium">Offer ends in:</p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-3 py-4 md:py-4 justify-items-center">
            {/* <TimeUnit value={timeLeft.days} label="Days" /> */}
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Offer description */}
         
          
            <button 
            onClick={handleScroll}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30">
              Claim Offer
            </button>
         
        </div>
      </div>
    </section>
  )
}
