"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const classesData = [
  {
    id: 1,
    title: "Beginner Swim",
    description:
      "Perfect for kids and adults starting out in a safe environment.",
    image: "/images/class1.jpg",
  },
  {
    id: 2,
    title: "Intermediate Swim",
    description:
      "For swimmers who want to improve technique and endurance.",
    image: "/images/class2.jpg",
  },
  {
    id: 3,
    title: "Advanced Swim",
    description:
      "Elite coaching for competitive swimmers and mastery.",
    image: "/images/class3.jpg",
  },
];

export default function Classes() {
  return (
    <section
      id="classes"
      className="py-24 bg-gradient-to-b from-[#EAF4FF] via-pastelBlue/10 to-pastelMint/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* -------------------------------- */}
        {/* HEADER 			 	*/}
        {/* -------------------------------- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Our Classes
          </h2>
          <p className="text-black text-[clamp(1rem,1.2vw,1.125rem)] max-w-2xl mx-auto">
            From beginners to advanced, we offer structured swim programs for all
            ages, designed to build confidence, skill, and joy in the water.
          </p>
        </div>

        {/* -------------------------------- */}
        {/* DESKTOP GRID 			*/}
        {/* -------------------------------- */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {classesData.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.2,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2">
                    {cls.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cls.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  // Reduced padding from px-12 py-3 to px-8 py-2
                  className="mt-auto inline-flex items-center justify-center px-8 py-2 rounded-md bg-orange-500 hover:bg-[#007BFF] text-white font-semibold shadow-md hover:shadow-xl transition-all"
                >
                  LEARN MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* -------------------------------- */}
        {/* MOBILE HORIZONTAL SCROLL 	 */}
        {/* -------------------------------- */}
        <div className="md:hidden flex overflow-x-auto space-x-6 pb-6 -mx-6 px-6 scrollbar-none">
          {classesData.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex-none w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer flex flex-col h-[420px]"
            >
              <div className="relative w-full h-[58%] rounded-t-2xl overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-1">
                    {cls.title}
                  </h3>
                  <p className="text-gray-700 mb-2 leading-relaxed text-sm">
                    {cls.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  // Reduced padding from px-10 py-2 to px-8 py-2
                  className="mt-auto inline-flex items-center justify-center px-8 py-2 rounded-md bg-[#007BFF] text-white font-semibold shadow-md hover:shadow-xl transition-all text-sm"
                >
                  LEARN MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}