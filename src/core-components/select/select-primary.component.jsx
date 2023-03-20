import "./select-primary.styles.scss";

const SelectPrimary = (props) => {
  const items = props.items;
  return (
    <select className="select-primary" {...props}>
      <option>Select an item</option>
      {items && items.map(({ name, value }) => {
        return (
          <option key={name} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectPrimary;
