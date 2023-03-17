import { createContext } from "react";

const NavMenuListContext = createContext({
  navMenuList: [],
  setNavMenuList: () => null,
});

export { NavMenuListContext };
