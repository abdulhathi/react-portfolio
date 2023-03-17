import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import "./skills.styles.scss";
import SkillsData from "../../data/skills-data.json";
import HeadingThree from "../../core-components/headings/heading-three/heading-three.component";
import HeadingTwoPrimary from "../../core-components/headings/heading-two-primary/heading-two-primary.component";

const Skills = () => {
  
  return (
    <div className="skills-container">
      <HeadingOnePrimary text="My Skills"></HeadingOnePrimary>
      <HeadingThree text="Technical skills"></HeadingThree>
      <ul className="allskills-container">
        {SkillsData.map(({ id, name, percent }) => (
          <li key={id} className="skill-row-container">
            <div className="skillnamepercent-container">
              <HeadingTwoPrimary text={name}></HeadingTwoPrimary>
              <HeadingTwoPrimary text={`${percent} %`}></HeadingTwoPrimary>
            </div>
            <div className="progress-container">
              <div
                className="progress-bar-container"
                style={{
                  width: percent * 3.5 + "px",
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
