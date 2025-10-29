"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 299.99,
  originalPrice: 429.99,
  colors: ["Black", "Silver", "Gold"],
  sizes: null,
  images: [
    "/premium-wireless-headphones.png",
    "/premium-wireless-headphones-product-shot.jpg",
    "/wireless-earbuds.png",
  ],
  description: "Experience crystal-clear audio with active noise cancellation and 30-hour battery life.",
}

const districtShippingCharges = {
  dhaka: 50,
  chittagong: 100,
  sylhet: 120,
  khulna: 110,
  rajshahi: 115,
  barisal: 130,
  rangpur: 125,
  mymensingh: 105,
}

export default function CheckoutSection() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null)
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    thana: "",
    address: "",
  })
  const [orderPlaced, setOrderPlaced] = useState(false)


  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const getShippingCharge = () => {
    const districtKey = formData.district.toLowerCase()
    return districtShippingCharges[districtKey] || 0
  }

  const shippingCharge = getShippingCharge()
  const subtotal = product.price * quantity
  const total = subtotal + shippingCharge

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.district && formData.thana && formData.address) {
      setOrderPlaced(true)
      setTimeout(() => {
        setOrderPlaced(false)
        setFormData({
          name: "",
          phone: "",
          district: "",
          thana: "",
          address: "",
        })
        setQuantity(1)
      }, 3000)
    }
  }

  return (
    <section className="py-10 px-4 bg-background">
      <div className="container mx-auto">
      

        <div className="space-y-12">
          {/* Product Gallery with Swiper */}
          <div className="space-y-8">
          

            {/* Product Info */}
            <div
            
            id="buyNow"
            className="space-y-4 bg-card rounded-2xl border border-border p-4 md:p-8">
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>

              {/* Price */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-start gap-3  ">
                  <span className="text-3xl font-bold text-accent">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  </div>
                <span className="ml-auto text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-xl">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>

              {/* Color Selection */}
              <div className="space-y-3 pt-4 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Color</p>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedColor === color
                          ? "bg-accent text-accent-foreground ring-2 ring-accent/50"
                          : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection (if applicable) */}
              {product.sizes && (
                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Size</p>
                  <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedSize === size
                            ? "bg-accent text-accent-foreground ring-2 ring-accent/50"
                            : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-4 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center font-bold text-lg transition-colors"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center font-bold text-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-4 md:p-8 space-y-6">
            <h3 className="text-2xl font-bold">Shipping Information</h3>

            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="+880 1234567890"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">District</label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Thana</label>
                  <input
                    type="text"
                    name="thana"
                    value={formData.thana}
                    onChange={handleFormChange}
                    placeholder="Gulshan"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  placeholder="Enter your complete address"
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="bg-muted rounded-lg p-4 space-y-3 border border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Product</span>
                  <span className="font-semibold">{product.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Color</span>
                  <span className="font-semibold">{selectedColor}</span>
                </div>
                {selectedSize && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size</span>
                    <span className="font-semibold">{selectedSize}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Quantity</span>
                  <span className="font-semibold">{quantity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">${shippingCharge.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-accent">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:bg-accent/90 transition-all duration-300 active:scale-95"
              >
                Place Order
              </button>
            </form>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center space-y-2">
                <div className="text-2xl">🚚</div>
                <p className="text-xs font-semibold">Fast Shipping</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🔒</div>
                <p className="text-xs font-semibold">Secure Payment</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">↩️</div>
                <p className="text-xs font-semibold">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {orderPlaced && (
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="bg-card border border-accent rounded-2xl p-8 text-center space-y-4 max-w-md shadow-2xl shadow-accent/20">
              <div className="text-5xl">✓</div>
              <h3 className="text-2xl font-bold">Order Placed Successfully!</h3>
              <p className="text-muted-foreground">
                Thank you for your purchase. You will receive a confirmation shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
