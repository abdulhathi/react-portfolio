import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./shopping-cart-navigation.styles.scss";
import NavToggler from "../../navbar/nav-toggler/nav-toggler.component";
import NavLogo from "../../navbar/nav-logo/nav-logo.component";
import NavMenuPopup from "../../navbar/nav-menu-popup/nav-menu-popup.component";
import { NavMenuListContext } from "../../../context/nav-menu-list.context";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPopup from "../cart-popup/cart-popup.component";
import { CartPopupContext } from "../../../context/cart-popup.context";

const ShoppingCartNavigation = () => {
  const { navMenuList } = useContext(NavMenuListContext);
  const { isCartOpen } = useContext(CartPopupContext);
  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navigation-container">
            <Link className="logo-container" to="/">
              <NavLogo>Online Shopping</NavLogo>
            </Link>
            <div className="navmenu-container">
              <NavToggler></NavToggler>
              <NavMenuPopup navMenuList={navMenuList}></NavMenuPopup>
              <CartIcon></CartIcon>
            </div>
          </div>
        </div>
        <div className="outlet-container">
          <Outlet></Outlet>
        </div>
        {isCartOpen && <CartPopup></CartPopup>}
      </div>
    </Fragment>
  );
};
export default ShoppingCartNavigation;
