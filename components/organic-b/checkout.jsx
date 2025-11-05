"use client"
import { useState } from "react"

export default function Checkout() {
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    thana: "",
    address: "",
  })

  const productPrice = 599
  const districts = {
    Dhaka: 50,
    Chittagong: 100,
    Sylhet: 120,
    Khulna: 110,
    Rajshahi: 100,
    Barisal: 130,
    Rangpur: 120,
    Mymensingh: 90,
  }

  const thanas = {
    Dhaka: ["Dhanmondi", "Gulshan", "Banani", "Mirpur", "Uttara"],
    Chittagong: ["Halishahar", "Bayazid", "Kotwali", "Nasirabad"],
    Sylhet: ["Sylhet Sadar", "Moulvibazar", "Sunamganj"],
    Khulna: ["Khulna Sadar", "Satkhira", "Bagerhat"],
    Rajshahi: ["Rajshahi Sadar", "Natore", "Naogaon"],
    Barisal: ["Barisal Sadar", "Patuakhali", "Bhola"],
    Rangpur: ["Rangpur Sadar", "Dinajpur", "Thakurgaon"],
    Mymensingh: ["Mymensingh Sadar", "Jamalpur", "Sherpur"],
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1)
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const shippingCharge = districts[formData.district] || 0
  const subtotal = productPrice * quantity
  const total = subtotal + shippingCharge

  return (
    <section className="py-3 md:py-10 bg-gray-50">
      <div className="container mx-auto px-2 md:px-6">

        <div className="grid md:grid-cols-3 gap-4">
          {/* Product and Quantity */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg px-2 md:px-4 ">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

              <div className="flex gap-4 mb-4 md:mb-6 pb-6 border-b">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                  <img
                    src="/images/organic-honey-jar.jpg"
                    alt="Organic Honey"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-800 mb-1">Premium Organic Honey</h4>
                  {/* <p className="text-gray-600 text-xs mb-3">Pure, natural, and unfiltered</p> */}
                  <div className="flex gap-4 justify-start items-center">
                    <p className="text-base font-bold text-green-600">৳{productPrice}</p>
                    {/* Quantity Selector */}
                    <div className="">

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange("decrease")}
                          className="w-7 h-7 border border-gray-300 rounded-sm  flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm font-bold text-gray-800 min-w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => handleQuantityChange("increase")}
                          className="w-7 h-7 border border-gray-300 rounded-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
              <div className="space-y-3 mb-3 md:mb-6 pb-3 md:pb-6 border-b">
                <div className="flex justify-between text-gray-700">
                  <span>
                    Subtotal ({quantity} item{quantity > 1 ? "s" : ""})
                  </span>
                  <span className="font-semibold">৳ {subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping Charge</span>
                  <span className="font-semibold">৳ {shippingCharge}</span>
                </div>
              </div>

            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-lg px-2 md:px-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Shipping Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">District *</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      <option value="">Select District</option>
                      {Object.keys(districts).map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>



                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Thana *</label>
                    <input
                      type="text"
                      name="thana"
                      value={formData.thana}
                      onChange={handleInputChange}
                      placeholder="Enter your thana"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address"
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg px-2 md:px-4 sticky top-4">


              <div className="hidden md:block  space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between text-gray-700">
                  <span>
                    Subtotal ({quantity} item{quantity > 1 ? "s" : ""})
                  </span>
                  <span className="font-semibold">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping Charge</span>
                  <span className="font-semibold">৳{shippingCharge}</span>
                </div>
              </div>

              <div className="hidden md:flex   justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-3xl font-bold text-green-600">৳{total}</span>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors mb-3">
                Proceed to Payment ( ৳ {total} )
              </button>

              {/* <button className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 rounded-lg transition-colors">
                Continue Shopping
              </button> */}

              <div className="mt-6 pt-6 border-t">
                <p className="text-xs text-gray-600 text-center">
                  ✓ Secure checkout
                  <br />✓ Free returns
                  <br />✓ 100% authentic products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
