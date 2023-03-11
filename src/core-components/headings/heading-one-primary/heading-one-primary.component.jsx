import { Component } from "react";
import "./heading-one-primary.styles.scss";

class HeadingOnePrimary extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="header--one--primary">{text}</h1>;
  }
}

export default HeadingOnePrimary;
