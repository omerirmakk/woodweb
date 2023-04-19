import HomeTable from "@/components/HomeTable";
import OurWork from "@/components/OurWork";
import WoodQuality from "@/components/WoodQuality";
import Head from "next/head";

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
        {/*  <Footer /> */}
      </div>
    </>
  );
};

export default Home;
