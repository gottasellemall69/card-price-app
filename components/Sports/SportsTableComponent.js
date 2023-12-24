'use client'
// @/components/Sports/SportsTableComponent.js
import React,{useEffect,useState,Suspense,useMemo} from 'react';

function SportsTableComponent( {data} ) {
  const [sportsData,setSportsData]=useState( data );

  useEffect( () => {
    if( data ) {
      setSportsData( data );
    }
  },[data] );

  const memoizedSportsData=useMemo( () => sportsData,[sportsData] );

  console.log( 'sportsData:',memoizedSportsData );
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
      {memoizedSportsData? (
          <tbody className="mx-auto max-w-full">
            {sportsData.map((item,index) => (
              item.products.map((product,productIndex) => (
              <tr key={`${index}-${productIndex}`}>
                  <td className="border border-gray-800 p-2 whitespace-wrap text-center sm:text-left text-sm font-medium text-white table-cell">{product["productName"]}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white md:table-cell">{product["consoleUri"]}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white sm:table-cell">{product["price1"]}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm text-white table-cell">{product["price3"]}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm font-medium table-cell">{product["price2"]}</td>
                </tr>
              ))
            ))}
          </tbody>
      ):(
        <p>No data available</p>
      )}
      </Suspense>
      </>
  );
}

export default SportsTableComponent;
