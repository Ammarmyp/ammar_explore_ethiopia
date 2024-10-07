import Image from "next/image";
import Banner from "../components/custom/Banner";
import CompassQoute from "./layout/CompassQoute";
import TopographyImageCard from "../components/custom/TopographyImageCard";
import OurServiceCard from "@/components/custom/OurServiceCard";
import OurService from "./layout/Ourservice";
import LocationSection from "./layout/LocationsSection";
import TeamsSection from "./layout/TeamsSection";

export default function Home() {
  return (
    <>
      <Banner />
      <CompassQoute />
      <LocationSection />
      <OurService />
      <TeamsSection />
    </>
  );
}
