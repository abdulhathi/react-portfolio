import "./cart-popup.styles.scss";
import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import { useContext } from "react";
import { CartPopupContext } from "../../../context/cart-popup.context";
import CartItem from "../cart-item/cart-item.component";

const CartPopup = () => {
  const { cartItems, subTotal } = useContext(CartPopupContext);
  return (
    <div className="cartpopup-container">
      <div className="cartitem-container">
        {[...cartItems.keys()].map((key) => {
          const cartItem = cartItems.get(key);
          return <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>;
        })}
      </div>
      <div className="btn-checkout-subtotal">
        <ButtonPrimaryMini>Checkout</ButtonPrimaryMini>
        <span>Sub total: <span className="cart-sub-total">${subTotal}</span></span>
      </div>
    </div>
  );
};

export default CartPopup;
