import React from "react";
import Head from "next/head";
import Image from "next/image";
import OurWork from "@/components/OurWork";
import HomeTable from "@/components/HomeTable";
import Footer from "@/components/Footer";
import WoodQuality from "@/components/WoodQuality";

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
