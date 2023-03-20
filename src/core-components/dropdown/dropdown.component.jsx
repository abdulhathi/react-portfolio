import "./dropdown.styles.scss";
import { useState } from "react";
import InputTextPrimary from "../Input/input-text-primary/input-text-primary.component";

const Dropdown = (props) => {
  // const [selectedItemValue, setSelectedItemValue] = useState(null);
  // const [selectedItemName, setSelectedItemName] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const { items, selectedName, selectedValue } = props;
  return (
    <div className="dropdown-root-container">
      <InputTextPrimary
        {...props}
        onMouseUp={(e) => {
          console.log(showDropDown);
          setShowDropDown(true);
        }}
      ></InputTextPrimary>
      <div className="dropdown-container">
        {items.map(({ name, value }) => {
          // console.log(name, value);
          return (
            <div
              className="dropdown-item-container"
              key={name}
              onClick={(event) => {
                selectedName = name;
                selectedValue = value;
              }}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
