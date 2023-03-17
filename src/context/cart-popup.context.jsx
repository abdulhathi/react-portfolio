import { createContext } from "react";

const CartPopupContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export { CartPopupContext };
