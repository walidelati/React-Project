import React, { useState } from "react";

const items = [
  {
    title: "ALCOVA MILANO 2024",
    image: "/images/gallery1.png",
    description:
      "The seventh edition of Alcova will be set in two of the most extraordinary villas of the Milan metropolitan area: Villa Borsani and Villa Bagatti Valsecchi."
  },
  {
    title: "ALCOVA MIAMI 2024",
    image: "/images/gallery2.png",
    description:
      "The second international edition of Alcova is set to unfold at Miami’s historic River Inn, in the vibrant South River Drive Historic District in East Little Havana."
  },
  {
    title: "ALCOVA MILANO 2023",
    image: "/images/gallery3.png",
    description:
      "With its fifth edition coming up, Alcova continues its exploration of the city of Milan with an exciting new location – the former Porta Vittoria abattoir on Via Molise."
  },
  {
    title: "ALCOVA MIAMI 2023",
    image: "/images/gallery4.png",
    description:
      "Alcova is excited to unveil its first overseas edition during Miami Art Week 2023. Set in the Gold Dust Motel, one of the architectural icons of Miami."
  },
  {
    title: "ALCOVA MILANO 2022",
    image: "/images/gallery5.png",
    description:
      "Alcova will bring back to life its beautiful Inganni location where design merges with nature, expanding its research even further and deeper."
  },
  {
    title: "ALCOVA 2021",
    image: "/images/gallery6.png",
    description:
      "The 2021 edition highlighted hidden architectural gems in Milan and launched bold new ideas in performance and installation."
  }
];

const itemsPerPage = 3;

const Gallery = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="bg-white text-black py-16 px-6 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">EXHIBITIONS</h2>
        <div className="space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`px-3 py-1 text-sm font-medium rounded ${
                page === idx ? "bg-black text-white" : "text-black hover:underline"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className="rounded overflow-hidden shadow-md transition duration-300 hover:shadow-xl bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
