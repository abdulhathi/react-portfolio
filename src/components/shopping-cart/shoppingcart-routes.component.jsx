import { Routes, Route } from "react-router-dom";
import Home from "./home/home.component";
import ShoppingCartNavigation from "./navigation/shopping-cart-navigation.component";
import Product from "./shop/products.component";

const ShoppingCartRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShoppingCartNavigation />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="shop" element={<Product />}></Route>
      </Route>
    </Routes>
  );
};

export default ShoppingCartRoutes;
