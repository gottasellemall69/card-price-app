// @/pages/SportsPage.page.js
import React from 'react';
import { Suspense } from 'react'
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
const SportsTable=dynamic(() => import('@/components/Sports/SportsTable.js'),{ ssr: true });
import NavBar from '@/components/Navigation/NavBar.js';


const SportsPage=() => {
  return (
    <>
      <header className="w-full p-2 mx-auto bg-gradient-to-br from-indigo to-indigo via-red border-b-2 border-zinc-400 shadow-lg">
        <div className="h-auto items-center pt-2 pb-4 text-center font-medium text-white sm:mb-0">
          <div id="slogo"
            className="mx-auto h-16 w-16 overflow-hidden rounded-full border border-zinc-50 text-center align-middle sm:inline-block"></div>
          <blockquote className="brandname inline flex-wrap align-middle text-3xl font-extrabold -tracking-wider antialiased"></blockquote>
        </div>
        <NavBar />
        </header>
    <div className='p-5'>
      <h1 className="text-3xl font-bold mb-4 p-2">Sports Card Prices</h1>
      <div>
        <p className='w-fit whitespace-pre-wrap text-sm italic text-white'>
          All prices are supplied by https://www.sportscardspro.com/
          </p>
        </div>
        <Suspense fallback={<p>Loading card data...</p>}>
      <SportsTable />
          <SpeedInsights />
          </Suspense>
      </div>
      </>
  );
};

export default SportsPage
