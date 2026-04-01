"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Service = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
  features?: string[];
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");

        if (!res.ok) {
          console.error("API ERROR:", res.status);
          setError("Failed to load services");
          return;
        }

        const data = await res.json();
        console.log("DATA:", data); // 👈 Debug

        // ✅ SAFE FIX (handles all cases)
        const safeData = Array.isArray(data)
          ? data
          : data.services || [];

        setServices(safeData);
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center bg-black text-white text-center">
        <div>
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            Solutions designed to grow your business
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-center">Loading services...</p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {/* No Data */}
        {!loading && !error && services.length === 0 && (
          <p className="text-center">No services found.</p>
        )}

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(services) &&
            services.map((service) => (
              <div
                key={service._id}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>

                <p className="mb-4 text-gray-600">
                  {service.description}
                </p>

                {service.features && (
                  <ul className="mb-4 list-disc list-inside text-gray-700">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/services/${service.slug}`}
                  className="text-blue-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>

        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}