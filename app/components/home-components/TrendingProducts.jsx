
import ProductCard from "../common/ProductCard";

const trendingProducts = [
  {
    id: 1,
    name: "Classic Sneakers",
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    price: 2499,
    oldPrice: 3499,
    discount: 29,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Premium Watch",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Stylish Headphones",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    price: 1599,
    oldPrice: 2199,
    discount: 27,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Modern Backpack",
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    price: 1299,
    oldPrice: 1799,
    discount: 28,
    rating: 4.6,
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">

          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Popular Right Now
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Trending Products
            </h2>

            <p className="text-gray-500 mt-3">
              Explore products everyone is loving right now.
            </p>
          </div>

          <a
            href="/shop"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            View All Products →
          </a>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
