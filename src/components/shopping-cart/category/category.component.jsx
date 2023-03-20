import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingThree from "../../../core-components/headings/heading-three/heading-three.component";
import "./category.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  // console.log();
  const products = categories[category];

  return (
    <div className="products-root-container">
      <div className="products-heading-container">
        <HeadingOnePrimary>{category.toUpperCase()}</HeadingOnePrimary>
        <HeadingThree>
          Please find your best item from the below list.
        </HeadingThree>
      </div>
      <div className="products-list-container">
        {products &&
          products.map((product) => {
            const { id } = product;
            return <ProductCard key={id} product={product}></ProductCard>;
          })}
      </div>
    </div>
  );
};

export default Category;
