"use client";

import Link from "next/link";

export default function Blog1() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔷 HERO */}
      <div className="relative h-[50vh] flex items-center justify-center text-white text-center">

        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-3xl md:text-5xl font-bold px-6">
          How to Scale Your Business Digitally 🚀
        </h1>
      </div>

      {/* 🔷 CONTENT */}
      <div className="max-w-4xl mx-auto py-16 px-6 bg-white shadow-lg rounded-2xl -mt-20 relative z-10">

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Scaling your business digitally requires a strong online presence, optimized performance, and modern tools.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Start with a fast website using technologies like Next.js, improve SEO, and focus on user experience.
          Invest in digital marketing strategies like social media, Google Ads, and content marketing.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Use analytics tools to track growth and automate processes wherever possible. The future is digital — adapt fast 🚀
        </p>

        {/* 🔙 BACK */}
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