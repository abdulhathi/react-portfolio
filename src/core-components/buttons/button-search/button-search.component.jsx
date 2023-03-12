import "./button-search.styles.scss";
import SearchSolid from "../../../assets/icon/search-solid.svg";

const ButtonSearch = (props) => {
  const { text } = props;
  return (
    <div>
      <button className="btn--primary">
        <img className="searchIcon" src={SearchSolid} alt="searchIcon" />
        {text}
      </button>
    </div>
  );
};

export default ButtonSearch;
