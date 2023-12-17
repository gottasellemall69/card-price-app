import React,{useState,useEffect,useMemo,useCallback} from 'react';
import useSWR from 'swr';
import CardTable from './CardTable';

const CardMatcher=() => {
  const [userInput,setUserInput]=useState( '' );
  const [validationError,setValidationError]=useState( '' );
  const [matchedCards,setMatchedCards]=useState( [] );
  const [userCardList,setUserCardList]=useState( [] );
  const {data: cardData,error: cardError}=useSWR(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true'
  ); // Use SWR for fetching and caching card data

  useEffect( () => {
    if( cardError ) {
      console.error( 'Error fetching card data:',cardError );
    }
  },[cardError] );

  const matchCards=useCallback( () => {
    const userCardList=userInput.split( '\n' ).map( ( entry ) => entry.trim().toLowerCase() );
    setUserCardList( userCardList );

    const isValid=userCardList.every( ( entry ) => {
      const [name,numberOrSet,edition]=entry.split( ',' ).map( ( item ) => item.trim() );
      return name&&( numberOrSet===undefined||numberOrSet.toLowerCase()==='set' )&&
        ( edition===undefined||edition.toLowerCase()==='edition' );
    } );

    if( !isValid ) {
      setValidationError( 'Each entry must contain at least the name of the card and either the card number or the name of the set.' );
      return;
    }

    setValidationError( '' );

    const matchedResults=cardData.filter( ( card ) => {
      const cardName=card.name.toLowerCase();
      const cardSets=( card.card_sets||[] ).map( ( set ) => ( {
        set_name: set.set_name?.toLowerCase(),
        set_code: set.set_code?.toLowerCase(),
        set_edition: set.set_edition?.toLowerCase(),
      } ) );

      return userCardList.some( ( entry ) => {
        const [name,numberOrSet,edition]=entry.split( ',' ).map( ( item ) => item.trim().toLowerCase() );
        return (
          name.includes( cardName )||
          ( numberOrSet==='set'&&
            cardSets.some( ( set ) =>
              set.set_name.includes( name )||
              set.set_code.includes( numberOrSet )||
              set.set_edition.includes( edition )
            ) )
        );
      } );
    } );

    setMatchedCards( matchedResults||[] );
  },[userInput,cardData] );

  // Use SWR to fetch and cache card data
  const {data: cachedCardData}=useSWR(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true',
    fetchCardData
  );


  const memoizedMatchCards=useMemo( () => matchCards,[matchCards] );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left mx-auto">Card Prices: Yu-Gi-Oh!</h1>
      <p className="mt-4 w-9/12 whitespace-pre-wrap text-center sm:text-left mx-auto sm:mx-6">
        Enter a list of cards, each containing at least the name of the card and either the card number or the name of
        the set.
        <br />
        Separate each entry by a newline, please remove all commas from the name of the card.
      </p>
      <span className="my-2 italic max-w-fit flex flex-col space-x-5 text-center sm:text-left mx-auto sm:mx-0">
        Example:<br />
        <p>Blue-Eyes White Dragon LOB-EN001</p> 
        <p>Omega Summon Shadows in Valhalla</p>
        <p>Strike Ninja IOC-007 Invasion of Chaos</p>
      </span>
      <textarea
        name="userInput"
        className="w-full h-48 p-2 border border-gray-300 mb-2 text-black resize-none"
        placeholder="Paste card list here..."
        value={userInput}
        onChange={( e ) => setUserInput( e.target.value )}>

      </textarea>
      {validationError && <p className="text-red-500 mb-2">{validationError}</p>}
      <button
        name="yugiohCardButton"
        className="bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
        onClick={memoizedMatchCards}
      >
        Search Cards
      </button>

      {matchedCards.length > 0 && (
        <CardTable
          matchedCards={matchedCards}
          userCardList={userCardList}
        />
      )}
    </div>
  );
};

export default CardMatcher

async function fetchCardData( url ) {
  const response=await fetch( url );
  const data=await response.json();
  return data.data;
}