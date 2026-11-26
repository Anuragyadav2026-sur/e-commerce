
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "Amazing shopping experience! The product quality is excellent and delivery was faster than expected. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "I absolutely love the products. The website is easy to use, prices are reasonable, and customer service is very helpful.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Verified Customer",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 4,
    review:
      "Great collection and smooth shopping experience. My order arrived safely and the quality was exactly what I expected.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Customer Reviews
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. See what our
            happy customers have to say about their experience.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 text-sm mb-8">
                "{item.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 border-t pt-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
