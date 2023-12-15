// @/components/Yugioh/CardTable.js
import React,{ Suspense } from 'react';
import Image from 'next/image';

const CardTable = ({ matchedCards,userCardList,selectedSetEdition }) =>
{
  const getLocalImagePath = ( cardId ) =>
  {
    const idString = String( cardId );
    return `/yugiohImages/${ idString }.jpg`;
  };

  return (
    <div className="mt-4">
      <Suspense fallback={['Loading...']}>
        {matchedCards.length > 0 ? (
          <table className="border-collapse w-full">
            <thead>
              <tr>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm font-semibold text-white backdrop-blur backdrop-filter xl:table-cell"></th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name</th>
              <th scope="col"
                className="sticky top-0 z-10 max-w-sm whitespace-pre hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm font-semibold text-white backdrop-blur backdrop-filter xl:table-cell">Desc</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">Number</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm font-semibold text-white backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">Set</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm backdrop-blur backdrop-filter sm:pr-6 lg:pr-8 sm:table-cell">Rarity</th>
              <th scope="col"
                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm font-semibold text-white backdrop-blur backdrop-filter sm:table-cell">Edition</th>
              <th scope="col"
                className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 p-4 text-center sm:text-left w-fit text-sm backdrop-blur backdrop-filter sm:pr-6 lg:pr-8 whitespace-nowrap">Set Price</th>
            </tr>
            </thead>
          

              <tbody>
                {matchedCards.map( ( card,index ) =>
                {
                  const userCard = userCardList.find( ( entry ) =>
                    entry.toLowerCase().includes( card.name.toLowerCase() )
                  );

                  const relevantSet =
                    userCard &&
                    card.card_sets?.find( ( set ) =>
                      userCard.toLowerCase().includes( set.set_name.toLowerCase() ) ||
                      userCard.toLowerCase().includes( set.set_code.toLowerCase() ) ||
                      ( selectedSetEdition && userCard.toLowerCase().includes( set.set_edition.toLowerCase() ) )
                    );

              return (
                <tr key={index}>
                  <td className="hidden xl:table-cell">
                    <Image
                      src={getLocalImagePath(card.id)}
                      alt={`Card Image - ${card.name}`}
                      loading='lazy'
                      width={500}
                      height={500}
                      className="w-full h-full max-w-96 mx-auto object-center sm:object-fill overflow-clip object-scale-down"
                    />
                  </td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap text-sm font-medium text-white sm:pl-6 lg:pl-8">{card?.name}</td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap hidden text-sm text-white xl:table-cell">{card?.desc}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap text-sm font-medium text-white sm:pl-6 lg:pl-8">{relevantSet?.set_code}</td>
                  <td className="border border-gray-800 p-2 whitespace-pre-wrap text-sm font-medium text-white sm:pl-6 lg:pl-8">{relevantSet?.set_name}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap hidden text-sm text-white sm:table-cell">{relevantSet?.set_rarity}</td>
                  <td className="border border-gray-800 p-2 whitespace-nowrap hidden text-sm text-white sm:table-cell">
                    {relevantSet?.set_edition}
                  </td>
                  <td className="border flex-col border-gray-800 p-2 whitespace-nowrap text-sm font-medium text-white sm:pl-6 lg:pl-8">
                    <p>Set Price: {relevantSet?.set_price}</p>
                    <p>eBay Price: {card?.card_prices[0]?.ebay_price}</p>
                  </td>
                </tr>
                  );
                } )}
              </tbody>

          </table>
      ):(
        <p>No matched cards found.</p>
      )}
      </Suspense>
    </div>
  );
};

export default CardTable;