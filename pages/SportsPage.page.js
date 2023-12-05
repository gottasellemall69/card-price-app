// @/pages/SportsPage.page.js

import React from 'react';
import SportsTable from '@/components/Sports/SportsTable.page.js';

const SportsPage=() => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 p-2">Sports Card Prices</h1>
      <SportsTable />
    </div>
  );
};

export default SportsPage
