// @/pages/api/Sports/sportsData.page.js

// Import necessary dependencies
import fetch from 'node-fetch';

// Function to fetch data from a provided URL
const fetchData=async (url) => {
  try {
    const response=await fetch(url);
    const data=await response.json();
    return data;
  } catch(error) {
    throw new Error(error.message);
  }
};

// Function to fetch sports data from multiple URLs
const fetchSportsData=async (req,res) => {
  try {
    const sportsUrls=getSportsUrls(); // Call the getSportsUrls function to get the list of URLs
    const fetchPromises=sportsUrls.map((url) => fetchData(url)); // Fetch data from each URL concurrently
    const sportsData=await Promise.all(fetchPromises); // Wait for all promises to resolve
    res.status(200).json(sportsData); // Respond with the fetched data
  } catch(error) {
    res.status(500).json({error: error.message}); // Respond with an error message if fetching fails
  }
};

// Function to get the list of sports URLs based on the card set
function getSportsUrls(cardSet) {
  const cardSet=req.query.cardSet; // Retrieve the card set from the request query
  const cursor=0;
  // Modify this function to return the appropriate URLs based on the selected card set
  // Example: For '1990 Hoops', return URLs for 1990 Hoops cards
  // You can use a switch statement or an object mapping
  // Add more cases as needed for additional card sets
  switch(cardSet) {
    case '1975 Topps':
      return [
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1975-topps?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`
      ];
    case '1989 NBA Hoops':
      return [
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1989-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`
      ];
    case '1990 NBA Hoops':
      return [
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-hoops?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`
      ];
    case '1990 Skybox':
      return [
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-skybox?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`
      ];
    case '1990 Fleer':
      return [
        `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1990-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
      ];
    case '1991 Fleer':
      return [
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
        `https://www.sportscardspro.com/console/basketball-cards-1991-fleer?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
      ];
    case '1990 Pro Set':
      return [
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+500}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+550}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+600}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+650}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+700}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1990-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+750}&format=json`
      ];
    case '1991 Pro Set':
      return [
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+350}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+400}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+450}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+500}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+550}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+600}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+650}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+700}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+750}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-pro-set?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+800}&format=json`
      ];
    case '1991 Proline Portraits':
      return [
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&$cursor${cursor+100}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+150}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+200}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+250}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-proline-portraits?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+300}&format=json`
      ];
    case '1991 Wild Card College Draft Picks':
      return [
        `https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-wild-card-college-draft-picks?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`
      ];
    case '1991 Wild Card':
      return [
        `https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+50}&format=json`,
        `https://www.sportscardspro.com/console/football-cards-1991-wild-card?sort=model-number&exclude-variants=false&rookies-only=false&cursor=${cursor+100}&format=json`
      ];
    default:
      return [];
  }
}

export default fetchSportsData;