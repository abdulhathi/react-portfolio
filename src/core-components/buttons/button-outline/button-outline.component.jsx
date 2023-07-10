import { Component } from "react";
import "./button-outline.styles.scss";

class ButtonOutline extends Component {
  render() {
    const { text } = this.props;
    return <button className="btn--outline--light" onClick={(e) => console.log("hi")}>{text}</button>;
  }
}

export default ButtonOutline;
