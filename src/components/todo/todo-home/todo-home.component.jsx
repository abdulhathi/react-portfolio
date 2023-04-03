import NavLogo from "../../navbar/nav-logo/nav-logo.component";
import NavMenuPopup from "../../navbar/nav-menu-popup/nav-menu-popup.component";
import { Outlet, Link } from "react-router-dom";
import NavMenuList from "../../../data/todo-menu.json";
import "./todo-home.styles.scss";
import NavTogglerPrimary from "../../navbar/nav-toggler-primary/nav-toggler-primay.component";

const TodoHome = () => {
  return (
    <div>
      <div className="todo-list-menu">
        <Link>
          <NavLogo>Todo list</NavLogo>
        </Link>
        <NavTogglerPrimary></NavTogglerPrimary>
        <NavMenuPopup navMenuList={NavMenuList}></NavMenuPopup>
      </div>
      <Outlet />
    </div>
  );
};

export default TodoHome;
