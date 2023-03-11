import { Component } from "react";
import "./button-light.styles.scss";

class ButtonLight extends Component {
  render() {
    const { text } = this.props;
    return <button className="btn--light">{text}</button>;
  }
}

export default ButtonLight;
