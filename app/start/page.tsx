"use client";

import Link from "next/link";

export default function StartPage() {
  return (
    <main className="h-screen w-full relative overflow-hidden flex flex-col justify-between">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sJZQcHesZyAdvbBDJxtbN8BOXVzZNmEZMA&s"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* TOP SECTION */}
      <div className="relative z-10 text-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome to <span className="text-blue-400">Outpro.India</span> 🚀
        </h1>
      </div>

      {/* MIDDLE SECTION */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="text-gray-200 text-lg max-w-xl leading-relaxed mb-6">
          Outpro is a modern digital solutions company helping businesses grow online.
We specialize in website development, marketing, and scalable tech solutions.
Our focus is on delivering impactful and result-driven experiences.
We turn ideas into powerful digital success.
        </p>

        <Link href="/about">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            About Us
          </button>
        </Link>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-10 flex justify-center gap-4 mb-12 flex-wrap">

        <Link href="/services">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            Services
          </button>
        </Link>

        <Link href="/portfolio">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Portfolio
          </button>
        </Link>

        <Link href="/testimonials">
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Testimonials
          </button>
        </Link>

      </div>

    </main>
  );
}