import { createContext } from "react";

const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null,
});

export { CategoriesContext };
