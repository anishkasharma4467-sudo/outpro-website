import Link from "next/link";

export default function DigitalMarketing() {
  return (
    <div className="text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')",
          }}
        ></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold">Digital Marketing</h1>
          <p className="mt-4 text-lg">
            We help you grow your business with powerful online marketing strategies
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 text-center text-gray-900 bg-white">
        <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Our digital marketing services focus on increasing your brand visibility,
          driving traffic, and generating high-quality leads through proven strategies.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gray-100 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "SEO Optimization",
            "Social Media Marketing",
            "Google Ads Campaigns",
            "Content Marketing",
            "Email Marketing",
            "Analytics & Reporting",
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>

        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}