// @/components/Yugioh/CardMatcher.js

import React,{ useState } from 'react';
import dynamic from 'next/dynamic';
const CardTable=dynamic(() => import('./CardTable'),{ ssr: true });
import cardData from '@/data/Yugioh/cardData.json';


const CardMatcher=() => {
  const [userInput,setUserInput]=useState('');
  const [validationError,setValidationError]=useState('');
  const [matchedCards,setMatchedCards]=useState([]);
  const [userCardList,setUserCardList]=useState([]);

  const matchCards=() => {
    const userCardList=userInput.split('\n');
    setUserCardList(userCardList);

    const isValid=userCardList.every((entry) => {
      const [name,numberOrSet]=entry.split(',').map((item) => item.trim());
      return name&&(numberOrSet===undefined||numberOrSet.toLowerCase()==='set');
    });

    if(!isValid) {
      setValidationError(
        'Each entry must contain at least the name of the card and either the card number or the name of the set.'
      );
      return;
    }

    setValidationError('');

      const matchedResults = cardData.data.filter((card) => {
      const cardName = card.name.toLowerCase();
      const cardSets = (card.card_sets || []).map((set) => ({
        name: set.set_name.toLowerCase(),
        code: set.set_code.toLowerCase()
      }));

      return userCardList.some((entry) => {
        const [name, numberOrSet] = entry.split(',').map((item) => item.trim().toLowerCase());
        return (
          name.includes(cardName) ||
          (numberOrSet === 'set' &&
            cardSets.some((set) =>
              set.name.includes(name) ||
              set.code.includes(numberOrSet) 
            ))
        );
      });
    });

    setMatchedCards(matchedResults || []);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Card Prices: Yu-Gi-Oh!</h1>
      <p className="mt-4">
        Enter a list of cards, each containing at least the name of the card and either the card number or the name of
        the set. Separate each entry by a newline, please remove all commas (',') from the name of the card.
      </p>
      <p className="mb-4 italic max-w-fit">
        Example: Blue-Eyes White Dragon LOB-EN001 OR Omega Summon Shadows in Valhalla OR Strike Ninja IOC-007 Invasion of Chaos
      </p>
      <textarea
        name='userInput'
        className="w-full h-48 p-2 border border-gray-300 mb-2 text-black resize-none"
        placeholder="Paste card list here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>
      {validationError&&<p className="text-red-500 mb-2">{validationError}</p>}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={matchCards}>
        Search Cards
      </button>
      {matchedCards.length>0&&<CardTable matchedCards={matchedCards} userCardList={userCardList} />}
    </div>
  );
};

export default CardMatcher;
