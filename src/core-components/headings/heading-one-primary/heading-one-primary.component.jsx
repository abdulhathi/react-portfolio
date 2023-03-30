import { Component } from "react";
import "./heading-one-primary.styles.scss";

const HeadingOnePrimary = (props) => {
  const { text } = props;
  const children = props["children"];
  // console.log(props);
  return (
    <h1 className="header--one--primary">
      {text}
      {children}
    </h1>
  );
};

export default HeadingOnePrimary;
