// @/components/Sports/CardSetButtons.js

import React,{ Suspense } from 'react';
import { Loading } from '@/components/loading';

const CardSetButtons=({ cardSets,onSelectCardSet }) => {
  return (
    <div className="flex-wrap space-x-4 space-y-4 p-4 align-middle justify-start place-content-start">
      <Suspense fallback={Loading}>
      {cardSets.map((cardSet) => (
        <button
          name="getPriceButton"
          key={cardSet}
          onClick={() => onSelectCardSet(cardSet)}
          className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 mx-auto rounded cursor-pointer hover:bg-black text-black hover:text-white">
          {cardSet}
        </button>
      ) )}
      </Suspense>
    </div>
  );
};

export default CardSetButtons;
