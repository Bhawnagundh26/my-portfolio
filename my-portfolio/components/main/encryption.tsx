"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full relative px-4 py-10 text-white overflow-hidden">
      {/* 💬 Content: Paragraph + Photo */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-12 md:mt-32 max-w-6xl w-full px-6">

        {/* 📝 Detailed About Me Paragraph */}
        <div className="text-base md:text-lg leading-7 text-gray-200 md:w-2/3">
          <p>
            🚀 I&apos;m <strong>Bhawna Gundh</strong>, a highly motivated Computer Science graduate with practical experience in software development, automation testing, and data analytics. My core strength lies in designing robust backend systems, automating quality pipelines, and transforming raw data into meaningful insights.
          </p>
          <br />
          <p>
            I work with technologies like <strong>C++, Java, Python, MySQL, and PHP</strong>, and am proficient in tools such as <strong>Selenium, Django, Power BI, Tableau, and Docker</strong>. I&apos;ve built full-stack apps, crafted secure login systems, and automated entire QA processes for web applications.
          </p>
          <br />
          <p>
            From writing clean backend logic and managing databases to visualizing trends and testing edge cases — I enjoy solving complex technical problems and continuously learning. I&apos;m also familiar with <strong>React, Next.js, Git, GitHub Actions, and cloud services (AWS)</strong>.
          </p>
          <br />
          <p>
            🤝 I&apos;m looking for opportunities where I can contribute meaningfully through code and collaborate with passionate teams driving real-world innovation. If your project or company needs someone with dedication, curiosity, and strong technical insight — I&apos;m ready.
          </p>
        </div>

        {/* 📸 Photo Right Side */}
        <div className="md:w-1/3 w-full">
          <Image
            src="/bhawna-photo.png"
            alt="Bhawna Gundh"
            width={400}
            height={500}
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* 🎞️ Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
