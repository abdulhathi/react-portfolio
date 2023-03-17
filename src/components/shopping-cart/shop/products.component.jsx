import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component";
import "./products.styles.scss";
import ProductCard from "./product-card/product-card.component";
import { useContext } from "react";
import { ProductsContext } from "../../../context/products.context";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-root-container">
      <div className="products-heading-container">
        <HeadingOnePrimary>Shop products</HeadingOnePrimary>
        <HeadingThree>
          Please find your best item from the below list.
        </HeadingThree>
      </div>
      <div className="products-list-container">
        {products.map((product) => {
          const { id } = product;
          return <ProductCard key={id} product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default Products;
