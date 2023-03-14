import "./heading-two-primary.styles.scss";

const HeadingTwoPrimary = (props) => {
  const { text } = props;
  return <h2 className="h2--primary">{text}</h2>;
};

export default HeadingTwoPrimary;
