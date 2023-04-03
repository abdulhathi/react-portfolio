import EducationImage from "../../assets/education.png";
import ClassroomImage from "../../assets/classroom.png";
import HeadingOneUltimate from "../../core-components/headings/heading-one-ultimate/heading-one-ultimate.component";
import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingTwoPrimary from "../../core-components/headings/heading-two-primary/heading-two-primary.component";
import HeadingThree from "../../core-components/headings/heading-three/heading-three.component";
import "./education.styles.scss";

const Education = () => {
  return (
    <section className="education-section">
      <HeadingOneUltimate text="Education"></HeadingOneUltimate>
      <div className="education-container">
        <img className="education-image" src={ClassroomImage} alt="" />
        <div className="education-description">
          <HeadingOneUltimate text="Bachelor-of-Technology"></HeadingOneUltimate>
          <HeadingTwoPrimary text="Information Technology"></HeadingTwoPrimary>
          <HeadingTwoPrimary text="Anna University"></HeadingTwoPrimary>
          <HeadingThree text="Year : 2001 - 2005"></HeadingThree>
        </div>
      </div>
    </section>
  );
};

export default Education;
