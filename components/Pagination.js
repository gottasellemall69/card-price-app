// @/components/Pagination.js<br/><br/>

const Pagination=( {currentPage,itemsPerPage,totalItems,handlePageClick} ) => {
  const totalPages=Math.ceil( totalItems/itemsPerPage );

  return (
    <div className="my-2 mx-auto w-full flex items-center justify-between border-t border-gray-200 bg-transparent backdrop filter px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button onClick={() => handlePageClick( currentPage-1 )} disabled={currentPage===1}>
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:bg-gray-50"
          >
            Previous
          </a>
        </button>
        <button onClick={() => handlePageClick( currentPage+1 )} disabled={currentPage===totalPages}>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-transparent backdrop filter px-4 py-2 text-sm font-medium text-white text-shadow hover:bg-gray-50"
          >
            Next
          </a>
        </button>
      </div>
      <div className="mx-auto w-full hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white text-shadow">
            {`Page ${ currentPage } of ${ totalPages }`}
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button onClick={() => handlePageClick( currentPage-1 )} disabled={currentPage===1}>
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </a>
            </button>
            {/* Render the individual pages and their buttons */}
            {[...Array( totalPages )].map( ( _,index ) => (
              <a
                href="#"
                key={index}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white text-shadow ring
                hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
              >
                {index+1}
              </a>
            ) )}
            {/* Render the remaining pages */}
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white text-shadow ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>

            <button onClick={() => handlePageClick( currentPage+1 )} disabled={currentPage===totalPages}>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </button>

          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;