import "./cart-popup.styles.scss";
import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";

const CartPopup = () => {
  return (
    <div className="cartpopup-container">
      <div className="cartitem-container"></div>
      <ButtonPrimaryMini>Checkout</ButtonPrimaryMini>
    </div>
  );
};

export default CartPopup;
