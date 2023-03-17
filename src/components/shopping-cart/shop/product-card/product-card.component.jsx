import "./product-card.styles.scss";

const ProductCard = (props) => {
  const {product} = props
  const { id, name, imageUrl, price } = product
  return (
    <div className="product">
      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-detail">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
