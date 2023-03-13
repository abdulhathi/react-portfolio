import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import NavToggler from "../navigation/nav-toggler/nav-toggler.component";
import NavLogo from "./nav-logo/nav-logo.component";
import NavMenu from "./nav-menu/nav-menu.component";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="navigation-container">
          <Link className="logo-container" to="/home">
            <NavLogo></NavLogo>
          </Link>
          <NavToggler></NavToggler>
          <NavMenu></NavMenu>
        </div>
        <div className="outlet-container">
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
};
export default Navigation;