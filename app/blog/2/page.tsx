"use client";

import Link from "next/link";

export default function Blog2() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="relative h-[50vh] flex items-center justify-center text-white text-center">

        <img
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
          alt="blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-3xl md:text-5xl font-bold px-6">
          Why UI/UX Matters in 2026 🎨
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-6 bg-white shadow-lg rounded-2xl -mt-20 relative z-10">

        <p className="text-gray-700 text-lg mb-6">
          UI/UX plays a critical role in user engagement and conversions.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          A well-designed interface makes your product easy to use, visually appealing, and effective.
        </p>

        <p className="text-gray-700 text-lg">
          In 2026, users expect seamless experiences across all devices.
        </p>

        <div className="mt-10">
          <Link href="/blog">
            <button className="text-blue-600 font-semibold hover:underline">
              ← Back to Blogs
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
}