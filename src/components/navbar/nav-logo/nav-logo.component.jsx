import "./nav-logo.styles.scss";
import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";

const NavLogo = (props) => {
  const child = props["children"];
  return (
    <div className="nav--logo--container">
      {/* <img
          className="nav--logo--image"
          src={LibraryImage}
          alt="IslamicLibraryOnline.com"
        /> */}
      <HeadingOnePrimary>{child}</HeadingOnePrimary>
    </div>
  );
};

export default NavLogo;
