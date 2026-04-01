export default function Portfolio() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern website built for seamless UX.",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      title: "Project Beta",
      description: "Creative design solutions for mobile apps.",
      color: "bg-gradient-to-r from-pink-500 to-red-500"
    },
    {
      title: "Project Gamma",
      description: "Digital marketing campaigns that drive traffic.",
      color: "bg-gradient-to-r from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-600">
        Our Work
      </h2>

      {/* PROJECT CARDS LEFT-ALIGNED */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-start">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`${project.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all text-white`}
          >
            <h3 className="text-2xl font-bold mb-3 text-left">{project.title}</h3>
            <p className="text-lg leading-relaxed text-left">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}