// @/pages/api/yugioh.js



export default function handler(req, res) {
  res.status( 200 ).json('https://db.ygoprodeck.com/api/v7/cardinfo.php?tcgplayer_data=true');
}
