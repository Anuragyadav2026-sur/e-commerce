const features = [
  {
    id: 1,
    icon: "🚚",
    title: "Free Shipping",
    description:
      "Enjoy free shipping on orders above ₹999. Get your products delivered to your doorstep.",
  },
  {
    id: 2,
    icon: "🔒",
    title: "Secure Payment",
    description:
      "Shop confidently with safe and secure payment options for every transaction.",
  },
  {
    id: 3,
    icon: "↩️",
    title: "Easy Returns",
    description:
      "Not satisfied with your purchase? Enjoy a simple and hassle-free return process.",
  },
  {
    id: 4,
    icon: "🎧",
    title: "24/7 Support",
    description:
      "Our customer support team is always ready to help you with your shopping experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Why Shop With Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Why Choose Us?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We make your shopping experience simple,
            secure and enjoyable with services you can trust.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl text-center border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-50 rounded-full text-3xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 leading-6">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}