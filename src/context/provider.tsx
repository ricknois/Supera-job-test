import React, { useState } from 'react';
import { storeContext } from './context';

function Provider ({ children }) {
  const [cartSize, setCartSize] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const contextValue = {
    cartSize,
    setCartSize,
    cartProducts,
    setCartProducts,
    total,
    setTotal,
    shipping,
    setShipping
  };

  return (
    <storeContext.Provider value={ contextValue }>
      { children }
    </storeContext.Provider>
  );
}

export default Provider;
