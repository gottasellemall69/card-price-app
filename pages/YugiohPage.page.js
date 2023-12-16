// @/pages/YugiohPage.page.js
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from '@/components/Navigation/NavBar.js';

const CardMatcher = dynamic( () => import( '@/components/Yugioh/CardMatcher' ),{ ssr: false } );

const YugiohPage=() => {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh! Prices</title>
        <meta name="description" content="Get Yu-Gi-Oh! card prices" />
        <meta name="keywords" content="javascript,nextjs,price-tracker,trading-card-game,tailwindcss" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1" />
        <meta name="charset" content="UTF-8" />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
        <link rel="author" href="https://github.com/gottasellemall69" />
        <meta property="og:image" content="https://iili.io/JuXlwmu.png"></meta>
        <meta property="og:title" content="Card Price App"></meta>
        <meta property="og:description" content="Enter list of TCG cards, get data back" />
        <meta property="og:url" content="https://card-price-app-bjp.vercel.app"></meta>
      </Head>
        <NavBar />
        <CardMatcher />
          <SpeedInsights />
    </>
  );
};

export default YugiohPage;
