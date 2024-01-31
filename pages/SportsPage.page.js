// @/pages/SportsPage.page.js
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {SpeedInsights} from "@vercel/speed-insights/next";
import NavBar from '@/components/Navigation/NavBar.js';
const SportsTable=dynamic(() => import('@/components/Sports/SportsTable.js'),{ssr: false});

const SportsPage=({metaTags}) => {
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
      <h1 className="text-3xl font-bold mb-4 p-2">Sports Card Prices</h1>
      <p className='w-fit whitespace-pre-wrap text-sm italic text-white p-4'>
        All prices are supplied by:
        <a href="https://www.sportscardspro.com"
          title='https://www.sportscardspro.com'
          className='underline hover:cursor-pointer'> https://www.sportscardspro.com
        </a>
      </p>
      <SportsTable />
      <SpeedInsights />
    </>
  );
};
export async function getStaticProps() {
  // Fetch data for meta tags
  const metaTags={
    title: 'Sports Card Prices',
    description: 'Get sports card prices',
    charset: 'UTF-8',
    keywords: 'javascript,nextjs,price-tracker,trading-card-game,tailwindcss'
  };

  return {
    props: {
      metaTags
    },
  };
}
export default SportsPage;
