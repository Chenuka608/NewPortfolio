"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <main className="max-w-4xl w-full flex flex-col justify-center px-6 py-12 text-gray-900">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 text-black">
            Chenuka Sarathchandra
          </h1>
          <p className="text-base sm:text-lg text-gray-900 max-w-xl mb-4 sm:mb-6">
            Software Engineer at Heart | Perfectionist at work
          </p>
          <blockquote className="text-gray-700 italic border-l-4 border-gray-400 pl-4 max-w-xl text-sm sm:text-base">
            “Simplicity is the ultimate sophistication.” – Leonardo da Vinci
          </blockquote>
        </header>

        <div className="flex flex-row items-start space-x-6">
          {/* Get in touch button as a link */}
          <a
            href="#contact"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            className="relative w-52 h-12 rounded-full cursor-pointer"
            style={{ perspective: "800px" }}
          >
            <div
              className="relative w-full h-full rounded-full flex items-center justify-center font-semibold transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
              }}
            >
              <span
                className="absolute inset-0 rounded-full bg-black text-white flex items-center justify-center select-none"
                style={{ backfaceVisibility: "hidden" }}
              >
                Get in touch
              </span>

              <span
                className="absolute inset-0 rounded-full bg-white text-black border-2 border-black flex items-center justify-center select-none"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                Get in touch
              </span>
            </div>
          </a>

          <a
            href="#works"
            className="text-black font-medium hover:underline cursor-pointer text-base sm:text-lg self-center"
          >
            Works
          </a>
        </div>
      </main>
    </div>
  );
}
