'use client';
// @/pages/api/sportsData.page.js
async function fetchSportsData(url) {
  const response=await fetch(url);
  if(!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
}

export default async function handler(req,res) {
  try {
    const cardSet=req.query.cardSet||''; // New line to get the card set from query parameters
    const sportsUrls=getSportsUrls(cardSet); // Use a function to generate URLs based on the card set
    const dataPromises=sportsUrls.map(fetchSportsData);
    const sportsData=await Promise.all(dataPromises);
    res.status(200).json(sportsData);
  } catch(error) {
    console.error('Error fetching data:',error);
    res.status(500).json({error: 'Internal Server Error'});
  }
}

function getSportsUrls(cardSet) {

  // Modify this function to return the appropriate URLs based on the selected card set
  // Example: For '1990 Hoops', return URLs for 1990 Hoops cards
  // You can use a switch statement or an object mapping
  // Add more cases as needed for additional card sets
  switch(cardSet) {
    case '1975 Topps NBA':
      return [
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json"
      ];
    case '1989 NBA Hoops':
      return [
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=350&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=400&format=json"
      ];
    case '1990 NBA Hoops':
      return [
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=350&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=400&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=true&rookies-only=false&cursor=450&format=json"
      ];
    case '1990 NBA Skybox':
      return [
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=350&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=400&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=true&rookies-only=false&cursor=450&format=json"
      ];
    case '1990 NBA Fleer':
      return [
        "https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
      ];
    case '1991 NBA Fleer':
      return [
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=350&format=json",
        "https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=true&rookies-only=false&cursor=400&format=json",
      ];
    case '1990 NFL Pro Set':
      return [
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=350&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=400&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=450&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=500&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=550&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=600&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=650&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=700&format=json",
        "https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=750&format=json"
      ];
    case '1991 NFL Pro Set':
      return [
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=350&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=400&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=450&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=500&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=550&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=600&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=650&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=700&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=750&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=true&rookies-only=false&cursor=800&format=json"
      ];
    case '1991 NFL Proline Portraits':
      return [
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=100&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=200&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=250&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=true&rookies-only=false&cursor=300&format=json"
      ];
    case '1991 NFL Wild Card College Draft Picks':
      return [
        "https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json"
      ];
    case '1991 NFL Wild Card':
      return [
        "https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=true&rookies-only=false&cursor=0&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=true&rookies-only=false&cursor=50&format=json",
        "https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=true&rookies-only=false&cursor=150&format=json"
      ];
    default:
      return [];
  }
}