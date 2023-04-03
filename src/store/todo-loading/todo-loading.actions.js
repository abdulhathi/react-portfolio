import { TODO_LOADING_ACTION_TYPES } from "./todo-loading.types";

export const loadTodoInprogress = () => ({
  type: TODO_LOADING_ACTION_TYPES.LOAD_TODO_INPROGRESS,
});

export const loadTodoSuccess = (todo) => ({
  type: TODO_LOADING_ACTION_TYPES.LOAD_TODO_SUCCESS,
  payload: todo
})

export const loadTodoFailure = () => ({
  type: TODO_LOADING_ACTION_TYPES.LOAD_TODO_FAILURE
})