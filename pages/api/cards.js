// pages/api/cards.js
import fs from 'fs';

export default function handler(req,res) {
  try {
    // Read the card data from your JSON file
    const rawData=fs.readFileSync('./data/cardData.json');
    const cardData=JSON.parse(rawData);

    // Return the card data in the response
    res.status(200).json({ cardData });
  } catch(error) {
    console.error('Error reading or parsing card data:',error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
