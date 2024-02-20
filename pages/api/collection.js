
export default function handler(req,res) {
  if(req.method==='GET') {
    const allSelectedItems=Object.keys(localStorage).reduce((acc,key) => {
      if(key!=='myCollection') {
        let items;
        try {
          items=JSON.parse(localStorage.getItem(key));
        } catch(error) {
          console.error('Error parsing JSON:',error);
          items=[];
        }
        acc=[...acc,...items];
      }
      return acc;
    },[]);
    res.status(200).json(allSelectedItems);
  } else {
    res.setHeader('Allow',['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
