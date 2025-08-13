"use client";

import { useEffect, useState, useRef } from "react";

export default function Video() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full h-screen md:h-[80vh] relative overflow-hidden">
      {/* No extra padding, full viewport height, relative for absolute children */}

      {/* Caption */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20  bg-opacity-60 px-6 py-3 rounded-md text-white font-semibold text-3xl md:text-3xl pointer-events-none select-none max-w-[90%] text-center">
        Every Detailed Accounted For.
      </div>

      {/* Video */}
      <video
        ref={containerRef}
        src="/images/BYD.mp4"
        muted
        loop
        playsInline
        autoPlay
        className={`w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
}
