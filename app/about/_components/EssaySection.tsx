import React from "react";

const EssaySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-28 px-6 md:px-10 lg:px-48 w-full">
      <div className="md:w-1/2 flex justify-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl text-secondary font-bold tracking-tighter uppercase">
          We specialize in providing unforgettable experience in Ethiopia from
          Breath talking landscapes to rich cultural heritage.
        </h2>
      </div>
      <div className="flex flex-col items-start md:w-1/2 space-y-4 md:space-y-6">
        <h2 className="text-xl md:text-2xl text-secondary font-bold capitalize">
          A Dream Come True All Of Ethiopia In Your Palms
        </h2>
        <p className="text-sm md:text-base text-left">
          "Experience the best of Ethiopia with us. We offer personalized
          journeys that showcase the country's stunning landscapes and rich
          cultural heritage. From immersive cultural tours to exploring natural
          wonders, we ensure every trip is unforgettable. Our dedicated team is
          passionate about crafting unique itineraries tailored to your
          interests, giving you an authentic adventure that connects you with
          Ethiopia’s vibrant history, diverse traditions, and incredible natural
          beauty. Whether you’re seeking thrilling outdoor experiences, cultural
          exploration, or a deep dive into Ethiopia’s hidden gems, we provide a
          seamless and enriching journey from start to finish."
        </p>
      </div>
    </div>
  );
};

export default EssaySection;
