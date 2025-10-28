"use client"

const reviews = [
  {
    name: "Sarah Chen",
    role: "Music Producer",
    rating: 5,
    text: "The sound quality is absolutely incredible. These headphones have become my go-to for studio work.",
    avatar: "👩‍💼",
  },
  {
    name: "Marcus Johnson",
    role: "Frequent Traveler",
    rating: 5,
    text: "Battery life is a game-changer. I can travel for days without worrying about charging.",
    avatar: "👨‍💼",
  },
  {
    name: "Emma Rodriguez",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "Comfortable, durable, and the noise cancellation is perfect for workouts. Highly recommend!",
    avatar: "👩‍🦰",
  },
  {
    name: "David Kim",
    role: "Tech Reviewer",
    rating: 5,
    text: "Best wireless headphones I've tested. The build quality and features justify the premium price.",
    avatar: "👨‍💻",
  },
]

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">Customer Love</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Loved by Thousands Worldwide</h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
