export default function Features() {
  const features = [
    {
      icon: "🌿",
      title: "Natural Food",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "✓",
      title: "Biologically Safe",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "🌍",
      title: "Conserve Biodiversity",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Our Features</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              {/* <button className="mt-6 text-green-600 hover:text-green-700 font-semibold text-sm">Read More →</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
