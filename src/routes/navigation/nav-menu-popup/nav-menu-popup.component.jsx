import { Link } from "react-router-dom";
import "./nav-menu-popup.styles.scss";

const navMenuList = [
  { id: 1, linkName: "Home", link: "/home" },
  { id: 2, linkName: "About Me", link: "/aboutme" },
  { id: 3, linkName: "Education", link: "/education" },
  { id: 4, linkName: "Experience", link: "experience" },
  { id: 5, linkName: "Skills", link: "/skills" },
  { id: 6, linkName: "Certification", link: "/certification" },
  { id: 7, linkName: "Contact Us", link: "/contactus" },
  // { id: 8, linkName: "Sign In", link: "/signin" },
];

const NavMenuPopup = () => {
  return (
    <div className="nav--menu list">
      {navMenuList.map(({ id, linkName, link, linkIcon = "" }) => {
        return (
          <Link
            name={linkName}
            key={linkName}
            className="nav--menu--item"
            to={link}
            onClick={(event) => {
              const navbar = document.querySelector(".navbar");
              const navToggler = document.querySelector(".nav--toggler");
              navbar.classList.toggle("nav--menu--opener");
              navToggler.classList.toggle("fa-bars");
              navToggler.classList.toggle("fa-xmark");
            }}
          >
            {linkName}
            {linkIcon && <span className={`fa fa-regular ${linkIcon}`}></span>}
          </Link>
        );
      })}
    </div>
  );
};
export default NavMenuPopup;
