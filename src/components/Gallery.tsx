import React from "react";

const items = [
  {
    title: "Blaue",
    description: "Alcova 2023 — A sculptural installation exploring material presence.",
    image: "/images/gallery1.jpg",
  },
  {
    title: "Anastasia Vitkina",
    description: "Functional objects in recycled plastic. Explorative minimalism.",
    image: "/images/gallery2.jpg",
  },
  {
    title: "Cocci Studio",
    description: "Textural ceramics from Milan. Raw, irregular, tactile.",
    image: "/images/gallery3.jpg",
  },
];

const Gallery = () => {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 tracking-tight">Projects from 2023</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
