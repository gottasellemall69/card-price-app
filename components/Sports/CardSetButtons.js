// @/components/Sports/CardSetButtons.js

import React from 'react';

const CardSetButtons=({ cardSets,onSelectCardSet }) => {
  return (
    <div className="flex space-x-4 p-4">
      {cardSets.map((cardSet) => (
        <button
          key={cardSet}
          onClick={() => onSelectCardSet(cardSet)}
          className="bg-blue-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          {cardSet}
        </button>
      ))}
    </div>
  );
};

export default CardSetButtons;
