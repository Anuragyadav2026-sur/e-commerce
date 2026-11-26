
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">

        <p className="text-xs text-gray-500 mb-2">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-xs text-gray-500">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Button */}
        <Link
          href={`/products/${product.id}`}
          className="block text-center bg-gray-900 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition"
        >
          View Product
        </Link>

      </div>
    </div>
  );
}
