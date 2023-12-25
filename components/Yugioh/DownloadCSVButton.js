const DownloadCSVButton = ({ matchedCards,userCardList }) => {
  const downloadCSV = () => {
    const csvHeader = "Name,Desc,Number,Set,Rarity,Edition,Set Price";
    const csvData = matchedCards.map((card) => {
      const cardName = card?.name || '';
      const cardDesc = card?.desc || '';
      const userCard = userCardList.find((entry) =>
        entry.toLowerCase().includes(cardName.toLowerCase())
      );

      const relevantSet = userCard && card.card_sets?.find((set) =>
        userCard.toLowerCase().includes(set.set_name?.toLowerCase()) &&
        userCard.toLowerCase().includes(set.set_code?.toLowerCase()) &&
        userCard.toLowerCase().includes(set.set_edition?.toLowerCase())
      );

      return `${cardName},${cardDesc},${relevantSet?.set_code || ''},${relevantSet?.set_name || ''},${relevantSet?.set_rarity || ''},${relevantSet?.set_edition || ''},${relevantSet?.set_price ? relevantSet?.set_price.toLocaleString() : ''}`;
    }).join("\n");

    const csvContent = `${csvHeader}\n${csvData}`;

    const element = document.createElement('a');
    const file = new Blob([csvContent], { type: 'text/csv' });
    element.href = URL.createObjectURL(file);
    element.download = 'card_data.csv';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
