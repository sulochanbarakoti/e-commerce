import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { Prev } from "react-bootstrap/esm/PageItem";

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getCart());

  const addToCart = (itemId) => {
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeToCart = (itemId) => {
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] - 1 }));
  };
  const contextValue = { all_product, cartItems, addToCart, removeToCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
