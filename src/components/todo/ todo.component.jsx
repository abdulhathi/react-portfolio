import { Routes, Route } from "react-router-dom";
import TodoHome from "./todo-home/todo-home.component";
import TodoList from "./todo-list/todo-list.component";

const Todo = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoHome />}>
          <Route path="home" element={<TodoHome />}></Route>
          <Route path="todo-list" element={<TodoList />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Todo;
