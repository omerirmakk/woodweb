import AboutUs from "@/components/AboutUs";
import AdvantagesOfWork from "@/components/AdvantagesOfWork";
import AnyQuestions from "@/components/AnyQuestions";
import HomeTable from "@/components/HomeTable";
import OurWork from "@/components/OurWork";
import WoodQuality from "@/components/WoodQuality";
import Head from "next/head";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Head>
          <title>Wood Web</title>
        </Head>
        <div className="homeMain"></div>
        <div className="homeTable">
          <HomeTable />
        </div>
        <WoodQuality />
        <OurWork />
        <div className="advantages_maindiv">
          <AdvantagesOfWork />
        </div>
        <div className="aboutus_maindiv">
          <AboutUs />
        </div>
        <div className="anyquestions_maindiv">
          <AnyQuestions />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
