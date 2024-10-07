"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  image: string;
  heading: string;
  subHeading?: string;
}

const Banner = ({ image, heading, subHeading }: Props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      className="relative bg-no-repeat bg-center bg-cover w-full h-[70vh] md:h-screen text-center"
      style={{ backgroundImage: `url('/assets/${image}')`, borderRadius }}
      ref={targetRef}
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-55"
        style={{
          borderRadius,
          opacity,
        }}
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white space-y-5 md:space-y-10 px-4 md:px-16">
        {subHeading && (
          <p className="text-white/85 tracking-tighter text-lg md:text-xl ">
            {subHeading}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
          {heading}
        </h1>
      </div>
    </motion.div>
  );
};

export default Banner;
