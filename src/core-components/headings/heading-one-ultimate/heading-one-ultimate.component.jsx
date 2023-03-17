import "./heading-one-ultimate.styles.scss";

const HeadingOneUltimate = (props) => {
  const { text } = props;
  const children = props["children"];
  return (
    <h1 className="header--one--ultimate">
      {text}
      {children}
    </h1>
  );
};

export default HeadingOneUltimate;
