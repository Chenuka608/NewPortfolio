"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../images/logo3.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 200);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 max-w mx-auto bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={48} height={48} priority />
          <span className="text-xl font-bold">Just Perfect.</span>
        </div>

        {/* Hamburger button - always visible */}
        <button
          className="z-50 flex flex-col justify-center items-center w-10 h-10 group"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 w-6 bg-black rounded transition-transform duration-300 ease-in-out origin-left ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-black rounded my-1 transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-6 bg-black rounded transition-transform duration-300 ease-in-out origin-left ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Slide-in Menu (always full-screen) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-black text-3xl font-bold focus:outline-none"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center space-y-8 text-2xl font-semibold h-[calc(100%-64px)]">
          <button onClick={() => handleLinkClick("hero")}>Home</button>
          <button onClick={() => handleLinkClick("edu")}>Experience</button>
          <button onClick={() => handleLinkClick("about")}>About</button>
          <button onClick={() => handleLinkClick("works")}>Projects</button>
          <button onClick={() => handleLinkClick("contact")}>Contact</button>
        </nav>
      </div>
    </>
  );
}
