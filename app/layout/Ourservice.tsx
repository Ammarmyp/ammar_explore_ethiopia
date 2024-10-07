import React from "react";
import OurServiceCard from "@/components/custom/OurServiceCard";
import { data, serviceData } from "@/lib/data";

const OurService = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 md:px-[140px] py-6 md:py-[60px]">
      <div className="space-y-8 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-secondary">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 lg:gap-x-20 gap-y-6">
          {serviceData.map((card, index) => (
            <OurServiceCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
