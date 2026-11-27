
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10">

        {/* Register Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account to start shopping with us.
          </p>

        </div>

        {/* Register Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
              autoComplete="new-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              autoComplete="new-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2">

            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="w-4 h-4 mt-1 accent-black"
            />

            <label
              htmlFor="terms"
              className="text-sm text-gray-600"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-black hover:underline"
              >
                Terms & Conditions
              </Link>
            </label>

          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-8">

          Already have an account?{" "}

          <Link
            href="/auth/login"
            className="font-semibold text-black hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}
