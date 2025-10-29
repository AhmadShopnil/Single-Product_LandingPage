export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">12</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">45</div>
                <div className="text-gray-600 text-sm">Total Branches</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">36</div>
                <div className="text-gray-600 text-sm">Countries Exporting</div>
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/organic-honey-jar-product.jpg"
              alt="Organic honey jar"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/organic-oil-bottle.jpg"
              alt="Organic oil bottle"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/organic-vegetables-display.png"
              alt="Organic vegetables"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/images/organic-food-preparation.jpg"
              alt="Organic food preparation"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
