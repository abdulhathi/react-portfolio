import { useState } from "react";
import { ProductsContext } from "../context/products.context";
import Products_Data from "../data/shop-data.json";

const ProductsProvider = ({ children }) => {
  // console.log(Products_Data);
  const [products, setProducts] = useState(Products_Data);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
