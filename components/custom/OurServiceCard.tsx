import React from "react";
import { Card } from "../ui/card";
import { Ticket } from "lucide-react";

const OurServiceCard = () => {
  return (
    <div className="border-none shadow-none flex flex-col items-start justify-between gap-2 bg-transparent w-[335px]">
      <Ticket />
      <span>TICKET BOOKING</span>
      <p>Bus and airplanes to popular destinations in the country</p>
    </div>
  );
};

export default OurServiceCard;
