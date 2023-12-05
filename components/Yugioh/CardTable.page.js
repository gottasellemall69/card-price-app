import React from 'react';

const CardTable=({ matchedCards,userCardList }) => {
  return (
    <div className="mt-4">
      {matchedCards.length>0? (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter lg:table-cell"></th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter lg:table-cell">Desc</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">Number</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter">Set</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8 sm:table-cell">Rarity</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-white backdrop-blur backdrop-filter sm:table-cell">Edition</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">Set Price</th>
            </tr>
          </thead>
          <tbody>
            {matchedCards.map((card,index) => {
              const userCard=userCardList.find((entry) =>
                entry.toLowerCase().includes(card.name.toLowerCase())
              );

              const relevantSet=userCard
                &&
                card.card_sets?.find(
                  (set) =>
                    userCard.toLowerCase().includes(set.set_name?.toLowerCase())||
                    userCard.toLowerCase().includes(set.set_code?.toLowerCase())
                );

              return (
                <tr key={index}>
                  <td className="border border-gray-800 whitespace-pre-wrap hidden text-sm text-white lg:table-cell">
                    <img
                      src={card.card_images[0]['image_url']}
                      alt={`Card Image - ${card.name}`}
                      className="w-full h-full max-h-96 max-w-96 mx-auto place-content-center object-center object-scale-down sm:object-fill overflow-clip"
                    />
                  </td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6 lg:pl-8">{card?.name}</td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap hidden px-3 py-4 text-sm text-white lg:table-cell">{card?.desc}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6 lg:pl-8">{relevantSet?.set_code}</td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6 lg:pl-8">{relevantSet?.set_name}</td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap hidden px-3 py-4 text-sm text-white sm:table-cell">{relevantSet?.set_rarity}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap hidden px-3 py-4 text-sm text-white sm:table-cell">{relevantSet?.set_edition}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6 lg:pl-8">{relevantSet?.set_price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ):(
        <p>No matched cards found.</p>
      )}
    </div>
  );
};

export default CardTable;