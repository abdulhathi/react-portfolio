import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import NavToggler from "../navigation/nav-toggler/nav-toggler.component";
import NavLogo from "../../components/navbar/nav-logo/nav-logo.component";
import NavMenuPopup from "./nav-menu-popup/nav-menu-popup.component";
import ButtonPrimaryMini from "../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import SignInPopup from "../../components/sign-in-popup/sign-in-popup.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div
        className="navbar"
        onClick={(event) => {
          const navbar = document.querySelector(".navbar");
          const navToggler = document.querySelector(".nav--toggler");
          // console.log(event.target.classList);
          if (
            !(
              event.target.classList.contains("nav--toggler") ||
              event.target.classList.contains("nav-user")
            )
          ) {
            if (navbar.classList.contains("nav--menu--opener")) {
              navbar.classList.toggle("nav--menu--opener");
            }
            if (navbar.classList.contains("signinpopup-container-opener")) {
              navbar.classList.toggle("signinpopup-container-opener");
            }
            if (navToggler.classList.contains("fa-xmark")) {
              navToggler.classList.toggle("fa-xmark");
              navToggler.classList.toggle("fa-bars");
            }
          }
        }}
      >
        <div className="navbar-container">
          <div className="navigation-container">
            <Link className="logo-container" to="/home">
              <NavLogo>Portfolio</NavLogo>
            </Link>
            <NavToggler></NavToggler>
            <NavMenuPopup></NavMenuPopup>
          </div>
          {currentUser ? (
            <div
              className=" fa-solid fa-circle-user nav-user"
              onClick={(event) => {
                const navbar = document.querySelector(".navbar");
                navbar.classList.toggle("signinpopup-container-opener");
              }}
            ></div>
          ) : (
            <Link to="/signin">
              <ButtonPrimaryMini className="btnSignIn">
                Sign In
              </ButtonPrimaryMini>
            </Link>
          )}
          <SignInPopup></SignInPopup>
        </div>
        <div className="outlet-container">
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
};
export default Navigation;
