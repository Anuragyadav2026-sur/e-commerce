
import Link from "next/link";

const DealSection = () => {
  return (
    <section className="px-4 py-16 md:px-10 lg:px-16">

      <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-16 text-white md:px-16">

        <div className="relative z-10 max-w-2xl">

          <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            Limited Time Offer
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Mega Shopping
            <span className="block text-yellow-400">
              Sale Up To 50% OFF
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-gray-300">
            Grab your favorite products at amazing prices.
            Don't miss out on these exclusive deals.
          </p>

          <Link
            href="/deals"
            className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            Shop Deals Now →
          </Link>

        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full border-[40px] border-white/10 md:h-96 md:w-96" />

        <div className="pointer-events-none absolute bottom-0 right-20 h-48 w-48 rounded-full bg-red-500/20 blur-3xl" />

      </div>

    </section>
  );
};

export default DealSection;
