"use client"

import { useState } from "react";

// PurchaseSection Component (Accepts props from parent)
export const PurchaseSection = ({ 
    quantity, setQuantity, selectedDistrict, setSelectedDistrict, 
    formData, setFormData, totalPrice, shippingData, PRODUCT_PRICE, 
    handlePlaceOrder 
}) => {
    // Mock image data for gallery
    const images = ['/images/2.png', '/images/3.png', '/images/3.png'];
    const [mainImage, setMainImage] = useState(images[0]);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const shippingCharge = shippingData[selectedDistrict] || shippingData.Other;

    return (
        <section id="purchase" className="py-12 px-4 md:py-16 bg-white border-t border-gray-100">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                Order Now & Experience the Purity
            </h2>

            {/* Desktop: Two-Column Layout (Image/Details on left, Form on right) */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* LEFT COLUMN: Product Gallery & Price Details */}
                <div>
                    {/* Main Image */}
                    <div className="bg-gray-100 p-2 rounded-2xl mb-4 shadow-xl overflow-hidden">
                        {/* In a real app, use <Image> here for Next.js optimization */}
                        <img src={mainImage} alt="Organic Product" className="w-full h-80 object-cover rounded-xl" />
                    </div>
                    
                    {/* Thumbnail Gallery (Modern UI: Selectors) */}
                    <div className="flex space-x-3 justify-center mb-8">
                        {images.map((img, index) => (
                            <div key={index} 
                                 className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${mainImage === img ? 'border-green-500 shadow-md' : 'border-gray-200'}`}
                                 onClick={() => setMainImage(img)}>
                                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Quantity Selector */}
                    <div className="bg-green-50 p-4 rounded-xl flex items-center justify-between shadow-inner">
                        <span className="text-xl font-semibold text-gray-700">Quantity:</span>
                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-10 h-10 bg-white border border-gray-300 rounded-full text-xl font-bold hover:bg-gray-100 transition duration-150 shadow-sm">
                                -
                            </button>
                            <span className="text-2xl font-black text-green-700 w-8 text-center">{quantity}</span>
                            <button 
                                onClick={() => setQuantity(q => q + 1)}
                                className="w-10 h-10 bg-white border border-gray-300 rounded-full text-xl font-bold hover:bg-gray-100 transition duration-150 shadow-sm">
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Direct Checkout Form */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-2xl sticky top-4 md:p-8 border border-green-200">
                    <h3 className="text-2xl font-bold text-green-600 mb-6 border-b pb-3 flex items-center">
                        {/* <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full mr-2">1</span>  */}
                        <span>Shipping Details</span>
                    </h3>
                    
                    <form onSubmit={handlePlaceOrder}>
                        
                        {/* Form Fields */}
                        <div className="space-y-4 mb-6">
                            <input type="text" name="name" placeholder="Full Name (required)" required 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                                onChange={handleFormChange} value={formData.name} />
                            
                            <input type="tel" name="phone" placeholder="Phone Number (required)" required 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                                onChange={handleFormChange} value={formData.phone} />
                            
                            <select name="district" required 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-white"
                                onChange={(e) => setSelectedDistrict(e.target.value)} value={selectedDistrict}>
                                <option value="" disabled>Select District</option>
                                {Object.keys(shippingData).map(dist => (
                                    <option key={dist} value={dist}>{dist}</option>
                                ))}
                                <option value="Other">Other District</option>
                            </select>

                            <input type="text" name="thana" placeholder="Thana / Upazila (required)" required 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                                onChange={handleFormChange} value={formData.thana} />

                            <textarea name="address" placeholder="Full Address with Landmark (required)" rows="3" required 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" 
                                onChange={handleFormChange} value={formData.address}></textarea>
                        </div>

                        {/* Order Summary & Total */}
                        <h3 className="text-2xl font-bold text-green-600 mb-4 border-b pb-3 flex items-center">
                            {/* <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full mr-2">2</span>  */}
                            <span>Order Summary</span>
                        </h3>
                        
                        <div className="space-y-2 text-gray-700 mb-6">
                            <div className="flex justify-between">
                                <span>Product Price ({quantity} x {PRODUCT_PRICE} Tk)</span>
                                <span>{PRODUCT_PRICE * quantity} Tk</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping Charge ({selectedDistrict})</span>
                                <span className="text-orange-500 font-semibold">{shippingCharge} Tk</span>
                            </div>
                            <div className="flex justify-between pt-3 border-t-2 border-green-200">
                                <span className="text-2xl font-extrabold text-gray-800">Grand Total:</span>
                                <span className="text-3xl font-extrabold text-green-600">{totalPrice} Tk</span>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <button 
                            type="submit"
                            className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 
                            rounded-xl shadow-2xl transition duration-300 text-lg tracking-wide uppercase transform hover:scale-[1.01]"
                        >
                            Order Now ({totalPrice} Tk)
                        </button>
                        
                        <p className="text-center text-sm text-gray-500 mt-3">
                            Cash on Delivery (COD) available.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};