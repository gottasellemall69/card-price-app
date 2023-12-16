// @/pages/YugiohPage.page.js
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '@/components/Navigation/NavBar.js';

const CardMatcher = dynamic( () => import( '@/components/Yugioh/CardMatcher' ),{ ssr: false } );

const YugiohPage=() => {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh! Prices</title>
        <meta name="description" content="Get Yu-Gi-Oh! card prices" />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
      </Head>
        <NavBar />
        <CardMatcher />
    </>
  );
};

export default YugiohPage;
