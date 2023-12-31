'use client'
// @/components/Sports/SportsTableComponent.js
import React,{useEffect,useState,Suspense,useMemo} from 'react';
import Loading from "../loading";
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
      {memoizedSportsData? (
          <tbody className="mx-auto w-11/12">
            {sportsData.map((item,index) => (
              item.products.map((product,productIndex) => (
              <tr key={`${index}-${productIndex}`}>
                  <td scope="row" className="border border-gray-800 p-2 whitespace-wrap text-center sm:text-left text-sm font-medium text-white">{product["productName"]}</td>
                  <td scope="row" className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white md:table-cell">{product["consoleUri"]}</td>
                  <td scope="row" className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white sm:table-cell">{product["price1"]}</td>
                  <td scope="row" className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm text-white">{product["price3"]}</td>
                  <td scope="row" className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm font-medium table-cell">{product["price2"]}</td>
                </tr>
              ))
            ))}
          </tbody>
      ):(<Suspense fallback={<Loading />} />
      )}
      </>
  );
}
export default SportsTableComponent;
