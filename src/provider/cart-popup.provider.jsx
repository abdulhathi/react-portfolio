import { useState } from "react";
import { CartPopupContext } from "../context/cart-popup.context";

const CartPopupProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setDistinctCartItems] = useState(new Map());
  const [cartCount, setCartCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const setCartItems = (product) => {
    if (!cartItems.has(product.id)) {
      cartItems.set(product.id, product);
    }
    const currCartItem = cartItems.get(product.id);

    cartItems.set(product.id, {
      ...currCartItem,
      quantity: currCartItem.quantity ? currCartItem.quantity + 1 : 1,
    });
    setDistinctCartItems(cartItems);
    setCartCount(cartItems.size);
    setSubTotal(subTotal + product.price);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    subTotal,
    setSubTotal,
  };
  return (
    <CartPopupContext.Provider value={value}>
      {children}
    </CartPopupContext.Provider>
  );
};

export { CartPopupProvider };
