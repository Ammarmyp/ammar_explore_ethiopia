import Banner from "@/components/custom/Banner";
import React from "react";
import CEOnoteSection from "../layout/CEOnoteSection";
import CompassQoute from "../layout/CompassQoute";
import LocationSection from "../layout/LocationsSection";
import OurService from "../layout/Ourservice";
import TeamsSection from "../layout/TeamsSection";
import AboutPageMotto from "@/app/about/_components/AboutPageMotto";
import EssaySection from "./_components/EssaySection";
import CoreTeams from "./_components/CoreTeams";

const AboutPage = () => {
  return (
    <>
      <Banner
        image={"banner.jpg"}
        heading={"ABOUT US"}
        subHeading={"The agency for you and you alone"}
      />
      <AboutPageMotto />
      <EssaySection />
      <CoreTeams />
      <Banner
        image={"artimage.jpg"}
        heading={`"Journey with Us – Meet the Explorers Who Make Your Adventures Unforgettable!"`}
      />
    </>
  );
};

export default AboutPage;
