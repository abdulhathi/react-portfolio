import "./input-text-primary.styles.scss";

const InputTextPrimary = ({ name, id, placeholder, type, required, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      className="input-text"
      required={required}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default InputTextPrimary;
