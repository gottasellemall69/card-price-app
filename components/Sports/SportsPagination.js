// @/components/Sports/SportsPagination.js
import React,{useState,useEffect} from 'react';

const SportsPagination=({sportsData,itemsPerPage,onPageChange}) => {
  const [currentPage,setCurrentPage]=useState(1);
  const totalItems=sportsData&&sportsData.length>=0;
  const totalPages=Math.ceil(totalItems/itemsPerPage);
  const handlePageChange=(page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  useEffect(() => {
    // Ensure current page is within bounds after data changes
    if(currentPage>totalPages) {
      setCurrentPage(totalPages);
      onPageChange(totalPages);
    }
  },[sportsData]);

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage-1)}
        disabled={currentPage===1}
        className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 rounded cursor-pointer text-black hover:bg-black hover:text-white">
        Previous
      </button>
      <span className="mx-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage+1)}
        disabled={currentPage===totalPages}
        className="bg-white border border-zinc-500 font-bold px-2 py-1 m-1 rounded cursor-pointer text-black hover:bg-black hover:text-white">
        Next
      </button>
    </div>
  );
};

export default SportsPagination;
