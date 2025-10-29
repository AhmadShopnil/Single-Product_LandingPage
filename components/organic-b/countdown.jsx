"use client"
import { useState, useEffect } from "react"

export default function Countdown() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set countdown to 24 hours from now
    const calculateTime = () => {
      const endTime = new Date().getTime() + 24 * 60 * 60 * 1000

      const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = endTime - now

        if (distance < 0) {
          clearInterval(interval)
          setTime({ hours: 0, minutes: 0, seconds: 0 })
          return
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTime({ hours, minutes, seconds })
      }, 1000)

      return () => clearInterval(interval)
    }

    calculateTime()
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-green-600 text-white rounded-lg p-3 md:p-4 min-w-16 md:min-w-20 flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs md:text-sm text-gray-600 mt-2 font-medium">{label}</span>
    </div>
  )

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-green-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Limited Time Offer</h2>
          <p className="text-gray-600">Offer expires in:</p>
        </div>

        <div className="flex justify-center gap-4 md:gap-6">
          <TimeUnit value={time.hours} label="Hours" />
          <div className="flex items-end pb-2 md:pb-4">
            <span className="text-2xl md:text-3xl font-bold text-gray-400">:</span>
          </div>
          <TimeUnit value={time.minutes} label="Minutes" />
          <div className="flex items-end pb-2 md:pb-4">
            <span className="text-2xl md:text-3xl font-bold text-gray-400">:</span>
          </div>
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}
