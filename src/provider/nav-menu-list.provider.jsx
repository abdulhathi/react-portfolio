import { useState } from "react";
import NavMenuList_Data from "../data/shoppingcart-menu.json";
import { NavMenuListContext } from "../context/nav-menu-list.context";

const NavMenuListProvider = ({ children }) => {
  const [navMenuList, setNavMenuList] = useState(NavMenuList_Data);
  const value = { navMenuList, setNavMenuList };
  return (
    <NavMenuListContext.Provider value={value}>
      {children}
    </NavMenuListContext.Provider>
  );
};

export { NavMenuListProvider };
