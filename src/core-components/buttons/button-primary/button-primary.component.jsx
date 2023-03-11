import { Component } from "react";
import "./button-primary.styles.scss";
import SearchSolid from "../../../assets/images/search.svg";

class ButtonPrimary extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <button className="btn--primary">
          <img className="searchIcon" src={SearchSolid} alt="searchIcon" />
          {text}
        </button>
      </div>
    );
  }
}

export default ButtonPrimary;
