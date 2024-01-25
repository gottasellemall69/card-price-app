// @/components/Sports/CardSetButtons.js
import React,{useMemo} from 'react';

const CardSetButtons=({cardSets,onSelectCardSet}) => {
  const memoizedCardSets=useMemo(() => cardSets,[cardSets]);
  return (
    <>
      <div className="flex-wrap space-x-4 space-y-4 p-4 align-middle justify-start place-content-start">
        <select
          onChange={(e) => onSelectCardSet(e.target.value)}
          className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 mx-auto rounded cursor-pointer text-black">
          {memoizedCardSets.map((cardSet) => (
            <option
              placeholder="Choose set..."
              key={cardSet}
              value={cardSet}>
              {...cardSet}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default CardSetButtons;
