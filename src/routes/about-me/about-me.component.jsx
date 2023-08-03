import Backend from "../../assets/backend.png";
import HeadingOneUltimate from "../../core-components/headings/heading-one-ultimate/heading-one-ultimate.component";
import HeadingOnePrimary from "../../core-components/headings/heading-one-primary/heading-one-primary.component";
import "./about-me.styles.scss";
import UnOrderedList from "../../core-components/UnOrderedList/UnOrderedList.component";

const AboutMe = () => {
  const listItems = [
    { key: "Name", value: "Abdul Hathi" },
    { key: "Birthday", value: "30 June 1983" },
    { key: "Degree", value: "Bachelor of Technology" },
    { key: "Major", value: "Information Technology" },
    { key: "Phone", value: "+1 562 606 8314" },
    { key: "Email", value: "abdulhathi@gmail.com" },
    { key: "Address", value: "28 Hayes Street, Irvine, California, USA" },
  ];
  // console.log(listItems)
  return (
    <section className="aboutme-section">
      <HeadingOneUltimate text="About Me"></HeadingOneUltimate>
      <div className="aboutme-container">
        <img
          className="aboutme-image-container"
          src={Backend}
          alt="Web developer"
        />
        <div className="aboutme-details">
          <HeadingOnePrimary text="Technical Lead"></HeadingOnePrimary>
          <p>
            Innovative and technically astute with 16 years of experience.
            Well-versed in analyzing user needs and developing software to
            precisely meet diverse needs. Demonstrates mastery of multiple
            programming languages and proactively keeps up with industry trends.
            Driven to wear many programming hats with expertise in creating
            everything from new applications to new operating systems.
            Successfully played various roles such as Technical Architect,
            Technical lead, Lead Consultant, Project lead, Development lead and
            production support lead in multiple clients such as Molina
            Healthcare, TMGHealth, IMSERV, MedData & Lorenzo.
          </p>
          <UnOrderedList list={listItems}></UnOrderedList>
          {/* <ul>
            <li>Name: Kate Winslet</li>
            <li>Birthday: 1 April 1990</li>
            <li>Degree: Master</li>
            <li>Experience: 10 Years</li>
            <li>Phone: +012 345 6789</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Street, New York, USA </li>
            <li>Freelance: Available</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
