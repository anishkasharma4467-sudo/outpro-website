import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center justify-center bg-gradient-to-r from-black to-gray-900 text-white text-center px-6">
      <div className="max-w-3xl">

        {/* HEADING */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Elevate Your <span className="text-blue-400">Digital Presence with OUTPRO.INDIA</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 md:mt-10 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
          We build modern, scalable and high-performance digital solutions
          designed to help your business grow faster and stand out online.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 md:mt-12 flex justify-center gap-5">

          {/* ✅ FIXED BUTTON */}
          <Link href="/start">
            <button className="bg-blue-500 px-7 py-3 rounded-lg font-medium text-lg hover:scale-105 hover:bg-blue-600 transition">
              Get Started
            </button>
          </Link>

          {/* SECOND BUTTON */}
          <Link href="/portfolio">
            <button className="border border-gray-400 px-7 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition">
              View Portfolio
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}