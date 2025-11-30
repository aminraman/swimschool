"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#EAF4FF] overflow-hidden">

      {/* -------------------- DESKTOP -------------------- */}
      <div className="hidden md:flex w-full h-[92vh] relative">
        {/* LEFT - Full Height Hero Image */}
        <div className="relative w-[58%] h-full">
          <Image
            src="/images/hero-1.png"
            alt="Swim School Hero"
            fill
            priority
            className="object-cover object-center rounded-r-[70px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.20)]"
          />
        </div>

        {/* RIGHT - Text Content */}
        <div className="absolute right-0 top-0 h-full flex items-center w-[54%] pointer-events-none">
          <div className="pl-28 pr-20 max-w-[600px] pointer-events-auto">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-serif text-black leading-[1.05] text-[clamp(3.4rem,5vw,5rem)]"
            >
              Learn to Swim  
              <br />
              with Calm Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="mt-8 text-black font-sans text-[clamp(1rem,1.4vw,1.3rem)] leading-relaxed"
            >
              Gentle, personalized, and effective swim training designed for all
              ages. Build confidence in a slow, peaceful environment that makes
              learning feel natural.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1 }}
              className="mt-12"
            >
              <a
                href="#contact"
                className="inline-block px-12 py-4 rounded-full bg-[#007BFF] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                BOOK A LESSON
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* -------------------- MOBILE -------------------- */}
      <div className="md:hidden flex flex-col w-full">

        {/* TEXT BLOCK */}
        <div className="px-6 pt-16 pb-4 text-center max-w-[92%] mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-black leading-[1.1] text-[2.65rem]"
          >
            Learn to Swim  
            <br />
            with Calm Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="mt-4 text-black text-base leading-relaxed"
          >
            Professional coaching in a calm environment where progress feels
            natural, comfortable, and enjoyable.
          </motion.p>
        </div>

        {/* IMAGE BLOCK */}
        <div className="relative w-full h-[58vh] px-5 pb-12 mt-4">
          <Image
            src="/images/hero-2.jpg"
            alt="Swim School Hero"
            fill
            priority
            className="object-cover object-center rounded-[30px] shadow-[0_28px_50px_-15px_rgba(0,0,0,0.22)]"
          />

          {/* TOP-FLOATING BUTTON */}
          <motion.a
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1 }}
            href="#contact"
            className="absolute left-1/2 -translate-x-1/2 top-4
                       px-7 py-3 rounded-full bg-[#007BFF] backdrop-blur-xl
                       text-gray-900 font-semibold shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]
                       hover:shadow-[0_25px_45px_-18px_rgba(0,0,0,0.3)]
                       transition"
          >
            Book a Lesson
          </motion.a>
        </div>
      </div>

    </section>
  );
}
