"use client";

import React, { useEffect, useState } from "react";

export default function OfferCountdown() {
  const targetDate = new Date("2025-11-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-2 flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Limited Time Offer!</h2>
        <p className="text-sm sm:text-base mb-8 max-w-md mx-auto text-gray-700">
          Hurry up! The special discount ends soon. Don’t miss your chance!
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8">
          {[
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-linear-to-r from-teal-500 via-teal-600 to-teal-700 text-white flex flex-col items-center justify-center px-5 py-3 rounded-2xl border border-gray-300 min-w-[70px]"
            >
              <span className="text-2xl sm:text-3xl font-bold">{item.value}</span>
              <span className="text-xs sm:text-sm uppercase  tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button 
        onClick={() => window.scrollTo({ top: 2400, behavior: "smooth" })}
        className="bg-white border border-teal-500 text-teal-600 font-semibold px-6 sm:px-8 py-3
         rounded-full hover:bg-teal-500 hover:text-white transition-all text-sm sm:text-base">
          Grab the Offer Now
        </button>
      </div>
    </section>
  );
}
