"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0 flex items-center">
          <img
            src="/images/logo3.png"
            alt="Chenuka Logo"
            className="w-20 h-auto mr-3"
          />
          <span className="font-semibold text-lg">Chenuka Sarathchandra</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-6 md:mb-0 text-2xl">
          <a
            href="https://www.linkedin.com/in/chenuka-sarathchandra-353334266/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Chenuka608"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/chenuka47/?utm_source=qr&igsh=M3dsdmhsanZ2cW9w#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 text-center md:text-right">
          &copy; 2025 Chenuka Sarathchandra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
