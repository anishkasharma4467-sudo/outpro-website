"use client";

import Link from "next/link";

const sections = [
  {
    title: "Manage Blogs",
    desc: "Add, edit, and delete blog posts",
    link: "/blog",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  },
  {
    title: "Manage Careers",
    desc: "View job applications",
    link: "/careers",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Manage Services",
    desc: "Update service offerings",
    link: "/services",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    title: "Contact Leads",
    desc: "Check messages from users",
    link: "/contact",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
  Admin Dashboard ⚙️
</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {sections.map((item, i) => (
          <Link key={i} href={item.link}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer">

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}