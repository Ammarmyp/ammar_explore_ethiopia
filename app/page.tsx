import Image from "next/image";
import Banner from "../components/custom/Banner";
import CompassQoute from "./layout/CompassQoute";
import TopographyImageCard from "../components/custom/TopographyImageCard";
import OurServiceCard from "@/components/custom/OurServiceCard";
import OurService from "./layout/Ourservice";

export default function Home() {
  return (
    <>
      <Banner />
      <CompassQoute />
      <OurService />
    </>
  );
}
