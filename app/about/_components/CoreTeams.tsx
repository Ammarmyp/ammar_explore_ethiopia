"use client";
import TeamMemberCard from "@/components/custom/TeamMemberCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { teamData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CoreTeams = () => {
  const ref = useRef(null);
  const { scrollYProgress: cardScroll } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateX = useTransform(cardScroll, [0, 1], [-100, 100]);

  return (
    <div
      className="flex flex-col items-center justify-center px-8 md:px-14 lg:px-[140px] py-10 md:py-[60px] w-full"
      ref={ref}
    >
      <div className="space-y-[40px] text-left ">
        <motion.h2
          className="text-2xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl text-secondary uppercase px-4"
          style={{
            translateX,
          }}
        >
          start your journey with <br />
          OUR AMAZING TEAM{" "}
        </motion.h2>

        <div className="relative">
          <Carousel className="w-[90%] max-w-full m-auto pt-10  ">
            <CarouselContent className="-ml-1 gap-2">
              {teamData.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 ml-2"
                >
                  <TeamMemberCard
                    key={index}
                    name={card.name}
                    image={card.image}
                    positions={card.positionShortDescription}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[107%] left-[40%] md:left-[45%]  transform  z-10" />
            <CarouselNext className="absolute  top-[107%]  right-[40%] md:right-[45%]  transform  z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CoreTeams;
