'use client';
// @/components/Sports/SportsTable.js
import React,{useEffect,useState,useMemo,useCallback} from 'react';
import CardSetButtons from './CardSetButtons';
import SportsCSVButton from "./SportsCSVButton";
function SportsTable() {
  const [sportsData,setSportsData]=useState(null);
  const [selectedCardSet,setSelectedCardSet]=useState('');
  const fetchData=useCallback(async () => {
    try {
      const response=await fetch(`/api/sportsData?cardSet=${selectedCardSet}`);
      if(response.ok) {
        const data=await response.json();
        setSportsData(data);
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch(error) {
      console.error('Error fetching data:',error);
    }
  },[selectedCardSet]);
  useEffect(() => {
    fetchData();
  },[fetchData]);
  const memoizedCardSets=useMemo(
    () => [
      '1975 Topps',
      '1989 NBA Hoops',
      '1990 NBA Hoops',
      '1990 Skybox',
      '1990 Fleer',
      '1991 Fleer',
      '1990 Pro Set',
      '1991 Pro Set',
      '1991 Proline Portraits',
      '1991 Wild Card',
      '1991 Wild Card College Draft Picks'
    ],[]
  );

  return (
    <>
      <div className="min-h-full container mx-auto w-full overflow-x-hidden" style={{maxHeight: '750px',overflowY: 'auto'}}>
        <div className="flex-row space-x-10">
          <CardSetButtons
            cardSets={memoizedCardSets}
            onSelectCardSet={setSelectedCardSet} />
          <SportsCSVButton
            sportsData={sportsData} />
        </div>
        <table className='mx-auto box-content w-full mb-10'>
          <thead>
            <tr>
              <th scope="col"
                className="sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white whitespace-pre backdrop-blur backdrop-filter">Card Name</th>
              <th scope="col"
                className="sticky top-0 z-10 p-2 hidden border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter md:table-cell">Set</th>
              <th scope="col"
                className="sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">Ungraded</th>
              <th scope="col"
                className="sticky top-0 z-10 p-2 hidden border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter sm:table-cell">PSA 9</th>
              <th scope="col"
                className="sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg text-white whitespace-nowrap font-black backdrop-blur backdrop-filter table-cell">PSA 10</th>
            </tr>
          </thead>
          {sportsData&&
            <tbody className="mx-auto">
              {sportsData.map((item,index) => (
                item.products.map((product,productIndex) => (
                  <tr key={`${index}-${productIndex}`}>
                    <td scope="row" className="border border-gray-800 p-2 whitespace-wrap text-center md:text-left text-sm font-medium text-white">
                      {product["productName"]}
                    </td>
                    <td
                      scope="row"
                      className="border border-gray-800 p-0.5 whitespace-pre-wrap hidden text-center md:text-left text-sm text-white md:table-cell">
                      {product["consoleUri"]}
                    </td>
                    <td
                      scope="row"
                      className="border border-gray-800 p-0.5 whitespace-nowrap text-center md:text-left text-sm text-white">
                      {product["price1"]}
                    </td>
                    <td
                      scope="row"
                      className="border border-gray-800 p-0.5 whitespace-nowrap hidden text-center md:text-left text-sm text-white sm:table-cell">
                      {product["price3"]}
                    </td>
                    <td
                      scope="row"
                      className="border border-gray-800 p-0.5 whitespace-nowrap text-center md:text-left text-sm font-medium table-cell">
                      {product["price2"]}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          }
        </table>
      </div>
    </>
  );
}
export default SportsTable;
