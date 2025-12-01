"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const primaryBlue = "text-blue-600";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "(+233)50-879-6216", link: "tel:+233508796216" },
  { icon: Mail, label: "Email", value: "info@alraadswimschool.com", link: "mailto:info@alraadswimschool.com" },
  { icon: MapPin, label: "Visit Our Pool", value: "Nii Odonkor II Street, Accra, Ghana", link: "#" },
];

const mapEmbedUrl = "https://www.google.com/maps/embed?q=Nii+Odonkor+ii+street,+Accra,+Ghana&z=18";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      {/* Container: Min height is screen height on desktop, uses grid cols 2 */}
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        
        {/* Right Column: Full-height Image (order-last on desktop) */}
        {/* Added lg:h-full to ensure it takes the full height of the grid cell */}
        <div className="lg:h-full w-full h-96 order-first lg:order-last">
          <img
            src="/images/hero-2.jpg"
            alt="Ready to Dive In? Call or Email Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left Column: Content (order-first on desktop) */}
        {/* Added lg:h-screen to ensure this column defines the height of the whole section on desktop */}
        <div className="flex flex-col justify-between bg-white p-6 md:p-12 lg:p-20 order-last lg:order-first lg:h-screen">
          
          {/* Top: Brand/Logo */}
          <p className="text-2xl font-extrabold text-gray-900 tracking-wider mb-10 uppercase">
            Alraad Swim School
          </p>

          {/* Center Content: Headline & Contact Details */}
          <div className="flex-grow flex flex-col justify-center py-10 lg:py-0">
            {/* Massive Headline */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-none mb-12 uppercase">
              Ready to <span className={`${primaryBlue} block`}>Dive In?</span>
            </h2>
            
            {/* Contact Details */}
            <div className="space-y-6 max-w-sm">
              <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
                Direct Contact
              </h3>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <Icon className={`w-6 h-6 flex-shrink-0 mt-1 ${primaryBlue}`} />
                    <div>
                      <p className="font-semibold text-gray-800">{item.label}</p>
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-blue-500 transition duration-200 block"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
              
              {/* Hours of Operation */}
              <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                <Clock className={`w-6 h-6 flex-shrink-0 mt-1 ${primaryBlue}`} />
                <div>
                  <p className="font-semibold text-gray-800">Operational Hours (Office)</p>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Embed */}
            <div className="w-full h-64 mt-10 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Swim School Location Map"
              ></iframe>
            </div>
          </div>

          {/* Bottom: Small Descriptive Text (Hidden on mobile) */}
          <p className="text-sm text-gray-500 mt-12 max-w-lg hidden lg:block">
            Alraad Swim School — Certified instructors, safe environment, and personalized programs for all ages. Start your swimming journey today!
          </p>
        </div>
      </div>
    </section>
  );
}