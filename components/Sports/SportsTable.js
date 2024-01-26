'use client';
import React,{useState,useEffect,useMemo} from 'react';
import CardSetButtons from '@/components/Sports/CardSetButtons';
import SportsCSVButton from "@/components/Sports/SportsCSVButton";

const SportsTable=() => {
  const [sportsData,setSportsData]=useState(null);
  const [selectedCardSet,setSelectedCardSet]=useState('');
  useEffect(() => {
    fetchData();
  },[selectedCardSet]);

  const fetchData=async () => {
    try {
      const response=await fetchSportsData(selectedCardSet);
      setSportsData(response);
    } catch(error) {
      console.error(error);
    }
  };

  const fetchSportsData=async (cardSet) => {
    const urls=getSportsUrls(cardSet);
    const responses=await Promise.all(urls.map((url) => fetch(url)));
    const data=await Promise.all(responses.map((response) => response.json()));
    return data;
  };
  // Function to get the list of sports URLs based on the card set
  const getSportsUrls=(cardSet) => {
    const cursor=0;
    // Modify this function to return the appropriate URLs based on the selected card set
    // Example: For '1990 Hoops', return URLs for 1990 Hoops cards
    // You can use a switch statement or an object mapping
    // Add more cases as needed for additional card sets
    switch(cardSet) {
      case '1975 Topps':
        return [
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`
        ];
      case '1989 NBA Hoops':
        return [
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`
        ];
      case '1990 NBA Hoops':
        return [
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`
        ];
      case '1990 Skybox':
        return [
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`
        ];
      case '1990 Fleer':
        return [
          `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        ];
      case '1991 Fleer':
        return [
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
          `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
        ];
      case '1990 Pro Set':
        return [
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+500}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+550}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+600}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+650}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+700}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+750}&format=json`
        ];
      case '1991 Pro Set':
        return [
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+500}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+550}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+600}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+650}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+700}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+750}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+800}&format=json`
        ];
      case '1991 Proline Portraits':
        return [
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&$cursor${cursor+100}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`
        ];
      case '1991 Wild Card College Draft Picks':
        return [
          `https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`
        ];
      case '1991 Wild Card':
        return [
          `https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
          `https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`
        ];
      default:
        return [];
    }
  };
  const memoizedCardSets=useMemo(() => {
    '1975 Topps',
      '1989 NBA Hoops',
      '1990 NBA Hoops',
      '1990 Skybox',
      '1990 Fleer',
      '1991 Fleer',
      '1990 Pro Set',
      '1991 Pro Set',
      '1991 Proline Portraits',
      '1991 Wild Card',
      '1991 Wild Card College Draft Picks';
  },[]);

  return (
    <div className="mx-auto w-full mb-10 overflow-x-hidden max-h-fit " >
      <div className='flex flex-row w-full text-nowrap place-items-baseline'>
        <CardSetButtons
          cardSets={memoizedCardSets}
          onSelectCardSet={setSelectedCardSet} />
        <SportsCSVButton
          sportsData={sportsData} />
      </div>
      <table className="mb-10 mx-auto container w-11/12" >

        <thead>
          <tr>
            <th scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">
              Product Name
            </th>
            <th scope="col"
              className="sticky top-0 z-10 hidden border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter md:table-cell">
              Set
            </th>
            <th scope="col"
              className="sticky top-0 z-10  hidden border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter sm:table-cell">
              Ungraded
            </th>
            <th scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg font-black text-white whitespace-nowrap backdrop-blur backdrop-filter">
              PSA 9
            </th>
            <th scope="col"
              className="sticky top-0 z-10 border-b border-gray-300 bg-transparent bg-opacity-75 outline-1 outline-black p-1 text-center sm:text-left text-lg text-white whitespace-nowrap font-black backdrop-blur backdrop-filter table-cell">
              PSA 10
            </th>
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
          </tbody>}
      </table>
    </div>
  );
};
export default SportsTable;
