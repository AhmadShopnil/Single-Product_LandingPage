// HeroSection Component (Updated for better scaling)
export const HeroSection = () => (
    <section className="relative h-[90vh] flex items-end md:items-center pb-12 text-white overflow-hidden" 
             style={{ backgroundImage: "url('/images/1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Added max-w-lg and mx-auto for desktop centering */}
        <div className="relative z-10 p-6 md:p-12 md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:ml-20">

        
            <span className="inline-block bg-green-500 text-xs font-semibold px-3 py-1 mb-2 rounded-full uppercase tracking-wider shadow-md">
                 Freshness Guarantee
            </span>
            
            <h1 className="text-5xl font-extrabold leading-tight mb-4 lg:text-6xl">
                The Purest Organic Fuel for Your Health.
            </h1>
            
            <p className="text-xl mb-8 opacity-95">
                Limited stock remaining! Get 30% off our bestseller for the next 4 hours.
            </p>
            
            {/* Primary CTA (Scales to full width on mobile, less wide on desktop) */}
            <a href="#purchase" 
               className="w-full block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] md:w-auto md:inline-block md:px-12">
                Order Direct Now
            </a>
        </div>
    </section>
);