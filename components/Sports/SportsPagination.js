// @/components/Sports/SportsPagination.js
import React from 'react';

const SportsPagination=({totalPages,currentPage,onPageChange}) => {
  const pageNumbers=Array.from({length: totalPages},(_,index) => index+1);

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={pageNumber===currentPage}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default SportsPagination;