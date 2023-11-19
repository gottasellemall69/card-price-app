// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cardData from '/data/cardData'
export default function handler(req,res) {
  
  res.status(200).json({ cardData })
}
