// @/pages/Yugioh.page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next";
const CardMatcher=dynamic(() => import('@/components/Yugioh/CardMatcher'),{ ssr: false });
import NavBar from '@/components/Navigation/NavBar.js';

const Yugioh=() => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <CardMatcher />
        <SpeedInsights />
      </div>
    </>
  );
};

export default Yugioh;
