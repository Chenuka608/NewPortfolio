"use client";

import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="hero"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <main className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center px-6 py-12 text-gray-900 text-center">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 text-black">
            Chenuka Sarathchandra.
          </h1>
          <p className="text-base sm:text-lg text-gray-900 max-w-3xl mx-auto mb-4 sm:mb-6">
            Software Engineer at Heart | Perfectionist at work
          </p>
          <blockquote className="text-gray-700 italic border-l-4 border-gray-400 pl-4 max-w-3xl mx-auto text-sm sm:text-base">
            “Simplicity is the ultimate sophistication.” – Leonardo da Vinci
          </blockquote>
        </header>

        {/* Buttons Row */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 mt-6">
          {/* Get in touch button */}
          <button
            onClick={scrollToContact}
            className="w-52 h-14 flex items-center justify-center rounded-full border-2 border-black bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 cursor-pointer"
          >
            Get in touch
          </button>

          {/* Works button */}
          <button
            onClick={scrollToWorks}
            className="w-52 h-14 flex items-center justify-center font-medium cursor-pointer rounded-full border-2 border-black bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Works <FaArrowDown className="animate-bounce text-black transition-transform duration-300 group-hover:text-white " />
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
