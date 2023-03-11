import { Component } from "react";
import "./heading-one-ultimate.styles.scss";

class HeadingOneUltimate extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="header--one--ultimate">{text}</h1>;
  }
}

export default HeadingOneUltimate;
