"use client"

import { useState, useEffect } from "react"

const features = [
  {
    icon: "🔊",
    title: "Noise Cancellation",
    description: "Industry-leading active noise cancellation blocks out distractions",
  },
  {
    icon: "🔋",
    title: "Long Battery Life",
    description: "40 hours of continuous playback on a single charge",
  },
  {
    icon: "📡",
    title: "Bluetooth 5.3",
    description: "Ultra-fast, stable connection with extended range",
  },
  {
    icon: "🎵",
    title: "Premium Sound",
    description: "Studio-quality audio with deep bass and crystal clarity",
  },
  {
    icon: "🪶",
    title: "Lightweight Design",
    description: "Feather-light comfort for all-day wear",
  },
  {
    icon: "🌍",
    title: "Global Support",
    description: "24/7 customer support in 50+ countries",
  },
]

export default function ProductFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleFeatures((prev) => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-index]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-10 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Premium Features Built for You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineered with cutting-edge technology to deliver an unmatched audio experience
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 ${
                visibleFeatures.has(String(index)) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
