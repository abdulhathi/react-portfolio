import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartPopupContext } from "../../../context/cart-popup.context";

const ProductCard = (props) => {
  const { setCartItems } = useContext(CartPopupContext);
  const { product } = props;
  const { id, name, imageUrl, price } = product;
  return (
    <div className="product">
      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-detail">
        <span className="product-name">{name}</span>
        <ButtonPrimaryMini onClick={(event) => setCartItems(product)}>
          Add to cart
        </ButtonPrimaryMini>
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
