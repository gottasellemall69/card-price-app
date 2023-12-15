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
