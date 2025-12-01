"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Color Constants
const DARK_BLUE = "#323674";
const PRIMARY_TEXT = "#333333";
const ACCENT_RED_ORANGE = "#FF6A4D";
const LIGHT_GRAY = "#AAAAAA";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
      {/* ===================== DESKTOP LAYOUT ===================== */}
      <div className="hidden md:grid grid-cols-2 h-screen w-full">
        {/* LEFT SIDE */}
        {/* Adjusted pt-24 to push content up */}
        <div className="relative flex flex-col justify-between p-8 pt-24 pb-20">
          {/* TEXT BLOCK */}
          <div className="pl-16 pr-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              // Adjusted text size for better fit on some screens
              className="font-['Impact'] font-extrabold leading-[1.05] text-[clamp(4rem,6.5vw,6rem)] uppercase text-orange-500"
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              }}
            >
              Learn to Swim
              <br />
              with Calm
              <br />
              Confidence
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="mt-6 text-black font-sans text-xs leading-relaxed max-w-lg"
            >
              Gentle, personalized, and effective swim training designed for all
              ages. Build confidence in a slow, peaceful environment that makes
              learning feel natural.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 1 }}
              className="mt-12"
            >
              <a
                href="#contact"
                className="inline-block px-12 py-4 rounded-lg bg-[#FF6A4D] text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all uppercase tracking-wider"
              >
                BOOK A LESSON
              </a>
            </motion.div>
          </div>

          {/* FOOTER TEXT (Kept for desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="pl-16 text-xs leading-relaxed"
          >
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="Swim School Hero Image"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ===================== MOBILE LAYOUT ===================== */}
      <div className="block md:hidden w-full">
        {/* TEXT FIRST */}
        {/* Reduced pt-16 for mobile */}
        <div className="pt-16 px-6 pb-12">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Reduced text size slightly to make more room on small screens
            className="font-['Impact'] text-[2.5rem] leading-[1.05] uppercase text-orange-500"
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            }}
          >
            Learn to Swim
            <br />
            with Calm
            <br />
            Confidence
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-black font-sans text-sm leading-relaxed"
          >
            Gentle, personalized swim lessons designed for all age. Build
            confidence at your own pace in a peaceful environment.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block px-10 py-4 rounded-lg bg-[#FF6A4D] text-white font-semibold text-base shadow-lg tracking-wide uppercase"
            >
              BOOK A LESSON
            </a>
          </motion.div>
        </div>

        {/* IMAGE UNDER TEXT (Now immediately followed by the next section) */}
        <div className="relative w-full h-[380px]">
          <Image
            src="/images/hero-1.jpg"
            alt="Swim School Hero Image"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}