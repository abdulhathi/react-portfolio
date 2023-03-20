import "./heading-one-secondary.styles.scss";

const HeadingOneSecondary = (props) => {
  const { text } = props;
  const children = props["children"];

  return (
    <h1 className="header--secondary--primary">
      {text}
      {children}
    </h1>
  );
};

export default HeadingOneSecondary;
