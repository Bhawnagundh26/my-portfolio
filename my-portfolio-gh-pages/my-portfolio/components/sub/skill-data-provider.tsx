"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;         // filename, e.g. "react.png"
  name: string;        // alt text, e.g. "React"
  width: number;       // image width
  height: number;      // image height
  index: number;       // index in list, to stagger animation
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  // triggerOnce: only trigger the animation the first time
  const { ref, inView } = useInView({ triggerOnce: true });

  // Define your animation variants
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1; // stagger delay for each image

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
      >
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          // Optionally, you can add className, priority, etc.
        />
      </motion.div>
    </div>
  );
};
