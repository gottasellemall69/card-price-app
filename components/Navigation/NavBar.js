// @/components/Navigation/NavBar.js

import React,{ useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  useEffect(() => {
    function hideMenuOnResize() {
      const x=document.getElementById("mobile-menu");
      const y=window.innerWidth;
      if(y>640) {
        x.style.display="none";
      }
    }
    hideMenuOnResize();
    window.addEventListener("resize",hideMenuOnResize);

    return () => {
      window.removeEventListener("resize",hideMenuOnResize);
    };
  },[]);

  const MenuToggle=() => {
    const menu=document.getElementById("mobile-menu");
    if(menu.style.display==="none") {
      menu.style.display="block";
      document.getElementById("menu-icon").style.display="none";
      document.getElementById("close-icon").style.display="block";
    } else {
      menu.style.display="none";
      document.getElementById("menu-icon").style.display="block";
      document.getElementById("close-icon").style.display="none";
    }
  };

  return (
    <>
      <header className="pulse mx-auto align-middle w-full p-2 mb-2">
        <div className="h-auto items-center pt-2 pb-4 text-center font-medium text-white sm:mb-0">
          <div id="slogo" className="mx-auto h-16 w-16 overflow-hidden rounded-full border border-zinc-50 text-center align-middle sm:inline-block"></div>
          <blockquote className="brandname inline flex-wrap align-middle text-3xl font-extrabold -tracking-wider antialiased"></blockquote>
        </div>
      <nav className="mx-auto text-center font-semibold hidden sm:hidden" id="mobile-menu" style={{ display: 'none' }}>
          <div className="mx-auto grid grid-cols-auto flex-wrap w-full gap-y-5 py-3">
          <Link href="/" title="Home" rel="noopener" className="w-fit rounded-md py-1 px-4 text-xl whitespace-nowrap text-white hover:transition duration-500 hover:bg-white hover:text-black lg:px-6">Home</Link>
          <Link href="/YugiohPage" title="Check Yu-Gi-Oh! prices" rel="noopener" className="w-fit rounded-md py-1 px-4 whitespace-nowrap text-xl text-white hover:transition duration-500 hover:bg-white hover:text-black lg:px-6">Yu-Gi-Oh! TCG Prices</Link>
          <Link href="/SportsPage" title="Check sports cards prices" rel="noopener" className="w-fit rounded-md py-1 px-4 whitespace-nowrap text-xl text-white hover:transition duration-500 hover:bg-white hover:text-black lg:px-6">Sports Card Prices</Link>
        </div>
      </nav>

      <nav className="mx-auto place-content-evenly text-justify font-semibold hidden sm:flex sm:flex-wrap">
        <Link href="/" title="Home" rel="noopener" className="link link-underline link-underline-black rounded-md py-1 px-5 text-xl text-white">Home</Link>
        <Link href="/YugiohPage" title="Check Yu-Gi-Oh! prices" rel="noopener" className="link link-underline link-underline-black rounded-md py-1 px-5 text-xl text-white">Yu-Gi-Oh! TCG Prices</Link>
        <Link href="/SportsPage" title="Check sports cards prices" rel="noopener" className="link link-underline link-underline-black rounded-md py-1 px-5 text-xl text-white">Sports Card Prices</Link>
      </nav>
      <button className="sm:hidden block absolute top-2 right-2 p-2 rounded-full bg-white text-indigo-600 z-50" onClick={MenuToggle}>
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" id="menu-icon">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="hidden active:visible h-6 w-6 fill-current" viewBox="0 0 24 24" id="close-icon">
          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </button>
        </header>
    </>
  );
}
