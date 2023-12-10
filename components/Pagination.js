// @/components/Pagination.js

const Pagination=({ currentPage,pageSize,totalItems,onPageChange }) => {
  const totalPages=Math.ceil(totalItems/pageSize);

  const handlePageClick=(page) => {
    if(page>=1&&page<=totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div>
      <button onClick={() => handlePageClick(currentPage-1)} disabled={currentPage===1}>
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={() => handlePageClick(currentPage+1)} disabled={currentPage===totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
