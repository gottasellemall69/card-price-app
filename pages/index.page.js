import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SpeedInsights } from "@vercel/speed-insights/next";

const Home=() => {
  return (
    <>
      <Head>
        <title>Card Price App</title>
        <meta name="description" content="Enter list of TCG cards, get data back" />
        <meta name="keywords" content="javascript,nextjs,price-tracker,trading-card-game,tailwindcss" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1" />
        <meta name="charset" content="UTF-8" />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
        <link rel="author" href="https://github.com/gottasellemall69" />
        <meta property="og:image" content="https://iili.io/JuXlwmu.png"></meta>
        <meta property="og:title" content="Card Price App"></meta>
        <meta property="og:description" content="Enter list of TCG cards, get data back" />
        <meta property="og:url" content="https://card-price-app-bjp.vercel.app"></meta>

      </Head>
        <div className="mx-auto max-w-full p-5 text-center place-content-center align-middle justify-center">
          <h2 className="text-4xl font-bold tracking-tight mt-24 text-white sm:text-6xl">Welcome...</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 italic">
            To begin, please choose which type of card you want to get current prices for:</p>
        </div>
        <div className="container relative flex gap-24 lg:gap-32 p-5 flex-wrap mx-auto flex-col sm:flex-row w-fit max-w-full">
          <Link href="/YugiohPage"
            className="justify-center bg-clip mx-auto absolute yugioh-button font-bold py-48 px-48 rounded-full flex-wrap m-2 text-center will-change-auto hover:drop-shadow-sm hover:scale-105 hover:cursor-pointer"
            title="Check Yu-Gi-Oh! card prices here!">
          </Link>
          <Link href="/SportsPage"
            className="text-black justify-center mx-auto absolute sports-button font-bold py-48 px-48 rounded-full flex-wrap m-2 text-center will-change-auto hover:scale-105 hover:cursor-pointer"
            title="Check sports card prices here!">
          </Link>
        </div>
        <SpeedInsights />
    </>
  );
};

export default Home;
