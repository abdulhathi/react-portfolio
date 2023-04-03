import App from "../App";
import { UserProvider } from "../provider/user.provider";
import { NavMenuListProvider } from "../provider/nav-menu-list.provider";
import { ProductsProvider } from "../provider/products.provider";
import { CartPopupProvider } from "../provider/cart-popup.provider";
import { CategoriesProvider } from "../provider/categories.provider";

const ReactContext = () => {
  return (
    <UserProvider>
      <NavMenuListProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <CartPopupProvider>
              <App />
            </CartPopupProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </NavMenuListProvider>
    </UserProvider>
  );
};

export default ReactContext;
