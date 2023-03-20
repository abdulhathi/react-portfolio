import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../category-preview/category-preview.component";
import Category from "../category/category.component";
const ShopByCategory = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default ShopByCategory;
