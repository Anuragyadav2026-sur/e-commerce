
import ProductCard from "../common/ProductCard";

const bestSellerProducts = [
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

const BestSeller = () => {
  return (
    <section className="px-4 py-16 md:px-10 lg:px-16">

      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
            Customer Favorites
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Best Sellers
          </h2>

          <p className="mt-2 text-gray-500">
            Discover our most loved products.
          </p>
        </div>

        <a href="/products?sort=bestsellers"
          className="hidden text-sm font-semibold text-black hover:text-red-500 sm:block">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default BestSeller;
