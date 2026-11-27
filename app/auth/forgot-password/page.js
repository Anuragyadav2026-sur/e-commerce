
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10">

        {/* Forgot Password Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-900">
            Forgot Password?
          </h1>

          <p className="text-gray-500 mt-2 leading-relaxed">
            Don't worry! Enter your registered email address
            and we'll send you a link to reset your password.
          </p>

        </div>

        {/* Forgot Password Form */}
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
              placeholder="Enter your registered email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
            />
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-600 mt-8">

          Remember your password?{" "}

          <Link
            href="/auth/login"
            className="font-semibold text-black hover:underline"
          >
            Back to Login
          </Link>

        </p>

      </div>

    </div>
  );
}
