import React, { createContext, useState, useEffect } from 'react';
export const Econtext = createContext();

export default function MainContext({ children }) { // Destructure children here
  const [WishP, setWishP] = useState([]);
  const [cartP,setCartP]=useState([])

  const data = { WishP, setWishP ,cartP,setCartP};

  return (
    <Econtext.Provider value={data}>
      {children}
    </Econtext.Provider>
  );
}
