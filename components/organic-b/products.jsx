export default function Products() {
  const products = [
    { name: "Honey", price: "10", image: "/images/1.png" },
    { name: "Oil", price: "15", image: "/images/1.png" },
    { name: "Ghee", price: "20", image: "/images/1.png" },
    { name: "Spices", price: "8", image: "/images/1.png" },
    { name: "Nuts", price: "25", image: "/images/1.png"},
    { name: "Seeds", price: "12", image: "/images/1.png" },
  ]

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Other Products</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={product?.image}
                alt={product.name}
                className="w-full h-32 md:h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-bold">৳ {product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
