import { loadTodoInprogress, loadTodoSuccess, loadTodoFailure } from "../store/todo-loading/todo-loading.actions"
import { DisplayAlert } from "./display-alert.thunk";

export const TodoLoadingThunk = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodoInprogress);
    const response = await fetch("https://dummyjson.com/todos?limit=300");
    const todos = await response.json();
    console.log(todos)
    dispatch(loadTodoSuccess(todos))
  } catch (error) {
    dispatch(loadTodoFailure);
    dispatch(DisplayAlert(error))
  }
}