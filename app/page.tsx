import Banner from "../components/custom/Banner";
import CEOnoteSection from "./layout/CEOnoteSection";
import CompassQoute from "./layout/CompassQoute";
import LocationSection from "./layout/LocationsSection";
import OurService from "./layout/Ourservice";
import TeamsSection from "./layout/TeamsSection";

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
