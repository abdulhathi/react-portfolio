import "./heading-two-primary.styles.scss";

const HeadingTwoPrimary = (props) => {
  const { text, children } = props;
  return (
    <h2 className="h2--primary">
      {text}
      {children}
    </h2>
  );
};

export default HeadingTwoPrimary;
