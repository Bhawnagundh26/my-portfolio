"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const roles = [
  "Software Developer",
  "Data Analyst",
  "QA Analyst",
  "Business Analyst",
];

// Typewriter animation for role highlighting
const Typewriter = ({
  roles,
  speed = 120,
  pause = 1200,
}: {
  roles: string[];
  speed?: number;
  pause?: number;
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    if (!isDeleting && text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, speed / 2);
    } else if (!isDeleting && text.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roles, roleIndex, speed, pause]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400 font-semibold">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

// Main HeroContent Component
export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-5 justify-center text-start w-full max-w-[600px]">

        {/* Bold greeting line */}
        <motion.h1
          variants={slideInFromTop}
          className="text-3xl md:text-4xl text-white font-bold"
        >
          <strong>Hi, I’m Bhawna Gundh</strong>
        </motion.h1>

        {/* Bold "I'm a" line with typewriter */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex text-3xl md:text-5xl font-extrabold text-white"
        >
          <strong>I’m &nbsp;</strong>
          <Typewriter roles={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5"
        >
          🚀 Open to opportunities where technology meets problem-solving!
          <br />
          💡 Driven by curiosity, powered by code, and ready to grow with a forward-thinking tech team.
          <br />
          🤝 Let’s connect — I’m eager to contribute and learn in dynamic software and analytics environments.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="https://www.linkedin.com/in/bhawna-gundh/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center cursor-pointer rounded-lg"
          >
            Hire Me
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.2)}
            href="#projects"
            className="py-2 px-6 border border-white text-white text-center cursor-pointer rounded-lg"
          >
            See Projects
          </motion.a>
        </div>
      </div>

      {/* Right side hero image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex justify-center items-center w-full"
      >
        <Image
          src="/hero-bg.svg"
          alt="Hero Illustration"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
