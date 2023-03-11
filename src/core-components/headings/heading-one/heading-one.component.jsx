import { Component } from "react";
import "./heading-one.styles.scss";

class HeadingOne extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="h1--header--primary">{text}</h1>;
  }
}

export default HeadingOne;
