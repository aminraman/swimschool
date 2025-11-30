"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const swimServiceSteps = [
  { label: "GROUP CLASSES", id: "group" },
  { label: "PRIVATE LESSONS", id: "private" },
  { label: "PARENT & TOT", id: "parent-tot" },
  { label: "SWIM TEAM PREP", id: "swim-team" },
];

const primaryOrange = "bg-[#FF6A4D]";

export default function Booking() {
  const [activeService, setActiveService] = React.useState("group");
  const [expandedStep, setExpandedStep] = React.useState("step1");

  const CollapsibleStep = ({ stepNumber, title, content, isActive }) => (
    <div className="border-b border-gray-200 pb-3 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer py-2"
        onClick={() => setExpandedStep(isActive ? null : stepNumber)}
      >
        <div className="flex flex-col text-left">
          <p className="font-semibold text-lg text-gray-900 mb-1">
            {`STEP ${stepNumber.slice(-1)}`}
          </p>
          <p
            className={`font-medium text-xl transition duration-300 ${
              isActive ? "text-gray-900" : "text-gray-500"
            }`}
          >
            {title}
          </p>
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-4"
        >
          {content}
        </motion.div>
      )}
    </div>
  );

  return (
    <section className="py-24 bg-white" id="schedule-pricing-ivee">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- RESPONSIVE GRID (Desktop: 2 columns, Mobile: stacked) --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT SIDE — TEXT (Stacks on mobile) */}
          <div className="text-left">

            <p className="text-sm font-semibold tracking-widest mb-2 text-gray-700 uppercase">
              It's All Here
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-10 leading-tight">
              Your Swim Journey, right on your schedule.
            </h2>

            {/* Step 1 */}
            <CollapsibleStep
              stepNumber="step1"
              title="Select your program"
              isActive={expandedStep === "step1"}
              content={
                <div className="space-y-4">
                  {swimServiceSteps.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className={`pb-3 cursor-pointer group border-b border-gray-100 ${
                        activeService === step.id
                          ? "bg-blue-50 rounded-md p-2 -mx-2"
                          : ""
                      }`}
                      onClick={() => setActiveService(step.id)}
                    >
                      <p
                        className={`font-medium text-lg transition duration-300 ${
                          activeService === step.id
                            ? "text-blue-700 font-bold"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                      >
                        {step.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              }
            />

            {/* Step 2 */}
            <CollapsibleStep
              stepNumber="step2"
              title="Choose time & instructor"
              isActive={expandedStep === "step2"}
              content={
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-bold">1. Select Time:</span> View available
                    slots for {activeService.toUpperCase()} classes.
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">2. Select Instructor:</span> Choose
                    your preferred coach based on ratings and availability.
                  </p>
                </div>
              }
            />

            {/* Step 3 */}
            <CollapsibleStep
              stepNumber="step3"
              title="Confirm & dive in!"
              isActive={expandedStep === "step3"}
              content={
                <p className="text-gray-600">
                  Complete your booking and receive a confirmation email with all the
                  details for your first lesson.
                </p>
              }
            />

            <div className="mt-12">
              <button
                className={`px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${primaryOrange}`}
              >
                VIEW ALL PROGRAMS
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — PHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative 
              w-full 
              max-w-xs sm:max-w-sm 
              mx-auto 
              bg-white 
              rounded-[2.5rem] 
              shadow-2xl 
              border-[12px] border-gray-800 
              p-3 
              overflow-hidden 
              lg:h-[800px] 
              md:h-[700px] 
              h-[600px]
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center px-2 py-3 border-b border-gray-200">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <span className="text-sm font-semibold text-gray-900">Swim School</span>
              <div className="text-xl text-orange-500">🛒</div>
            </div>

            {/* Video Area */}
            <div className="relative w-full aspect-video bg-gray-300 rounded-lg overflow-hidden my-4">
              <div className="absolute inset-0 bg-blue-400/80 flex items-center justify-center">
                <span className="text-white text-sm">
                  /images/booking-video-thumbnail.jpg (Placeholder)
                </span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <svg className="w-16 h-16 text-white" fill="currentColor">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
              </div>
            </div>

            {/* Booking Text */}
            <div className="p-4 space-y-3 text-center">
              <h4 className="text-xl font-bold text-gray-900">
                Easy Booking, Just a Tap Away!
              </h4>
              <p className="text-sm text-gray-700">
                Watch our quick guide on how to book your sessions right from your
                phone.
              </p>

              <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">
                Book Now in App
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="px-4 mt-6 text-sm text-gray-500 space-y-2 pb-6">
              <p className="font-semibold text-gray-800">Available Instructors</p>

              <div className="h-20 bg-gray-50 rounded-lg p-2 flex items-center shadow-inner">
                <div className="w-8 h-8 rounded-full bg-blue-300 mr-3"></div>
                Coach Jalil (5 Stars)
              </div>

              <div className="h-20 bg-gray-50 rounded-lg p-2 flex items-center shadow-inner">
                <div className="w-8 h-8 rounded-full bg-orange-300 mr-3"></div>
                Coach Jasmine (4.8 Stars)
              </div>

              <div className="h-20 bg-gray-50 rounded-lg p-2 flex items-center shadow-inner">
                <div className="w-8 h-8 rounded-full bg-green-300 mr-3"></div>
                Coach Sammy (4.9 Stars)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
