import InputTextPrimary from "../../../core-components/Input/input-text-primary/input-text-primary.component";
import ButtonPrimaryMini from "../../../core-components/buttons/button-primary-mini/button-primary-mini.component";
import "./add-todo.styles.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../../store/todo/todo.actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const todoObj = {
    name: "",
    description: "",
    isCompleted: false,
  };
  const [todo, setTodo] = useState(todoObj);
  const { name, description, isCompleted } = todo;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    dispatch(createTodo(todo));
  };

  return (
    <form className="addtodo-container" onSubmit={addTodo}>
      <InputTextPrimary
        placeholder="Name"
        required
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleOnChange}
        className="add-todo-textbox"
      ></InputTextPrimary>
      <InputTextPrimary
        placeholder="Todo Description"
        required
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={handleOnChange}
        className="add-todo-textbox"
      ></InputTextPrimary>
      <ButtonPrimaryMini className="add-btn">Add</ButtonPrimaryMini>
    </form>
  );
};
