import { useState } from "react";
import { CartPopupContext } from "../context/cart-popup.context";

const CartPopupProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setDistinctCartItems] = useState(new Map());
  const [cartCount, setCartCount] = useState(0);

  const setCartItems = (item) => {
    if (!cartItems.has(item)) {
      cartItems.set(item, 0);
    }
    cartItems.set(item, cartItems.get(item) + 1);
    setDistinctCartItems(cartItems);
    setCartCount(cartItems.size);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
  };
  return (
    <CartPopupContext.Provider value={value}>
      {children}
    </CartPopupContext.Provider>
  );
};

export { CartPopupProvider };
