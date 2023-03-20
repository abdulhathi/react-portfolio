import { Routes, Route } from "react-router-dom";
import Home from "./home/home.component";
import ShoppingCartNavigation from "./navigation/shopping-cart-navigation.component";
import Product from "./shop/products.component";
import AddProduct from "../admin/add-product/add-product.component";
import ShopByCategory from "./shop-by-category/shop-by-category.component";

const ShoppingCartRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShoppingCartNavigation />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="shop" element={<Product />}></Route>
        <Route path="shop-by-category/*" element={<ShopByCategory />}></Route>
        <Route path="addproduct" element={<AddProduct />}></Route>
      </Route>
    </Routes>
  );
};

export default ShoppingCartRoutes;
