import "./text-area-primary.styles.scss";

const TextAreaPrimary = (props) => {
  return (
    <textarea
      className="text-area"
      {...props}
      // type={type}
      // placeholder={placeholder}
      // name={name}
      // id={id}
      // required={required}
      // value={value}
      // onChange={onChange}
    ></textarea>
  );
};

export default TextAreaPrimary;
