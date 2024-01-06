import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import {SpeedInsights} from "@vercel/speed-insights/next";

const Home=({metaTags}) => {
  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="charset" content={metaTags.charset} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href="https://card-price-app-bjp.vercel.app" />
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
export async function getStaticProps() {
  // Fetch data for meta tags
  const metaTags={
    title: 'Yu-Gi-Oh! Prices',
    description: 'Get Yu-Gi-Oh! card prices',
    charset: 'UTF-8',
    keywords: 'javascript,nextjs,price-tracker,trading-card-game,tailwindcss'
  };

  return {
    props: {
      metaTags
    },
  };
}
export default Home;
