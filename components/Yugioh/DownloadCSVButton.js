const DownloadCSVButton=( {matchedCards} ) => {
  const downloadCSV=() => {
    const csvHeader="Name, Description, Number, Set, Rarity, Edition, Set Price";
    const csvData=matchedCards.map( ( card ) => {
      return `${ card.name }, ${ card.desc }, ${ card.card_sets.set_code }, ${ card.card_sets.set_name }, ${ card.card_sets.set_rarity }, ${ card.card_sets.set_edition }, ${ card.card_sets.set_price }`;
    } ).join( "\n" );

    const csvContent=`${ csvHeader }\n${ csvData }`;

    const element=document.createElement( 'a' );
    const file=new Blob( [csvContent],{type: 'text/csv'} );
    element.href=URL.createObjectURL( file );
    element.download='cards.csv';
    document.body.appendChild( element );
    element.click();
    document.body.removeChild( element );
  };

  return (
    <button
      className="relative float-right bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
      onClick={downloadCSV}>Download CSV</button>
  );
};

export default DownloadCSVButton;