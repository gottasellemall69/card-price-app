// components/CardTable.js
import React from 'react';

const CardTable=({ matchedCards,userCardList }) => {
  return (
    <div className="mt-4">
      {matchedCards.length>0? (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-gray-800 p-2"></th>
              <th className="border border-gray-800 p-2">Name</th>
              <th className="border border-gray-800 p-2">Desc</th>
              <th className="border border-gray-800 p-2">Number</th>
              <th className="border border-gray-800 p-2">Set</th>
              <th className="border border-gray-800 p-2">Rarity</th>
              <th className="border border-gray-800 p-2">Edition</th>
              <th className="border border-gray-800 p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {matchedCards.map((card,index) => {
              const userCard=userCardList.find((entry) =>
                entry.toLowerCase().includes(card.name.toLowerCase())
              );

              const relevantSet=
                userCard&&
                card.card_sets.find(
                  (set) =>
                    userCard.toLowerCase().includes(set.set_code.toLowerCase())||
                    userCard.toLowerCase().includes(set.set_name.toLowerCase())
                );

              return (
                <tr key={index}>
                  <td>
                    <img
                      src={card.card_images[0]['image_url']}
                      alt={`Card Image - ${card.name}`}
                      className="w-full h-full mx-auto place-content-center object-scale-down object-center"
                    />
                  </td>
                  <td className="border border-gray-800 p-2">{card.name}</td>
                  <td className="border border-gray-800 p-2">{card.desc}</td>
                  <td className="border border-gray-800 p-2">
                    {relevantSet&&relevantSet.set_code}
                  </td>
                  <td className="border border-gray-800 p-2">
                    {relevantSet&&relevantSet.set_name}
                  </td>
                  <td className="border border-gray-800 p-2">
                    {relevantSet&&relevantSet.set_rarity}
                  </td>
                  <td className="border border-gray-800 p-2">
                    {relevantSet&&relevantSet.set_edition}
                  </td>
                  <td className="border border-gray-800 p-2">
                    Set Price: {relevantSet&&relevantSet.set_price}
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
  );
};

export default CardTable;
