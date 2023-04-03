import HeadingOnePrimary from "../../../core-components/headings/heading-one-primary/heading-one-primary.component";
import { AddTodo } from "../add-todo/add-todo.component";
import "./todo-list.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../../store/todo/todo.selector";
import TodoItem from "../todo-item/todo-item.component";
import { selectTodoLoading } from "../../../store/todo-loading/todo-loading.selector";
import { useEffect } from "react";
import { TodoLoadingThunk } from "../../../thunks/todo-loading.thunk";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoListData = useSelector(selectTodos);
  const todoLoading = useSelector(selectTodoLoading);

  useEffect(() => {
    dispatch(TodoLoadingThunk());
  }, []);

  const loading = <div>Loading...</div>;
  const todoContent = (
    <div className="todo-list-container">
      <HeadingOnePrimary>To do List</HeadingOnePrimary>
      <div className="todo-items">
        <AddTodo></AddTodo>
        {todoListData.map((todo) => {
          return <TodoItem key={todo.name} todo={todo}></TodoItem>;
        })}
      </div>
    </div>
  );
  return todoLoading ? loading : todoContent;
};

export default TodoList;
