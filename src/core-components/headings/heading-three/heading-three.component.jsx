import { Component } from "react";
import "./heading-three.styles.scss";

class HeadingThree extends Component {
  render() {
    const { text, isPrimary } = this.props;
    // console.log("HeadingThree", isPrimary);
    return (
      <h3
        className={
          isPrimary === undefined ? "h3--text--primary" : "h3--primary"
        }
      >
        {text}
      </h3>
    );
  }
}

export default HeadingThree;
