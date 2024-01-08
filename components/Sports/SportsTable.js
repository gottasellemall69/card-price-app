'use client';
// @/components/Sports/SportsTable.js
import React,{useEffect,useState,useMemo,useCallback} from 'react';
import CardSetButtons from './CardSetButtons';
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
    () => ['1975 Topps','1989 NBA Hoops','1990 NBA Hoops','1990 Skybox','1990 Fleer','1991 Fleer'],
    []
  );
  return (
    <>
      <span>
        <CardSetButtons cardSets={memoizedCardSets} onSelectCardSet={setSelectedCardSet} />
      </span>
      <table className='mx-auto w-11/12 h-svh mb-10'>
        <thead>
          <tr>
            <th scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">Product Name</th>
            <th scope="col"
              className="sticky top-0 z-10 hidden border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter md:table-cell">Set</th>
            <th scope="col"
              className="sticky top-0 z-10  hidden border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter sm:table-cell">Ungraded</th>
            <th scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">PSA 9</th>
            <th scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg text-white whitespace-nowrap font-black backdrop-blur backdrop-filter table-cell">PSA 10</th>
          </tr>
        </thead>
        {sportsData&&
          <tbody className="mx-auto">
            {sportsData.map((item,index) => (
              item.products.map((product,productIndex) => (
                <tr key={`${index}-${productIndex}`}>
                  <td scope="row" className="border border-gray-800 p-2 whitespace-wrap text-center sm:text-left text-sm font-medium text-white">
                    {product["productName"]}
                  </td>
                  <td
                    scope="row"
                    className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white md:table-cell">
                    {product["consoleUri"]}
                  </td>
                  <td
                    scope="row"
                    className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white sm:table-cell">
                    {product["price1"]}
                  </td>
                  <td
                    scope="row"
                    className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm text-white">
                    {product["price3"]}
                  </td>
                  <td
                    scope="row"
                    className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm font-medium table-cell">
                    {product["price2"]}

                  </td>
                </tr>
              ))
            ))}
          </tbody>
        }
      </table>
    </>
  );
}
export default SportsTable;
