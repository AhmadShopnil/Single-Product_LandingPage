
"use client"
import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';
import { HeroSection } from '../../components/organic-food/HeroSection';
import { CountdownSection } from '../../components/organic-food/CountdownSection';
import { FeaturesSection } from '../../components/organic-food/FeaturesSection';
import { ReviewsSection } from '../../components/organic-food/ReviewsSection';
import { PurchaseSection } from '../../components/organic-food/PurchaseSection';

const shippingData = {
    Dhaka: 80, // Example shipping charge
    Chittagong: 120,
    Other: 150, // Default for districts not listed
};



 const Home = () => {

    const [quantity, setQuantity] = useState(1);
    const [selectedDistrict, setSelectedDistrict] = useState('Dhaka');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        thana: '',
        address: '',
    });

    const PRODUCT_PRICE = 499; 
    const shippingCharge = shippingData[selectedDistrict] || shippingData.Other;
    
 
    const totalPrice = useMemo(() => {
        return (PRODUCT_PRICE * quantity) + shippingCharge;
    }, [quantity, shippingCharge]);

  
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to an API
        console.log('--- Order Placed ---');
        console.log('Product Total:', PRODUCT_PRICE * quantity);
        console.log('Shipping:', shippingCharge);
        console.log('Grand Total:', totalPrice);
        console.log('Customer Details:', formData);
        alert(`Order placed for ${formData.name}! Total: ${totalPrice} Taka.`);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Head>...</Head>
            <main>
                <HeroSection />
                <CountdownSection />
                <FeaturesSection />
               
                
             
                <PurchaseSection 
                    quantity={quantity}
                    setQuantity={setQuantity}
                    selectedDistrict={selectedDistrict}
                    setSelectedDistrict={setSelectedDistrict}
                    formData={formData}
                    setFormData={setFormData}
                    totalPrice={totalPrice}
                    shippingData={shippingData}
                    PRODUCT_PRICE={PRODUCT_PRICE}
                    handlePlaceOrder={handlePlaceOrder}
                />
                 <ReviewsSection />
            </main>
        </div>
    );
};

export default Home;