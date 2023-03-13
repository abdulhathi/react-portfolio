import { Component } from "react";
import "./nav-logo.styles.scss";
// import LibraryImage from "../../../assets/images/books.png";

class NavLogo extends Component {
  render() {
    return (
      <div className="nav--logo--container">
        {/* <img
          className="nav--logo--image"
          src={LibraryImage}
          alt="IslamicLibraryOnline.com"
        /> */}
        <h1 className="nav--logo h1--primary">TechHathi</h1>
      </div>
    );
  }
}

export default NavLogo;
