import Image from "next/image";
import Banner from "../components/custom/Banner";
import CompassQoute from "./layout/CompassQoute";
import TopographyImageCard from "../components/custom/TopographyImageCard";
import ScrollableCardList from "./layout/ScrollableCardList";
import OurServiceCard from "@/components/custom/OurServiceCard";

export default function Home() {
  return (
    <>
      <Banner />
      <CompassQoute />
      <ScrollableCardList />
      <div className="flex gap-2 justify-between">
        <OurServiceCard />
        <OurServiceCard />
        <OurServiceCard />
      </div>
    </>
  );
}
