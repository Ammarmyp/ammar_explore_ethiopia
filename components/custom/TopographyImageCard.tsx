import { Card } from "@/components/ui/card";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const TopographyImageCard = ({ title, image }: Props) => {
  return (
    <Card
      style={{ backgroundImage: `url('/assets/${image}')` }}
      className={` bg-no-repeat bg-center bg-cover w-[473px] h-[546px] flex items-center justify-center rounded-md border-none flex-shrink-0 `}
    >
      <span className="text-center text-white text-xl font-semibold drop-shadow-lg">
        {title}
      </span>
    </Card>
  );
};

export default TopographyImageCard;
