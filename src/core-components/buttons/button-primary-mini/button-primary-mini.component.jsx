import "./button-primary-mini.styles.scss";

const ButtonPrimaryMini = ({ children, icon, className, onClick }) => {
  // console.log(onClick);
  return (
    <div>
      <button onClick={onClick} className={`${className} btn-mini-primary`}>
        {icon ? <img className="searchIcon" src={icon} alt={children} /> : ""}
        {children}
      </button>
    </div>
  );
};

export default ButtonPrimaryMini;
