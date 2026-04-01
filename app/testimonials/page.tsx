// app/testimonials/page.tsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

// ✅ Define a TypeScript type for testimonial objects
interface Testimonial {
  _id: string;
  name: string;
  message: string;
  avatarUrl?: string;
  designation?: string;
  company?: string;
}

export default function TestimonialsPage() {
  // ✅ Type the state
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services/testimonials", { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data.success) setTestimonials(data.data); // data.data should be Testimonial[]
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching testimonials:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl font-bold">What Our Clients Say 💬</h1>
        <p className="text-gray-400 mt-4">
          Real results. Real feedback. Real trust.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {loading ? (
            <p className="text-white col-span-full text-center">Loading testimonials...</p>
          ) : (
            testimonials.map(t => (
              <div
                key={t._id}
                className="bg-white/10 p-6 rounded-xl flex flex-col items-center"
              >
                {/* Avatar */}
                {t.avatarUrl && (
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                )}

                {/* Message */}
                <p className="text-center">"{t.message}"</p>

                {/* Name */}
                <h3 className="mt-4 font-semibold">{t.name}</h3>

                {/* Designation + Company */}
                {t.designation && (
                  <p className="text-gray-400">
                    {t.designation} {t.company ? `- ${t.company}` : ""}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
