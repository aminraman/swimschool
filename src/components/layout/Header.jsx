"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-none shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="AlRaad Logo"
            width={40}
            height={10}
            className="object-contain"
            priority
          />
            <span className="font-serif font-semibold text-2xl text-black">
                AlRaad
            </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="#classes"
            className="text-black font-semibold hover:text-blue-600 transition"
          >
            Classes
          </Link>
          <Link
            href="#instructors"
            className="text-black font-semibold hover:text-blue-600 transition"
          >
            Instructors
          </Link>
          <Link
            href="#contact"
            className="text-black font-semibold hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <a
            href="#book"
            className="px-5 py-2 rounded-full bg-[#007BFF] text-white font-semibold shadow-md hover:shadow-xl transition"
          >
            Book a Lesson
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#007BFF] focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute w-full top-full left-0 shadow-lg py-6">
          <nav className="flex flex-col space-y-4 text-center">
            <Link
              href="#classes"
              onClick={() => setIsOpen(false)}
              className="text-black font-semibold hover:text-blue-600 transition"
            >
              Classes
            </Link>
            <Link
              href="#instructors"
              onClick={() => setIsOpen(false)}
              className="text-black font-semibold hover:text-blue-600 transition"
            >
              Instructors
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-black font-semibold hover:text-blue-600 transition"
            >
              Contact
            </Link>
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-full bg-[#007BFF] font-semibold text-white shadow-md hover:shadow-xl transition mx-auto"
            >
              Book a Lesson
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
