"use client";

import Link from "next/link";

export default function ECommercePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">

      {/* Back Link */}
      <Link
        href="/portfolio"
        className="text-blue-600 hover:underline inline-block"
      >
        &larr; Back to Portfolio
      </Link>

      {/* YouTube Demo Video */}
      <div className="w-full h-64 md:h-96 rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wZuGGZG9PwQ"
          title="E-Commerce Platform Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
          <p>Stripe & PayPal integration for safe and smooth checkouts.</p>
        </div>

        <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Analytics Dashboard</h3>
          <p>Track sales, user behavior, and performance metrics in real time.</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Responsive UX</h3>
          <p>Design optimized for mobile, tablet, and desktop.</p>
        </div>

        <div className="bg-yellow-400 text-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Inventory & Orders</h3>
          <p>Easy management of products, stock, and customer orders.</p>
        </div>

        <div className="bg-yellow-400 text-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Support & SEO Optimization</h3>
          <p>Built‑in SEO tools plus support chats and notifications.</p>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          Project Overview
        </h2>
        <p className="text-gray-700">
          This E‑Commerce platform is designed for scalability, security, and
          exceptional user experience. It currently supports 15,000+ users and
          generates $120k+ in monthly revenue with a 35% QoQ growth rate.
        </p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Stripe & PayPal integration</li>
          <li>Advanced analytics dashboard</li>
          <li>Responsive across all devices</li>
          <li>Inventory & order management</li>
          <li>SEO optimization and fast pages</li>
          <li>Promotions, coupons & multi-language support</li>
        </ul>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          <p className="font-bold text-lg">15k+</p>
          <p className="text-xs">Users</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          <p className="font-bold text-lg">$120k+</p>
          <p className="text-xs">Revenue</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          <p className="font-bold text-lg">35%</p>
          <p className="text-xs">Growth QoQ</p>
        </div>
      </div>

    </section>
  );
}