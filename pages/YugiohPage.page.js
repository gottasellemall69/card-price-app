// @/pages/YugiohPage.page.js
import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '@/components/Navigation/NavBar';
import {SpeedInsights} from "@vercel/speed-insights/next";

const CardMatcher=dynamic( () => import( '@/components/Yugioh/CardMatcher' ),{ssr: false} );

const YugiohPage=({metaTags}) => {
  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="charset" content={metaTags.charset} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
      </Head>
        <NavBar />
        <CardMatcher />
        <SpeedInsights />
    </>
  );
};
export async function getStaticProps() {
  // Fetch data for meta tags
  const metaTags={
    title: 'Yu-Gi-Oh! Prices',
    description: 'Get Yu-Gi-Oh! card prices',
    charset: 'UTF-8',
    keywords: 'javascript,nextjs,price-tracker,trading-card-game,tailwindcss'
  };

  return {
    props: {
      metaTags,
    },
  };
}
export default YugiohPage;
