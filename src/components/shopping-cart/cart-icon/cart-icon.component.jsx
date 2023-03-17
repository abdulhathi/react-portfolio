import "./cart-icon.styles.scss";
import { ReactComponent as Cart } from "../../../assets/icon/shopping-bag.svg";
import { useContext } from "react";
import { CartPopupContext } from "../../../context/cart-popup.context";

const CartIcon = (props) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartPopupContext);
  return (
    <div
      className="cart-icon-container"
      {...props}
      onClick={(event) => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <Cart className="cart-icon-image"></Cart>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
