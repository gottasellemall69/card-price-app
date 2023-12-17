// @/pages/SportsPage.page.js
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from '@/components/Navigation/NavBar.js';
import Link from 'next/link';

const SportsTable=dynamic(() => import('@/components/Sports/SportsTable.js'),{ ssr: false });

const SportsPage=() => {
  return (
    <>
      <Head>
        <title>Sports Cards Prices</title>
        <meta name="description" content="Get sports card prices" />
        <meta name="charset" content="UTF-8" />
        <meta name="keywords" content="javascript,nextjs,price-tracker,trading-card-game,tailwindcss" />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
      </Head>
      <NavBar />
      <h1 className="text-3xl font-bold mb-4 p-2">Sports Card Prices</h1>
      <p className='w-fit whitespace-pre-wrap text-sm italic text-white p-4'>
        All prices are supplied by: 
        <Link href="https://www.sportscardspro.com"
          title='https://www.sportscardspro.com'
          className='underline hover:cursor-pointer'> https://www.sportscardspro.com
        </Link>
      </p>
      <SportsTable />
      <SpeedInsights />
    </>
  );
};

export default SportsPage;
