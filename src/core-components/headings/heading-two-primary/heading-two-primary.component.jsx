import "./heading-two-primary.styles.scss";

const HeadingTwoPrimary = (props) => {
  const { text, children, className } = props;
  return (
    <h2 className={`${className} h2--primary`}>
      {text}
      {children}
    </h2>
  );
};

export default HeadingTwoPrimary;
