import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function CartIcon() {
  return (
    <Link
      href="/cart"
      aria-label="Shopping cart"
      className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600"
    >
      <HiOutlineShoppingCart size={25} />

      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
        0
      </span>

      <span className="hidden text-sm font-medium lg:inline">
        Cart
      </span>
    </Link>
  );
}