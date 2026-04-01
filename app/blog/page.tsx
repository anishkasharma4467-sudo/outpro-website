"use client";

import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Scale Your Business Digitally 🚀",
    desc: "Learn proven strategies to grow your business using modern web technologies and marketing.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    id: 2,
    title: "Why UI/UX Matters in 2026 🎨",
    desc: "Good design is not just about looks — it's about user experience and conversions.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    id: 3,
    title: "Next.js vs React: What to Choose? ⚡",
    desc: "A detailed comparison to help you pick the right framework for your project.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔷 HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Blog ✍️
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Insights, strategies, and ideas to help your business grow digitally.
          </p>
        </div>
      </section>

      {/* 🔷 BLOG SECTION */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {blog.desc}
                </p>

                {/* Button */}
                <Link href={`/blog/${blog.id}`}>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                    Read More →
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}