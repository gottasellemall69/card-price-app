
export default async function handler(req,res) {
  const apiUrl='https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true';
  try {
    const response=await fetch(apiUrl);
    const data=await response.json();
    res.status(200).json(data);
  } catch(error) {
    console.error('Error fetching Yugioh data:',error);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
export const config={
  api: {
    responseLimit: false,
  },
};