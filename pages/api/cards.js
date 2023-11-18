// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cardData from 'data/cardData.json'
export default function handler(req,res) {
  const cardData =
  res.status(200).json({cardData})
}
