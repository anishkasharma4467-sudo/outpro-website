"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PortfolioItem {
  _id?: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  description: string;
  kpis: Record<string, string>;
  slug: string;
}

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services/portfolio")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPortfolioItems(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching portfolio:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center py-20 text-gray-500">Loading portfolio...</p>
    );
  if (portfolioItems.length === 0)
    return (
      <p className="text-center py-20 text-gray-500">
        No portfolio items found.
      </p>
    );

  // Helper to clean image URLs
  const cleanImageUrl = (url: string) => {
    if (!url) return ""; // fallback
    // Remove leading slashes
    url = url.replace(/^\/+/, "");
    // If wrapped by Next.js optimizer, decode it
    if (url.includes("url=")) {
      return decodeURIComponent(url.split("url=")[1].split("&")[0]);
    }
    return url;
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Portfolio / Case Studies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => {
          const imageUrl = cleanImageUrl(item.image);

          return (
            <div
              key={item._id || index}
              className="border rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                <p className="mb-4">{item.description}</p>

                {/* KPI Boxes */}
                {item.kpis && (
                  <div className="grid grid-cols-3 gap-3 text-center mb-4">
                    {Object.entries(item.kpis).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-blue-600 text-white p-3 rounded shadow-md flex flex-col items-center justify-center"
                      >
                        <p className="font-bold text-lg">{value}</p>
                        <p className="text-xs">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}