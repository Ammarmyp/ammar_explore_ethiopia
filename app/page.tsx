import Image from "next/image";
import Banner from "../components/custom/Banner";
import CompassQoute from "./layout/CompassQoute";
import TopographyImageCard from "../components/custom/TopographyImageCard";
import OurServiceCard from "@/components/custom/OurServiceCard";
import OurService from "./layout/Ourservice";
import LocationSection from "./layout/LocationsSection";
import TeamsSection from "./layout/TeamsSection";
import CEOnoteSection from "./layout/CEOnoteSection";

export default function Home() {
  return (
    <>
      <Banner
        image={"banner1.jpg"}
        heading={"EXPLORE ETHIOPIA"}
        subHeading={"Lets show you the orgin of  man kind"}
      />
      <CompassQoute />
      <LocationSection />
      <OurService />
      <TeamsSection />
      <CEOnoteSection />
      <Banner
        image={"coffe.jpg"}
        heading={`"Unlock Incredible Savings – and lets discuss your Adventure!"`}
      />
    </>
  );
}
