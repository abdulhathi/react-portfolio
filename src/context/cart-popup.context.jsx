import { createContext } from "react";

const CartPopupContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: new Map(),
  setCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
});

export { CartPopupContext };
