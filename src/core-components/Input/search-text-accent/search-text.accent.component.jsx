import { Component } from "react";
import "./search-text-accent.styles.scss";
import ButtonPrimary from "../../buttons/button-primary/button-primary.component";

class SearchTextAccent extends Component {
  render() {
    const { onSearchHandler } = this.props;
    return (
      <div className="search-Container">
        <input
          type="search"
          className="input"
          onChange={onSearchHandler}
        ></input>
        <ButtonPrimary text="Search"></ButtonPrimary>
      </div>
    );
  }
}
export default SearchTextAccent;
