import "./cart-popup.styles.scss";
import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import { useContext } from "react";
import { CartPopupContext } from "../../../context/cart-popup.context";
import CartItem from "../cart-item/cart-item.component";

const CartPopup = () => {
  const { cartItems } = useContext(CartPopupContext);
  const cartItemsArr = [...cartItems.keys()];
  return (
    <div className="cartpopup-container">
      <div className="cartitem-container">
        {cartItemsArr.map((cartItem) => {
          const currCartItem = {
            ...cartItem,
            quantity: cartItems.get(cartItem),
          };
          console.log(currCartItem);
          return (
            <CartItem key={cartItem.id} cartItem={currCartItem}></CartItem>
          );
        })}
      </div>
      <ButtonPrimaryMini>Checkout</ButtonPrimaryMini>
    </div>
  );
};

export default CartPopup;
