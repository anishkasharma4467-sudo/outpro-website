"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/services/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 🔥 IMPORTANT
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Saved ✅");

        // clear form
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error saving message ❌");
      }
    } catch (error) {
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">

        {/* 🔷 LEFT SIDE */}
        <div className="relative text-white p-10 flex flex-col justify-center">

          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240528/pngtree-background-of-monitor-computer-with-online-game-streaming-desktop-image_15734081.jpg"
            alt="office"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6">
              Talk to Experts 🚀
            </h1>

            <p className="text-gray-200 mb-8 text-lg">
              Have a project in mind? Let’s discuss how we can help you scale your business.
            </p>

            <div className="space-y-4 text-gray-200 text-lg">
              <p>📧 support@outpro.india</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>

        {/* 🔷 RIGHT SIDE */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}