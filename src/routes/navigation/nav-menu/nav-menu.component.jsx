import { Link } from "react-router-dom";
import "./nav-menu.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { firebaseSignOut } from "../../../utils/firebase-utils";

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

const NavMenu = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signIn = navMenuList[7];
  if (currentUser) {
    navMenuList[7] = {
      ...signIn,
      linkName: "Sign Out",
      linkIcon: "fa-circle-user",
    };
  } else {
    navMenuList[7] = { ...signIn, linkName: "Sign In", linkIcon: "" };
  }
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
              // console.log(event.target)
              const navbar = document.querySelector(".navbar");
              const navToggler = document.querySelector(".nav--toggler");
              // if (!navbar.classList.contains("nav--menu--opener")) {
              navbar.classList.toggle("nav--menu--opener");
              // navToggler.classList.toggle("nav--menu--opener");
              navToggler.classList.toggle("fa-bars");
              navToggler.classList.toggle("fa-xmark");
              // }
              // alert(event.target.name);
              if (event.target.name === "Sign Out") {
                firebaseSignOut().then(() => {
                  setCurrentUser(null);
                });
              }
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
