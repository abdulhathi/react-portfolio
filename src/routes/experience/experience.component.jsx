import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component"
import HeadingOneUltimate from "../../core-components/headings/heading-one-ultimate/heading-one-ultimate.component";
import "./experience.styles.scss";
import ExperienceChild from "./experience-child.component/experience-child.component";

const Experience = () => {
  const experience = [{
    companyName: "Cognizant Technology Solutions",
    startDate: "04/16/2010",
    endDate: "04/16/2010",
    title: "Technical Lead",
    location: "Long beach, CA, USA",
    jobDescription: ["Architecting the technical Solution and technical Design. Development of end-to- end application in Dotnet, Python and Azure environment and working to improve overall team performance.","Development of core business logic exposing over Web Services in REST API.",
    "Worked with project managers, developers, quality assurance and customers to resolve technical issues.",
    "Demonstrated experience and good hands-on programming experience Python, JavaScript, C# and React.",
    "Provided technical support using knowledge of complex technology to solve problems and support new projects.",
    "Developed robust, scalable, modular, and API-centric infrastructures.",
    "Participated in architecture, design and implementation of back-end features using Node.js and Dotnet core web api.",
    "Integrated third-party tools and components into applications.",
    "Coordinated efficient large-scale software deployments.",
    "Worked with development teams to correct problems and run test scenarios."]
  },{
    companyName: "DXC Teachnology (CSC)",
    startDate: "05/16/2008",
    endDate: "04/16/2010",
    title: "Software Engineer",
    location: "Chennai, TN, India",
    jobDescription: [
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
      "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.",
      "Integrated third-party tools and components into applications. •Coordinated efficient large-scale software deployments.",
      "Represented software applications engineering team during large and complex development projects.","Technologiesused : Asp.net,C#,SQL,JavaScript,Telerik"
    ]
  },{
    companyName: "Sysmix Infotech Pvt. Ltd.",
    startDate: "12/01/2006",
    endDate: "05/15/2008",
    title: "Software Engineer",
    location: "Chennai, TN, India",
    jobDescription: ["Designed enhancements and updates for subsystems of end-user applications software running on local, networked and Internet-based platforms.",
    "Offered experience with Asp.net, C#, SQL, JavaScript."]
  }]
  return <div className="experienceRoot">
      <HeadingOneUltimate>Experience</HeadingOneUltimate>
      <div className="experienceContainer">
      {
        experience.map((exp) => <ExperienceChild experience={exp} key={exp.companyName}></ExperienceChild>)
      }
      </div>
  </div>
};

export default Experience;
