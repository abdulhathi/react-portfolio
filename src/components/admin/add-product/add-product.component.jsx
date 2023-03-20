import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import "./add-product.styles.scss";
import InputTextPrimary from "../../../core-components/Input/input-text-primary/input-text-primary.component";
import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import { useState } from "react";
import {
  getDocumentsByCollection,
  getCollections,
} from "../../../utils/firestore-utils";
import SelectPrimary from "../../../core-components/select/select-primary.component";

const ProductCategoryObject = {
  productGroupName: "",
  products: [],
};
const ProductObject = {
  name: "",
  imageUrl: "",
  price: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(ProductObject);
  const [documents, setDocuments] = useState([]);

  const { name, imageUrl, price } = { ...product };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // console.log(newProduct);
    setProduct({ ...product, [name]: value });
  };
  const onsubmitHandler = (event) => {
    event.preventDefault();
    // console.log(product);
    // AddObjectToCollection(product.collectionKey, product.document);
  };

  const onCollectionChange = async (event) => {
    const value = event.target.value.toLowerCase();
    // console.log(value);
    // const documents = await getCollections(value);
    // console.log(documents);
    // const items = documents.map(({ name }) => {
    // return { name: name, value: name };
    // });
    // setDocuments(items);
    // const docsTitle = documents.for

    getDocumentsByCollection(value);
  };

  return (
    <div className="addproduct-container">
      <HeadingOnePrimary>AddProdct</HeadingOnePrimary>
      <form className="addproduct-form" onSubmit={onsubmitHandler}>
        <SelectPrimary
          required
          type="text"
          id="collectionKey"
          name="collectionKey"
          placeholder="Collection Name"
          autoComplete="off"
          onChange={onCollectionChange}
          items={[
            { name: "Products", value: "products" },
            { name: "Services", value: "services" },
            { name: "Solutions", value: "solutions" },
            { name: "Healthcare", value: "healthcare" },
            { name: "Trours & Travel", value: "troursandtravel" },
            { name: "Transportation", value: "transportation" },
          ]}
        ></SelectPrimary>
        <SelectPrimary
          required
          type="text"
          id="documentTitle"
          name="documentTitle"
          onChange={onChangeHandler}
          placeholder="Document title"
          items={documents}
        ></SelectPrimary>
        <InputTextPrimary
          required
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChangeHandler}
          placeholder="Product Name"
        ></InputTextPrimary>
        <InputTextPrimary
          required
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={onChangeHandler}
          placeholder="Image URL"
        ></InputTextPrimary>
        <InputTextPrimary
          required
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={onChangeHandler}
          placeholder="Price"
        ></InputTextPrimary>

        <div className="btn-container">
          <ButtonPrimaryMini type="submit">Save</ButtonPrimaryMini>
          <ButtonPrimaryMini type="reset">Reset</ButtonPrimaryMini>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
