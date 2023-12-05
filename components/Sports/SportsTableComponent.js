// @/components/Sports/SportsTableComponent.js

import React,{ useEffect,useState } from 'react';

function SportsTableComponent({ data }) {
  const [sportsData,setSportsData]=useState(data);

  useEffect(() => {
    if(data) {
      setSportsData(data);
    }
  },[data]);

  console.log('sportsData:',sportsData); // Log the received data
  return (
    <div>
      {sportsData? (
        <table className='max-w-full w-11/12 min-h-screen mx-auto'>
          <thead>
            <tr>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">Product Name</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter md:table-cell">Set</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter sm:table-cell">Ungraded</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">PSA 9</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg text-white whitespace-nowrap font-black backdrop-blur backdrop-filter">PSA 10</th>
            </tr>
          </thead>
          <tbody>
            {sportsData.map((item,index) => (
              item.products.map((product,productIndex) => (
              <tr key={`${index}-${productIndex}`}>
                <td className="border border-gray-800 p-2 whitespace-wrap text-sm font-medium text-white">{product["productName"]}</td>
                <td className="border border-gray-800 p-2 whitespace-wrap hidden text-sm text-white md:table-cell">{product["consoleUri"]}</td>
                <td className="border border-gray-800 p-2 whitespace-nowrap hidden text-sm text-white sm:table-cell">{product["price1"]}</td>
                <td className="border border-gray-800 p-2 whitespace-nowrap text-sm text-white">{product["price3"]}</td>
                <td className="border border-gray-800 p-2 whitespace-nowrap text-sm font-medium">{product["price2"]}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      ):(
        <p>No data available</p>
      )}
    </div>
  );
}

export default SportsTableComponent;
