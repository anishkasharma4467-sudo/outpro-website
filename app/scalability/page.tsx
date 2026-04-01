"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCloud,
  FaLock,
  FaCogs,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa";

export default function ScalabilityPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* 🔷 HERO */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-r from-black to-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Built to Scale <br />
              <span className="text-blue-400">With Your Growth 🚀</span>
            </h1>

            <p className="text-gray-300 mb-8">
              Future-ready architecture designed for performance, flexibility, and seamless expansion.
            </p>

            <div className="flex gap-4">
              <Link href="/services">
                <button className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600">
                  Get Started
                </button>
              </Link>

              <Link href="/contact">
                <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black">
                  Talk to Experts
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              className="rounded-2xl shadow-2xl w-full max-w-md"
              alt="growth"
            />
          </div>

        </div>
      </section>

      {/* 🔷 CLICKABLE FUTURE FEATURES */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Future Expansion Modules 🚀
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Blog Page 📰", link: "/blog" },
              { name: "Careers Page 💼", link: "/careers" },
              { name: "Admin Dashboard ⚙️", link: "/admin" },
              { name: "Partner Program 🤝", link: "/partners" },
            ].map((item, i) => (
              <Link key={i} href={item.link}>
                <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105 cursor-pointer font-semibold">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Scalability Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLayerGroup size={28} />,
              title: "Modular Development",
              desc: "Add features anytime.",
            },
            {
              icon: <FaCogs size={28} />,
              title: "API Driven",
              desc: "Easy integrations.",
            },
            {
              icon: <FaCloud size={28} />,
              title: "Cloud Infra",
              desc: "Auto scaling.",
            },
            {
              icon: <FaRocket size={28} />,
              title: "Performance",
              desc: "Fast loading.",
            },
            {
              icon: <FaChartLine size={28} />,
              title: "Growth Ready",
              desc: "Future expansion.",
            },
            {
              icon: <FaLock size={28} />,
              title: "Secure",
              desc: "Safe systems.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow-md border"
            >
              <div className="mb-3 text-blue-500">{f.icon}</div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔷 CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something That Grows With You?
        </h2>

        <Link href="/portfolio">
          <button className="bg-blue-500 px-8 py-3 rounded-xl hover:bg-blue-600">
            Start Your Project 🚀
          </button>
        </Link>
      </section>

    </div>
  );
}