// @/components/Yugioh/CardTable.js
import {useCallback} from 'react';
import Image from 'next/image';

const CardTable=({matchedCards,userCardList}) => {
  const getLocalImagePath=useCallback((cardId) => {
    const idString=String(cardId);
    return `/yugiohImages/${idString}.jpg`;
  },[]);
  const currentPage=1; // Set the current page value as needed
  const itemsPerPage=50;
  const startIndex=(currentPage-1)*itemsPerPage;
  const cardsToRender=matchedCards.slice(startIndex,startIndex+itemsPerPage);
  return (
    <>
      <div className="mt-4" style={{maxHeight: '750px',overflowY: 'auto'}}>
        {cardsToRender.length>0? (
          <table className="border-collapse max-w-full w-fit mx-auto">
            <thead>
              <tr>
                <th
                  scope="col"
                  aria-hidden="true"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit font-semibold text-white backdrop text-shadow xl:table-cell"></th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg font-semibold text-white backdrop text-shadow">Name</th>
                <th
                  scope="col"
                  aria-hidden="true"
                  className="sticky top-0 z-10 max-w-sm whitespace-pre hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg font-semibold text-white backdrop text-shadow xl:table-cell">Desc</th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg backdrop text-shadow">Number</th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg font-semibold text-white backdrop text-shadow">Set</th>
                <th
                  scope="col"
                  aria-hidden="true"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg backdrop text-shadow sm:table-cell">Rarity</th>
                <th
                  scope="col"
                  aria-hidden="true"
                  className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg font-semibold text-white backdrop text-shadow sm:table-cell">Edition</th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-lg backdrop text-shadow whitespace-pre-wrap">Set Price</th>
              </tr>
            </thead>
            <tbody>
              {cardsToRender.map((card,index) => {
                const userCard=userCardList.find((entry) =>
                  entry.toLowerCase().includes(card.name.toLowerCase())
                );
                const relevantSet=userCard&&card.card_sets?.find((set) =>
                  userCard.toLowerCase().includes(set.set_name?.toLowerCase())&&
                  userCard.toLowerCase().includes(set.set_code?.toLowerCase())&&
                  userCard.toLowerCase().includes(set.set_edition?.toLowerCase())
                );
                return (
                  <tr key={index}>
                    <td className="hidden xl:table-cell">
                      <Image
                        unoptimized
                        src={getLocalImagePath(card.id)}
                        alt={`Card Image - ${card.name}`}
                        loading="lazy"
                        width={200}
                        height={150}
                        className="w-full h-full max-w-96 mx-auto object-center place-self-center object-cover sm:object-scale-down"
                      />
                    </td>
                    <td className="border border-gray-800 p-2 whitespace-pre-wrap text-sm font-medium text-white">{card?.name}</td>
                    <td aria-hidden="true" className="border border-gray-800 p-2 whitespace-pre-wrap hidden text-sm text-white xl:table-cell">{card?.desc}</td>
                    <td className="border border-gray-800 p-2 whitespace-nowrap text-sm font-medium text-white">{relevantSet?.set_code}</td>
                    <td className="border border-gray-800 p-2 whitespace-pre-wrap text-sm font-medium text-white">{relevantSet?.set_name}</td>
                    <td aria-hidden="true" className="border border-gray-800 p-2 whitespace- hidden text-sm text-white sm:table-cell">{relevantSet?.set_rarity}</td>
                    <td aria-hidden="true" className="border border-gray-800 p-2 whitespace-pre-wrap hidden text-sm text-white sm:table-cell">{relevantSet?.set_edition}</td>
                    <td className="border flex-col border-gray-800 p-2 text-sm font-medium text-white">
                      {card?.card_prices?.[0]?.ebay_price}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ):(
          <p>No matched cards found.</p>
        )}
      </div>
    </>
  );
};
export default CardTable;