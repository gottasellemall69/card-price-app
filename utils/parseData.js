// @/utils/parseData.js
const parseData=async ( url ) => {
  try {
    const response=await fetch( url );

    if( !response.ok ) {
      throw new Error( `Failed to fetch data from ${ url }` );
    }

    const jsonData=await response.json();

    return jsonData.products.map( ( product ) => ( {
      productName: product.productName,
      set: product.consoleUri,
      ungradedPrice: product.price1,
      psa9Price: product.price2,
      psa10Price: product.price3,
    } ) );
  } catch( error ) {
    console.error( `Error fetching or parsing data: ${ error }` );
    throw error;
  }
};

export default parseData
