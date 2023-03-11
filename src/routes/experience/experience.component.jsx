import Backend from "../../assets/backend.png";
import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import "./experience.styles.scss";

const Experience = () => {
  return (
    <section className="aboutme-section">
      <HeadingOnePrimary text="Abdul Me"></HeadingOnePrimary>
      <div className="aboutme-container">
        <img
          className="aboutme-image-container"
          src={Backend}
          alt="Web developer"
        />
        <div className="aboutme-details">
          <HeadingOnePrimary text="UI/UX Designer & Web Developer"></HeadingOnePrimary>
          <p>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam
            dolor justo et dolor dolor dolor
          </p>
          <ul>
            <li>Name: Kate Winslet</li>
            <li>Birthday: 1 April 1990</li>
            <li>Degree: Master</li>
            <li>Experience: 10 Years</li>
            <li>Phone: +012 345 6789</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Street, New York, USA </li>
            <li>Freelance: Available</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
