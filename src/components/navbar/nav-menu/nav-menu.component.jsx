import { Link } from "react-router-dom";
import "./nav-menu.styles.scss";

const NavMenu = () => {
  navMenuList = props["navMenuList"]
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
            {linkIcon ? (
              <span className={`fa fa-regular ${linkIcon}`}></span>
            ) : (
              ""
            )}
          </Link>
        );
      })}
    </div>
  );
};
export default NavMenu;
