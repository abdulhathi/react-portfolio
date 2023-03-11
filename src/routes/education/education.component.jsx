import EducationImage from "../../assets/education.png";
import HeadingOneUltimate from "../../core-components/headings/heading-one-ultimate/heading-one-ultimate.component";
import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingTwo from "../../core-components/headings/heading-two/heading-two.component";
import HeadingThree from "../../core-components/headings/heading-three/heading-three.component";
import "./education.styles.scss";

const Education = () => {
  return (
    <section className="education-section">
      <HeadingOneUltimate text="Education"></HeadingOneUltimate>
      <div className="education-container">
        <img className="education-image" src={EducationImage} alt="" />
        <div className="education-description">
          <HeadingOnePrimary text="B-Tech"></HeadingOnePrimary>
          <HeadingTwo text="Information Technology"></HeadingTwo>
          <HeadingTwo text="Anna University"></HeadingTwo>
          <HeadingThree text="Year : 2001 - 2005"></HeadingThree>
        </div>
      </div>
    </section>
  );
};

export default Education;
