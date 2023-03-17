import { Link } from "react-router-dom";
import "./nav-menu-popup.styles.scss";

const NavMenuPopup = (props) => {
  const navMenuList = props["navMenuList"];
  return (
    <div className="nav--menu list">
      {navMenuList.map(({ id, name, link, linkIcon = "" }) => {
        return (
          <Link
            name={name}
            key={id}
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
            {name}
            {linkIcon && <span className={`fa fa-regular ${linkIcon}`}></span>}
          </Link>
        );
      })}
    </div>
  );
};
export default NavMenuPopup;
