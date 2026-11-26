
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Welcome to ShopEase
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-4">
              Discover Your
              <span className="text-blue-600"> Perfect Style</span>
            </h1>

            <p className="text-gray-600 mt-6 leading-7 max-w-lg">
              Explore our exclusive collection of products.
              Find your favorites, enjoy amazing deals and
              experience shopping like never before.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/shop"
                className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Shop Now
              </Link>

              <Link
                href="/about"
                className="border border-gray-400 text-gray-800 px-7 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Explore More
              </Link>
            </div>

            {/* Highlights */}
            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  10K+
                </h3>
                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  500+
                </h3>
                <p className="text-sm text-gray-500">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4.9
                </h3>
                <p className="text-sm text-gray-500">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
              alt="Shopping collection"
              className="w-full max-w-xl h-[350px] md:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
