import { createContext } from "react";

const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export { ProductsContext };
