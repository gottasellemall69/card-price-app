'use client';
// @/components/Yugioh/YugiohPagination.js
/**
 * Renders a pagination component for a Yugioh card list.
 * 
 * @param {Object} props - The props object containing the pagination data.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.itemsPerPage - The number of items to display per page.
 * @param {number} props.totalItems - The total number of items.
 * @param {function} props.handlePageClick - The function to handle page click events.
 * @returns {JSX.Element} The pagination component.
 */
function YugiohPagination({currentPage,itemsPerPage,totalItems,handlePageClick}) {
  const pageCount=Math.ceil(totalItems/itemsPerPage);

<<<<<<< HEAD:components/Yugioh/YugiohPagination.js
  return (
    <nav aria-label="Pagination Navigation">
      <ul className="my-2 mx-auto w-full flex items-center justify-between border-t border-gray-200 bg-transparent backdrop filter px-4 py-3 sm:px-6">
        {pageCount>1&&(
          <li>
            <button onClick={() => handlePageClick(currentPage-1)} disabled={currentPage===1}>
              <div className="relative inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white">
                Previous
              </div>
            </button>
          </li>
        )}
        <div className="mx-auto w-fit gap-2 flex flex-row items-center sm:justify-center">
          {Array.from({length: pageCount},(_,i) => i+1).map((pageNumber) => (
            <li className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white" key={pageNumber} style={{backgroundColor: currentPage===pageNumber? 'white':'',color: currentPage===pageNumber? 'black':''}}>
              <button onClick={() => handlePageClick(pageNumber)}>{pageNumber}</button>
            </li>
          ))}
=======
const Pagination=({currentPage,itemsPerPage,totalItems,handlePageClick}) => {
  const totalPages=Math.ceil(totalItems/itemsPerPage);
  return (
    <div className="my-2 mx-auto w-full flex items-center justify-between border-t border-gray-200 bg-transparent backdrop filter px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button onClick={() => handlePageClick(currentPage-1)} disabled={currentPage===1}>
          <div

            className="relative inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white">
            Previous
          </div>
        </button>
        <div className="mx-auto w-full hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-white text-shadow">
              {`Page ${currentPage} of ${totalPages}`}
            </p>
          </div>
        </div>
        <button onClick={() => handlePageClick(currentPage+1)} disabled={currentPage===totalPages}>
          <div

            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white">
            Next
          </div>
        </button>
      </div>
      <div className="mx-auto w-full hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white text-shadow">
            {`Page ${currentPage} of ${totalPages}`}
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button onClick={() => handlePageClick(currentPage-1)} disabled={currentPage===1}>
              <div

                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:text-black hover:bg-white focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </div>
            </button>
            {/* Render the individual pages and their buttons */}
            <button onClick={() => [...Array(totalPages)].map((_,index) => (
              <div key={index}
                {...currentPage}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white text-shadow ring
                hover:text-black hover:bg-white focus:z-20 focus:outline-offset-0`} />
            ))} />
            <button onClick={() => handlePageClick(currentPage+1)} disabled={currentPage===totalPages}>
              <div
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:text-black hover:bg-white focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>
          </nav>
>>>>>>> parent of 451ef90 (hh):components/Pagination.js
        </div>
        {pageCount>1&&(
          <li>
            <button onClick={() => handlePageClick(currentPage+1)} disabled={currentPage===pageCount}>
              <div className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:text-black hover:bg-white">
                Next
              </div>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;