import { Component } from "react";
import "./button-outline.styles.scss";

class ButtonOutline extends Component {
  render() {
    const { text } = this.props;
    return <button className="btn--outline--light">{text}</button>;
  }
}

export default ButtonOutline;
