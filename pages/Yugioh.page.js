// @/pages/Yugioh.page.js
import React from 'react';
import dynamic from 'next/dynamic';
const CardMatcher=dynamic(() => import('@/components/Yugioh/CardMatcher'),{ ssr: false });

const Yugioh=() => {
  return (
    <div className="container mx-auto p-4">
      <CardMatcher />
    </div>
  );
};

export default Yugioh;
