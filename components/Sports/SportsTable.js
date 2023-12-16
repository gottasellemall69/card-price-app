// @/components/Sports/SportsTable.js
import dynamic from 'next/dynamic';
import React,{Suspense,useEffect,useState,useMemo,useCallback} from 'react';
import CardSetButtons from './CardSetButtons';
const SportsTableComponent=dynamic( () => import( './SportsTableComponent' ),{ssr: false} );

function SportsTable() {
  const [sportsData,setSportsData]=useState( null );
  const [selectedCardSet,setSelectedCardSet]=useState( '' );

  const fetchData=useCallback( async () => {
    try {
      const response=await fetch( `/api/sportsData?cardSet=${ selectedCardSet }` );
      if( response.ok ) {
        const data=await response.json();
        setSportsData( data );
      } else {
        console.error( 'Failed to fetch data from the API' );
      }
    } catch( error ) {
      console.error( 'Error fetching data:',error );
    }
  },[selectedCardSet] );

  useEffect( () => {
    fetchData();
  },[fetchData] );

  const memoizedCardSets=useMemo(
    () => ['1975 Topps','1989 NBA Hoops','1990 NBA Hoops','1990 Skybox','1990 Fleer','1991 Fleer'],
    []
  );

  const memoizedFetchData=useCallback( fetchData,[fetchData] );

  return (
    <div>
      <Suspense fallback={['Loading']}>
        <span>
          <CardSetButtons cardSets={memoizedCardSets} onSelectCardSet={setSelectedCardSet} />
        </span>
      </Suspense>
      <Suspense fallback={['Loading']}>
        <div>
          <div id="table-container" className="inline-block min-w-full py-1 align-middle">
            {sportsData&&<SportsTableComponent data={sportsData} />}
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default SportsTable;
