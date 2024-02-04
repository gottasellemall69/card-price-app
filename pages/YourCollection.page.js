'use client';
import React,{useState} from 'react';
import Link from 'next/link';
import NavBar from "@/components/Navigation/NavBar";
import useYourCollectionLogic from "@/utils/lib/YourCollectionLogic";

const YourCollection=() => {
  const [selectedItems,setSelectedItems]=useState([]);
  const [cardList,setCardList]=useState("");

  const handleCardListChange=(event) => {
    setCardList(event.target.value);
  };

  const handleSubmit=(event) => {
    event.preventDefault();
    useYourCollectionLogic(cardList.split(","));
  };

  const handleCheckboxChange=(event,item) => {
    if(event.target.checked) {
      setSelectedItems((prevItems) => [...prevItems,item]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((selectedItem) => selectedItem!==item));
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-5 divide-y-8 divide-transparent">
        <div>
          <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link href="/" passHref className="text-sm font-medium text-white text-shadow background-filter hover:text-white text-shadow background-filter" id="home-link">Home</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="h-5 w-5 flex-shrink-0 text-white text-shadow background-filter" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                  <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-white text-shadow background-filter hover:text-white text-shadow background-filter" id="collection-link">Your Collection</a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-white text-shadow background-filter sm:truncate sm:text-3xl sm:tracking-tight">Your Collection</h2>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <label>
              Enter card names, separated by commas:
              <textarea value={cardList} onChange={handleCardListChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white text-shadow background-filter sm:pl-0">Quantity</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white text-shadow background-filter">Card Details</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white text-shadow background-filter">Condition/Grade</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white text-shadow background-filter">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white text-shadow background-filter sm:pl-0">2</td>
                      <td className="whitespace-wrap px-3 py-4 text-sm text-white text-shadow background-filter w-fit">NameNameNameName<br />Number<br />Set<br />Edition<br />Rarity</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">PSA 10</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">$10,000</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white text-shadow background-filter sm:pl-0">2</td>
                      <td className="whitespace-wrap px-3 py-4 text-sm text-white text-shadow background-filter w-fit">NameNameNameName<br />Number<br />Set<br />Edition<br />Rarity</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">PSA 10</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">$10,000</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white text-shadow background-filter sm:pl-0">2</td>
                      <td className="whitespace-wrap px-3 py-4 text-sm text-white text-shadow background-filter w-fit">NameNameNameName<br />Number<br />Set<br />Edition<br />Rarity</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">PSA 10</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">$10,000</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white text-shadow background-filter sm:pl-0">2</td>
                      <td className="whitespace-wrap px-3 py-4 text-sm text-white text-shadow background-filter w-fit">NameNameNameName<br />Number<br />Set<br />Edition<br />Rarity</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">PSA 10</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white text-shadow background-filter">$10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCollection;
