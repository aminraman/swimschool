"use client";

import React from "react";
import { motion } from "framer-motion";

const scheduleData = [
  { day: "Monday", time: "08:00 AM – 12:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 02:00 PM" },
  { day: "Wednesday", time: "08:00 AM – 12:00 PM" },
  { day: "Thursday", time: "10:00 AM – 02:00 PM" },
  { day: "Friday", time: "08:00 AM – 12:00 PM" },
  { day: "Saturday", time: "09:00 AM – 01:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const pricingData = [
  {
    id: 1,
    title: "Intro Swimmer",
    price: "$45",
    details: "Per 1-hour session",
    features: ["Focus on water safety", "Basic stroke introduction", "Fun group activities"],
    buttonText: "Join Beginner",
    icon: "👶",
  },
  {
    id: 2,
    title: "Skill Builder",
    price: "$55",
    details: "Per 1-hour session",
    features: ["Refined stroke technique", "Endurance & breath control", "Small class sizes"],
    buttonText: "Enroll Intermediate",
    icon: "🏊",
  },
  {
    id: 3,
    title: "Pro-Track",
    price: "$75",
    details: "Per 1.5-hour session",
    features: ["Advanced competitive drills", "Race strategy & turns", "Personalized coaching feedback"],
    buttonText: "Go Advanced",
    icon: "🥇",
  },
];

const primaryBlue = "text-blue-600";
const primaryBlueBg = "bg-blue-600";
const shadowColor = "rgba(40, 40, 150, 0.2)"; // Custom shadow for stacking effect

export default function SchedulePricing() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scheduleRef = React.useRef(null);
  // Use a string state to manage the dynamic height style
  const [cardHeightStyle, setCardHeightStyle] = React.useState('500px'); 

  // State update to match the schedule table height for a perfect 50/50 visual split
  React.useEffect(() => {
    const calculateHeight = () => {
      if (scheduleRef.current) {
        // Calculate the height of the entire schedule block (header + table + button padding)
        const newHeight = scheduleRef.current.offsetHeight;
        setCardHeightStyle(`${newHeight}px`);
      }
    };

    calculateHeight();
    // Re-calculate on window resize
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const handleCardFlip = () => {
    // Simply update the index. The nested motion.div handles the visual flip animation.
    setActiveIndex((prevIndex) => (prevIndex + 1) % pricingData.length);
  };
  
  const activePlanTitle = pricingData[activeIndex].title;
  const nextPlanTitle = pricingData[(activeIndex + 1) % pricingData.length].title;

  // Framer Motion variant for the card stacking and depth
  const cardVariants = {
    // Hidden (cards that have already been 'flipped' out)
    hidden: {
        y: 0,
        scale: 1,
        opacity: 0,
        zIndex: 0,
        boxShadow: "none",
        pointerEvents: 'none',
        transition: { duration: 0.5 }
    },
    // Visible Stacked (cards waiting their turn)
    stacked: (custom) => ({
        y: custom.offset * 15, // Spread cards out vertically by 15px
        scale: 1 - custom.offset * 0.04, // Scale down slightly
        opacity: 0.7 + custom.offset * 0.1,
        zIndex: 100 - custom.offset, // Higher cards have higher z-index
        boxShadow: `0 ${custom.offset * 6}px 12px ${shadowColor}`, // Shadow adds depth
        pointerEvents: 'none',
        transition: { type: "spring", stiffness: 300, damping: 30, delay: custom.delay }
    }),
    // Active (card on top, clickable)
    active: {
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 100,
        boxShadow: `0 10px 20px ${shadowColor}`,
        pointerEvents: 'auto',
        transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };


  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50" id="schedule-pricing-balanced">
      <div className="max-w-7xl mx-auto px-6">
        
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

        {/* 50/50 Grid Layout: Uses horizontal scroll on mobile, grid on large screens */}
        <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pb-4">
          
          {/* LEFT SIDE: WEEKLY SCHEDULE TABLE (50% Width) - Mobile width added */}
          <div ref={scheduleRef} className="min-w-[90vw] lg:min-w-0">
            <h3 className="text-3xl font-serif text-gray-900 mb-8 text-left">
              Weekly Class Schedule
            </h3>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto min-w-full">
                    <table className="min-w-full divide-y divide-gray-100">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-base font-bold text-gray-800 uppercase tracking-wider w-1/2 rounded-tl-2xl">
                            Day
                          </th>
                          <th className="px-6 py-4 text-right text-base font-bold text-gray-800 uppercase tracking-wider w-1/2 rounded-tr-2xl">
                            Times Available
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        {scheduleData.map((item, idx) => (
                          <motion.tr
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="hover:bg-blue-50/50 transition duration-200"
                          >
                            <td className="px-6 py-4 whitespace-nowrap w-1/2">
                              <span className={`font-semibold ${item.day === 'Sunday' ? 'text-gray-500' : 'text-gray-900'}`}>{item.day}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right w-1/2">
                              <span className={`font-semibold ${item.day === 'Sunday' ? 'text-red-500' : 'text-blue-700'}`}>{item.time}</span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                </div>
            </div>
            
            <div className="mt-10 text-center lg:text-left">
                <button className={`px-8 py-4 ${primaryBlueBg} text-white font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300`}>
                    VIEW ALL SCHEDULES
                </button>
            </div>
          </div>

          {/* RIGHT SIDE: PRICING CARDS (50% Width) - Mobile width added */}
          <div 
            className="relative min-w-[90vw] h-auto lg:h-[--card-height] lg:min-w-0" 
            style={{ 
              '--card-height': cardHeightStyle, 
              perspective: '1000px' // Enable 3D perspective for the flip effect
            }}
          >
            <h3 className="text-3xl font-serif text-gray-900 mb-8 text-left absolute top-0 w-full z-20 bg-blue-50 lg:bg-transparent">
              Flexible Pricing Plans
            </h3>
            
            {/* 3D Stacked Card Container - Needs pt-16 to offset the h3 title */}
            <div className="relative w-full h-full pt-16">
              {pricingData.map((plan, idx) => {
                const offset = idx - activeIndex;
                const isHidden = offset < 0 || offset > 2;
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={plan.id}
                    layout // Enables smooth layout transitions for stacking
                    custom={{ offset: offset, delay: isHidden ? 0 : offset * 0.1 }}
                    initial="stacked"
                    animate={isActive ? "active" : isHidden ? "hidden" : "stacked"}
                    variants={cardVariants}
                    style={{ 
                        // Match the schedule ref height exactly for visual parity (Subtract header offset)
                        height: `calc(var(--card-height) - 64px)`, 
                        width: '100%',
                        transformOrigin: 'top center',
                        // Hide element on mobile for natural flow, show only on active state if height is auto
                        display: isHidden && window.innerWidth < 1024 ? 'none' : 'block',
                    }}
                    // A11Y Enhancements are handled by the inner button
                    className={`absolute inset-0 bg-white rounded-2xl p-8 border border-blue-100 transition-all duration-500 ease-in-out ${isActive ? 'cursor-pointer' : 'pointer-events-none'}`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-2 ${primaryBlueBg} rounded-t-2xl`}></div>

                    {/* NESTED MOTION.DIV: Controls the visually appealing 3D flip-in */}
                    <motion.div
                        key={plan.id + activeIndex} // New key forces re-initialization when index changes
                        initial={{ 
                            // Only incoming card starts rotated (unless it's the first card on mount)
                            rotateY: isActive && activeIndex !== 0 ? -180 : 0, 
                        }}
                        animate={{ 
                            rotateY: 0, // All content rotates to 0
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }} // Critical for 3D illusion
                        className="h-full flex flex-col justify-between"
                    >
                        {/* Card Content */}
                        <div className="text-center">
                            <div className="text-5xl mb-4">{plan.icon}</div>
                            <h4 className="font-serif text-2xl text-gray-900 mb-2 font-bold">
                              {plan.title}
                            </h4>

                            <p className={`text-4xl font-sans font-extrabold ${primaryBlue} mb-2`}>
                              {plan.price}
                            </p>

                            <p className="text-sm text-gray-600 mb-8">{plan.details}</p>

                            <ul className="text-left text-gray-700 space-y-2 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                  <motion.li key={fIdx} className="flex items-center text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + fIdx * 0.1 }}>
                                    <span className={`mr-2 ${primaryBlue}`}>✓</span> {feature}
                                  </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA/Flip trigger button */}
                        <div className="mt-auto pt-4"> {/* mt-auto pushes button to the bottom */}
                            <button
                                onClick={isActive ? handleCardFlip : undefined}
                                role="button"
                                tabIndex={isActive ? 0 : -1}
                                aria-label={isActive ? `Current plan: ${activePlanTitle}. Click to view next plan: ${nextPlanTitle}` : undefined}
                                className={`inline-block w-full px-8 py-3 rounded-full ${primaryBlueBg} text-white font-bold hover:bg-blue-700 transition duration-300 ${isActive ? '' : 'opacity-0 pointer-events-none'}`}
                            >
                                {plan.buttonText}
                                {isActive && <span className="ml-2">→</span>}
                            </button>
                            {/* Flip indicator */}
                            {isActive && (
                                <p className="text-center text-xs text-gray-500 mt-2 hover:text-blue-500 transition duration-200" onClick={handleCardFlip}>
                                    Tap/Click to see next plan
                                </p>
                            )}
                        </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}