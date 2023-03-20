import { useEffect, useState } from "react";
import { CategoriesContext } from "../context/categories.context";
import { GetCategories } from "../utils/firestore-utils";

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getCategories = async () => {
      const cats = await GetCategories("categories");
      setCategories(cats);
    };
    getCategories();
  }, []);

  const value = { categories, setCategories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider };
