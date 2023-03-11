import { Component } from "react";
import "./heading-two.styles.scss";

class HeadingTwo extends Component {
  render() {
    const {text} = this.props
    return <h2 className="h2--secondary">{text}</h2>;
  }
}

export default HeadingTwo;
