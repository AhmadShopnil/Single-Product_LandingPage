"use client";

import { useEffect, useState, useRef } from "react";

/**
 * CountdownSection
 *
 * Props (optional):
 * - targetDate: a Date object or an ISO date string (e.g. "2025-10-29T12:00:00")
 * - durationHours: number (if targetDate not provided, countdown will be durationHours from now)
 *
 * Default: 4 hours from now
 */
export const CountdownSection = ({ targetDate = null, durationHours = 4 }) => {
  // store numeric timestamp for target (ms)
  const [targetTs, setTargetTs] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // keep interval id in ref to clear reliably
  const intervalRef = useRef(null);

  useEffect(() => {
    // Resolve the target timestamp on mount (client-side)
    if (targetDate) {
      const parsed = typeof targetDate === "string" ? new Date(targetDate) : targetDate;
      if (!isNaN(parsed)) {
        setTargetTs(parsed.getTime());
      } else {
        console.warn("CountdownSection: invalid targetDate provided, falling back to durationHours.");
        setTargetTs(Date.now() + durationHours * 60 * 60 * 1000);
      }
    } else {
      setTargetTs(Date.now() + durationHours * 60 * 60 * 1000);
    }
  }, [targetDate, durationHours]);

  useEffect(() => {
    if (!targetTs) return;

    // update once immediately then every second
    const update = () => {
      const now = Date.now();
      const distance = targetTs - now;

      if (distance <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      // we show total hours (including days -> hours)
      const totalHours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        hours: String(totalHours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    update(); // immediate
    intervalRef.current = setInterval(update, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [targetTs]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-black text-white tabular-nums">{value}</span>
      <span className="text-sm font-medium text-white opacity-80">{label}</span>
    </div>
  );

  return (
    <section className="bg-green-600 p-4 text-center shadow-lg sticky top-0 z-20">
      <p className="text-sm text-white font-semibold mb-2 tracking-wide">OFFER ENDS IN:</p>

      <div className="flex justify-center space-x-6">
        <TimeBlock value={timeLeft.hours} label="HRS" />
        <TimeBlock value={timeLeft.minutes} label="MIN" />
        <TimeBlock value={timeLeft.seconds} label="SEC" />
      </div>
    </section>
  );
};

export default CountdownSection;
