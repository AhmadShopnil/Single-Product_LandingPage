// FeaturesSection Component
export const FeaturesSection = () => {
  const features = [
    { icon: '🌱', title: 'Sustainable Sourcing', description: 'From small, certified organic farms committed to earth-friendly practices.' },
    { icon: '✨', title: 'Zero Additives', description: 'No preservatives, artificial colors, or refined sugars. Just pure product.' },
    { icon: '🚚', title: 'Fresh Delivery', description: 'Guaranteed fresh with cold-chain logistics right to your doorstep, nationwide.' },
  ];

  return (
    <section className="py-12 px-6 bg-white md:py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Our Organic Products?</h2>
      
      <div className="space-y-8  grid grid-cols-1 xl:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="h-[150px] flex items-start bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <span className="text-3xl mr-4 shrink-0">{feature.icon}</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};