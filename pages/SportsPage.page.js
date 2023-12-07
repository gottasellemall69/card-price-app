// @/pages/SportsPage.page.js

import React from 'react';
import SportsTable from '@/components/Sports/SportsTable.js';

const SportsPage=() => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 p-2">Sports Card Prices</h1>
      <div>
        <p className='w-fit whitespace-pre-wrap text-sm italic text-white'>
          All prices are supplied by https://www.sportscardspro.com/
          </p>
      </div>
      <SportsTable />
    </div>
  );
};

export default SportsPage
