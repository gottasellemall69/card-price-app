'use client';
import React,{useEffect,useState,useMemo} from 'react';
import CardSetButtons from './CardSetButtons';
import SportsCSVButton from './SportsCSVButton';
import SportsPagination from './SportsPagination';

const SportsTable=() => {
  const [sportsData,setSportsData]=useState([]);
  const [selectedCardSet,setSelectedCardSet]=useState(null);
  const [currentPage,setCurrentPage]=useState(1);
  const pageSize=1;

  const calculateTotalPages=(totalData,pageSize) => {
    return Math.ceil(totalData/pageSize);
  };

  const fetchSportsData=async (selectedCardSet,currentPage) => {
    try {
      const response=await fetch(
        `/api/Sports/sportsData?cardSet=${selectedCardSet}&page=${currentPage}`
      );
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

  useEffect(() => {
    if(selectedCardSet) {
      fetchSportsData(selectedCardSet,currentPage);
    }
  },[selectedCardSet,currentPage]);

  const memoizedCardSets=useMemo(
    () => [
      '1975 NBA Topps',
      '1989 NBA Hoops',
      '1990 NBA Hoops',
      '1990 NBA Skybox',
      '1990 NBA Fleer',
      '1991 NBA Fleer',
      '1990 NFL Pro Set',
      '1991 NFL Pro Set',
      '1991 NFL Proline Portraits',
      '1991 NFL Wild Card',
      '1991 NFL Wild Card College Draft Picks',
      '1989 MLB Topps',
      '1989 MLB Donruss',
      '1991 MLB Fleer',
    ],
    []
  );

  const totalData=sportsData.length;
  const totalPages=calculateTotalPages(totalData,pageSize);
  const startIndex=(currentPage-1)*pageSize;
  const cardsToRender=sportsData?.slice(startIndex,startIndex+pageSize);

  const onPageChange=(page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <div
        className="p-2 overflow-x-hidden text-nowrap space-y-5 sm:space-y-0 space-x-0 sm:space-x-10 flex flex-col sm:flex-row"
        style={{maxHeight: '500px',overflowY: 'auto'}}
      >
        <div className="justify-start w-fit my-2 relative align-baseline float-left text-black font-black">
          <CardSetButtons cardSets={memoizedCardSets} onSelectCardSet={setSelectedCardSet} />
        </div>
        <div className="justify-center w-fit my-2 relative align-bottom float-right">
          <SportsCSVButton sportsData={sportsData} />
        </div>
      </div>

      <table className="mx-auto table container mb-10 overflow-x-hidden">
        <thead>
          <tr>
            <th
              scope="col"
              className="sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white backdrop-blur backdrop-filter whitespace-nowrap"
            >
              Product Name
            </th>
            <th
              scope="col"
              className="hidden sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white backdrop-blur backdrop-filter whitespace-nowrap md:table-cell"
            >
              Set
            </th>
            <th
              scope="col"
              className="hidden sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white backdrop-blur backdrop-filter whitespace-nowrap sm:table-cell"
            >
              Ungraded
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white backdrop-blur backdrop-filter whitespace-nowrap table-cell"
            >
              PSA 9
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 p-2 border-b border-gray-300 bg-stone-500 bg-opacity-20 outline-1 outline-black text-center text-shadow text-lg font-black text-white backdrop-blur backdrop-filter whitespace-nowrap table-cell"
            >
              PSA 10
            </th>

          </tr>
        </thead>
        <tbody className="mx-auto overflow-x-hidden">
          {cardsToRender?.map((item,index) =>
            item.products.map((product,productIndex) => (
              <tr key={`${index}-${productIndex}`}>
                <td
                  scope="row"
                  className="border border-gray-800 p-2 whitespace-wrap text-center sm:text-left text-sm font-medium text-white"
                >
                  {product['productName']}
                </td>
                <td
                  scope="row"
                  className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white md:table-cell"
                >
                  {product['consoleUri']}
                </td>
                <td
                  scope="row"
                  className="border border-gray-800 p-2 whitespace-nowrap hidden text-center sm:text-left text-sm text-white sm:table-cell"
                >
                  {product['price1']}
                </td>
                <td
                  scope="row"
                  className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm text-white"
                >
                  {product['price3']}
                </td>
                <td
                  scope="row"
                  className="border border-gray-800 p-2 whitespace-nowrap text-center sm:text-left text-sm font-medium table-cell"
                >
                  {product['price2']}
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mx-auto container w-fit sm:space-y-2">
        <SportsPagination
          pageSize={pageSize}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          calculateTotalPages={calculateTotalPages}
        />
      </div>

    </>
  );
};

export async function getStaticProps(selectedCardSet,page) {
  const response=await fetch(
    `/api/Sports/sportsData?cardSet=${selectedCardSet}&page=${page}`
  );
  const initialData=await response.json();
  return {
    props: {
      initialData,
    },
  };
}

export default SportsTable;