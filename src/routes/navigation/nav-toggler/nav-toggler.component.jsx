import { Component } from "react";
import "./nav-toggler.styles.scss";

class NavToggler extends Component {
  render() {
    return (
      <span
        className="fa fa-bars nav--toggler"
        onClick={(event) => {
          const navbar = document.querySelector(".navbar");
          navbar.classList.toggle("nav--menu--opener");
          // console.log(event.target.classList)
          event.target.classList.toggle("fa-bars")
          event.target.classList.toggle("fa-xmark")
        }}
      ></span>
    );
  }
}

export default NavToggler;
