import React from 'react';
import Link from 'next/link';

const Home=() => {
  return (
    <div className='min-h-screen flex flex-col flex-wrap text-white'>

      
      <h1 className="text-7xl font-bold text-center align-middle place-content-evenly mx-auto mt-24 lg:mt-32">Welcome...</h1>
      <p className="text-md font-semibold w-fit mx-auto p-5 italic">To begin, please choose which type of card you want to get current prices for:</p>
      <div className="relative flex gap-24 lg:gap-32 p-5 flex-wrap mx-auto">
        <Link href="/Yugioh"
              className="justify-center mx-auto absolute yugioh-button font-bold py-48 px-48 rounded-full flex-wrap m-2 text-center hover:cursor-pointer"
              title="Check Yu-Gi-Oh! card prices here!">
        </Link>
        <Link href="/SportsPage"
              className="text-black justify-center mx-auto absolute sports-button font-bold py-48 px-48 rounded-full flex-wrap m-2 text-center hover:cursor-pointer"
              title="Check sports card prices here!">
        </Link>
      </div>
    </div>
  );
};

export default Home