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
        <CardMatcher />
          <SpeedInsights />
    </>
  );
};

export default Yugioh;
