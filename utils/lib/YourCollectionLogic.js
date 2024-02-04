import React,{useState} from 'react';

const useYourCollectionLogic=(cardList) => {
  const [filteredItems,setFilteredItems]=useState([...selectedItems,...cardList]);

  const handleSearch=(searchTerm) => {
    const filtered=selectedItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleFilter=(filterType,filterValue) => {
    const filtered=selectedItems.filter((item) =>
      item[filterType]===filterValue
    );
    setFilteredItems(filtered);
  };

  const handleSort=(sortType) => {
    const sorted=[...filteredItems].sort((a,b) => {
      if(a[sortType]<b[sortType]) return -1;
      if(a[sortType]>b[sortType]) return 1;
      return 0;
    });
    setFilteredItems(sorted);
  };

  return {
    filteredItems,
    handleSearch,
    handleFilter,
    handleSort,
  };
};

export default useYourCollectionLogic;
