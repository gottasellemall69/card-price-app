import NavBar from "@/components/Navigation/NavBar";
import React,{useEffect,useState} from 'react';

const Collection=() => {
  const [items,setItems]=useState([]);

  useEffect(() => {
    const savedItems=JSON.parse(localStorage.getItem('myCollection'))||[];
    setItems(savedItems);
  },[]);

  return (
    <>
      <NavBar />
      <div className="p-5">
        <h1>My Collection</h1>
        {items.map((item,index) => (
          <div key={index}>
            <span className="mx-auto max-w-full">
              <p className="font-black text-lg w-fit text-nowrap">
                {item.productName}
              </p>
              <p>
                {item.consoleUri}
                <br />
                <p>
                  {item.price1}
                  <br />

                  {item.priceChangeSign}{item.priceChangePercentage}%

                </p></p>
            </span><br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
