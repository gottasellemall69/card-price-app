// @/components/Sports/CardSetButtons.js
import React,{Suspense,useMemo} from 'react';

const CardSetButtons=( {cardSets,onSelectCardSet} ) => {
  const memoizedCardSets=useMemo( () => cardSets,[cardSets] );

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
    <div className="flex-wrap space-x-4 space-y-4 p-4 align-middle justify-start place-content-start">
        {memoizedCardSets.map( ( cardSet ) => (
          <button
            key={cardSet}
            onClick={() => onSelectCardSet( cardSet )}
            className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 mx-auto rounded cursor-pointer hover:bg-black text-black hover:text-white"
          >
            {cardSet}
          </button>
        ) )}
      </div>
    </Suspense>
    </>
  );
};

export default CardSetButtons;
