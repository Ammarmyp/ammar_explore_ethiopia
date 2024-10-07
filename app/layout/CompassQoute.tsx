"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const CompassQoute = () => {
  const ref = useRef(null);
  const { scrollYProgress: cardScroll } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(cardScroll, [0, 1], [-150, 150]);
  const translateY2 = useTransform(cardScroll, [0, 1], [100, -100]);
  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 py-24 px-6 md:px-10 lg:px-44 w-full"
      ref={ref}
    >
      <motion.div
        className="flex flex-col items-start md:w-1/2 space-y-4 md:space-y-6"
        style={{
          translateY: translateY2,
        }}
      >
        <p className="text-primary text-[20px] font-bold">
          ELEVATE YOUR JOURNEY TO ANOTHER LEVEL
        </p>
        <h2 className="text-xl md:text-3xl text-secondary font-bold">
          Picture-perfect landscapes and the sound of birdsong surround you
          here. lets explore in all four directions.
        </h2>
      </motion.div>
      <motion.div
        className="md:w-1/2 flex justify-center"
        style={{
          translateY,
        }}
      >
        <Image
          width={320}
          height={320}
          src={"/assets/compassImage.jpg"}
          alt="A compass image"
          className=" object-contain opacity-15"
        />
      </motion.div>
    </motion.div>
  );
};

export default CompassQoute;
