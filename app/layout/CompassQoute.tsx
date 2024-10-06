import Image from "next/image";
import React from "react";

const CompassQoute = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 py-24 px-6 md:px-10 lg:px-44 w-full">
      <div className="flex flex-col items-start md:w-1/2 space-y-4 md:space-y-6">
        <p className="text-primary text-[20px] font-bold">
          ELEVATE YOUR JOURNEY TO ANOTHER LEVEL
        </p>
        <h2 className="text-xl md:text-3xl text-secondary font-bold">
          Picture-perfect landscapes and the sound of birdsong surround you
          here. lets explore in all four directions.
        </h2>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          width={320}
          height={320}
          src={"/assets/compassImage.jpg"}
          alt="A compass image"
          className=" object-contain opacity-15"
        />
      </div>
    </div>
  );
};

export default CompassQoute;
