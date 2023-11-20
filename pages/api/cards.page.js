// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from 'data/cardData.json'
export default function handler(req,res) {

  res.status(200).json({ data })
}
export const config={
  api: {
    bodyParser: {
      sizeLimit: '50mb',
      responseLimit: '50mb'
    },
  },
}