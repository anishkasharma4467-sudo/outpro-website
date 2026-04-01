"use client";
import { useState } from "react";

export default function ImageScroll() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "https://cdn.prod.website-files.com/66a3375f014c1e1ac7857907/672a1e9092488c2e4f3faf51_Web-Tech-Stack-Banner-1.png",
      title: "Web Technology Stack",
      subtitle: "Modern tools for scalable development"
    },
    {
      img: "https://seomedialine.com/wp-content/uploads/2022/12/Web-Development.png.webp",
      title: "Creative Design",
      subtitle: "Designs that attract & convert"
    },
    {
      img: "https://trainings.internshala.com/blog/wp-content/uploads/2023/03/Types-of-SEO-1.jpg",
      title: "SEO Optimization",
      subtitle: "Rank higher on search engines"
    },
    {
      img: "https://www.frankwatching.com/app/uploads/2024/11/shutterstock_2473588721-1.jpg",
      title: "Digital Marketing",
      subtitle: "Grow your brand online"
    },
    {
      img: "https://www.sprinix.com/media/wysiwyg/ui-ux-banner.png",
      title: "Online Strategy",
      subtitle: "Smart campaigns that deliver results"
    }
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="h-[55vh] flex items-center justify-center bg-black">

      <div className="relative w-[80%] h-[85%] flex items-center">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute -left-10 z-10 
          bg-white text-black p-3 rounded-full shadow hover:scale-110 transition"
        >
          ◀
        </button>

        {/* IMAGE + OVERLAY */}
        <div className="relative w-full h-full">
          <img
            src={slides[index].img}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* DARK OVERLAY (for text visibility) */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* TEXT ON IMAGE */}
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-3xl font-bold">
              {slides[index].title}
            </h1>
            <p className="mt-2 text-lg">
              {slides[index].subtitle}
            </p>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute -right-10 z-10 
          bg-white text-black p-3 rounded-full shadow hover:scale-110 transition"
        >
          ▶
        </button>

      </div>
    </section>
  );
}