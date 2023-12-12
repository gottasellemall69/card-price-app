// @/components/Sports/SportsTable.page.js
import dynamic from 'next/dynamic';
import React, { Suspense, useEffect,useState } from 'react';
const SportsTableComponent=dynamic(() => import('./SportsTableComponent'),{ ssr: true });
import CardSetButtons from './CardSetButtons';

function SportsTable() {
  const [sportsData,setSportsData]=useState(null);
  const [selectedCardSet,setSelectedCardSet]=useState('');

  useEffect(() => {
    const fetchData=async () => {
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
    };

    fetchData();
  },[selectedCardSet]);

  const parseDataFromUrls=async (urls) => {
    try {
      const parsedData={};

      for(const url of urls) {
        const response=await fetch(url);
        if(response.ok) {
          const jsonData=await response.json();

          if(jsonData&&jsonData.products) {
            const products=jsonData.products;

            for(const product of products) {
              const productName=product?.productName;
              const set=product?.consoleUri;
              const ungradedPrice=product?.price1;
              const psa9Price=product?.price2;
              const psa10Price=product?.price3;

              parsedData[productName]={
                set: set,
                ungraded: ungradedPrice,
                'PSA 9': psa9Price,
                'PSA 10': psa10Price,
                category: jsonData.category, // Add category information
              };
            }
          } else {
            console.error(`JSON data structure is not as expected for URL: ${url}`);
          }
        } else {
          console.error(`Failed to retrieve data from the URL: ${url}`);
        }
      }

      return parsedData;
    } catch(error) {
      console.error(`Error fetching or parsing data: ${error}`);
      throw error;
    }
  };

  const displayParsedData=(parsedData) => {
    return <SportsTableComponent data={parsedData} />;
  };


  
  return (
    <div>
      <Suspense>
    <span>
    <CardSetButtons
      cardSets={['1975 Topps','1989 NBA Hoops','1990 NBA Hoops','1990 Skybox']} // Add more card sets as needed
      onSelectCardSet={setSelectedCardSet}
      />
        </span>
      </Suspense>
      <Suspense fallback={<p>Loading card data...</p>}>
    <div>
      <div id="table-container" className="inline-block min-w-full py-1 align-middle">
        {sportsData&&displayParsedData(sportsData)}
      </div>
        </div>
      </Suspense>
    </div>
  );
}

export default SportsTable;
