// components/CardTable.js
import React from 'react';

const CardTable=({ matchedCards }) => {
  return (
    <div className="mt-4">
      {matchedCards.length>0? (
        <table className="border-collapse w-full break-words mx-auto">
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
            {matchedCards.map((card,index) => (
              <tr key={index}>
                <td>
                  <img
                    src={card.card_images[0].image_url}
                    alt={`Card Image - ${card.name}`}
                    className="w-full h-full mx-auto place-content-center object-contain"
                  />
                </td>
                <td className="border border-gray-800 p-2">{card.name}</td>
                <td className="border border-gray-800 p-2">{card.desc}</td>
                <td className="border border-gray-800 p-2">{card.card_sets?.[0].set_code}</td>
                <td className="border border-gray-800 p-2">{card.card_sets?.[0].set_name}</td>
                <td className="border border-gray-800 p-2">{card.card_sets?.[0].set_rarity}</td>
                <td className="border border-gray-800 p-2">{card.card_sets?.[0].set_edition}</td>
                <td className="border border-gray-800 p-2">
                  Set Price: {card.card_sets?.[0].set_price}
                  <br />
                  <br />
                  Ebay Price: {card.card_prices?.[0].ebay_price}
                  <br />
                  <br />
                  TCG Player Price: {card.card_prices?.[0].tcgplayer_price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ):(
        <p>No matched cards found.</p>
      )}
    </div>
  );
};

export default CardTable;
