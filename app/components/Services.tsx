export default function Services() {
  const services = [
    {
      title: "1 Web Development",
      description: "Building fast, responsive, and scalable websites.",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      title: "2 UI/UX Design",
      description: "Designs that are intuitive, attractive, and user-friendly.",
      color: "bg-gradient-to-r from-pink-500 to-red-500"
    },
    {
      title: "3 SEO Optimization",
      description: "Rank higher on search engines and increase visibility.",
      color: "bg-gradient-to-r from-green-400 to-teal-500"
    },
    {
      title: "4 Digital Marketing",
      description: "Smart campaigns that grow your audience and conversions.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-600">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {services.map((s, i) => (
          <div
            key={i}
            className={`${s.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all text-white`}
          >
            <h3 className="text-2xl font-bold mb-3 text-left">{s.title}</h3>
            <p className="text-lg leading-relaxed text-left">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}