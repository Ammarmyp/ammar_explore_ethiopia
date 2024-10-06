import React from "react";
import TopographyImageCard from "../../components/custom/TopographyImageCard";
import { data } from "@/lib/data";

const ScrollableCardList = () => {
  return (
    <div className="overflow-x-scroll over w-full py-[60px] transition-all ease-in-out duration-300">
      <div className="flex space-x-[40px]">
        {data.map((card) => (
          <TopographyImageCard
            key={card.id}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableCardList;
