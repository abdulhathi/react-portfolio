import Backend from "../../assets/backend.png";
import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import "./certification.styles.scss";
import { Link, useLocation } from "react-router-dom";
import PythonCert from "../../assets/certs/certificate-of-completion-for-python.png";
import HTMLCSS from "../../assets/certs/The Ultimate HTML5 And CSS3_Part1.jpg";
import DSA from "../../assets/certs/UC-3BSD8H27_DSA.jpg";
import ButtonPrimary from "../../core-components/buttons/button-primary/button-primary.component";

const Certification = () => {
  const certs = {
    python: PythonCert,
    htmlcss: HTMLCSS,
    dsa: DSA,
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cert = queryParams.get("cert");
  return (
    <div className="certification-container">
      <div className="certbtn-group-container">
        {Object.keys(certs).map((cert) => (
          <Link
            className="cert-nav-link"
            key={cert}
            onClick={(event) => {
              event.preventDefault();
              const certImg = document.getElementsByClassName(
                "certimage-container"
              );
              console.log(certs[cert]);
              certImg.src = certs[cert];
            }}
          >
            {cert}
          </Link>
        ))}
      </div>
      <img className="certimage-container" src={certs[cert]} alt={cert} />
    </div>
  );
};

export default Certification;
