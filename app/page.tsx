import Image from "next/image";
import Banner from "../components/custom/Banner";
import CompassQoute from "./layout/CompassQoute";
import TopographyImageCard from "../components/custom/TopographyImageCard";
import ScrollableCardList from "./layout/ScrollableCardList";

export default function Home() {
  return (
    <>
      <Banner />
      <CompassQoute />
      <ScrollableCardList />
    </>
  );
}
