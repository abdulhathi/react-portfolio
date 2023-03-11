import './UnOrderedList.styles.scss'

const UnOrderedList = ({ list }) => {
  // console.log(list);
  return (
    // <div></div>
    <ul className="uolist">
      {list.map(({ key, value }) => (
        <li key={key} className="uolist-item">
          <span className="fa--primary fa-solid fa-check"></span>
          <span className='key-container'>{key}</span>: 
          <span> {value}</span>
        </li>
      ))}
    </ul>
  );
};

export default UnOrderedList;
