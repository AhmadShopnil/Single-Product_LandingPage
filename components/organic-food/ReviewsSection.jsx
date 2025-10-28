
export const ReviewsSection = () => {
  const reviews = [
    { name: 'Sarah M.', rating: 5, quote: 'The best quality produce I’ve ever ordered online. Truly fresh and vibrant!', product: 'Fruit Box' },
    { name: 'John P.', rating: 5, quote: 'I feel so much better since switching to their organic selection. Highly recommend!', product: 'Vegetable Pack' },
  ];
  
  const StarRating = ({ count }) => (
    <div className="flex text-yellow-500">
      {'★'.repeat(count)}
      {'☆'.repeat(5 - count)}
    </div>
  );

  return (
    <section className="py-12 px-6 bg-yellow-50 md:py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What Our Customers Say</h2>
      <p className="text-center text-gray-600 mb-10">4.9/5 stars based on 1,200+ happy customers</p>
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <StarRating count={review.rating} />
            <p className="text-gray-700 italic mt-3 mb-4 leading-relaxed">"{review.quote}"</p>
            <p className="text-sm font-semibold text-gray-800">— {review.name} <span className="text-gray-500 font-normal">on {review.product}</span></p>
          </div>
        ))}
      </div>
      
      {/* Secondary CTA - Encourages scrolling up/buying */}
      <div className="text-center mt-8">
        <a href="#purchase" className="text-green-600 font-semibold hover:text-green-700 transition duration-300">
          Ready to experience the difference? &rarr;
        </a>
      </div>
    </section>
  );
};