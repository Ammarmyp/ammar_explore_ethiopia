"use client";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

import { data } from "@/lib/data";
import TopographyImageCard from "@/components/custom/TopographyImageCard";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const LocationSection = () => {
  return (
    <div className="mb-[80px]">
      <div className="relative">
        <Carousel className="w-[90%] max-w-full m-auto pt-10  ">
          <CarouselContent className="-ml-1 gap-2">
            {data.map(({ title, image, id }, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 ml-4"
              >
                <TopographyImageCard title={title} image={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[105%] left-[40%] md:-left-6 md:top-1/2 transform  z-10" />
          <CarouselNext className="absolute  top-[105%] right-[40%]  md:-right-6 md:top-1/2 transform  z-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default LocationSection;
