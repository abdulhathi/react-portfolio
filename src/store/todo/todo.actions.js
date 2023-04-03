import { TODO_ACTION_TYPES } from "./todo.types";

export const createTodo = (todo) => ({
  type: TODO_ACTION_TYPES.CREATE_TODO,
  payload: todo
});

export const removeTodo = (todo) => ({
  type: TODO_ACTION_TYPES.REMOVE_TODO,
  payload: todo
})

export const completedTodo = (todo) => ({
  type: TODO_ACTION_TYPES.COMPLETED_TODO,
  payload: todo
});
