"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../lib/motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    institution: "Lovely Professional University",
    duration: "2021 – 2025",
    location: "Punjab, India",
    details: "Here you can add extra details, honors, or achievements for your B.Tech journey.",
  },
  {
    degree: "Senior Secondary (12th Grade)",
    major: "PCM (Science Stream)",
    institution: "MRV Model School",
    duration: "2019 – 2021",
    location: "Delhi, India",
    details: "Highlights of your 12th, marks, or any leadership/service activities.",
  },
  {
    degree: "High School (10th Grade)",
    institution: "MRV Model School",
    duration: "2017 – 2019",
    location: "Delhi, India",
    details: "You can share 10th achievements, awards, or final marks here.",
  },
];

export const Education = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const closeModal = () => setActiveIdx(null);

  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-20 px-6 flex flex-col items-center justify-center text-white relative"
    >
      <motion.h2
        variants={slideInFromLeft(0.2)}
        className="text-4xl font-bold mb-12 text-center"
      >
        Education
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={slideInFromRight(0.2 + idx * 0.1)}
            className="bg-[#18182b] border-l-8 border-purple-500 px-10 py-12 rounded-3xl shadow-2xl min-h-[370px] flex flex-col justify-center items-center text-center cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setActiveIdx(idx)}
          >
            <h3 className="text-3xl font-extrabold text-purple-400 mb-3 tracking-wide">{edu.degree}</h3>
            {edu.major && (
              <div className="text-xl text-cyan-300 mb-3">{edu.major}</div>
            )}
            <div className="text-2xl font-bold text-white mb-1">{edu.institution}</div>
            <div className="text-lg text-gray-400 mb-1">
              {edu.duration} &middot; {edu.location}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup for Each Card */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-[#232347] border-4 border-purple-600 shadow-2xl rounded-3xl py-12 px-12 max-w-xl w-[96vw] mx-auto text-white relative text-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-7 text-3xl text-gray-400 hover:text-purple-400 transition"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-4xl font-extrabold text-purple-300 mb-4">
              {educationData[activeIdx].degree}
            </h3>
            {educationData[activeIdx].major && (
              <div className="text-2xl text-cyan-300 mb-2">{educationData[activeIdx].major}</div>
            )}
            <div className="text-2xl font-bold mb-2">
              {educationData[activeIdx].institution}
            </div>
            <div className="text-lg text-gray-400 mb-3">
              {educationData[activeIdx].duration} &middot; {educationData[activeIdx].location}
            </div>
            <p className="text-lg text-gray-200 mt-4">{educationData[activeIdx].details}</p>
          </div>
        </div>
      )}
    </motion.section>
  );
};