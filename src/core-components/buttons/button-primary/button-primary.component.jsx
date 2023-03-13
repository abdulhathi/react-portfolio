import "./button-primary.styles.scss";

const ButtonPrimary = (props) => {
  return (
    <div>
      <button className="btn--primary" {...props}>
        {"icon" in props ? (
          <img className="searchIcon" src={props["icon"]} alt={props["text"]} />
        ) : (
          ""
        )}
        {props["text"]}
      </button>
    </div>
  );
};

export default ButtonPrimary;
