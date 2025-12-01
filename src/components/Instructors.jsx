"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const instructorsData = [
  {
    id: 1,
    name: "Jalil Amar-Atsen, CI",
    role: "Chief Swim Instructor",
    image: "/images/instructor1.png",
  },
  {
    id: 2,
    name: "Jasmine Yaasin, PI",
    role: "Personal Swim Instructor",
    image: "/images/instructor2.png",
  },
  {
    id: 3,
    name: "Samuel Adjetey, PI",
    role: "LifeGuard",
    image: "/images/instructor3.png",
  },
  {
    id: 4,
    name: "Jihad Amar-Atsen, PI",
    role: "Swim Instructor",
    image: "/images/instructor4.png",
  },
];

export default function Instructors() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white" id="instructors">
      <div className="max-w-7xl mx-auto px-6">

        {/* ============================= */}
        {/*         DESKTOP CONTENT       */}
        {/* ============================= */}
        <div className="hidden md:grid lg:grid-cols-2 gap-12 relative">
          {/* Left: Text */}
          <div className="text-left py-10 lg:py-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-[#007BFF]">
              YOUR INSTRUCTORS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              The minds and hearts behind your swim journey
            </h2>
            <p className="text-lg text-gray-700 max-w-lg">
              Our instructors are passionate about teaching swimming in a safe, calm,
              and enjoyable environment. Each coach brings expertise and a
              personalized approach to help you grow.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                MEET THE TEAM
              </button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="relative">
            {/* Arrows */}
            <div className="hidden lg:flex absolute top-0 right-0 z-10 space-x-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
              >
                &lt;
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
              >
                &gt;
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 -mx-6 px-6 lg:px-0 lg:ml-8 pb-6"
            >
              {instructorsData.map((inst, idx) => (
                <motion.div
                  key={inst.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex-none w-72 sm:w-80 lg:w-72 bg-[#E6F4FF] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-serif text-2xl text-gray-900 mb-1">
                        {inst.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{inst.role}</p>
                    </div>

                    <div className="mt-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl text-blue-600 shadow-md">
                      +
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/*          MOBILE VERSION       */}
        <div className="md:hidden mt-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-4 text-center">
            Meet Our Instructors
          </h2>
          <p className="text-gray-600 text-center max-w-md mx-auto mb-8">
            Passionate coaches focused on safety, confidence, and skill-building.
          </p>

          <div className="flex overflow-x-auto space-x-6 -mx-6 px-6 pb-6 scrollbar-none">
            {instructorsData.map((inst, idx) => (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex-none w-64 bg-[#E6F4FF] rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all cursor-pointer"
              >
                <div className="relative w-full h-44 rounded-t-xl overflow-hidden">
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-serif text-xl text-gray-900 mb-1">
                    {inst.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{inst.role}</p>

                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-lg text-blue-600 shadow">
                    +
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
