// @/components/Sports/CardSetButtons.js
import React,{useMemo} from 'react';

const CardSetButtons=({cardSets,onSelectCardSet}) => {
  const memoizedCardSets=useMemo(() => cardSets,[cardSets]);
  return (
    <select
      onChange={(e) => onSelectCardSet(e.target.value)}
      className="align-baseline w-fit px-2 py-2 m-2 float-left bg-white text-black font-bold rounded border border-zinc-400">
      {memoizedCardSets.map((cardSet) => (
        <option
          placeholder="Choose set..."
          key={cardSet}
          value={cardSet}>
          {...cardSet}
        </option>
      ))}
    </select>
  );
};
export default CardSetButtons;
