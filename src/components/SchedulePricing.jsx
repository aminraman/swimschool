"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// CHANGED: Use imports from react-icons/fa
import { FaBaby, FaWater, FaTrophy, FaGem } from 'react-icons/fa';


const IconMap = {
  Baby: FaBaby,
  Waves: FaWater,
  Trophy: FaTrophy,
  Diamond: FaGem, 
};

// --- Data Structures ---
const scheduleData = [
  { day: "Monday", time: "08:00 AM – 12:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "08:00 AM – 12:00 PM" },
  { day: "Thursday", time: "10:00 AM – 02:00 PM" },
  { day: "Friday", time: "08:00 AM – 12:00 PM" },
  { day: "Saturday", time: "09:00 AM – 01:00 PM" },
  { day: "Sunday", time: "08:00 AM – 12:00 PM" },
];

const pricingData = [
  {
    id: 1,
    title: "Intro Swimmer",
    price: "₵125",
    details: "Per 1-hour session",
    features: ["Focus on water safety", "Basic stroke introduction", "Fun group activities"],
    buttonText: "JOIN BEGINNER",
    icon: "Baby", 
  },
  {
    id: 2,
    title: "Skill Builder",
    price: "₵155",
    details: "Per 1-hour session",
    features: ["Refined stroke technique", "Endurance & breath control", "Small class sizes"],
    buttonText: "ENROLL INTERMEDIATE",
    icon: "Waves", 
  },
  {
    id: 3,
    title: "Pro-Track",
    price: "₵205",
    details: "Per 1.5-hour session",
    features: ["Advanced competitive drills", "Race strategy & turns", "Personalized coaching feedback"],
    buttonText: "GO ADVANCED",
    icon: "Trophy", 
  },
  {
    id: 4,
    title: "Private Coaching",
    price: "₵290",
    details: "Per 1-hour session",
    features: ["1-on-1 attention", "Customized training plan", "Video analysis"],
    buttonText: "BOOK PRIVATE",
    icon: "Diamond", 
  },
];

// --- Styling Variables ---
const primaryBlue = "text-blue-600"; 
const primaryBlueBg = "bg-blue-600"; 
const darkCardBg = "bg-[#093557]"; 
const accentOrangeBg = "bg-orange-500"; 

export default function SchedulePricing() {
  const scheduleRef = useRef(null);
  const [scheduleHeight, setScheduleHeight] = useState('auto');

  // Effect to calculate the height of the schedule table and apply it to the pricing container
  useEffect(() => {
    const calculateHeight = () => {
      // Only apply custom height on screens 1024px or wider (lg breakpoint)
      if (window.innerWidth >= 1024 && scheduleRef.current) {
        // We use scrollHeight to get the full height, including padding/margin if any
        setScheduleHeight(`${scheduleRef.current.scrollHeight}px`);
      } else {
        setScheduleHeight('auto');
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <section className="bg-white" id="schedule-pricing-horizontal-split">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Main Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-blue-500">
            Dive Into Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Our Programs & Pricing
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
            Find the perfect swim class and schedule that fits your child's needs and your family's routine.
          </p>
        </div>

        {/* CONTAINER: Rounded Wrapper for the whole section, uses lg:grid lg:grid-cols-2 */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          {/* LEFT SECTION (Column 1): Weekly Schedule Table */}
          {/* Apply the calculated height via style to ensure it dictates the overall height on desktop */}
          <div 
            ref={scheduleRef} 
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-start"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                <h3 className="text-3xl font-serif text-gray-900 text-left">
                Weekly Class Schedule
                </h3>

            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto min-w-full">
                    <table className="min-w-full divide-y divide-gray-100">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-base font-bold text-gray-800 uppercase tracking-wider w-1/2">
                            Day
                          </th>
                          <th className="px-6 py-4 text-right text-base font-bold text-gray-800 uppercase tracking-wider w-1/2">
                            Times Available
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {scheduleData.map((item, idx) => (
                          <motion.tr
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="hover:bg-blue-50/50 transition duration-200"
                          >
                            <td className="px-6 py-4 whitespace-nowrap w-1/2">
                              <span className={`font-semibold ${item.day === 'Tuesday' ? 'text-gray-500' : 'text-gray-900'}`}>{item.day}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right w-1/2">
                              <span className={`font-semibold ${item.day === 'Tuesday' ? 'text-red-500' : 'text-blue-700'}`}>{item.time}</span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                </div>
            </div>
          </div>

          {/* RIGHT SECTION (Column 2): Horizontal Scrolling Pricing Cards */}
          <div 
            className={`${darkCardBg} p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col`}
            // Apply the calculated height to ensure the two columns are perfectly aligned
            style={{ height: scheduleHeight }} 
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

            <h3 className="text-3xl font-serif text-white mb-8 text-left relative z-10">
              Select Your Plan
            </h3>
            
            {/* Horizontal Scroll Container */}
            <div 
                // The pricing container is flex-grow to take up the remaining height in the dark section
                className="flex-grow flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide relative z-10"
                style={{ scrollBehavior: 'smooth' }}
            >
              {pricingData.map((plan, idx) => {
                // Dynamically retrieve the icon component using the IconMap
                const IconComponent = IconMap[plan.icon];
                
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    // Card Styles
                    // h-full ensures the card fills the height of the scroll container
                    className="flex-none w-[85vw] md:w-[350px] snap-center bg-white rounded-2xl p-8 shadow-xl border border-blue-100 flex flex-col justify-between h-full"
                  >
                      <div>
                          <div className={`w-full h-1.5 ${primaryBlueBg} rounded-full mb-6`}></div>
                          <div className="flex justify-between items-start mb-4">
                              {/* RENDER THE REACT ICON HERE - Removed strokeWidth={2} */}
                              {IconComponent && (
                                <IconComponent 
                                    className={`w-8 h-8 text-orange-500`} 
                                />
                              )}
                              {idx === 1 && <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">POPULAR</span>}
                          </div>
                          
                          <h4 className="font-serif text-2xl text-gray-900 mb-1 font-bold">
                            {plan.title}
                          </h4>

                          <div className="flex items-baseline mb-4">
                              <p className={`text-3xl font-sans font-extrabold ${primaryBlue}`}>
                              {plan.price}
                              </p>
                              <span className="text-gray-500 text-sm ml-2">/ session</span>
                          </div>

                          <ul className="text-left text-gray-700 space-y-3 mb-8">
                              {plan.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-start text-sm">
                                    <span className={`mr-2 mt-0.5 ${primaryBlue}`}>✓</span> 
                                    <span className="leading-snug">{feature}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <button
                          className={`w-full py-3 rounded-lg ${accentOrangeBg} text-white font-bold hover:bg-orange-600 hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5`}
                      >
                          {plan.buttonText}
                      </button>
                  </motion.div>
                );
              })}
              
              {/* Spacer at the end for better scrolling experience */}
              <div className="w-4 flex-none"></div>
            </div>
            
            {/* Scroll Hint (Mobile) */}
            <div className="md:hidden text-center mt-2">
                <span className="text-blue-200 text-xs animate-pulse">← Swipe to view more plans →</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}