import "./todo-item.styles.scss";
import HeadingOneSecondary from "../../../core-components/headings/heading-one-secondary/heading-one-secondary.component";
import { removeTodo, completedTodo } from "../../../store/todo/todo.actions.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { DisplayAlert } from "../../../thunks/display-alert.thunk";
import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(props.todo);
  const { name, description, isCompleted } = todo;

  const handleTodoCompleted = (event) => {
    //event.preventDefault();
    const { name, checked } = event.target;
    const currTodo = { ...todo, [name]: checked };
    setTodo(currTodo);
    // console.log(currTodo);
    dispatch(completedTodo(currTodo));
  };

  const onRemoveTodo = (event) => {
    dispatch(removeTodo(todo));
  };

  const onHandleDisplayAlert = (event) => {
    event.preventDefault();
    dispatch(DisplayAlert(name));
  };
  return (
    <div className="todo-item">
      <ButtonPrimaryMini onClick={onHandleDisplayAlert}>
        Show alert
      </ButtonPrimaryMini>
      <HeadingOneSecondary>{name}</HeadingOneSecondary>
      <p>{description}</p>
      <input
        type="checkbox"
        name="isCompleted"
        id="isCompleted"
        checked={isCompleted}
        onChange={handleTodoCompleted}
      />
      <span
        className="fa fa-trash todo-btn-delete"
        aria-hidden="true"
        title="Delete"
        onClick={onRemoveTodo}
      ></span>
    </div>
  );
};

export default TodoItem;
