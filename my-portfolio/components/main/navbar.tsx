'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Custom nav links (static here to fully remove SOCIALS)
const CUSTOM_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Education", link: "#education" },
  { title: "Experience", link: "#experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        
        {/* Left: Logo + Name */}
        <Link href="#about-me" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300">
            Bhawna Gundh
          </div>
        </Link>

        {/* Centered Navbar */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center justify-between gap-6 px-[20px] py-[10px] rounded-full bg-[rgba(3,0,20,0.37)] text-gray-200 border border-[rgba(112,66,248,0.38)]">
            {CUSTOM_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger Button - Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center gap-4">
            {CUSTOM_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
