// @/components/Yugioh/YugiohCSVButton.js
const YugiohCSVButton=({matchedCards,userCardList}) => {
  const downloadCSV=() => {
    const csvData=matchedCards.map((card) => {
      const cardName=card?.name||"";
      const cardDesc=card?.desc||"";
      const escapedDesc=cardDesc.replace(/"/g,'""');
      const quotedDesc=`"${escapedDesc}"`;
      const userCard=userCardList.find((entry) =>
        entry.toLowerCase().includes(cardName.toLowerCase())
      );
      const ebayPrice=userCard&&card?.card_prices?.[0]?.ebay_price;
      const relevantSet=userCard&&card.card_sets?.find((set) =>
        userCard.toLowerCase().includes(set.set_name?.toLowerCase())&&
        userCard.toLowerCase().includes(set.set_code?.toLowerCase())&&
        userCard.toLowerCase().includes(set.set_edition?.toLowerCase())
      );
      const setCode=relevantSet?.set_code||"";
      const setName=relevantSet?.set_name||"";
      const setRarity=relevantSet?.set_rarity||"";
      const setEdition=relevantSet?.set_edition||"";
      return `"${cardName}",${quotedDesc},${setCode},${setName},${setRarity},${setEdition},${ebayPrice}`;
    }).join("\n");

    const csvHeader="Name,Desc,Set Code,Set Name,Rarity,Edition,Set Price";
    const csvContent=`${csvHeader}\n${csvData}`;
    const element=document.createElement('a');
    const file=new Blob([csvContent],{type: 'text/csv'});
    element.href=URL.createObjectURL(file);
    element.download='card_data.csv';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <button
      name="YugiohCSVButton"
      className="relative float-right bg-white text-black font-bold m-1 px-2 py-1 rounded border border-zinc-400 hover:bg-black hover:text-white"
      onClick={downloadCSV}>
      Download CSV
    </button>
  );
};
export default YugiohCSVButton;