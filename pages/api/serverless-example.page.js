
import cardData from 'data/cardData.json'
export default function handler(request,response) {
  response.status(200).json({
    body: cardData,
    query: cardData
  });
}