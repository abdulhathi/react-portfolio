import { Link } from "react-router-dom";
import "./nav-menu.styles.scss";

const NavMenu = () => {
  const navMenuList = [
    { id: 1, linkName: "Home", link: "/home" },
    { id: 2, linkName: "About Me", link: "/aboutme" },
    { id: 3, linkName: "Education", link: "/education" },
    { id: 4, linkName: "Experience", link: "experience" },
    { id: 5, linkName: "Skills", link: "/skills" },
    { id: 6, linkName: "Certification", link: "/certification" },
    { id: 7, linkName: "Contact Us", link: "/contactus" },
    { id: 8, linkName: "Sign In", link: "/signin" },
  ];
  return (
    <div className="nav--menu list">
      {navMenuList.map(({ id, linkName, link }) => {
        return (
          <Link
            key={linkName}
            className="nav--menu--item"
            to={link}
            onClick={(event) => {
              // console.log(event.target)
              const navbar = document.querySelector(".navbar");
              const navToggler = document.querySelector(".nav--toggler");
              // if (!navbar.classList.contains("nav--menu--opener")) {
                navbar.classList.toggle("nav--menu--opener");
                // navToggler.classList.toggle("nav--menu--opener");
                navToggler.classList.toggle("fa-bars");
                navToggler.classList.toggle("fa-xmark");
              // }
            }}
          >
            {linkName}
          </Link>
        );
      })}
      {/* <Link className="nav--menu--item" to="/home">
        Home
      </Link>
      <Link className="nav--menu--item" to="/aboutme">
        About Me
      </Link>
      <Link className="nav--menu--item" to="/home">
        Education
      </Link>
      <Link className="nav--menu--item" to="/home">
        Experience
      </Link>
      <Link className="nav--menu--item" to="/home">
        Skills
      </Link>
      <Link className="nav--menu--item" to="/home">
        Certification
      </Link>
      <Link className="nav--menu--item" to="/home">
        Contact Us
      </Link> */}
    </div>
  );
};
export default NavMenu;
