// @/pages/YugiohPage.page.js
import React,{useEffect,useState} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '@/components/Navigation/NavBar.js';
import {SpeedInsights} from "@vercel/speed-insights/next";

const CardMatcher = dynamic( () => import( '@/components/Yugioh/CardMatcher' ),{ ssr: false } );

const YugiohPage=() => {
  const [loaded,setLoaded]=useState( false );
  useEffect( () => {
    setLoaded( true );
  },[] );
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh! Prices</title>
        <meta name="description" content="Get Yu-Gi-Oh! card prices" />
        <meta name="charset" content="UTF-8" />
        <meta name="keywords" content="javascript,nextjs,price-tracker,trading-card-game,tailwindcss" />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
      </Head>
        <NavBar />
      {loaded&&<CardMatcher />} 
      <SpeedInsights />
    </>
  );
};
export default YugiohPage;
