import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Main Card */}
      <div className="bg-[#1a1a2e] border border-purple-600 rounded-xl shadow-lg overflow-hidden flex flex-col h-[420px] transition-transform duration-200">
        <div className="relative w-full h-48">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1 p-4 flex flex-col">
          <h2 className="text-white font-bold truncate text-lg mb-2">{title}</h2>
          <p className="mt-2 text-gray-300 text-sm flex-1 overflow-hidden mb-4">
            {description}
          </p>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded font-semibold hover:from-cyan-500 hover:to-purple-700 transition"
          >
            View on GitHub
          </Link>
        </div>
      </div>

      {/* Large Popup Preview */}
      {hovered && (
        <div className="absolute left-1/2 top-1/2 z-50 w-[420px] max-w-[90vw] bg-[#191840] border-4 border-purple-700 rounded-2xl shadow-2xl transform -translate-x-1/2 -translate-y-1/2 scale-105 transition-all">
          <div className="relative w-full h-60">
            <Image src={src} alt={title} fill className="object-cover rounded-t-xl" />
          </div>
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <p className="text-base text-gray-200 mb-5">{description}</p>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-semibold shadow hover:from-cyan-600 hover:to-purple-600"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
