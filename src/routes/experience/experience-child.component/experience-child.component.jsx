import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component"
import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component"
import "./experience-child.styles.scss"

const ExperienceChild = (props) => {
  const {companyName, startDate, endDate, title, location, jobDescription} = {...props.experience}
  // console.log(companyName, startDate)
  return (<div className="expChildContainer">
      <HeadingOnePrimary>{companyName}, {title}</HeadingOnePrimary>
      <HeadingThree>{startDate} - {endDate} | {location}</HeadingThree>
      <ul>
        {jobDescription.map((desc,ind) => <li key={ind}>{desc}</li>)}
      </ul>
    </div>)
}

export default ExperienceChild;