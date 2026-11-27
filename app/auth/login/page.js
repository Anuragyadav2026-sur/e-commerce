
import Link from "next/link";
import registerPage from "@/app/auth/register/page";
import forgotPasswordPage from "@/app/auth/forgot-password/page";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10">

        {/* Login Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Please enter your details to sign in.
          </p>

        </div>

        {/* Login Form */}
        <form className="space-y-5">

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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">

              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <Link
                href="/auth/forgot-password"
                className="text-sm font-medium text-gray-900 hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-4 h-4 accent-black"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-600"
            >
              Remember me
            </label>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-8">

          Don't have an account?{" "}

          <Link
            href="/auth/register"
            className="font-semibold text-black hover:underline"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}
