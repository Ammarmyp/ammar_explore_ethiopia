import TeamMemberCard from "@/components/custom/TeamMemberCard";
import { teamData } from "@/lib/data";
import React from "react";

const TeamsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 md:px-14 lg:px-[140px] py-6 md:py-[60px] w-full">
      <div className="space-y-[40px] text-left ">
        <h2 className="text-2xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl text-secondary uppercase">
          start your journey with <br />
          OUR AMAZING TEAM{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-20 gap-y-6">
          {teamData.map((card, index) => (
            <TeamMemberCard
              key={index}
              name={card.name}
              image={card.image}
              positions={card.positionShortDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;
