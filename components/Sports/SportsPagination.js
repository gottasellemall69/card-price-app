// @/components/Sports/SportsPagination.js

import React,{useState,useEffect,useCallback} from 'react';

const SportsPagination=() => {
  const [currentPage,setCurrentPage]=useState(1);
  const [sportsData,setSportsData]=useState([]);
  const [cardSet,setSelectedCardSet]=useState();
  const [cursor,setCursor]=useState(0);

  const fetchDataCallback=useCallback(async function(getSportsUrls) {
    try {
      const response=await fetch(`/api/[sportsData]?cardSet=${cardSet}&cursor=${cursor}`);
      if(response.ok) {
        const data=await response.json();
        setSportsData(data);
      } else {
        console.error('Failed to fetch data for page',page);
      }
    } catch(error) {
      console.error('Error fetching data for page',':',error);
    }
  },[sportsData,cursor]);

  const handlePageChange=(page) => {
    setCurrentPage(page);
    setCursor(page*50);
  };

  useEffect(() => {
    fetchDataCallback(currentPage);
  },[cursor]);


  return (
    <div>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage-1)}
          disabled={currentPage===1}
          className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 rounded cursor-pointer text-black hover:bg-black hover:text-white"
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage+1)}
          disabled={currentPage===cardSet?.length}
          className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 rounded cursor-pointer text-black hover:bg-black hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default SportsPagination;