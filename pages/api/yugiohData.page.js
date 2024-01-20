// @/pages/api/yugiohData.js
import fetch from 'node-fetch';

export default async function handler(req,res) {
  try {
    const apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true';
    const response=await fetch(apiUrl);
    const data=await response.json();

    res.status(200).json(data.data);
  } catch(error) {
    console.error('Error fetching Yugioh data:',error);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
