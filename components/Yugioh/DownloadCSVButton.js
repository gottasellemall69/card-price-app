// @/components/DownloadCSVButton.js
import React from 'react';

const DownloadCSVButton=( {data} ) => {
  const downloadCSV=() => {
    // Implement the logic to convert data to CSV and initiate download
    const csvHeader="Name,Description,Number,Set,Rarity,Edition,Set Price";
    const csvData=data.map( card => {
      const {name,desc,card_sets}=card;

      // Handle undefined or missing properties
      const number=card_sets?.[0]?.set_code||"N/A";
      const set=card_sets?.[0]?.set_name||"N/A";
      const rarity=card_sets?.[0]?.set_rarity||"N/A";
      const edition=card_sets?.[0]?.set_edition||"N/A";
      const setPrice=card_sets?.[0]?.set_price||"N/A";

      return `${ name },${ desc },${ number },${ set },${ rarity },${ edition },${ setPrice }`;
    } ).join( '\n' );

    const blob=new Blob( [`${ csvHeader }\n${ csvData }`],{type: 'text/csv'} );
    const link=document.createElement( 'a' );
    link.href=window.URL.createObjectURL( blob );
    link.download='card_data.csv';
    link.click();
  };

  return (
    <button
      className="float-right bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
      onClick={downloadCSV}
    >
      Download CSV
    </button>
  );
};

export default DownloadCSVButton;
