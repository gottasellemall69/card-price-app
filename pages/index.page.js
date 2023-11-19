'use client'
// pages/index.js
import React,{ useState,useEffect } from 'react';
import CardTable from '../components/CardTable.page'; // Import the CardTable component

const Home=() => {
  const [userInput,setUserInput]=useState('');
  const [validationError,setValidationError]=useState('');
  const [matchedCards,setMatchedCards]=useState([]);
  const [cardData,setCardData]=useState(null);

  useEffect(() => {
    const fetchCardData=async () => {
      try {
        const response=await fetch('/api/cards');
        const data=await response.json();
        console.log('Card Data:',data);
        setCardData(data.cardData);
      } catch(error) {
        console.error('Error fetching card data:',error);
      }
    };

    fetchCardData();
  },[]);

  const matchCards=() => {
    const userCardList=userInput.split('\n');

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

    const matchedResults=
      cardData?.data&&
      cardData.data.filter((card) => {
        const cardName=card.name.toLowerCase();
        const cardSets=(card.card_sets||[]).map((set) => set.set_name.toLowerCase());

        return userCardList.some((entry) => {
          const [name]=entry.split(',').map((item) => item.trim().toLowerCase());

          // Check if the name or set of the card matches the user's input
          return (
            name.includes(cardName) ||
            cardSets.some((set) => set.includes(name))
          );
        });
      });

    setMatchedCards(matchedResults||[]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Card Matcher</h1>
      <p className="mt-4">
        Enter a list of cards, each containing at least the name of the card and either the card number or the name of the set. Separate each entry by a newline.</p>
      <p className='mb-4 italic max-w-fit'>Example: Blue-Eyes White Dragon LOB-001 OR Blue-Eyes White Dragon The Legend of Blue Eyes White Dragon</p>
      <textarea
        className="w-full h-48 p-2 border border-gray-300 mb-2 text-black resize-none"
        placeholder="Paste card list here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>
      {validationError&&<p className="text-red-500 mb-2">{validationError}</p>}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={matchCards}
      >
        Match Cards
      </button>
      {/* Display the matched cards in a table */}
      <CardTable matchedCards={matchedCards} /> {/* Pass matchedCards to CardTable component */}
    </div>
  );
};

export default Home;