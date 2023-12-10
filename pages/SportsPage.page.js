// @/pages/SportsPage.page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
const SportsTable=dynamic(() => import('@/components/Sports/SportsTable.js'),{ ssr: false });
import NavBar from '@/components/Navigation/NavBar.js';
import Link from 'next/link';


const SportsPage=() => {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold mb-4 p-2">Sports Card Prices</h1>
      <p className='w-fit whitespace-pre-wrap text-sm italic text-white'>
        All prices are supplied by
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
