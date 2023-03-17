import "./heading-two.styles.scss";

const HeadingTwo = (props) => {
  const { text } = props;
  return (
    <h2 className="h2--secondary">
      {text}
      {props.children}
    </h2>
  );
};

export default HeadingTwo;
