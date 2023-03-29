import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Image from 'next/image';
import Link from 'next/Link';
import HomeTable from '@/components/HomeTable';
import Footer from '@/components/Footer';
import WoodQuality from '@/components/WoodQuality';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Wood Web</title>
      </Head>
      <div className="homeMain"></div>
      <div className="homeTable">
        <HomeTable />
      </div>
      <WoodQuality />
      {/*  <Footer /> */}
    </Layout>
  );
};

export default Home;
