"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import "@/app/globals.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the header background class based on state
  const headerBackgroundClass = (() => {
    // Priority 1: If menu is open, always use the solid blue background
    if (isOpen) {
      return "bg-white shadow-md";
    }

    // Priority 2: If scrolled, use the white/transparent background with blur
    if (scrolled) {
      return "bg-white/90 backdrop-blur-lg shadow-md";
    }

    // Default: Not scrolled and menu is closed, use transparent (as requested for the section)
    return "bg-transparent";
  })();

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${headerBackgroundClass}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`font-[Anton] text-3xl tracking-widest ${
            scrolled || isOpen ? "text-blue-700" : "text-white"
          } transition-colors duration-300`}
        >
        </motion.div>

        {/* DESKTOP BUTTONS (MENU BUTTON) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // Hide on mobile, show on desktop
          className="hidden md:flex items-center space-x-4 text-sm font-semibold"
        >
          {/* ENQUIRE NOW */}
          <a
            href="#contact"
            className="flex items-center justify-center h-10 px-4 rounded-lg border bg-white text-black shadow-sm hover:bg-gray-100 transition"
          >
            <Globe className="w-4 h-4 mr-1 text-gray-700" />
            ENQUIRE NOW
          </a>

          {/* MENU button (Desktop Only) */}
          <div
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center h-10 w-24 rounded-lg border border-black bg-white text-black cursor-pointer hover:bg-gray-50 transition"
          >
            <Menu className="w-4 h-4 mr-1" />
            MENU
          </div>
        </motion.div>

        {/* MOBILE MENU BTN (Hamburger Icon) */}
        <div className="md:hidden">
          <div
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center h-10 w-24 rounded-lg border border-black bg-white text-black cursor-pointer hover:bg-gray-50 transition"
          >
            <Menu className="w-4 h-4 mr-1" />
            MENU
          </div>
        </div>
      </div>

      {/* -------------------- RIGHT-SIDE SLIDE-IN MENU -------------------- */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-orange-500 shadow-xl z-[60]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-gray-800 p-2"
        >
          <X size={30} />
        </button>

        {/* MENU ITEMS */}
        <nav className="pt-24 px-6 flex flex-col space-y-6 font-[Anton] tracking-wide">
          <a
            href="#classes"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white font-semibold"
          >
            CLASSES
          </a>
          <a
            href="#instructors"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white font-semibold"
          >
            INSTRUCTORS
          </a>
          <a
            href="#careers"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white font-semibold"
          >
            CAREERS
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white font-semibold"
          >
            CONTACT
          </a>

          {/* CTA */}
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="mt-10 px-6 py-3 text-lg rounded-full bg-white text-gray-800 font-bold shadow-lg hover:bg-blue-600 transition text-center"
          >
            BOOK A LESSON
          </a>
        </nav>
      </div>
    </header>
  );
}