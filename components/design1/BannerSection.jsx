"use client";

export default function BannerSection({ product }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-teal-50 via-white to-teal-50">
      <div className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            {product.title}
          </h1>
          {/* <p className="text-lg text-gray-600 mb-6">{product.subtitle}</p> */}

          {/* Price & Rating */}
          <div className="flex gap-4 items-center mb-8">
            <div className="text-3xl font-bold text-teal-700">৳{product.price}</div>
            <div className="text-sm text-gray-400 line-through">৳{product.originalPrice}</div>
            <div className="ml-4 text-sm text-yellow-500 font-medium">
              {product.rating} ★
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => window.scrollTo({ top: 2400, behavior: "smooth" })}
              className="px-14 py-3 bg-teal-600 text-white rounded-xl shadow-md hover:bg-teal-700 transition-all"
            >
              Buy Now
            </button>

          </div>

          {/* Specialties */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.specialties.map((s, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-teal-600">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div
            className="w-[340px] h-[400px] sm:w-[380px] sm:h-[440px] lg:w-[460px] lg:h-[520px] bg-gradient-to-tr from-teal-300 via-teal-400 to-teal-500 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            style={{ clipPath: "polygon(0 12%, 100% 0, 100% 85%, 0 100%)" }}
          >
            <img
              src={product.images[0]}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-8 bg-white p-3 rounded-xl shadow-md text-sm border border-gray-100">
            <div className="font-semibold text-teal-700">Limited Edition</div>
            <div className="text-xs text-gray-500">
              Free exchange within 7 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
