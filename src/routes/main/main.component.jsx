import Abdul from "../../assets/Circle_Clip_Abdul1.png";
import HeadingOne from "../../core-components/headings/heading-one/heading-one.component";
import HeadingTwo from "../../core-components/headings/heading-two/heading-two.component";
import HeadingThree from "../../core-components/headings/heading-three/heading-three.component";
import ButtonOutline from "../../core-components/buttons/button-outline/button-outline.component";
import "./main.styles.scss";

const Main = () => {
  return (
    <main className="main-container">
      <img className="portfolio-image-container" src={Abdul}></img>
      <header className="header-container">
        <h3>I'm</h3>
        <h1 className="name-container">Abdul Hathi</h1>
        <h2>Technical Lead</h2>
        <ButtonOutline text="Download Profile"></ButtonOutline>
      </header>
    </main>
  );
};

export default Main;
