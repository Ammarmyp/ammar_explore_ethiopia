import React from "react";
import Image from "next/image";

const CEOnoteSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 py-10 md:py-[120px] px-6 md:px-10 lg:px-[120px] w-full text-white bg-primary">
      <div className="flex flex-col items-start md:w-1/2 space-y-4 md:space-y-6">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-tighter">
          Take off on an adventure with us{" "}
        </p>
        <h2 className="text-md md:text-xl opacity-85  font-semibold">
          As the CEO, I am proud to share that we specialize in crafting
          unforgettable experiences here in Ethiopia. From the breathtaking
          landscapes to our deep and vibrant cultural heritage, we offer
          journeys that will leave lasting memories.
        </h2>
        <div className="flex flex-col items-start gap-1">
          <p className="font-bold text-lg md:text-xl">Ammar Mohammed</p>
          <p className="text-sm md:text-base opacity-85">FOUNDER & CEO</p>
        </div>
      </div>
      <div className="md:w-1/2 md:flex justify-center hidden">
        <Image
          width={455}
          height={574}
          src={"/assets/ethiopianMap2.jpg"}
          alt="A compass image"
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default CEOnoteSection;
