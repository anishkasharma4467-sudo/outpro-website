"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageScroll from "./components/ImageScroll";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <ImageScroll />

      <Services />

      {/* 🔷 KEY METRICS */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-600">
          Our Achievements
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
            <p className="mt-2 text-gray-700">Projects Completed</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-indigo-600">200+</h3>
            <p className="mt-2 text-gray-700">Satisfied Clients</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-indigo-600">10+</h3>
            <p className="mt-2 text-gray-700">Years of Experience</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-indigo-600">15+</h3>
            <p className="mt-2 text-gray-700">Awards Won</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <Portfolio />

      {/* 🔷 FINAL CTA */}
      <section className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to grow your business online?
        </h2>

        <p className="text-lg md:text-xl mb-8">
          Let’s build modern, scalable digital solutions together.
        </p>

        {/* ✅ BUTTON FIXED */}
        <Link href="/start">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition duration-300">
            Get Started 🚀
          </button>
        </Link>
      </section>
    </>
  );
}