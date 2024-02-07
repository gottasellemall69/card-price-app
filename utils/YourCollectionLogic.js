// YourCollectionLogic.js

/**
 * Sorts the cards based on the specified criteria.
 * 
 * @param {object[]} cards - The array of user-submitted cards.
 * @param {string} sortBy - The sort criteria (e.g., 'name', 'price', 'date').
 * @param {string} sortOrder - The sort order ('asc' or 'desc').
 * @returns {object[]} The sorted array of cards.
 */
export const sortCards=(cards,sortBy,sortOrder) => {
  return cards.sort((a,b) => {
    let valueA=a[sortBy];
    let valueB=b[sortBy];

    if(typeof valueA==='string') {
      valueA=valueA.toLowerCase();
      valueB=valueB.toLowerCase();
    }

    if(valueA<valueB) {
      return sortOrder==='asc'? -1:1;
    }
    if(valueA>valueB) {
      return sortOrder==='asc'? 1:-1;
    }
    return 0;
  });
};

/**
 * Filters the cards based on the specified criteria.
 * 
 * @param {object[]} cards - The array of user-submitted cards.
 * @param {number} minPrice - The minimum price for filtering.
 * @param {number} maxPrice - The maximum price for filtering.
 * @param {string} cardType - The card type for filtering.
 * @returns {object[]} The filtered array of cards.
 */
export const filterCards=(cards,minPrice,maxPrice,cardType) => {
  return cards.filter(card => {
    if(minPrice&&card.price<minPrice) {
      return false;
    }
    if(maxPrice&&card.price>maxPrice) {
      return false;
    }
    if(cardType&&card.cardType!==cardType) {
      return false;
    }
    return true;
  });
};

/**
 * Retrieves the latest price for a card from an external API or data source.
 * 
 * @param {string} cardName - The name of the card.
 * @returns {object} The latest price details for the card.
 */
export const getLatestPrice=async () => {
  try {
    const response=await fetch(`/api/Sports/sportsData`);
    if(response.ok) {
      const data=await response.json();
      const {priceChange,priceChangePercentage,priceChangeSign}=data;
      return {
        priceChange,
        priceChangePercentage,
        priceChangeSign
      };
    } else {
      throw new Error('Failed to fetch the latest price for the card');
    }
  } catch(error) {
    console.error('Error fetching the latest price:',error);
    throw error;
  }
};