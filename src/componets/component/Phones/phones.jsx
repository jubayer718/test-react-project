

import { useState } from "react";

import { useEffect } from "react";
import Phone from "./phone";
const Phones = ({handleAddToCart}) => {
  const [phones, setPhone] = useState([])
  useEffect(() => {
    fetch('phones.json')
      .then(res => res.json())
    .then(data=>setPhone(data))
  },[])

  return (
    <div>
      <h1>phones: { phones.length}</h1>
      {
    phones.map((p,idx)=><Phone handleAddToCart={handleAddToCart} key={idx}  Ph={p}></Phone>)
    }
    </div>
  );
};

export default Phones;