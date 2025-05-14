import React, { useEffect, useRef } from "react";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const images = [
  "/images/alcova1.png",
  "/images/alcova2.png",
  "/images/alcova3.png",
  "/images/alcova4.png"
];

const Home = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth"
        });

        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          setTimeout(() => {
            sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
          }, 1000);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-sans bg-black">
        <div
          ref={sliderRef}
          className="w-full h-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full snap-start bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
              ALCOVA 2024
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Design. Architecture. Performance. Milano Design Week.
            </p>
          </div>
        </div>
      </div>

      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
