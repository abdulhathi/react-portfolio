import "./button-secondary.styles.scss";

const ButtonSecondary = (props) => {
  return (
    <div>
      <button className="btn--secondary" {...props}>
        {props["text"]}
      </button>
    </div>
  );
};

export default ButtonSecondary;
