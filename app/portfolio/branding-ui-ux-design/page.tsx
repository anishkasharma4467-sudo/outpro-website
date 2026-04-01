"use client";

import Link from "next/link";

export default function UIUXPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">

      {/* Back Link */}
      <Link
        href="/portfolio"
        className="text-blue-600 hover:underline inline-block mb-6"
      >
        &larr; Back to Portfolio
      </Link>

      {/* Video Demo */}
      <div className="w-full h-64 md:h-96 rounded shadow-lg overflow-hidden mb-12">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ODpB9-MCa5s"
          title="UI/UX Design Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">High-fidelity Prototypes</h3>
          <p className="text-gray-700">Interactive web and mobile prototypes for seamless testing and feedback.</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Responsive Design</h3>
          <p className="text-gray-700">Optimized for all devices ensuring smooth user experiences.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Accessible UI</h3>
          <p className="text-gray-700">Inclusive design following accessibility best practices.</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
          <h3 className="font-bold text-lg mb-2">Optimized User Flows</h3>
          <p className="text-gray-700">Designed to maximize conversions and minimize friction.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform md:col-span-2">
          <h3 className="font-bold text-lg mb-2">Comprehensive Design System</h3>
          <p className="text-gray-700">A full design system to guide developers and ensure consistency.</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded shadow-md flex flex-col items-center">Project Overview</h2>
        <p className="text-gray-700">
          This UI/UX project was a complete brand overhaul including website and mobile app design. 
          The design focused on enhancing user engagement, increasing retention, and improving overall satisfaction.
        </p>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>Wireframes and prototypes for web and mobile</li>
          <li>Brand identity design including logos, colors, and typography</li>
          <li>Interactive dashboards with intuitive navigation</li>
          <li>User testing sessions with iterative improvements</li>
          <li>Accessible and responsive designs for all devices</li>
        </ul>
        <p className="text-gray-700">
          Resulted in a 60% increase in engagement, 45% retention, and 4.8/5 average satisfaction rating.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          <p className="font-bold text-lg">60%</p>
          <p className="text-xs">Engagement</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          <p className="font-bold text-lg">45%</p>
          <p className="text-xs">Retention</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded shadow-md flex flex-col items-center">
          <p className="font-bold text-lg">4.8/5</p>
          <p className="text-xs">Satisfaction</p>
        </div>
      </div>

    </section>
  );
}