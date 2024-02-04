'use client';
import React from 'react';

const SportsPagination=({currentPage,totalPages,onPageChange}) => {
  const handlePageChange=(page) => {
    onPageChange(page); // Call the onPageChange callback to update the current page in the parent component
  };

  return (
    <nav aria-label="Pagination Navigation">
      <ul className="my-2 mx-auto w-full flex items-center justify-between border-t border-gray-200 bg-transparent backdrop-filter px-4 py-3 sm:px-6">
        <li>
          <button onClick={() => handlePageChange(currentPage-1)} disabled={currentPage===1}>
            <div className="relative inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop-filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white">
              Previous
            </div>
          </button>
        </li>
        <div className="mx-auto w-fit gap-2 flex flex-row items-center sm:space-y-2 sm:justify-center hidden sm:block">
          {Array.from({length: totalPages},(_,i) => i+1).map((page) => (
            <li
              className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop-filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white ${currentPage===page? 'bg-white text-black':''
                }`}
              key={page}
            >
              <button onClick={() => handlePageChange(page)}>{page}</button>
            </li>
          ))}
        </div>
        <li>
          <button onClick={() => handlePageChange(currentPage+1)} disabled={currentPage===totalPages}>
            <div className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop-filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white">
              Next
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SportsPagination;