import React from "react";
import { Card } from "../ui/card";
import { Ticket } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

const OurServiceCard = ({ title, description }: Props) => {
  return (
    <div className="border-none shadow-none flex flex-col items-start justify-between gap-2 bg-transparent w-[285px] hover:shadow-md hover:rounded-lg hover -translate-y-1 transition-all duration-300 ease-in-out px-5 py-3">
      <Ticket />
      <span className="font-semibold text-xl uppercase">{title}</span>
      <p className="text-start">{description}</p>
    </div>
  );
};

export default OurServiceCard;
