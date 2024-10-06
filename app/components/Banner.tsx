import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner1.jpg')] bg-no-repeat bg-center bg-cover w-full h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white  space-y-10">
        <p className=" text-white/85 tracking-tighter">
          Lets show you the origin of mankind
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
          EXPLORE ETHIOPIA
        </h1>
      </div>
    </div>
  );
};

export default Banner;
