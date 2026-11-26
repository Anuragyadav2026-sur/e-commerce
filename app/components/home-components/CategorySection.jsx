
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    link: "/shop/fashion",
  },
  {
    id: 2,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
    link: "/shop/electronics",
  },
  {
    id: 3,
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    link: "/shop/footwear",
  },
  {
    id: 4,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    link: "/shop/accessories",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Explore Collections
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Shop By Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our wide range of categories and
            discover products that match your style.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className="group relative overflow-hidden rounded-xl h-72"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300" />

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
