import "./heading-three.styles.scss";

const HeadingThree = (props) => {
  const { text, isPrimary, children } = props;
  // console.log("HeadingThree", isPrimary);
  return (
    <h3
      className={isPrimary === undefined ? "h3--text--primary" : "h3--primary"}
    >
      {text}
      {children}
    </h3>
  );
};

export default HeadingThree;
