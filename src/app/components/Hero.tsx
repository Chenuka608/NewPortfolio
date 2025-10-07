"use client";

import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-in-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* ✅ Background Image Layer */}
      <Image
        src="/images/bg.jpg"
        alt="Hero background"
        fill
        priority
        quality={100}
        style={{ objectFit: "cover" }}
      />

      {/* ✅ Foreground Content */}
      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center items-center px-6 py-12 text-gray-900 text-center backdrop-blur-[2px]">
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

        {/* Buttons */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-6 mt-6">
          <button
            onClick={scrollToContact}
            className="w-52 h-14 flex items-center justify-center rounded-full border-2 border-black bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            Get in touch
          </button>

          <button
            onClick={scrollToWorks}
            className="w-52 h-14 flex items-center justify-center font-medium rounded-full border-2 border-black bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              Works <FaArrowDown className="animate-bounce text-black group-hover:text-white transition-transform duration-300" />
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
