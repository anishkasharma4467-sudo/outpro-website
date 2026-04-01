"use client";

import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full-Time",
    desc: "Build modern, responsive web applications using React & Next.js.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Backend Developer",
    location: "Remote / India",
    type: "Full-Time",
    desc: "Work on APIs, databases, and scalable backend systems.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    desc: "Design clean and user-friendly interfaces for web & mobile.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Part-Time",
    desc: "Manage SEO, ads, and social media campaigns.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔷 HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">

        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="careers"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Team 🚀
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Build your career with a fast-growing digital company.
          </p>
        </div>
      </section>

      {/* 🔷 JOB LIST */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* IMAGE */}
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>

                <p className="text-gray-600 text-sm mb-1">
                  📍 {job.location}
                </p>

                <p className="text-gray-600 text-sm mb-3">
                  💼 {job.type}
                </p>

                <p className="text-gray-700 mb-6">
                  {job.desc}
                </p>

                {/* APPLY BUTTON */}
                <Link href="/contact">
                  <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                    Apply Now 🚀
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* 🔷 CTA */}
      <section className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Don’t See Your Role?
        </h2>

        <p className="text-gray-300 mb-6">
          Send us your resume and we’ll get back to you.
        </p>

        <Link href="/contact">
          <button className="bg-blue-500 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition">
            Contact Us 🚀
          </button>
        </Link>
      </section>

    </div>
  );
}