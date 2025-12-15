"use client";

import { useState } from "react";
import { MdOutlineTerminal } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 border-b border-gray-200">
      {/* Logo Section */}
      <div className="">
        <a href="#home" className="flex items-center">
          <span className="flex items-center justify-center bg-blue-100 p-2 rounded-full mr-3">
            <MdOutlineTerminal className="text-2xl text-blue-600" />
          </span>
          <h1 className="text-xl font-bold">Siva Padmanaban</h1>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#experience" className="text-gray-700 hover:text-blue-600">
          Experience
        </a>
        <a href="#techStack" className="text-gray-700 hover:text-blue-600">
          Tech Stack
        </a>
        <a href="#connect" className="text-gray-700 hover:text-blue-600">
          Contact
        </a>

        <a
          href="/assets/cv/SIVA-PADMANABAN-Senior-Software-Engineer-Resume-2025.pdf"
          download
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        type="button"
        className="md:hidden ml-4"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col py-4 md:hidden z-40">
          <a href="#experience" className="px-6 py-2 hover:bg-gray-100">
            Experience
          </a>
          <a href="#techStack" className="px-6 py-2 hover:bg-gray-100">
            Tech Stack
          </a>
          <a href="#connect" className="px-6 py-2 hover:bg-gray-100">
            Contact
          </a>
          <a
            href="/assets/cv/SIVA-PADMANABAN-Senior-Software-Engineer-Resume-2025.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white text-center mt-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
