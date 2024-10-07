import AboutPageMotto from "@/app/about/_components/AboutPageMotto";
import Banner from "@/components/custom/Banner";
import CoreTeams from "./_components/CoreTeams";
import EssaySection from "./_components/EssaySection";

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
