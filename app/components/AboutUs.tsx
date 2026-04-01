"use client";

import React from "react";
import Link from "next/link";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

// Team members data
const teamMembers = [
  {
    name: "Rahul Sharma",
    designation: "CEO & Founder",
    image:
      "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?semt=ais_hybrid&w=740&q=80",
    reason:
      "I chose Outpro.India to drive innovation and digital transformation for businesses worldwide.",
  },
  {
    name: "Priya Verma",
    designation: "CTO",
    image:
      "https://img.freepik.com/premium-photo/professional-indian-business-woman-suit-corporate-office_753390-10897.jpg",
    reason:
      "I joined Outpro.India because I wanted to build cutting-edge tech solutions that make a real impact.",
  },
  {
    name: "Amit Singh",
    designation: "Head of Marketing",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/045/783/662/small/confident-business-professional-in-suit-standing-by-office-window-emphasizing-diversity-and-modern-workplace-photo.jpg",
    reason:
      "Outpro.India’s vision aligned with my passion for data-driven digital marketing excellence.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="about-us max-w-6xl mx-auto py-16 px-6 space-y-24">

      {/* 🔷 HERO / TITLE */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 text-lg">
          Outpro.India empowers businesses digitally, delivering innovative solutions that drive real results.
        </p>
      </section>

      {/* 🔷 IMAGE */}
      <section className="flex justify-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Company Workspace"
          className="w-full md:w-2/3 rounded-lg shadow-lg"
        />
      </section>

      {/* 🔷 OUR STORY */}
      <section className="relative z-10 bg-white p-8 rounded-lg shadow-lg text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Founded with a vision to accelerate digital transformation, Outpro.India has consistently delivered cutting-edge solutions across web development, digital marketing, and UX/UI design. Our approach combines creativity, technology, and business acumen to ensure every project exceeds expectations. We build long-term partnerships by driving measurable growth and meaningful impact.
        </p>
      </section>

      {/* 🔷 MISSION / VISION / VALUES */}
      <section className="-mt-16 grid md:grid-cols-3 gap-8 text-center relative z-20">

        <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
          <FaBullseye className="text-blue-700 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Our Mission</h3>
          <p className="text-gray-800">
            To empower businesses with innovative digital solutions that drive measurable growth and create lasting impact.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
          <FaEye className="text-green-700 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-900">Our Vision</h3>
          <p className="text-gray-800">
            To be a leading digital partner globally, recognized for creativity, technology, and excellence in delivering client success.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
          <FaHeart className="text-red-700 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-red-900">Our Values</h3>
          <p className="text-gray-800">
            Innovation, Integrity, Collaboration, and Customer Success are at the heart of everything we do.
          </p>
        </div>

      </section>

      {/* 🔷 TEAM */}
      <section className="team-section py-24 px-6 space-y-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Senior Management</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />

              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-900 font-semibold mb-4 text-lg">
                {member.designation}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                {member.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 SCALABILITY CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Future Expansion? 🚀
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover how our scalable architecture supports your business growth and future innovations.
        </p>

        <Link href="/scalability">
          <button className="bg-blue-500 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition transform hover:scale-105">
            Explore Scalability
          </button>
        </Link>
      </section>

    </div>
  );
};

export default AboutUs;