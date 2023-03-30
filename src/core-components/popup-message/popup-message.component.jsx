import "./popup-message.styles.scss";

const PopupMessage = (props) => {
  const { onCloseMessage } = { ...props };
  return (
    <div className="popup-message-root-container">
      <div className="popup-xmark" onClick={onCloseMessage}>
        X
      </div>
      <div className="popup-message-container">{props["children"]}</div>
    </div>
  );
};

export default PopupMessage;
