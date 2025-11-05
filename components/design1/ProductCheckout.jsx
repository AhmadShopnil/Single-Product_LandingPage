"use client";

import { useState } from "react";
import { ShoppingCart, Phone, MapPin, User, Minus, Plus } from "lucide-react";

export default function ProductCheckout({ product }) {
  // Shipping data (district → charge)
  const districtCharges = {
    Dhaka: 60,
    Tangail: 50,
    Gazipur: 70,
    Chattogram: 120,
    Sylhet: 140,
    Rajshahi: 130,
    Other: 180,
  };

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "Dhaka",
    thana: "",
    address: "",
  });

  const shippingCharge = districtCharges[form.district] ?? districtCharges["Other"];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const subtotal = +(product.price * quantity).toFixed(2);
  const total = +(subtotal + shippingCharge).toFixed(2);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleBuyNow() {
    alert(
      ` Order placed!\n\nProduct: ${product.title}\nColor: ${selectedColor}\nSize: ${selectedSize}\nQty: ${quantity}\nDistrict: ${form.district}\nShipping: ৳${shippingCharge}\nTotal: ৳${total}`
    );
  }

  return (
    <aside className="lg:col-span-1">
      {/* Purchase Card */}
      <div className="bg-white rounded-3xl shadow-md p-6 sticky top-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="text-teal-600" size={22} />
          <h2 className="font-semibold text-lg text-gray-800">{product.title}</h2>
        </div>
        <div className="text-sm text-gray-500 mb-4">SKU: {product.id}</div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-5">
          <div className="text-3xl font-bold text-teal-600">৳{product.price}</div>
          <div className="text-sm text-gray-400 line-through">
            ৳{product.originalPrice}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Color</label>
          <div className="flex gap-2 flex-wrap">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`px-3 py-1 rounded-full text-sm border transition ${
                  selectedColor === c
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-teal-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`px-3 py-1 rounded-md text-sm border transition ${
                  selectedSize === s
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-teal-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-8">
          <h4 className="font-semibold mb-3 text-gray-800">Shipping Info</h4>
          <div className="space-y-3">
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-3 text-gray-400 pointer-events-none"
              />
              <input
                name="name"
                value={form.name}
                onChange={handleFormChange}
                placeholder="Full name"
                className="w-full border rounded-lg p-2 pl-9 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Phone
                size={16}
                className="absolute left-3 top-3 text-gray-400 pointer-events-none"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleFormChange}
                placeholder="Phone number"
                className="w-full border rounded-lg p-2 pl-9 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-3 top-3 text-gray-400 pointer-events-none"
              />
              <select
                name="district"
                value={form.district}
                onChange={handleFormChange}
                className="w-full border rounded-lg p-2 pl-9 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                {Object.keys(districtCharges).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <input
              name="thana"
              value={form.thana}
              onChange={handleFormChange}
              placeholder="Thana / Upazila"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <textarea
              name="address"
              value={form.address}
              onChange={handleFormChange}
              placeholder="Full address"
              rows={3}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Quantity */}
        {/* <div className="mt-6">
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 border rounded-lg hover:bg-gray-100 transition"
            >
              <Minus size={14} />
            </button>
            <div className="w-10 text-center font-medium">{quantity}</div>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 border rounded-lg hover:bg-gray-100 transition"
            >
              <Plus size={14} />
            </button>
          </div>
        </div> */}

        {/* Summary */}
        <div className="mt-8 border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between items-center text-gray-600">
            <span>Subtotal</span>
               <div className="">
          {/* <label className="block text-sm font-medium mb-1">Quantity</label> */}
          <div className="flex items-center justify-center gap-3 ">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-1.5 border rounded-md hover:bg-gray-100 transition"
            >
              <Minus size={9} />
            </button>
            <div className=" text-center font-medium">{quantity}</div>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1.5 border rounded-md hover:bg-gray-100 transition"
            >
              <Plus size={9} />
            </button>
          </div>
        </div>
            <span>৳{subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>৳{shippingCharge}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-3 text-gray-800">
            <span>Total</span>
            <span>৳{total}</span>
          </div>

          <button
            onClick={handleBuyNow}
            className="w-full mt-5 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-sm"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="mt-6 bg-gradient-to-r from-teal-50 to-white rounded-2xl border border-teal-100 shadow-sm p-4 text-sm">
        <div className="font-medium text-teal-700">Need help?</div>
        <div className="text-gray-600 mt-1">
          Call <span className="font-semibold text-teal-600">+8801XXXXXXXX</span> for
          quick assistance or chat with us anytime.
        </div>
      </div>
    </aside>
  );
}
