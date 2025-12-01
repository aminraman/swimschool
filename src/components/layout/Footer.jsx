'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, } from 'lucide-react'; 
import { FaTiktok } from 'react-icons/fa';

const footerLinks = {
  Services: [
    { name: 'Private Lessons', href: '#' },
    { name: 'Group Classes', href: '#' },
    { name: 'Parent & Tot', href: '#' },
    { name: 'Competitive Training', href: '#' },
  ],
  Company: [
    { name: 'About Alraad', href: '#' },
    { name: 'Our Instructors', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  Resources: [
    { name: 'Safety Guide', href: '#' },
    { name: 'Swim Tips Blog', href: '#' },
    { name: 'Waiver Form', href: '#' },
    { name: 'Policies', href: '#' },
  ],
};

// Updated color variables for the new dark blue theme
const primaryBlue = "text-cyan-300"; // Light color for main highlights
const primaryBlueBg = "bg-blue-600";
const footerBg = "bg-blue-900"; // Dark blue background
const footerText = "text-blue-100"; // Light text on dark background
const footerSubText = "text-blue-300"; // Secondary link color
const footerBorder = "border-blue-700"; // Border color

const FooterLinkGroup = ({ title, links }) => (
  <div className="space-y-4">
    <h4 className={`text-lg font-serif font-bold ${footerText} ${footerBorder} border-b-2 pb-1 mb-4`}>
      {title}
    </h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <motion.li 
          key={index} 
          whileHover={{ x: 5 }} // Subtle hover animation
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <a
            href={link.href}
            className={`${footerSubText} hover:${primaryBlue} transition duration-300 text-sm`}
          >
            {link.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    // Updated background and border classes
    <footer className={`${footerBg} border-t ${footerBorder} mt-16 shadow-2xl`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section: Branding, CTA, and Links */}
        {/* Updated border class */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b ${footerBorder} pb-12 mb-12`}>
          
          {/* Column 1: Logo and Mission */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className={`text-4xl font-extrabold font-serif ${primaryBlue}`}>
              Alraad Swim School
            </h2>
            <p className={`${footerSubText} max-w-sm`}>
              Making waves in water safety and competitive swimming since 2019. Dive in and discover your potential.
            </p>
            
            {/* Newsletter CTA */}
            <div className="pt-4">
              <h5 className={`font-semibold ${footerText} mb-2`}>Subscribe to Our Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email subscription"
                  // Input styling adjusted for dark background contrast
                  className="p-3 w-full rounded-l-lg border border-blue-700 bg-blue-800 text-white placeholder-blue-400 focus:ring-cyan-300 focus:border-cyan-300 outline-none"
                />
                <button
                  type="submit"
                  className={`p-3 ${primaryBlueBg} text-white font-bold rounded-r-lg hover:bg-blue-700 transition duration-300`}
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          
          {/* Columns 2-4: Navigation Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterLinkGroup key={title} title={title} links={links} />
          ))}
          
        </div>

        {/* Bottom Section: Contact, Social, and Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
          {/* Contact Info */}
          <div className="space-y-3 order-2 md:order-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className={`w-5 h-5 mr-3 ${primaryBlue}`} />
              <p className={`${footerSubText} text-sm`}>Nii Odonkor ii street, Accra, Ghana</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className={`w-5 h-5 mr-3 ${primaryBlue}`} />
              <a href="mailto:info@alraadswim.com" className={`${footerSubText} hover:${primaryBlue} transition text-sm`}>info@alraadswim.com</a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className={`w-5 h-5 mr-3 ${primaryBlue}`} />
              <a href="tel:+233508796216" className={`${footerSubText} hover:${primaryBlue} transition text-sm`}>(+233)50-879-6216</a>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 order-1 md:order-2">
            {[Facebook, Instagram, Twitter, FaTiktok].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                aria-label={Icon.name}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                // Icon color updated to be noticeable on dark background
                className={`${primaryBlue} hover:text-cyan-400 transition duration-300`}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className={`text-sm ${footerSubText} order-3 md:text-right text-center`}>
            &copy; {new Date().getFullYear()} Alraad Swim School. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}