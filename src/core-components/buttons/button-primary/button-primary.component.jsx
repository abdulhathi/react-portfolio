import "./button-primary.styles.scss";

const ButtonPrimary = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <button className="btn--primary" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default ButtonPrimary;
