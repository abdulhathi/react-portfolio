import "./cart-item.styles.scss";

const CartItem = (props) => {
  const { id, name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="cart-Item">
      <img src={imageUrl} alt={name} className="cart-item-image" />
      <div className="cart-price-quantity">
        <span>{name}</span>
        <span>{`${price} x ${quantity}`}</span>
      </div>
    </div>
  );
};

export default CartItem;
