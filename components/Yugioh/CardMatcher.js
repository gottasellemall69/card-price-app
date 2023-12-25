// @/components/Yugioh/CardMatcher.js
import React,{useState,useEffect,useMemo,useCallback} from 'react';
import useSWR from 'swr';
import CardTable from './CardTable';
import DownloadCSVButton from './DownloadCSVButton'; // Import the new component
  
async function fetchCardData( url ) {
  const response=await fetch( url );
  const data=await response.json();
  return data.data;
}
const CardMatcher=() => {
  const [userInput,setUserInput]=useState( localStorage.getItem( 'userInput' )||'' );
  const [validationError,setValidationError]=useState( '' );
  const [matchedCards,setMatchedCards]=useState( [] );
  const [userCardList,setUserCardList]=useState( [] );
  const [resultCount,setResultCount]=useState( 0 );
  // Use SWR to fetch and cache card data
  const {data: cardData,error: cardError}=useSWR(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true',
    fetchCardData
  );
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

    // Updated code to return card details and price
    const matchedResults=cardData.filter( ( card ) => {
      const cardName=card.name.toLowerCase();
      const cardSets=( card.card_sets||[] ).map( ( set ) => ( {
        set_name: set.set_name.toLowerCase(),
        set_code: set.set_code.toLowerCase(),
        set_edition: set.set_edition.toLowerCase(),
        set_rarity: set.set_rarity.toLowerCase(),
        price: set.set_price.toLocaleString() // Assuming price is a number field
      } ) );

      return userCardList.some( ( entry ) => {
        const [name,numberOrSet,edition]=entry.split( ',' ).map( ( item ) => item.trim().toLowerCase() );
        return (
          name.includes( cardName )||
          ( numberOrSet==='set'&&
            cardSets.some( ( set ) => {
              return (
                set.set_name.includes( name )||
                set.set_code.includes( numberOrSet )||
                set.set_edition.includes( edition )||
                set.set_rarity.includes( edition )||
                set.price.includes( edition )
              );
            } ) )
        );
      } );
    } );

    setMatchedCards( matchedResults.length>0? matchedResults:[] );
    setResultCount( matchedResults.length );
  },[userInput,cardData] );
  const memoizedMatchCards=useMemo( () => matchCards,[matchCards] );
  const handleUserInputChange = useCallback((event) => {
    const value = event.target.value;
    setUserInput(value);
    localStorage.setItem('userInput', value); // Store user input in local storage
  }, []);
  const isLoading=!cardData&&!cardError;
  const isTablePopulated=matchedCards.length>0;
  
  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left mx-auto">Card Prices: Yu-Gi-Oh!</h1>
      <p className="mt-4 w-fit text-center sm:text-left mx-auto sm:mx-0">
        Enter a list of cards, each containing the name of the card, the card number, the name of
        the set, and the edition (1st Edition, Unlimited, Limited).
        <br />
        Separate each entry by a newline, please remove all commas from the name of the card.
      </p>
      <span className="my-2 italic max-w-fit flex flex-col space-x-5 text-center sm:text-left mx-auto sm:mx-0">
        Example:<br />
        <p>Blue-Eyes White Dragon The Legend of Blue Eyes White Dragon  LOB-001 Unlimited</p>
        <p className="not-italic my-1">OR</p>
        <p>Time Wizard 1st Edition Metal Raiders MRD-065</p>
      </span>
      <textarea
        name="userInput"
        className="w-full h-48 p-2 border border-gray-300 mb-2 text-black resize-none"
        placeholder="Paste card list here..."
        value={userInput}
        onChange={handleUserInputChange}>

      </textarea>
      
      <button
        name="yugiohCardButton"
        className="relative bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
        onClick={memoizedMatchCards}>
        Search Cards
      </button>
        {isTablePopulated && <DownloadCSVButton matchedCards={matchedCards} />}
      {validationError&&<p className="text-red-500 mb-2">{validationError}</p>}
      {resultCount>0&&(
        <p className="text-sm text-center sm:text-left mx-auto sm:mx-0 mb-2">
          {resultCount} result(s) found
        </p>
      )}
      
      {matchedCards.length>0? (
        <CardTable  matchedCards={matchedCards} userCardList={userCardList} isLoading={isLoading} isTablePopulated={isTablePopulated} />
      ):[]}
      </div>
      </>
  );
};

export default CardMatcher;



  




