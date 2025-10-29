"use client"
import { useState } from "react"

export default function VideoReview() {
  const [selectedVideo, setSelectedVideo] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)

  const reviews = [
    {
      id: 1,
      name: "Fatima Ahmed",
      title: "Verified Buyer",
      rating: 5,
      videoUrl: "https://placeholder.svg?height=300&width=400&query=customer-review-video-1",
      thumbnail: "/images/organic-honey-review.jpg",
      text: "Best organic honey I have ever used. Pure and natural! The quality is exceptional and it arrived perfectly packaged.",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      name: "Karim Hassan",
      title: "Verified Buyer",
      rating: 5,
      videoUrl: "https://placeholder.svg?height=300&width=400&query=customer-review-video-2",
      thumbnail: "/images/organic-oil-review.jpg",
      text: "Excellent quality oil. Highly recommended for everyone. I've been using it for cooking and skincare.",
      location: "Chittagong, Bangladesh",
    },
    {
      id: 3,
      name: "Aisha Khan",
      title: "Verified Buyer",
      rating: 5,
      videoUrl: "https://placeholder.svg?height=300&width=400&query=customer-review-video-3",
      thumbnail: "/images/organic-product-review.jpg",
      text: "Amazing products! Fast delivery and great customer service. Will definitely order again!",
      location: "Sylhet, Bangladesh",
    },
  ]

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-600">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real customers sharing their authentic experiences with our premium organic products
          </p>
        </div>

        {/* Main Review Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Video Player */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-video bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={reviews[selectedVideo].thumbnail || "/placeholder.svg"}
                alt={reviews[selectedVideo].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all transform group-hover:scale-110">
                  <span className="text-white text-4xl ml-1">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">{renderStars(reviews[selectedVideo].rating)}</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{reviews[selectedVideo].name}</h3>
            <p className="text-green-600 font-semibold mb-4">{reviews[selectedVideo].location}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">"{reviews[selectedVideo].text}"</p>
            <div className="flex items-center gap-3">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Verified Purchase
              </span>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Video Review
              </span>
            </div>
          </div>
        </div>

        {/* Review Cards Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              onClick={() => setSelectedVideo(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform ${
                selectedVideo === index
                  ? "ring-4 ring-green-600 scale-105 shadow-2xl"
                  : "hover:shadow-xl hover:scale-102"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative bg-gray-200 aspect-video flex items-center justify-center overflow-hidden">
                <img
                  src={review.thumbnail || "/placeholder.svg"}
                  alt={review.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-all ${
                    hoveredCard === index ? "bg-black/50" : ""
                  }`}
                >
                  <div
                    className={`w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all transform ${
                      hoveredCard === index ? "scale-125 bg-white/40" : ""
                    }`}
                  >
                    <span className="text-white text-xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              {/* Card Info */}
              <div
                className={`p-5 transition-all ${
                  selectedVideo === index ? "bg-linear-to-r from-green-600 to-emerald-600 text-white" : "bg-white"
                }`}
              >
                <p className={`font-bold text-lg mb-1 ${selectedVideo === index ? "text-white" : "text-gray-900"}`}>
                  {review.name}
                </p>
                <p className={`text-sm mb-3 ${selectedVideo === index ? "text-green-100" : "text-gray-600"}`}>
                  {review.location}
                </p>
                <div className={selectedVideo === index ? "text-yellow-300" : ""}>{renderStars(review.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
