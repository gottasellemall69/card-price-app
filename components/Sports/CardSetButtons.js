import React from 'react';

function CardSetButtons({cardSet,onSelectCardSet}) {
  return (
    <select onChange={(e) => onSelectCardSet(e.target.value)}>
      {cardSet.map((cardSet) => (
        <option key={cardSet} value={cardSet}>
          {cardSet}
        </option>
      ))}
    </select>
  );
}

export default CardSetButtons;