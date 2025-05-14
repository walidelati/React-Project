import React, { useState, useEffect } from "react";

const slides = [
  "/images/alcova1.png",
  "/images/alcova2.png",
  "/images/alcova3.png",
  "/images/alcova4.png"
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden font-sans">
      {/* Immagine + overlay */}
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover transition duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Testo sovrapposto */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center px-4 pb-24 z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">ALCOVA 2024</h1>
          <p className="mt-4 text-xl md:text-2xl">
            Design. Architecture. Performance. Milano Design Week.
          </p>
        </div>
      </div>

      {/* Pulsanti navigazione */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
};

export default HeroSlider;
