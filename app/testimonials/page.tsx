// app/testimonials/page.tsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services/testimonials", { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data.success) setTestimonials(data.data);
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

      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-4xl font-bold">What Our Clients Say 💬</h1>
        <p className="text-gray-400 mt-4">
          Real results. Real feedback. Real trust.
        </p>
      </section>

      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {loading ? (
            <p className="text-white col-span-full text-center">Loading testimonials...</p>
          ) : (
            testimonials.map(t => (
              <div key={t._id} className="bg-white/10 p-6 rounded-xl flex flex-col items-center">
                
                {/* Avatar Image */}
                {t.avatarUrl && (
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                )}

                <p className="text-center">"{t.message}"</p>
                <h3 className="mt-4 font-semibold">{t.name}</h3>
                {t.designation && (
                  <p className="text-gray-400">{t.designation} - {t.company}</p>
                )}
              </div>
            ))
          )}

        </div>
      </section>
    </>
  );
}