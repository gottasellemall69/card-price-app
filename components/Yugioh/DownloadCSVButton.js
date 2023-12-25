import React,{useState} from 'react';

const objectToCsv=function( {matchedCards} ) {
  const csvRows=[];
  const headers=Object.keys( {matchedCards});
  csvRows.push( headers.join( ',' ) );

  for( const row of headers ) {
    const values=headers.map( ( header ) => {
      const val=row[header];
      return `"${ val }"`;
    } );
    csvRows.push( values.join( ',' ) );
  };

  return csvRows.join( '\n' );
};

const DownloadCSVButton=( {matchedCards} ) => {
  const downloadCSV=async () => {
    const csvData=objectToCsv(
      matchedCards.map( ( card ) => ( {
        name: card.name,
        desc: card.desc,
        set_code: card?.set_code,
        set_name: card?.set_name,
        set_rarity: card?.set_rarity,
        set_edition: card?.set_edition,
        set_price: card?.set_price
      }  ) )
    );

    const csvContent=`${ csvData }`;

    const element=document.createElement( 'a' );
    const file=new Blob( [csvContent],{type: 'text/csv'} );
    element.href=URL.createObjectURL( file );
    element.download='cards_data.csv';
    document.body.appendChild( element );
    element.click();
    document.body.removeChild( element );
  };

  return (
    <button
      className="relative float-right bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
      onClick={downloadCSV}
    >
      Download CSV
    </button>
  );
};

export default DownloadCSVButton;