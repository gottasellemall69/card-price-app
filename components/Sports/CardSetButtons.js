'use client';
import React from 'react';

function CardSetButtons({cardSets,onSelectCardSet}) {
  return (
    <select onChange={(e) => onSelectCardSet(e.target.value)}>
      {cardSets?.map((cardSet) => (
        <option key={cardSet} value={cardSet}>
          {cardSet}
        </option>
      ))}
    </select>
  );
}

export default CardSetButtons;