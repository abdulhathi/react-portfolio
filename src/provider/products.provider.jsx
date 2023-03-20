import { useState, useEffect } from "react";
import { ProductsContext } from "../context/products.context";
import Products_Data from "../data/shop-data.json";
import { OnetimeLoadShopData } from "../utils/firestore-utils";
import Shops_Data from "../data/shop-data-firebase";

const ProductsProvider = ({ children }) => {
  // console.log(Products_Data);
  const [products, setProducts] = useState(Products_Data);
  const value = { products, setProducts };

  // useEffect(() => {
  //   OnetimeLoadShopData("categories", Shops_Data);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
