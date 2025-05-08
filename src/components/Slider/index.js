"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const images = ["/img/tumb1.png", "/img/tumb2.png", "/img/tumb3.png"];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // troca a cada 3 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente
  }, [current]);

  return (
    <div className="relative w-full max-w-full object-cover mx-auto overflow-hidden  shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer p-2 "
      >
        <ArrowLeftIcon className="h-6 w-6 text-gray-300 hover:scale-115" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2"
      >
        <ArrowRightIcon className="h-6 w-6 text-gray-300 hover:text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
