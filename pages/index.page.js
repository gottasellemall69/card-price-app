import React from 'react';
import Link from 'next/link';

const Home=() => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-5">
      <h1 className="text-7xl font-bold text-center align-middle place-content-evenly mx-auto -mt-48">Welcome...</h1>
      <p className="text-md font-semibold w-fit mx-auto p-5 italic">To begin, please choose which type of card you want to get current prices for:</p>
      <div className="flex gap-10 lg:gap-15 p-5 mx-auto flex-wrap">
        <Link href="/Yugioh"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-wrap m-2 text-center align-middle place-content-evenly mx-auto hover:cursor-pointer"
              title="Check Yu-Gi-Oh! card prices here!">
            Yu-Gi-Oh! Prices
        </Link>
        <Link href="/SportsPage"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-wrap m-2 text-center align-middle place-content-evenly mx-auto hover:cursor-pointer"
              title="Check sports card prices here!">
            Sports Card Prices
        </Link>
      </div>
    </div>
  );
};

export default Home