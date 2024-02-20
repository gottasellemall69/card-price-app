'use client';
import React from "react";
import Head from 'next/head';
import Link from 'next/link';

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
      <div className="mx-auto text-center relative">
        <div className="py-20">
          <h3 className="text-3xl text-gray-200 font-black md:text-4xl">
            Welcome...
          </h3>
          <p className="text-gray-300 leading-relaxed mt-3 p-5 italic">
            To begin, please choose which type of card you want to get current prices for:
          </p>
        </div>
        <div className="container relative flex gap-24 lg:gap-32 p-5 flex-wrap mx-auto flex-col sm:flex-row w-fit max-w-full">
          <Link
            href="/YugiohPage"
            passHref
            className="justify-center bg-clip mx-auto absolute yugioh-button font-bold py-48 px-48 rounded-full flex-wrap m-2 text-center will-change-auto hover:drop-shadow-sm hover:scale-105 hover:cursor-pointer"
            title="Check Yu-Gi-Oh! card prices here!">
          </Link>
          <Link
            href="/SportsPage"
            passHref
            className="text-black justify-center mx-auto absolute sports-button font-bold py-48 px-48 rounded-full flex-wrap m-2 text-center will-change-auto hover:scale-105 hover:cursor-pointer"
            title="Check sports card prices here!">
          </Link>
        </div>
      </div>
    </>
  );
};
export async function getStaticProps() {
  // Fetch data for meta tags
  const metaTags={
    title: 'Card Prices',
    description: 'Get card prices',
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