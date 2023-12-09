// @/pages/Yugioh.page.js
import React from 'react';
import { Suspense } from 'react'
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
const CardMatcher=dynamic(() => import('@/components/Yugioh/CardMatcher'),{ ssr: true });
import NavBar from '@/components/Navigation/NavBar.js';

const Yugioh=() => {
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
      <div className="container mx-auto p-4">
        <Suspense fallback={<p>Loading card data...</p>}>
        <CardMatcher />
          <SpeedInsights />
        </Suspense>
      </div>
    </>
  );
};

export default Yugioh;
