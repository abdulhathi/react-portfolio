import "./button-secondary.styles.scss";

const ButtonSecondary = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <button className="btn--secondary" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ButtonSecondary;
