import "./category-preview.styles.scss";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context/categories.context";
import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import HeadingOneSecondary from "../../../core-components/headings/heading-one-secondary/heading-one-secondary.component";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="category-root-container">
      <div className="shopbycat-heading-container">
        <HeadingOnePrimary>Shop by category</HeadingOnePrimary>
      </div>
      <div className="category-container">
        {Object.keys(categories).map((title) => (
          <div key={title} className="category-heading-container">
            <Link to={`${title}`}>
              <HeadingOneSecondary>{title.toUpperCase()}</HeadingOneSecondary>
            </Link>
            <div className="category-product-container">
              {categories[title].map((product, idx) => {
                if (idx < 4) {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                    ></ProductCard>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
