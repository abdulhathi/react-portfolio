import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/navigation.component";
import Main from "./main/main.component";
import AboutMe from "./about-me/about-me.component";
import Education from "./education/education.component";
import Experience from "./experience/experience.component";
import Skills from "./skills/skills.component";
import ContactUs from "./contact-us/contact-us.component";
import Certification from "./certification/certification.component";

const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Main />}></Route>
        <Route path="education" element={<Education />}></Route>
        <Route path="experience" element={<Experience />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="certification" element={<Certification />}></Route>
        <Route path="aboutme" element={<AboutMe />}></Route>
      </Route>
    </Routes>
  );
};

export default PortfolioRoutes;
