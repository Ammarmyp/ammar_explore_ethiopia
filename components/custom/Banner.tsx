import React from "react";

interface Props {
  image: string;
  heading: string;
  subHeading?: string;
}

const Banner = ({ image, heading, subHeading }: Props) => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover w-full h-[70vh] md:h-screen text-center"
      style={{ backgroundImage: `url('/assets/${image}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30" />
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
    </div>
  );
};

export default Banner;
