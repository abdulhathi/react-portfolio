import "./input-text-primary.styles.scss";

const InputTextPrimary = (props) => {
  return (
    <input
      {...props}
      className={`${props["className"]} input-text`}
      // type={type}
      // placeholder={placeholder}
      // name={name}
      // id={id}
      // required={required}
      // value={value}
      // onChange={onChange}
    ></input>
  );
};

export default InputTextPrimary;
