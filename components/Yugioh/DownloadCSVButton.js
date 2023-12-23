import React from 'react';

const DownloadCSVButton=( {data} ) => {
  const downloadCSV=() => {
    const csvHeader="Name,Description,Number,Set,Rarity,Edition,Set Price";
    const csvData=data.map( ( card ) => {
      const {name,desc,number,set,rarity,edition,setPrice}=card.card_sets;
      return `${ name },${ desc },${ number },${ set },${ rarity },${ edition },${ setPrice }`;
    } ).join( '\n' );

    const csvContent=`${ csvHeader }\n${ csvData }`;

    const blob=new Blob( [csvContent],{type: 'text/csv'} );
    const link=document.createElement( 'a' );
    link.href=URL.createObjectURL( blob );
    link.download='card_data.csv';
    link.click();
  };;

  return (
    <button
      className="relative float-right bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
      onClick={downloadCSV}>
      Download CSV
    </button>
  );
};;

export default DownloadCSVButton;