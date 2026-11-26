
"use client";

import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Later, connect this to your newsletter API.
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-gray-900 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-white/10 p-3">
            <HiOutlineMail className="h-7 w-7 text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Subscribe to Our Newsletter
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
          Get the latest updates, exclusive offers, and special discounts
          delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-white" aria-live="polite">
            {message}
          </p>
        )}

        <p className="mt-4 text-xs text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
