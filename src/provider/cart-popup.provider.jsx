import { useState } from "react";
import { CartPopupContext } from "../context/cart-popup.context";

const CartPopupProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <CartPopupContext.Provider value={value}>
      {children}
    </CartPopupContext.Provider>
  );
};

export { CartPopupProvider };
