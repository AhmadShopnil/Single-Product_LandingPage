"use client"
import Header from "@/components/organic-b/header"
import Hero from "@/components/organic-b/hero"
import Stats from "@/components/organic-b/stats"
import About from "@/components/organic-b/about"
import Features from "@/components/organic-b/features"
import Products from "@/components/organic-b/products"
import Countdown from "@/components/organic-b/countdown"
import VideoReview from "@/components/organic-b/video-review"
import Checkout from "@/components/organic-b/checkout"
import Footer from "@/components/organic-b/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Countdown />
      {/* <Stats /> */}
      <About />
      <Features />
      <Checkout />


      <VideoReview />
      <Products />
      <Footer />
    </main>
  )
}
