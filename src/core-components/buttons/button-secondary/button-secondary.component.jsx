import "./button-secondary.styles.scss";

const ButtonSecondary = (props) => {
  return (
    <div>
      <button className="btn--secondary" {...props}>
        {props["text"] || props["children"]}
      </button>
    </div>
  );
};

export default ButtonSecondary;
