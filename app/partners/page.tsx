"use client";

import Link from "next/link";

const benefits = [
  {
    title: "Earn Revenue 💰",
    desc: "Get commission for every successful referral you bring.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    title: "Grow Together 📈",
    desc: "Scale your business with our digital solutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Dedicated Support 🤝",
    desc: "Get priority support and partnership assistance.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Global Opportunities 🌍",
    desc: "Work with clients from around the world.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
];

export default function PartnerPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔷 HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">

        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="partners"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Partner With Us 🤝
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Join our partner program and grow your business with Outpro.India
          </p>
        </div>
      </section>

      {/* 🔷 BENEFITS */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Partner With Us?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* 🔷 HOW IT WORKS */}
      {/* 🔷 HOW IT WORKS */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-10 text-gray-900">
      How It Works
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        "Sign Up 🤝",
        "Refer Clients 📢",
        "Earn Commission 💰",
      ].map((step, i) => (
        <div
          key={i}
          className="p-6 shadow rounded-xl bg-gray-50 hover:bg-gray-100 transition"
        >
          <h3 className="font-semibold text-lg text-gray-900">
            {step}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* 🔷 CTA */}
      <section className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Partner With Us?
        </h2>

        <p className="text-gray-300 mb-6">
          Let’s grow together and create something amazing.
        </p>

        <Link href="/contact">
          <button className="bg-blue-500 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition">
            Become a Partner 🚀
          </button>
        </Link>
      </section>

    </div>
  );
}