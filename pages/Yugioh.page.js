// @/pages/Yugioh.page.js
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from '@/components/Navigation/NavBar.js';

const CardMatcher = dynamic( () => import( '@/components/Yugioh/CardMatcher' ),{ ssr: true } );

const Yugioh=() => {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh! Card Prices</title>
      </Head>
        <NavBar />
        <CardMatcher />
          <SpeedInsights />
    </>
  );
};

export default Yugioh;
