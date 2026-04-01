"use client";

import Link from "next/link";

export default function Blog3() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔷 HERO */}
      <div className="relative h-[50vh] flex items-center justify-center text-white text-center">

        <img
          src="https://miro.medium.com/1*z-rUawcz-H8L8CpR1Mj4Jg.png"
          alt="blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <h1 className="relative z-10 text-3xl md:text-5xl font-bold px-6">
          Next.js vs React: What to Choose? ⚡
        </h1>
      </div>

      {/* 🔷 CONTENT */}
      <div className="max-w-4xl mx-auto py-16 px-6 bg-white shadow-lg rounded-2xl -mt-20 relative z-10">

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          React is a powerful JavaScript library used for building user interfaces,
          while Next.js is a framework built on top of React that adds powerful features.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With Next.js, you get server-side rendering (SSR), file-based routing,
          better SEO, and optimized performance out of the box.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          React is great for flexibility, but Next.js is ideal for production-ready
          applications that require speed, scalability, and SEO.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          👉 If you're building a modern website or startup product,
          Next.js is usually the better choice 🚀
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